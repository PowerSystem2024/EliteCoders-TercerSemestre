import sqlite3  # Módulo estándar para bases de datos SQLite

class Progress:
    def __init__(self, db_path='data/game_data.db'):  # Ruta a la base
        self.conn = sqlite3.connect(db_path)
        self.create_table()

    def create_table(self):
        self.conn.execute('''
            CREATE TABLE IF NOT EXISTS progress (
                player_id INTEGER PRIMARY KEY,
                level INTEGER DEFAULT 1,
                score INTEGER DEFAULT 0,
                lives INTEGER DEFAULT 3
            )
        ''')  # Tabla para guardar el progreso del jugador
        self.conn.execute('''
            CREATE TABLE IF NOT EXISTS max_score (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                score INTEGER DEFAULT 0
            )
        ''')
        self.conn.commit()

    def save_progress(self, player_id, level, score, lives):  # Guardar datos
        self.conn.execute('''
            INSERT INTO progress (player_id, level, score, lives)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(player_id) DO UPDATE SET
                level=excluded.level,
                score=excluded.score,
                lives=excluded.lives
        ''', (player_id, level, score, lives))  # Insertar o actualizar
        self.conn.commit()

    def load_progress(self, player_id):  # Cargar datos de un jugador
        cursor = self.conn.cursor()
        cursor.execute('''
            SELECT level, score, lives FROM progress WHERE player_id=?
        ''', (player_id,))
        return cursor.fetchone() or (1, 0, 3)  # Si no hay datos, usar valores por defecto

    def get_max_score(self):
        cursor = self.conn.cursor()
        cursor.execute('SELECT score FROM max_score WHERE id=1')
        row = cursor.fetchone()
        return row[0] if row else 0

    def set_max_score(self, score):
        self.conn.execute('''
            INSERT INTO max_score (id, score)
            VALUES (1, ?)
            ON CONFLICT(id) DO UPDATE SET score=excluded.score
        ''', (score,))
        self.conn.commit()

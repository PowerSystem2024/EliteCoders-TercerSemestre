# Importamos para que funcione la conexion
import psycopg2

# creamos la conecion con los parametros
conexion= psycopg2.connect(
    user='postgres',
    password='201608',
    host='localhost',
    port='5432',
    database='test_db'
)
# usamos el try para un mejor manejo
try:
    with conexion:
        with conexion.cursor() as cursor:

            # Definimos la sentencia a ejecutar
            sentencia= 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            # Esto es una tupla
            valores=(("Carmen", "Perez","carmen@gmail.com"),
                ("Rio", "Azul","rio@gmail.com"),
                ("Roberto", "Herman","rober@gmail.com")) # Esto es una tupla de tuplas
            
            # Esto es para ejecutar la sentencia
            cursor.executemany(sentencia, valores)

            # Esto guarda los cambios en la base datos
            # conexion.commit() Esto nos necesario por que tenemos un with
            
            # Contamos las filas
            resgistros_insertados=cursor.rowcount
            print(f"Los registros insertados son: {resgistros_insertados}")

# Capturar error
except Exception as e:
    print(f"Ocurrio un error: {e}")

finally: 
    # Para cerrar la conexion
    conexion.close()



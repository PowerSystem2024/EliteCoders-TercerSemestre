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
            sentencia= 'SELECT * FROM persona WHERE id_persona = %s'
            id_persona= input("Digite un nuemero para el id_persona: ")
            # Llamamos a execute para ejecutar
            cursor.execute(sentencia,(id_persona,))

            # Recuperamos los registros para todos los regustros
            resgistros=cursor.fetchone()
            print(resgistros)
# Capturar error
except Exception as e:
    print(f"Ocurrio un error: {e}")

finally: 
    # Para cerrar la conexion
    conexion.close()




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
            sentencia= 'SELECT * FROM persona WHERE id_persona IN %s'
            entrada= input("Digite los id_personas a buscar(serparados poer coma): ")
            # Esta funcion elimina las comas y devuelbe numeros convirteindolo en tupla previamente
            llaves_primarias= (tuple(entrada.split(", ")),)
            # Llamamos a execute para ejecutar
            cursor.execute(sentencia, llaves_primarias)

            # Recuperamos los registros para todos los regustros
            resgistros=cursor.fetchall()
            # Recorremos las tuplas
            for resgistro in resgistros:
               print(resgistro)

# Capturar error
except Exception as e:
    print(f"Ocurrio un error: {e}")

finally: 
    # Para cerrar la conexion
    conexion.close()



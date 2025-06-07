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
    # Con with se hace el guardado automatico
    with conexion:
        with conexion.cursor() as cursor:
            # El %s sirve como marcador de posicion para qe luego sera remplazado con otros valores
            sentencia='DELETE FROM persona WHERE id_persona IN %s'
            entrada= input('Digite los numeros de registros a eliminar(separados por coma): ')
            valores=(tuple(entrada.split(', ')),)# es una tupla de tuplas
            # Esto es para ejecutar la sentencia
            cursor.execute(sentencia, valores)

            # Contamos las filas
            resgistros_eliminados=cursor.rowcount
            print(f"Los registros eliminados son: {resgistros_eliminados}")

# Capturar error
except Exception as e:
    print(f"Ocurrio un error: {e}")

finally: 
    # Para cerrar la conexion
    conexion.close()
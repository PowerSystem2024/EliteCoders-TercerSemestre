import psycopg2 as bd

conexion = bd.connect(user = "postgres", password = "Enzo2612", host = "127.0.0.1", port = "5432",database = "test_bd")

try:
    conexion.autocommit = False #esto no deberia estar (no es buena practica)
    cursor = conexion.cursor()
    sentecia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Jorge', 'Prol', 'jprol@mail.com')
    cursor.execute(sentecia, valores)

    sentencia = ('UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s' )
    valores=('Juan', 'Juarez', 'jjuarez@mail.com', 1)
    cursor.execute(sentencia, valores)

    conexion.commit() #commit manual, se cierra la transaccion
    print('Termina la transacción')

except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error, se hizo un rollback: {e}')

finally:
        conexion.close()
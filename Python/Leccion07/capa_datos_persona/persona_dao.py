class PersonaDAO:
    '''
    DAO significa : DATA ACCESS OBJECT
    CRUD:
        create -> insertar
        read -> seleccionar
        update -> actualizar
        delete -> eliminar
    '''

    _SELECCIONAR = 'SELECT * FROM persona order by id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'


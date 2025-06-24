from capa_datos_persona.conexion import Conexion
from capa_datos_persona.Persona import Persona
from logger_base import log

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

    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            personas = []
            for registro in registros:
                persona = Persona(registro[0], registro[1], registro[2], registro[3])
                personas.append(persona)
            return personas

    @classmethod
    def insertar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f'Persona Insertada: {persona}')
            return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
            cursor.execute(cls._ACTUALIZAR, valores)
            log.debug(f'Persona actualizada: {persona}')
            return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.id_persona,)
            cursor.execute(cls._ELIMINAR, valores)
            log.debug(f'Persona eliminada: {persona}')
            return cursor.rowcount


if __name__ == '__main__':
    #Eliminar registro
    persona1 = Persona(id_persona=1)
    persona_eliminada = PersonaDAO.eliminar(persona1)
    log.debug(f'Persona eliminada: {persona_eliminada}')

    #Actualizar registro
    persona1 = Persona(1, 'Juan', 'Pérez', 'nuevo@gmail.com')
    persona_actualizada = PersonaDAO.actualizar(persona1)
    log.debug(f'Persona actualizada: {persona_actualizada}')

    #Insertar registro
    persona1 = Persona(nombre='Pepe', apellido='González', email='pepe@gmail.com')
    persona_insertada = PersonaDAO.insertar(persona1)
    log.debug(f'Persona insertada: {persona_insertada}')

    #Seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
#Prevenir errores
from Python.Leccion01.NumerosIgualesException import NumerosIgualesException
resultado = None

try:

    a = int(input('Digite el primer numero: '))
    b = int(input('Digite el segundo numero: '))
    if a == b:
        raise NumerosIgualesException('Son iguales')
    resultado = a / b #modificamos
except TypeError as e:
    print(f'TypeError - currió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print("No se arrojó ninguna excepción")
finally: #Siempre se va a ejecutar
    print("Ejecución de este bloque finally.")

print(f'EL resultado es: {resultado}')
print('seguimos...')

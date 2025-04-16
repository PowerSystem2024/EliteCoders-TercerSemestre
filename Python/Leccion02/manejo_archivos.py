# Declaramos una variable

try:
    archivo = open('prueba.txt', 'w') # La w es de weite que signeifica escirbir
    archivo.write('Programamos con diferentes tipos de archvos, ahora en txt.\n')
    archivo.write('Con esto terminamos.\n')
except Exception as e:
    print(e)
finally:#Siempre se va a ejecutar
    archivo.close # Con esto se debe cerrar el archivo
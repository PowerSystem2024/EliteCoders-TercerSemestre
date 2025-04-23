# Declaramos una variable

try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # La w es de weite que signeifica escirbir
    archivo.write('Programamos con diferentes tipos de archvos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecucion, producción  \n')
    archivo.write('las letras son:\nr read leer, \na append agregar, \nw write escribir, \nx crea un archivo')
    archivo.write('\nt esta es para texto, \nb para binario, \nw+ lee y escribe son iguales r+\n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos.\n')
except Exception as e:
    print(e)
finally:#Siempre se va a ejecutar
    archivo.close # Con esto se debe cerrar el archivo
# archivo.write('Todo qudo perfecto'): este es un error
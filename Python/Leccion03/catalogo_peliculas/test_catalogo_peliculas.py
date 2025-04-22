from dominio.pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas


def mostrar_menu():
    print("\n** Menú de Catálogo de Películas **")
    print("1) Agregar película")
    print("2) Listar películas")
    print("3) Eliminar archivo de películas")
    print("4) Salir")


def main():
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción (1-4): ")

        if opcion == "1":
            nombre = input("Ingrese el nombre de la película: ")
            pelicula = Pelicula(nombre)
            CatalogoPeliculas.agregar_pelicula(pelicula)
            print(f"Película '{nombre}' agregada con éxito.")

        elif opcion == "2":
            print("\nListado de películas:")
            CatalogoPeliculas.listar_peliculas()

        elif opcion == "3":
            confirmacion = input("¿Está seguro de que desea eliminar el archivo de películas? (s/n): ")
            if confirmacion.lower() == 's':
                CatalogoPeliculas.eliminar()
            else:
                print("Operación cancelada.")

        elif opcion == "4":
            print("Saliendo del programa...")
            break

        else:
            print("Opción no válida. Intente de nuevo.")


if __name__ == "__main__":
    main()

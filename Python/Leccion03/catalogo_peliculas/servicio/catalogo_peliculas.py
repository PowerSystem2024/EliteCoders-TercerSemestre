from dominio.pelicula import Pelicula
import os

class CatalogoPeliculas:
    ruta_archivo = "peliculas.txt"

    @staticmethod
    def agregar_pelicula(pelicula):
        try:
            with open(CatalogoPeliculas.ruta_archivo, "a", encoding="utf-8") as archivo:
                archivo.write(f"{pelicula.nombre}\n")
            print(f"Película '{pelicula.nombre}' agregada al catálogo.")
        except Exception as e:
            print(f"Error al agregar película: {e}")

    @staticmethod
    def listar_peliculas():
        try:
            with open(CatalogoPeliculas.ruta_archivo, "r", encoding="utf-8") as archivo:
                peliculas = archivo.readlines()
                if not peliculas:
                    print("No hay películas en el catálogo.")
                else:
                    print("Películas en el catálogo:")
                    for pelicula in peliculas:
                        print(pelicula.strip())
        except FileNotFoundError:
            print("Archivo no encontrado. No hay películas registradas.")
        except Exception as e:
            print(f"Error al listar películas: {e}")

    @staticmethod
    def eliminar():
        try:
            if os.path.exists(CatalogoPeliculas.ruta_archivo):
                os.remove(CatalogoPeliculas.ruta_archivo)
                print("Archivo de películas eliminado.")
            else:
                print("No existe archivo de películas para eliminar.")
        except Exception as e:
            print(f"Error al eliminar archivo: {e}")

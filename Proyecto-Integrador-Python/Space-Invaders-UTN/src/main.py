import sys
import os
import pygame
from settings import *           # Importa constantes de configuración (pantalla, FPS, etc.)
from core.game import Game       # Importa la clase principal del juego
from core.hub import show_hub    # Importa la función del HUB

def add_project_root_to_path():
    """
    Agrega la raíz del proyecto a sys.path para permitir importaciones relativas.
    """
    base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    if base_path not in sys.path:
        sys.path.append(base_path)

def initialize_pygame():
    """
    Inicializa Pygame y su mixer, manejando posibles errores.
    """
    try:
        pygame.init()
        pygame.mixer.init(frequency=44100, size=-16, channels=2, buffer=512)
    except pygame.error as e:
        print(f"Error al iniciar Pygame: {e}")
        sys.exit(1)

def run_game_loop(game, clock):
    """
    Ejecuta el loop principal del juego, manejando eventos y actualizando la pantalla.

    Args:
        game (Game): Instancia del juego principal.
        clock (pygame.time.Clock): Reloj para controlar los FPS.
    """
    running = True
    while running:
        clock.tick(FPS)
        for event in pygame.event.get():
            if event.type == pygame.QUIT or (event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE):
                running = False
        game.update()
        game.draw()
        pygame.display.flip()

def main():
    """
    Función principal que inicializa el juego y ejecuta el loop principal.
    """
    add_project_root_to_path()
    initialize_pygame()

    # Crea la ventana del juego con tamaño definido en settings.py
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Space Invaders - UTN")

    # Mostrar HUB antes de iniciar el juego (pantalla de inicio con opciones)
    if not show_hub(screen):
        pygame.quit()
        return

    # Reloj para controlar los FPS
    clock = pygame.time.Clock()

    # Instancia el juego principal
    game = Game(screen)

    # Ejecuta el loop principal del juego
    run_game_loop(game, clock)

    # Finaliza correctamente Pygame al salir
    pygame.quit()

# Llama a main solo si este archivo se ejecuta directamente
if __name__ == "__main__":
    main()

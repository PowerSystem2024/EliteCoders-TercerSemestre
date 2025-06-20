
import pygame
from settings import *           # Importa constantes de configuración (pantalla, FPS, etc.)
from core.game import Game      # Importa la clase principal del juego

def main():
    # Inicializa todos los módulos de Pygame
    pygame.init()

    # Crea la ventana del juego con tamaño definido en settings.py
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Space Invaders - UTN")

    # Reloj para controlar los FPS
    clock = pygame.time.Clock()

    # Instancia el juego principal
    game = Game(screen)

    # Variable principal para controlar el loop
    running = True

    # Loop principal del juego
    while running:
        # Controla el framerate (FPS)
        clock.tick(FPS)

        # Revisa eventos del teclado, mouse, etc.
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False  # Cierra el juego si se presiona la X

        # Actualiza lógica del juego (jugador, enemigos, colisiones, etc.)
        game.update()

        # Dibuja todo en la pantalla
        game.draw()

        # Actualiza la pantalla con todo lo que se dibujó
        pygame.display.flip()

    # Finaliza correctamente Pygame al salir
    pygame.quit()

# Llama a main solo si este archivo se ejecuta directamente
if __name__ == "__main__":
    main()

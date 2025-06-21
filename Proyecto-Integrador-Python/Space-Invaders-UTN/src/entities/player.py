# Clase temporal para el jugador (Alexander la completará)
import pygame

class Player:
    def __init__(self):
        # Crea un rectángulo para representar al jugador (x, y, ancho, alto)
        self.rect = pygame.Rect(300, 500, 50, 30)

    def update(self, keys):
        # Lógica de movimiento a programar por Alexander
        pass

    def draw(self, screen):
        # Dibuja al jugador como un rectángulo verde
        pygame.draw.rect(screen, (0, 255, 0), self.rect)

# Clase temporal de enemigo (Marina la completará)
import pygame

class Enemy:
    def __init__(self, x, y):
        # Rectángulo básico para cada enemigo
        self.rect = pygame.Rect(x, y, 40, 30)

    def update(self):
        # Lógica de movimiento y ataque pendiente
        pass

    def draw(self, screen):
        # Dibuja al enemigo como un rectángulo rojo
        pygame.draw.rect(screen, (255, 0, 0), self.rect)

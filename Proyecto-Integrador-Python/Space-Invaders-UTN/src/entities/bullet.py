# Clase temporal de bala (Marina también lo completa)
import pygame

class Bullet:
    def __init__(self, x, y):
        # Rectángulo para representar la bala
        self.rect = pygame.Rect(x, y, 5, 10)

    def update(self):
        # Movimiento simple hacia arriba
        self.rect.y -= 5

    def draw(self, screen):
        # Dibuja la bala como un rectángulo amarillo
        pygame.draw.rect(screen, (255, 255, 0), self.rect)

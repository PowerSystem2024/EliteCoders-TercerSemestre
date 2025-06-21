import pygame
import random

from src.entities.bullet import Bullet

class Enemy(pygame.sprite.Sprite):
    def __init__(self, x, y, speed=2, health=4):
        super().__init__()
        # Crea un rectángulo para representar al enemigo (x, y, ancho, alto)
        self.rect = pygame.Rect(x, y, 40, 40)
        self.speed = speed
        self.health = health
        self.direction = 1  # 1: derecha, -1: izquierda

    def update(self):
        # Movimiento horizontal
        self.rect.x += self.speed * self.direction

        # Cambio de dirección al llegar al borde de la pantalla
        if self.rect.right >= 800 or self.rect.left <= 0:
            self.direction *= -1
            self.rect.y += 10  # Bajar un poco

    def draw(self, screen):
        # Dibuja al enemigo como un rectángulo rojo
        pygame.draw.rect(screen, (255, 0, 0), self.rect)

    def take_damage(self):
        self.health -= 1
        if self.health <= 0:
            self.kill()  # Elimina al enemigo del grupo de sprites

    def shoot(self, bullet_group, bullet_image):
        # El enemigo dispara una bala hacia abajo
        bullet = Bullet(self.rect.centerx, self.rect.bottom, 1, bullet_image, from_player=False)
        bullet_group.add(bullet)

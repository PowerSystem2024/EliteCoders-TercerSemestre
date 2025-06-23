# Clase temporal para el jugador (Alexander la completará)
import pygame

class Player:
    def __init__(self):
        # Crea un rectángulo para representar al jugador (x, y, ancho, alto)
        self.rect = pygame.Rect(300, 500, 50, 30)
        self.speed = 7
        self.shoot_cooldown = 0  # Frames until next allowed shot

    def update(self, keys):
        # Movimiento izquierda/derecha
        if keys[pygame.K_LEFT] or keys[pygame.K_a]:
            self.rect.x -= self.speed
        if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
            self.rect.x += self.speed
        # Limitar dentro de la pantalla
        self.rect.x = max(0, min(self.rect.x, 800 - self.rect.width))
        # Actualizar cooldown de disparo
        if self.shoot_cooldown > 0:
            self.shoot_cooldown -= 1

    def can_shoot(self):
        return self.shoot_cooldown == 0

    def reset_shoot_cooldown(self):
        self.shoot_cooldown = 15  # 15 frames de espera entre disparos

    def draw(self, screen):
        # Dibuja al jugador como un rectángulo verde
        pygame.draw.rect(screen, (0, 255, 0), self.rect)

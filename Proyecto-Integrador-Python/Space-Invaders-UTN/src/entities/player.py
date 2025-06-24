import pygame
import os

class Player:
    def __init__(self):
        super().__init__()
        base_path = os.path.dirname(__file__)

        # Cargar imagen del jugador
        img_path = os.path.join(base_path, '..', '..', 'assets', 'images', 'player.png')
        img_path = os.path.abspath(img_path)
        self.image = pygame.image.load(img_path).convert_alpha()
        self.image = pygame.transform.scale(self.image, (70, 70))
        self.rect = self.image.get_rect(midbottom=(400, 550))

        # Cargar sonido de disparo
        sound_path = os.path.join(base_path, '..', '..', 'assets', 'sounds', 'shoot.wav')
        sound_path = os.path.abspath(sound_path)

        try:
            self.shoot_sound = pygame.mixer.Sound(sound_path)
            self.shoot_sound.set_volume(0.2)
        except:
            print(f"No se pudo cargar el sonido en {sound_path}")
            # Crear un sonido simple de fallback
            self.shoot_sound = pygame.mixer.Sound(buffer=bytes([128] * 1000))

        self.speed = 7
        self.shoot_cooldown = 0

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

    def shoot(self):
        """Devuelve True si disparó, False si está en cooldown"""
        if self.can_shoot():
            self.shoot_sound.play()
            self.reset_shoot_cooldown()
            return True
        return False

    def reset_shoot_cooldown(self):
        self.shoot_cooldown = 20  # 20 frames de espera entre disparos

    def draw(self, screen):
        screen.blit(self.image, self.rect)
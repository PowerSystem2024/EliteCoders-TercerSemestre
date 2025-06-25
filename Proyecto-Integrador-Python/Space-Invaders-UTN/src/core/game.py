import pygame
import time

from src.core.hud import draw_hud
from src.entities.bullet import Bullet
from src.entities.enemy import Enemy
from src.entities.player import Player
from src.systems.inventory import Inventory
from src.systems.progress import Progress

class Game:
    def __init__(self, screen):
        # Guarda la pantalla para dibujar luego
        self.screen = screen

        # Variables del estado general del juego
        self.level = 1          # Nivel actual
        self.score = 0          # Puntaje del jugador
        self.lives = 3          # Cantidad de vidas
        self.player = Player()  # Instancia del jugador

        # Carga enemigos iniciales según el nivel
        self.enemies = self.load_level(self.level)

        # Lista de disparos activos (jugador o enemigos)
        self.bullets = []

        # Instancia del inventario del jugador
        self.inventory = Inventory()

        self.bullet_image = pygame.Surface((10, 20))
        self.bullet_image.fill((255, 255, 0))  # Yellow bullet

        self.level_up_time = 0
        self.show_level_up = False

        self.progress = Progress()

    def load_level(self, level):
        """
        Carga enemigos según el nivel actual.
        Cada nivel tiene más enemigos y son más rápidos.
        """
        num_enemies = 5 + level  # Más enemigos por nivel
        speed = 2 + level // 2   # Más velocidad por nivel
        enemies = []
        for i in range(num_enemies):
            x = 60 + (i % 10) * 70
            y = 50 + (i // 10) * 60
            enemies.append(Enemy(x, y, speed=speed, health=2+level//2))
        return enemies

    def update(self):
        """
        Lógica del juego que se actualiza cada frame.
        """
        # Captura teclas presionadas
        keys = pygame.key.get_pressed()

        # Actualiza al jugador con las teclas presionadas
        self.player.update(keys)

        # Shooting logic - MODIFICADO PARA USAR EL MÉTODO shoot()
        if keys[pygame.K_SPACE] and self.player.can_shoot():
            if self.player.shoot():  # Esto reproducirá el sonido y devuelve True si disparó
                bullet = Bullet(self.player.rect.centerx, self.player.rect.top, -1,
                              self.bullet_image, speed=7, from_player=True)
                self.bullets.append(bullet)

        # Actualiza cada enemigo
        for enemy in self.enemies[:]:
            enemy.update()
            # Si el enemigo llega al fondo, reduce vidas
            if enemy.rect.bottom >= 600:
                self.lives -= 1
                self.enemies.remove(enemy)
                if self.lives <= 0:
                    self.reset_game()

        # Actualiza cada disparo
        for bullet in self.bullets:
            bullet.update()

        # Controla colisiones entre objetos
        self.handle_collisions()

        # Check for level completion
        if not self.enemies:
            self.level += 1
            self.score += 100  # Bonus for completing level
            self.enemies = self.load_level(self.level)
            self.player.rect.x = 300  # Reset player position
            self.bullets.clear()
            self.show_level_up = True
            self.level_up_time = time.time()
        # Hide level up message after 2 seconds
        if self.show_level_up and time.time() - self.level_up_time > 2:
            self.show_level_up = False

    def draw(self):
        """
        Dibuja todos los elementos en pantalla.
        """
        # Pinta el fondo de negro
        self.screen.fill((0, 0, 0))

        # Dibuja al jugador
        self.player.draw(self.screen)

        # Dibuja todos los enemigos
        for enemy in self.enemies:
            enemy.draw(self.screen)

        # Dibuja todas las balas
        for bullet in self.bullets:
            bullet.draw(self.screen)

        # Dibuja el HUD (puntaje, nivel, vidas)
        draw_hud(self.screen, self.score, self.lives, self.level)

        # Show level up message
        if self.show_level_up:
            font = pygame.font.SysFont("Arial", 48)
            text = font.render(f"Level {self.level}", True, (255, 255, 0))
            self.screen.blit(text, (400 - text.get_width() // 2, 250))

    def handle_collisions(self):
        """
        Detecta y maneja colisiones entre disparos y enemigos o jugador.
        Esta función se completará más adelante.
        """
        # Colisiones entre balas del jugador y enemigos
        for bullet in self.bullets[:]:
            if bullet.from_player:
                for enemy in self.enemies[:]:
                    if bullet.rect.colliderect(enemy.rect):
                        enemy.take_damage()
                        if enemy.health <= 0:
                            self.score += 10  # Puntos por destruir enemigo
                            self.enemies.remove(enemy)
                        self.bullets.remove(bullet)
                        break
        # (Aquí se pueden agregar más colisiones: balas enemigas, jugador, etc.)

    def reset_game(self):
        # Update max score if needed
        max_score = self.progress.get_max_score()
        if self.score > max_score:
            self.progress.set_max_score(self.score)
        self.level = 1
        self.score = 0
        self.lives = 3
        self.enemies = self.load_level(self.level)
        self.player.rect.x = 300
        self.bullets.clear()
        self.show_level_up = False

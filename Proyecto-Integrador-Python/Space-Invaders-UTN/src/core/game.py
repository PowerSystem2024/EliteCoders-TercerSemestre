# src/core/game.py

import pygame

from src.core.hud import draw_hud
from src.entities.bullet import Bullet
from src.entities.enemy import Enemy
from src.entities.player import Player
from src.systems.inventory import Inventory

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

    def load_level(self, level):
        """
        Carga enemigos según el nivel actual.
        Por ahora genera enemigos en posiciones fijas.
        """
        return [Enemy(x, 50) for x in range(100, 700, 100)]

    def update(self):
        """
        Lógica del juego que se actualiza cada frame.
        """
        # Captura teclas presionadas
        keys = pygame.key.get_pressed()

        # Actualiza al jugador con las teclas presionadas
        self.player.update(keys)

        # Actualiza cada enemigo
        for enemy in self.enemies:
            enemy.update()

        # Actualiza cada disparo
        for bullet in self.bullets:
            bullet.update()

        # Controla colisiones entre objetos
        self.handle_collisions()

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

    def handle_collisions(self):
        """
        Detecta y maneja colisiones entre disparos y enemigos o jugador.
        Esta función se completará más adelante.
        """
        pass  # Placeholder por ahora

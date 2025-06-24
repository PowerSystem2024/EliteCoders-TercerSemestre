# HUD temporal (Franco se encargará de completarlo con estilo)
import pygame

def draw_hud(screen, score, lives, level):
    # Fuente predeterminada del sistema
    font = pygame.font.SysFont("Arial", 24)
    
    # Texto a mostrar con score, vidas y nivel
    text = font.render(f"Score: {score}  Lives: {lives}  Level: {level}", True, (255, 255, 255))
    
    # Dibuja el texto en la esquina superior izquierda
    screen.blit(text, (10, 10))

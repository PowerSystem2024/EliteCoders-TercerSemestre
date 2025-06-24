import pygame
from src.settings import WIDTH, HEIGHT, WHITE, BLACK

def show_hub(screen):
    font_title = pygame.font.SysFont("Arial", 48)
    font_option = pygame.font.SysFont("Arial", 36)
    
    title = font_title.render("Space Invaders - UTN", True, WHITE)
    play_text = font_option.render("Jugar", True, WHITE)
    quit_text = font_option.render("Salir", True, WHITE)

    selected = 0  # 0: Play, 1: Quit
    clock = pygame.time.Clock()
    
    while True:
        screen.fill(BLACK)
        screen.blit(title, (WIDTH // 2 - title.get_width() // 2, 120))
        
        # Highlight selected option
        play_color = (255, 255, 0) if selected == 0 else WHITE
        quit_color = (255, 255, 0) if selected == 1 else WHITE
        play_render = font_option.render("Jugar", True, play_color)
        quit_render = font_option.render("Salir", True, quit_color)
        
        screen.blit(play_render, (WIDTH // 2 - play_render.get_width() // 2, 250))
        screen.blit(quit_render, (WIDTH // 2 - quit_render.get_width() // 2, 320))
        
        pygame.display.flip()
        clock.tick(30)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
            elif event.type == pygame.KEYDOWN:
                if event.key in [pygame.K_UP, pygame.K_w]:
                    selected = (selected - 1) % 2
                elif event.key in [pygame.K_DOWN, pygame.K_s]:
                    selected = (selected + 1) % 2
                elif event.key in [pygame.K_RETURN, pygame.K_SPACE]:
                    return selected == 0  # True if Play, False if Quit 
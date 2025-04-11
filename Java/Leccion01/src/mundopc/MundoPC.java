package mundopc;

import ar.com.elitecoders.*;

public class MundoPC {
    public static void main(String[] args) {

        // Se instancian 4 computadoras distintas
        Monitor monitorHP = new Monitor("HP", 14.5);
        Teclado tecladoHP = new Teclado("Cable", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);

        Monitor monitorLG = new Monitor("LG", 24);
        Teclado tecladoHyperx = new Teclado("Cable", "HyperX");
        Raton ratonLogitech = new Raton("LightSpeed", "Logitech");
        Computadora computadoraGamer = new Computadora("Computadora gamer", monitorLG, tecladoHyperx, ratonLogitech);

        Monitor monitorGenerico = new Monitor("Genérico", 27);
        Teclado tecladoGenerico = new Teclado("Cable", "Genérico");
        Raton ratonGenerico = new Raton("Cable", "Genérico");
        Computadora computadoraGenerica = new Computadora(
                "Computadora genérica",
                monitorGenerico,
                tecladoGenerico,
                ratonGenerico);

        Computadora computadoraRandom = new Computadora("PC Random", monitorHP, tecladoHyperx, ratonHP);

        // Se crean las órdenes
        // Orden 1
        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);

        orden1.mostrarOrden();

        // Se agregan más computadoras a la misma orden para probar límite
        orden1.agregarComputadora(computadoraRandom);
        orden1.agregarComputadora(computadoraGenerica);
        orden1.agregarComputadora(computadoraGamer);
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraRandom);
        orden1.agregarComputadora(computadoraGenerica);
        orden1.agregarComputadora(computadoraGamer);
        orden1.agregarComputadora(computadoraHP);

        orden1.mostrarOrden();

        orden1.agregarComputadora(computadoraGamer); // esta ya quedaría fuera de la lista por ser la nro 11

        // Orden 2
        Orden orden2 = new Orden();
        orden2.agregarComputadora(computadoraHP);
        orden2.agregarComputadora(computadoraRandom);

        orden2.mostrarOrden();
    }
}
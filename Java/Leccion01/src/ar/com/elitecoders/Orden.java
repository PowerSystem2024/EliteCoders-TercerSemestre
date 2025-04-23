package ar.com.elitecoders;

public class Orden {
    private final int idOrden;
    private Computadora computadoras[];
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadoras;

    public Orden() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadoras = new Computadora[Orden.MAX_COMPUTADORAS];
    }

    public void agregarComputadora(Computadora computadora) {
        if (this.contadorComputadoras < MAX_COMPUTADORAS) {
            this.computadoras[this.contadorComputadoras++] = computadora;
        } else {
            System.out.println("Has superado el límite de " + MAX_COMPUTADORAS + " computadoras");
        }
    }

    public void mostrarOrden() {
        System.out.println("\nOrden #" + this.idOrden);
        System.out.println("Computadoras de esta orden:");
        for (int i = 0; i < this.contadorComputadoras; i++) {
            System.out.println(" "+ (i + 1) + " - " + this.computadoras[i]);
        }
    }
}

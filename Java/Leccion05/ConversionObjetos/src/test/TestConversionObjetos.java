package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);

        //System.out.println("empleado = "+empleado);
        System.out.println(empleado.obtenerDetalles()); //si queremos acceder al metodo escritor
        //empleado.getTipoEscritura(); No se puede hacer

        //Downcasting
        //((Escritor)empleado).getTipoEscritura();// tenemos dos opciones, esta es la primera
        Escritor escritor = (Escritor)empleado; // esta es la segunda
        escritor.getTipoEscritura();

        //Upcasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}

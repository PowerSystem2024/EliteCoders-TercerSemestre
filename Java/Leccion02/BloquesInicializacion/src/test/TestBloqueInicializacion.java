
package test;

import damain.Persona;

/**
 * @author matis
 */
public class TestBloqueInicializacion {
    public static void main(String[] args) {
        Persona personal = new Persona();
        System.out.println("persona1= "+ personal);
        Persona persona2 = new Persona();
        System.out.println("persona2= "+ persona2);
    }
}

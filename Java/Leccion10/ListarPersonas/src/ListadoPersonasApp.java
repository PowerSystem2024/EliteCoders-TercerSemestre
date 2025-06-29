import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();

        //empezamos con el menu
        var salir = false;
        while(!salir){
            mostrarMenu();
            try {
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){
                System.out.println("Ocurrio un error: " + e.getMessage());
            }
            System.out.println();
        } // fin del ciclo while
    } //fin metodo main

    public static void mostrarMenu(){
        //mostramos las opciones
        System.out.print("""
                ---Listado de personas---
                1. Agregar persona"
                2. Listar persona
                3. Salir"
                """);

        System.out.print("Digite una de las opciones:");
    } // fin del metodo menu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //revisamos la opcion digitada a traves de un switch
        switch (opcion){ //agregar una persona a la lista
            case 1 -> {
                System.out.print("Digite el nombre de la persona: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono: ");
                var telefono = entrada.nextLine();
                System.out.print("Digite el email: ");
                var email = entrada.nextLine();
                // creamos el objeto persona
                var persona = new Persona(nombre, telefono, email);
                // agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" elementos");
            } // fin caso 1
            case 2 -> { // listar a las persomas
                System.out.print("Listado de personas: ");
                // mejoras con lambda y el metodo de referencia
                //personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println);
            } // fin caso 2
            case 3 -> { // salir del ciclo
                System.out.println("Hasta pronto...");
                salir = true;
            } // fin del caso 3
            default -> System.out.println("Opcion incorrecta: "+opcion);
            } // fin del swtich
        return salir;
    } //fin del metodo ejecutarOperacion
}// fin de la clase listado
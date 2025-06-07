import java.util.Scanner;

public class CalculadoraUTN {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) {//Bucle infinito
            
            System.out.println("******* Aplicacion Calculadora *******");
            mostrarMenu();

            try{
                
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion>=1 && operacion<=4) {
                    
                    ejecutarOperacion(operacion, entrada);
                    
                }//Fin del if
                else if (operacion == 5) {
                    System.out.println("Gracias por usar la aplicacion");
                    break;//Rompe el bucle
                }
                else {
                    System.out.println("Opcion no valida"+operacion);
                }
                System.out.println();
            } catch (Exception e) {//Fin del try comienzo del catch
                System.out.println("Ocurrio un error: " + e.getMessage());
                System.out.println();
            }
    
        }//Fin del while
        entrada.close();
    }//Fin del main

    public static void mostrarMenu() {//Metodo para mostrar el menu
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicacion
                    4. Division
                    5. Salir
                    """);
            System.out.println("Digite una opcion: ");
    }

    public static void ejecutarOperacion(int operacion, Scanner entrada) {//Metodo para ejecutar la operacion
        System.out.println("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.println("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        double resultado;
                    
        switch (operacion) {
            case 1: //Suma
                resultado = operando1 + operando2;
                System.out.println("El resultado de la suma es: " + resultado);
                break;
            case 2: //Resta
                resultado = operando1 - operando2;
                System.out.println("El resultado de la resta es: " + resultado);
                break;
            case 3: //Multiplicacion
                resultado = operando1 * operando2;
                System.out.println("El resultado de la multiplicacion es: " + resultado);
                break;
            case 4: //Division
                resultado = operando1 / operando2;
                System.out.println("El resultado de la division es: " + resultado);
                break;
            default:
                System.out.println("Opcion no valida");
                break;
        }//Fin del switch
    }
}//Fin de la clase

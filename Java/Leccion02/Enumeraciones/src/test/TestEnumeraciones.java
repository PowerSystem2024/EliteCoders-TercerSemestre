
package test;
// Importamos los dias del script enumeraciones
import  enumeraciones.Dias;
import  enumeraciones.Continentes;
/**
 * @author matis
 */
public class TestEnumeraciones {
    public static void main(String[] args) {
        // Accedemos y imprimimos los dias
        System.out.println("Dias: "+Dias.Lunes); // Las enumeraciones se tratan como cadenas
        indicarDiaSemana(Dias.Lunes);
        // No se usan commillas sino el operador punto
        
        // Imprimimos ambos valores 
        System.out.println("Continenete No. 4: "+Continentes.America); 
        System.out.println("No. de paises en el 4to.continente: "
                 + Continentes.America.getPaises());
        
        System.out.println("No. de habitantes en el 4to.continente: "
                 + Continentes.America.getHabitantes());
    
    }   
    
    
    // Creamos un metodo que va a tener comoo parametro dias y
    // va actuar en el condicioneal switch
    private static void indicarDiaSemana(Dias dias){
        // Le pasamos cada dia de la semana
        switch (dias) {
            case Lunes:
                System.out.println("Primer dia de la semana");
                break;
            case Martes:
                System.out.println("Segundo dia de la semana");
                break;
            case Miercoles:
                System.out.println("Tercer dia de la semana");
                break;
            case Jueves:
                System.out.println("Cuarto dia de la semana");
                break;  
            case Viernes:
                System.out.println("Quinto dia de la semana");
                break;
            case Sabado:
                System.out.println("Sexto dia de la semana");
                break;
            case Domingo:
                System.out.println("Septimo dia de la semana");
                break;
                     
             //error   
            default:
                throw new AssertionError();
        }
    }
}

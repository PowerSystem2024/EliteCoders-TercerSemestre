
package damain;

/**
 * @author matis
 */
public class Persona {   
    private final int idPersona;
    private static int contadorPersona;
    
    static {// Bloque de inicializacion statico
        System.out.println("Ejecucion del bloque estatico");
        ++Persona.contadorPersona;
        //idPersona=10; No es estatico un atributo, y da error
    }
    
    { //Bloque de inicializacion No estatico(contexto dinaico)
        System.out.println("Ejecucion del bloque No estatico");
        this.idPersona= Persona.contadorPersona++;// incrementamos el atributo
        
    }
    
    // Los bloques de inicioalizacion se ejecutann antes del contructor
    public Persona(){
        System.out.println("Ejecucion del contructor");     
    } 
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
    
}


package enumeraciones;

/**
 * @author matis
 */
// Creamos una enumeracion de los continentes con los paises y la poblacion
public enum Continentes {
    Africa(53,"1.2 billones"),
    Europa(46,"1.1 billones"),
    Asia(44,"1.4 billones"),
    America(34,"150.1 billones"),
    Oceania(14,"10.2 billones");
    
    // Le asignamos un valor respectivo a cada tema
    private final int paises;
    private  String habitantes;
    
    // En este metodo igualamos los valores
    private Continentes(int paises, String habitantes) {
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    // Metodo para devolver la cantidad de paises
    public int getPaises(){
        return this.paises;
    }
    // Metodo para devolver la cantidad de habitantes
     public String getHabitantes(){
        return this.habitantes;
    }
    
    
}

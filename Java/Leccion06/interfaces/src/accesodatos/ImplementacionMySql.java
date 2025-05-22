
package accesodatos;

public class ImplementacionMySql implements  IAccesodatos{

    @Override
    public void insertar() {
        System.out.println("Insertar desde MySql");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde MySql");
    }

    @Override
    public void actualizar() {
        System.out.println("Acualizar desde MySql");
    }

    @Override
    public void eliminarr() {
        System.out.println("Eliminar desde MySql");
    }
    
}


package accesodatos;


public class ImplementacionOracle implements IAccesodatos{

    @Override
    public void insertar() {
        System.out.println("Insertar desde Oracle");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde Oracle");
    }

    @Override
    public void actualizar() {
        System.out.println("Acualizar desde Oracle");
    }

    @Override
    public void eliminarr() {
        System.out.println("Eliminar desde Oracle");
    }
    
    
}

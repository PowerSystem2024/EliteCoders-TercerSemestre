package domain;

public class Rectangulo extends FiguraGeometrica{
    //constructor
    public Rectangulo(String tipoFigura){
        super(tipoFigura);
    }

    @Override
    public void dibujar() { //implementando el metodo
        System.out.println("Dibujando un rectangulo"+this.getClass().getSimpleName());
    }
}

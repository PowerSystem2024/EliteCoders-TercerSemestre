package domain;

public abstract class FiguraGeometrica {
    protected String TipoFigura;

    protected FiguraGeometrica(String tipoFigura) {
        this.TipoFigura = tipoFigura;
    }

    //Metodo abstracto
    public abstract void dibujar();

    //agregamos el get y set

    public String getTipoFigura() {
        return TipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.TipoFigura = tipoFigura;
    }

    @Override
    public String toString() {
        return "FiguraGeometrica{" + "TipoFigura=" + TipoFigura + '}';
    }
}

package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o wrapper

        /*
        Clases envolventes de tipos primitivos
        - int= Integer
        - long = Long
        - float = Float
        - double = Double
        - boolean = Boolean
        - byte = Byte
        - char = Character
        - short = Short

         */
int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo object
        System.out.println("entero = " + entero.doubleValue()); //Autoboxing

        int entero2 = entero; //Unboxing
        System.out.println("entero2 = " + entero2);
    }
}

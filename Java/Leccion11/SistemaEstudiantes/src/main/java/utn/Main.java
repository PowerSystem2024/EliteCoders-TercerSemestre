package utn;

import utn.conexion.Conexion;

import java.sql.Connection;

public class Main {
    public static void main(String[] args) {
        Connection connection = Conexion.getConnection();
        if (connection != null) {
            System.out.println("Conexión exitosa: " + connection);
        } else {
            System.out.println("Error al conectarse");
        }
    }
}
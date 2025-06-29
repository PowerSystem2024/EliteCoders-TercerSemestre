package utn.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection() {
        Connection connection = null;
        // Variables para conectarnos a la BBDD
        String db = "estudiantes";
        String port = "3306";
        String user = "root";
        String password = "root";
        String url = "jdbc:mysql://localhost:" + port + "/" + db;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, user, password);
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("Ocurrió un error en la conexión: " + e.getMessage());
        }

        return connection;
    }
}

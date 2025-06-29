package utn.datos;

import utn.conexion.Conexion;
import utn.dominio.Estudiante;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import static utn.conexion.Conexion.getConnection;

public class EstudianteDAO {
    public List<Estudiante> listar() {
        List<Estudiante> estudiantes = new ArrayList<Estudiante>();
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection connection = getConnection();
        String sql = "SELECT * FROM estudiantes2025 ORDER BY id";
        try {
            ps = connection.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                Estudiante estudiante = new Estudiante();
                estudiante.setId(rs.getInt("id"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));

                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error al seleccionar datos: " + e.getMessage());
        } finally {
            try {
                connection.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión");
            }
        }

        return estudiantes;
    }

    /**
     * Método para buscar estudiantes por ID. Se hace de esta forma porque
     * no tiene sentido que devuelva true o false. Lo correcto es que devuelva
     * directamente el estudiante.
     *
     * @param id
     * @return estudiante (vacío en caso de no encontrarse, y con datos en caso de existir)
     */
    public Estudiante buscarPorId(int id) {
        Estudiante estudiante = new Estudiante();
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection connection = getConnection();
        String sql = "SELECT * FROM estudiantes2025 WHERE id = ?";

        try {
            ps = connection.prepareStatement(sql);
            ps.setInt(1, id);
            rs = ps.executeQuery();
            if (rs.next()) {
                estudiante.setId(rs.getInt("id"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error al buscar estudiante por id: " + e.getMessage());
        } finally {
            try {
                connection.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión");
            }
        }

        return estudiante;
    }

    public boolean agregar(Estudiante estudiante) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection connection = getConnection();
        String sql = "INSERT INTO estudiantes2025 (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)";

        try {
            ps = connection.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrió un error al buscar estudiante por id: " + e.getMessage());
        } finally {
            try {
                connection.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión");
            }
        }
        return false;
    }

    public boolean modificar(Estudiante estudiante) {
        PreparedStatement ps = null;
        Connection connection = getConnection();
        String sql = "UPDATE estudiantes2025 SET nombre = ?, apellido = ?, telefono = ?, email = ? WHERE id = ?";
        try {
            ps = connection.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getId());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Ocurrió un error al modificar estudiante: " + e.getMessage());
        } finally {
            try {
                connection.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión");
            }
        }
        return false;
    }

    public static void main(String[] args) {
        EstudianteDAO estudianteDAO = new EstudianteDAO();

        // Buscar estudiante por ID
        // Estudiante estudiante1 = estudianteDAO.buscarPorId(1);
        // if (estudiante1.getId() != null) {
        //     System.out.println("Estudiante encontrado: " + estudiante1);
        // } else {
        //     System.out.println("Estudiante no encontrado");
        // }

        // Crear nuevo estudiante
        // Estudiante nuevoEstudiante =
        //         new Estudiante("Pepe", "Castro", "1234", "pepe@pepe.com");
        // boolean creado = estudianteDAO.agregar(nuevoEstudiante);
        // if (creado) {
        //     System.out.println("Estudiante agregado: " + nuevoEstudiante);
        // } else {
        //     System.out.println("No se ha agregado estudiante: " + nuevoEstudiante);
        // }

        // Modificar estudiante
        // Estudiante estudianteModificado =
        //         new Estudiante(1, "Lucas", "Gonzalez", "56789", "lucas@gmail.com");
        // boolean modificado = estudianteDAO.modificar(estudianteModificado);
        // if (modificado) {
        //     System.out.println("Estudiante modificado exitosamente: " + estudianteModificado);
        // } else {
        //     System.out.println("No se pudo modificar el estudiante: " + estudianteModificado);
        // }

        // Listar todos los estudiantes
        List<Estudiante> estudiantes = estudianteDAO.listar();
        estudiantes.forEach(System.out::println);

    }
}

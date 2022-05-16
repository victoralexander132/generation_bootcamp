package loops;

import javax.swing.*;

public class ciclos {
    public static void main(String[] args) {
        //verificar contraseña
        String clave = "Pedro";
        String comparacion = "";
        while (clave.equals(comparacion) == false)
            comparacion = JOptionPane.showInputDialog("Introduce la contraseña, por favor");
            if(clave.equals(comparacion) == false ){
                System.out.println("la contraseña es incorrecta");
            }
        System.out.println("La contraseña es correcta");


    }
}

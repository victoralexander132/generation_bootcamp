import java.util.Locale;
import java.util.Scanner;

public class ControlDeFlujo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("¿Cuál es tu edad?");
        int edad = sc.nextInt();
        if (edad >= 18){
            if (edad > 50){
                System.out.println("Eres un adulto mayor");
            } else{
                System.out.println("Eres mayor de edad");
            }
        } else {
            System.out.println("Eres menor de edad");
        }

        String mensaje = (edad >= 18) ? ("Eres mayor de edad x2") : ("Eres menor de edad x2");
        System.out.println(mensaje);
        System.out.println("En qué día estamos?");
        sc.nextLine();
        String dia =  sc.nextLine();
        sc.close();

        switch (dia.toLowerCase()) {
            case "lunes":
                System.out.println("De Jaibol");
                break;
            case "martes":
                System.out.println("De alitas");
                break;
            case "miércoles":
                System.out.println("De boliche");
                break;
            case "jueves":
                System.out.println("De  sushi");
                break;
            case "viernes":
                System.out.println("De Netflix");
                break;
            case "sábado":
                System.out.println("De coto");
                break;
            case "domingo":
                System.out.println("De LoL");
                break;
            default:
                System.out.println("Ya llévame, Diosito");
        }
    }
}

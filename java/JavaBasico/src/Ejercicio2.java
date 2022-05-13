import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        /*Escribe una aplicación que calcule el indice de masa corporal.
        y que lance un mensaje según lo siguiente:
        Si tiene un IMC entre 18.5 y 25:
"       Your weigh ratio is good"

        si es menor de 18.5 o mayor de 25:
        "Your weigh ratio is good"
        */

        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingresa tu estatura en metros:");
        float estatura = scanner.nextFloat();
        System.out.println("Ingresa tu peso en kilogramos:");
        float peso = scanner.nextFloat();

        double divisor = Math.pow(estatura, 2);

        double imc = (double) peso / divisor;

        if (18.5 <= imc && imc <= 25) {
            System.out.println("Your body mass index is good");
        }

        if (imc < 18.5 || imc > 25) {
            System.out.println("Your body mass index is not good");
        }

//        System.out.println(estatura);
//        System.out.println(peso);
        System.out.println(imc);
    }
}

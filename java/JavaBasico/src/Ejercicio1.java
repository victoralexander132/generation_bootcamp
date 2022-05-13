import java.util.Scanner;

public class Ejercicio1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Create a Scanner object
        System.out.println("Ingresa un número");

        int numero = scanner.nextInt();  // Read user input
        if (numero < 3) {
            System.out.println("Failed!");
        } else if (numero <= 5) {
            System.out.println("Insufficient!");
        } else if (numero <= 9) {
            System.out.println("Good!");
        } else if (numero == 10) {
            System.out.println("Excellent");
        } else {
            System.out.println("Grade outside range supported!");
        }

    }
}

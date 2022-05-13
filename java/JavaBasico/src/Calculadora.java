import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        System.out.println("Introduce el número de la operacion a realizar");
        System.out.println("1) Suma   2) Resta   3) Multiplicación   4) División");
        Scanner sc = new Scanner(System.in);
        int operacion = sc.nextInt();
        System.out.println("Ingresa dos números:");
        System.out.println("1:");
        float num1 = sc.nextFloat();
        System.out.println("2:");
        float num2 = sc.nextFloat();
        sc.close();

        switch (operacion){
            case 1:
                float res = num1 + num2;
                System.out.println("El resultado de la operación es:");
                System.out.println(res);
                break;
            case 2:
                float res2 = num1 - num2;
                System.out.println("El resultado de la operación es:");
                System.out.println(res2);
                break;
            case 3:
                float res3 = num1 * num2;
                System.out.println("El resultado de la operación es:");
                System.out.println(res3);
                break;
            case 4:
                float res4 = num1 / num2;
                System.out.println("El resultado de la operación es:");
                System.out.println(res4);
                break;
            default:
                System.out.println("Ingresa los números correctamente");

        }


    }
}

//import java.util.Objects;
//
//import static java.lang.Integer.parseInt;

public class OperadoresLogicos {
    public static void main(String[] args) {
//        int num = 12;
//        num = 45;
//        num = parseInt("4");
//        System.out.println(num);
//
//        /* Operadores de comparación*/
//        int num1, num2;
//        num1 = 10;
//        num2 = 20;
//        System.out.println("num1 = " + num1);
//        System.out.println("num2 = " + num2);

//        Operador de comparación
//        System.out.println(num1 == num2);
//        .equals()
//        System.out.println(Objects.equals(num1, num2));

//        <, >, <=, >=
        int num3, num4;
        num3 = 15;
        num4 = 20;
        System.out.println(num3 < num4);
        System.out.println(num3 > num4);
        System.out.println(num3 <= num4);
        System.out.println(num3 >= num4);

        if (num3 < num4) {
            System.out.println("Número 3 es menor");
        } else {
            System.out.println("Número 3 es mayor");
        }

//        !=
        System.out.println(num3 != num4);
        boolean comparacion = num3 != num4;
        System.out.println(comparacion);
//        Operadores lógicos
        /*
         * AND  &&
         * OR ||
         * NOT !
         * */
        
    }
}

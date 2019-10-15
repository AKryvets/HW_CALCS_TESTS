using System;

namespace Task2
{
    class Get
    {
        static void Main(string[] args)
        {
            Console.WriteLine(getSimple(3));
            Console.WriteLine(getSimple(30));

        }
        public static string getSimple(double number){
            int count = 0;
            for (int i = 1; i <= 10; i++)
            {
                double ost = number % i;
                if(ost == 0)
                {
                    count++;
                }
            }

            if (count == 1 &&  number >10)
            {
                return "Это простое число";
            }else if(count == 2 && number <= 10)
            {
                return "Это простое число";
            }else return "Это не простое число";
        }
    }
}

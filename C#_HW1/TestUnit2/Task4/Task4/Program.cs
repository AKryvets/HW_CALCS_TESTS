using System;

namespace Task4
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine(getFactorial(6));
            Console.WriteLine(getFactorial(-1));
        }
        public static int getFactorial(int a){
             if (a < 0)
            {
                return -1;
            }
            int n = 1;
            for(int i = 1; i <= a; i++)
            {
                n = n * i;
            }
            return n;
        }
    }
}

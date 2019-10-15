using System;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(getSum(123));
            Console.WriteLine(getSum(6534));
        }
        public static double getSum(int a){
            if (a < 0)
                return -1;
            double sum = 0;
            while(a >= 1)
            {
                double ost = a % 10;
                sum = sum + ost;
                a = a / 10;
            }
            return sum;
        }
    }
}

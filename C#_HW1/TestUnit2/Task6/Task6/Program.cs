using System;

namespace Task6
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(getRevers(54321));
        }
        public static int getRevers(int a){
            if (a < 0)
                return -1;
            int t = 0;
            while (a >= 1)
            {
                t = t * 10 +  a % 10;
                a = a / 10;
            }
            return t;
        }
    }
}

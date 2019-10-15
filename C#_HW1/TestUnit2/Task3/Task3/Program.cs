using System;

namespace Task3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(getSQRT(16));
            Console.WriteLine(getSQRT(36));
        }

        public static int getSQRT(int a)
        {
            if (a < 0)
                return -1;
            int count = 1;
            while (true)
            {
                int c = a / count;
                if (count == c)
                {
                    return c;
                }
                count++;
            }
        }
    }
}

using System;

namespace Task2
{
    class Get
    {
        static void Main(string[] args)
        {
            Console.WriteLine(get());

        }
        public static string get()
        {
            string qwerty = "";
            double i, sum = 0;
            double count = 0;
            for (i = 1; i <= 99; i++)
            {
                if (i % 2 != 0)
                {
                    sum = sum + i;
                    count++;
                }
            }
            qwerty += sum;
            qwerty += " ";
            qwerty += count;
            return qwerty;
        }
    }
}

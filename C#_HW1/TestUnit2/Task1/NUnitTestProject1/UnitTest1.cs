using NUnit.Framework;

namespace NUnitTestProject1
{
    public class Tests
    {

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
        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public void Test1()
        {
            Assert.AreEqual("2500 50", get());
        }
    }
}
using NUnit.Framework;

namespace NUnitTestProject1
{
    public class Tests
    {
        public static double getSum(int a)
        {
            if (a < 0)
                return -1;
            double sum = 0;
            while (a >= 1)
            {
                double ost = a % 10;
                sum = sum + ost;
                a = a / 10;
            }
            return sum;
        }
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.AreEqual(6, getSum(123));
        }
        [Test]
        public void Test2()
        {
            Assert.AreEqual(-1, getSum(-123));
        }
    }
}
using NUnit.Framework;

namespace NUnitTestProject1
{
    
    public class Tests
    {
        public static int getFactorial(int a)
        {
            if (a < 0)
            {
                return -1;
            }
            int n = 1;
            for (int i = 1; i <= a; i++)
            {
                n = n * i;
            }
            return n;
        }
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.AreEqual(720, getFactorial(6));
        }
        [Test]
        public void Test2()
        {
            Assert.AreEqual(-1, getFactorial(-3));
        }
    }
}
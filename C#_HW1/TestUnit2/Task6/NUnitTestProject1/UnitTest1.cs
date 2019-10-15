using NUnit.Framework;

namespace NUnitTestProject1
{
    public class Tests
    {
        public static int getRevers(int a)
        {
            if (a < 0)
                return -1;
            int t = 0;
            while (a >= 1)
            {
                t = t * 10 + a % 10;
                a = a / 10;
            }
            return t;
        }
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.AreEqual(12345, getRevers(54321));
        }
        [Test]
        public void Test2()
        {
            Assert.AreEqual(-1, getRevers(-54321));
        }
    }
}
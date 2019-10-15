using NUnit.Framework;

namespace NUnitTestProject1
{
    public class Tests
    {
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
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.AreEqual(4, getSQRT(16));
        }
        [Test]
        public void Test2()
        {
            Assert.AreEqual(6, getSQRT(36));
        }
        [Test]
        public void Test3()
        {
            Assert.AreEqual(-1, getSQRT(-36));
        }
    }
}
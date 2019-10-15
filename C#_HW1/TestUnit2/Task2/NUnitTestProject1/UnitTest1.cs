using NUnit.Framework;

namespace NUnitTestProject1
{
    public class Tests
    {

        public static string getSimple(double number)
        {
            if (number < 0)
                return "-1";
            int count = 0;
            for (int i = 1; i <= 10; i++)
            {
                double ost = number % i;
                if (ost == 0)
                {
                    count++;
                }
            }

            if (count == 1 && number > 10)
            {
                return "��� ������� �����";
            }
            else if (count == 2 && number <= 10)
            {
                return "��� ������� �����";
            }
            else return "��� �� ������� �����";
        }
        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public void Test1()
        {
            Assert.AreEqual("��� ������� �����", getSimple(13));
        }
        [Test]
        public void Test2()
        {
            Assert.AreEqual("��� �� ������� �����", getSimple(14));
        }
        [Test]
        public void Test3()
        {
            Assert.AreEqual("-1", getSimple(-14));
        }
    }
}
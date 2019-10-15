using NUnit.Framework;
using System;
using System.Linq;
using Task10;

namespace NUnitTestProject1
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void TestQuicksort()
        {
            Int32[] b = { 5, 4, 7, 1, 7, 2 };
            Int32[] a = { 1, 2, 4, 5, 7, 7 };
            quicksort(b,0,b.Length-1);
            Assert.AreEqual(b,a);
        }
        [Test]
        public void TestQuicksort1()
        {
            Int32[] b = { 5, 4, 7, -1, 7, -2 };
            Int32[] a = { -2, -1, 4, 5, 7, 7 };
            quicksort(b, 0, b.Length - 1);
            Assert.AreEqual(b, a);
        }
        [Test]
        public void TestShellSort()
        {
            Int32[] b = { 5, 4, 7, 1, 7, 2 };
            Int32[] a = { 1, 2, 4, 5, 7, 7 };
            shellSort(b);
            Assert.AreEqual(b, a);
        }
        [Test]
        public void TestShellSort1()
        {
            Int32[] b = { 5, 4, 7, -1, 7, -2 };
            Int32[] a = { -2, -1, 4, 5, 7, 7 };
            shellSort(b);
            Assert.AreEqual(b, a);
        }
        [Test]
        public void TestMergeSort()
        {
            Int32[] b = { 5, 4, 7, 1, 7, 2 };
            Int32[] a = { 1, 2, 4, 5, 7, 7 };
             b = MergeSort(b);
            Assert.AreEqual(b, a);
        }
        [Test]
        public void TestMergeSort1()
        {
            Int32[] b = { 5, 4, 7, -1, 7, -2 };
            Int32[] a = { -2, -1, 4, 5, 7, 7 };
            b = MergeSort(b);
            Assert.AreEqual(b, a);
        }
        [Test]
        public void TestPyramid_Sort()
        {
            Int32[] b = { 5, 4, 7, 1, 7, 2 };
            Int32[] a = { 1, 2, 4, 5, 7, 7 };
            Pyramid_Sort(b,b.Length);
            Assert.AreEqual(b, a);
        }
        [Test]
        public void TestPyramid_Sort1()
        {
            Int32[] b = { 5, 4, 7, -1, 7, -2 };
            Int32[] a = { -2, -1, 4, 5, 7, 7 };
            Pyramid_Sort(b, b.Length);
            Assert.AreEqual(b, a);
        }



        public static int partition(int[] array, int start, int end)
        {
            int temp;
            int marker = start;
            for (int i = start; i <= end; i++)
            {
                if (array[i] < array[end])
                {
                    temp = array[marker];
                    array[marker] = array[i];
                    array[i] = temp;
                    marker += 1;
                }
            }
            temp = array[marker];
            array[marker] = array[end];
            array[end] = temp;
            return marker;
        }

        public static void quicksort(int[] array, int start, int end)
        {
            if (start >= end)
            {
                return;
            }
            int pivot = partition(array, start, end);
            quicksort(array, start, pivot - 1);
            quicksort(array, pivot + 1, end);
        }
        public static void shellSort(int[] vector)
        {
            int step = vector.Length / 2;
            while (step > 0)
            {
                int i, j;
                for (i = step; i < vector.Length; i++)
                {
                    int value = vector[i];
                    for (j = i - step; (j >= 0) && (vector[j] > value); j -= step)
                        vector[j + step] = vector[j];
                    vector[j + step] = value;
                }
                step /= 2;
            }

        }
        public static Int32[] MergeSort(Int32[] array)
        {
            if (array.Length == 1)
            {
                return array;
            }

            Int32 middle = array.Length / 2;
            return Merge(MergeSort(array.Take(middle).ToArray()), MergeSort(array.Skip(middle).ToArray()));
        }

        public static Int32[] Merge(Int32[] arr1, Int32[] arr2)
        {
            Int32 ptr1 = 0, ptr2 = 0;
            Int32[] merged = new Int32[arr1.Length + arr2.Length];

            for (Int32 i = 0; i < merged.Length; ++i)
            {
                if (ptr1 < arr1.Length && ptr2 < arr2.Length)
                {
                    merged[i] = arr1[ptr1] > arr2[ptr2] ? arr2[ptr2++] : arr1[ptr1++];
                }
                else
                {
                    merged[i] = ptr2 < arr2.Length ? arr2[ptr2++] : arr1[ptr1++];
                }
            }

            return merged;
        }
        public static Int32 add2pyramid(Int32[] arr, Int32 i, Int32 N)
        {
            Int32 imax;
            Int32 buf;
            if ((2 * i + 2) < N)
            {
                if (arr[2 * i + 1] < arr[2 * i + 2]) imax = 2 * i + 2;
                else imax = 2 * i + 1;
            }
            else imax = 2 * i + 1;
            if (imax >= N) return i;
            if (arr[i] < arr[imax])
            {
                buf = arr[i];
                arr[i] = arr[imax];
                arr[imax] = buf;
                if (imax < N / 2) i = imax;
            }
            return i;
        }

        public static void Pyramid_Sort(Int32[] arr, Int32 len)
        {
            //step 1: building the pyramid
            for (Int32 i = len / 2 - 1; i >= 0; --i)
            {
                long prev_i = i;
                i = add2pyramid(arr, i, len);
                if (prev_i != i) ++i;
            }

            //step 2: sorting
            Int32 buf;
            for (Int32 k = len - 1; k > 0; --k)
            {
                buf = arr[0];
                arr[0] = arr[k];
                arr[k] = buf;
                Int32 i = 0, prev_i = -1;
                while (i != prev_i)
                {
                    prev_i = i;
                    i = add2pyramid(arr, i, k);
                }
            }
        }
    }
}
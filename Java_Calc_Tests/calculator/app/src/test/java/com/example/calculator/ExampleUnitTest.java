package com.example.calculator;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest{
    MainActivity mainActivity = new MainActivity();
    @Test
    public void sum_t1() {
        assertEquals(7,mainActivity.summ(2,5),0);
    }
    @Test
    public void sum_t2() {
        assertEquals(-7,mainActivity.summ(-2,-5),0);
    }
    @Test
    public void sum_t3() {
        assertEquals(3,mainActivity.summ(-2,5),0);
    }
    @Test
    public void sum_t4() {
        assertEquals(-3,mainActivity.summ(2,-5),0);
    }
    @Test
    public void sum_t5() {
        assertEquals(7.1,mainActivity.summ(2.1,5),0);
    }
    @Test
    public void sum_t6() {
            assertEquals(-3.1,mainActivity.summ(2.1,-5.2),0);
    }

    @Test
    public void mult_t1() {
        assertEquals(10,mainActivity.mult(2,5),0);
    }
    @Test
    public void mult_t2() {
        assertEquals(10,mainActivity.mult(-2,-5),0);
    }
    @Test
    public void mult_t3() {
        assertEquals(-10,mainActivity.mult(-2,5),0);
    }
    @Test
    public void mult_t4() {
        assertEquals(-10,mainActivity.mult(2,-5),0);
    }
    @Test
    public void mult_t5() {
        assertEquals(0,mainActivity.mult(2,0),0);
    }
    @Test
    public void mult_t6() {
        assertEquals(2,mainActivity.mult(0.2,10),0);
    }


     @Test
    public void div_t1() {
        assertEquals(0,mainActivity.div(2,0),0);
    }
    @Test
    public void div_t2() {
        assertEquals(0,mainActivity.div(0,0),0);
    }
    @Test
    public void div_t3() {
        assertEquals(2,mainActivity.div(4,2),0);
    }
    @Test
    public void div_t4() {
        assertEquals(-2,mainActivity.div(2,-1),0);
    }
    @Test
    public void div_t5() {
        assertEquals(-4,mainActivity.div(-2,0.5),0);
    }
    @Test
    public void div_t6() {
        assertEquals(4.1,mainActivity.div(8.2,2),0);
    }
    @Test
    public void div_t7() {
        assertEquals(44.4,mainActivity.div(22.2,0.5),0);
    }


    @Test
    public void min_t1() {
        assertEquals(2,mainActivity.min(2,0),0);
    }
    @Test
    public void min_t2() {
        assertEquals(3,mainActivity.min(2,-1),0);
    }
    @Test
    public void min_t3() {
        assertEquals(1.4,mainActivity.min(2.4,1),0);
    }
    @Test
    public void min_t4() {
        assertEquals(-2.2,mainActivity.min(-2,0.2),0);
    }
    @Test
    public void min_t6() {
        assertEquals(9,mainActivity.min(20,11),0);
    }
    @Test
    public void min_t7() {
        assertEquals(1850,mainActivity.min(2000,150),0);
    }
    @Test
    public void min_t8() {
        assertEquals(0.8,mainActivity.min(2,1.2),0);
    }



    @Test
    public void cut_t1() {
        assertEquals("123456789",mainActivity.cutDisplay("1234567890"));
    }
    @Test
    public void cut_t2() {
        assertEquals("-12345678",mainActivity.cutDisplay("-1234567890"));
    }
    @Test
    public void cut_t3() {
        assertEquals("12345", mainActivity.cutDisplay("12345"));
    }
    @Test
    public void cut_t5() {
        assertEquals("qwertyuio",mainActivity.cutDisplay("qwertyuioop"));
    }
}

 function getArray(words1,words2,words3,words4)  
 { 
    if( typeof words1 != 'string' || typeof words2 != 'string' || typeof words3 != 'string' || typeof words4 != 'string' )
    {
        return 'false';
    }

    let array;

    array = words1.split(" ");
    let number1 = newArray(array);
    array = words2.split(" ");
    let number2 = newArray(array);
    array = words3.split(" ");
    let number3 = newArray(array);
    array = words4.split(" ");
    let number4 = newArray(array);
    let r = "";
    let r1 = "";
    let r2 = "";
    let r3 = "";
    for(let i = 0; i < 3; i++){
        if(number1[i] == 0){r += 0;}else{r += number1[i];}
            if(number2[i] == 0){r1 += 0;}else{r1 += number2[i];}
                if(number3[i] == 0){r2 += 0;}else{r2 += number3[i];}
                    if(number4[i] == 0){r3 += 0;}else{r3 += number4[i];}
    }
    let tree = r +r1 + r2 + r3;
    return tree;
}
    function newArray(array)
    {
        let number = [0,0,0];
        let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        let for1 = [ "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", ];
        let for10 = [ "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто", ];
        let for100 = [ "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот" ];
        let for11 = [ "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать" ];

        for (let  j = 0; j < 3 ; j++)
        {
            a = array[j];
            for (let i = 0; i < 9; i++)
            {
                if (a == for1[i])
                {
                    number[2] = numbers[i];
                }
                if (a == for10[i])
                {
                    number[1] = numbers[i];
                }
                if (a == for100[i])
                {
                    number[0] = numbers[i];
                }
                if (a == for11[i])
                {
                    number[2] = i + 1;
                    number[1] = 1;
                }
            }
        }
        return number;
    }
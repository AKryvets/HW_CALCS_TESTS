describe("function dayOfWeek()", function() {
    it("call function dayOfWeek with args a = 1  and return 'Monday - Понедельник'", function () {
        const a = 1;
        const exp = 'Monday - Понедельник';
        const act = dayOfWeek(a);
        
        assert.equal(act, exp);
    });
     it("call function dayOfWeek with args a = 0  and return 'true'", function () {
        const a = 0;
        const exp = 'true';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });
    it("call function dayOfWeek with args a = 8  and return 'true'", function () {
        const a = 8;
        const exp = 'true';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });
    it("call function dayOfWeek with args a = -2  and return 'true'", function () {
        const a = -2;
        const exp = 'true';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });
    it("call function dayOfWeek with args a = '-2'  and return 'true'", function () {
        const a = '-2';
        const exp = 'true';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });
    it("call function dayOfWeek with args a = '8'  and return 'true'", function () {
        const a = '8';
        const exp = 'true';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });
    it("call function dayOfWeek with args a = '1'  and return 'true'", function () {
        const a = '1';
        const exp = 'Monday - Понедельник';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });
    it("call function summ with args a = 'abc'  and return 'true'", function () {
        const a = 'abc';
        const exp = 'true';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });
    it("call function dayOfWeek with args a = '-dsadas'  and return 'true'", function () {
        const a = '-dsadas';
        const exp = 'true';
        const act = dayOfWeek(a);

        assert.equal(act, exp);
    });

});
describe("function toText()", function() {
    it("call function toText with args a = 12  and return '[\"\", \"\",  \"двенадцать\"]'", function () {
        const a = 12;
        const exp = ["", "", " двенадцать"];
        const act = toText(a);

        assert.deepEqual(act, exp);
    });
    it("call function toText with args a = 0  and return '[\"\", \"\", 'Ноль' ]", function () {
        const a = 0;
        const exp = [ '', '', 'Ноль' ];
        const act = toText(a);

        assert.deepEqual(act, exp);
    });
    it("call function toText with args a = 999  and return [\" девятьсот\", \" девяносто\", \" девять\"]", function () {
        const a = 999;
        const exp = [" девятьсот", " девяносто", " девять"];
        const act = toText(a);

        assert.deepEqual(act, exp);
    });

    it("call function toText with args a = 1004  and return 'false'", function () {
        const a = 1004;
        const exp = 'false';
        const act = toText(a);

        assert.deepEqual(act, exp);
    });
    it("call function toText with args a = -22  and return 'false'", function () {
        const a = -22;
        const exp = 'false';
        const act = toText(a);

        assert.deepEqual(act, exp);
    });
     it("call function toText with args a = 'dasdas'  and return 'false'", function () {
        const a = 'dasdas';
        const exp = 'false';
        const act = toText(a);
        assert.deepEqual(act, exp);
    });
     
});
describe("function toNumber()", function() {
    it("call function toNumber with args a = ['один']  and return ' [ , , 1 ]'", function () {
        const a = ['один'];
        const exp =  [ , , 1 ];
        const act = toNumber(a);
        assert.deepEqual(act, exp);
    });
     it("call function toNumber with args a = ['тринадцать']  and return [ , 1, 3 ]", function () {
        const a = ['тринадцать'];
        const exp =  [ , 1, 3 ];
        const act = toNumber(a);
        assert.deepEqual(act, exp);
    });
     it("call function toNumber with args a = ['двадцать','пять']  and return [ , 2, 5 ]", function () {
        const a = ['двадцать','пять'];
        const exp =  [ , 2, 5 ];
        const act = toNumber(a);
        assert.deepEqual(act, exp);
    });
      it("call function toNumber with args a = ['сто','двадцать','пять']  and return [ 1, 3, 7 ]", function () {
        const a = ['сто','тридцать','семь'];
        const exp =  [ 1, 3, 7 ];
        const act = toNumber(a);
        assert.deepEqual(act, exp);
    });
       it("call function toNumber with args a = [3213]  and return 'false'", function () {
        const a = [3213];
        const exp =  'false';
        const act = toNumber(a);
        assert.deepEqual(act, exp);
    });
       it("call function toNumber with args a = 3213  and return 'false'", function () {
        const a = 3213;
        const exp =  'false';
        const act = toNumber(a);
        assert.deepEqual(act, exp);
    });
       it("call function toNumber with args a = 'aaa'  and return 'false'", function () {
        const a = 'aaa';
        const exp =  'false';
        const act = toNumber(a);
        assert.deepEqual(act, exp);
    });

});



describe("function sizeOfLine()", function() {
    it("call function sizeOfLine with args a1,a2,a3,a4 =1  and return 0", function () {
        const a = 1;
        const exp = 0;
        const act = sizeOfLine(a,a,a,a);

        assert.deepEqual(act, exp);
    });
     it("call function sizeOfLine with args a1,a2,a3,a4 = 'dasdas'  and return 'false'", function () {
        const a = 'dasdas';
        const exp = 'false';
        const act = sizeOfLine(a,a,a,a);
        assert.deepEqual(act, exp);
    });
       it("call function sizeOfLine with args a1,a2 = 3 , a3,a4 = 'dasdas'  and return 'false'", function () {
        const a = 'dasdas';
        const b = 3;
        const exp = 'false';
        const act = sizeOfLine(b,b,a,a);
        assert.deepEqual(act, exp);
    });
     it("call function sizeOfLine with args a1,a2 = 2 ,a3,a4 = 3  and return 1.4142135623730951 ", function () {
        const a = 2;
        const b = 3;
        const exp = 1.4142135623730951 ;
        const act = sizeOfLine(a,a,b,b);
        assert.deepEqual(act, exp);
    });
      it("call function sizeOfLine without args  and return 'false' ", function () {
        const exp = 'false' ;
        const act = sizeOfLine();
        assert.deepEqual(act, exp);
    });
});


describe("function revers_bigger()", function() {
    it("call function revers_bigger with args a = 1  and return 'false'", function () {
        const a = 'aaa';
        const exp = 'false';
        const act = revers_bigger(a);
        assert.deepEqual(act, exp);
    });
     it("call function revers_bigger with args a = '1234556766'  and return 'false'", function () {
        const a = '1234556766';
        const exp = 'false';
        const act = revers_bigger(a);
        assert.deepEqual(act, exp);
    });
      it("call function revers_bigger with args a = 1675464564565464  and return 'false'", function () {
        const a = 1675464564565464;
        const exp = 'false';
        const act = revers_bigger(a);
        assert.deepEqual(act, exp);
    });
       it("call function revers_bigger with args a = -12312312313  and return 'false'", function () {
        const a = -12312312313;
        const exp = 'false';
        const act = revers_bigger(a);
        assert.deepEqual(act, exp);
    });
       it("call function revers_bigger with args a = 0  and return []", function () {
        const a = 0;
        const exp = [];
        const act = revers_bigger(a);
        assert.deepEqual(act, exp);
    });
       it("call function revers_bigger with args a = 999999999999  and return [\" девятьсот\", \" девяносто\", \" девять миллиард\", \" девятьсот\", \" девяносто\", \" девять миллиона\", \" девятьсот\", \" девяносто\", \" девять тысячи\", \" девятьсот\", \" девяносто\", \" девять\"]", function () {
        const a = 999999999999 ;
        const exp = [" девятьсот", " девяносто", " девять миллиарда", " девятьсот", " девяносто", " девять миллиона", " девятьсот", " девяносто", " девять тысячи", " девятьсот", " девяносто", " девять"];
        const act = revers_bigger(a);
        assert.deepEqual(act, exp);
    });
       it("call function revers_bigger with args a = 123456789123  and return [\" сто\", \" двадцать\", \" три миллиарда\", \" четыреста\", \" пятьдесят\", \" шесть миллиона\", \" семьсот\", \" восемьдесят\", \" девять тысячи\", \" сто\", \" двадцать\", \" три\"]", function () {
        const a = 123456789123;
        const exp = [" сто", " двадцать", " три миллиарда", " четыреста", " пятьдесят", " шесть миллиона", " семьсот", " восемьдесят", " девять тысячи", " сто", " двадцать", " три"];
        const act = revers_bigger(a);
        assert.deepEqual(act, exp);
    });
});

describe("function getArray()", function() {
    it("call function getArray with args a = 1, b = 'fdfd', c = 'fdfd', d = 'fdfd'  and return 'false'", function () {
        const a = 1;
        const b = 'fdfd';
        const c = 'fdfd';
        const d = 'fdfd';
        const exp = 'false';
        const act = getArray(a,b,c,d);
        assert.deepEqual(act, exp);
    });
    it("call function getArray with args a = 'девятьсот девяносто девять', b = 'девятьсот девяносто девять', c = 'девятьсот девяносто девять', d = 'девятьсот девяносто девять'  and return '999999999999'", function () {
        const a = 'девятьсот девяносто девять';
        const b = 'девятьсот девяносто девять';
        const c = 'девятьсот девяносто девять';
        const d = 'девятьсот девяносто девять';
        const exp = '999999999999';
        const act = getArray(a,b,c,d);
        assert.deepEqual(act, exp);
    });
     it("call function getArray with args a = '', b = '', c = '', d = 'девятьсот девяносто девять'  and return '000000000999'", function () {
        const a = '';
        const b = '';
        const c = '';
        const d = 'девятьсот девяносто девять';
        const exp = '000000000999';
        const act = getArray(a,b,c,d);
        assert.deepEqual(act, exp);
    });
     it("call function getArray with args a = '', b = '', c = '', d = ''  and return '000000000000'", function () {
        const a = '';
        const b = '';
        const c = '';
        const d = '';
        const exp = '000000000000';
        const act = getArray(a,b,c,d);
        assert.deepEqual(act, exp);
    });
      it("call function getArray with args a = '', b = 'девятьсот девяносто девять', c = 'девятьсот девяносто девять', d = 'девятьсот девяносто девять'  and return '000999999999'", function () {
        const a = '';
        const b = 'девятьсот девяносто девять';
        const c = 'девятьсот девяносто девять';
        const d = 'девятьсот девяносто девять';
        const exp = '000999999999';
        const act = getArray(a,b,c,d);
        assert.deepEqual(act, exp);
    });
      it("call function getArray with args a = '', b = '', c = 'девятьсот девяносто девять', d = 'девятьсот девяносто девять'  and return '000000999999'", function () {
        const a = '';
        const b = '';
        const c = 'девятьсот девяносто девять';
        const d = 'девятьсот девяносто девять';
        const exp = '000000999999';
        const act = getArray(a,b,c,d);
        assert.deepEqual(act, exp);
    });
      it("call function getArray with args a = empty, b = '', c = 'девятьсот девяносто девять', d = 'девятьсот девяносто девять'  and return 'false'", function () {

        const b = '';
        const c = 'девятьсот девяносто девять';
        const d = 'девятьсот девяносто девять';
        const exp = 'false';
        const act = getArray(b,c,d);
        assert.deepEqual(act, exp);
    });
      it("call function getArray with args a = empty, b = empty, c = empty, d = empty  and return 'false'", function () {
        const exp = 'false';
        const act = getArray();
        assert.deepEqual(act, exp);
    });
      it("call function getArray with args a = 1, b = 2, c = 1, d = 5  and return 'false'", function () {
        const a = 1;
        const b = 2;
        const c = 1;
        const d = 5;
        const exp = 'false';
        const act = getArray(a,b,c,d);
        assert.deepEqual(act, exp);
    });
});
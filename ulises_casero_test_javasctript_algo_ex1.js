var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 2";

for (i=0;i<array_number.length;i++)
    {

document.write(array_number[i] + "<br >");

    }

var array2d = new Array(9);

for (i=0;i<9;i++)
    {

        array2d[i] = new Array(9);
        array2d[0][0]= "";
        

    }
lig=0;
ptr=0;
array2d[lig][ptr] = Number(array_number[lig].substring(ptr*2, (ptr+1)*2));

var length = lig.length;
for (var i = 0; i < length; i++) {
    console.log(lig[i]);  
}
for (i=0;i<array2d.length;i++)
    {
        
document.write(array2d[lig] + array2d[ptr] + "<br >");
    }
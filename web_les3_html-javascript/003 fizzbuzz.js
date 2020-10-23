/* 
fizzBuzz
-----------
- user input: start number / end number
- print numbers b/w start / end
- numbers divisible by 3 replace by "Fizz"
- numbers divisible by 5 replace by "Buzz"
- numbers divisible by 3 and 5 replace by "FizzBuzz"
*/

function runFizzBuzz()
{
    let fizz = "Fizz"
    let buzz = "Buzz"

    var start = document.getElementById("inputNumberStart").value;
    var end = document.getElementById("inputNumberEnd").value;

    let output = "";


    for (let i = start; i <= end; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            output += `#${i} ${fizz}${buzz}<br />`;
        }
        else if(i % 3 == 0)
        {
            output += `#${i} ${fizz}<br />`;
        }
        else if(i % 5 == 0)
        {
            output += `#${i} ${buzz}<br />`;
        }
        else
        {
            output += `#${i}<br />`;
        }
    }

    document.getElementById("feedbackFizzBuzz").innerHTML = output;
}

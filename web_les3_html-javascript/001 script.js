function testVariables()
{
    // var in JavaScript is weakly typed "1" == 1 == true
    // JavaScript knows 3 types: string / number / boolean
    var foo;
    foo = "1";
    foo = 1;
    foo = true;
    // alert(`${foo}`);

    var str = "1";
    var num = 1;
    var bool = true;

    let element = document.getElementById("feedbackVariables");

    if (str == num == bool)
    {
        element.innerHTML = `var str ${str} <br />
                             var num ${num} <br /> 
                             var bool ${bool} <br />
                             <strong>are ALL equal</strong>`;
    }
    else
    {
        element.innerHTML = `var str ${str} <br />
                             var num ${num} <br /> 
                             var bool ${bool} <br />
                             <strong>are NOT equal</strong>`;
    }
}

function testArrays()
{
    let userInput = document.getElementById("inputArrays").value;
    let elementOutput = document.getElementById("feedbackArrays");
    const myNumbers = [];

    if(userInput != "" && !isNaN(userInput) && userInput.length == 1 && userInput != 0)
    {
        elementOutput.innerHTML = "Input is ok <br />";
        elementOutput.setAttribute("class", "feedbackValid");

        for (let i = 0; i < userInput; i++)
        {
            myNumbers.splice(i, 0, i+1); // added value i+1 at index i, deleting 0 elements
            elementOutput.innerHTML += `<span id="listNum${i}">Number ${myNumbers[i]} was added</span><br />`;
        }
    }
    else
    {
        elementOutput.innerHTML = "Input must be a number from 1-9";
        elementOutput.setAttribute("class", "feedbackInvalid");
    }
   
}

function resetLayout(input, feedback)
{
    var i = document.getElementById(input);
    if(i != null)
    {
        i.value = "";
    }

    var f = document.getElementById(feedback);
    if(f != null)
    {
        f.innerHTML = "";
        f.setAttribute("class", "feedbackDefault");
    }
}
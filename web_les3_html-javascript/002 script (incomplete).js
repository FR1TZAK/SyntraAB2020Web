
// functions as variables: NOT FINISHED YET
function methodParams(callMethod1)
{
    let method;

    if (callMethod1)
    {
        method = method1;
    }
    else
    {
        method = method2;
    }

    const method3 = (age) => {
        alert(age);
    }

    method();
    method3(15);
}

function method1()
{

}


function method2()
{

}

// html manipulation: NOT FINISHED YET
var counter = 0;
function count()
{
    let counterElement = document.getElementById("counter");
    counterElement.innerHTML = ++counter;

    counterElement.classList.add("css class");
    counterElement.classList.remove("css class");
}

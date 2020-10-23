/* 
fibonacci
------------
- user input: x of numbers
- print sum of the previous numbers
- example: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
*/

class Fibonacci
{	
    constructor()
    {
      this.x = 0;
      this.y = 1;
      this.z = null;
      this.max = 10;
    }
    
    calculateNext()
    {
          this.z = this.x; // 0
          this.x = this.y; // 1
          this.y = this.x + this.z; // 1
    }
  
}
  
function runFibonacci()
{
    let f = new Fibonacci();
    f.max = document.getElementById("inputMax").value;

    let output = document.getElementById("feedbackFibonacci");

    for(let i = 0; i < f.max; i++)
    {
        output.innerHTML += `${f.x}<br />`;
        f.calculateNext();
    }
} 

  
  
  
  
  
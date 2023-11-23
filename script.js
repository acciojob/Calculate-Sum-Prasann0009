//your JS code here. If required.
function printsum()
{
const n1=parseInt(document.getElementById("n1").value);
const n2=parseInt(document.getElementById("n2").value);

let sum = n1+n2;
   
    document.getElementById("sum").innerText = sum;
}
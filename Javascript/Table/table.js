function table()
{
    const input1 =document.getElementById('first');
    const input2 = document.getElementById('two');
    
    const num = input1.value;
    const lastNum = input2.value;

    var div = document.getElementById('result');

    for(let i=1; i<=lastNum; i++)
    {
        div.innerHTML += `<div class="flex flex-col mt-2 ">${num} X ${i} = ${num*i}</div>`;
    }
}
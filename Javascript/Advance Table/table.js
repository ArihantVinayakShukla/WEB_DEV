function table ()
{
    const number = document.getElementById('num');
    const one = document.getElementById('first');
    const two = document.getElementById('second');
    const result = document.getElementById('outcome');

    const prev_num = number.value;
    const once = one.value;
    const twice = two.value;
    result.innerHTML = '';

    for(let i=once; i<=twice; i++)
    {
        result.innerHTML += `<div class="flex flex-col mt-2 ">${prev_num} X ${i} = ${prev_num*i}</div>`;
    }
}
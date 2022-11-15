function Conversion()
{   
    const input = document.getElementById('inputType');
    const Selection1 = document.getElementById('select1');
    const Selection2 = document.getElementById('select2');

    const value = input.value;
    var unitFirst = Selection1.value;
    var unitTwo = Selection2.value;

    var myDiv = document.getElementById('message');
    if (unitFirst=="meter" && unitTwo=="Kilometer")
    {
        let message = value/1000;
        myDiv.innerHTML= `${value} meter is ${message} kilometer`;
    }
    else if(unitFirst=="Centimeter" && unitTwo=="Kilometer")
    {
               let message = value/100000;
        myDiv.innerHTML= `${value} centimeter is ${message} kilometer`;
    }
    else if(unitFirst=="Kilometer" && unitTwo=="Centimeter")
    {
        let message = value*100000;
        myDiv.innerHTML= `${value} kilometer is ${message} centimeter`;
    }
    else if(unitFirst=="meter" && unitTwo=="Centimeter")
    {
        const message = input*100;
        myDiv.innerHTML= `${value} meter is ${message} centimeter`;
    }
    else if(unitFirst=="Centimeter" && unitTwo=="meter")
    {
        const message = input/100;
        myDiv.innerHTML= `${value} centimeter is ${message} meter`;
    }
    else if(unitFirst=="Kilometer" && unitTwo=="meter")
    {
        const message = input*1000;
        myDiv.innerHTML= `${value} kilometer is ${message} meter`;
    }
    else {
        myDiv.innerHTML= `RANDI ho kya, kya input de rhe`;
    }
}

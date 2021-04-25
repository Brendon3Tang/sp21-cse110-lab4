let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

var x;
var txt="";

for(x in statistics)
{
    if(x.substr(0,1) == 'r' || statistics[x]%2 != 0)
    {
        txt = statistics[x];
        document.write(txt+'<br>');
	}
	else
		document.write('');
    
}
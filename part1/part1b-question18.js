var myClock = setInterval(function(){clock()}, 1000);

function clock()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
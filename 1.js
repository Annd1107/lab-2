var a=237;
var ltd,sd,ld,b;
ltd=a%100;
sd=ltd/10;
console.log(Math.floor(sd));




var x,y,z,xy,ur;
x=27;
y=27%10;
z=27/10;
ur=y*Math.floor(z);
console.log(ur);


x=123;
y=123%10;
z=123%100/10;
xy=123/100;
ur=y+Math.floor(z)+Math.floor(xy);
console.log(ur);

//prompt("text")--> garaas Text oruuulah
//+prompt("text")--> garaas too oruulah
//alert("tailbar") --> sanamj heseg gargah;


var grasToo, min, sec, tsag;
grasToo=+prompt("sec oruulna uu");
min=grasToo/60;
sec=grasToo%60;
alert(Math.floor(min) +"min"+sec+"sec")


grasToo=+prompt("sec oruulna uu");
tsag=grasToo/3600;
min=grasToo%3600/60;
sec=grasToo%3600%60;
alert(Math.floor(tsag)+"tsag"+Math.floor(min)+"min"+sec+"sec")


//gert 8907 hurtel;
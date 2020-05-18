var anniversaryDates=[100,200,365,500];


function calcDate(){
  var now = new Date();
  var firstDay = new Date("2020-01-15");

  var toNow = now.getTime();
  var toFirst = firstDay.getTime();
  var passedTime = toNow - toFirst;

  var passedDay = Math.round(passedTime/(1000*60*60*24));

  document.querySelector("#date").innerText=passedDay+"일";

  for(var i=0;i<4;i++){
    injectDates(anniversaryDates[i],toFirst);
  }

}

function injectDates(days, toFirst){
  var future = toFirst + days*(1000*60*60*24);
  var someday = new Date(future);
  var year = someday.getFullYear();
  var month = someday.getMonth() + 1;
  var date = someday.getDate();
  document.querySelector(`#date${days}`).innerText= year+"년"+month+"월"+date+"일";
}

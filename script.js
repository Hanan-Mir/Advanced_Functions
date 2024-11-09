'use strict';
//--------------DEFAULT PARAMETERS---------------------
const bookings=[];
let doBooking=function(flightNum='Data Unavaliable',passengerNum=1,ticketPrice=1999*passengerNum){
    //Es5 way of default parameters
    // flightNum=flightNum || 'Data Unavaliable';
    // passengerNum=passengerNum || 1;
    // ticketPrice=ticketPrice || 1999;
    const booking={
        flightNum,
        passengerNum,
        ticketPrice
    }
    bookings.push(booking);
    console.log(booking);
}
doBooking();
doBooking("SpiceJet",4,2000);
//------------------pass by value and pass by reference--------------------
let flightNumber="LAT334JX";
let hanan={
    name:"Mir Mohammmad Hanan",
    passportNumber:990448894045
}
const bookFLight=function(flightN,passgnr){
    flightN='JTD6667HH',
    passgnr.name="Mr " +passgnr.name;

}
bookFLight(flightNumber,hanan);
console.log(flightNumber);
console.log(hanan);
//------------------------------call back functions---------------------------------------------------
let toLowerCaseFun=function(str){
    let outputString=str.replace(/ /g," ").toLowerCase();
    console.log(`----Before Transformation: ${str}`)
    console.log(`----After transformation: ${outputString}`);
}
let toUpperCaseFun=function(str){
    console.log(`Before transformation:${str}`);

    let [firstWord,...restWords]=str.split(' ');
const myOutput=[firstWord.toUpperCase(),...restWords].join(' ');
    console.log(myOutput);
}
//call back function
let convertText=function(text,func){
func(text);
}
convertText("I am a VERY GOOD MAN",toLowerCaseFun);
convertText('missisipii is the LONGEST RIVER',toUpperCaseFun);
//------------------------function returning other function-----------------------------------------
let greetMsg=(msg)=>{
    return (name)=>{
console.log(`${msg} ${name}`)
    }

}
let myGreet=greetMsg('Hi');
myGreet('BUNnY TO')
//-----------------------------call and apply method------------------------------------------
let airIndia={
    airlineName:'Air India',
    bookings:[],
    type:"AIX",
    booking(passN,flightNum){
        //console.log(`Without this `);
console.log(`${passN} booked a flight of ${this.airlineName} with flight number ${this.type}${flightNum}`);
this.bookings.push({passN,flightNum});
    }
}
let airAsia={
    airlineName:"Air Asia",
    bookings:[],
    type:"AAX"
}
let indigo={
    airlineName:"Indigo",
    bookings:[],
    type:"IDX"
}
let kingfisher={
    airlineName:"Kingfisher",
    bookings:[],
    type:"KGF"
}
let book=airIndia.booking;
book.call(airAsia,"HANAN",2424);
console.log(airAsia.bookings);
book.call(indigo,"RUHAN",8799);
//apply method
let passengerInfo=["FARAH",8085];
book.apply(indigo,passengerInfo);
console.log(indigo.bookings);
book.call(airAsia,...passengerInfo);
//---------------------bind method-----------------------
let calcVAT=(rate)=>{
    return (amount)=>{
        console.log(`The VAT is ${amount + amount*rate}`)
    }
}
let vatRateIndia=calcVAT(0.12);
vatRateIndia(100);
let bookingAirAsia=book.bind(airAsia);
let bookingIndigo=book.bind(indigo);
let bookingking=book.bind(kingfisher);
bookingAirAsia("Mohammad amin",8876);
bookingIndigo("SHALLAL",9887);
//bind method with the event handler
airIndia.airPlaneNumber=998;
airIndia.buyPlane=function(){
    console.log(airIndia.airPlaneNumber);
    console.log(this);
    this.airPlaneNumber=this.airPlaneNumber+1;
    console.log(this.airPlaneNumber);
}
document.querySelector('.buy').addEventListener('click',airIndia.buyPlane.bind(airIndia));
//--------------------------------------challenge #1--------------------------------------
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]
    answers: new Array(4).fill(0),
    };
poll.registerNewAnswer=function(){
let answer=Number(prompt(`${this.question}
${this.options[0]}
${this.options[1]}
${this.options[2]}
${this.options[3]} 
 (write the option number)`));
 if(answer===0||answer===1||answer===2||answer===3){
this.answers[answer]++;
 }else{
    alert(`Write the answer from the given options`);
 }
 displayResults(this.answers);
}
let displayResults=function(type){
if(typeof type==='object'){
    console.log(`The poll results are ${type.join(',')}`);
}
if(typeof type==='string')
{
console.log(`Poll results are ${type}`);
}
}
let pollbutton=document.querySelector('.poll');
pollbutton.addEventListener('click',poll.registerNewAnswer.bind(poll));
//---------------------------------closures---------------------------------------------------
const bookingApp=function(){
    let passenger=0;
    return function(){
        passenger++;
        console.log(`${passenger} added`);
    }
}
let userBooked=bookingApp();
userBooked();
userBooked();
userBooked();
//----------------------------------coding challenge #2--------------------------
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click',function(){
        header.style.color='blue';
    })
    })()
































































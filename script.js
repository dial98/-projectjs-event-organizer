var nameOfTheEvent;
var isTheEventForAdults;
var num = Math.random();
var id=num.toString().substr(2,4);

//The Event object
var Event={
    init: function(nameOfTheEvent,isTheEventForAdults,id){
        this.nameOfTheEvent=nameOfTheEvent;        
        if(isTheEventForAdults==true ||isTheEventForAdults=="true"){
            isTheEventForAdultss="18+";            
        }
        else{
            isTheEventForAdultss="No Age Limit";            
        }
        this.isTheEventForAdults=isTheEventForAdultss;        
        this.id=id;               
    },
    describe:function(){
        var description=this.nameOfTheEvent+" "+this.isTheEventForAdults+" "+this.id;
        return description;
    }
};
//Creating the events,saving them as an objects;
var event1=Object.create(Event);
event1.init("Christmas Party 2018",false,id);

var event2=Object.create(Event);
event2.init("Easter Party 2019",false,id);

var event3=Object.create(Event);
event3.init("Gabriela's Birthday Party",false,id);

var event4=Object.create(Event);
event4.init("Grand Opening Megami Club Plovdiv",true,id);

var event5=Object.create(Event);
event5.init("Grand opening party boutique Aria",false,44);

//creating an array to store the events and display the info 
var events= [];
events.push(event1);
events.push(event2);
events.push(event3);
events.push(event4);
events.push(event5);

if(event5.id==44){
    delete events[4];
    //alert("Hey, the id of the Event 5 is 44 so it is deleted");
    //or
    console.log("Hey, the id of the Event 5 is 44 so it is deleted");
}

do{
nameOfTheEvent = prompt("Add the name of a new event here:");}
while(nameOfTheEvent==""||nameOfTheEvent===" ");

 isTheEventForAdults = prompt("Is the event for adults(true or false)");

var event6=Object.create(Event);
event6.init(nameOfTheEvent,isTheEventForAdults,id);
events.push(event6);

events.forEach(function(eventt){
    console.log(eventt.describe());

});

//GUESTS:
var name=prompt("Enter a name of a guest");
var gender=prompt("Enter a gender");
let age=prompt("Enter age of the guest");

var Guest={
    init: function(name,gender,age){

        this.name=name;
        this.gender=gender;
        if(isTheEventForAdults=="true" && age<18){            
            alert("The guest is not allowed to enter to this party due to the age!");
            do{
            age=prompt("Enter age of the guest");}            
            while(age<17);
        } 
        this.age=age;          
               
    },
    describe:function(){
        var description="The New Event: "+this.name+" "+this.gender+" "+this.age;
        return description;
    }
};
var guest1=Object.create(Guest);
guest1.init(name,gender,age);
//creating an array to store the guests and display the info 
var guests= [];
guests.push(guest1);

guests.forEach(function(guestt){
    console.log(guestt.describe());
});

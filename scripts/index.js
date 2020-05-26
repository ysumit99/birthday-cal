let birthdays = [];
let year;

//birthdays by day of week
let segregatedBirthdays = {
    "monday" : [],
    "tuesday" : [],
    "wednesday" : [],
    "thursday" : [],
    "friday" : [],
    "saturday" : [],
    "sunday" : []
};




let getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek];
}


let compareDates = (a, b) => {

    var aa = a.birthday.split('/').reverse().join(),
        bb = b.birthday.split('/').reverse().join();

    return aa  > bb ? -1 : (aa < bb ? 1 : 0);
}

let getDimension = (id) => {
   
}

let getCardSelector = (day) => {
    
    let selector = '';

    switch(day){

        case 'monday' : 
            selector = 'card-mon';
            break;

        case 'tuesday' : 
            selector = 'card-tue';
            break;

        case 'wednesday' : 
            selector = 'card-wed';
            break;

        case 'thursday' : 
            selector = 'card-thur';
            break;

        case 'friday' : 
            selector = 'card-fri';
            break;

        case 'saturday' : 
            selector = 'card-sat';
            break;

        case 'sunday' : 
            selector = 'card-sun';
            break;

        
    }

    return selector;
}

let fillCard = () => {
    
    for(day in segregatedBirthdays ){

         console.log(segregatedBirthdays[day]);
        let id = getCardSelector(day);
        let cardWidth = document.getElementById(id).clientWidth;
        let personCount = segregatedBirthdays[day].length;

        //get nearest perfect square
        let gridSize = Math.floor(Math.sqrt(personCount))+1;

        console.log("card width = " + cardWidth + " gridSize = " + gridSize);
        

        segregatedBirthdays[day].forEach(person => {

             //create element
            let newElement = document.createElement("div");
            
            console.log(person);
            let personInitials = person.name.split(" ");
            newElement.innerHTML = personInitials[0][0] + personInitials[1][0];
            newElement.style.height = cardWidth/gridSize;

            newElement.style.width = cardWidth/gridSize;

            console.log("height = "  +  newElement.style.height +  " | width = " +  newElement.style.height);
            newElement.style.display = 'block';
            newElement.style.border = '1px solid red';
            console.log(newElement);

            document.getElementById(id).append(newElement);
        })

       

    }

}

let getData = (e) => {

    e.preventDefault();
   
   //get input data
   birthdays = document.getElementById('json-input').value;
   year = document.getElementById('year-input').value;
   
  //parse data
   birthdays = JSON.parse(birthdays);
 
 //sort birthday by youngest to oldest
 let sortedBirthdays = birthdays.sort(compareDates);
 console.log(sortedBirthdays);

 
 sortedBirthdays.forEach((person) => {
   
  //segregate birthdays by day of the week
   segregatedBirthdays[getDayOfWeek(person.birthday)].push(person);

 });

 console.log(segregatedBirthdays);

  fillCard();
  
  

}

document.getElementById('update').onclick = getData;

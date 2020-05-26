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
 })

    
 console.log(segregatedBirthdays);

}

document.getElementById('update').onclick = getData;

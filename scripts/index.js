let birthdays = [];
let year;



let dayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
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
    
   

}

document.getElementById('update').onclick = getData;

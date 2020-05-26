//input data
let birthdays = [];
let year;

//birthdays by day of week
let segregatedBirthdays = {
    "monday": [],
    "tuesday": [],
    "wednesday": [],
    "thursday": [],
    "friday": [],
    "saturday": [],
    "sunday": []
};




let getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
        ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek];
}


let compareDates = (a, b) => {

    var aa = a.birthday.split('/').reverse().join(),
        bb = b.birthday.split('/').reverse().join();

    return aa > bb ? -1 : (aa < bb ? 1 : 0);
}

let getDimension = (id) => {

}

let getInitials = (name) => {
    let initials = name.split(" ");
    return initials[0][0] + initials[1][0];
}

const getRandomColor = () => {

    const colorsArray = ["#6EE33B", "#F6982D", "#FA4861", "#F959ED", "#53B8F6", "#728FDC", "#373AEF", "#F776AA", "#c7ff20", "#ff81fa", "#ff956a"];
    return colorsArray[Math.floor((Math.random() * colorsArray.length))];
}

let createSquare = (person) => {


    let newElement = document.createElement("div");
    newElement.innerHTML = getInitials(person.name);
    newElement.style = `
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${getRandomColor()};
        border: 1px solid red;
        color: white;
        font-family: 'Open Sans', sans-serif;
     `;

    return newElement;
}

let getCardSelector = (day) => {

    let selector = '';

    switch (day) {

        case 'monday':
            selector = 'card-mon';
            break;

        case 'tuesday':
            selector = 'card-tue';
            break;

        case 'wednesday':
            selector = 'card-wed';
            break;

        case 'thursday':
            selector = 'card-thur';
            break;

        case 'friday':
            selector = 'card-fri';
            break;

        case 'saturday':
            selector = 'card-sat';
            break;

        case 'sunday':
            selector = 'card-sun';
            break;


    }

    return selector;
}

let fillCard = () => {

    for (day in segregatedBirthdays) {

        //get card dimensions
        let id = getCardSelector(day);
        let cardWidth = document.getElementById(id).clientWidth;

        //total squares to be generated
        let personCount = segregatedBirthdays[day].length;

        //square count
        let squaresPerRow = Math.floor(Math.sqrt(personCount)) + 1;

        //single square dimension
        let squareDimension = cardWidth / squaresPerRow;

        //dynamically create grid 
        document.getElementById(id).style.gridTemplateColumns = `repeat(${squaresPerRow}, ${squareDimension}px)`;
        document.getElementById(id).style.gridTemplateRows = `repeat(${squaresPerRow}, ${squareDimension}px)`;

        //create squares
        segregatedBirthdays[day].forEach(person => {

            let newSquare = createSquare(person);
            document.getElementById(id).appendChild(newSquare);


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


    // fill card
    fillCard();



}

document.getElementById('update').onclick = getData;

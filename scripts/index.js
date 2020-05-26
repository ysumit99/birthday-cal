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





const createSquare = (person) => {


    let newElement = document.createElement("div");
    newElement.classList.add('square');
    newElement.innerHTML = getInitials(person.name);
    newElement.style = `
        display: flex;
        font-weight: 300; 
        justify-content: center;
        align-items: center;
        background: ${getRandomColor()};
        color: white;
        font-family: 'Open Sans', sans-serif;
     `;

    return newElement;
}

const noBirthdaySquare = () => {

    let newElement = document.createElement("div");
    newElement.classList.add('square');
    newElement.classList.add('no-birthday-img');
    newElement.innerHTML = `
    <div style = "height: 298px">
        <img src='../images/no-birthday.svg' height= "100%" width="100%" />
    </div>
    `;
    newElement.style = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    return newElement;
}



const resetCards = () => {

    //reset data
    for (key in segregatedBirthdays) {
        segregatedBirthdays[key] = [];
    }

    //reset dom
    let card = document.getElementById('card-mon');
    card.innerHTML = '';
    card = document.getElementById('card-tue');
    card.innerHTML = '';
    card = document.getElementById('card-wed');
    card.innerHTML = '';
    card = document.getElementById('card-thur');
    card.innerHTML = '';
    card = document.getElementById('card-fri');
    card.innerHTML = '';
    card = document.getElementById('card-sat');
    card.innerHTML = '';
    card = document.getElementById('card-sun');
    card.innerHTML = '';





}

const fillCard = () => {

    for (day in segregatedBirthdays) {

        //get card dimensions
        let id = getCardSelector(day);
        let cardWidth = getDimension(id);

        //total squares to be generated
        let personCount = segregatedBirthdays[day].length;

        //square count
        let squaresPerRow = (Math.sqrt(personCount) % 1 === 0) ? Math.floor(Math.sqrt(personCount)) : Math.floor(Math.sqrt(personCount)) + 1;
        console.log(squaresPerRow);
        //each square dimension
        let squareDimension = cardWidth / squaresPerRow;

        //dynamically create grid 
        document.getElementById(id).style.gridTemplateColumns = `repeat(${squaresPerRow}, ${squareDimension}px)`;
        document.getElementById(id).style.gridTemplateRows = `repeat(${squaresPerRow}, ${squareDimension}px)`;

        //create squares
        segregatedBirthdays[day].forEach(person => {

            let newSquare = createSquare(person);
            document.getElementById(id).appendChild(newSquare);


        })

        //zero birthdays
        if (squaresPerRow === 0) {
            let newSquare = noBirthdaySquare();
            document.getElementById(id).appendChild(newSquare);
        }



    }

}

const processInput = (e) => {

    e.preventDefault();

    //reset previous result
    birthdays.length > 0 ? resetCards() : null;

    //get input data
    birthdays = document.getElementById('json-input').value;
    year = document.getElementById('year-input').value;

    //parse data
    birthdays = JSON.parse(birthdays);

    //sort birthday by youngest to oldest
    let sortedBirthdays = birthdays.sort(compareDates);
    console.log(sortedBirthdays);


    sortedBirthdays.forEach((person) => {

        //get day of the week for selected year
        let selectedYear = person.birthday.split("/").map((ele, index) => index === 2 ? year : ele).join("/");

        segregatedBirthdays[getDayOfWeek(selectedYear)].push(person);

    });

    console.log(segregatedBirthdays);


    // fill card
    fillCard();



}

document.getElementById('update').onclick = processInput;

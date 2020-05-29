window.addEventListener('DOMContentLoaded', (event) => {

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
        border: 1px solid white;
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
        newElement.style = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
        newElement.innerHTML = `
    <div>
   
        <img src='../images/no-birthday.svg' class="no-birthday-img"  />

        <p class="no-birthday-text" >No Birthdays!</p>
    </div>
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

    const scrollBackToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
    }

    const fillCard = () => {

        for (day in segregatedBirthdays) {

            //get card dimensions
            let id = getCardSelector(day);
            let cardWidth = getDimension(id);


            //squares and dimension calculation
            let personCount = segregatedBirthdays[day].length;
            let squaresPerRow = (Math.sqrt(personCount) % 1 === 0) ? Math.floor(Math.sqrt(personCount)) : Math.floor(Math.sqrt(personCount)) + 1;
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


    const validateData = (ele) => {

        let errorMessage = "";

        if (!("name" in ele)) {
            errorMessage = "name not found";

        } else if (!("birthday" in ele)) {

            errorMessage = "birthday not found";

        } else if (ele["name"].split(" ").length < 2) {

            errorMessage = "first or last name missing";

        } else if (!isValidDate(ele["birthday"])) {

            errorMessage = "not a valid date";
        }


        return errorMessage;
    }

    const processInput = (e) => {

        e.preventDefault();
        resetCards();

        //get input data
        birthdays = document.getElementById('json-input').value;
        year = document.getElementById('year-input').value;

        //parse data

        try {
            birthdays = JSON.parse(birthdays);

            //convert to array if single object
            if (!Array.isArray(birthdays)) {
                let temp = [];
                temp.push(birthdays);
                birthdays = temp;
            }

            //validation
            for (let i = 0; i < birthdays.length; i++) {

                errorMessage = validateData(birthdays[i]);
                if (errorMessage !== "") {
                    alert(errorMessage);
                    location.reload();
                }
            }


        } catch (e) {
            alert("Please enter a valid data");
            location.reload();
        }

        //sort birthday by youngest to oldest
        let sortedBirthdays = birthdays.sort(compareDates);


        //segregate by day of week
        sortedBirthdays.forEach((person) => {

            let selectedYear = person.birthday.split("/").map((ele, index) => index === 2 ? year : ele).join("/");
            segregatedBirthdays[getDayOfWeek(selectedYear)].push(person);

        });

        // fill card and scroll to top
        fillCard();
        scrollBackToTop();

    }

    document.getElementById('birthday-cal').onsubmit = processInput;
    document.getElementById("json-input").focus();


});

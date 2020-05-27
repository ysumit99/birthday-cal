const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
        ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek];
}


const compareDates = (a, b) => {

    var aa = a.birthday.split('/').reverse().join(),
        bb = b.birthday.split('/').reverse().join();

    return aa > bb ? -1 : (aa < bb ? 1 : 0);
}

const getDimension = (id) => {
    return document.getElementById(id).clientWidth;
}

const getInitials = (name) => {
    let initials = name.split(" ");
    return initials[0][0] + initials[1][0];
}

const getRandomColor = () => {

    const colorsArray = ["#6EE33B", "#F6982D", "#FA4861", "#F959ED", "#53B8F6", "#728FDC", "#373AEF", "#F776AA", "#c7ff20", "#ff81fa", "#ff956a"];
    return colorsArray[Math.floor((Math.random() * colorsArray.length))];
}

const getCardSelector = (day) => {

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


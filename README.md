# Birthday Cal

<img src = "./images/calendar-icon.svg" height = "100px" width = "100px" />

Birthday Cal is a week long Calendar. It's a fun way to demonstrate Vanilla JS skills.

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/1c433269-69cc-4210-971c-6ed4d7a3a38a/deploy-status)](https://app.netlify.com/sites/birthday-cal/deploys)

[Deployed Site](https://birthday-cal.netlify.app)

## How does it work

Just drop a json data in the text area in the below given format and hit the update button to see the magic!

Render a card for each day of the week. For a given year, figure out whose birthday belongs to which card. Place people's initials in the card according to the these rules.

1. Each person must always be rendered as a square.
2. Use person's initials to label birthdays.
3. Order people inside the card based on their age(youngest to oldest)
4. Each square in a card must be of equal size and should fill up as much space in the card as possible.

```js
[
  {
    name: "Tyrion Lannister",
    birthday: "12/02/1978",
  },
  {
    name: "Cersei Lannister",
    birthday: "11/30/1975",
  },
  {
    name: "Daenerys Targaryen",
    birthday: "11/24/1991",
  },
  {
    name: "Arya Stark",
    birthday: "11/25/1996",
  },
];
```

### sample data file

[data.json](./data.json)

### Input

![sample input](./images/input.png)

### Output

![sample output](./images/output.png)

![no birthday](./images/output2.png)

## Usage

1.  Clone the repository

        git clone URL

2.  `cd` into the repository folder

3.  Open the index.html file using modern web browser or launch using live server in VSCode.

## App Performance

![LightHouse audit](./images/auditLightHouse.png)

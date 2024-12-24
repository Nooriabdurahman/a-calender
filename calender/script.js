
let third = new Date().getDate();

let days = document.querySelectorAll('h3');

let html1 = document.getElementById('date');
html1.textContent = third;

days.forEach(dayElement => {
  let dayNumber = parseInt(dayElement.textContent); 

  if (dayNumber === third) {
    dayElement.style.backgroundColor = 'pink';
    dayElement.style.color = 'black';
    dayElement.style.display = 'flex';
    dayElement.style.alignItems = 'center';
    dayElement.style.justifyContent= 'center';
    
  } else {
    dayElement.style.backgroundColor = 'transparent';
  }
});

let month = new Date();
month = month.getMonth();
const monthh = document.getElementById('month');

switch (month) {
    case 0:
        monthh.textContent ='January';
        break;
    case 1:
        monthh.textContent ='February';
        break;
    case 2:
        monthh.textContent ='March';
        break;
    case 3:
        monthh.textContent ='April';
        break;
    case 4:
        monthh.textContent ='May';
        break;
    case 5:
        monthh.textContent ='June';
        break;
    case 6:
        monthh.textContent ='July';
        break;
    case 7:
        monthh.textContent ='August';
        break;
    case 8:
        monthh.textContent ='September';
        break;
    case 9:
        monthh.textContent ='October';
        break;
    case 10:
        monthh.textContent ='November';
        break;
    case 11:
        monthh.textContent ='December';
        break;
    default:
        console.log('Invalid month');
        break;
}

let day = new Date();
day =  day.getDay();
console.log(day);


let dayy = document.getElementById('day');
switch( day ){ 
    case 0 :
        dayy.textContent ='Sunday';
        break
        case 1 :
        dayy.textContent ='Monday ';
        break
        case 2 :
        dayy.textContent ='tuesday';
        break
        case 3 :
        dayy.textContent ='Wednsday';
        break
        case 4 :
        dayy.textContent ='thursday';
        break
        case 5 :
        dayy.textContent ='friday';
        break
        case 6 :
        dayy.textContent ='Sunday';
        break
    }

    let year = new Date();
year = year.getFullYear();
console.log(year);

let http = document.getElementById('year');
http.textContent = year;
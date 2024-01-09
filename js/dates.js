//STEP 1
// let userInput = prompt('Enter month number')

// let numDays = (y, userInput) => new Date(y, userInput, 0).getDate();
// alert(`There are ${numDays(2024, userInput)} days in month ${userInput} in 2024`)


//STEP 2
// let d = new Date(prompt('Enter date in mm/dd/yy format'))
// let month = d.toLocaleString('default', { month: 'long' })
// alert(month)



//STEP 3
// let userDate = new Date(prompt('Enter date in mm/dd/yy format'))
// let day = userDate.getDay()

// console.log(day)
// if (day == 0 || day == 6) {
//     alert('Weekend!')
// } else {
//     alert('Not a weekend :(')
// }


//STEP 4
// let userDate = new Date()
// let yesterday = new Date(userDate)

// yesterday.setDate(yesterday.getDate() - 1)


// console.log(yesterday)


//STEP 5



switch (new Date().getDay()) {
    case 0:
      day = "S";
      break;
    case 1:
      day = "M";
      break;
    case 2:
       day = "T";
      break;
    case 3:
      day = "W";
      break;
    case 4:
      day = "T";
      break;
    case 5:
      day = "F";
      break;
    case 6:
      day = "S";
  }

  console.log(day)



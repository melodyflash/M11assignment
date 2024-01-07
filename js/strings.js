//STEP 1

// let userName = prompt('What is your name?')

// alert(`There are ${userName.length} characters in your name`)

//STEP 2
// let userName = prompt('What is your name?')

// let userNumber = prompt(`Choose a number from 1 to ${userName.length}`)

// while (userNumber > userName.length) {
//     userNumber = prompt(`Number is too large. Choose a number from 1 to ${userName.length}`)
// }

// let numberPos = userName[userNumber - 1].toUpperCase()

// alert(`The letter ${numberPos} is in the position of the number you picked, ${userNumber}.`)


//STEP 3
// let firstName = prompt('What is your first name?') + ' '
// let lastName = prompt('What is your last name?')

// alert(`Your name is ${firstName.concat(lastName)}`)


//STEP 4
// let text = "The quick brown fox jumps over the lazy dog"
// alert(`The word fox is found on index ${text.indexOf('fox')}`)

//STEP 5
// let text = "The quick brown fox jumps over the lazy fox"
// alert(`The word fox is found on index ${text.lastIndexOf('fox')}`)

//STEP 6

// let text = "The quick brown fox jumps over the lazy dog"
// let userName = prompt('What is your name?')

// alert(text.replace('the lazy dog', userName))

//STEP 7
// let text = "The quick brown fox jumps over the lazy dog".split(' ')
// console.log(text)

// let wordToSearch = prompt('Enter word to search in text')

// let searchResult = text.includes(wordToSearch)

// alert(`Is the word ${wordToSearch} found in the text string?\n${searchResult}`)

//STEP 8

// let old_string = "The quick brown fox jumps over the lazy dog"

// let new_string = old_string.slice(31, 43).toUpperCase()

// alert(`New string is: ${new_string}`)

//STEP 9

// let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ".toLowerCase()

// alert(`The text is "${text.trim()}".`)

//STEP 10

// let text = "the quick brown fox jumps over the lazy dog"

// alert(`The text is:\n${text.replace('t', 'T')}`)

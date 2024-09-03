//Functions
function printNumbersButton(){
    document.getElementById("output").innerHTML = result;
    console.log(result)
}

function calculateNumbers(){
let number = 0;

    for (let i =0; i < 10 ; i ++){
        number +=9
        result.push(number)
    }
    console.log(result)
    printNumbersButton()
}


function printNames(){
    let nameHtml = "";
    for(let i =0; i < names.length; i++){
            nameHtml += `<li>${names[i]}</li>`
    }
    return nameHtml;
}


function addName(nameString){
    names.push(nameString);
    updateView();
}


function printHowManyVowels(){
    outputVowels.innerHTML = howManyVowels;
    console.log(howManyVowels)
}

function checkVowels(){
    let userInputWord = document.getElementById('inputWordToCheck') ;

    for (let i = 0; i < userInputWord.value; i++) {
       if (vowels.includes(userInputWord.value[i])){
        vowelResult ++;

        outputVowels.innerHTML = vowelResult;
       }
       console.log(userInputWord)
}
}
//Functions
function printNumbersButton() {
  document.getElementById("output").innerHTML = result;
  console.log(result);
}

function calculateNumbers() {
  let number = 0;

  for (let i = 0; i < 10; i++) {
    number += 9;
    result.push(number);
  }
  console.log(result);
  printNumbersButton();
}

function printNames() {
  let nameHtml = "";
  for (let i = 0; i < names.length; i++) {
    nameHtml += `<li>${names[i]}</li>`;
  }
  return nameHtml;
}

function addName(nameString) {
  names.push(nameString);
  updateView();
}


function checkVowels(input) {
  console.log(input);

  const outputVowels = document.getElementById('outputVowels');
  let userInputWord = document.getElementById('inputWordToCheck');

  for (let i = 0; i < vowelInput.length; i++) {
    if (vowels.includes(vowelInput[i])) {
      vowelResult ++;
      outputVowels.innerHTML = vowelResult;
    }
  }
  updateView()
  vowelResult = 0;
}

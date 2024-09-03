// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------
updateView()

function updateView() {
  app.innerHTML = /*HTML*/ ` 
    <div id="output"></div>
    <button onclick="calculateNumbers()">Print Numbers</button>

    <br><br><br><br><br>
    <div id="outputName">
      ${printNames()}
    </div>
    <input id="inputNameHere" type="text">
    <button id="submitName" onclick="addName(document.getElementById('inputNameHere').value)">Submit Name</button>
    
    
    
    <br><br><br><br><br>
    <h3>Vokal teller </h3>
    <div id="outputVowels">${vowelResult}</div>
    <input id="inputWordToCheck" type="text" placeholder ="Sjekk ord eller setning">
    <button onclick="checkVowels()">Sjekk</button>
  `;
}
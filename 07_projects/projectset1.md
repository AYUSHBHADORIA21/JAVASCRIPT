# Projects Related To DOM

## Project Link

[Click-here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project - 1 Solution

```JavaScript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
      button.addEventListener("click" , function(value){
        if(value.target.id === 'grey')
        {
          body.style.backgroundColor = value.target.id;
        }
        if(value.target.id === 'white')
        {
          body.style.backgroundColor = value.target.id;
        }
        if(value.target.id === 'blue')
        {
          body.style.backgroundColor = value.target.id;
        }
        if(value.target.id === 'yellow')
        {
          body.style.backgroundColor = value.target.id;
        }
      })
})

```

## Project - 2 Solution

```JavaScript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;


    const under = document.querySelector
    (".under")
    const between = document.querySelector(".between")
    const greater = document.querySelector(".greater")


     if(bmi <= 18.6)
    {
      
      under.style.color = "green";
      greater.style.color = "black";
      between.style.color = "black";

      
    }else if(bmi >= 18.6 && bmi<=24.9)
    {
      
      between.style.color = "yellow";
      under.style.color = "black";
      greater.style.color = "black";
      
      
    }
    if(bmi >= 24.9)
    {
     
      greater.style.color = "red";
      under.style.color = "black";
      between.style.color = "black";
      
    }
  }
});
```

# Project-3 Solution

```Javascript
const clock = document.getElementById("clock")

setInterval(function(){
  let date = new Date();
  clock.innerHTML= date.toLocaleTimeString();
}, 1000);

```

# Project - 4 Solution

```JavaScript
let randomNumber = parseInt(Math.random()*100 +1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const StartOver  = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess =[]
let numGuesses = 1 ;

let playGame = true ; 

if(playGame)
{
  submit.addEventListener("click" , function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess)
{
  if(isNaN(guess))
  {
    alert("please enter a valid number")
  }
  else if(guess < 1)
  {
    alert("Enter number greater than 1")
  }
  else if(guess >100)
  {
    alert("enter the number under 100")
  }
  else 
  {
    prevGuess.push(guess)
    if(numGuesses===11)
    {
      displayGuess(guess)
      displayMessage(`Game over , Random number was ${randomNumber}`)
      endGame()
    }
    else 
    {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess)
{
  if(guess === randomNumber)
  {
    displayMessage("You guessed it right")
    endGame();
  }
  else if (guess < randomNumber)
  {
    displayMessage("Number is too low")
  }
  else if (guess > randomNumber)
  {
    displayMessage("Number is too high")
  }
}

function displayGuess(guess)
{
  userInput.value = ""
  guessSlot.innerHTML += ` ${guess} |`
  numGuesses++
  remaining.innerHTML = `${11-numGuesses}`
}


function displayMessage(message)
{
  lowOrHi.innerHTML = `<h1>${message}</h1>`
}
function endGame()
{
    userInput.value = ""
    userInput.setAttribute('disabled' , "")
    p.classList.add("button")
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`
    StartOver.append(p)
    playGame = false ;
    newGame()
}
function newGame()
{
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click" , function(e){
    randomNumber = parseInt(Math.random()*100 +1)
    prevGuess = []
    numGuesses = 1 
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11-numGuesses}`;
    lowOrHi.innerHTML =""
    userInput.removeAttribute("disabled")
    StartOver.removeChild(p)
    playGame = true ; 

  })

}
```


# Project 05 - Solutions

```JavaScript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});



```

# Problem 6 -Solution
```JavaScript

//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```

# Problem 7 Solution

```JavaScript

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E", "F"]

function getCharacters(index){
  return hexCharacters[index];
}

function generateNewColor(){
  let hexColorRep ="#"

  for(let i = 0 ; i<6 ;i++){
    const random = Math.floor(Math.random()*hexCharacters.length)
    hexColorRep +=getCharacters(random)
  }
  return hexColorRep
}

let stop = null ;

document.querySelector("#start").addEventListener("click", function(){

  if(stop===null)
  {
    stop = setInterval(()=>{
      const newColor = generateNewColor();
      document.querySelector("body").style.backgroundColor = `${newColor}`
    },1000)
  }

  
});

document.querySelector("#stop").addEventListener("click", function(){
  if(stop!==null)
  {
    clearInterval(stop);
    stop = null;
  }
});
```
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

# Project-3 Solutions

```Javascript
const clock = document.getElementById("clock")

setInterval(function(){
  let date = new Date();
  clock.innerHTML= date.toLocaleTimeString();
}, 1000);

```

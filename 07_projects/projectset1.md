# Projects Related To DOM

## Project Link

[Click-here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project - 1

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
let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        
        console.log('button text is', buttonText);
        if (buttonText == 'X') {
            console.log("hello")
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == 'C') {
            screen.value = screenValue;

        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);

        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;

        }
    })
}
let listbutton = document.querySelectorAll('.button button');
let lastReturn= document.querySelector('.screen .last');
let newReturn = document.querySelector('.screen .new');

let firstNumber = null;
let newNumber = null;
let caculator = "+";
 
function reloadScreen() {
    lastReturn.innerText = firstNumber? firstNumber+ caculator: "";
    newReturn.innerText = newNumber? newNumber : "";
}
reloadScreen();
listbutton.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        console.log(value);

        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                newNumber= newNumber?  newNumber+ value : value;
                break;
            case '.':
                newNumber= newNumber?  newNumber+ value : '0.';
                break;
            case '±':
                newNumber= newNumber*-1;
                break;
            case '%':
                newNumber= 0.01*newNumber;
                break;
            case '+':
            case '-':
            case 'x':
            case '/':
                if (newNumber){
                    if (firstNumber) {
                        applyCaculator();
                    }
                    caculator = value;
                    firstNumber = newNumber;
                    newNumber = null;
                }
                break;
            case '=':
                applyCaculator();
                firstNumber = null;
                break;
            case 'AC':
                firstNumber = null;
                newNumber = null;
                caculator = '+';
                break;

            default:
                break;

        }
        reloadScreen();
    })
})
function applyCaculator() {
    switch (caculator){
        case "+":
            newNumber = Number(firstNumber)+ Number(newNumber);
            break;
        case "-":
            newNumber = Number(firstNumber)- Number(newNumber);
            break;
        case "x":
            newNumber = Number(firstNumber)* Number(newNumber);
            break;
        case "/":
            newNumber = (firstNumber/ newNumber).toFixed(4);
            break;
    }


}
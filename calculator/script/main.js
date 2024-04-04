function calculator(){
    let firstNumber = parseFloat(document.getElementById('first-number').value);
    
    let secondNumber = parseFloat(document.getElementById('second-number').value);
    let calculationType = document.getElementById('calculation').value;

    if(calculationType == 'Addition'){
        let result = firstNumber + secondNumber;
        let displayResult = document.getElementById('display-result');
        displayResult.classList.remove('text-danger');
        displayResult.classList.add('text-primary');
        displayResult.innerText = `Sum of ${firstNumber} and ${secondNumber} is: ${result}`;
    }
    else if(calculationType == 'Subtraction'){
        let result = firstNumber - secondNumber;
        let displayResult = document.getElementById('display-result');
        displayResult.classList.remove('text-danger');
        displayResult.classList.add('text-primary');
        displayResult.innerText = `Subtraction of ${firstNumber} and ${secondNumber} is: ${result}`;
    }
    else if(calculationType == 'Multiplication'){
        let result = firstNumber * secondNumber;
        let displayResult = document.getElementById('display-result');
        displayResult.classList.remove('text-danger');
        displayResult.classList.add('text-primary');
        displayResult.innerText = `Multiplication of ${firstNumber} and ${secondNumber} is: ${result}`;
    }
    else if(calculationType == 'Division'){
        let result = firstNumber / secondNumber;
        let displayResult = document.getElementById('display-result');
        displayResult.classList.remove('text-danger');
        displayResult.classList.add('text-primary');
        displayResult.innerText = `Division of ${firstNumber} and ${secondNumber} is: ${result}`;
    }
    else{
        let displayResult = document.getElementById('display-result');
        displayResult.classList.remove('text-primary');
        displayResult.classList.add('text-danger');
        displayResult.innerText = `Enter a valid input!`;
    }

}
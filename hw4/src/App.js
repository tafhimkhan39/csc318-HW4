import React, { useState } from 'react';


function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (buttonText) => {
    switch (btnValue) {
      case 'x!':
        try {
          setDisplayValue(factorial((displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case '%':
        try {
          setDisplayValue((display.value) / 100);
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'AC':
        setDisplayValue('');
        break;
      case 'sin':
        try {
          setDisplayValue(Math.sin((displayValue * Math.PI) / 180));
          } catch {
          setDisplayValue('Error');
          }
        break;
      case 'ln':
        try {
          setDisplayValue(Math.log((displayValue)));
          } catch {
          setDisplayValue('Error');
          }
        break;
      case 'cos':
        try {
          setDisplayValue(Math.cos((displayValue * Math.PI) / 180));
          } catch {
          setDisplayValue('Error');
          }
        break;
      case 'log':
        try {
          setDisplayValue(Math.log10((displayValue)));
          } catch {
          setDisplayValue('Error');
          }
        break;
      case 'tan':
        try {
          setDisplayValue(Math.tan((displayValue * Math.PI) / 180));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case '√':
        try {
          setDisplayValue(Math.sqrt((displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'EXP':
        try {
          setDisplayValue(Math.exp((displayValue)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case 'x^y':
        try {
          const base = displayValue;
          const exponent = displayValue;
          setDisplayValue(Math.pow((base), (exponent)));
        } catch {
          setDisplayValue('Error');
        }
        break;
      case '=':
        try {
          setDisplayValue(evalExpression(displayValue));
          } catch {
          setDisplayValue('Error');
          }
        break;
      default:
        if (displayValue === 'Error') {
          setDisplayValue(btnValue);
        } else {
          setDisplayValue(displayValue + btnValue);
        }
    }
  };

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

function evalExpression(expression) {
  expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
  expression = expression.replace(/(-?\d+)([+\-*\/])(-?\d+)/g, (_, num1, operator, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
      case '/':
        return num1 / num2;
      case '*':
        return num1 * num2;
      case '-':
        return num1 - num2;
      case '+':
        return num1 + num2;
    }
  });



let result = eval(expression); 

return result;
}

  return (
    <div class="container">
        
        <input type="text" class="bar" id="display" placeholder="0"></input>


        <div class="buttons">
            <button onClick={() => handleButtonClick('Deg')}>Deg</button>
            <button onClick={() => handleButtonClick('x!')}>x!</button>
            <button onClick={() => handleButtonClick('(')}>(</button>
            <button onClick={() => handleButtonClick(')')}>)</button>
            <button onClick={() => handleButtonClick('%')}>%</button>
            <button onClick={() => handleButtonClick('AC')}>AC</button>
           
            <button onClick={() => handleButtonClick('sin')}>sin</button>
            <button onClick={() => handleButtonClick('ln')}>ln</button>
            <button class="light-grey" onClick={() => handleButtonClick('7')}>7</button>
            <button class="light-grey " onClick={() => handleButtonClick('8')}>8</button>
            <button class="light-grey " onClick={() => handleButtonClick('9')}>9</button>
            <button onClick={() => handleButtonClick('÷')}>÷</button>

            <button onClick={() => handleButtonClick('cos')}>cos</button>
            <button onClick={() => handleButtonClick('log')}>log</button>
            <button class="light-grey" onClick={() => handleButtonClick('4')}>4</button>
            <button class="light-grey" onClick={() => handleButtonClick('5')}>5</button>
            <button class="light-grey" onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={() => handleButtonClick('x')}>x</button>

            <button onClick={() => handleButtonClick('tan')}>tan</button>
            <button onClick={() => handleButtonClick('√')}>√</button>
            <button class="light-grey" onClick={() => handleButtonClick('1')}>1</button>
            <button class="light-grey" onClick={() => handleButtonClick('2')}>2</button>
            <button class="light-grey" onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('-')}>-</button>

            <button onClick={() => handleButtonClick('EXP')}>EXP</button>
            <button onClick={() => handleButtonClick('x^y')}>x^y</button>
            <button class="light-grey" onClick={() => handleButtonClick('0')}>0</button>
            <button class="light-grey" onClick={() => handleButtonClick('.')}>.</button>
            <button class="blue" onClick={() => handleButtonClick('=')}>=</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
    </div>
  );
}
  

export default App;
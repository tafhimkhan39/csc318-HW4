import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  // Implement button functionality
  const buttonClick = (buttonText) => {
    switch (btnValue) {
      case 'x!':
        try {
          display.value = factorial((display.value));
        } catch {
          display.value = 'Error';
        }
        break;
      case '%':
        try {
          display.value = (display.value) / 100;
        } catch {
          display.value = 'Error';
        }
        break;
      case 'AC':
        display.value = '';
        break;
      case 'sin':
        try {
          display.value = Math.sin((display.value * Math.PI) / 180);
          } catch {
          display.value = 'Error';
          }
        break;
      case 'ln':
        try {
          display.value = Math.log((display.value));
          } catch {
          display.value = 'Error';
          }
        break;
      case 'cos':
        try {
          display.value = Math.cos((display.value * Math.PI) / 180);
          } catch {
          display.value = 'Error';
          }
        break;
      case 'log':
        try {
          display.value = Math.log10((display.value));
          } catch {
          display.value = 'Error';
          }
        break;
      case 'tan':
        try {
          display.value = Math.tan((display.value * Math.PI) / 180);
        } catch {
          display.value = 'Error';
        }
        break;
      case '√':
        try {
          display.value = Math.sqrt((display.value));
        } catch {
          display.value = 'Error';
        }
        break;
      case 'EXP':
        try {
          display.value = Math.exp((display.value));
        } catch {
          display.value = 'Error';
        }
        break;
      case 'x^y':
        try {
          const base = display.value;
          const exponent = display.value;
          display.value = Math.pow((base), (exponent));
        } catch {
          display.value = 'Error';
        }
        break;
      case '=':
        try {
          display.value = evalExpression(display.value);
          } catch {
          display.value = 'Error';
          }
        break;
      default:
        if (display.value === 'Error') {
          display.value = btnValue;
        } else {
          display.value += btnValue;
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
            <button >Deg</button>
            <button >x!</button>
            <button >(</button>
            <button >)</button>
            <button >%</button>
            <button >AC</button>
           
            <button >sin</button>
            <button >ln</button>
            <button class="light-grey">7</button>
            <button class="light-grey ">8</button>
            <button class="light-grey ">9</button>
            <button >÷</button>

            <button >cos</button>
            <button >log</button>
            <button class="light-grey">4</button>
            <button class="light-grey">5</button>
            <button class="light-grey">6</button>
            <button >x</button>

            <button >tan</button>
            <button >√</button>
            <button class="light-grey">1</button>
            <button class="light-grey">2</button>
            <button class="light-grey">3</button>
            <button >-</button>

            <button >EXP</button>
            <button >x^y</button>
            <button class="light-grey">0</button>
            <button class="light-grey">.</button>
            <button class="blue">=</button>
            <button >+</button>
        </div>
    </div>
  );
}
  

export default App;
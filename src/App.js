import React, { useEffect, useState } from 'react';
import './App.css';

function App () {
   const [result, setResult] = useState('');
   
   function handleClick(e) {
      const ch = ["/","*","-","+","."];
      const arr = ["*","/"];
      if(result === "" && arr.includes(e.target.name)){
         setResult(result);
      }else {
         if(ch.includes(e.target.name)){
            var temp = ["/","*","-","+","."];
            temp = temp.filter(function(item) {
               return item !== e.target.name
            })
            if(result.slice(-1) == e.target.name || temp.includes(result.slice(-1))){
               setResult(result);
            }else setResult(result.concat(e.target.name));
         }else {
            setResult(result.concat(e.target.name));
         }
      }
   }
      
   function backspace() {
      setResult(result.slice(0, -1));
   }

   function clear() {
      setResult("");
   }

   function calculate() {
      try {
         setResult(eval(result).toString());
      }catch {
         setResult("Error");
      }
   }

   return (
      
      <div className="calc_app">
         
         <div className="outline">
            <form className="result_outline">
               <div >{result}</div>
            </form>

            <div className="keypad">
               <button className="btn" id="clear" onClick={clear}>Clear</button>
               <button className="btn" id="backspace" onClick={backspace}>C</button>
               <button id="plus" className="btn" name="+" onClick={handleClick}>+</button>
               <button className="btn" name="7" onClick={handleClick}>7</button>
               <button className="btn" name="8" onClick={handleClick}>8</button>
               <button className="btn" name="9" onClick={handleClick}>9</button>
               <button className="btn" name="-" onClick={handleClick}>-</button>
               <button className="btn" name="4" onClick={handleClick}>4</button>
               <button className="btn" name="5" onClick={handleClick}>5</button>
               <button className="btn" name="6" onClick={handleClick}>6</button>
               <button className="btn" name="*" onClick={handleClick}>×</button>
               <button className="btn" name="1" onClick={handleClick}>1</button>
               <button className="btn" name="2" onClick={handleClick}>2</button>
               <button className="btn" name="3" onClick={handleClick}>3</button>
               <button className="btn" name="/" onClick={handleClick}>/</button>
               <button className="btn" name="0" onClick={handleClick}>0</button>
               <button className="btn" name="." onClick={handleClick}>.</button>
               <button className="btn" id="result" onClick={calculate}>=</button>
            </div> 
         </div>
         
      </div>
   )
}

export default App;
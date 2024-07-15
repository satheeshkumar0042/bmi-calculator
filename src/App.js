import { useState } from 'react';
import './App.css';
 
function App() {
const[height,setHeight]=useState("")
const[weight,setWeight]=useState("")
const[bmi,setBmi]=useState(null)
const[bmistatus,setBmistatus]=useState("")
const[errorMessage, setErrorMessage]=useState("")


const calculatebmi=()=>{
  
  if(height && weight){
    const heightinMeters = height/100
    const bmivalue=weight/(heightinMeters * heightinMeters)
    setBmi(bmivalue.toFixed(2))
    if(bmivalue < 18.5){
      setBmistatus("UnderWeight")
    }
   else if( bmivalue >= 18.5 && bmivalue < 24.9){
    setBmistatus("Normal weight")
   }else if(bmivalue >= 25 && bmivalue < 29.9){
    setBmistatus("Overweight")
  }
  else{
    setBmistatus("Obese")
  } 
  setErrorMessage("")
}
else {
  setBmi(null)
  setBmistatus("")
  setErrorMessage("please Enter valid numeric values for height and weight")
  }
}

const clearAll =()=>{
setHeight("")
setWeight("")
setBmi(null)
setBmistatus("")
}


  return (
    <>
    <div className='bmi-calculator'>
      <div className='box'></div>
        <div className='data'>
          <h1>BMI CALCULATOR</h1>
{errorMessage && <p className='error'>{errorMessage}</p>}

          <div className='input-container'>
            <label htmlFor='height'>Height(cm)</label>
            <input type='number' id='height' value={height}
            onChange={(e)=> setHeight(e.target.value)}></input>
          </div>
          <div className='input-container'>
            <label htmlFor='Weight'>Weight(Kg)</label>
            <input type='number' value={weight} id='weight'
            onChange={(e)=> setWeight(e.target.value)}></input>
          </div>
          <button onClick={calculatebmi}>calculate BMI</button>
          <button onClick={clearAll}>clear</button>

      {bmi !== null && ( <div className='result'>
          <p>Your BMI is :{bmi}</p>
          <p>Status :{bmistatus}</p>
        </div>)}

      </div>
    </div>
    </>
  );
}

export default App;

import {React, useState} from 'react'
import './App.css';
import Form from './Form';
import laptopImg from './laptop.jpg'

function App() {

  const [tempApply, setTempApply] = useState(false);
  const [apply, setApply] = useState(false);

  return (
    <div className="App">
      {apply ? <Form /> :
      <div className='imgContainer'>
        <img className='laptopImg' src={laptopImg} alt='laptop' />
        <div className='overlay'></div>
        <p className='applyLaptopHead'>Laptop Scheme for</p>
        <p className='stdtspak'>Students of Pakistan</p>
        {tempApply ? <div className='options'>
          <button className='apply-one' onClick={()=>setApply(true)}>Apply using Instagram</button>
          <button className='not-apply'>Apply using Discord</button>
        </div> : <button className='apply' onClick={()=>setTempApply(true)}>Apply for laptop</button>}
      </div>}
    </div>
  );
}

export default App;

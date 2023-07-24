import {useState} from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  //  console.log(arr)

  // const step = 1;

  function handlePrevious () {
    if(step > 1) setStep(step - 1);
  }

  function handleNext () {
    if (step < 3) setStep(step + 1);  
  }

  function handleClose () {
    setIsOpen(false)
  }
  // function handleOpen () {
  //   set
  // }
  function handleOpen () {
    setIsOpen(true)
  }

  return (
    <div>

      {/* if isOpen is true, render component, else "" */}
      {/* { isOpen ? "component i want to render" : ""} */}
      {isOpen ? (

      <div>
        <button className="close" onClick={handleClose}>&times;</button>
      <div className='steps'>
        <div className='numbers'>
          <div className={`${step >= 1? "active": ""}`}>1</div>
          <div className={`${step >= 2? "active": ""}`}>2</div>
          <div className={`${step >= 3? "active": ""}`}>3</div>
        </div>
        <p className="message"> 
          Step {step}: {messages[step - 1]} 
        </p>
        <div className="buttons">
          <button
            style={{backgroundColor: '#750f2', color: '#fff'}}
            onClick={handlePrevious}
            > Previous </button>
          <button
           style={{backgroundColor: '#750f2', color: '#fff'}}
           onClick={handleNext}
           > Next
        </button> 
        </div>
      </div>
    </div>

  ) : (
    <div>
      <h1> It's not here  </h1>
      <button className='close' onClick={handleOpen}> &#10003; </button> 
    </div> 
  )}
  </div>
  );
}

export default App;

import { useState } from 'react'

import FormFactor from './components/form.tsx'


function App() {
  const [] = useState(0)
  const [namE, setName] = useState(''); 
  const [emaiL, setEmail] = useState(''); 
  const [messagE, setMessage] = useState('');

  return (
    <>
      <div>
        <FormFactor  namE={namE} emaiL={emaiL} messagE={messagE} setEmail={setEmail} setMessage={setMessage} setName={setName} />
      </div>
      <h1></h1>
      <div className="bg-red-800">
       
      </div>
      <p className="bg-black">
        
      </p>
    </>
  )
}

export default App

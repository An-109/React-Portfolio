import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormFactor from './page/contact.tsx'
import Resume from './page/resume.tsx';
import AboutMe from './page/aboutMe.tsx';
import routesData from './assets/project.json'
import Header from './page/header.tsx';

import Fatter from './page/footer.tsx';
import Portfolio from './page/portfolio.tsx'

function App() {

  const [namE, setName] = useState(''); 
  const [emaiL, setEmail] = useState(''); 
  const [messagE, setMessage] = useState('');

  return (

    <BrowserRouter>
      <Header/>
    
   <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<FormFactor namE={namE} emaiL={emaiL} messagE={messagE} setEmail={setEmail} setMessage={setMessage} setName={setName} />} />
          <Route path='/resume' element={<Resume />} ></Route>

          <Route
          path="/portfolio"
          element={<Portfolio items={routesData[0].props} />} 
        />
      </Routes>


      <Fatter />
       
    </BrowserRouter>
  );
}

export default App

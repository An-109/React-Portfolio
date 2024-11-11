import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormFactor from './page/form.tsx'
import Resume from './page/resume.tsx';
import AboutMe from './page/aboutMe.tsx';
import routesData from './assets/project.json'
import Header from './page/header.tsx';
import React from 'react';
function App() {

  const [namE, setName] = useState(''); 
  const [emaiL, setEmail] = useState(''); 
  const [messagE, setMessage] = useState('');

  return (

    <BrowserRouter>
      <Header/>
    
   <Routes>
          
          <Route path="/" element={<AboutMe />} />
          <Route path="/form" element={<FormFactor namE={namE} emaiL={emaiL} messagE={messagE} setEmail={setEmail} setMessage={setMessage} setName={setName} />} />
          <Route path='/resume' element={<Resume />} ></Route>
          {routesData.map((route, index) => {
        
          const Component = React.lazy(() => import(`./${route.element}`));

          return (
            <Route
              key={index}
              path={route.path}
              element={<Component {...route.props} />}
            />
          );
        })}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App

import React from 'react'
import  './body.css'
import logo from './logo.png'; 

export default function Body() {
  return (
    <div class="container mt-4">
     <div className='row pt-5'>
     <div className='col-md-6'>
     <h1>PORTFOLIO</h1>
     </div>
      <div id="newLOGO" className='col-md-6'>
      
         <img src={logo} alt="Logo" className="logo" />
         </div>
         </div>
      <section id="about-me">
          
        <h1>Introduction</h1>
        <p>
          <h2>EISHA SAJID</h2>
          
            My name is Eisha Sajid. I am 22 years old.I live in Rawalpindi,Pakistan. I am  a 4th semester student, passionate to work in field so that I could become a full stack developer.

        </p>

      </section>
      <section>
        <h1>Educational Background
        </h1>
        <ul>
          <li>Matric FBISE 2019_Marks-1028/1100</li>
          <li>Fsc FBISE 2021_Marks-1071/1100</li>
          <li>
            BS software engg 2022-continue_CGPA-3.98
          </li>
        </ul>
      </section>
      <section id="skills">
            <h1>Technical Skills</h1>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Node.js</li>
                <li>Python</li>
            </ul>
        </section>
        <section>
          <h1>
            Soft Skills
          </h1>
          <ul>
            <li>
              Analytical
            </li>
            <li>Collaborator</li>
            <li>Adaptable</li>
            <li>Leader</li>
          </ul>
          
        </section>
        
    </div>
  )
}

import React from 'react'


export default function Projects(props) {
  return (
    <>
    <div  className='mt-5 pt-3'>
    <h1><center>{props.heading}</center></h1>
    </div>
    <div className='container my-4'>
      
      <h2>Project Name: </h2>
      <h3>
      Hospital management System </h3>
      <p><strong>Description: </strong>I worked with my team and completed our second semester project using <strong>OOP concepts</strong></p>
    </div>
    <div className='container my-4'>
<h2>Project Name:</h2>
<h3>Patient Data using BlockChain </h3>
<p><strong>Description: </strong>I completed this project at the end of third semester after completeing course of <strong>Information Security </strong></p>
    </div>
    <div className='container my-4'>
        <h2>Project Name:</h2>
        <h3> Database of Hopital Management System </h3>
        <p><strong>Description: </strong>We used <strong> oracle sql</strong> for creating database for keeping records of patients and searching for their appointments,payments etc.We also learnt use of different queries etc</p>
    </div>
    <div className='container my-4'>
        <h2>Project Name:</h2>
        <h3>  E-commerce Website</h3>
        <p>
        <strong>Description: </strong> I created this website at the end of 4 semester.It was completely functional.I didn't used any type of advanced framework.I started it from basics.I also created some extra small projects to demonstrate the responsive layout of<strong> Bootstrap</strong>.
        </p>
        <p><strong>Tools</strong>
        <ul>
            <li>Designed and implemented the database schema using <strong>php</strong> and <strong>apache server</strong>.
          
                </li>
                <li>  Developed the user interface with HTML, CSS, and JavaScript without using any framework.</li>
                <li ><a href="https://final-veg.vercel.app/index.html">Click here to view myvegetable web-site</a></li>
               <li><a href='https://my-photos-ecru.vercel.app/index.html'>My photos website</a></li>
                </ul>
                </p>
    </div>
    <div className='container my-4'>
        <h2>
        Project Name:</h2>
        <h3> E-commerce Website using <strong>ASP.NET</strong>
        </h3>
        <p><strong>Description: </strong>I created  online electronics selling shop using c# in <strong>ASP.NET</strong>.I created Database in sql and then previewed the items using database.I used different validators inn the forms. </p>
    </div>
    <div className='container my-4'>
        <h2>Project Name:</h2>
        <h3> REACT</h3>
        <p><strong>Description: </strong>
           <ul>
            <li> In summer break I started self-learning and i created a simple project <strong>TextUtils </strong>in react that can manipulate with your typed text</li>
            <li ><a href="https://text-rep.vercel.app/">Click here to view TextUtils</a></li>
            <li>
                I created my own portfolio in react.
            </li>
            <li><a href='https://my-todo-app-rose.vercel.app/'>Todo App </a>I created this website using vite, react and tailwind css</li>

             </ul>
        </p>
    </div>
    </>
  )
}


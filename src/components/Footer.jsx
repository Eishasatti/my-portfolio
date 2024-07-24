import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className="bg-dark text-white ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Me</h5>
            <p>
              I am a  dedicated individual trying to provide the best service for my clients.
              My mission is to bring the best products to your doorstep.
            </p>
          </div>
        
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/eisha-sajid-948945261/" className="text-white">
                  <i className="fab fa-linkdln"></i> Linkedln
                </a>
              </li>
              <li>
                <a href="https://x.com/esatti713" className="text-white">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_satti_19/" className="text-white">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
          <h5>Contact</h5>
          <ul className='list-unstyled'>
            <li>Email: esatti07@gmail.com</li>
            <li>Phone no: 03485718830</li>

          </ul>
        </div>
        </div>
      
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

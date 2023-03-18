import React from 'react'
import './App.css'

const App = () => {
    return (
        <div className='container'>
            <div className="user">
              <h1>Users</h1>
            </div>
            <nav>
              <div className="left">
                <div className="cont">
                  <img src="./images/Frame.svg" alt="" />
                  <input placeholder='Search Users' type="search" />
                </div>
              </div>
              <div className="right">
                <h1 className='qara'>Reputation</h1>
                <h1 className='back'>New Users</h1>
                <h1 className='qara'>Voters</h1>
                <h1 className='qara'>Editors</h1>
                <h1 className='qara'>Moderators</h1>
              </div>
            </nav>
            <div className="mega-card">
              <div className="cards">
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1.svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Lelah Nichols</h1>
                    <p>Troy, MI</p>
                    <div className="h6s">
                      <h6>clothes</h6>
                      <h6>stem</h6>
                    </div>
                  </div>
                </div>
                <div className="cardas">
                  <div className="img">
                    <img src="./images/Ellipse 1 (1).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Jesus Weiss</h1>
                    <p>Fort Worth, TX</p>
                    <div className="h6s">
                      <h6>headset</h6>
                      <h6>gadget</h6>
                      <h6>speed</h6>
                      <h6>winter</h6>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (2).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Annie Rice</h1>
                    <p>Austin, TX</p>
                    <div className="h6s">
                      <h6>road</h6>
                      <h6>mountain</h6>
                      <h6>trip</h6>
                      <h6>earth</h6>
                      <h6>nature</h6>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (3).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Robert Brower</h1>
                    <p>Cincinnati, OH</p>
                    <div className="h6s">
                      <h6>Maintenance</h6>
                      <h6>gears</h6>
                      <h6>frames</h6>
                      <h6>repair</h6>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (4).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Amy Campbell</h1>
                    <p>Warrior, AL</p>
                    <div className="h6s">
                      <h6>music</h6>
                      <h6>disks</h6>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (5).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Anthony S. Morin</h1>
                    <p>Lyndhurst, NJ</p>
                    <div className="h6s">
                      <h6>vintage</h6>
                      <h6>electric</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default App
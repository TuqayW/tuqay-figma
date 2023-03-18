import React from 'react'
import './App.css'

const App = () => {
    return (
        <div>
            <div className="user">
              <h1>Users</h1>
            </div>
            <nav>
              <div className="left">
                <input type="search" />
              </div>
              <div className="right">
                <button>Reputation</button>
                <h1>New Users</h1>
                <button>Voters</button>
                <button>Editors</button>
                <button>Moderators</button>
              </div>
            </nav>
            <div className="cards">
              <div className="card">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <div className="texts">
                  <h1></h1>
                  <p></p>
                  <h6></h6>
                  <h6></h6>
                </div>
              </div>
            </div>
        </div>
    )
}

export default App
import React, {useState} from 'react'
import './App.css'

function Header({onClick, notificationCount})
{

  return (
    <>
        <header>
            <h1>StoriXY</h1>
            <div className='notify_icon' onClick={onClick}>
              <span className="material-symbols-outlined">notifications</span>
              {notificationCount > 0 && <p>{notificationCount}</p>}
            </div>
        </header>
    </>
  )
}
export default Header
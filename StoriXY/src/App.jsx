import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Bottom from './Bottom'
import Notifications from './Notifications'

function App()
{
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(4);

  const handleOpenNotifications = () => {
    setShowNotifications(true);
    setNotificationCount(0);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
    setNotificationCount(0);
  };

  return (
    <>
      {showNotifications ? (
        <Notifications onClose={handleCloseNotifications} />
      ) : (
        <div className="header">
          <Header onClick={handleOpenNotifications} notificationCount={notificationCount} />
          <Router>
            <Bottom />
          </Router>
        </div>
      )}
    </>
  )
}
export default App
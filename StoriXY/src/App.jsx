import React, {useState, useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Bottom from './Bottom'
import Notifications from './Notifications';
import Page_load from './Page_load';
import SignUp from './SignUp';

function App()
{
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [signUpShow, setSignUpShow] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setSignUpShow(true);
    }, 2000)

    return () => clearTimeout(timer);
  }, [])

  const handleOpenNotifications = () => {
    setShowNotifications(true);
    setNotificationCount(0);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
    setNotificationCount(0);
  };


  if (loading) {
    return <Page_load />;
  }

  return (
    <>
    {
      signUpShow ? (
        <SignUp setSignUpShow={setSignUpShow}/>
      ) : (
        showNotifications ? (
          <Notifications onClose={handleCloseNotifications} />
        ) : (
          <div className="header">
            <Header onClick={handleOpenNotifications} notificationCount={notificationCount} />
            <Router>
              <Bottom />
            </Router>
          </div>
        )
      )
    }
    </>
  )
}
export default App
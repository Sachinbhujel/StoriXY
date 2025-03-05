import React, {useState} from 'react'
import './App.css'
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
          <Bottom />
        </div>
      )}
    </>
  )
}
export default App
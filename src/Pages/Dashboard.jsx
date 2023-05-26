import React from 'react';
import Introduction from '../Components/Introduction/Introduction';
import styles from '../Pages/Dashboard.module.scss';


function Dashboard() {
  return (
    <div>
        <div className={styles.background}>
          <div className={styles.main_container}>
            <Introduction/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard
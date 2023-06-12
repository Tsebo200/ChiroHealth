import React from 'react';
import Introduction from '../Components/Introduction/Introduction';
import styles from '../Pages/Dashboard.module.scss';


function Dashboard() {
  return (
    <div>
        <div className={styles.background}>
          <div className={styles.vert_breaker}></div>
          <div className={styles.main_container}>
        

          <div className={styles.introduction_section}>
            
              <div className={styles.introduction_container}> 
              <Introduction/>
              <div className={styles.hor_line_breaker}></div>
              
              </div>
              <div className={styles.calendar_container}>

              <div className={styles.hor_line_breaker}></div>
              </div>
            </div>
          <div className={styles.stats_section}></div>
          <div className={styles.appointment_list_section}></div>
          <div className={styles.late_patients_row}></div>
        </div>
        <div className={styles.vert_breaker}></div>
        </div>
    </div>
  )
}

export default Dashboard
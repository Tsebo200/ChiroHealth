import React from 'react';
import Introduction from '../Components/Introduction/Introduction';
import styles from '../Pages/Dashboard.module.scss';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import HotelIcon from '@mui/icons-material/Hotel';
import HealingIcon from '@mui/icons-material/Healing';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BedIcon from '@mui/icons-material/Bed';


function Dashboard() {
  return (
<div className={styles.background}>
    <div className={styles.vert_breaker}></div>
        <div className={styles.main_container}>

    <div className={styles.hor_breaker}></div>
        <div className={styles.introduction_container}>
            <div className={styles.left}></div>
              <div className={styles.right}>
                  <h2>Prof. Dr. Demar De Rozan</h2>
                  <p className={styles.title}>Specialist Chiropractor</p>
                  <div className={styles.blue_co_founder}>
                    <p className={styles.co_founder_text}>Co-founder</p>
                  </div>
                  <div className={styles.green_surgeon}>
                    <p className={styles.surgeon_text}>Surgeon</p>
                  </div>
                  <div className={styles.yellow_veteran}>
                    <p className={styles.veteran_text}>Veteran</p>
                  </div>
                  <div className={styles.intro_text}>Dr Demar De Rozan is a famous chiropractor specialist
                  as he started the industry for ChiroHealth in order to
                  heal other people spines as this feeling triggered after 
                  he healed from a hockey injury
                  </div>
              </div>
        </div> 
        <div className={styles.calendar_container}>


        </div>
    <div className={styles.hor_breaker}></div>
    
    <div className={styles.data_container}>
        <div className={styles.stats_container}>

        <div className={styles.stats_vert_spacer}></div>
            <div className={styles.patients_container}>
              <div className={styles.icon}> 
              <div className={styles.icon_box}><HotelIcon/></div>
              </div>
              <p className={styles.total_text}>Total Patients</p>
              <p className={styles.total_num}>350</p>
            </div>
            <div className={styles.stats_vert_spacer}></div>
            <div className={styles.staff_container}>
                <div className={styles.icon}> 
                <div className={styles.icon_box}><AssignmentIndIcon/></div> </div>
                <p className={styles.total_text}>Total Staff</p>
                <p className={styles.total_num}>75</p>
            </div>
            <div className={styles.stats_vert_spacer}></div>
            <div className={styles.rooms_container}>
              <div className={styles.icon}>
              <div className={styles.icon_box}><BedIcon/></div></div>
              <p className={styles.total_text}>Total Rooms</p>
              <p className={styles.total_num}>10</p>
            </div>
            <div className={styles.stats_vert_spacer}></div>
            <div className={styles.doctors_container}>
              <div className={styles.icon}> 
              <div className={styles.icon_box}><HealingIcon/></div></div>
              <p className={styles.total_text}>Total Rooms</p>
              <p className={styles.total_num}>18</p>
            </div>
           
        </div>
        <div className={styles.hor_breaker}></div>
        <div className={styles.late_patients_container}></div>
    </div>
    <div className={styles.appointment_list_container}></div>
 
    </div>
</div>
  )
}

export default Dashboard
import React from 'react';
import Introduction from '../Components/Introduction/Introduction';
import EnhancedTableDoctors from '../Components/Table/Doctors/EnhancedTableDoctors';
import styles from '../Pages/Doctors.module.scss';
import AddPatients from '../Components/Forms/Doctors/Patients/AddPatients';

function Doctors() {
  return (
    <div className={styles.background}>
    {/* <EnhancedTableDoctors/> */}
    <AddPatients/>
    </div>
  )
}

export default Doctors
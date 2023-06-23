import React from 'react'
import EnhancedTable from '../Components/Table/Patients/EnhancedTable'
import styles from '../Pages/Patients.module.scss';

function Patients() {
  return (
<div className={styles.background}>
<EnhancedTable/>

</div>
  )
}

export default Patients
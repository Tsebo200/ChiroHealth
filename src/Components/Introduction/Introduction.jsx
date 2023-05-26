import React from 'react';
import styles from '../Introduction/Introduction.module.scss';

function Introduction() {
  return (
    <div>
    {/* <div className='styles.' */}
        <div className={styles.introduction_container}>
          <div className={styles.left_side}>
            <div className={styles.img_container}>
              <img></img>
            </div>

          </div>

          <div className={styles.right_side}>
            <h1>Prof. Dr. Demar De Rozan</h1>
            <icon></icon>

            <h2>Specialist Chiropractor</h2>
            <div className={styles.info_btn_one}></div>
            <div className={styles.info_btn_two}></div>
            <div className={styles.info_btn_three}></div>

            <div className={styles.textbox}></div>
            {/* <p>Dr Demar De Rozan is a famous chiropractice specialist as he 
              started the industry for ChiroHealth with the help of Tsebo Ramonyalioa 
              they were able to create a successful venture in muscular and especially the  neuromuscular system</p> */}

              <div className={styles.icon_container}>
                <div className={styles.icon_two}></div>
                <div className={styles.icon_three}></div>
              </div>



          </div>
        </div>
    </div>
  )
}

export default Introduction
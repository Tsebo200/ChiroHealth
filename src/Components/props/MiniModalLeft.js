import React from 'react'
import ErrorAsset from '../../Assets/error.svg';
// import ErrorAsset from '../Assets/error.svg';

const MiniModalLeft = (props) => {
  return (
    <>
      <div className='alertMiniModalLeft'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalLeft

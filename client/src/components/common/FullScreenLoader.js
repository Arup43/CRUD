import React from 'react'
import loader from '../../assets/img/loading.svg';

export default function FullScreenLoader() {
  return (
    <div className='ProcessingDiv'>
        <div className='center-screen'>
            <img className='loader-size' src={loader} alt="loading" />
        </div>
    </div>
  )
}

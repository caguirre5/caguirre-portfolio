import React from 'react'
import DividerShape from '../components/DividerShape'
import './Personal.css'

function Personal() {
  return (
    <div className='personal-container'>
        <DividerShape fillColor={'#FAFAFA'} backgroundColor={'blue'}/>
        <div className='personal-container-main'></div>
    </div>
  )
}

export default Personal
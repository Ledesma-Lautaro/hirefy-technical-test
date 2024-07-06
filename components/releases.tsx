import React from 'react'
import Timeline from './timeline'
import Aside from './aside'
import { releases } from '@/data/releases'
import Title from './title'

const Releases = () => {
  return (
    
      <div className='bg-white-100 lg:flex justify-evenly pt-10 p-4'>
            <Timeline/>
            <Aside/>
        </div>
    
  )
}

export default Releases
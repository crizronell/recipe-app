import React from 'react'
import MainCourse from '../../components/MainCourse/MainCourse'
import SideDish from '../../components/SideDish/SideDish'


function Home() {
  return (
    <div className='bg-slate-300'>
    <MainCourse />
    <SideDish />
    </div>
  )
}

export default Home
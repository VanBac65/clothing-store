import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import AoQuan from './DoNamNu/AoQuan'
import DoNamNuHome from './DoNamNu/DoNamNuHome'
// import Quan from './DoNamNu/Quan'
// import { data } from '../component'
import Footer from './Home/footer/footer'
import HomePage from './Home/homePage'
// import HomeSlide from './Home/homeSlide'
import Menu from './Home/menu'
import Render from './render'

export default function Page() {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row d-flex'>
          <Menu />
          <div style={{ width: '80%', marginLeft: '20%' }}>
            {/* <HomeSlide /> */}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/new-arrivals/*' element={<HomePage />} />
              <Route path='/do-nam/*' element={<Render gender='nam' />} />
              <Route path='/do-nu/*' element={<Render gender='nữ' />} />
              <Route path='/phu-kien/*' element={<HomePage />} />
              {/* <Route path={`/do-${newGender}/*`} element={<Render gender={`${newGender}`}/>}/> */}
              <Route path={`do-nam/ao-nam/*`} element={<AoQuan gender={`nam`} classify='áo' />} />
              <Route path={`do-nam/quan-nam/*`} element={<AoQuan gender={`nam`} classify='quần' />} />
              <Route path={`do-nu/ao-nu/*`} element={<AoQuan gender={`nữ`} classify='áo' />} />
              <Route path={`do-nu/quan-nu/*`} element={<AoQuan gender={`nữ`} classify='quần' />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

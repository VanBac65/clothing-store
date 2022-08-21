import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import slugify from 'slugify'
import Footer from '../Home/footer/footer'
import HomeSlide from '../Home/homeSlide'
import Render from '../render'
import SelectNamNu from '../selectNamNu'
import AoQuan from './AoQuan'
// import Quan from './Quan'

export default function DoNamNuHome({gender}) {
  const newGender = slugify(gender)
  document.title = `Đồ ${gender}`
  return (
    <Fragment>
      <HomeSlide/>
      <SelectNamNu gender={gender}/>
      {/* <Render gender={gender}/> */}
      <div>
        <Routes>
            <Route path={`/do-${newGender}/*`} element={<Render gender={`${newGender}`}/>}/>
            <Route path={`/ao-${newGender}/*`} element={<AoQuan gender={`${newGender}`} classify='áo'/>}/>
            <Route path={`/quan-${newGender}/*`} element={<AoQuan gender={`${newGender}`} classify='quần'/>}/>
        </Routes>
      </div>
      <Footer/>
    </Fragment>
  )
}

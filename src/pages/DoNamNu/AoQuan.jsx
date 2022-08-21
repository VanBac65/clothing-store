import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { data } from '../../component'
// import AddressStore from '../Home/addressStore'
import Footer from '../Home/footer/footer'
import HomeSlide from '../Home/homeSlide'
import SelectNamNu from '../selectNamNu'
import InfoProduct from './infoProduct'
import OneProduct from './OneProduct'

export default function AoQuan({ gender, classify }) {
  const arrGender = data.filter((elm) => elm.nameClassify === `Đồ ${gender}`)
  const arrAoQuan = arrGender[0].product.filter((elm) => elm.classify === classify)
  const infoProduct = (obj)=>{
    console.log(obj)

  }
  return (
    <Fragment>
      <HomeSlide />
      <SelectNamNu gender={gender} />
      <div className='row d-flex'>
        {
          arrAoQuan.map((elm, index) => {
            console.log(elm.name);
            <Routes>
              <Route path={`do-nam/ÁO%20SƠMI%20NAM%20-%20TOTODAY%20-%20FORMAT`} element={<InfoProduct/>}></Route>
            </Routes>
            return <OneProduct key={index} elm={elm} index={index} infoProduct={infoProduct}/>
          })
        }
      </div>
      <Footer />
    </Fragment>
  )
}

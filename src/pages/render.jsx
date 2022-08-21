import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { data } from '../component'
import OneProduct from './DoNamNu/OneProduct'
import Footer from './Home/footer/footer'
import HomeSlide from './Home/homeSlide'
import SelectNamNu from './selectNamNu'

export default function Render({ gender }) {
    const infoProduct = (Obj)=>{
        console.log(Obj)
    }
    document.title = `Đồ ${gender}`
    const newArr = data.filter(elm => elm.nameClassify === `Đồ ${gender}`)
    return (
        <Fragment>
            <HomeSlide />
            <SelectNamNu gender={gender} />
            <div className='row d-flex'>
                {
                    newArr[0].product.map((elm, index) => {
                        return <OneProduct key={index} elm={elm} index={index} infoProduct={infoProduct}/>
                    })
                }
            </div>
            <Footer />
        </Fragment>
    )
}

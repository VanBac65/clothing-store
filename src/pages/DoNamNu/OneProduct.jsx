import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function OneProduct({ elm, index, infoProduct }) {
    const newObj = {
        name: elm.name,
        price: elm.price,
        img: elm.img
    }
    return (
        <Fragment>
            <div className='col-md-3 mb-2'>
                <Link to={`${elm.name}`} className='btn' onClick={() => infoProduct(newObj)}>
                    <div className='w-100 text-center'>
                        <img className='w-75' src={`${elm.img}`} alt="" />
                    </div>
                    <div className='price text-center pt-2'>
                        <p>{elm.price}</p>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

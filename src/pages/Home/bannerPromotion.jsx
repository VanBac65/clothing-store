import React from 'react'
import { Link } from 'react-router-dom'
import { bannerPromotion } from '../../component'

export default function BannerPromotion() {
    return (
        <div className='row d-flex'>
            <div className='col-md-6'>
                <a href="/" className='btn'>
                    <img className='w-100' src={bannerPromotion[0]} />
                </a>
            </div>
            <div className='col-md-6'>
                <div className='row d-flex justify-item-center mt-3'>
                    {
                        bannerPromotion.map((elm, index) => {
                            if (index != 0)
                                return <div className='col-md-6' key={index}>
                                    <Link to="/" className='btn'>
                                        <img className='w-100' src={elm} />
                                    </Link>
                                </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

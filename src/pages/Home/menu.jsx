import React from 'react'
import { Link } from 'react-router-dom'
import BtnClassify from './btnClassify'

export default function Menu() {
    return (
        <div className='menu pe-1 border-end fixed-top' style={{ width: '20%' }}>
            <div className='p-5 text-center fs-3'>
                <Link to='/' className='btn p-3 fs-1'>VAN BAC</Link>
            </div>
            <div className='menu__category p-3 mb-3'>
                <div className="col-md-12 shopping text-center">
                    <button type="button" className="btn-category btn position-relative">
                        <i className="fa-solid fa-cart-shopping fs-3"></i>
                        <span className="rs-category position-absolute top-0 start-100 translate-middle badge bg-danger">
                            0+
                        </span>
                    </button>
                </div>
            </div>
            <BtnClassify />
            <div className='menu__phone text-center p-3 bg-secondary'>
                <i className="fa-solid fa-phone me-1"></i><span>0123456789</span>
            </div>
        </div>
    )
}

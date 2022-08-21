import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Title from './title'

export default function AddressStore() {
    return (
        <Fragment>
            <Title title='Địa chỉ cửa hàng' />
            <div className='address-store container-fluid mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-4 align-bottom'>
                        <Link to="/" className='col-md-12 btn bg-warning fs-2'><label className='ps-5 pe-5'>Địa chỉ cửa hàng</label></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

import React, { Fragment } from 'react'

export default function BoxInput({ title, placeholder, valueBtn }) {
    return (
        <Fragment>
            <div className='col-md-4 ms-4 pe-0'>
                <p>{title}</p>
                <div className='row d-flex justify-content-start'>
                    <div className='col-md-10 pe-0'>
                        <input className='footer-input w-100 ps-2 pt-1 pb-1' type="text" placeholder={placeholder} />
                    </div>
                    <div className='col-md-2 p-0'>
                        <button className='btn-footer w-100 h-100 p-0 m-0'>{valueBtn}</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

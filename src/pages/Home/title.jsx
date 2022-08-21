import React from 'react'

export default function Title({ title }) {
    return (
        <div className='title-news d-flex justify-content-center'>
            <div className='' style={{ width: '40%' }}>
                <hr className='p-0 mb-0 mt-4' style={{ height: '2px', color: '#000' }} />
                <hr className='p-0 mt-1' style={{ height: '1px', color: 'black' }} />
            </div>
            <label className='mt-1 ps-2 pe-2 fs-3' htmlFor="">{title}</label>
            <div className='' style={{ width: '40%' }}>
                <hr className='p-0 mb-0 mt-4' style={{ height: '2px', color: 'black' }} />
                <hr className='p-0 mt-1' style={{ height: '1px', color: 'black' }} />
            </div>
        </div>
    )
}

import React, { Fragment } from 'react'
import { dataTitleNew } from '../../component'

export default function NewPosts() {
    return (
        <div className='new-posts mt-2'>
            {
                dataTitleNew.map((elm, index) => {
                    return <div className='row d-flex' key={index}>
                        <div className='img-new-post col-md-3'>
                            <img className='w-100 h-100 p-2' src={`${elm.img}`} />
                        </div>
                        <div className='col-md-9 align-items-center mt-3'>
                            <p className='fs-6'>{elm.name}</p>
                            <p>{elm.date}</p>
                            <a href="" className='text-decoration-none p-0'><p className='color-Info'>{elm.news}</p></a>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

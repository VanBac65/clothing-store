import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

export default function SelectNamNu({ gender }) {
    const newGender = slugify(gender)
    return (
        <Fragment>
            <div className={`tilte-do-${newGender} fs-3`}>
                <p className='text-center p-3 mt-3'>Đồ {gender}</p>
                <hr />
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-1 text-center fs-5 border-end'>
                        <Link to={`/do-${newGender}/ao-${newGender}`}>Áo</Link>
                    </div>
                    <div className='col-md-1 text-center fs-5'>
                        <Link to={`/do-${newGender}/quan-${newGender}`}>Quần</Link>
                    </div>
                </div>
                <hr />
            </div>
            <div className='row d-flex pb-1 fs-5 justify-content-between mx-1'>
                <div className="col-md-1 m-2 ">
                    <i className="fa-solid fa-filter"></i> <label htmlFor="">Lọc</label>
                </div>
                <div className='col-md-3 mb-3'>
                    <label className='m-2' htmlFor="">Sắp xếp </label>
                    <select className='w-50 btn border form-control' name="" id="">
                        <option value="">Mặc định</option>
                        <option value="">Giá Giảm</option>
                        <option value="">Giá Tăng</option>
                    </select>
                </div>
                <hr />
            </div>
        </Fragment>
    )
}

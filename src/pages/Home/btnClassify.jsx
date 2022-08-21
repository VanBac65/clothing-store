import React from 'react'
import { data } from '../../component'
import slugify from 'slugify'
import { Link } from 'react-router-dom'

export default function BtnClassify({setTitle}) {
    return (
        <div>
            <ul className='p-0'>
                {
                    data.map((el, index) => {
                        const urlPath = slugify(el.nameClassify, {
                            replacement: '-',
                            remove: undefined,
                            lower: true,
                            strict: true,
                            locale: 'vi',
                            trim: true
                        })
                        console.log(urlPath)
                        return <li className='list-group-item m-0 border-end-0 border-start-0' key={index}>
                           <Link to={`${urlPath}`} onClick={()=>setTitle(el.nameClassify)} className='btn p-0 d-block w-100'>{el.nameClassify}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

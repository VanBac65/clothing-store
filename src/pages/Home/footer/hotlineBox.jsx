import React from 'react'

export default function HotlineBox({ title, arrPhone, email }) {
  return (
    <div className='col-md-6'>
      <div className='m-4 ms-4'>
        <p className='footer-title m-0'>{title}</p>
        {
          arrPhone.map((elm, index) => {
            return <p key={index} className='footer-phone m-0'>{elm}</p>
          })
        }
        <p className='footer-email m-0'>{email}</p>
      </div></div>
  )
}

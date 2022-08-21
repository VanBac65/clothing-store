import React from 'react'

export default function BoxInfo({ title, arr }) {
  return (
    <div className='col-md-4'>
      <div className='me-4 mt-4'>
        <p>{title}</p>
        {
          arr.map((elm, index) => {
            return <p key={index} className='box-info mb-1'>
              {elm}
            </p>
          })
        }
      </div>
    </div>
  )
}

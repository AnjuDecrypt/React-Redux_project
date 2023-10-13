import React from 'react'

export default function User(props) {
    console.log(props.data.name)
    const {data}= props
  return (
    <>
      <div className=''>
        <h1>User Components</h1>
        <h4>{data.name}</h4>
      </div>
    </>
  )
}

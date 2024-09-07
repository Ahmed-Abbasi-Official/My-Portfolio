import React from 'react'

const Button = ({
    children,
    type='text',
    className='',
    ...props
}) => {
  return (
    <button className={`  rounded font-bold  hover:shadow-2xl hover:shadow-[#928181] bg-[#0db4c7d6] ${className}  ` }{...props} style={{
      border:'2px solid #0db3c7'
    }}>{children}</button>
  )
}

export default Button
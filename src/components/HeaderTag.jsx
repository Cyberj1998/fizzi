import React from 'react'

const HeaderTag = (props) => {

  return (
    <a
      className='max-sm:hidden font-semibold font-sans text-sky-900 text-[18px]' 
      href={props.href}
    >
      {props.title}
    </a>
  )
}

export default HeaderTag

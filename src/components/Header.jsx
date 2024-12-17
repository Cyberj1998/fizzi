import React from 'react'
import  Fizzilogo from './FizziLogo'
import HeaderTag from './HeaderTag'

const Header = () => {


  return (
    <>
    <div className='relative py-4 flex -mb-28 justify-evenly items-center'>
      <HeaderTag 
        href='#' 
        title='Info' 
      />
      <HeaderTag 
        href='#' 
        title='Shop' 
      />
      <Fizzilogo 
        className='h-50 z-10 cursor-pointer text-sky-800'
      />
      <HeaderTag 
        href='#' 
        title='Flavors' 
      />
      <HeaderTag 
        href='#' 
        title='Facts' 
      />
    </div>
    </>
  )
}

export default Header

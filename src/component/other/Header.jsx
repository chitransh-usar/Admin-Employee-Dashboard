import React, { useState } from 'react'

const Header = (props) => {

const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
   
}

    return(

        <div className='flex item-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br />
            <span className='text-3xl font-semibold'>There👋</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-sm h-12'>Log Out</button>
        </div>
         
    )
 }

export default Header
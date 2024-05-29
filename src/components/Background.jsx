import React from 'react'

const Background = () => {
  return (
    <>
     <div className="w-full h-screen fixed z-[2]">
        <nav className='absolute top-[10%]  w-full py-10 flex justify-center items-center text-zinc-700 font-bold text-xl'>Documents.</nav>
         <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] tracking-tight text-zinc-700 font-semibold leading-none'>Docs.</h1>
      </div>
    </>
  )
}

export default Background
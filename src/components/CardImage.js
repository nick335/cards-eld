import React from 'react'
import pic from '../../public/pic2.png'
import star from '../../public/stars.png'
import logo from '../../public/logo.png'
import Image from 'next/image'

export default function CardImage() {
  return (
    <div className='bg-primary w-full h-full rounded-2xl relative flex-col pt-7'>

      <div>
        <Image  src={pic} width={152} height={220} alt='picture' className='mx-auto' />
      </div>
      
      <Image src={star} width={25} height={25} className='object-cover absolute top-4 right-4'/>
      <div className='w-full bg-sec absolute bottom-20 pl-5 py-2 font-grotley font-extrabold'>
          <h2 className='leading-none text-base'>The</h2>
          <h3 className='leading-none text-xl'>Queen Unfazed</h3>
      </div>
      <div className='flex items-center justify-between px-2.5 mt-4'>
        <div>
          <Image src={logo} width={25} height={25} alt='logo' />
        </div>
        <p className='font-satoshi font-normal text-xs'>Click to flip</p>
      </div>
    </div>
  )
}

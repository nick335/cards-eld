import React from 'react'
import star from '../../public/stars.png'
import Image from 'next/image'

export default function CardInfo() {
  return (
    <div className='bg-primary w-full h-full rounded-2xl border border-black'>
      <div className='w-full bg-sec pl-5 py-2.5 font-grotley font-extrabold rounded-t-2xl'>
        <h2 className='leading-none text-sm'>The</h2>
        <h3 className='leading-none text-xl'>Queen Unfazed</h3>
      </div>
      <div className='bg-white bg-opacity-70 w-[175px] h-[222px] mt-3.5 mx-auto rounded-b-xl relative font-satoshi'>
      <Image src={star} width={25} height={25} className='object-cover absolute -top-3 -right-2 '/>
      <div className='border-b border-black pl-2 py-1'>
        <h3 className=' font-extrabold text-[12px] leading-tight'>Name</h3>
        <p className='text-[11px] leading-tight pt-1'>Eniola Salau</p>
      </div>
      <div className="border-b border-black pl-2 py-1" >
        <h3 className='font-satoshi font-extrabold text-sm'>Lorem ipsum</h3>
        <p className='text-[11px] font-satoshi leading-snug'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea</p>
      </div>
      <div className='pl-2 mt-1'>
        <h3 className='font-satoshi font-extrabold text-sm'>Lorem ipsum</h3>
        <p className='text-[11px] leading-snug'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet.</p>
      </div>
      </div>
    </div>
  )
}

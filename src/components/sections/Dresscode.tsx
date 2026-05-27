import React from 'react'
import Image from 'next/image'

const Dresscode = () => {
  return (
    <section id='dresscode' className='relative w-full pt-[96px] pb-[74px]'>
        {/* Background Image */}
              <Image
                src="/images/Dresscode/Bg-Dresscode.png"
                alt="Hero Background"
                fill
                className="object-cover object-bottom"
                priority
              />
        <div className="relative flex flex-col items-center justify-center text-center gap-[12px]">
            <h2 className='font-cylburn text-[42px] text-[#713324]'>Dress Code</h2>
            <p className='font-creators text-[12px] text-[#713324] leading-[20px] tracking-wide'>Black preferred, <br />
            or your darkest colour
            </p>
        </div>
    </section>
  )
}

export default Dresscode
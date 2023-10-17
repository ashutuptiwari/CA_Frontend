import Image from 'next/image'
import React, { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center bg-[#2F2F2F] space-x-0'>
        <div className=''>
            <Image 
            src={"/sntc_logo.webp"}
            alt='SNTC LOGO'
            width={400}
            height={300}
            />
        </div>
        <div className='mt-3 mb-3 pr-20 hidden sm:block'>
        <Image 
        src={"/line.webp"}
        alt='line:)'
        width={1}
        height={50}/>
        </div>
        <div className='font-bold text-center sm:pr-10 pb-3'>
            <h1 className='pb-4'>Social Links</h1>
            <div className='flex space-x-5 p-1 justify-center items-center'>
                <Link href={""}>
                    <Image src={"/facebook.webp"} alt='facebook' width={53} height={50}/>
                </Link>
                <Link href={""}>
                    <Image src={"/insta.webp"} alt='Insta' width={33} height={35}/>
                </Link>
                <Link href={""}>
                    <Image src={"/linkedin.webp"} alt='Linkedin' width={40} height={40}/>
                </Link>
                <Link href={""}>
                    <Image src={"/X.webp"} alt='X' width={35} height={35}/>
                </Link>
                <Link href={""}>
                    <Image src={"/youtube.webp"} alt='YT' width={45} height={40}/>
                </Link>
            </div>
            <div className='text-sm flex pt-4 pl-2'>
                For more queries: 
                <p className='text-red-500 text-center'>&nbsp;&nbsp;publicity@technex.in</p>
                </div>
        </div>
    </div>
  )
}

export default Footer;
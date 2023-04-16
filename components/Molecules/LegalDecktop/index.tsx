import React from 'react'
import Link from 'next/link'

const LegalDecktop = () => {
    return (
        <div className="legal hidden sm:block">
            <Link className='mr-7 hover:text-[#FEA900] ease-in-out duration-300' href="/term-of-service">Term of service</Link>
            <Link className='mr-7 hover:text-[#FEA900] ease-in-out duration-300' href="/privacy-policy">Privacy Policy</Link>
            <Link className='hover:text-[#FEA900] ease-in-out duration-300' href="/faq">FAQ</Link>
        </div>
    )
}

export default LegalDecktop
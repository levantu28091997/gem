import React from 'react'
import Link from 'next/link'

const LegalMobile = () => {
    return (
        <div className="legal flex items-center justify-center pt-2 sm:hidden">
            <Link className='mr-7 text-[11px]' href="/term-of-service">Term of service</Link>
            <Link className='mr-7 text-[11px]' href="/privacy-policy">Privacy Policy</Link>
            <Link className='text-[11px]' href="/faq">FAQ</Link>
        </div>
    )
}

export default LegalMobile
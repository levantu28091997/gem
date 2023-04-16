import Apero from '@/components/Organisms/ApedoDeveloper'
import ContactUs from '@/components/Organisms/ContactUs'
import Faq from '@/components/Organisms/FAQ'
import Global from '@/components/Organisms/GlobalDevelopers'
import HowToUpLoad from '@/components/Organisms/HowtoUpload'
import React from 'react'

const Developers = () => {
    return (
        <div className='w-full'>
            <Apero />
            <HowToUpLoad />
            <Global />
            <Faq />
            <div className="w-full bg-[#0A0A0A]">
                <div className="container mx-auto">
                    <ContactUs />
                </div>
            </div>
        </div>
    )
}

export default Developers

Developers.layout = 'defaultNoDarkTheme';
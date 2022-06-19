import React from 'react'
import './heroSection.css'
import Button from '../common/Button'

function HeroSection() {
    return (
        <div className='hero-section-wrapper'>
            <div className='flex absolute-center hero-claim-label' >
                Pay credit card bill. earn guranteed ₹200 back.
                <div className='claim-anchor'>
                    claim-now <img src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="cred logo" className='claim-arrow' />
                </div>
            </div>

            <div className='flex absolute-center flex-col hero-section max-width'>
                <div className='hero-heading'>
                    reward for paying cards bills.
                </div>
                <div className='hero-subheading'>
                    join 7.5M+ members who win rewards and cashbacks everyday
                </div>
                <Button buttonText="Download CRED" />
            </div>
        </div>
    )
}

export default HeroSection
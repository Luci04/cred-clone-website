import React, { useState } from 'react'
import './header.css'

function Header() {
    const [mobileModeMenu, setmobileModeMenu] = useState(false)

    const toggleMobileMenu = () => {
        setmobileModeMenu(!mobileModeMenu);
    }

    return <div className='mobile-meny-wrapper'>
        <div className={`mobile-menu only-mobile ${mobileModeMenu ? "overlay" : ""}`}>
            <div className='mobile-navbar'>
                <div className='mobile-nav-item' > credit score check</div>
                <div className='mobile-nav-item'>credit card bill payment</div>
            </div>
        </div>
        <div className='flex max-width header'>
            <img
                className='header-logo'
                src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png' />

            <div className='only-mobile mobile-menu-button-wrapper'>
                <button class={`hamburger hamburger--emphatic ${mobileModeMenu ? "is-active" : ""}`} type="button" onClick={toggleMobileMenu}>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className='non-mobile flex'>
                <div className='header-nav-item' > credit score check</div>
                <div className='header-nav-item'>credit card bill payment</div>
            </div>
        </div>
    </div >
}

export default Header;
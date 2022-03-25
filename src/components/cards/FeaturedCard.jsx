import React from 'react'

import { VscDebugStackframeDot } from 'react-icons/vsc';
import { MdOutlineLastPage } from 'react-icons/md';


export default function FeaturedCard() {
    return (
        <div className='featuredCard'>
            <img className='featuredCard__image' src='https://bazinga.themerex.net/wp-content/uploads/2017/11/post-13-copyright.jpg' alt='featured-post' />
            <div className='featuredCard__overlay'>
                <div className='featuredCard__category'>
                    <span className='featuredCard__category-cat'>Style</span>
                    <span className='featuredCard__category-post'><MdOutlineLastPage /></span>
                </div>
                <div className='featuredCard__title'>
                    Staff picks: the gear we want this year to drive
                </div>
                <div className='featuredCard__auth-date'>
                    by Alisha Williams <VscDebugStackframeDot /> 4 April, 2017
                </div>
            </div>
        </div>
    )
}

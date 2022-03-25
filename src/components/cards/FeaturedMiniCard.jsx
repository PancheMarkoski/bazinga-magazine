import React from 'react'

import { VscDebugStackframeDot } from 'react-icons/vsc';
import { MdOutlineLastPage } from 'react-icons/md';


export default function FeaturedMiniCard() {
    return (
        <div className='featuredMiniCard'>
            <img className='featuredMiniCard__image' src='https://bazinga.themerex.net/wp-content/uploads/2017/11/post-13-copyright.jpg' alt='featured-post' />
            <div className='featuredMiniCard__overlay'>
                <div className='featuredMiniCard__category'>
                    <span className='featuredMiniCard__category-cat'>Style</span>
                    <span className='featuredMiniCard__category-post'><MdOutlineLastPage /></span>
                </div>
            </div>
            <div className='featuredMiniCard__content'>
                <div className='featuredMiniCard__title'>
                    Staff picks: the gear we want this year to drive
                </div>
                <div className='featuredMiniCard__auth-date'>
                    by Alisha Williams <VscDebugStackframeDot /> 4 April, 2017
                </div>
            </div>
        </div>
    )
}

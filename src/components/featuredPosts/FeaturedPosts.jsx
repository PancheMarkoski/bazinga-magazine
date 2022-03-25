import React from 'react'
import FeaturedCard from '../cards/FeaturedCard'
import FeaturedMiniCard from '../cards/FeaturedMiniCard'

export default function FeaturedPosts() {
    return (
        <div className='featuredPosts'>
            <div className='featuredPosts__wrapper'>
                <div style={{
                    flex: "1",
                }}></div>
                <FeaturedCard />
                <FeaturedMiniCard />
                <FeaturedMiniCard />
                <div style={{
                    flex: "1",
                }}></div>
            </div>
        </div>
    )
}

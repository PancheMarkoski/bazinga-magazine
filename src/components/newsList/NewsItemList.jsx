import React from 'react'

export default function NewsItemList() {
    return (
        <div className='newsItemList'>
            <img src='https://bazinga.themerex.net/wp-content/uploads/2017/11/post-12-copyright-291x232.jpg' alt='news' />
            <div className='newsItemList-overlay'>
                <div className='newsItemList-overlay__category'>
                    <span className='newsItemList-overlay__category-inner'>
                        Featured
                    </span>
                </div>
                <div className='newsItemList-overlay__title'>
                    How Far Will Humanity Go?
                </div>
            </div>
        </div>
    )
}

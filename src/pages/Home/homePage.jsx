import React from 'react'
import AddressStore from './addressStore'
import BannerPromotion from './bannerPromotion'
import HomeSlide from './homeSlide'
import Footer from './footer/footer'
import TitleNew from './titleNew'

export default function HomePage() {
    document.title = 'VAN BAC SHOP'
    return (
        <div className=''>
            <HomeSlide/>
            <BannerPromotion />
            <TitleNew/>
            <AddressStore/>
            <Footer/>
        </div>
    )
}

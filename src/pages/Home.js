import React from 'react'
import CardGrid from 'componentes/cardGrid'
import Carousel from 'componentes/carouselNotices'
import './Home.scss'


export default function Home() {
    return (
        <div className="homeContainer">
            <div className="carouselContainer">
                <Carousel/>
            </div>
            <div className='cardGridContainer'>
                    
            </div>

       
        </div>
    )
}
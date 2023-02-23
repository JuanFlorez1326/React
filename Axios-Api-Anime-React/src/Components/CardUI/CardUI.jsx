import React from "react"
import './CardUI.css'

export const CardUI = ({ data  }) => {
    const {title, images, trailer, episodes, rating, status} = data

    return (
        <>
            <div className='divInfo'>
                <div className='divCard'>
                    <div className='divTitle'>
                        <h3>{ title }</h3>
                    </div>
                    
                    <div className='divImage'>
                        <img className='classImage' src={ images.jpg.image_url } alt={ title } />
                    </div>

                    <h5 className='fontItem'>Rating: { rating }</h5>
                    <h5 className='fontItem'>Status: { status }</h5>
                    <h5 className='fontItem'>Episodes: { episodes } </h5>
                    <a href={trailer.url} target='_blank' rel='noopener noreferrer'><button className='btnTrailer'>Ver Trailer</button></a>
                </div>
            </div>
        </>    
    )
}
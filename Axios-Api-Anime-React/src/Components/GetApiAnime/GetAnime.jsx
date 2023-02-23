import React, { useState, useEffect } from "react"
import axios from "axios"
import './GetAnime.css'
import { CardUI } from '../CardUI/CardUI'

export const GetApiAnime = () => {

    const [card, setCard] = useState([])
    const URL = 'https://api.jikan.moe/v4/anime'

    const GetApi = (event) => {
        axios.get(URL)
        .then(response => {
            setCard(response.data.data)
            console.log(response.data.data);
        })
        .catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        GetApi()
    }, [URL])
    
    return (
        <div>
            <div className='divRender'>
                {
                    card.map(
                        card => (
                            <CardUI key={card.mal_id} data={card}/>
                        )
                    )
                }
            </div>
        </div>
    )
}
import React from "react"
import { Footer } from "../Components/Footer/Footer"
import { GetApiAnime } from "../Components/GetApiAnime/GetAnime"
import { Header } from "../Components/Header/Header"

export const Page = () => {
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <GetApiAnime/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App() {
    const cards = data.map((item) => {
        return (
            <Card 
                title = {item.title}
                location = {item.location}
                googleMap = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                img = {item.imageUrl}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}
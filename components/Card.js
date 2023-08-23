import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card--container">
                <img src={`../images/${props.img}`} className="card--image" />
                <div className="card--info">
                    <img src="../images/pin.svg" className="map--pin" />
                    <span className="card--location">{props.location}</span>
                    <a href={props.location} className="map--link">View on Google Maps</a>
                    <h1 className="card--title">{props.title}</h1>
                    <p className="card--date">{props.startDate} - {props.endDate}</p>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}
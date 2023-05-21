import React from 'react'
import apartments from "../datas/data.json"
import { Link } from 'react-router-dom'

function Card(apartments) {
    return (
        <Link to={`/Appartment/${apartments.id}`} className="ks-appartment-item">
            <div className='ks-container'>
                <img className='appartment_cover' src={apartments.cover} alt=""></img>
                <div>{apartments.title}</div>
            </div>
        </Link>

    )
}

export default Card


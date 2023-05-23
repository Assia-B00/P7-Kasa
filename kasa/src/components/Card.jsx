import React from 'react'
import apartments from "../datas/data.json"
import { Link } from 'react-router-dom'
import '../styles/KasaList.css'

function Card(apartments) {
    return (
        <Link to={`/Appartment/${apartments.id}`} className="ks-appartment-item">
            <div className='container-card'>
                <div className='ks-card'>
                    <img className='appartment_cover' src={apartments.cover} alt=""></img>
                    <div className='card-title'>{apartments.title}</div>
                </div>
            </div>
        </Link>

    )
}

export default Card


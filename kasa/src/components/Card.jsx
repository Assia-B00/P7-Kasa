import React from 'react'
import { appartmentList } from '../datas/appartmentList'
import { Link } from 'react-router-dom'

function Card(appartment) {
    return (
    <Link to={`/Appartment/${appartmentList.id}`} className="ks-appartment-item">
            <div className='ks-container'>
                <img className='appartment_cover' src={appartment.cover} alt=""></img>
                <div>{appartment.title}</div>
            </div>
        </Link>
       
            )
}

export default Card


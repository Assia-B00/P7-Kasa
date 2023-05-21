import React from 'react'
import apartments from "../datas/data.json"
import '../styles/KasaList.css'
import Card from './Card'

function KasaList() {

    return (

        <div className='ks-container'>
            {apartments.map((apartment) => {
                return (
                    <Card key={apartment.id} id={apartment.id} title={apartment.title} cover={apartment.cover} />
                )
            })}

        </div>
    )
}

export default KasaList
import React from 'react'
import { appartmentList } from '../datas/appartmentList'
import '../styles/KasaList.css'
import Card from './Card'

function KasaList() {
    return (
       
        <div className='ks-container'>
            {appartmentList.map((appartment) => {
                return (
                    <Card key={appartment.id} id={appartment.id} title={appartment.title} cover={appartment.cover} />
                )
            })}
        </div>
        
    )
}

export default KasaList
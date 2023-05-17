import { appartmentList } from '../datas/appartmentList'

function KasaList() {
    return (
        <div>
            <ul>
                {appartmentList.map((appartment) => (
                    <li key={appartment.id}>{appartment.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default KasaList
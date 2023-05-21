import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import apartments from "../../datas/data.json"
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'

function Appartment() {

  const params = useParams()

  const apartmentDetail = apartments.filter(function (apartment) {

    return apartment.id === params.id;
  })
  console.log(apartmentDetail)
  return (
    <div>
      <main className='about_main'>
        {apartmentDetail.map(
          ({ id, title, pictures, description, host, rating, location, equipments, tags }) => {
            return (
              <div key={`/Appartment/${id}`} className="appartment_main_collapse">
                <Carousel pictures={pictures} />
                <div>{title}</div>
                <div>{location}</div>
                <Collapse key={id} id={id} title={'Description'} content={description} />
                <Collapse key={id} id={id} title={'Equipements'} content={equipments} />
              </div>
            )
          }
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Appartment

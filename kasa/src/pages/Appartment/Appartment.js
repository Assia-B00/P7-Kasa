import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import apartments from "../../datas/data.json"
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import "../../styles/Appartment.css"


const arrayStars = [1, 2, 3, 4, 5]

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
                <div className='info_collapse'>
                  <div className='info_apart'>
                    <div className='title_location_tags'>
                      <div className='title'>{title}</div>
                      <div className='location'>{location}</div>
                      <div className='div-tags'>
                        {tags.map((element, index) => {
                          return (<p className='tags' key={"tags-" + index}>{element}</p>)
                        })}
                      </div>
                    </div>
                    <div className='host-picture-stars'>
                      <div className='host_picture'>
                        <div className='host_name'>{host.name}</div>
                        <img className='host_img' src={host.picture} />
                      </div>
                      <div className='stars'>
                        {
                          arrayStars.map(element => {
                            const nbreEtoiles = parseInt(rating)
                            return (<span key={"star-" + element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                          })
                        }
                      </div>
                    </div>
                  </div>
                  <div className='collapse_appart'>
                    <Collapse key={id} id={id} title='Description' content={description} />
                    <Collapse key={id} id={id} title='Equipements' content={equipments.map((eq, index) => (
                      <li key={index}>{eq}</li>
                    )
                    )} />
                  </div>
                </div>
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



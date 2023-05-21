import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import { appartmentList } from '../../datas/appartmentList'

function Appartment() {

  return (
    <div>
      <Card />
      <main className='about_main'>
        {appartmentList.map(appartment => {
          return (
            <div key={`/Appartment/${appartmentList.id}`} className="appartment_main_collapse">
              <Collapse key={appartment.id} id={appartment.id} title={'Description'} content={appartment.description} />
              <Collapse key={appartment.id} id={appartment.id} title={'Equipements'} content={appartment.equipments} />
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

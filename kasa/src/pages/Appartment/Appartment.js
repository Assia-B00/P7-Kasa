import FirstImage from '../../components/First_image'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import { appartmentList } from '../../datas/appartmentList'

function Appartment() {

  const appartmentDatas = [
    {
      "id": "1",
      "title": "Description",
      "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      "id": "2",
      "title": "Respect",
      "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
    },
    {
      "id": "3",
      "title": "Service",
      "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
    },
    {
      "id": "4",
      "title": "Sécurité",
      "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

  return (
    <div>
      <FirstImage />
      <Card />
      <main className='about_main'>
        {appartmentList.map(data => {
          return (
            <div key={appartmentList.id} className="appartment_main_collapse">
              <Collapse style={{ margin: '30px 0' }} key={appartmentList.id} title={'Description'} content={data.description} />
              <Collapse style={{ margin: '30px 0' }} key={appartmentList.id} title={'Equipements'} content={data.equipments} />
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

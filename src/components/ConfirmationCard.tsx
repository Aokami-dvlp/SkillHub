import { Developer } from '../models/developer'
import './styles/ConfirmationCard.css'

interface Props {
    developer: Developer;
    }

const ConfirmationCard = ({developer}:Props) => {
  return (
    <div className='devCard'>
        <h2>Riepilogo dati:</h2>
        <div className='devResume'>
        <p>Nome: {developer.name}</p>
        <p>Cognome: {developer.surname}</p>
        <p>Età: {developer.age}</p>
        <p>Livello: {developer.level}</p>
        <p>In PWC da: {developer.inpwcfrom}</p>
        <p>Skills:</p>
        <ul>
            {developer.skill.map((skill, i) => <li key={i}>{skill.name} - {skill.level}</li>)}
        </ul></div>
    </div>
  )
}

export default ConfirmationCard
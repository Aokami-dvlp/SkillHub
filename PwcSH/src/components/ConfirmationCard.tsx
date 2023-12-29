import { Developer } from '../models/developer'

interface Props {
    developer: Developer;
    }

const ConfirmationCard = ({developer}:Props) => {
  return (
    <div>
        <h1>Riepilogo dati:</h1>
        <p>Nome: {developer.name}</p>
        <p>Cognome: {developer.surname}</p>
        <p>Età: {developer.age}</p>
        <p>Livello: {developer.level}</p>
        <p>In PWC da: {developer.inpwcfrom}</p>
        <p>Skills:</p>
        <ul>
            {developer.skill.map((skill, i) => <li key={i}>{skill.name} - {skill.level}</li>)}
        </ul>
    </div>
  )
}

export default ConfirmationCard
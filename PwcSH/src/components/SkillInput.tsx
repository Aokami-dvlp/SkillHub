import { useState, useEffect } from 'react'
import { Skill } from '../models/developer'

interface Props {
    setSkillArray: (skillArray: Skill[]) => void;
    skillArray: Skill[];
    i: number;  
}

const SkillInput = ({setSkillArray, skillArray, i}:Props) => {

  const [nameInput, setNameInput] = useState<string>(skillArray[i]?.name || '');
  const [levelSelect, setLevelSelect] = useState<number>(skillArray[i]?.level || 0);

  const [confirmed, setConfirmed] = useState<boolean>(false);

  const handleSetSkill = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newSkill: Skill = {name: nameInput, level: levelSelect};
    setSkillArray([...skillArray, newSkill]);
    setConfirmed(true);
  }

  useEffect(() => {
    console.log('Nuovo stato:', skillArray);
  }, [skillArray]);

  return (
    <label>
            Skill {i+1}:
            <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
            <select value={levelSelect} onChange={(e) => setLevelSelect(parseInt(e.target.value))}>
                <option disabled value={0}>Livello competenza</option>
                <option value="1">Principiante</option>
                <option value="2">Già usato per progetti personali</option>
                <option value="3">Già usato a livello lavorativo</option>
            </select>
            {!confirmed && <button onClick={e => handleSetSkill(e)}>Conferma</button>}
    </label>
  )
}

export default SkillInput
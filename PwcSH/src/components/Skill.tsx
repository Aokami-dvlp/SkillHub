import { useState } from 'react'
import { Skill } from '../models/developer'

interface Props {
    setSkillArray: (skillArray: Skill[]) => void;
    skillArray: Skill[];
    i: number;  
}

const Skill = ({setSkillArray, skillArray, i}:Props) => {

  const [nameInput, setNameInput] = useState<string>('');
  const [levelSelect, setLevelSelect] = useState<number>(0);

  const handleSetSkill = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newSkill: Skill = {name: nameInput, level: levelSelect};
    setSkillArray([...skillArray, newSkill]);
    setNameInput('');
    setLevelSelect(0);
  }

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
            <button onClick={e => handleSetSkill(e)}>Aggiungi</button>
    </label>
  )
}

export default Skill
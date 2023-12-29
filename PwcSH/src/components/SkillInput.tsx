import { useState, useEffect } from 'react'
import { Skill } from '../models/developer'
import './styles/SkillInput.css'
import cancel from '../assets/cancel.png'
import confirm from '../assets/verified.png'

interface Props {
    setSkillArray: (skillArray: Skill[]) => void;
    skillArray: Skill[];
    handleRemoveSkillInput : (i: number) => void;
    i: number;  
}

const SkillInput = ({setSkillArray, skillArray, handleRemoveSkillInput, i}:Props) => {

  const [nameInput, setNameInput] = useState<string>(skillArray[i]?.name || '');
  const [levelSelect, setLevelSelect] = useState<number>(skillArray[i]?.level || 0);

  const [confirmed, setConfirmed] = useState<boolean>(false);

  const handleSetSkill = () => {
    const newSkill: Skill = {name: nameInput, level: levelSelect};
    setSkillArray([...skillArray, newSkill]);
    setConfirmed(true);
  }

  const handleRemoveSkill = () => {
    setSkillArray(skillArray.filter((skill) => skill.name !== nameInput));
    handleRemoveSkillInput(i);
  }

  useEffect(() => {
    if (skillArray[i]) {
      setNameInput(skillArray[i].name);
      setLevelSelect(skillArray[i].level);
    }
  }, [skillArray, i]);

  return (
    <div id={`${i}`} className='skillContainer'>
          <div className='selectContainer'>
            <input type="text" placeholder='Inserisci competenza' disabled={confirmed} value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
            <select value={levelSelect} disabled={confirmed} onChange={(e) => setLevelSelect(parseInt(e.target.value))}>
                <option disabled value={0}>Livello</option>
                <option value="1">Principiante</option>
                <option value="2">Già usato per progetti personali</option>
                <option value="3">Già usato a livello lavorativo</option>
            </select></div>
            <div className='butt-container'>
            {!confirmed && <img className='confirm' src={confirm} alt='confirm' onClick={handleSetSkill} />}
            <img className='cancel' src={cancel} alt='cancel' onClick={handleRemoveSkill} />
            </div>
    </div>
  )
}

export default SkillInput
import { useState, useEffect } from 'react'
import { Skill } from '../models/developer'
import PocketBase from 'pocketbase'
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

  
  const [skillsRec, setSkillsRec] = useState<string[]>([]);
  
useEffect(() => {
  const pb = new PocketBase('https://skill-hub.pockethost.io');
  const skillRecords = async() => await pb.collection('skills').getFullList({
    sort: 'name',}).then((res) => res.forEach((skill) => setSkillsRec((prevSkills) => [...prevSkills, skill.name])));
  skillRecords();}
  , []);

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

  return (
    <div id={`${i}`} className='skillContainer'>
          <div className='selectContainer'>
            <select disabled={confirmed} value={nameInput} onChange={(e) => setNameInput(e.target.value)}>
                <option disabled value=''>{skillsRec.length > 0 ? 'Seleziona Skill' : 'Sto Caricando...' }</option>
                {skillsRec.map((skill, i) => <option key={i} value={skill}>{skill}</option>)}
                
            </select>
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
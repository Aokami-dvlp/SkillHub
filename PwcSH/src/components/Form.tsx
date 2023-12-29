import React, { useState } from 'react'
import { Developer, Skill } from '../models/developer'
import './styles/Form.css'
import SkillInput from './SkillInput';

interface Props {
    goToConfirmation: (developer:Developer) => void;
    developer: Developer;
    setDeveloper: (developer:Developer) => void;
}

const Form = ({goToConfirmation, developer, setDeveloper}:Props) => {

    const [skillArray, setSkillArray] = useState<Skill[]>(developer.skill);
    const [numSkills, setNumSkills] = useState<number>(1);

    const handleAddSkill = () => {
        setNumSkills(prevNumSkills => prevNumSkills + 1);
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
        setDeveloper({...developer, [key]: e.target.value});
    };

    const skillsComponents:React.JSX.Element[] = [];

    const handleRemoveSkillInput = (i:number) => {
        document.getElementById(`${i}`)?.remove();
        };

    for (let i = 0; i < numSkills; i++) {
        skillsComponents.push(
            <SkillInput key={i} setSkillArray={setSkillArray} skillArray={skillArray} handleRemoveSkillInput={handleRemoveSkillInput} i={i}/>
        );
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setDeveloper({...developer, skill: skillArray})
        goToConfirmation(developer)
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Nome:
            <input type="text" value={developer.name} required onChange={(e) => handleChange(e, 'name')} />
        </label>
        <label>
            Cognome:
            <input type="text" value={developer.surname} onChange={(e) => handleChange(e, 'surname')} />
        </label>
        <label>
            Età:
            <input type="number" value={developer.age} onChange={(e) => handleChange(e, 'age')} />
        </label>
        <label>
            Qualifica:
            <input type="text" value={developer.level} onChange={(e) => handleChange(e, 'level')} />
        </label>
        <label>
            In PWC da:
            <input type="text" placeholder='mm/aaaa' value={developer.inpwcfrom} onChange={(e) => handleChange(e, 'inpwcfrom')} />
        </label>
        <legend>Competenze
        {skillsComponents}
        <button className='add-butt' onClick={handleAddSkill}>Aggiungi Skill</button>
        </legend>

        <button className='submit-butt' type='submit'>Submit</button>
    </form>
    </>
    )
}

export default Form
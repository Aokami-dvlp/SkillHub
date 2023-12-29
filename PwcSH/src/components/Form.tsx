import React, { useState } from 'react'
import { Developer } from '../models/developer'
import './Form.css'
import Skill from './Skill';

interface Props {
    goToConfirmation: (developer:Developer) => void;
}

const Form = ({goToConfirmation}:Props) => {

    const [developer, setDeveloper] = useState<Developer>({
        name: '',
        surname: '',
        age: 0,
        level: '',
        skill: [],
        inpwcfrom: ''
    })

    const [skillArray, setSkillArray] = useState<Skill[]>([]);

    const [numSkills, setNumSkills] = useState<number>(1);

    const handleAddSkill = () => {
        setNumSkills(prevNumSkills => prevNumSkills + 1);
    };

    const handleRemoveSkill = () => {
        setNumSkills(prevNumSkills => prevNumSkills - 1);
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
        setDeveloper({...developer, [key]: e.target.value});
    };

    const skillsComponents = [];
    for (let i = 0; i < numSkills; i++) {
        skillsComponents.push(
            <Skill key={i} setSkillArray={setSkillArray} skillArray={skillArray} i={i}/>
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
        {skillsComponents}
        {numSkills < 5 && <button type="button" onClick={handleAddSkill}>Add Skill</button>}
        {numSkills > 1 && <button type="button" onClick={handleRemoveSkill}>Remove Skill</button>}

        <button type='submit'>Submit</button>
    </form>
    </>
    )
}

export default Form
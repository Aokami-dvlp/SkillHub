import React, { useEffect, useState } from 'react'
import { Developer, Skill } from '../models/developer'
import './styles/Form.css'
import SkillInput from './SkillInput';
import TextField from '@mui/material/TextField';

interface Props {
    goToConfirmation: (developer:Developer) => void;
    developer: Developer;
    setDeveloper: (developer:Developer) => void;
}

const Form = ({goToConfirmation, developer, setDeveloper}:Props) => {

    const [skillArray, setSkillArray] = useState<Skill[]>(developer.skill);
    const [numSkills, setNumSkills] = useState<number>(1);

    const handleAddSkill = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setNumSkills(numSkills + 1);
    };

    useEffect(() => {
        console.log(skillArray);
    }
    , [skillArray]);

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
        <div className='form-container'>
            <div className='personal-info'>
    <TextField
        style={{marginTop: '10px'}}
          id="name-input"
          label="Nome"
          type="text"
          color='warning'
            value={developer.name}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'name')}
        />
    <TextField
        style={{marginTop: '10px'}}
          id="surname-input"
          label="Cognome"
          type="text"
          color='warning'
            value={developer.surname}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'surname')}
        />
    <TextField
        style={{marginTop: '10px'}}
          id="age-input"
          label="Età"
          type="number"
          color='warning'
            value={developer.age}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'age')}
        />
        </div>
        <div className='working-info'>
    <TextField
        style={{marginTop: '10px'}}
          id="level-input"
          label="Qualifica"
          type="text"
          color='warning'
            value={developer.level}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'level')}
        />
    <TextField
        style={{marginTop: '10px'}}
          id="inpwcfrom-input"
          label="In PWC da"
          type="text"
          color='warning'
          placeholder='MM/AAAA'
            value={developer.inpwcfrom}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'inpwcfrom')}
        />
    <TextField
        style={{marginTop: '10px', marginBottom: '10px'}}
          id="email-input"
          label="Email"
          type="email"
          color='warning'
            value={developer.email}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'email')}
        />
        </div>
    </div>
        
{        <>
        
        <button className='add-butt' onClick={e => handleAddSkill(e)}>Aggiungi Skill</button>
        <div className='skills'>
        {skillsComponents}
        
        </div>
        <button className='submit-butt' type='submit'>Inserisci</button></> }
    </form>
    </>
    )
}

export default Form


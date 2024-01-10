import {useState} from 'react'
import Form from '../components/Form'
import { Developer } from '../models/developer';
import ConfirmationCard from '../components/ConfirmationCard';
import PocketBase from 'pocketbase';
import './styles/InsertDev.css'

const InsertDev = () => {
    const [submitting, setSubmitting] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [developer, setDeveloper] = useState<Developer>({
      name: '',
      surname: '',
      age: 0,
      level: '',
      skill: [],
      inpwcfrom: '',
      email: ''
  })


    
    const goToConfirmation = () => {
        setSubmitting(true);    
    }

    const thanksConfirmation = () => {
      const pb = new PocketBase('https://skill-hub.pockethost.io');
      const createRecord = async () => {
      await pb.collection('developers').create(developer).then((res) => console.log(res));
      };
      createRecord();
      setConfirmed(true);
    }

    const backToForm = () => {
        setSubmitting(false);
        setConfirmed(false);
        setDeveloper({
          name: '',
          surname: '',
          age: 0,
          level: '',
          skill: [],
          inpwcfrom: '',
          email: ''});
    }


  return (
    <>
    {!submitting && !confirmed && <Form goToConfirmation={goToConfirmation} developer={developer} setDeveloper={setDeveloper} />}
    {submitting && !confirmed && <div className='resume'><ConfirmationCard developer={developer}/>
                                  <button onClick={thanksConfirmation}>Conferma e inserisci nel database</button></div>}
    {confirmed && <div className='confirmed'>
                    <h2 className='thanks'>Grazie per aver inserito un nuovo sviluppatore!</h2>
                    <button onClick={backToForm}>Inserisci un altro sviluppatore</button>
                  </div>}
    </>
  )
}

export default InsertDev
import {useState} from 'react'
import Form from '../components/Form'
import { Developer } from '../models/developer';

const InsertDev = () => {
    const [submitting, setSubmitting] = useState(false);
    const [developer, setDeveloper] = useState<Developer>({
      name: '',
      surname: '',
      age: 0,
      level: '',
      skill: [],
      inpwcfrom: ''
  })

    /*const pb = new PocketBase('https://skill-hub.pockethost.io');

    const createRecord = async () => {
    const record = await pb.collection('developers').create(developer);
}; */
    
    const goToConfirmation = () => {
        setSubmitting(true);    
    }

  return (
    <>
    {!submitting && <Form goToConfirmation={goToConfirmation} developer={developer} setDeveloper={setDeveloper} />}
    {submitting && <h1>Conferma inserimento</h1>}
    </>
  )
}

export default InsertDev
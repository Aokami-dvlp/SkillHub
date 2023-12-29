import React from 'react'
import Form from '../components/Form'
import { Developer } from '../models/developer';

const InsertDev = () => {
    const [submitting, setSubmitting] = React.useState(false);
    const [toInsert, setToInsert] = React.useState<Developer>();

    /*const pb = new PocketBase('https://skill-hub.pockethost.io');

    const createRecord = async () => {
    const record = await pb.collection('developers').create(developer);
}; */
    
    const goToConfirmation = (developer:Developer) => {
        setSubmitting(true);
        setToInsert(developer);        
    }

  return (
    <>
    {!submitting && <Form goToConfirmation={goToConfirmation} />}
    {submitting && toInsert && <><h1>Conferma inserimento:</h1>
    <li>{toInsert.name}</li>
    <li>{toInsert.surname}</li>
    <li>{toInsert.age}</li>
    <li>{toInsert.level}</li>
    <li>{toInsert.inpwcfrom}</li>
    </>}
    </>
  )
}

export default InsertDev
import { useState, useEffect } from 'react'
import Table from '../components/Table'
import { Developer } from '../models/developer'
import PocketBase from 'pocketbase'
import './styles/TableView.css'
import DetailsModal from '../components/DetailsModal'
import { DevDetails } from '../models/devDetails'

const TableView = () => {

  const [developers, setDevelopers] = useState<Developer[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedDeveloper, setSelectedDeveloper] = useState<DevDetails | null>(null)
  
  useEffect(() => {
    const pb = new PocketBase('https://skill-hub.pockethost.io');
    const devRecords = async() => await pb.collection('developers').getFullList()
    .then((res) => res.forEach((record) => setDevelopers((prevArray) => [...prevArray, JSON.parse(JSON.stringify(record)) ])));
    devRecords();
    }
    , []);

  return (
    <div className='container'>
    <Table developers={developers} setOpenModal={setOpenModal} setSelectedDeveloper={setSelectedDeveloper}/>
    <DetailsModal openModal={openModal} setOpen={setOpenModal} developer={selectedDeveloper}/> 
    </div>
  )
}

export default TableView
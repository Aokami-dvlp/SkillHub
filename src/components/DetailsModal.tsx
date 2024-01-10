import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Developer } from '../models/developer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };

interface Props {
    openModal: boolean;
    setOpen: (open: boolean) => void;
    developer: Developer | null;
    
}

const DetailsModal = ({openModal, setOpen, developer}:Props) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dettaglio Developer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Nome: {developer?.name} <br/>
            Cognome: {developer?.surname} <br/>
            Età: {developer?.age} <br/>
            Qualifica: {developer?.level} <br/>
            Email: {developer?.email} <br/>
            In PWC da: {developer?.inpwcfrom} <br/>
            Competenze: {developer?.skill.map((skill, i) => <li key={i}>{skill}</li>)}

          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default DetailsModal
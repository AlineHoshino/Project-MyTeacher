import type { NextPage } from 'next';
import { Box } from '@mui/system';
import Lista from '../src/components/Lista/Lista';
import { useIndex } from '../src/hooks/pages/useIndex';
import { Dialog } from '@mui/material';

const Home: NextPage = () => {
  const { listaProfessores } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main'}}>
        <Lista professores={listaProfessores}></Lista>
      </Box>

      <Dialog open={true} fullWidth PaperProps={{sx: {p: 5}}}>
        teste
      </Dialog>
    </div>

  )
}

export default Home

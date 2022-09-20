 import './App.css';
import { RadioGroup,FormLabel, InputAdornment, Stack, TextField, FormControlLabel, Radio,Box, Checkbox, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Stack spacing={4}> 
       <Stack direction='row' spacing={2}>
       <TextField label='nom'/>
       <TextField label='age '/>
       <TextField label='email'/>
       
       </Stack>
       <div>
    
       <TextField label='biblio' multiline rows={4} sx={{ width: '510px' }}/>
       </div>
       <Stack direction='row' spacing={2}>
         <TextField
          label="définir ta taille"
          id="outlined-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
         <TextField
          label="définir ton poids"
          id="outlined-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
         </Stack>
       <Box>
        <FormLabel>
          Sexe
        </FormLabel>
        <RadioGroup>
         <FormControlLabel control={<Radio/>} label='homme' value='homme'/>
         <FormControlLabel control={<Radio/>} label='femme' value='femme'/>
        </RadioGroup>
       </Box>
       <Box>
       <FormControlLabel control={<Checkbox/>} label='arabe' value='arabe'/>
       <FormControlLabel control={<Checkbox/>} label='francais' value='francais'/>
       <FormControlLabel control={<Checkbox/>} label='anglais' value='anglais'/>
       </Box>
       </Stack>
       <Button variant='text'>
       Envoyer
        </Button>
        <Button variant='text'>
        Annuler
        </Button>
     
    </div>
  );
}

export default App;

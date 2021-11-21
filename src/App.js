import logo from './logo.svg';
import './App.css';
import YoutubeForm from './components/YoutubeForm';
import OldYoutube from './components/OldYoutub';
import FormikYoutube from './components/FormikYoutube';
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import AutoComplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Loading from './components/loading'
import Check from './components/check';

function App() {

  function handleClick() {
    
  }

  return (
    <div className="App">
      {/* <YoutubeForm /> */}
      {/* <OldYoutube /> */}
      {/* <FormikYoutube /> */}
      <Button variant="outlined" startIcon={<SaveIcon />}>Save</Button>
      <AutoComplete options={topFilms} sx={{width: 300}} renderInput={(params) => <TextField {...params} label="Movie" />} />
      <Loading />
      <Check />
    </div>
  );
}
const topFilms = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }]
export default App;

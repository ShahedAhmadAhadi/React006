import BookList from './comp-context/BookList';
import Navbar from './comp-context/Navbar';
import ThemeToggle from './comp-context/ThemeToggle';
import { AuthContextProvider } from './context/AuthContext';
import BookContextProvider from './context/BookContext';
import BookListContextProvider from './booklist/context/BookContext';
import { ThemeContextProvider } from './context/ThemeContext';
import SongList from './func-comp-context/SongList';
import BookLists from './hook-context/BookLists';
import NavBar from './hook-context/NavBar';
import Nav from './booklist/components/Navbar';
import Books from './booklist/components/BookList'
import BookForm from './booklist/components/BookForm';

function App() {

  return (
    <div className="App">
      {/* <YoutubeForm /> */}
      {/* <OldYoutube /> */}
      {/* <FormikYoutube /> */}
      {/* <Button variant="outlined" startIcon={<SaveIcon />}>Save</Button>
      <AutoComplete options={topFilms} sx={{width: 300}} renderInput={(params) => <TextField {...params} label="Movie" />} />
      <Loading />
      <Check /> */}


      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}


      {/* <SongList /> */}

      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookLists />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}




      <BookListContextProvider>
        <Nav />
        <Books />
        <BookForm />
      </BookListContextProvider>
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

import "./App.css";
import { JokesGenerator } from "./components/jokesGenerator";
import { JokeCard } from "./components/jokeCard";
import { FavList } from "./components/favList";
function App() {
 return (
  <div className="App App-header">
   <h3>Joke Generator</h3>
   <JokesGenerator />
   <JokeCard />
   <FavList />
  </div>
 );
}

export default App;

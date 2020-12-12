import './styles/App.css';
import Card from './components/card'
import Header from './components/header'
import cardData from './components/cardData'

function App() {
  const cardComponents = cardData.map(joke => 
  <Card 
    key={joke.id} 
    name={joke.name} 
    ing={joke.ing} 
    url={joke.url} 
  />)

  return (
    <div className="App">

      <Header />

      {cardComponents}

    </div>
  );
}

export default App;

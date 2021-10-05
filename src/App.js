
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
      
        { <SingleBook book={fantasyBooks[0]} />}
        <BookList books={fantasyBooks} />
      </header>
    </div>
  )
}

export default App
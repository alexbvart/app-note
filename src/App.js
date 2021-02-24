import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Dark from './components/Dark'
import NotesList from './components/note/NotesList'
import CreateNote from './components/note/CreateNote'
import CreateUser from './components/user/CreateUser'
import Navigation from './components/Navigation';
/* import TopCardList from './components/TopCardList'; */

import './components/styles/form.css';

function App() {
  return (
    <Router>
        <Header >
          <Dark />
        <Navigation />
        </Header>
        
          <Route path='/' component={NotesList} exact/>
          {/* <Route path='/' component={TopCardList} exact/> */}
        <div className="wrapper">
          <Route path='/edit/:id' component={CreateNote}/>
          <Route path='/create' component={CreateNote}/>
          <Route path='/user' component={CreateUser}/>
        </div>

        
    </Router>
  );
}

export default App;

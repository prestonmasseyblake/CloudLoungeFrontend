import './App.css';
import './bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import Create from './containers/CreateLounge';
import Lounge from './containers/Lounge';
import Edit from './containers/EditPage';
import { DndProvider } from "react-dnd";
import {TouchBackend} from "react-dnd-touch-backend";
const App = () => {
  const options = {
    enableMouseEvents: true
  }
  return (
    <DndProvider backend={TouchBackend} options={options}>
    <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/create' component={Create}/>
        <Route exact path='/:id' component={Lounge}/>
        <Route exact path='/edit/:id' component={Edit}/>
      </Switch>
    </Layout>
    </Router>
    </DndProvider>
  );
}

export default App;

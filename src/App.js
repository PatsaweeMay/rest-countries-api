import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import PageCountry from './PageCountry';
import PageHome from './PageHome';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <PageHome />
        </Route>
        <Route path="/country/:countryCode">
          <PageCountry/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

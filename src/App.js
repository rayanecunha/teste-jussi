import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:textSearch" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

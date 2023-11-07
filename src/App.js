import {BrowserRouter, Route} from 'react-router-dom'
import MostStarredRepos from './components/MostStarredRepos'
import SpecificRepoDetails from './components/SpecificRepoDetails'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Route component={MostStarredRepos} />
    <Route path="/specific" component={SpecificRepoDetails} />
  </BrowserRouter>
)

export default App

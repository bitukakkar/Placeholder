import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Landing} />
          <Route exact path='/landing' component={Landing} />
        </Switch>
        <ToastContainer theme='colored' limit={3} />
      </Router>
    </>
  )
}

export default App

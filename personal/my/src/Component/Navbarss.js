import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import Contact from './Contact'
import About from './About'
import Home from'./Home'
import Project from './Project'

export default function Navbarss(){
    return (
    <div>
      <Router>
        <Nav variant="pills" defaultActiveKey="/home" className="justify-content-center">
          <Nav.Item>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/about">
              <Nav.Link eventKey="link-1">About</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/project">
              <Nav.Link eventKey="link-2">Project</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/contact">
              <Nav.Link eventKey="link-3">Contact</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          
        </Nav>
        <Switch>
          <Route path='/home'><Home/></Route>
          <Route path='/about'><About/></Route>
          <Route path='/project'><Project/></Route>
          <Route path='/contact'><Contact/></Route>
        </Switch>
        </Router>
    </div>
    )
}
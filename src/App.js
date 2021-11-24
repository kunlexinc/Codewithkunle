
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Layout, Menu, } from 'antd';
import Appheader from './components/common/header';
import AppFooter from './components/common/footer';
import AppRegister from './views/Register';

import AppHome from './views/home';



const { Header, Content,Footer  } = Layout;



function App() {
  return (
    <div className="App">

<Layout className="mainLayout">
    <Header>
      <Appheader/>
      
    </Header>

    <Content>
      <Router>
      <Switch>
        <Route exact  path="/">
        <AppHome/> 
        </Route>

        <Route path="/register">
        <AppRegister />
        </Route>
      </Switch>
      </Router>
    </Content>
    
  </Layout>,
  <Footer>
    <AppFooter />
  </Footer>
     
      
    </div>
  );
}

export default App;

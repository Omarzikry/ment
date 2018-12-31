import React, { Component ,Fragment } from 'react';
import './normalize.css';
import { BrowserRouter , Route , Switch} from "react-router-dom"
import Carousel from './components/UI/Carousel/Carousel';
import Navs from './components/UI/Navs/Navs';
import Layout from './containers/Layout/Layout';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/" exact render={() => {
            return (
              <Fragment>
              <Carousel auto={true}/>
              <Navs />
            </Fragment>
            );
          }} />
        </Switch>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component,Suspense} from "react";
import { Switch, Route} from "react-router-dom";
import Loading from "./Component/Loading/Loading";
import Home from './Pages/Home'
import Navigation from './Component/Navigation/Navigation'
import "./App.css";
export default class App extends Component {
  render() {
//     const Home =React.lazy(() => import('./Pages/Home'));
//     const Error =React.lazy(() => import('./Pages/Error'));
    return (
      <div>
        <Navigation />
      <Home />
    {/* <Suspense fallback={<Loading />}>
       <Navigation />
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route component={Home}/>
      </Switch>
     </Suspense> */}
      </div>
    );
  }
}

import React, { Component,Suspense} from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
// import Footer from './Component/Footer/Footer'
import Loading from "./Component/Loading/Loading";
import Navigation from './Component/Navigation/Navigation'
export default class App extends Component {
  render() {
    const Home =React.lazy(() => import('./Pages/Home'));
    const Error =React.lazy(() => import('./Pages/Error'));
    const Product =React.lazy(() => import('./Pages/Product'));
    const Login =React.lazy(() => import('./Pages/Login'));
    const Signup =React.lazy(() => import('./Pages/Signup'));
    return (
      <div>
        <div className='nav'>
        <Navigation />
        </div>
    <Suspense fallback={<Loading />}>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/product" component={Product}/>
         <Route exact path="/Login" component={Login}/>
         <Route exact path="/Register" component={Signup}/>
         <Route component={Error}/>
      </Switch>
     </Suspense>
     {/* <Footer /> */}
      </div>
    );
  }
}

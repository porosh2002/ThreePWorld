import React, { Component,Suspense} from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import Loading from "./Component/Loading/Loading";
import Navigation from './Component/Navigation/Navigation'
export default class App extends Component {
  render() {
    console.log('App Render');
    const Home =React.lazy(() => import('./Pages/Home'));
    const Error =React.lazy(() => import('./Pages/Error'));
    const Product =React.lazy(() => import('./Pages/Product'));
    const Login =React.lazy(() => import('./Pages/Login'));
    const Signup =React.lazy(() => import('./Pages/Signup'));
    const User =React.lazy(() => import('./Pages/User'));
    const Order =React.lazy(() => import('./Pages/Order'));
    const Earn =React.lazy(() => import('./Pages/Earn'));
    const Ops =React.lazy(() => import('./Pages/ops'));
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
         <Route exact path="/Profile/:id" component={User}/>
         <Route exact path="/Order/:id" component={Order}/>
         <Route exact path="/Earn/:id" component={Earn}/>
         <Route exact path="/Earn/:id" component={Earn}/>
         <Route exact path="/0psAdmin" component={Ops}/>
         <Route component={Error}/>
      </Switch>
     </Suspense>
      </div>
    );
  }
}


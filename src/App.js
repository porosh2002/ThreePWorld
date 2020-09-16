import React, { Component,Suspense} from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import Loading from "./Component/Loading/Loading";
import Navigation from './Component/Navigation/Navigation';
import Footer from './Component/Footer/Footer'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      id:'',
      Loged:false,
      LogedOut:true,
    }
  }
  render() {
    const Home =React.lazy(() => import('./Pages/Home'));
    const Error =React.lazy(() => import('./Pages/Error'));
    const Product =React.lazy(() => import('./Pages/Product'));
    const Login =React.lazy(() => import('./Pages/Login'));
    const Signup =React.lazy(() => import('./Pages/Signup'));
    const User =React.lazy(() => import('./Pages/User'));
    const Order =React.lazy(() => import('./Pages/Order'));
    const Earn =React.lazy(() => import('./Pages/Earn'));
    const Ops =React.lazy(() => import('./Pages/ops'));
    const SingleProduct =React.lazy(() => import('./Pages/SingleProduct'));
    const Cart =React.lazy(() => import('./Pages/Delivary'));
    const OrderLogin =React.lazy(() => import('./Pages/OrderLogin'));
    return (
      <div>
        <div className='nav'>
        <Navigation />
        </div>
    <Suspense fallback={<Loading />}>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/product/:id" component={Product}/>
         <Route exact path="/Login" component={Login}/>
         <Route exact path="/Register" component={Signup}/>
         <Route exact path="/Profile/:id" component={User}/>
         <Route exact path="/Order/:id" component={Order}/>
         <Route exact path="/Earn/:id" component={Earn}/>
         <Route exact path="/SingleProduct/:id" component={SingleProduct}/>
         <Route exact path="/cart/:id/:price" component={Cart}/>
         <Route exact path="/0psAdmin" component={Ops}/>
         <Route exact path="/AuthLog" component={OrderLogin}/>
         <Route component={Error}/>
      </Switch>
     </Suspense>
     <div>
        <Footer />
        </div>
      </div>
    );
  }
}


import React, { Component, Suspense } from "react";
import Loading from "../Component/Loading/Loading";
export default class Product extends Component {

  render() {
    console.log(this.props);
    const ProductDesk = React.lazy(() =>
      import("../Pages/Product-Filter-desk")
    );
    const ProductMob = React.lazy(() => import("../Pages/Product-filter-mob"));
    return (
      <div>
        <div>
          {window.innerWidth > 900 ? (
            <Suspense fallback={<Loading />}>
              <div>
                <ProductDesk />
              </div>
            </Suspense>
          ) : (
            <Suspense fallback={<Loading />}>
              <ProductMob />
            </Suspense>
          )}
        </div>
      </div>
    );
  }
}

import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import Card from '../MySkeleton/Card';
const ProdSkeleton = () => {
    return (

        <div
        className="product-image-con"
        style={{ width: window.innerWidth / 2 - 1 }}
      >
        <div className="product-image">
          {" "}
          {/* <Skeleton
            variant="rect"
            width={window.innerWidth / 2 - 1}
            height={220}
            animation="wave"
          /> */}
          <Card sstyle={{width:window.innerWidth / 2 - 1,height:220,margin:0}}/>
        </div>

        <div
          className="product-price-con"
          style={{ width: window.innerWidth / 2 - 1 }}
        >
          <Skeleton variant="text" width={90}  animation="wave"/>
          <Skeleton variant="text" width={120}  animation="wave"/>
          <Skeleton variant="text" animation="wave"/>
        </div>
      </div>
    )
}

export default ProdSkeleton

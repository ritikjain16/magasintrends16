import React, { useEffect, useState } from "react";
import "./Skeleton.css";
import Card from "./Card";

const Skeleton2 = ({sstyle}) => {
  const [cardlist, setcardlist] = useState([]);
  useEffect(() => {
    var a = [];
    for (var i = 0; i <= 20; i++) {
      a.push(i);
    }
    setcardlist(a);
  }, []);
  return (
    <div>
      <div className="skeleton">
        {cardlist.map((item, index) => (
          <Card key={index} sstyle={sstyle} />
        ))}
      </div>
    </div>
  );
};

export default Skeleton2;

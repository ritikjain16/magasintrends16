import React, { useEffect, useState } from "react";
import "./Skeleton.css";
import Card from "./Card";

const Skeleton1 = ({ sstyle }) => {
  const [cardlist, setcardlist] = useState([]);
  useEffect(() => {
    var a = [];
    for (var i = 0; i <= 20; i++) {
      a.push(i);
    }
    setcardlist(a);
  }, []);
  return (
    <div className="skeleton1">
      {cardlist.map((item, index) => (
        <Card key={index} sstyle={sstyle} />
      ))}
    </div>
  );
};

export default Skeleton1;

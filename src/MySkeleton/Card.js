import React from "react";

const Card = ({ sstyle }) => {
  return (
    <div>
      <div className="card" style={{ margin: sstyle.margin }}>
        <div
          className="card-content"
          style={{
            backgroundColor: `rgb(
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            0.5)`,
            width: sstyle.width,
            height: sstyle.height,
          }}
        >
          <div
            className="div1"
            style={{ width: sstyle.width + 500, height: sstyle.height + 500 }}
          ></div>
          <div
            className="div1"
            style={{ width: sstyle.width + 500, height: sstyle.height + 500 }}
          ></div>
          <div
            className="div1"
            style={{ width: sstyle.width + 500, height: sstyle.height + 500 }}
          ></div>
          <div
            className="div2"
            style={{ width: sstyle.width + 500, height: sstyle.height + 500 }}
          ></div>
          <div
            className="div2"
            style={{ width: sstyle.width + 500, height: sstyle.height + 500 }}
          ></div>
          <div
            className="div2"
            style={{ width: sstyle.width + 500, height: sstyle.height + 500 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

export default function Site({ number }) {
  if (number % 2 === 0) {
    return <div className="red"> Counter {number}</div>;
  }
  return <div className="aqua"> Counter {number}</div>;
}

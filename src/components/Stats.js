import React from "react";

export default function Stats({ items }) {
  if (!items.lenght) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list💼</em>
      </p>
    );
  }

  const numItems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numItems) * 100);
  return (
    <footer className="stats">
      !
      <em>
        {percentage === 100
          ? "you got everything! Ready to go✈️"
          : `you have ${numItems} items and you have already packed ${numpacked}
        ${percentage}%`}
      </em>
    </footer>
  );
}

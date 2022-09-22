import React from "react";
import Data from "./data.json";
import Card from "./Card";
import classes from "./Card.module.css";

// Step -01
// function First() {
//   return (
//     <div className={classes.cards}>
//       <Card programming={Data[0].programming} library={Data[0].library} />
//       <Card programming={Data[1].programming} library={Data[1].library} />
//       <Card programming={Data[2].programming} library={Data[2].library} />
//       <Card programming={Data[3].programming} library={Data[3].library} />
//     </div>
//   );
// }

// // Step - 02
// function First() {
//   let items = [];
//   for (let i = 0; i < Data.length; i++) {
//     items.push(
//       <Card programming={Data[i].programming} library={Data[i].library} />
//     );
//   }
//   return <div className={classes.cards}>{items}</div>;
// }

// Step - 03
// function First() {
//   let items = [];
//   items = Data.map((item) => (
//     <Card programming={item.programming} library={item.library} />
//   ));

//   return <div className={classes.cards}>{items}</div>;
// }

// Step - 04
function First() {
  return (
    <div className={classes.cards}>
      {Data.map((item, index) => (
        <Card
          key={index}
          programming={item.programming}
          library={item.library}
        />
      ))}
    </div>
  );
}

export default First;

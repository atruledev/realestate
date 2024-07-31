import React from "react";
import { listData } from "../lib/dummyData";
import Filter from "../Components/Filter";
import Card from "../Components/Card";
function List() {
  console.log(listData);
  return (
    <>
      <div className="container mx-auto  py-24 flex   max-w-screen-xl  md:py-10 ">
        <div className="flex-2 ">
        <div className="space-y-4">
          <Filter />
          {listData.map((d)=> {
            <Card CardName= {d.title} cardLocation={d.address} Price={d.price} bedroomDesc={d.bedroom} />
          })}
          </div>
        </div>
        <div className="flex-3 w-full bg-black h-screen mx-2">
          <p>hi</p>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default List;

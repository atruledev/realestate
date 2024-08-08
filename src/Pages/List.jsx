import React from "react";
import { listData } from "../lib/dummyData";
import Filter from "../Components/Filter";
import Card from "../Components/Card";
import Map from "../Components/Map"
function List() {
  console.log(listData);
  return (
    <>
      <div className="container mx-auto  py-24 flex   max-w-screen-xl  md:py-10 ">
        <div className="flex-2 pr-3 ">
        <div className="space-y-4">
          <Filter />
          {listData.map((d, index)=> {
           return  <Card CardName={d.title} cardLocation={d.address} Price={d.price} bathDesc={d.bathroom} BedDesc={d.bedroom} img={d.img} id={d.id} a={index} />
          })}
          </div>
        </div>
        <div className="flex-3 w-full  h-screen mx-2">
          <Map />
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default List;

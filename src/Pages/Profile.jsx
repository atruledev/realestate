import React from "react";
import USER from "../assets/images/user.png";
import { listData } from "../lib/dummyData";
import Card from "../Components/Card";

function Profile() {
  return (
    <>
      <div className="container mx-auto  py-18 flex   max-w-screen-xl  md:py-10">
        <div className="flex w-10/12">
          <div className="flex flex-col pb-5 ">
            <div className="flex  justify-between p-5 flex-col lg:flex-row  w-10/12 ">
              <div className="flex-row ">
                <h1 className="text-2xl font-medium mb-5  ">
                  User Information
                </h1>
                <div className=" flex flex-col mb-5">
                  <div className="flex p-2 ">
                    <span className="font-medium text-1.5xl ">Avatar:</span>
                    <img
                      className="mx-2"
                      src={USER}
                      width={25}
                      height={25}
                    ></img>
                  </div>
                  <div className="flex p-2 ">
                    <p className="font-medium text-1.5xl ">Username:</p>
                    <p className="mx-2 font-bold "> John Doe</p>
                  </div>
                  <div className="flex p-2 ">
                    <p className="font-medium text-1.5xl ">Email:</p>
                    <p className="mx-2 font-bold"> a@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex-row  items-start      ">
                <button className="bg-[#FECE51] px-3 py-3  md:px-3 py-3 ">
                 Update profile
                </button>
              </div>
            </div>
            <div className="flex ">
              <div className="flex-col w-5/6 p-5  ">
               <div className="flex justify-between ">
                 <div className="flex-row">
                  <span className="text-2xl font-medium m-2 ">My List</span>
                 </div>
                 <div className="flex-row  items-start hidden lg:block     ">
                <button className="bg-[#FECE51] px-3 py-3  md:px-3 py-3 ">
                 Add New Post
                </button>
              </div>
               </div>
                
                {listData.map((d, index) => {
                  return (
                    <Card
                      CardName={d.title}
                      cardLocation={d.address}
                      Price={d.price}
                      bathDesc={d.bathroom}
                      BedDesc={d.bedroom}
                      img={d.img}
                      id={d.id}
                      a={index}
                    />
                  );
                })}
               
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

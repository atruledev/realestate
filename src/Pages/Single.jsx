import React from "react";
import PIN from "../assets/images/pin.png";
import USER from "../assets/images/user.png";
import UTILITY from "../assets/images/settings.png";
 import PET from "../assets/images/pawprint.png";
 import FEE from "../assets/images/assets.png";
import Map from "../Components/Map";

function Single() {
  
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container   mx-auto flex ">
        <div class="lg:w-3/5 mx-auto flex flex-wrap ">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-1"
            src="https://dummyimage.com/400x400"
          />
          <div className="flex flex-col ">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-1"
              src="https://dummyimage.com/400x400"
            />

            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-1"
              src="https://dummyimage.com/400x400"
            />
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-1"
              src="https://dummyimage.com/400x400"
            />
          </div>

          <div class="lg:w-2/3 w-full lg:py-6 mt-6 lg:mt-0">
            <div class="flex flex-row justify-between items-start">
              <div class="flex flex-col">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  The Catcher in the Rye
                </h1>
                <div class="flex flex-col mb-4">
                  <span class="flex items-center">
                    <img src={PIN} class="p-2" width={35} height={35} />
                    <span class="text-gray-600">New York City</span>
                  </span>
                </div>
                <div class="flex mb-2">
                  <p class="bg-yellow-300 px-3">$Price</p>
                </div>
              </div>
              <div class="flex flex-col justify-end content-end p-5">
                <img src={USER} width={40} height={40} />
                <p className="pt-1 text-start">Username</p>
              </div>
            </div>
          </div>
          <div></div>

          <div>
            <p class="leading-relaxed pr-60">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col p-5 justify-start items-start f-full bg-yellow-100">
          <h2 className="font-medium text-2xl py-2 text-black">General</h2>
          <div className="bg-white p-5 w-full">
            <div class="mt-4  flex flex-row">
              <div className="flex pr-2">
                <img src={UTILITY} className="w-8 h-8 "></img>
              </div>
              <div className="flex-col">
                <h2 class="text-gray-900 title-font text-lg font-bold">
                  Utilities
                </h2>
                <p class="mt-1 font-medium">$12.00</p>
              </div>
            </div>
            <div class="mt-4  flex flex-row">
              <div className="flex pr-2">
                <img src={PET} className="w-8 h-8 "></img>
              </div>
              <div className="flex-col">
                <h2 class="text-gray-900 title-font text-lg font-bold">
                  Pet Policey
                </h2>
                <p class="mt-1 font-medium">$12.00</p>
              </div>
            </div>
            <div class="mt-4  flex flex-row">
              <div className="flex pr-2">
              <img src={FEE} className="w-8 h-8 "></img>
              </div>
              <div className="flex-col">
                <h2 class="text-gray-900 title-font text-lg font-bold">
                  Properties Fees
                </h2>
                <p class="mt-1 font-medium">$12.00</p>
              </div>
            </div>
          </div>
          <div className="p-2  ">
            <h2 className="font-medium text-2xl py-2 text-black">Room Sizes</h2>
            <div className=" p-2 flex flex-row">
              <div class="mt-4 flex flex-row bg-white px-2 py-2 m-2">
                <div className="flex pr-2">
                  <img src={UTILITY} className="w-8 h-8 "></img>
                </div>
                <div className="flex-row  ">
                  <h2 class="text-gray-900 title-font text-lg font-bold">
                    Utilities
                  </h2>
                  <p class="mt-1 font-medium">$12.00</p>
                </div>
              </div>
              <div class="mt-4  flex flex-row bg-white  px-2 py-2 m-2">
                <div className="flex pr-2">
                  <img src={PET} className="w-8 h-8 "></img>
                </div>
                <div className="flex-row   ">
                  <h2 class="text-gray-900 title-font text-lg font-bold">
                    Pet Policey
                  </h2>
                  <p class="mt-1 font-medium">$12.00</p>
                </div>
              </div>
              <div class="mt-4  flex flex-row bg-white m-2 px-2 py-2">
                <div className="flex pr-2">
                  <img src={FEE} className="w-8 h-8 "></img>
                </div>
                <div className="flex-col">
                  <h2 class="text-gray-900 title-font text-lg font-bold">
                    Properties Fees
                  </h2>
                  <p class="mt-1 font-medium">$12.00</p>
                </div>
              </div>
            </div>
          </div>
         <div>
         <h2 className="font-medium text-2xl py-2 text-black">Location</h2>
         <div className="w-full  h-screen mx-2">
          <Map />
          <div>
            
          </div>
        </div>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Single;

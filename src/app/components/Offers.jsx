"use client";
import React from "react";

const OFFERS_DATA = [
  {
    title: "Offer 1",
    id: "offer1",
    content: (
      <div>
        {/* <h3>Social Media Management</h3>
        <p>Exclusive Offer</p> */}
        <img src="/images/offers/smm.jpg" alt="smmImage" />
      </div>
    ),
  },
  {
    title: "Offer 2",
    id: "offer2",
    content: (
      <div>
        {/* <h3>Website Maintenance</h3>
        <p>Exclusive Offer</p> */}
        <img src="/images/offers/webmaint.jpg" alt="webmaintImage" />
      </div>
    ),
  },
];

const OffersSection = () => {
  return (
    <section className="text-white" id="offers">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Our Offers</h2>
        <div className="flex flex-row justify-around mt-8 flex-wrap">
          {OFFERS_DATA.map((offerData) => (
            <div key={offerData.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 text-center">
              {offerData.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

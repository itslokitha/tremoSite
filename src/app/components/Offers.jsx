"use client";
import React from "react";

const OFFERS_DATA = [
  {
    title: "Offer 1",
    id: "offer1",
    content: (
      <div>
        <h3>Offer 1 Title</h3>
        <p>Details about Offer 1...</p>
        {/* <img src="/path/to/your/image1.jpg" alt="Offer 1" /> */}
      </div>
    ),
  },
  {
    title: "Offer 2",
    id: "offer2",
    content: (
      <div>
        <h3>Offer 2 Title</h3>
        <p>Details about Offer 2...</p>
        {/* <img src="/path/to/your/image2.jpg" alt="Offer 2" /> */}
      </div>
    ),
  },
  // Add more offers as needed...
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

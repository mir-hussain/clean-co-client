import React from "react";
import fetcher from "../api";
import { useQuery } from "react-query";
const Services = () => {
  const { data, isLoading } = useQuery("services", async () => {
    const res = await fetcher.get("/service");
    return res.data;
  });

  if (isLoading) {
    return (
      <div className='mt-16'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='mt-16'>
      <div className='mt-24 max-w-7xl mx-auto grid lg:grid-cols-3 '>
        {data?.map(({ serviceName, image, serviceCharge }) => {
          console.log(image);
          return (
            <div class='card w-96 bg-base-100 shadow-xl justify-self-center'>
              <figure>
                <img src={image} alt='Shoes' />
              </figure>
              <div class='card-body'>
                <h2 class='card-title'>{serviceName}</h2>
                <p>{serviceCharge}</p>
                <div class='card-actions justify-end'>
                  <button class='btn btn-primary'>Book Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

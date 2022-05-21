import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";

const AddService = () => {
  const [imageURL, setImageURL] = useState("");
  const [Loading, setLoading] = useState(false);
  console.log(imageURL);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      image: imageURL,
    };

    const res = await fetcher.post("/service", serviceData);
    console.log(res.data);
  };

  const handleImageUpload = (event) => {
    setLoading(true);
    const image = event.target.files[0];
    const formData = new FormData();

    formData.set("key", "8055d014bf6dca88a724cc5678ec800b");
    formData.set("image", image);

    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then(function (response) {
        const imageLink = response.data.data.display_url;
        setImageURL(imageLink);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='h-screen w-full flex bg-accent justify-center items-center'>
      <div class='card flex-shrink-0 w-96 shadow-2xl bg-base-100'>
        <div class='card-body'>
          <h1 className='text-center text-2xl'>Add Service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Service Name</span>
              </label>
              <input
                type='text'
                class='input input-bordered'
                {...register("serviceName")}
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Service Charge</span>
              </label>
              <input
                type='text'
                class='input input-bordered'
                {...register("servicePrice")}
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Service Image</span>
              </label>
              <input
                type='file'
                class='input input-bordered'
                onChange={handleImageUpload}
              />
            </div>
            <div class='form-control mt-6'>
              <button type='submit' class='btn btn-primary'>
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;

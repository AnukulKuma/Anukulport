import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import { SiAxios } from 'react-icons/si'
import toast from "react-hot-toast"

export default function Contact() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo={
            Name:data.Name,
            Email:data.Email,
            Meassege:data.Meassege
        }
        try {
            await axios.post("https://getform.io/f/bnledypb", userInfo);
            toast.success("Your Meassege Has been send")
            

        }catch (errors) {
            
            toast.error("Something went wrong");

        }
      };

  return (
    <>
    <div name="Contact" className= "max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me </h1>
        <span>Plase fill out the below to contact me </span>
        <div className="flex flex-col items-center justify-center mt-5">
            <form  onSubmit={handleSubmit(onSubmit)} action=""  method="POST" className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                <h1 className="text-xl font-semibold ">Send Your Message </h1>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Full Name </label> 
                    <input 
                    {...register("Name", { required: true })}
                      name="Name" type="text" id="Name" placeholder="Enter Your Full Name " className="shadow  rounded-lg appearance-none border py-2 px-3 text-gray-700 focus:out" />
                       {errors.Name && <span>This field is required</span>}
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="">Eamail Address </label> 
                    <input 
                    {...register("Email", { required: true })}
                     name="Email" type="Email" id="Email" placeholder="Enter Your Email " className="shadow  rounded-lg appearance-none border py-2 px-3 text-gray-700 focus:out" />
                     {errors.Email && <span>This field is required</span>}
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor=""> Meassege </label> 
                    <textarea
                    {...register("Meassege", { required: true })}  
                    Name="Meassege" type="Email" id="Meassege" placeholder="Enter Your Meassege here " className="shadow  rounded-lg appearance-none border py-2 px-3 text-gray-700 focus:out" />
                    {errors.Meassege && <span>This field is required</span>}
                </div>
                <button  type="Submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
                

                
                
            </form>
        </div>


    </div>


    </>
  )
}

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3ac24661-fed1-4c8a-a3e6-f79cd1755fff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(
      data.success ? "Form submitted successfully!" : "Error submitting form",
    );
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-contain dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Contact Me</h4>
      <h2 className="text-center text-5xl font-ovo">Get In Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'm always open to discussing new opportunities or just having a chat!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto ">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90"
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90 mb-6"
          name="message"
        />
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hober:bg-dark-hover"
        >
          Submit
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </button>
        <p className=" mt-4"> {result}</p>
      </form>
    </div>
  );
};

export default Contact;

import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl ">Want to learn more about Ayurveda from us?</h2>
        <p className="text-gray-500 my-2">Checkout the complete course and articles!</p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.learnayurveda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://www.arhantayoga.org/wp-content/uploads/2022/03/Online-Ayurveda-Course.jpg"
          alt="learn ayurveda"
        />
      </div>
    </div>
  );
}

import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text-gray-500 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          amet modi. Fuga maxime repellendus at.
        </p>
        <Button
          //   gradientDuoTone="purpleToPink"
          gradientDuoTone="greenToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            button
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://wallpapercave.com/wp/wp2793839.jpg" />
      </div>
    </div>
  );
}

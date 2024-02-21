import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MentalHealthImage from "../assets/images/home/home_1.png";
import MentalHealthImage2 from "../assets/images/home/Mental_health_2.png";
import WhatWeOfferImage1 from "../assets/images/home/consultation.png";
import WhatWeOfferImage2 from "../assets/images/home/Meditation.png";
import WhatWeOfferImage3 from "../assets/images/home/Fitness.png";
import WhatWeOfferImage4 from "../assets/images/home/Diary.png";
import WhatWeOfferImage5 from "../assets/images/home/community.png";
import WhatWeOfferImage6 from "../assets/images/home/Activities.png";
import AllInOneSolutionImage from "../assets/images/home/all_in_one_sol.png";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const [quote, setQuote] = useState(
    "Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship",
    "To get rich, never risk your health. For it is the truth that health is the wealth of wealth",
    "The groundwork for all happiness is good health",
    "Happiness is the highest form of health",
    "A healthy lifestyle is the most potent medicine at your disposal",
    "Early to bed and early to rise, makes a man healthy, wealthy and wise",
    "Let food be thy medicine and medicine be thy food",
    "When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost",
  );

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * initialQuotes.length);
    setQuote(initialQuotes[randomIndex]);
  };

  useEffect(() => {
    // Set an interval to change the quote every hour
    const intervalId = setInterval(() => {
      changeQuote();
    }, 36000); 

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {/* Quote Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="text-center">
            <p className="text-gray-100 text-lg">{quote}</p>
          </div>
        </section>
        {/* New Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex-shrink-0 w-1/2">
            <h2 className="text-2xl font-semibold mb-4">
              Keep Calm and stay tuned
            </h2>
            <p className="text-gray-500 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
          </div>
          <div className="flex-shrink-0 w-1/2">
            <img
              src={MentalHealthImage}
              alt="Section Image"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Mental Health Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex-shrink-0 w-1/2">
            <img
              src={MentalHealthImage2}
              alt="Mental Health"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex-shrink-0 w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-left">
              Mental Health Care for Today's Workforce
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
            </p>
          </div>

        </section>

        {/* What We Offer Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Card image={WhatWeOfferImage1} title="Consultation" />
            <Card image={WhatWeOfferImage2} title="Meditation" />
            <Card image={WhatWeOfferImage3} title="Fitness Tracking" />
            <Card image={WhatWeOfferImage4} title="Diary" />
            <Card image={WhatWeOfferImage5} title="Community Hub" />
            <Card image={WhatWeOfferImage6} title="Activities" />
          </div>
        </section>


        {/* All-in-One Solution Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            All-in-One Solution
          </h2>
          <div className="flex justify-center">
            <img
              src={AllInOneSolutionImage}
              alt="All-in-One Solution"
              className="rounded-lg w-full max-w-3xl"
              style={{ maxWidth: "10rem" }}
            />
          </div>
          <p className="mt-4 text-gray-500 text-lg text-justify">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </section>
      </div>
    </div>
  );
}

// Card component for What We Offer Section
const Card = ({ image, title }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <img
      src={image}
      alt={title}
      className="rounded-full w-24 h-24 object-cover mb-4"
    />
    <p className="text-gray-700 text-center">{title}</p>
  </div>
);

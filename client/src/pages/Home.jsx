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

  return (
    <div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {/* New Section */}
        <section className="bg-gray-300 p-8 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex-shrink-0 w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Keep Calm and stay tuned
            </h2>
            <p className="text-black text-lg">
              In life, the intertwining of fitness and mental health is not just
              important; it's essential for holistic well-being. Fitness is not
              merely about physical prowess; it's a cornerstone of overall
              health, influencing every aspect of our lives. Regular exercise
              not only strengthens our bodies but also boosts our mood, energy
              levels, and cognitive function. It's a powerful antidote to
              stress, anxiety, and depression, releasing endorphins that uplift
              our spirits and promote a sense of well-being. Moreover,
              maintaining a healthy weight and strong cardiovascular system
              reduces the risk of chronic illnesses, enhancing longevity and
              quality of life.
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
        <section className="bg-gray-300 p-8 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex-shrink-0 w-1/2">
            <img
              src={MentalHealthImage2}
              alt="Mental Health"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex-shrink-0 w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-left text-black">
              Mental Health Care for Today's Workforce
            </h2>
            <p className="mt-4 text-black text-lg">
              Equally vital is nurturing our mental health. In today's
              fast-paced world, the pressures of daily life can take a toll on
              our psychological well-being. Cultivating mental resilience
              through practices like mindfulness, meditation, and therapy
              enables us to navigate life's challenges with greater ease and
              grace. A healthy mind is the foundation of emotional stability,
              enabling us to manage stress effectively, build fulfilling
              relationships, and pursue our goals with clarity and
              determination. Furthermore, prioritizing mental health fosters
              self-awareness and self-compassion, empowering us to embrace our
              authentic selves and live with purpose and authenticity.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="bg-gray-300 p-8 rounded-lg shadow-md">
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
        <section className="bg-gray-300 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            All-in-One Solution
          </h2>
          <div className="flex justify-center">
            <img
              src={AllInOneSolutionImage}
              alt="All-in-One Solution"
              className="rounded-lg w-full max-w-3xl"
            />
          </div>
          <p className="mt-4 text-gray-700 text-lg">
            Ultimately, the synergy between fitness and mental health is
            undeniable. By prioritizing both aspects of our well-being, we
            unlock the full potential of our bodies and minds, enabling us to
            lead vibrant, fulfilling lives. Whether through a brisk workout
            session or a moment of quiet reflection, investing in our physical
            and mental health is not just a choice; it's a commitment to living
            our best lives, each and every day.
          </p>
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

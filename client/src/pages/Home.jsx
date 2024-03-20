import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
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

  const initialQuotes = [
    "Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship",
    "To get rich, never risk your health. For it is the truth that health is the wealth of wealth",
    "The groundwork for all happiness is good health",
    "Happiness is the highest form of health",
    "A healthy lifestyle is the most potent medicine at your disposal",
    "Early to bed and early to rise, makes a man healthy, wealthy and wise",
    "Let food be thy medicine and medicine be thy food",
    "When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost"
  ];

  const [quote, setQuote] = useState(initialQuotes[0]);

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
        <QuoteSection quote={quote} />

        {/* New Section */}
        <AnimatedSection>
          <div className="bg-gray-300 p-8 rounded-lg shadow-md flex items-center justify-between">
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
          </div>
        </AnimatedSection>

        {/* Mental Health Section */}
        <AnimatedSection>
          <div className="bg-gray-300 p-8 rounded-lg shadow-md flex items-center justify-between">
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
          </div>
        </AnimatedSection>

        {/* What We Offer Section */}
        <AnimatedSection>
          <div className="bg-gray-300 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">
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
          </div>
        </AnimatedSection>

        {/* All-in-One Solution Section */}
        <AnimatedSection>
          <div className="bg-gray-300 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">
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
            <p className="mt-4 text-gray-700 text-lg">
              Ultimately, the synergy between fitness and mental health is
              undeniable. By prioritizing both aspects of our well-being, we
              unlock the full potential of our bodies and minds, enabling us to
              lead vibrant, fulfilling lives. Whether through a brisk workout
              session or a moment of quiet reflection, investing in our physical
              and mental health is not just a choice; it's a commitment to living
              our best lives, each and every day.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

// AnimatedSection component to trigger animations when section is in view
const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5 // Change this threshold according to when you want the animation to be triggered
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

// QuoteSection component
const QuoteSection = ({ quote }) => (
  <motion.section
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="bg-gray-800 p-8 rounded-lg shadow-md"
  >
    <div className="text-center">
      <p className="text-gray-100 text-lg">{quote}</p>
    </div>
  </motion.section>
);

// Card component for What We Offer Section
const Card = ({ image, title }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }} // Add whileHover effect for hover animation
    className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
  >
    <img
      src={image}
      alt={title}
      className="rounded-full w-24 h-24 object-cover mb-4"
    />
    <p className="text-gray-700 text-center">{title}</p>
  </motion.div>
);


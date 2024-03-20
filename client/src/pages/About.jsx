import React from 'react';
import { FaAward } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import johnImage from "/src/assets/images/user.png"; // Importing images
import janeImage from "/src/assets/images/user.png";
import alexImage from "/src/assets/images/user.png";

// Card component for team members
const TeamMemberCard = ({ name, role, image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center"
  >
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </motion.div>
);

// Card component for vision, mission, and values
const InfoCard = ({ title, content }) => (
  <div className="bg-gray-800 rounded-lg p-6 mb-8">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p>{content}</p>
  </div>
);

export default function AboutUs() {
  // Define your team members' data here
  const teamMembers = [
    { name: "John Doe", role: "Founder/CEO", image: johnImage },
    { name: "Jane Smith", role: "Lead Developer", image: janeImage },
    { name: "Alex Johnson", role: "Marketing Manager", image: alexImage },
    // Add more team members as needed
  ];

  // AnimatedSection component to trigger animations when section is in view
  const AnimatedSection = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5
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

  return (
    <section className="about-us py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <InfoCard
          title="Our Story"
          content="UnityWell was founded in [year] with a vision to revolutionize the approach to mental health and well-being. Our journey began with the realization that traditional methods of mental health care were often inaccessible and insufficient for addressing the diverse needs of individuals."
        />
        <InfoCard
          title="Our Mission"
          content="At UnityWell, our mission is to provide inclusive, personalized, and accessible mental health solutions that empower individuals to lead healthier and happier lives. We strive to break down barriers to mental health care and promote holistic well-being for all."
        />
        <InfoCard
          title="Our Values"
          content={
            <>
              <p><strong>Inclusivity:</strong> We are committed to providing mental health solutions that are inclusive and accessible to all individuals, regardless of background or circumstance.</p>
              <p><strong>Empowerment:</strong> We believe in empowering individuals to take control of their mental health journey through personalized support and resources.</p>
              <p><strong>Innovation:</strong> We continuously innovate and adapt to meet the evolving needs of our community, leveraging technology and evidence-based practices.</p>
            </>
          }
        />
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} name={member.name} role={member.role} image={member.image} />
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p><FaAward className="inline mr-2" /> UnityWell has been recognized for its innovative approach to mental health care, receiving awards such as [mention awards or recognitions received].</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h2>
          <p>
            At UnityWell, we are committed to excellence in everything we do. From the quality of our services to the support we provide, we continuously strive to exceed expectations and make a positive impact on the lives of those we serve.
          </p>
        </div>
      </div>
    </section>
  );
}

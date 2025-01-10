import ServicePage from '../components/ServicePage/ServicePage';

import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Mentorship',
    description: 'Mentorship Page',
  };
};

export default function Mentorship() {
  return (
    <ServicePage 
      title="Mentorship Services"
      subtitle="Unlock Your Potential with Personalized Mentorship"
      description="Our mentorship programs are designed to empower entrepreneurs and professionals with the guidance they need to thrive. We offer tailored mentorship experiences that align with your specific goals, challenges, and aspirations. Our experienced mentors bring a wealth of knowledge and expertise, providing you with actionable insights, proven strategies, and practical advice to navigate the complexities of business and career development. Whether you’re launching a startup, scaling an existing venture, or advancing in your profession, our mentors are dedicated to helping you succeed. <br> <br> With a focus on your unique journey, our mentorship sessions create a supportive space for growth and learning. From refining your business strategy to enhancing your leadership skills, we equip you with the tools and confidence to overcome obstacles and seize opportunities. Our goal is to foster a meaningful mentor-mentee relationship that inspires growth, unlocks potential, and drives lasting success in both your personal and professional endeavors."
      imageSrc="/assets/images/mentorship.jpg" 
      imageAlt="Mentorship" 
    />
  );
}

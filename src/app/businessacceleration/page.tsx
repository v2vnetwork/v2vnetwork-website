import ServicePage from '../components/ServicePage/ServicePage';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Business Acceleration',
    description: 'Business Acceleration Page',
  };
};

export default function BusinessAcceleration() {
  return (
    <ServicePage 
      title="Business Acceleration Services"
      subtitle="Propel Your Growth with Personalized Business Acceleration"
      description="Our business acceleration services are tailored to help startups and established businesses achieve rapid growth and long-term success. With 20 hours of dedicated support each month, we work closely with you to strategize, plan, and execute initiatives that drive results. Whether it’s refining your business model, identifying market opportunities, or overcoming operational challenges, our team is here to provide expert guidance every step of the way. This personalized approach ensures that your business remains agile, focused, and primed for sustainable growth. <br> <br> Through strategic planning, hands-on mentorship, and resource optimization, we empower you to take your business to the next level. Our monthly sessions offer the opportunity to deep dive into your unique goals and challenges, providing actionable insights and practical solutions tailored to your needs. With our expertise and your vision, we help you accelerate your growth trajectory, navigate complexities, and unlock your full potential in today’s competitive market."
      imageSrc="/assets/images/business_acceleration.jpg" 
      imageAlt="Business Acceleration" 
    />
  );
}

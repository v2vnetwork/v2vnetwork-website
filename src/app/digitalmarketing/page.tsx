import ServicePage from '../components/ServicePage/ServicePage';

import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Marketing',
    description: 'Marketing Page',
  };
};

export default function DigitalMarketing() {
  return (
    <ServicePage 
      title="Digital Marketing Services"
      subtitle="Elevate Your Business with Comprehensive Digital Marketing Solutions"
      description="In today’s fast-paced digital landscape, having effective marketing strategies is essential for business success. Our comprehensive marketing services are designed to help you navigate this dynamic environment and stand out from the competition. From digital marketing and social media management to content creation and beyond, we offer a wide range of solutions tailored to your unique business needs. By leveraging data-driven strategies and creative storytelling, we ensure your brand captures attention, resonates with your audience, and drives meaningful engagement. <br> <br> Our approach focuses on building strong connections between your brand and your target audience. Through innovative campaigns and consistent messaging, we help you establish a powerful presence across digital platforms, boosting brand awareness and loyalty. Whether it’s creating compelling content, optimizing your online reach, or managing your social media channels, we’re here to drive growth and maximize your impact. With our expertise and dedication, your business will have the tools and strategies needed to thrive in today’s competitive market."
      imageSrc="/assets/images/digital_marketing.jpg" 
      imageAlt="Marketing" 
    />
  );
}

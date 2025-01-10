import ServicePage from '../components/ServicePage/ServicePage';

import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Podcast',
    description: 'Podcast Page',
  };
};

export default function Podcast() {
  return (
    <ServicePage 
      title="Podcast Services"
      subtitle="Amplify Your Brand with Podcast-Driven Digital Marketing"
      description="Our podcast services are designed to elevate your brand and create meaningful connections with your audience. We don’t just record your podcast—we bring your story to life through compelling audio content that highlights your expertise and engages your listeners. Whether you’re looking to share insights, promote your business, or build thought leadership, we ensure every episode reflects your vision and resonates with your target audience. From concept to production, our team handles every detail, so you can focus on delivering your message. <br><br> But we don’t stop there. We take your podcast to the next level by repurposing it into short-form content that’s perfect for digital marketing. These bite-sized clips are crafted for maximum impact on social media, helping you boost brand awareness, attract new followers, and engage your community across platforms. By combining storytelling with strategic promotion, we turn your podcast into a powerful tool for expanding your reach and driving growth, making sure your voice is heard loud and clear in today’s digital landscape."
      imageSrc="/assets/images/podcast.jpg" 
      imageAlt="Podcast recording setup" 
    />
  );
}

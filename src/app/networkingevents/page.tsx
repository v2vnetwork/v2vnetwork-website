import ServicePage from '../components/ServicePage/ServicePage';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Networking and Events',
    description: 'Networking Opportunities and Business Events',
  };
};

export default function NetworkingAndEvents() {
  return (
    <ServicePage 
      title="Networking and Events Services"
      subtitle="Connect, Collaborate, and Grow Your Business Network"
      description="Our Networking and Events services are designed to create valuable connections and foster collaborative opportunities in the business world. We understand the power of face-to-face interactions and the impact they can have on your professional growth and business success. Our team specializes in organizing and facilitating a wide range of networking events, from intimate executive roundtables to large-scale industry conferences. <br><br> We curate experiences that bring together like-minded professionals, industry leaders, and potential partners in environments conducive to meaningful exchanges. Our events are carefully planned to maximize engagement, whether through structured networking sessions, panel discussions, or interactive workshops. We also leverage cutting-edge technology to enhance networking opportunities, including AI-powered matchmaking tools and virtual event platforms for global reach. Beyond just organizing events, we provide guidance on networking strategies, helping you make the most of every interaction. Our goal is to create a vibrant ecosystem where ideas are shared, partnerships are formed, and businesses thrive. Whether you're looking to expand your professional circle, find new clients, or stay at the forefront of industry trends, our networking and events services offer the platform you need to take your business to the next level."
      imageSrc="/assets/images/networking_events.jpg" 
      imageAlt="Networking and Events" 
    />
  );
}

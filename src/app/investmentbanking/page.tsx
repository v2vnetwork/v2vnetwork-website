import ServicePage from '../components/ServicePage/ServicePage';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Investment Banking/VC',
    description: 'Investment Banking and Venture Capital Services',
  };
};

export default function InvestmentBankingVC() {
  return (
    <ServicePage 
      title="Investment Banking & Venture Capital Services"
      subtitle="Fueling Growth and Innovation in the Financial Landscape"
      description="Our Investment Banking and Venture Capital services are designed to bridge the gap between innovative ideas and the capital needed to bring them to life. We offer a comprehensive suite of financial advisory services tailored to both established corporations and emerging startups. Our team of seasoned professionals brings extensive experience in deal structuring, mergers and acquisitions, capital raising, and strategic financial planning. <br><br> For startups and high-growth companies, our venture capital arm provides not just funding, but also strategic guidance and access to a vast network of industry connections. We work closely with entrepreneurs to refine their business models, optimize their growth strategies, and prepare them for successful funding rounds. Whether you're seeking early-stage seed funding or looking to scale with later-stage investments, our VC experts are committed to fostering the next generation of groundbreaking companies. Our goal is to be more than just a capital provider; we aim to be a long-term partner in your success, offering insights, resources, and support at every stage of your company's growth journey."
      imageSrc="/assets/images/investment_banking_vc.jpg" 
      imageAlt="Investment Banking and Venture Capital" 
    />
  );
}

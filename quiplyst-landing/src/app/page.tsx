import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import CapabilitiesTable from '@/components/CapabilitiesTable';
import TestimonialsSection from '@/components/TestimonialsSection';
import GetStartedSection from '@/components/GetStartedSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <CapabilitiesTable />
      <TestimonialsSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
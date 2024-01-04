import MainContent from '@/components/MainContent/MainContent';
import Features from '@/components/Features/Features';
import Steps from '@/components/Steps/Steps';

export default function Page() {
  return (
    <main className="flex flex-col">
      <MainContent />
      <Features />
      <Steps />
    </main>
  );
}

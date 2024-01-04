import StepElement from '@/components/Steps/StepElement';

const Steps = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <div className="flex flex-col text-center">
        <span className="text-4xl font-bold text-gray-300">How does it work?</span>
        <span className="text-lg text-gray-300">
          {'It\'s very simple'}
        </span>
      </div>

      <ul className="mt-10">
        <StepElement marker="1" text="Select something you want to blend" />
        <StepElement marker="2" text="Mail it to us" />
        <StepElement marker="3" text="We blend it" />
        <StepElement marker="4" text="We mail it back to you" />
      </ul>
    </div>
  );
};

export default Steps;

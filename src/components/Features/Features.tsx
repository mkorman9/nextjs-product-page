import FeatureCard from '@/components/Features/FeatureCard';
import {MdElderlyWoman, MdFoodBank, MdOutlineSportsMartialArts} from 'react-icons/md';
import {GiFruitBowl} from 'react-icons/gi';

const Features = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center text-center m-2">
        <span className="text-4xl font-bold text-gray-300">Blend anything you ever wanted to</span>
        <span className="text-lg text-gray-300">
          Send us your favourite product and we will make a smooth pulp out of it
        </span>

        <div className="flex flex-col items-center gap-24 mt-10">
          <div className="flex max-lg:flex-col w-screen h-full
                          items-center justify-center gap-16">
            <FeatureCard>
              <GiFruitBowl size={100} color="#15803d" />
              <span>Fresh cocktail</span>
            </FeatureCard>
            <FeatureCard>
              <MdOutlineSportsMartialArts size={100} color="#15803d"/>
              <span>Healthy smoothie</span>
            </FeatureCard>
            <FeatureCard>
              <MdFoodBank size={100} color="#15803d"/>
              <span>Delicious meal</span>
            </FeatureCard>
            <FeatureCard>
              <MdElderlyWoman size={100} color="#15803d"/>
              <span>We can even blend your neighbour!</span>
            </FeatureCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

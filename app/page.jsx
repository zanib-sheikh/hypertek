
import Hero from "../components/Hero";
import ChallengeGrid from "../components/ChallengeGrid";
import OurstoryGrid from "../components/OurstoryGrid";
import OvercomeGrid from "../components/OvercomeGrid";
import CtaturnGrid from "../components/CtaturnGrid";
import AchievementGrid from "../components/AchievementGrid";


export default function Home() {
  return (
    <>
    
      <main>
        <Hero />
         <OurstoryGrid />
         <ChallengeGrid />
         <OvercomeGrid />
          <AchievementGrid />
         <CtaturnGrid/>
      </main>
      
    </>
  );
}

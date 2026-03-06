import HistorySection from "@/components/BriefHistory";
import EventPageHome from "@/components/EventHome";
import HeroSlider from "@/components/Hero";
import CallToActionPage from "@/components/JoinUs";
import HeroesPage from "@/components/LanguageHeroes";


export default function Home() {
  return (
    <div className="">
     
      <HeroSlider></HeroSlider>
      <HistorySection></HistorySection>
      <HeroesPage></HeroesPage>
      <EventPageHome></EventPageHome>
      <CallToActionPage></CallToActionPage>
    </div>
  );
}

import HeroComponent from "./components/hero-component";
import Profile from "./components/profile";
import Skills from "./components/skills";
import ExperienceComponent from "./components/experience-component";
import EducationComponent from "./components/education-component";
import ReferenceComponent from "./components/reference-component";
import Contact from "./components/contact";
import PortfolioComponent from "./components/portfolio-component";

export default function Home() {
  return(
    <div>
      <HeroComponent></HeroComponent>
      <Profile></Profile>
      <Skills></Skills>
      <ExperienceComponent></ExperienceComponent>
      <EducationComponent></EducationComponent>
      <PortfolioComponent></PortfolioComponent>
      <ReferenceComponent></ReferenceComponent>
      <Contact></Contact>
    </div>
  );
}

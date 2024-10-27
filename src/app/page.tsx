import HeroComponent from "./components/hero-component";
import AboutComponent from "./components/about-component";
import Skills from "./components/skills";
import ExperienceComponent from "./components/experience-component";
import EducationComponent from "./components/education-component";
import ReferenceComponent from "./components/reference-component";
import Contact from "./components/contact";
import PortfolioComponent from "./components/portfolio-component";
import ScrollToTopButton from "./components/partials/scroll-top";

export default function Home() {
  return(
    <div>
      <HeroComponent></HeroComponent>
      <AboutComponent></AboutComponent>
      <Skills></Skills>
      <ExperienceComponent></ExperienceComponent>
      <EducationComponent></EducationComponent>
      <PortfolioComponent></PortfolioComponent>
      <ReferenceComponent></ReferenceComponent>
      <Contact></Contact>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
}

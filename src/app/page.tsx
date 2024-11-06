import HeroComponent from "./components/hero-component";
import AboutComponent from "./components/about-component";
import SkillsComponent from "./components/skills-component";
import ExperienceComponent from "./components/experience-component";
import EducationComponent from "./components/education-component";
import ReferenceComponent from "./components/reference-component";
import ContactComponent from "./components/contact-component";
import PortfolioComponent from "./components/portfolio-component";
import CertificationComponent from "./components/certification-component";
import ScrollToTopButton from "./components/partials/scroll-top";
import AwardComponent from "./components/award-component";
//import { useState, useEffect } from 'react'

export default async function Home() {
  if(!process.env.RESUME_API_URL){
    console.log('RESUME_API_URL not found');
  }

  const apiUrl = `${process.env.RESUME_API_URL}/api/cv/${process.env.RESUME_ID}`;
  console.log(apiUrl);

  const data = await fetch(apiUrl);
  const resume = await data.json();
  console.log(resume);

  return(
    <div>
      <HeroComponent {...resume}></HeroComponent>
      <AboutComponent {...resume}></AboutComponent>
      <SkillsComponent {...resume}></SkillsComponent>
      <ExperienceComponent {...resume}></ExperienceComponent>
      <EducationComponent {...resume}></EducationComponent>
      {
        resume.certifications!=null && resume.certifications.length > 0 && 
        <CertificationComponent {...resume}></CertificationComponent>
      }
      {
        resume.awards != null && resume.awards.length > 0 &&
        <AwardComponent {...resume}></AwardComponent>
      }
      {
        resume.portfolio!=null && resume.portfolio.length > 0 && 
        <PortfolioComponent {...resume}></PortfolioComponent>
      }
      {
        resume.references!=null && resume.references.length > 0 &&
        <ReferenceComponent {...resume}></ReferenceComponent>
      }
      <ContactComponent></ContactComponent>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
}

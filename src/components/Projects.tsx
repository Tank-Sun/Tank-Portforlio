import React from 'react'
import ProjectItem from './ProjectItem'
import sharedDocumentEditor from '../../public/assets/projects/SharedDocumentEditor/dashboard.png'
import InterviewScheduler from '../../public/assets/projects/InterviewScheduler/dashboard.png'
// import FoodPickUpOrder from '../../public/assets/projects/FoodPickUpOrder/mainMenuImage.png'
import Jungle from '../../public/assets/projects/Jungle/mainPage.png'
import TimeZoneChecker from '../../public/assets/projects/TimeZoneChecker/main.png'

const Projects = () => {

  const projects = [
    {
      projectName: 'Time Zone Checker',
      mainTech: 'Node.js, Vue3, Vite, Google Maps API',
      coverImage: TimeZoneChecker,
      githubUrl: 'https://github.com/Tank-Sun/TimeZoneChecker',
      url: '/time_zone_checker'
    },
    {
      projectName: 'Shared Document Editor 2.0',
      mainTech: 'TypeScript, Node.js, MongoDB, React',
      coverImage: sharedDocumentEditor,
      githubUrl: 'https://github.com/Tank-Sun/Shared_document_editor_2.0',
      url: '/shared_document_editor'
    },
    {
      projectName: 'Jungle',
      mainTech: 'Ruby, Ruby on Rails, PostgreSQL, Stripe',
      coverImage: Jungle,
      githubUrl: 'https://github.com/Tank-Sun/jungle',
      url: '/jungle'
    },
    {
      projectName: 'Interview Scheduler',
      mainTech: 'JavaScirpt, React, Cypress',
      coverImage: InterviewScheduler,
      githubUrl: 'https://github.com/Tank-Sun/scheduler',
      url: '/interview_scheduler'   
    },
    // {
    //   projectName: 'Food Pick-up Ordering',
    //   mainTech: 'JavaScirpt, Node.js, PostgreSQL, jQuery, Ajax, Sass',
    //   coverImage: FoodPickUpOrder,
    //   githubUrl: 'https://github.com/Tank-Sun/midterm-1-Food-Pick-up-Ordering',
    //   url: '/food_pickup_ordering'
    // }
  ];

  const projectsList = projects.map((project, index) => {
    return (
      <ProjectItem 
        key={index}
        projectName={project.projectName}
        mainTech={project.mainTech}
        coverImage={project.coverImage}
        githubUrl={project.githubUrl}
        url={project.url}
      />
    );
  });

  return (
    <div id='projects' className='flex flex-col w-[85%] 2xl:w-[75%] m-auto pt-16 pb-6 md:pt-20 md:pb-16 lg:py-20 justify-start'>
      <div className='mt-4 mb-3 underline underline-offset-[12px]'>
        <h1>My Projects</h1>
      </div>
      <div className='grid lg:grid-cols-2 gap-12 py-8'>
        {projectsList}
      </div>
    </div>
  )
}

export default Projects
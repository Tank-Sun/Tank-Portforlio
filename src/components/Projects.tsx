import React from 'react'
import ProjectItem from './ProjectItem'
import sharedDocumentEditor from '../../public/assets/projects/SharedDocumentEditor/dashboard.png'
import InterviewScheduler from '../../public/assets/projects/InterviewScheduler/addAppointment.png'
import FoodPickUpOrder from '../../public/assets/projects/FoodPickUpOrder/cart.png'
import Jungle from '../../public/assets/projects/Jungle/homePage.png'

const Projects = () => {

  const projects = [
    {
      projectName: 'Shared Document Editor 2.0',
      mainTech: 'TypeScript, Node.js, MongoDB, React',
      coverImage: sharedDocumentEditor
    },
    {
      projectName: 'Jungle',
      mainTech: 'Ruby, Ruby on Rails, PostgreSQL, Stripe',
      coverImage: Jungle
    },
    {
      projectName: 'Interview Scheduler',
      mainTech: 'JavaScirpt, React, Cypress',
      coverImage: InterviewScheduler
    },
    {
      projectName: 'Food Pick-up Ordering',
      mainTech: 'JavaScirpt, Node.js, PostgreSQL, jQuery, Ajax, Sass',
      coverImage: FoodPickUpOrder
    }
  ];

  const projectsList = projects.map((project, index) => {
    return (
      <ProjectItem key={index} projectName={project.projectName} mainTech={project.mainTech} coverImage={project.coverImage}/>
    );
  });

  return (
    <div id='projects' className='flex flex-col w-[85%] 2xl:w-[75%] m-auto py-16 justify-start'>
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
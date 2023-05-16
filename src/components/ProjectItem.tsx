import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'

type ProjectItemProps = {
  projectName: string,
  mainTech: string,
  coverImage: StaticImageData,
  githubUrl: string,
  url: string
};

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-[5px_7px_10px] shadow-gray-500 rounded-xl group hover:scale-[1.02] ease-in duration-100'>
      <Image className='h-full w-full rounded-xl group-hover:opacity-10' src={props.coverImage} alt={props.projectName}/>
      <div className='hidden flex-col items-center group-hover:flex absolute'>
        <div>
          <h3 className='md:text-2xl text-white tracking-wider text-center'>{props.projectName}</h3>
        </div>
        <div>
          <p className='text-xs md:text-lg pb-4 pt-2 text-white text-center'>{props.mainTech}</p>
        </div>
        <div>
          <Link href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            <p className='text-center my-1 md:my-2 py-1 px-4 rounded-lg bg-white text-gray-700 font-bold text-xs md:text-lg cursor-pointer hover:bg-blue-500 hover:text-white'>Code on GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm'/></p>
          </Link>
        </div>
        <div>
          <Link href={props.url}>
            <p className='text-center my-1 md:my-2 py-1 px-4 rounded-lg bg-white text-gray-700 font-bold text-xs md:text-lg cursor-pointer hover:bg-blue-500 hover:text-white'>More Info <FontAwesomeIcon icon={faArrowRight} size='sm'/></p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
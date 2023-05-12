import React from 'react'
import Image from 'next/image'

type SkillItemProps = {
  skillName: string,
  skillImage: string,
  width: number
}

const SkillItem = (props: SkillItemProps) => {
  return (
    <div className='flex items-center justify-around px-4 py-2 mr-2 mb-4 rounded-md bg-slate-50 shadow-xl shadow-gray-400/50'>
      <div className='pr-3'>
        <Image src={props.skillImage} width={props.width} height={40} alt={props.skillName} />
      </div>
      <div>
        <p className='text-black md:text-lg font-semibold'>{props.skillName}</p>
      </div>
    </div>
  )
}

export default SkillItem
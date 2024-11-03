import { HERO_CONTENT } from '../constants';
import profilePic from '../img/juri.jpg'

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 text-8xl">
                    Juri Tuga
                    </h1>
                    <span className="bg-gradient-to-r from-cyan-500 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Software Engineering
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={profilePic} alt='Juri Tuga' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
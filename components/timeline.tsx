import * as React from 'react';
import { releases } from '@/data/releases';
import Title from './title';

export default function MyTimeline() {
  const selectedRelease = releases[0]; 

  return (
    <div>
      <Title />
      <hr className="my-12 h-0.5 border-t-0 bg-black-300 dark:bg-white/10" />
      <ul className="">
        {selectedRelease.features.map((feature: any, i: number) => (
          <li key={i} className="relative">
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[10px] me-3 h-[20px] w-[20px] rounded-full pl-5 bg-blue-600 dark:bg-blue-600" />
              <h1 className='text-black-100 font-regular text-xl lg:text-3xl'>{feature.title}</h1>
            </div>
            <div className="mb-6 ms-4 mt-2 text-black-300">
              <div key={feature.title}> 
                <div className='flex gap-4 items-center'>
                  <p
                    style={{backgroundColor: feature.chip === 'feat' ? 'bg-blue-600' : 'bg-green-600'}}
                    className='text-white text-sm px-2 py-1 rounded-full '
                  >{feature.chip}</p>
                  <p>{feature.date}</p>
                </div>
                <p className='p-2'>{feature.description}</p>
                <img src={feature.image} alt="" />
              </div>
            </div>
            {i !== selectedRelease.features.length - 1 && (
              <div className="absolute top-8 left transform -translate-x-1/2 h-full border-l bg-blue-600 dark:bg-blue-600" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

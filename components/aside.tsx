import React from 'react';
import { releases } from '@/data/releases';

interface Release {
  title: string;
  description: string;
  date: string;
  chip: string;
  image: string;
}

interface ReleaseGroup {
  title: string;
  description: string;
  features: Release[];
}

const Aside = () => {
  return (
    <div className="relative flex h-[calc(100vh-20rem)] w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 ">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base">
        <h1 className='font-bold'>All release notes</h1>
        {releases.map((releaseGroup: ReleaseGroup, i: number) => (
          <a key={i} href="#" className="flex items-center  rounded-lg ">
            <div>
              <p className="text-sm text-black-300 hover:text-black-200">{releaseGroup.title}: {releaseGroup.description}</p>
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Aside;

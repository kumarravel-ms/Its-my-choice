import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Counter from '@/components/Home/Counter';
import WorkGrow from '@/components/Home/work-grow';
import BuildAmazing from '@/components/Home/Build-Amazing';
import Resume from '@/components/Resume';

export const metadata: Metadata = {
    title: "About | Sustainable",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="About Us"
            description=""
        />
        <Counter/>
        <WorkGrow/>
        <Resume/>
        <BuildAmazing isSpace={false} />
    </>
  )
}

export default page
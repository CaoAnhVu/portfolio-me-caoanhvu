'use client';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  const handleDownload = () => {
    const fileUrl = '/Resume Cao Anh Vu Frontend Developer ReactJs.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Resume-Cao Anh Vu Frontend Developer ReactJs';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="
            flex
            flex-col
            xl:flex-row
            items-center
            justify-between
            xl:pt-8
            xl:pb-24
            "
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              {' '}
              Hello! I'm <br /> <span className="text-accent">Cao Anh Vu (AndyVuCoder)</span>{' '}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
            <p className="max-w-[500px] mb-9 text-white/80">After a day, what new thing do we learn? Or duplicate of yesterday? Let tomorrow's self be better than yesterday's self.</p>
            <div>
              {/* btn and social media */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button onClick={handleDownload} variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0 ">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

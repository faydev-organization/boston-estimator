import React from 'react';
import Image from 'next/image';

const testing = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        data-aos="fade-left"
        data-aos-once="true"
        className="flex flex-col md:flex-row p-8 mx-10 gap-20 items-center justify-center"
      >
        <div className="mr-8 md:mr-12">
          <Image
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="1000"
            className="rounded-full object-cover w-[500px] h-auto border-4 border-white shadow-custom-white"
            src={ProfilePic}
            alt="profile"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          <p
            className="text-xl md:text-3xl"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="300"
          >
            Hello World, I'm
          </p>

          <Cover className="font-bold text-3xl md:text-4xl">
            Muhammad Fayash Wahyudha
          </Cover>
          <div className="bg-transparent rounded-md p-1.5 hover:cursor-default flex ">
            <h1 className="text-2xl text-white">I'm</h1>
            <FlipWords
              className="text-2xl text-white "
              words={[
                'Web Developer',
                'Full-Stack Developer',
                'Front-End Developer',
                'Back-End Developer',
                'Freelancer',
              ]}
              duration={1500}
            />
          </div>
          <p className="text-lg md:text-2xl">Welcome To My Personal Website</p>
          <div className="flex justify-center gap-10">
            <InstagramIcon
              className="cursor-pointer hover:text-slate-500"
              style={{ fontSize: 30 }}
              onClick={() =>
                window.open('https://www.instagram.com/wahyudhafayash_/')
              }
            />
            <LinkedInIcon
              className="cursor-pointer hover:text-slate-500"
              style={{ fontSize: 30 }}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/muhammad-fayash-wahyudha-a92818292/',
                )
              }
            />
            <GitHubIcon
              className="cursor-pointer hover:text-slate-500"
              style={{ fontSize: 30 }}
              onClick={() => window.open('https://github.com/wahyudhafayash')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default testing;

import Img from '@/shared/Img';
import StatsCard from '@/shared/StatsCard';
import { STATS_SECTION } from '@/utils/constants/slickSliderSettings';
import React from 'react';
import Slider from 'react-slick';

const HeroSection = ({
  country,
  image,
}: {
  country: string;
  image: string;
}) => {
  const statsCard = [
    {
      icon: '/icons/partner.png',
      title: '280+',
      subTitle: 'Partner Universities',
    },
    {
      icon: '/icons/money.png',
      title: '£9250 - £63.9K',
      subTitle: 'Annual Tuition Fees',
    },
    {
      icon: '/icons/students.png',
      title: '400k+',
      subTitle: 'International Students',
    },
    {
      icon: '/icons/visas.png',
      title: '2 Years',
      subTitle: 'Post Study Work Visas',
    },
  ];
  return (
    <div className='bg-[linear-gradient(97.17deg,#D8E6FD_0%,rgba(216,230,253,0.02)_99.99%)] sm:p-12 px-5 py-12'>
      <div className='max-w-[1120px] space-y-10 mx-auto'>
        <div className='md:flex items-center gap-x-10 md:space-y-0 space-y-16 md:justify-between justify-center'>
          <div className='max-w-2xl space-y-6'>
            <h1 className='text-5xl font-semibold text-black leading-[67px]'>
              Study in <span className='text-blue-500'>{country}</span>
            </h1>
            <p className='font-medium text-[32px] text-secondary leading-[44px]'>
              Explore Top universities, Courses, Scholarships, Student VISA
              Requirements and Cost for Indian Students in 2024
            </p>
            <div>
              <div className='rounded-full w-full bg-white flex items-center relative'>
                <input
                  placeholder='Enter Your Email Address'
                  className='text-gray-400 rounded-full font-medium sm:mr-[200px] mr-16 w-full bg-white outline-none h-16 p-5 pl-6'
                />
                <div className='flex cursor-pointer items-center text-white gap-x-3 p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 h-12 rounded-full right-2'>
                  <Img
                    src='/icons/pdf.png'
                    alt='pdf'
                    height={24}
                    width={24}
                    isLocal
                  />
                  <h4 className='text-sm font-medium sm:block hidden'>
                    Download Full PDF
                  </h4>
                </div>
              </div>
              <h4 className='sm:text-sm font-medium sm:hidden justify-end flex mt-2 text-xs'>
                Download Full PDF
              </h4>
            </div>
          </div>
          <Img
            src={image}
            height={456}
            width={366}
            alt='heroImage'
            isLocal
            className='max-h-[456px] max-w-[366px] duration-500 max-[950px]:max-w-[266px] max-[950px]:max-h-[356px] md:mx-0 mx-auto'
          />
        </div>
        <div className='bg-blue-50 rounded-xl p-5 max-[640px]:space-y-5 sm:grid lg:grid-cols-4 sm:grid-cols-2 max-[640px]:place-items-center shadow-[0px_0px_0px_0px_#00000005,0px_7px_15px_0px_#00000005,0px_27px_27px_0px_#00000005,0px_60px_36px_0px_#00000003,0px_107px_43px_0px_#00000000,0px_167px_47px_0px_#00000000] hidden'>
          <StatsCard
            icon='/icons/partner.png'
            title='280+'
            subTitle='Partner Universities'
            className='bg-[linear-gradient(180deg,rgba(254,226,226,0)_0%,#FEE2E2_100%)]'
          />
          <StatsCard
            icon='/icons/money.png'
            title='£9250 - £63.9K'
            subTitle='Annual Tuition Fees'
            className='bg-[linear-gradient(0deg,#EBF3FE_0.74%,rgba(235,243,254,0)_100.74%)]'
          />
          <StatsCard
            icon='/icons/students.png'
            title='400k+'
            subTitle='International Students'
            className='bg-[linear-gradient(180deg,rgba(220,_252,_231,_0)_0%,#DCFCE7_100%)]'
          />
          <StatsCard
            icon='/icons/visas.png'
            title='2 Years'
            subTitle='Post Study Work Visas'
            className='bg-[linear-gradient(180deg,rgba(254,_249,_195,_0)_0%,#FEF9C3_100%)]'
          />
        </div>
        <Slider {...STATS_SECTION} centerMode className='sm:!hidden'>
          {statsCard?.map((item, idx) => (
            <StatsCard
              key={idx}
              icon={item?.icon}
              title={item?.title}
              subTitle={item?.subTitle}
              className='bg-[linear-gradient(180deg,rgba(254,_249,_195,_0)_0%,#FEF9C3_100%)]'
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;

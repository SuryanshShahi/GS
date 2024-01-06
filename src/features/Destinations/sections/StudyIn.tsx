import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import { errorType, touchedType, inputType } from '@/utils/constants/Functions';
import React from 'react';
import useDestinations from '../views/useDestinations';
import { InputFields } from '@/utils/static/StaticData';
import SuccessModal from '@/components/Modal/SuccessModal';

const StudyIn = ({
  data,
  country,
  index,
}: {
  data: any;
  country: string;
  index: string;
}) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isLoading,
    handleChange,
    setIsLoading,
  } = useDestinations();
  return (
    <div className='gap-8 grid grid-cols-5' id={index}>
      <div className='space-y-3 md:col-span-3 col-span-5'>
        <h4 className='md:text-[32px] text-[28px] font-semibold mb-2'>
          Why Study in {country}?
        </h4>
        <p className='text-secondary'>{data?.description}</p>

        <div className='space-y-4 mt-5'>
          {data?.data?.map((item: any, idx: number) => (
            <div className='flex gap-x-3' key={idx}>
              <Img
                src={'/icons/star.png'}
                height={24}
                width={24}
                alt='heroImage'
                isLocal
                className='h-6'
              />
              <div>
                <h4 className='text-xl font-medium'>{item?.title}</h4>
                <p className='text-secondary'>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='p-5 rounded-lg bg-gray-50 space-y-6 md:col-span-2 col-span-5 md:max-w-none max-w-[430px] md:mx-0 mx-auto'>
        <h4 className='text-blue-500 text-[28px] font-semibold'>
          Turn your dream of studying abroad to reality!
        </h4>
        <p className='text-secondary'>
          Take the first step to make your study abroad dream a reality.{' '}
          <b>Get Free 30 Min complete assistance</b> with university
          shortlisting, application, scholarship, visa and finance.
        </p>
        <div className='space-y-3 mt-6'>
          {InputFields?.inputs?.map((item: any, idx: number) => (
            <div className='space-y-1' key={idx}>
              <h4 className='text-xs font-medium'>
                {item?.label} <span className='text-red-600'>*</span>
              </h4>
              <div className='relative'>
                <input
                  type={item?.type}
                  placeholder={item?.placeholder}
                  className={`h-10 rounded-md text-sm pl-10 outline-none w-full border ${
                    errorType(idx, errors) && touchedType(idx, touched)
                      ? 'border-red-600'
                      : 'border-gray-200'
                  }`}
                  onChange={handleChange(
                    idx === 0 ? 'name' : idx === 1 ? 'email' : 'phone'
                  )}
                  onBlur={handleBlur(
                    idx === 0 ? 'name' : idx === 1 ? 'email' : 'phone'
                  )}
                  value={inputType(idx, values)}
                />
                {errorType(idx, errors) && touchedType(idx, touched) ? (
                  <p className='text-red-500 text-[10px] text-right'>
                    {errorType(idx, errors) || (
                      <p className='text-white text-[10px] text-right'>.</p>
                    )}
                  </p>
                ) : (
                  <p className='text-white text-[10px] text-right'>.</p>
                )}
                <Img
                  src={item?.icon}
                  height={16}
                  width={16}
                  alt='heroImage'
                  isLocal
                  className='absolute top-3 left-4'
                />
              </div>
            </div>
          ))}
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              className='h-4 w-4 cursor-pointer'
              onChange={(e) => setFieldValue('checkbox', e.target.checked)}
            />
            <p className='text-xs text-gray-600'>
              By clicking you agree to our{' '}
              <span className='text-[#007DFC]'>Privacy Policy</span> and{' '}
              <span className='text-[#007DFC]'>Terms & Conditions</span>{' '}
              <span className='text-red-600'>*</span>
            </p>
          </div>
        </div>
        <Button
          className='bg-blue-900 py-3 hover:!bg-blue-900/80 flex items-center justify-center gap-x-2'
          fullWidth
          isLoading={isLoading === 0}
          onClick={handleSubmit}
        >
          Get Free Consultation
          <Img
            src={'/icons/Check.png'}
            height={18}
            width={18}
            alt='heroImage'
            isLocal
          />
        </Button>
      </div>
      {isLoading === 1 && (
        <SuccessModal
          title='THANK YOU 🎊'
          subTitle='Our counselors will get in touch with you shortly'
          close={() => setIsLoading(-1)}
        />
      )}
    </div>
  );
};

export default StudyIn;

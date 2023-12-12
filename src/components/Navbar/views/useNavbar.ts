import useScrollHidden from '@/utils/hooks/useScrollHidden';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useNavbar = () => {
  const countries = [
    {
      icon: '/images/uk.png',
      name: 'United Kingdom',
      link: '/uk',
    },
    {
      icon: '/images/us.png',
      name: 'United States',
      link: '/usa',
    },
    {
      icon: '/images/canada.png',
      name: 'Canada',
      link: '/canada',
    },
    {
      icon: '/images/australia.png',
      name: 'Australia',
      link: '/australia',
    },
    {
      icon: '/images/ireland.png',
      name: 'Ireland',
      link: '/ireland',
    },
    {
      icon: '/images/australia.png',
      name: 'Newzealand',
      link: '/nz',
    },
  ];
  const services = [
    { name: 'Free Study Abroad Counselling', link: '/services/study-abroad' },
    {
      name: 'Free Visa Assistance Application',
      link: '/services/visa',
    },
    {
      name: 'University Application Process',
      link: '/services/application',
    },
    {
      name: 'University Scholarships Guidance',
      link: '/services/scholarships',
    },
    { name: 'Student Accomodation Services', link: '/services/accomodation' },
  ];
  const [isActive, setIsActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(-1);
  useScrollHidden(isActive);
  const slideNav = () => {
    var x: any = document.getElementById('navbar');
    if (window.scrollY >= 100) {
      if (x.classList == 'active') {
        x.classList.remove('active');
      } else {
        x.classList.add('active');
      }
    } else {
      x.classList.remove('active');
    }
  };
  typeof window !== 'undefined' && window.addEventListener('scroll', slideNav);
  const router = useRouter();

  return {
    router,
    setIsActive,
    services,
    countries,
    isActive,
    dropdownActive,
    setDropdownActive,
  };
};

export default useNavbar;

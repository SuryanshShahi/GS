export const InputFields = {
  title: 'Let’s Get Started',
  image: '/images/course6.png',
  inputs: [
    {
      label: 'Name',
      placeholder: 'Enter Your Name',
      icon: '/icons/Message.png',
      type: 'text',
    },
    {
      label: 'Email ID',
      placeholder: 'Enter Your Email ID',
      icon: '/icons/Message.png',
      type: 'email',
    },
    {
      label: 'Phone Number',
      placeholder: 'Enter Your Phone Number',
      icon: '/icons/Phone.png',
      type: 'tel',
    },
  ],
};

export const CountryData = [
  {
    country: 'The United Kingdom',
    heroImage: '/images/ukHero.svg',
    studyIn: {
      description:
        'Welcome to the UK - a destination that hosts over 500,000 international students annually. Immerse yourself in pioneering universities, acquire skills sought by top global employers, and experience the culture that shaped the modern world. Join a diverse community of changemakers.',
      data: [
        {
          title: 'High-Quality Education',
          description:
            "The UK is home to some of the world's oldest and most prestigious universities, such as the University of Oxford and the University of Cambridge",
        },
        {
          title: 'Wide Range of Programs',
          description:
            'One can choose a degree in business, engineering, law, medicine, social sciences, and more based on interests and career aspirations in UK',
        },
        {
          title: 'Quality Education',
          description:
            'UK boasts Quality Assurance Agency (QAA), a national body established to ensure the highest teaching standards at institutions across the UK.',
        },
        {
          title: 'International Recognition',
          description:
            'UK degrees are recognized worldwide, which gives graduates a competitive advantage in the job market. UK has become the second most popular study destination after the US.',
        },
        {
          title: 'Cultural Diversity',
          description:
            'The UK is a diverse and multicultural society that allows international students to experience different cultures and lifestyles.',
        },
      ],
    },
    visaRequirements: {
      description:
        'Studying in the UK is an investment in your future. The following table provides an overview of student visa requirements:',
      data: [
        {
          title: 'Short-Term Study',
          requirements: [
            'Short-term students',
            'Up to 3 months prior to course start',
            'Up to 7 days before course start',
            'Enrollment proof, sufficient funds, valid passport',
          ],
        },
        {
          title: 'Student (General)',
          requirements: [
            'Postgraduates, researchers, student union officers',
            'Up to 6 months prior to course start',
            'Up to 6 months prior to course start',
            'Acceptance, funds, English proficiency, TB test (if needed), valid passport',
          ],
        },
        {
          title: 'Child Student',
          requirements: [
            'Children aged 4-17',
            'Up to 3 months prior to course start',
            'Up to 7 days before course start',
            'Acceptance, parental consent, funds, valid passport',
          ],
        },
      ],
    },
    intakes: {
      description:
        'Universities and colleges in the UK follow three sessions of intakes:',
      data: [
        {
          intake: 'January',
          admission: 'June-September',
        },
        {
          intake: 'September',
          admission: 'February-May',
        },
        {
          intake: 'May',
          admission: 'January-February',
        },
      ],
    },
    costOfStudy: {
      title: 'Cost of Studying in UK for Indian Students',
      description:
        'Studying in the UK involves various expenses. The table below provides an overview:',
      tableHeading: ['Degree', 'Cost in GBP (Per Year)'],
      tableBody: [
        {
          col1: 'Student Visa',
          col2: 'Standard Visa: £348 (~₹33,000) Short-Term Visa: £97 - £186 (~₹9,200 - ₹17,700) 11-Month Short-Term Visa: £186 (~₹17,700)',
        },
        {
          col1: 'Course Fees',
          col2: "Undergraduate (Bachelor's): £10,000 - £30,000 (₹9.5 Lacs - ₹28.5 Lacs) Postgraduate (Master's): £12,000 - £35,000 (₹11.4 Lacs - ₹33.3 Lacs) MBA: £15,000 - £60,000 (₹14.3 Lacs - ₹57 Lacs) PhD: £13,000 - £27,000 (₹12.4 Lacs - ₹25.7 Lacs)",
        },
      ],
    },
    livingExpenses: {
      title: 'UK Living Expenses for Indian Students',
      description:
        'Living expenses in the UK typically include accommodation, food, transportation, utilities, textbooks, health insurance, and personal expenses. The table below breaks down monthly costs:',
      tableHeading: [
        'Expenses',
        'Cost in GBP (Per Month)',
        'Cost in INR (Per Month)',
      ],
      tableBody: [
        {
          col1: 'Accommodation (shared)',
          col2: '£400 - £800',
          col3: '₹38,000 - ₹76,000',
        },
        {
          col1: 'Accommodation (private)',
          col2: '£400 - £800',
          col3: '₹57,000 - ₹1,42,500',
        },
        {
          col1: 'Food',
          col2: '$200 - $400',
          col3: '₹19,000 - ₹38,000',
        },
        {
          col1: 'Transportation',
          col2: '$50 - $100',
          col3: '₹4,750 - ₹9,500',
        },
        {
          col1: 'Utilities',
          col2: '$50 - $100',
          col3: '₹9,500 - ₹14,250',
        },
        {
          col1: 'Textbooks and study materials',
          col2: '£100 - £150',
          col3: '₹4,750 - ₹9,500',
        },
        {
          col1: 'Health Insurance',
          col2: '₹4,750 - ₹9,500',
          col3: '₹4,750 - ₹9,500',
        },
        {
          col1: 'Personal Expenses',
          col2: '£50 - £100',
          col3: '₹9,500 - ₹19,000',
        },
      ],
    },
    careerOpportunity: {
      title: 'Career Opportunities in UK for Indian Students',
      description:
        'Post-study work opportunities in the UK are significant for Indian students. The table below presents top job roles and corresponding salaries in GBP:',
      tableHeading: [
        'Job Profile',
        'Description & Opportunities',
        'Top Employers',
      ],
      tableBody: [
        {
          col1: 'Technology and Engineering',
          col2: 'Fast-growing tech sector with roles in software development, cybersecurity, etc. Engineering fields also in demand.',
          col3: 'Google, Microsoft, BAE Systems, Siemens, Rolls-Royce',
        },
        {
          col1: 'Healthcare',
          col2: 'Opportunities in nursing, pharmacy, general practice, and specialist medicine.',
          col3: 'NHS, GlaxoSmithKline, AstraZeneca, Bupa',
        },
        {
          col1: 'Business and Finance',
          col2: 'Banking, investment, marketing, and human resources opportunities in cities like London, Manchester, and Edinburgh.',
          col3: 'Barclays, HSBC, Deloitte, PwC, Ernst & Young',
        },
        {
          col1: 'Creative Industries',
          col2: 'Media, design, arts sectors with roles in film production, graphic design, etc.',
          col3: 'BBC, Universal Pictures, WPP, Saatchi & Saatchi',
        },
        {
          col1: 'Education',
          col2: 'Roles in teaching, research positions, administrative jobs, and educational technology.',
          col3: 'University of Oxford, University of Cambridge, Pearson Education, McGraw-Hill',
        },
        {
          col1: 'Other Emerging Sectors',
          col2: 'Growth in sustainability, renewable energy, biotechnology, and other niche sectors.',
          col3: 'Tesla, Johnson Matthey, Genzyme, Vestas Wind Systems',
        },
      ],
    },
    scholarships: {
      title: 'UK Scholarships for Indian Students',
      description:
        'The United Kingdom is known for its prestigious universities and quality education. Scholarships in the UK provide financial support to deserving students, making education more affordable. The table below outlines some key scholarships:',
      tableHeading: [
        'Name of Scholarship',
        'Description',
        'Eligibility',
        'Amount in GBP',
      ],
      tableBody: [
        {
          col1: 'UK Excellence Scholarship',
          col2: 'Merit-based for outstanding Indian students applying to UK universities.',
          col3: 'Academic excellence',
          col4: '£5,000 - £20,000',
        },
        {
          col1: 'Chevening Scholarship',
          col2: "Funded by the UK government, offering full financial support for a one-year Master's degree in any subject.",
          col3: 'Leadership qualities, academic excellence, work experience',
          col4: 'Full tuition fees, living expenses',
        },
        {
          col1: 'GREAT Scholarships',
          col2: 'Multiple scholarships offered by the British Council and UK universities, covering various disciplines and academic levels.',
          col3: 'Varies based on the specific scholarship program',
          col4: 'Varies based on the specific scholarship program',
        },
        {
          col1: 'Charles Wallace India Trust Scholarships',
          col2: 'Scholarships for Indian artists, researchers, and professionals to undertake short-term or long-term programs in the UK.',
          col3: 'Specific to arts, heritage conservation, humanities, social sciences, and more',
          col4: 'Varies based on program and duration',
        },
      ],
    },
    faqs: [
      {
        title: 'How much does it cost to study in the UK?',
        description:
          'Costs vary based on factors such as the chosen institution, location, lifestyle, and personal spending habits. Refer to the "Cost of Studying in the UK for Indian Students" section for details.',
      },
      {
        title: 'What are the student visa requirements for the UK?',
        description:
          'Requirements vary by visa type. Refer to the "Student Visa Requirements for the UK" section for a detailed breakdown.',
      },
      {
        title: 'When are the intakes in the UK?',
        description:
          'The main intake is in September, with additional opportunities to begin shorter courses in January and May. Refer to the "Intakes in the UK" section for details.',
      },
    ],
  },
  {
    country: 'USA',
    heroImage: '/images/usHero.png',
    studyIn: {
      description:
        'Embark on a transformative academic journey in the United States, a global education hub that attracts students from around the world. Immerse yourself in diverse cultures, cutting-edge research, and a dynamic learning environment.',
      data: [
        {
          title: 'Top-Ranked Universities:',
          description:
            'The USA is home to prestigious institutions like Harvard, MIT, and Stanford, offering world-class education.',
        },
        {
          title: 'Extensive Program Choices:',
          description:
            'Choose from a vast array of programs, including STEM fields, humanities, business, and more, tailored to your career aspirations.',
        },
        {
          title: 'Innovation and Research:',
          description:
            'Engage in groundbreaking research and innovation, with access to state-of-the-art facilities and resources.',
        },
        {
          title: 'Cultural Diversity:',
          description:
            'Experience a melting pot of cultures, fostering a global perspective and creating lifelong connections.',
        },
      ],
    },
    visaRequirements: {
      description:
        'Navigating the student visa process is crucial for studying in the USA. The following table provides key details:',
      data: [
        {
          title: 'F-1 Student Visa',
          requirements: [
            'International Students',
            'Up to 120 days before the program starts',
            'Up to 30 days before the program starts',
            'Form I-20, SEVIS fee payment, visa application, valid passport',
          ],
        },
      ],
    },
    intakes: {
      description:
        'Universities in the USA typically follow two major intakes:',
      data: [
        {
          intake: 'Fall (August/September)',
          admission: 'December-April',
        },
        {
          intake: 'Spring (January)',
          admission: 'June-September',
        },
      ],
    },
    costOfStudy: {
      title: 'Cost of Studying in USA for International Students',
      description:
        'Understanding the cost of studying in the USA is essential. The table below provides an overview:',
      tableHeading: ['Degree', 'Cost in USD (Per Year)'],
      tableBody: [
        {
          col1: 'Student Visa',
          col2: 'SEVIS fee: $350, visa application fee: varies by country',
        },
        {
          col1: "Undergraduate (Bachelor's)",
          col2: '$25,000 - $50,000',
        },
        {
          col1: "Postgraduate (Master's)",
          col2: '$30,000 - $60,000',
        },
        {
          col1: 'MBA',
          col2: '$40,000 - $80,000',
        },
        {
          col1: 'PhD',
          col2: '$28,000 - $55,000',
        },
      ],
    },
    livingExpenses: {
      title: 'Living Expenses in USA for International Students',
      description:
        'Managing living expenses is crucial for a comfortable stay in the USA. The table below breaks down monthly costs:',
      tableHeading: [
        'Expenses',
        'Cost in USD (Per Month)',
        'Cost in INR (Per Month)',
      ],
      tableBody: [
        {
          col1: 'Accommodation',
          col2: '$800 - $1,500',
          col3: '₹59,000 - ₹1,11,000',
        },
        {
          col1: 'Food',
          col2: '$200 - $400',
          col3: '₹14,800 - ₹29,500',
        },
        {
          col1: 'Transportation',
          col2: '$50 - $100',
          col3: '₹3,700 - ₹7,400',
        },
        {
          col1: 'Health Insurance',
          col2: '$50 - $100',
          col3: '₹3,700 - ₹7,400',
        },
        {
          col1: 'Personal Expenses',
          col2: '$100 - $200',
          col3: '₹7,400 - ₹14,800',
        },
      ],
    },
    careerOpportunity: {
      title: 'Career Opportunities in USA for International Students',
      description:
        'The USA offers vast career opportunities for international students. The table below highlights some job profiles and top employers:',
      tableHeading: [
        'Job Profile',
        'Description & Opportunities',
        'Top Employers',
      ],
      tableBody: [
        {
          col1: 'Technology and IT',
          col2: 'Opportunities in software development, data analytics, and cybersecurity.',
          col3: 'Google, Microsoft, Apple, Amazon',
        },
        {
          col1: 'Finance and Consulting',
          col2: 'Roles in banking, investment, and management consulting.',
          col3: 'JPMorgan Chase, Goldman Sachs, McKinsey & Company',
        },
        {
          col1: 'Healthcare',
          col2: 'Opportunities in nursing, research, and pharmaceuticals.',
          col3: 'Mayo Clinic, Cleveland Clinic, Pfizer',
        },
        {
          col1: 'Engineering',
          col2: 'Roles in various engineering fields, including civil, mechanical, and electrical.',
          col3: 'Boeing, Lockheed Martin, Tesla',
        },
        {
          col1: 'Marketing and Advertising',
          col2: 'Opportunities in digital marketing, advertising, and public relations.',
          col3: 'Procter & Gamble, Coca-Cola, Ogilvy & Mather',
        },
      ],
    },
    scholarships: {
      title: 'USA Scholarships for International Students',
      description:
        'The USA offers a plethora of scholarships to support international students. The table below provides details:',
      tableHeading: [
        'Name of Scholarship',
        'Description',
        'Eligibility',
        'Amount in USD',
      ],
      tableBody: [
        {
          col1: 'Fulbright Scholarship',
          col2: 'Merit-based for exceptional students',
          col3: 'Academic excellence, leadership qualities',
          col4: 'Varies based on program',
        },
        {
          col1: 'Hubert H. Humphrey Fellowship Program',
          col2: 'Funded by the U.S. Department of State for mid-career professionals',
          col3: 'Professional achievements, leadership potential',
          col4: 'Full financial support',
        },
        {
          col1: 'Aga Khan Foundation International Scholarship Program',
          col2: 'Need-based scholarships for postgraduate studies',
          col3: 'Financial need, academic merit',
          col4: 'Full tuition, living expenses',
        },
      ],
    },
    faqs: [
      {
        title: 'How much does it cost to study in the USA?',
        description:
          'Costs vary based on factors such as the chosen institution, location, and the level of study.',
      },
      {
        title: 'What are the student visa requirements for the USA?',
        description:
          'Requirements include a valid passport, Form I-20, SEVIS fee payment, and a visa application. Refer to the "Student Visa Requirements for the USA" section for a detailed breakdown.',
      },
      {
        title: 'When are the intakes in the USA?',
        description:
          'The main intakes are in Fall (August/September) and Spring (January). Refer to the "Intakes in the USA" section for details.',
      },
    ],
  },
  {
    country: 'CANADA',
    heroImage: '/images/canadaHero.svg',
    studyIn: {
      description:
        'Embark on a rewarding educational journey in Canada, a country renowned for its welcoming communities, breathtaking landscapes, and world-class education. Immerse yourself in a multicultural environment and enjoy the benefits of quality education and vibrant student life.',
      data: [
        {
          title: 'High-Quality Education:',
          description:
            'Canada is home to top-ranking universities and colleges known for their academic excellence and research opportunities.',
        },
        {
          title: 'Diverse Programs:',
          description:
            'Choose from a diverse range of programs, including STEM fields, arts, business, and more, tailored to your career goals.',
        },
        {
          title: 'Safe and Inclusive Environment:',
          description:
            'Experience a safe and inclusive environment that encourages cultural exchange and personal growth.',
        },
        {
          title: 'Post-Graduation Work Opportunities:',
          description:
            'Benefit from post-graduation work permits, allowing you to gain valuable work experience after completing your studies.',
        },
      ],
    },
    visaRequirements: {
      description:
        'Understanding the student visa process is crucial for studying in Canada. The following table provides key details:',
      data: [
        {
          title: 'Study Permit',
          requirements: [
            'International Students',
            'Up to 6 months before the program starts',
            'Up to 30 days before the program starts',
            'Letter of acceptance, proof of funds, visa application, valid passport',
          ],
        },
      ],
    },
    intakes: {
      description:
        'Universities and colleges in Canada typically follow two major intakes:',
      data: [
        {
          intake: 'Fall (September)',
          admission: 'November-January',
        },
        {
          intake: 'Winter (January)',
          admission: 'May-July',
        },
      ],
    },
    costOfStudy: {
      title: 'Cost of Studying in Canada for International Students',
      description:
        'Understanding the cost of studying in Canada is essential. The table below provides an overview:',
      tableHeading: ['Degree', 'Cost in CAD (Per Year)'],
      tableBody: [
        {
          col1: 'Study Permit',
          col2: 'Application fee: CAD 150, Biometrics fee: CAD 85',
        },
        {
          col1: "Undergraduate (Bachelor's)",
          col2: 'CAD 20,000 - CAD 40,000',
        },
        {
          col1: "Postgraduate (Master's)",
          col2: 'CAD 15,000 - CAD 30,000',
        },
        {
          col1: 'PhD',
          col2: 'CAD 7,000 - CAD 20,000',
        },
      ],
    },
    livingExpenses: {
      title: 'Canada Living Expenses for International Students',
      description:
        'Managing living expenses is crucial for a comfortable stay in Canada. The table below breaks down monthly costs:',
      tableHeading: [
        'Expenses',
        'Cost in CAD (Per Month)',
        'Cost in INR (Per Month)',
      ],
      tableBody: [
        {
          col1: 'Accommodation',
          col2: 'CAD 800 - CAD 1,500',
          col3: '₹47,000 - ₹88,000',
        },
        {
          col1: 'Food',
          col2: 'CAD 300 - CAD 500',
          col3: '₹17,600 - ₹29,400',
        },
        {
          col1: 'Transportation',
          col2: 'CAD 50 - CAD 100',
          col3: '₹2,900 - ₹5,900',
        },
        {
          col1: 'Health Insurance',
          col2: 'CAD 50 - CAD 100',
          col3: '₹2,900 - ₹5,900',
        },
        {
          col1: 'Personal Expenses',
          col2: 'CAD 100 - CAD 200',
          col3: '₹5,900 - ₹11,800',
        },
      ],
    },
    careerOpportunity: {
      title: 'Career Opportunities in Canada for International Students',
      description:
        'Canada offers diverse career opportunities for international students. The table below highlights some job profiles and top employers:',
      tableHeading: [
        'Job Profile',
        'Description & Opportunities',
        'Top Employers',
      ],
      tableBody: [
        {
          col1: 'Information Technology',
          col2: 'Opportunities in software development, data analysis, and cybersecurity.',
          col3: 'Shopify, CGI, BlackBerry',
        },
        {
          col1: 'Healthcare',
          col2: 'Roles in nursing, pharmaceuticals, and medical research.',
          col3: 'Royal Bank of Canada, Toronto-Dominion Bank, Ernst & Young',
        },
        {
          col1: 'Engineering',
          col2: 'Opportunities in nursing, research, and pharmaceuticals.',
          col3: 'Mayo Clinic, Cleveland Clinic, Pfizer',
        },
        {
          col1: 'Engineering',
          col2: 'Roles in civil, mechanical, and software engineering.',
          col3: 'SNC-Lavalin, Bombardier, Shopify',
        },
        {
          col1: 'Renewable Energy',
          col2: 'Growth in the sustainable energy sector with opportunities in solar and wind energy.',
          col3: 'Brookfield Renewable, TransAlta, Innergex Renewable Energy',
        },
      ],
    },
    scholarships: {
      title: 'Canada Scholarships for International Students',
      description:
        'Canada offers various scholarships to support international students in their academic pursuits. The table below provides details:',
      tableHeading: [
        'Name of Scholarship',
        'Description',
        'Eligibility',
        'Amount in CAD',
      ],
      tableBody: [
        {
          col1: 'Canada Graduate Scholarships',
          col2: 'Merit-based scholarships for graduate students',
          col3: 'Academic excellence, research potential',
          col4: 'Varies based on program',
        },
        {
          col1: 'Vanier Canada Graduate Scholarships',
          col2: 'Scholarships for doctoral students demonstrating leadership skills',
          col3: 'Academic excellence, leadership qualities',
          col4: '$50,000 per year',
        },
        {
          col1: 'Lester B. Pearson International Scholarship',
          col2: 'Full tuition and living expenses for exceptional students',
          col3: 'Academic achievement, leadership potential',
          col4: 'Full tuition, living expenses',
        },
      ],
    },
    faqs: [
      {
        title: 'How much does it cost to study in Canada?',
        description:
          'Costs vary based on factors such as the chosen institution, location, and the level of study.',
      },
      {
        title: 'What are the student visa requirements for Canada?',
        description:
          'Requirements include a valid passport, letter of acceptance, proof of funds, and a visa application. Refer to the "Student Visa Requirements for Canada" section for a detailed breakdown.',
      },
      {
        title: 'When are the intakes in Canada?',
        description:
          'The main intakes are in Fall (September) and Winter (January). Refer to the "Intakes in Canada" section for details.',
      },
    ],
  },
  {
    country: 'AUSTRALIA',
    heroImage: '/images/australiaHero.svg',
    studyIn: {
      description:
        "Welcome to Australia, a leading destination for international students. Immerse yourself in a world-class education system, vibrant student life, and a rich cultural experience. Whether you're pursuing business, engineering, health sciences, or other fields, Australia offers a diverse and rewarding academic journey.",
    },
    visaRequirements: {
      description:
        'To study in Australia, understanding the student visa requirements is crucial. The following table outlines key details:',
      data: [
        {
          title: 'Subclass 500 (Student)',
          requirements: [
            'International Students',
            'Up to 4 months before the course starts',
            'Up to 90 days before the course starts',
            'Proof of enrollment, financial capacity, English proficiency, health insurance, and a valid passport',
          ],
        },
      ],
    },
    intakes: {
      description:
        'Australia has main intakes in February and July, with additional intakes in November and April for some institutions and courses. Admissions typically occur from June to September.',
    },
    costOfStudy: {
      title: 'Cost of Studying in Australia for Indian Students',
      description:
        'Understanding the cost of studying in Australia is essential. The table below provides an overview:',
      tableHeading: ['Degree', 'Cost in AUD (Per Year)'],
      tableBody: [
        {
          col1: "Undergraduate (Bachelor's)",
          col2: 'AUD 20,000 - AUD 45,000',
        },
        {
          col1: "Postgraduate (Master's)",
          col2: 'AUD 22,000 - AUD 50,000',
        },
        {
          col1: 'MBA',
          col2: 'AUD 55,000 - AUD 85,000',
        },
        {
          col1: 'PhD',
          col2: 'AUD 20,000 - AUD 42,000',
        },
      ],
    },
    livingExpenses: {
      title: 'Australian Living Expenses for International Students',
      description:
        'Managing living expenses is crucial. The table below breaks down costs:',
      tableHeading: [
        'Expenses',
        'Cost in AUD (Per Month)',
        'Cost in INR (Per Month)',
      ],
      tableBody: [
        {
          col1: 'Accommodation',
          col2: 'AUD 800 - AUD 1,500',
          col3: '₹41,000 - ₹77,000',
        },
        {
          col1: 'Food',
          col2: 'AUD 300 - AUD 500',
          col3: '₹15,000 - ₹30,000',
        },
        {
          col1: 'Transportation',
          col2: 'AUD 50 - AUD 100',
          col3: '₹2,500 - ₹5,000',
        },
        {
          col1: 'Utilities',
          col2: 'AUD 60 - AUD 120',
          col3: '₹3,000 - ₹6,000',
        },
        {
          col1: 'Health Insurance',
          col2: 'AUD 40 - AUD 80',
          col3: '₹3,000 - ₹6,000',
        },
        {
          col1: 'Personal Expenses',
          col2: 'AUD 100 - AUD 200',
          col3: '₹5,000 - ₹10,000',
        },
      ],
    },
    careerOpportunity: {
      title: 'Career Opportunities in Australia for International Students',
      description:
        'Upon completing your studies, Australia offers diverse career opportunities. The table below highlights some job profiles and top employers:',
      tableHeading: [
        'Job Profile',
        'Description & Opportunities',
        'Top Employers',
      ],
      tableBody: [
        {
          col1: 'IT and Software Development',
          col2: 'Growing sector with roles in software development, cybersecurity, etc.',
          col3: 'Atlassian, Canva, Data61',
        },
        {
          col1: 'Healthcare',
          col2: 'Opportunities in nursing, pharmacy, general practice, and specialist medicine.',
          col3: 'Australian Red Cross, Cochlear, ResMed',
        },
        {
          col1: 'Finance',
          col2: 'Banking, investment, marketing, and human resources opportunities.',
          col3: 'Commonwealth Bank, Westpac, Macquarie Group',
        },
        {
          col1: 'Engineering',
          col2: 'Roles in various engineering fields, including civil, mechanical, and electrical.',
          col3: 'BHP, Rio Tinto, Woodside Energy',
        },
        {
          col1: 'Tourism and Hospitality',
          col2: 'Opportunities in hotels, travel agencies, and event management.',
          col3: 'Qantas, Crown Resorts, Flight Centre',
        },
      ],
    },
    scholarships: {
      title: 'Australia Scholarships for Indian Students',
      description:
        'Australia offers various scholarships to support Indian students in pursuing their academic dreams. The table below provides details:',
      tableHeading: [
        'Name of Scholarship',
        'Description',
        'Eligibility',
        'Amount in AUD',
      ],
      tableBody: [
        {
          col1: 'Australia Awards',
          col2: 'Government-funded for outstanding students',
          col3: 'Varies based on program',
          col4: 'Full tuition fees, living expenses',
        },
        {
          col1: 'Endeavour Scholarships',
          col2: 'Support for high-achieving individuals',
          col3: 'Varies based on program',
          col4: 'Up to AUD 272,500',
        },
      ],
    },
    faqs: [
      {
        title: 'How much does it cost to study in Australia?',
        description:
          'Costs vary based on the degree and lifestyle. Refer to the "Cost of Studying in Australia for Indian Students" section for details.',
      },
      {
        title: 'When should I apply for a student visa?',
        description:
          'It is recommended to apply up to 4 months before the course starts.',
      },
      {
        title: 'What are the main intakes in Australia?',
        description:
          'Main intakes are in February and July, with additional intakes in November and April for some programs.',
      },
    ],
  },
  {
    country: 'IRELAND',
    heroImage: '/images/irelandHero.svg',
    studyIn: {
      description:
        'Embark on a distinctive academic journey in Ireland, a country known for its rich cultural heritage, warm hospitality, and excellent education system. Immerse yourself in a vibrant academic community and explore the unique experiences Ireland has to offer.',
      data: [
        {
          title: 'Quality Education:',
          description:
            'Ireland is home to world-renowned universities and institutions, offering high-quality education and research opportunities.',
        },
        {
          title: 'Tech Hub:',
          description:
            "Experience Ireland's emergence as a global tech hub, providing opportunities in industries like information technology and innovation.",
        },
        {
          title: 'Cultural Richness:',
          description:
            "Enjoy Ireland's rich cultural scene, historic landmarks, and a welcoming atmosphere that embraces diversity.",
        },
        {
          title: 'English Language Environment:',
          description:
            'Immerse yourself in an English-speaking environment, enhancing your language skills and facilitating communication.',
        },
      ],
    },
    visaRequirements: {
      description:
        'Understanding the student visa process is crucial for studying in Ireland. The following table provides key details:',
      data: [
        {
          title: 'Study Visa',
          requirements: [
            'International Students',
            'Up to 1 months before the program starts',
            'Up to 1 months before the program starts',
            'Letter of acceptance, proof of funds, valid passport, evidence of health insurance',
          ],
        },
      ],
    },
    intakes: {
      description:
        'Universities and colleges in Ireland typically follow two major intakes:',
      data: [
        {
          intake: 'September',
          admission: 'March-June',
        },
        {
          intake: 'January',
          admission: 'August-October',
        },
      ],
    },
    costOfStudy: {
      title: 'Cost of Studying in Ireland for International Students',
      description:
        'Understanding the cost of studying in Ireland is essential. The table below provides an overview:',
      tableHeading: ['Degree', 'Cost in EUR (Per Year)'],
      tableBody: [
        {
          col1: 'Study Visa',
          col2: 'Visa fee: EUR 60, GNIB registration fee: EUR 300',
        },
        {
          col1: "Undergraduate (Bachelor's)",
          col2: 'EUR 10,000 - EUR 25,000',
        },
        {
          col1: "Postgraduate (Master's)",
          col2: 'EUR 10,000 - EUR 30,000',
        },
        {
          col1: 'PhD',
          col2: 'EUR 8,000 - EUR 20,000',
        },
      ],
    },
    livingExpenses: {
      title: 'Ireland Living Expenses for International Students',
      description:
        'Managing living expenses is crucial for a comfortable stay in Ireland. The table below breaks down monthly costs:',
      tableHeading: [
        'Expenses',
        'Cost in EUR (Per Month)',
        'Cost in INR (Per Month)',
      ],
      tableBody: [
        {
          col1: 'Accommodation',
          col2: 'EUR 500 - EUR 1,200',
          col3: '₹42,000 - ₹1,02,000',
        },
        {
          col1: 'Food',
          col2: 'EUR 250 - EUR 400',
          col3: '₹4,200 - ₹8,500',
        },
        {
          col1: 'Transportation',
          col2: 'EUR 45 - EUR 80',
          col3: '₹3,800 - ₹6,800',
        },
        {
          col1: 'Health Insurance',
          col2: 'EUR 100 - EUR 200',
          col3: '₹8,500 - ₹17,000',
        },
      ],
    },
    careerOpportunity: {
      title: 'Career Opportunities in Ireland for International Students',
      description:
        'Ireland offers diverse career opportunities for international students. The table below highlights some job profiles and top employers:',
      tableHeading: [
        'Job Profile',
        'Description & Opportunities',
        'Top Employers',
      ],
      tableBody: [
        {
          col1: 'Technology and IT',
          col2: 'Opportunities in software development, data analytics, and cybersecurity.',
          col3: 'Google, Facebook, Intel, Accenture',
        },
        {
          col1: 'Pharmaceuticals and Healthcare',
          col2: 'Roles in pharmaceutical research, healthcare, and biotechnology.',
          col3: 'Pfizer, Abbott, Viatris',
        },
        {
          col1: 'Business and Finance',
          col2: 'Opportunities in banking, finance, and multinational corporations.',
          col3: 'Bank of Ireland, AIB, KPMG',
        },
        {
          col1: 'Renewable Energy',
          col2: 'Growing sector with opportunities in wind and solar energy.',
          col3: 'ESB, Siemens Gamesa, Statkraft',
        },
        {
          col1: 'Arts and Culture',
          col2: 'Opportunities in the vibrant cultural and arts sector.',
          col3: 'Abbey Theatre, Irish Museum of Modern Art, RTÉ',
        },
      ],
    },
    scholarships: {
      title: 'Ireland Scholarships for International Students',
      description:
        'Ireland offers various scholarships to support international students. The table below provides details:',
      tableHeading: [
        'Name of Scholarship',
        'Description',
        'Eligibility',
        'Amount in EUR',
      ],
      tableBody: [
        {
          col1: 'Government of Ireland International Education Scholarships',
          col2: 'Merit-based scholarships for non-EEA students',
          col3: 'Academic excellence, leadership qualities',
          col4: 'Varies based on program',
        },
        {
          col1: 'Irish Aid Fellowships',
          col2: 'Fully-funded fellowships for students from eligible developing countries',
          col3: 'Academic achievement, development focus',
          col4: 'Full tuition, living expenses, travel expenses',
        },
      ],
    },
    faqs: [
      {
        title: 'How much does it cost to study in Ireland?',
        description:
          'Costs vary based on factors such as the chosen institution, location, and the level of study.',
      },
      {
        title: 'What are the student visa requirements for Ireland?',
        description:
          'Requirements include a valid passport, letter of acceptance, proof of funds, and health insurance. Refer to the "Student Visa Requirements for Ireland" section for a detailed breakdown.',
      },
      {
        title: 'When are the intakes in Ireland?',
        description:
          'The main intakes are in September and January. Refer to the "Intakes in Ireland" section for details.',
      },
    ],
  },
  {
    country: 'NEW-ZEALAND',
    heroImage: '/images/australiaHero.svg',
    studyIn: {
      description:
        'Discover the wonders of studying in New Zealand, a country known for its stunning landscapes, friendly communities, and world-class education. Immerse yourself in a unique learning experience that combines academic excellence with adventure.',
      data: [
        {
          title: 'Quality Education:',
          description:
            'New Zealand hosts top-ranking universities and institutes known for their academic excellence.',
        },
        {
          title: 'Diverse Programs:',
          description:
            'Choose from a wide range of programs, including business, science, engineering, and more, tailored to meet your career goals.',
        },
        {
          title: 'Safe and Inclusive Environment:',
          description:
            'Enjoy a welcoming and safe environment, fostering a sense of community among international students.',
        },
        {
          title: 'Post-Study Work Opportunities:',
          description:
            'Benefit from post-study work options, allowing you to gain valuable work experience after completing your studies.',
        },
      ],
    },
    visaRequirements: {
      description:
        'Understanding the student visa requirements is crucial for studying in New Zealand. The following table provides key details:',
      data: [
        {
          title: 'Study Visa',
          requirements: [
            'International Students',
            'Up to 3 months before the course starts',
            'Up to 90 days before the course starts',
            'Proof of enrollment, financial capacity, valid passport, health insurance',
          ],
        },
      ],
    },
    intakes: {
      description:
        'New Zealand universities typically follow two major intakes:',
      data: [
        {
          intake: 'February',
          admission: 'September-November',
        },
        {
          intake: 'July',
          admission: 'April-June',
        },
      ],
    },
    costOfStudy: {
      title: 'Cost of Studying in New Zealand for Indian Students',
      description:
        'Understanding the cost of studying in New Zealand is essential. The table below provides an overview:',
      tableHeading: ['Degree', 'Cost in NZD (Per Year)'],
      tableBody: [
        {
          col1: 'Study Visa',
          col2: 'Visa application fees: NZD 330 (~₹17,000)',
        },
      ],
    },
    livingExpenses: {
      title: 'New Zealand Living Expenses for International Students',
      description:
        'Managing living expenses is crucial for a comfortable stay in New Zealand. The table below breaks down monthly costs:',
      tableHeading: [
        'Expenses',
        'Cost in NZD (Per Month)',
        'Cost in INR (Per Month)',
      ],
      tableBody: [
        {
          col1: 'Accommodation',
          col2: 'NZD 800 - NZD 1,200',
          col3: '₹41,000 - ₹61,500',
        },
        {
          col1: 'Food',
          col2: 'NZD 300 - NZD 500',
          col3: '₹15,500 - ₹25,800',
        },
        {
          col1: 'Transportation',
          col2: 'NZD 50 - NZD 100',
          col3: '₹2,500 - ₹5,000',
        },
        {
          col1: 'Utilities',
          col2: 'NZD 40 - NZD 80',
          col3: '₹2,000 - ₹4,000',
        },
        {
          col1: 'Health Insurance',
          col2: 'NZD 30 - NZD 60',
          col3: '₹1,500 - ₹3,000',
        },
        {
          col1: 'Personal Expenses',
          col2: 'NZD 50 - NZD 100',
          col3: '₹2,500 - ₹5,000',
        },
      ],
    },
    careerOpportunity: {
      title: 'Career Opportunities in New Zealand for International Students',
      description:
        'New Zealand offers diverse career opportunities for international students. The table below highlights some job profiles and top employers:',
      tableHeading: [
        'Job Profile',
        'Description & Opportunities',
        'Top Employers',
      ],
      tableBody: [
        {
          col1: 'IT and Software Development',
          col2: 'Growing sector with opportunities in software development, data analytics, etc.',
          col3: 'Xero, Fisher & Paykel Healthcare, Datacom',
        },
        {
          col1: 'Agriculture and Agribusiness',
          col2: 'Opportunities in farming, research, and agribusiness management.',
          col3: 'Fonterra, Zespri, Synlait',
        },
        {
          col1: 'Tourism and Hospitality',
          col2: 'Thriving industry with roles in hotels, tour operations, and event management.',
          col3: 'Air New Zealand, Tourism Holdings Limited, AccorHotels',
        },
        {
          col1: 'Healthcare',
          col2: 'Opportunities in nursing, pharmaceuticals, and medical research.',
          col3: 'Counties Manukau Health, Fisher & Paykel Healthcare, Pharmac',
        },
        {
          col1: 'Construction and Engineering',
          col2: 'Roles in civil engineering, project management, and infrastructure development.',
          col3: 'Fletcher Building, Downer, Opus International Consultants',
        },
      ],
    },
    scholarships: {
      title: 'New Zealand Scholarships for Indian Students',
      description:
        'New Zealand offers various scholarships to support Indian students in pursuing their educational aspirations. The table below provides details:',
      tableHeading: [
        'Name of Scholarship',
        'Description',
        'Eligibility',
        'Amount in NZD',
      ],
      tableBody: [
        {
          col1: 'New Zealand Excellence Awards',
          col2: 'Merit-based awards for outstanding students',
          col3: 'Academic excellence',
          col4: 'Varies based on program',
        },
        {
          col1: 'New Zealand Commonwealth Scholarships',
          col2: 'Funded by the New Zealand government for master’s and PhD studies',
          col3: 'Varies based on program',
          col4: 'Full tuition fees, living expenses, travel allowance',
        },
      ],
    },
    faqs: [
      {
        title: 'How much does it cost to study in New Zealand?',
        description:
          'Costs vary based on factors such as the chosen institution, location, lifestyle, and personal spending habits.',
      },
      {
        title: 'What are the student visa requirements for New Zealand?',
        description:
          'Requirements vary by visa type. Refer to the "Student Visa Requirements for New Zealand" section for a detailed breakdown.',
      },
      {
        title: 'When are the intakes in New Zealand?',
        description:
          'The main intakes are in February and July. Refer to the "Intakes in New Zealand" section for details.',
      },
    ],
  },
];

export const ServicesData = {
  studyAbroad: {
    heroSection: {
      title: [
        'Free ',
        'Study Abroad Counseling',
        ' - Your Path to Global Education',
      ],
      description:
        'At GlobalScholar, our mission is to guide you on a journey that transcends borders and opens doors to a world of opportunities. With our FREE Study Abroad Counseling service, we are your trusted partner in making your dreams of studying abroad a reality.',
      image: '/images/abroadHero.svg',
    },
    whatToExpect: {
      title: 'What to Expect from Our FREE Study Abroad Counseling:',
      data: [
        {
          icon: '/icons/abroad1.png',
          title: 'In-Depth Consultations:',
          description:
            'Our experienced counselors will engage in in-depth discussions with you, helping you select the perfect destination and institution that matches your aspirations.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Visa Guidance:',
          description:
            'Navigating the visa application process can be daunting. We provide step-by-step guidance on visa applications, ensuring a smooth and hassle-free experience.',
        },
        {
          icon: '/icons/abroad3.png',
          title: 'Document Preparation',
          description:
            'We guide you through the documentation required for your university application, ensuring that everything is in order.',
        },
        {
          icon: '/icons/abroad4.png',
          title: 'English Proficiency Tests',
          description:
            "If English isn't your native language, we assist you in preparing for language proficiency exams like IELTS and TOEFL.",
        },
        {
          icon: '/icons/abroad5.png',
          title: 'Scholarship Assistance',
          description:
            'We keep you informed about scholarship opportunities and help you with the application process, making education abroad more affordable.',
        },
        {
          icon: '/icons/abroad6.png',
          title: 'Post-Departure Support',
          description:
            "Our commitment to your success doesn't end with your departure. We offer ongoing support even after you've arrived at your dream university.",
        },
      ],
    },
    howToApply: {
      title: 'How to Apply for a Student Visa?',
      description:
        'Applying for a student visa involves several steps, which may vary slightly depending on the country you plan to study in. However, the core requirements remain relatively consistent across most cases. On a general level, you will need to provide evidence of the following:',
      data: [
        {
          title: 'Enrollment in a Recognized University:',
          description:
            'You must demonstrate that you have secured admission to a recognized university in your chosen study destination.',
        },
        {
          title: 'Financial Capability:',
          description:
            'You need to prove that you have the financial means to cover the expenses of your studies, including tuition fees, living expenses, and airfare.',
        },
        {
          title: 'Passport and Photographs:',
          description:
            'Ensure you have passport-size photographs and a valid passport with a minimum validity of at least six months beyond your intended period of stay in the country.',
        },
        {
          title: 'Language Proficiency and Health Requirements:',
          description:
            'Depending on the country, you may be required to provide evidence of English proficiency, undergo health checkups, and submit a police report.',
        },
      ],
    },
    faqs: [
      {
        title:
          'Is this counseling service available for undergraduate and postgraduate students?',
        description:
          'Yes, our free counseling services are available for both undergraduate and postgraduate students.',
      },
      {
        title: 'How long does a typical counseling session last?',
        description:
          'A counseling session can vary in duration, but it typically lasts between 30 minutes to an hour to ensure thorough guidance.',
      },
      {
        title:
          'Do I need to have a specific country or university in mind before scheduling a counseling session?',
        description:
          'No, we can help you explore your options and narrow down your choices during the counseling session.',
      },
      {
        title:
          'Are counseling sessions available online for international students?',
        description:
          'Yes, we offer online counseling sessions to assist students from around the world.',
      },
      {
        title: 'What qualifications do your counselors hold?',
        description:
          'Our counselors are experienced professionals with expertise in overseas education and are well-qualified to guide you in your study abroad journey.',
      },
    ],
  },
  visa: {
    heroSection: {
      title: [
        'Seamlessly Navigate Your Study Abroad Journey-',
        'Visa Assistance',
        ' Application',
      ],
      description:
        'At GlobalScholar, our mission is to guide you on a journey that transcends borders and opens doors to a world of opportunities. With our FREE Study Abroad Counseling service, we are your trusted partner in making your dreams of studying abroad a reality.',
      image: '/images/visaHero.svg',
    },
    whatToExpect: {
      title: 'What to Expect from Our FREE Study Abroad Counseling:',
      data: [
        {
          icon: '/icons/abroad1.png',
          title: 'In-Depth Visa Assessment:',
          description:
            'We begin by conducting a thorough assessment of your eligibility for a student visa. This assessment helps us identify potential challenges and requirements.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Document Checklist',
          description:
            'We provide you with a comprehensive checklist of the documents required for your visa application. This ensures that you are well-prepared.',
        },
        {
          icon: '/icons/abroad3.png',
          title: 'Form Filling Assistance:',
          description:
            'Visa application forms can be daunting. We guide you through the entire form-filling process, ensuring that every detail is accurate and complete.',
        },
        {
          icon: '/icons/abroad4.png',
          title: 'Interview Preparation:',
          description:
            'If an interview is required as part of the visa application process, we offer tips and guidance to help you succeed.',
        },
        {
          icon: '/icons/abroad5.png',
          title: 'Timely Submission:',
          description:
            'We help you submit your visa application on time, making sure you meet all deadlines.',
        },
        {
          icon: '/icons/abroad6.png',
          title: 'Continuous Support:',
          description:
            "Our commitment to your success doesn't stop after the application is submitted. We provide ongoing support as you await your visa decision.",
        },
      ],
    },
    howToApply: {
      title: 'How to Apply for a Student Visa?',
      description:
        'Applying for a student visa involves several steps, which may vary slightly depending on the country you plan to study in. However, the core requirements remain relatively consistent across most cases. On a general level, you will need to provide evidence of the following:',
      data: [
        {
          title: 'Enrollment in a Recognized University:',
          description:
            'You must demonstrate that you have secured admission to a recognized university in your chosen study destination.',
        },
        {
          title: 'Financial Capability:',
          description:
            'You need to prove that you have the financial means to cover the expenses of your studies, including tuition fees, living expenses, and airfare.',
        },
        {
          title: 'Passport and Photographs:',
          description:
            'Ensure you have passport-size photographs and a valid passport with a minimum validity of at least six months beyond your intended period of stay in the country.',
        },
        {
          title: 'Language Proficiency and Health Requirements:',
          description:
            'Depending on the country, you may be required to provide evidence of English proficiency, undergo health checkups, and submit a police report.',
        },
      ],
    },
    faqs: [
      {
        title:
          'What types of visas can you assist with, apart from student visas?',
        description:
          'In addition to student visas, we can provide guidance on other types of visas, such as tourist visas, work visas, and dependent visas, based on your needs.',
      },
      {
        title: 'Can you help me prepare for the visa interview?',
        description:
          'Yes, we offer interview preparation support to help you confidently tackle the visa interview.',
      },
      {
        title:
          'Is your visa assistance limited to a specific list of countries?',
        description:
          'We provide visa assistance for a range of countries beyond the USA, Canada, and the UK. Feel free to inquire about your specific destination.',
      },
      {
        title:
          'How soon should I start the visa application process before my intended start date?',
        description:
          'We recommend starting the visa application process at least 3-4 months before your intended program start date.',
      },
      {
        title:
          'What is the success rate of visa approvals with your assistance?',
        description:
          'Visa approval rates can vary based on individual circumstances and the country of application. We work diligently to maximize your chances of success.',
      },
    ],
  },
  application: {
    heroSection: {
      title: [
        'University Application Process',
        ' - Your Gateway to World-Class Education',
      ],
      description:
        "At GlobalScholar, we're here to make the university application process seamless, ensuring that you set foot in the institution of your dreams. Our commitment is to guide you through this journey, making your academic aspirations a reality.",
      image: '/images/applicationHero.svg',
    },
    whatToExpect: {
      title:
        'What to Expect from Our University Application Process Assistance:',
      data: [
        {
          icon: '/icons/abroad1.png',
          title: 'Course and University Selection:',
          description:
            'We help you choose the right course and university based on your academic background, interests, and career aspirations.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Application Preparation:',
          description:
            'We guide you through the application documentation process, ensuring that your application is complete and compelling.',
        },
        {
          icon: '/icons/abroad3.png',
          title: 'Resume Building:',
          description:
            'We assist you in creating a strong resume or curriculum vitae that showcases your achievements and qualifications.',
        },
        {
          icon: '/icons/abroad4.png',
          title: 'Statement of Purpose (SOP) Assistance:',
          description:
            'We offer guidance on writing a compelling SOP that reflects your motivation and goals.',
        },
        {
          icon: '/icons/abroad5.png',
          title: 'Recommendation Letters (LORs):',
          description:
            'Our experts provide advice on securing strong recommendation letters.',
        },
        {
          icon: '/icons/abroad6.png',
          title: 'Timely Application Submission:',
          description:
            'We ensure that your applications are submitted on time, meeting all university deadlines.',
        },
        {
          icon: '/icons/abroad1.png',
          title: 'Scholarship Opportunities:',
          description:
            'We inform you about available scholarships and help you with the application process.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Interview Preparation:',
          description:
            'If an interview is part of the application process, we provide interview preparation assistance.',
        },
      ],
    },
    faqs: [
      {
        title: 'Can you help me apply to multiple universities at once?',
        description:
          'Yes, we can assist you in applying to multiple universities simultaneously, increasing your chances of acceptance.',
      },
      {
        title: 'Do you offer guidance on selecting a major or field of study?',
        description:
          'Absolutely, we can provide advice on choosing the right major based on your interests and career goals.',
      },
      {
        title: 'Is there an application fee for university applications?',
        description:
          'Most universities charge an application fee. We will inform you about these fees during the application process.',
      },
      {
        title: 'What is the typical timeline for university applications?',
        description:
          'University application timelines vary, but generally, applications should be submitted about 6-12 months in advance.',
      },
      {
        title:
          'Do you provide support for scholarship applications as part of the university application process?',
        description:
          'Yes, we can guide you through scholarship applications to help secure financial aid for your studies.',
      },
    ],
  },
  scholarships: {
    heroSection: {
      title: [
        'University ',
        'Scholarships Guidance',
        ' - Unlock Financial Support for Your Education',
      ],
      description:
        'At GlobalScholar, we offer you invaluable guidance on securing scholarships to help ease the burden of tuition fees. Our University Scholarships Guidance service is your gateway to unlocking financial support for your educational aspirations.',
      image: '/images/scholarshipHero.svg',
    },
    whatToExpect: {
      title:
        'What to Expect from Our University Application Process Assistance:',
      data: [
        {
          icon: '/icons/abroad1.png',
          title: 'Course and University Selection:',
          description:
            'We help you choose the right course and university based on your academic background, interests, and career aspirations.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Application Preparation:',
          description:
            'We guide you through the application documentation process, ensuring that your application is complete and compelling.',
        },
        {
          icon: '/icons/abroad3.png',
          title: 'Resume Building:',
          description:
            'We assist you in creating a strong resume or curriculum vitae that showcases your achievements and qualifications.',
        },
        {
          icon: '/icons/abroad4.png',
          title: 'Statement of Purpose (SOP) Assistance:',
          description:
            'We offer guidance on writing a compelling SOP that reflects your motivation and goals.',
        },
        {
          icon: '/icons/abroad5.png',
          title: 'Recommendation Letters (LORs):',
          description:
            'Our experts provide advice on securing strong recommendation letters.',
        },
        {
          icon: '/icons/abroad6.png',
          title: 'Timely Application Submission:',
          description:
            'We ensure that your applications are submitted on time, meeting all university deadlines.',
        },
        {
          icon: '/icons/abroad1.png',
          title: 'Scholarship Opportunities:',
          description:
            'We inform you about available scholarships and help you with the application process.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Interview Preparation:',
          description:
            'If an interview is part of the application process, we provide interview preparation assistance.',
        },
      ],
    },
    faqs: [
      {
        title:
          'What types of scholarships are available for international students?',
        description:
          'Scholarships can include merit-based, need-based, and subject-specific scholarships, among others.',
      },
      {
        title: 'How can I find and apply for scholarships?',
        description:
          'We assist in researching scholarship opportunities and provide guidance on the application process.',
      },
      {
        title: 'What are the common eligibility criteria for scholarships?',
        description:
          'Eligibility criteria vary but often include academic excellence, leadership, and community involvement.',
      },
      {
        title:
          'Are scholarships available for students at all levels of education (undergraduate, postgraduate, Ph.D.)?',
        description:
          'Scholarships are available at various levels, and we can help you identify those suitable for your educational level.',
      },
      {
        title: 'How can I maximize my chances of securing a scholarship?',
        description:
          'We offer tips and strategies for crafting competitive scholarship applications.',
      },
    ],
  },
  accomodation: {
    heroSection: {
      title: [
        'Making Your Transition Seamless with ',
        'Student Accommodation ',
        'Services',
      ],
      description:
        'Embarking on your international education journey involves more than just choosing the right courses and securing a visa. GlobalScholar Student Accommodation Assistance service is designed to guide you through the process of securing a home away from home.',
      image: '/images/accomodationHero.svg',
    },
    whatToExpect: {
      title:
        'What to Expect from Our University Application Process Assistance:',
      data: [
        {
          icon: '/icons/abroad1.png',
          title: 'Course and University Selection:',
          description:
            'We help you choose the right course and university based on your academic background, interests, and career aspirations.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Application Preparation:',
          description:
            'We guide you through the application documentation process, ensuring that your application is complete and compelling.',
        },
        {
          icon: '/icons/abroad3.png',
          title: 'Resume Building:',
          description:
            'We assist you in creating a strong resume or curriculum vitae that showcases your achievements and qualifications.',
        },
        {
          icon: '/icons/abroad4.png',
          title: 'Statement of Purpose (SOP) Assistance:',
          description:
            'We offer guidance on writing a compelling SOP that reflects your motivation and goals.',
        },
        {
          icon: '/icons/abroad5.png',
          title: 'Recommendation Letters (LORs):',
          description:
            'Our experts provide advice on securing strong recommendation letters.',
        },
        {
          icon: '/icons/abroad6.png',
          title: 'Timely Application Submission:',
          description:
            'We ensure that your applications are submitted on time, meeting all university deadlines.',
        },
        {
          icon: '/icons/abroad1.png',
          title: 'Scholarship Opportunities:',
          description:
            'We inform you about available scholarships and help you with the application process.',
        },
        {
          icon: '/icons/abroad2.png',
          title: 'Interview Preparation:',
          description:
            'If an interview is part of the application process, we provide interview preparation assistance.',
        },
      ],
    },
    faqs: [
      {
        title: 'How does GlobalScholar assist with student accommodation?',
        description:
          'GlobalScholar assists by presenting tailored accommodation options, handling the booking process, and providing ongoing support for a seamless transition.',
      },
      {
        title: 'What types of accommodation do you offer assistance with?',
        description:
          'We assist with a variety of options, including university dormitories, private apartments, and homestays, tailored to your preferences and budget.',
      },
      {
        title:
          "Is it mandatory to use GlobalScholar's Accommodation Assistance service?",
        description:
          "It's not mandatory, but many students find value in our service for its convenience and expertise in navigating the accommodation process.",
      },
      {
        title:
          'How can I get in touch with the Accommodation Assistance team at GlobalScholar?',
        description:
          "You can contact us through the contact form on our website or by calling our helpline. We're here to address your queries and guide you through the process.",
      },
      {
        title:
          'Is there an additional cost for using the Accommodation Assistance service?',
        description:
          'No, our Accommodation Assistance service is part of our commitment to supporting students, and there are no additional fees for using this service.',
      },
      {
        title: 'Can I change my accommodation choice after booking?',
        description:
          'Changes may be possible, subject to availability and provider policies. Please discuss any changes with our team as early as possible.',
      },
    ],
  },
};

export const PrivacyPolicy = [
  {
    title: 'Introduction',
    description: [
      'At Global Scholar, we are dedicated to protecting the privacy of our users. This policy is crafted to ensure the secure handling of your personal data in compliance with relevant regulations and legislation, such as the UK General Data Protection Regulations 2018 (the "Data Protection Regulations").',
      'This policy applies when we act as a data controller for the personal data of our website visitors and service users. In such cases, we determine the purposes and methods of processing your personal data.',
      'By using our website, you agree to the terms of this policy.',
      'This privacy document outlines the data we may collect, how we use it, and provides options to limit information publication and manage direct marketing communications.',
      'In this policy, "we," "us," and "our" refer to Edvoy Educational Services Limited. Additional details about us can be found in section 9 of this Privacy Policy.',
      'We reserve the right to update and make changes to this Privacy Policy periodically. Please check regularly to stay informed about any changes, which will be effective from the date of posting.',
    ],
  },
  {
    title: 'How we use your personal data',
    description: [
      {
        text: 'In this section, we specify:',
        list: [
          '(a) General categories of personal data we may process.',
          '(b) Purposes for processing personal data.',
          '(c) Legal basis for processing in each case.',
        ],
      },
      {
        text: 'We may obtain personal data from you:',
        list: [
          '(a) During registration on our website or mobile app.',
          '(b) Through conversations with our counselors or experts.',
          '(c) Via phone, email, WhatsApp, or text messages.',
        ],
      },
      'We may process usage data about your website and service interactions, including IP address, geographical location, browser details, and navigation patterns. The legal basis for this processing is either your consent or, where consent is not required, our legitimate interests in monitoring and improving our website and services.',
      'Account data, including personal details, qualifications, passport information, and photographs, may be processed for the purpose of providing services, maintaining website security, and communicating with you. Legal basis for this processing is either your consent or our legitimate interests.',
      'Transaction data related to purchases of goods and services will be processed for the purpose of supplying goods/services and maintaining transaction records. The legal basis is the performance of a contract and our legitimate interests.',
      'Administrative processing of personal data for the exercise or defense of legal claims is based on our legitimate interests.',
      'If you provide personal data of others, ensure you have the authority and comply with obligations under Data Protection Regulations.',
    ],
  },
  {
    title: 'Data Types and Details of Data Collected',
    table: [
      {
        type: 'Personal Identity data',
        details:
          'Name, Passport, Nationality, Date of Birth, Gender, Country & City of Residence, Student signature',
      },
      {
        type: 'Contact data',
        details: 'Email Address, Mobile Number',
      },
      {
        type: 'Academic Qualifications',
        details:
          'Educational certificates, Date of Birth, Gender, Country & City of Residence, Student signature',
      },
      {
        type: 'Work Experience (Profile data)',
        details:
          'Experience Certificate, Employer Details, Job Title, Country, City, Total Experience, Job Description',
      },
      {
        type: 'Letter of Recommendation (Personal Reference data)',
        details: 'Referee Details',
      },
      {
        type: 'Other Documents',
        details: 'Personal Statement, CV (Curriculum Vitae)',
      },
      {
        type: 'Technical data',
        details: 'IP address, login data, browser details, device information',
      },
      {
        type: 'Usage data',
        details: 'Information on website, product, and service usage',
      },
    ],
  },
  {
    title: 'Providing your personal data to others',
    description: [
      'We may disclose your personal data to our group companies, insurers, professional advisers, credit reference agencies, payment services providers, and IT service providers. Such disclosures are necessary for the purposes outlined in this policy.',
      'In case of business sale, your data may be passed to the purchaser, ensuring post-sale contact.',
      ' We may disclose personal data to comply with legal obligations or protect legal interests.',
    ],
  },
  {
    title: 'International transfers of your personal data',
    description: [
      'This section outlines circumstances in which personal data may be transferred outside the European Economic Area (EEA).',
      'Your data may be transferred to our subsidiary companies or hosted by Amazon Web Services (AWS) outside the EU. GDPR protections will be ensured in these cases.',
      'Other transfers outside the EEA will only occur if adequate safeguards are in place.',
    ],
  },
  {
    title: 'Retaining and deleting personal data',
    description: [
      'This section sets out our data retention policies, ensuring compliance with legal obligations.',
      'Personal data will not be retained beyond the necessary duration, typically not exceeding 6 years post-business relationship termination.',
    ],
  },
  {
    title: 'Amendments',
    description: [
      'We may update this policy periodically. Please check for changes, which will be effective upon posting.',
      "We may notify you of changes via email or our website's private messaging system.",
    ],
  },
  {
    title: 'Your rights',
    description: [
      'This section summarizes your rights under data protection law.',
      'Key rights include access, rectification, erasure, processing restriction, objection, data portability, complaint to a supervisory authority, and withdrawal of consent.',
      'You have the right to access your personal data and additional information.',
      'Inaccurate personal data can be rectified, and incomplete data can be completed.',
      'The right to erasure applies in specific circumstances, subject to exclusions.',
      'Processing restrictions apply in certain situations, allowing us to store data for specific purposes.',
      'You can object to processing based on specific grounds.',
      'Objecting to processing for direct marketing purposes is allowed.',
      'Objection to processing for research purposes is possible in certain situations.',
      'The right to data portability applies in specific cases.',
      'If processing is based on consent or contractual necessity, you can receive your data in a machine-readable format.',
      'If you believe our processing infringes data protection laws, you have the right to complain to a supervisory authority.',
      'Withdrawal of consent does not affect prior lawfulness of processing.',
      'You can request access to your personal information with appropriate identity evidence.',
    ],
  },
  {
    title: 'Your rights',
    description: [
      'Global Scholar is owned and operated by Edvoy Educational Services Limited.',
      'Registered office: 9 Portland Street, Manchester M1 3BE, England.',
      {
        text: 'Contact us:',
        list: [
          '(a) By post: 9 Portland Street, Manchester M1 3BE, England',
          '(b) By email: info@globalscholar.co.uk',
        ],
      },
    ],
  },
];

export const TermsCondition = [
  {
    title: 'Introduction',
    description: [
      'Welcome to the Global Scholars Ltd website at www.globalscholar.co.uk (the “Website”). By accessing and using this Website, you agree to comply with and be bound by the following terms and conditions of use (“Terms”). If you do not agree with any part of these Terms, please refrain from using our Website.',
      'The Website is owned and operated by Global Scholars Ltd, a company registered in England with company number 12152939, and its registered office address at 9 Portland Street, Manchester M1 3BE, England (“Global Scholars,” “we,” or “us”).',
      'The term “you” refers to the user or viewer of our Website, and “your” will be construed accordingly.',
    ],
  },
  {
    title: 'Use of this Website',
    description: [
      'To make use of any products or services from our Website, you must be over 16 years of age. Unless otherwise specified, Global Scholars Ltd owns the intellectual property rights in the Website and its content. All intellectual property rights are reserved, subject to the license detailed below.',
      'You may view, download, and print Website pages, but you must not use the Website in a way that causes damage or impairs its availability. Unlawful, fraudulent, or harmful activities are strictly prohibited.',
      'Access to certain areas of the Website may be restricted at our discretion. If provided with a user ID and password, you must keep them confidential. We may disable your account without notice if we believe you are misusing the Website.',
    ],
  },
  {
    title:
      'Products and Services Offered through the Website and Your Right to Cancel',
    description: [
      'We may offer products and services on the Website, subject to updates or changes. Details and costs are available on the Website.',
      'You warrant that all information provided to us is true and accurate. We reserve the right to terminate your membership if information is found to be inaccurate.',
      'If you order products or services from our Website as a consumer, you may cancel under the Consumer Contracts Regulations 2013, provided you notify us within 14 days of placing your order.',
      'To cancel, email info@globalscholar.co.uk with your request and specify the products or services you wish to cancel.',
    ],
  },
  {
    title: 'Copyright and License',
    description: [
      'Material on this Website is owned or licensed by Global Scholars Ltd and is protected by copyright. You must retain all copyright notices on any material.',
    ],
  },
  {
    title: 'User Content',
    description: [
      'The Website may feature comment or discussion forums for User Content. By submitting User Content, you grant us a worldwide, non-exclusive license to use, copy, and display the content.',
      'You are solely responsible for your User Content and must ensure it complies with these Terms.',
      'We do not endorse User Content and disclaim liability for its accuracy or content. Users may be exposed to objectionable content, and we are not responsible for such exposure.',
    ],
  },
  {
    title: 'No Warranties',
    description: [
      'The Website is provided “as is,” without warranties. We do not guarantee constant availability or accuracy of information. We disclaim liability for advertisements on the Website.',
    ],
  },
  {
    title: 'Limitations and Exclusions of Liability',
    description: [
      'Our liability is limited to specific circumstances outlined in these Terms. We are not liable for any indirect or special loss or damage. These limitations are reasonable, and if deemed unreasonable, refrain from using the Website.',
    ],
  },
  {
    title: 'Indemnity',
    description: [
      'You are fully responsible for any losses resulting from breaching these Terms. You agree to indemnify us against any losses, damages, costs, liabilities, and expenses arising from such breaches.',
    ],
  },
  {
    title: 'Other Websites',
    description: [
      'Links to other websites are provided for convenience only. We are not responsible for the content or reliability of linked websites.',
    ],
  },
  {
    title: 'Waiver',
    description: [
      'Failure to enforce any Terms does not constitute a waiver, and rights can be enforced at any time.',
    ],
  },
  {
    title: 'Severance',
    description: [
      'If any provision is found invalid or unenforceable, it does not affect the validity of other provisions.',
    ],
  },
  {
    title: 'Variation',
    description: [
      'We may revise these Terms, and the revised terms apply from the publication date. Please check regularly for updates.',
    ],
  },
  {
    title: 'Exclusion of Third-Party Rights',
    description: [
      'These Terms benefit you and us and are not enforceable by third parties.',
    ],
  },
  {
    title: 'Entire Agreement',
    description: [
      'These Terms constitute the entire agreement between you and us, superseding previous agreements.',
    ],
  },
  {
    title: 'Jurisdiction and Governing Law',
    description: [
      'These Terms are governed by English law, and any dispute shall be subject to the exclusive jurisdiction of English courts.',
    ],
  },
];

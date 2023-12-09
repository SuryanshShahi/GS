import Accordion from '@/shared/Accordion/Accordion';
import React from 'react';

const Faqs = () => {
  const FAQs = [
    {
      title: 'How much does it cost to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'Is it possible to study in the UK without IELTS score?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'Can one work part time while studying in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'What is the minimum  score required to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'What are the best courses to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'What are the Top universities to study in the UK?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
    {
      title: 'How long can one stay in the UK after studying?',
      description:
        'The fees for courses vary across different universities in the UK. The average cost of UG courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000- 80,000 (INR 12,00,000- 80,00,000).',
    },
  ];
  return (
    <div id='seventh' className='my-16'>
      <h4 className='text-[32px] font-semibold mb-4'>
        Frequently Asked Questions
      </h4>
      <Accordion
        data={FAQs?.map((item) => ({
          title: item.title,
          description: item?.description,
        }))}
      />
    </div>
  );
};

export default Faqs;
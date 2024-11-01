'use client';


import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

const CE_CardGrid5Main = ({
  cards,
}: {
  cards: {
    title: string;
    category: string;
    date: string;
    image: string;
    description: string;
    button: {
      text: string;
      link: string;
      external: boolean;
    };
  }[];
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <>
      <div className="container py-10">
        <div className='flex flex-wrap -mx-10'>
          {cards.map((card, index) => (
            <>
              <Link href={card.button.link} extern={card.button.external} className='w-1/3 mdmax:w-full flex-none px-10 mb-10'>
                <div key={index} >
                  <div className='w-full h-[20rem] rounded-xl overflow-hidden mb-5'>
                    {card.image && (
                      <Image
                        extern={true}
                        src={card.image}
                        alt="image"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-bottom"
                      />
                    )}
                  </div>
                  <div>
                    <div className='text-xs text-black text-opacity-50'>
                      {card.category} | {formatDate(card.date)}
                    </div>
                    <div className='text-privatecolor text-xl mb-5'>{card.title}</div>
                    <div>{parseHTMLToReact(card.description)}</div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid5Main;

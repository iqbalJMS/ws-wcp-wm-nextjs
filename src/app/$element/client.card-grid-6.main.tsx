'use client';


import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

const CE_CardGrid6Main = ({
  cards,
}: {
  cards: {
    title: string;
    image: string;
    description: string;
    button: {
      text: string;
      link: string;
      external: boolean;
    };
  }[];
}) => {
  
  return (
    <>
      <div className="container py-10">
        <div className='flex flex-wrap -mx-10'>
          {cards.map((card, index) => (
            <>
              <div  className='w-1/3 mdmax:w-full flex-none px-10 mb-10'>
                <div key={index} className='bg-white shadow-xl'>
                  <div className='w-full h-[20rem]  overflow-hidden mb-2'>
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
                  <div className='p-5'>
                    
                    <div className='text-privatecolor text-xl mb-2'>{card.title}</div>
                    <div className='mb-5'>{parseHTMLToReact(card.description)}</div>
                    <div>
                      <Link className='text-privatecolor uppercase text-sm inline-flex items-center justify-center gap-2' href={card.button.link} extern={card.button.external}>
                        {card.button.text}
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid6Main;

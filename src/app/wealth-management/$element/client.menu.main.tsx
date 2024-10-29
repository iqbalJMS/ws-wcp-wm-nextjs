import Link from '@/lib/element/global/link';

export default function CE_MenuMain() {
  const menus = [
    {
      title: 'Get Invited',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 11v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V11M3 11V9m0 2h18M3 9v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V9M3 9h18M7 15h4m10-4V9"
          />
        </svg>
      ),
      link: 'https://www.google.com',
    },
    {
      title: 'Outlet',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            fill="currentColor"
            d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
          />
        </svg>
      ),
      link: 'https://www.google.com',
    },
  ];
  return (
    <div className="fixed top-[20%] right-0">
      <div>
        {menus.map((menu, _) => {
          return (
            <div key={_} className="">
              <Link href={menu.link} extern={false}>
                <div className="flex items-center bg-[#444444] p-3 px-5 border-b-2 border-white transform translate-x-[6rem] hover:translate-x-0 cursor-pointer transition-all ease-in-out duration-100">
                  <div className="text-white w-5 h-5 mr-5">{menu.icon}</div>
                  <div className="text-white text-sm">{menu.title}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

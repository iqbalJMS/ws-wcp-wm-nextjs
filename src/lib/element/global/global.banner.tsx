// const LIST_IMAGE_BG = [
//   {
//     id: 0,
//     imgUrl:
//       'https://i.pinimg.com/564x/d4/b9/f5/d4b9f5e496dafa4fe2138980446f3dd1.jpg',
//     label: 'Helping You Get Where You Want to be',
//     text: 'We are the one stop financial solutions for the advancement your business',
//   },
//   {
//     id: 1,
//     imgUrl:
//       'https://i.pinimg.com/564x/d4/b9/f5/d4b9f5e496dafa4fe2138980446f3dd1.jpg',
//     label: 'Helping You Get Where You Want to be',
//     text: 'We are the one stop financial solutions for the advancement your business',
//   },
//   {
//     id: 2,
//     imgUrl:
//       'https://i.pinimg.com/564x/d4/b9/f5/d4b9f5e496dafa4fe2138980446f3dd1.jpg',
//     label: 'Helping You Get Where You Want to be',
//     text: 'We are the one stop financial solutions for the advancement your business',
//   },
// ];
export function GlobalBanner() {
  return (
    <main className="w-full h-screen">
      <section></section>
      <section
        className="w-full h-screen flex flex-col justify-center "
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/d4/b9/f5/d4b9f5e496dafa4fe2138980446f3dd1.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white">
          <h1 className="font-semibold text-4xl">
            Helping You Get Where You Want to be
          </h1>
          <p className="">
            We are the one stop financial solutions for the advancement your
            business
          </p>
        </div>
      </section>
    </main>
  );
}

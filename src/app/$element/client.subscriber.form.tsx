export default function CE_SubscriberForm() {
  return (
    <div className="md:flex relative md:w-[42%] w-full">
      <div
        style={{
          backgroundImage: `url(${'/images/subscriber/mail.png'})`,
          backgroundSize: 'cover',
        }}
        className="bg-no-repeat md:w-20 md:h-36 w-11 h-20 absolute mdmax:right-0 mdmax:-top-24 md:-mt-8"
      ></div>
      <form action="" className="w-full">
        <div className="flex items-start md:pl-28">
          <div className="flex-auto mdmax:w-24 w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan alamat email"
              className="w-full h-12 px-4 mb-4 bg-[#f59a22]/30 placeholder:text-orange-01 placeholder:font-light placeholder:text-sm"
            />
            <div className="flex items-center gap-4 text-xs text-gray-500 font-light">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="promo"
                  id="promo"
                  className="w-4 h-4 checked:accent-orange-01"
                />
                <label htmlFor="promo">Promo</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="berita"
                  id="berita"
                  className="w-4 h-4 rounded-lg checked:accent-orange-01"
                />
                <label htmlFor="berita">Berita</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="produk"
                  id="produk"
                  className="w-4 h-4 rounded-lg checked:accent-orange-01"
                />
                <label htmlFor="produk">Produk</label>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <button
              type="submit"
              className="bg-[#f59a22] uppercase text-white h-12 px-4 text-sm"
            >
              Berlangganan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

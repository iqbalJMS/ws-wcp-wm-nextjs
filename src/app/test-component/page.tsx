import CE_FormGetInvited from './$element/client.form-invited';
import CE_GridVariant05 from '@/app/(views)/$element/grid/client.grid.variant05';

export default async function PageTester() {
  return (
    <>
      <CE_FormGetInvited
        title="Hubungi saya"
        desc="Beri tahu kami tentang permintaan Anda agar kami bisa mendapatkan penasihat yang tepat untuk Anda."
      />
      <div className="py-10">
        <CE_GridVariant05
          imageContent="/sites/default/files/images/Screenshot%202024-07-31%20165958.png"
          title="Joumpa Airport VIP Service"
          desc="
          <p>
            Nikmati layanan kemudahan di bandara
          </p>
          <ul>
            <li>Fast track assistance</li>
            <li>Meet and greet</li>
            <li>Private lounge access</li>
            <li>Personalized services</li>
            <li>Baggage handling</li>
          </ul>
          "
          textLink="Learn More"
        />
      </div>
      <div className="py-10">
        <CE_GridVariant05
          imageContent="/sites/default/files/images/Screenshot%202024-07-31%20165958.png"
          title="Flower, Gift, Cake Order & Delivery"
          desc={`
            <p>Layanan pemesanan dan pengantaran bunga, hadiah, maupun cake
melalui BRI Prioritas bagi nasabah BRI Prioritas yang ingin memberikan
persembahan spesial kepada relasi atau keluarga.</p>
          <table align="center" border="1"
  cellpadding="1"
  cellspacing="1"
  style="width:500px;"
>
  <tbody>
    <tr>
      <td>Merchant</td>
      <td>Type</td>
      <td>Contact</td>
    </tr>
    <tr>
      <td>Exquise</td>
      <td>Cake / Hampers</td>
      <td>
        <p>0819 3216 6277</p>
      </td>
    </tr>
    <tr>
      <td>Anjani Florist</td>
      <td>Florist</td>
      <td>
        <p>0822 1389 8993</p>
      </td>
    </tr>
    <tr>
      <td>Pand'or</td>
      <td>Cake / Hampers</td>
      <td>
        <p>29305852 /53</p>
      </td>
    </tr>
    <tr>
      <td>Nyonya Indo</td>
      <td>Fashion Batik</td>
      <td>
        <p>0812 2722 7100</p>
      </td>
    </tr>
  </tbody>
</table>
          `}
          variantLayout="image-right"
        />
      </div>
    </>
  );
}

'use server';

import React from 'react';

import { CE_ContentGridMain } from '@/app/$element/client.content-grid.main';
import CE_WYSIWSGVariant01 from '@/app/$element/client.wysiwsg.variant01';
import CE_WYSIWSGVariant02 from '@/app/$element/client.wysiwsg.variant02';
import CE_DetailCardMain from '@/app/$element/client.detail-card.main';
import CE_PortletMain from '@/app/$element/client.portlet.main';
import CE_CardGrid5Main from '@/app/$element/client.card-grid-5.main';
import CE_CardGrid6Main from '@/app/$element/client.card-grid-6.main';

// import ScrollToTop from '@/lib/element/global/scroll.top';
// import { T_CarouselMainProps } from '@/app/$action/constants';
// import CE_BannerMain from '@/app/$element/client.banner.main';
// import SE_IconMain from '@/app/$element/server.icon.main';
// import { CE_CarouselMain } from '@/app/$element/client.carousel.main';
// import { CE_ContentMain } from '@/app/$element/client.content.main';
// import { CE_CardVariant01 } from '@/app/$element/client.card.variant01';
// import { CE_CardVariant02 } from '@/app/$element/client.card.variant02';
// import { CE_CardVariant03 } from '@/app/$element/client.card.variant03';
// import { CE_CardVariant04 } from '@/app/$element/client.card.variant04';
// import { CE_CardVariant05 } from '@/app/$element/client.card.variant05';
// import { CE_CardVariant06 } from '@/app/$element/client.card.variant06';
// import { CE_CardVariant07 } from '@/app/$element/client.card.variant07';
// import { CE_CardVariant08 } from '@/app/$element/client.card.variant08';
// import { CE_CardVariant09 } from '@/app/$element/client.card.variant09';
// import { CE_CardVariant10 } from '@/app/$element/client.card.variant10';
// import { CE_CardVariant11 } from '@/app/$element/client.card.variant11';
// import { CE_CardVariant12 } from '@/app/$element/client.card.variant12';
// import { CE_CardVariant13 } from '@/app/$element/client.card.variant13';
// import { CE_CardVariant14 } from '@/app/$element/client.card.variant14';
// import { CE_CardVariant15 } from '@/app/$element/client.card.variant15';

// import SE_PortletMain from '@/app/aether/$element/portlet/server.portlet.main';
// import Accordion from '@/lib/element/global/accordion';
// import Image from '@/lib/element/global/image';

export default async function PageTester() {
  return (
    <>
      <CE_ContentGridMain
        data={[
          {
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            title: 'Lorem Ipsum',
            image: '/sites/default/files/images/1073-860x640.jpg',
          },
          {
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            title: 'Lorem Ipsum',
          },
        ]}
      />
      <CE_WYSIWSGVariant01
        body="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
        category="Lorem Ipsum"
        date="2022-01-01"
        image="/sites/default/files/images/1073-860x640.jpg"
        title="Lorem Ipsum"
      />
      <CE_WYSIWSGVariant02
        body="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
        category="Lorem Ipsum"
        date="2022-01-01"
        title="Lorem Ipsum"
      />
      <CE_DetailCardMain
        card={{
          button: {
            external: true,
            link: 'https://bri.co.id',
            text: 'Selengkapnya',
          },
          category: 'Lorem Ipsum',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
          image: '/sites/default/files/images/1073-860x640.jpg',
          title: 'Lorem Ipsum',
        }}
        tnc={{
          details: [
            {
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
              title: 'Lorem Ipsum',
            },
            {
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
              title: 'Lorem Ipsum',
            },
          ],
          title: 'Lorem Ipsum',
        }}
      />
      <CE_PortletMain
        button={{
          external: true,
          link: 'https://bri.co.id',
          text: 'Selengkapnya',
        }}
        description="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>"
        image="/sites/default/files/images/1073-860x640.jpg"
        title="Lorem Ipsum"
      />
      <CE_CardGrid5Main
        cards={[
          {
            button: {
              external: true,
              link: 'https://bri.co.id',
              text: 'Selengkapnya',
            },
            category: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            date: '2022-01-01',
          },
          {
            button: {
              external: true,
              link: 'https://bri.co.id',
              text: 'Selengkapnya',
            },
            category: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            date: '2022-01-01',
          },
        ]}
      />
      <CE_CardGrid6Main
        cards={[
          {
            button: {
              external: true,
              link: 'https://bri.co.id',
              text: 'Selengkapnya',
            },
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
          },
          {
            button: {
              external: true,
              link: 'https://bri.co.id',
              text: 'Selengkapnya',
            },
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
          },
        ]}
      />
    </>
    // <React.Fragment>
    //   <CE_BannerMain
    //     variant="01"
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //     ]}
    //   />
    //   <CE_BannerMain
    //     variant="02"
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //     ]}
    //   />
    //   <CE_BannerMain
    //     variant="03"
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //     ]}
    //   />
    //   <CE_BannerMain
    //     variant="04"
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Banner slider 1',
    //         desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
    //         button: '',
    //       },
    //     ]}
    //   />
    //   <SE_IconMain cookiesName="__personlized-menu" />
    //   <CE_CarouselMain variant="01" data={dataDummy} title="Keuntungan" />

    //   <CE_CarouselMain
    //     variant="02"
    //     data={dataDummy}
    //     title="Promosi Baru KPR BRI"
    //     button={{
    //       link: 'https://bri.co.id',
    //       name: 'Temukan Promosi Lainnya',
    //     }}
    //   />
    //   <CE_CarouselMain variant="03" data={dataDummy} title="Keuntungan" />
    //   <CE_CarouselMain
    //     variant="04"
    //     data={dataDummy}
    //     title="Keuntungan"
    //     description="Keuntungan Description"
    //     button={{
    //       link: 'https://bri.co.id',
    //       name: 'Lainnya',
    //     }}
    //   />
    //   <CE_CarouselMain
    //     variant="05"
    //     data={dataDummy}
    //     title="Keuntungan"
    //     description="Keuntungan Description"
    //     button={{
    //       link: 'https://bri.co.id',
    //       name: 'Lainnya',
    //     }}
    //   />
    //   <CE_ContentMain variant="01" data={dataDummy} title="Title" />
    //   <CE_ContentMain variant="02" data={dataDummy} />
    //   <CE_ContentMain variant="03" data={dataDummy} />
    //   <CE_CardVariant01
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         buttons: [
    //           {
    //             link: 'https://bri.co.id',
    //             title: 'Selengkapnya',
    //             extern: true,
    //           },
    //           {
    //             link: 'https://bri.co.id',
    //             title: 'Selengkapnya',
    //             extern: true,
    //           },
    //         ],
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         buttons: [
    //           {
    //             link: 'https://bri.co.id',
    //             title: 'Selengkapnya',
    //             extern: true,
    //           },
    //         ],
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant02
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         description: 'Lorem Ipsum the contera ascentdant kornoy',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         description: 'Lorem Ipsum the contera ascentdant kornoy',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         description: 'Lorem Ipsum the contera ascentdant kornoy',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant03
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         buttons: [
    //           {
    //             link: 'https://bri.co.id',
    //             title: 'Selengkapnya',
    //             extern: true,
    //           },
    //           {
    //             link: 'https://bri.co.id',
    //             title: 'Selengkapnya',
    //             extern: true,
    //           },
    //         ],
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         buttons: [
    //           {
    //             link: 'https://bri.co.id',
    //             title: 'Selengkapnya',
    //             extern: true,
    //           },
    //         ],
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant04
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //         subDescription:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         button: {
    //           link: 'https://bri.co.id',
    //           image: '/sites/default/files/images/1073-860x640.jpg',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //         subDescription:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         button: {
    //           link: 'https://bri.co.id',
    //           image: '/sites/default/files/images/1073-860x640.jpg',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //         subDescription:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         button: {
    //           link: 'https://bri.co.id',
    //           image: '/sites/default/files/images/1073-860x640.jpg',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //         subDescription:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         button: {
    //           link: 'https://bri.co.id',
    //           image: '/sites/default/files/images/1073-860x640.jpg',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant05
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant06
    //     title="Lorem Ipsum"
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant07
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem Ipsum is simply dummy',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem Ipsum is simply dummy',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem Ipsum is simply dummy',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant08
    //     title="Lorem Ipsum"
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant09
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',

    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         button: {
    //           image: '/sites/default/files/images/1073-860x640.jpg',
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',

    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         button: {
    //           image: '/sites/default/files/images/1073-860x640.jpg',
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',

    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         button: {
    //           image: '/sites/default/files/images/1073-860x640.jpg',
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant10
    //     title="Lorem Ipsum"
    //     description="Lorem Ipsum is simply dummy text of the printing"
    //   />
    //   <CE_CardVariant11
    //     title="Lorem Ipsum"
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         description: 'Lorem Ipsum is simply dummy text of the printing',
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         description: 'Lorem Ipsum is simply dummy text of the printing',
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         description: 'Lorem Ipsum is simply dummy text of the printing',
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant12
    //     data={[
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         description: 'Lorem Ipsum the contera ascentdant kornoy',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         description: 'Lorem Ipsum the contera ascentdant kornoy',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         title: 'Lorem Ipsum',
    //         description: 'Lorem Ipsum the contera ascentdant kornoy',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant13
    //     title="Lorem Ipsum"
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         description: 'Lorem Ipsum is simply dummy text of the printing',
    //         address: '',
    //         contactInformation: {
    //           fax: '123',
    //           telephone: '123',
    //           website: 'https://bri.co.id',
    //         },
    //         subTitle: 'BRI SE',
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         description: 'Lorem Ipsum is simply dummy text of the printing',
    //         address: '',
    //         contactInformation: {
    //           fax: '123',
    //           telephone: '123',
    //           website: 'https://bri.co.id',
    //         },
    //         subTitle: 'BRI SE',
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant14
    //     data={[
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem Ipsum is simply dummy',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem Ipsum is simply dummy',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //       {
    //         title: 'Lorem Ipsum',
    //         subTitle: 'Lorem Ipsum is simply dummy',
    //         description:
    //           'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //         button: {
    //           link: 'https://bri.co.id',
    //           title: 'Selengkapnya',
    //           extern: true,
    //         },
    //       },
    //     ]}
    //   />
    //   <CE_CardVariant15
    //     title={'Lorem Ipsum'}
    //     button={{
    //       link: 'https://bri.co.id',
    //       title: 'Selengkapnya',
    //       extern: true,
    //     }}
    //     data={[
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //       { image: '/sites/default/files/images/1073-860x640.jpg' },
    //     ]}
    //   />
    //   <SE_PortletMain
    //     variant="03"
    //     headerAlignment="left"
    //     imageContentAlignment="right"
    //     // title="Yo"
    //     listItems={[
    //       {
    //         text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, omnis illo consectetur expedita similique voluptates adipisci iste modi corporis quod vitae ut ex non eum minus eos nemo repellat dolorem magni error repudiandae. Maxime animi accusantium voluptates sit ad voluptatibus, ex aliquid molestias aspernatur consequatur consectetur accusamus temporibus culpa adipisci.</p>',
    //         description: 'test',
    //         title: 'test',
    //         image: '/sites/default/files/images/1073-860x640.jpg',
    //       },
    //     ]}
    //     bgImage="/sites/default/files/images/whybanking.jpg"
    //     imageContent="/sites/default/files/images/promo-carousel-01.jpeg"
    //     // imageTitle="/sites/default/files/images/1073-860x640.jpg"
    //   />
    //   <div className="py-4 container">
    //     <Accordion
    //       renderTitle={
    //         <p className="text-l-bold text-left font-medium leading-8">
    //           Laporan
    //         </p>
    //       }
    //       isOpen
    //       renderContent={
    //         <CE_CardVariant11
    //           title="Lorem Ipsum"
    //           data={[
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //           ]}
    //         />
    //       }
    //     />
    //   </div>
    //   <div className="py-4">
    //     <Accordion
    //       variant="full"
    //       renderTitle={
    //         <p className="text-l-bold text-left font-medium leading-8">
    //           Laporan
    //         </p>
    //       }
    //       isOpen
    //       renderContent={
    //         <CE_CardVariant11
    //           title="Lorem Ipsum"
    //           data={[
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //           ]}
    //         />
    //       }
    //     />
    //   </div>
    //   <div className="py-4 container">
    //     <Accordion
    //       variant="rounded"
    //       renderTitle={
    //         <>
    //           <div className="flex items-center gap-2">
    //             <Image
    //               src="/sites/default/files/images/1073-860x640.jpg"
    //               width={40}
    //               height={40}
    //               alt="image"
    //               extern={true}
    //               className="rounded-md"
    //             />
    //             <p className="text-xl-semibold text-left leading-8">Laporan</p>
    //           </div>
    //         </>
    //       }
    //       isOpen
    //       renderContent={
    //         <CE_CardVariant11
    //           title="Lorem Ipsum"
    //           data={[
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //             {
    //               title: 'Lorem Ipsum',
    //               image: '/sites/default/files/images/1073-860x640.jpg',
    //               description:
    //                 'Lorem Ipsum is simply dummy text of the printing',
    //             },
    //           ]}
    //         />
    //       }
    //     />
    //   </div>
    //   <ScrollToTop />
    // </React.Fragment>
  );
}

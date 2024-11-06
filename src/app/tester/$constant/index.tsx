import dynamic from 'next/dynamic';
import { T_Slider } from './types/widget/slider';
import { T_ComponentMapWidget, T_Widget } from './types';
import { T_DropdownAction } from './types/widget/dropdown-action';
import { T_Section } from './types/widget/section';
import { T_Subscription } from './types/widget/subscription';
import { T_ImageSlider } from './types/widget/image-slider';
import { T_MultiTab } from './types/widget/multi_tab';
import { T_Header } from './types/widget/header';
// {--------------}
import { T_Carousel } from './types/widget/carousel';
import { T_CardVariant02 } from './types/widget/card-variant2';
import { T_CardVariant04 } from './types/widget/card-variant4';
import { T_CardVariant05 } from './types/widget/card-variant5';
import { T_CardVariant06 } from './types/widget/card-variant6';
import { T_CardVariant03 } from './types/widget/card-variant3';

const SE_SubscriberContent = dynamic(
  () => import('@/app/$element/server.subscriber.content')
);

const SE_PortletMain = dynamic(
  () => import('@/app/(views)/$element/portlet/server.portlet.main')
);

const SE_IconMain = dynamic(() => import('@/app/$element/server.icon.main'));

const CE_ImageSliderMain = dynamic(
  () => import('@/app/$element/client.image-slider.main')
);

const CE_HelpContent = dynamic(
  () => import('@/app/$element/client.help.content')
);

const CE_SectionPromo = dynamic(
  () => import('@/app/(views)/$element/promo/client.section-promo')
);

// {---------start-------------}
const CE_BannerMain = dynamic(
  () => import('@/app/(views)/$element/banner/client.banner.main')
);

const CE_CarouselVariant3 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant03')
);

const CE_CardVariant2 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant2')
);

const CE_CardVariant4 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant4')
);

const CE_CardVariant5 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant5')
);
const CE_CardVariant6 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant6')
);
const CE_CardVariant3 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant3')
);

// {-----------end--------------}

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  slider: {
    component: CE_BannerMain,
    props: (_component: T_Slider) => {
      return {
        data: _component?.field_slider_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            title: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            button: item?.field_primary_cta[0]?.title,
          };
        }),
      };
    },
  },
  // {---------start--------------}
  // {Carousel Variant 3}
  carousel: {
    component: CE_CarouselVariant3,
    props: (_component: T_Carousel) => {
      return {
        data: _component?.field_carousel_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            title: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            link: item?.field_primary_cta[0]?.title,
          };
        }),
      };
    },
  },
  // {Card Variant 2}
  card2: {
    component: CE_CardVariant2,
    props: (_component: T_CardVariant02) => {
      return {
        data: _component?.field_card_items?.map((item) => {
          return {
            icon: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            label: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
          };
        }),
      };
    },
  },

  // {Card Variant 4}
  card4: {
    component: CE_CardVariant4,
    props: (_component: T_CardVariant04) => {
      return {
        data: _component?.field_card_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            logo: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            desc: item?.field_content?.[0]?.value,
            link: item?.field_primary_cta[0]?.title,
          };
        }),
      };
    },
  },

  // {Card Variant 5}
  card5: {
    component: CE_CardVariant5,
    props: (_component: T_CardVariant05) => {
      return {
        data: _component?.field_card_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            label: item?.field_title?.[0]?.value,
            icon: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            link: item?.field_primary_cta[0]?.title,
          };
        }),
      };
    },
  },

  // {Card Variant 6}
  card6: {
    component: CE_CardVariant6,
    props: (_component: T_CardVariant06) => {
      return {
        data: _component?.field_card_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            label: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            link: item?.field_primary_cta[0]?.title,
            buttonText: item?.field_title?.[0]?.value,
          };
        }),
      };
    },
  },

  // {Card Variant 3}
  card3: {
    component: CE_CardVariant3,
    props: (_component: T_CardVariant03) => {
      return {
        data: _component?.field_card_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            label: item?.field_title?.[0]?.value,
            textbutton: item?.field_content?.[0]?.value,
            link: item?.field_primary_cta[0]?.title,
          };
        }),
      };
    },
  },

  // {---------end----------}
  dropdown_action: {
    component: CE_HelpContent,
    props: (_component: T_DropdownAction) => {
      return {
        title: _component?.field_title[0]?.value,
        listItems: _component?.field_menu_list[0]?.field_links.map((item) => {
          return {
            title: item?.title,
            value: item?.uri,
          };
        }),
      };
    },
  },
  personalized_shortcut: {
    component: SE_IconMain,
    props: (_component) => {
      return {};
    },
  },
  section: {
    component: SE_PortletMain,
    props: (_component: T_Section) => {
      return {
        title: _component?.field_formatted_title[0]?.value,
        subtitle: _component?.field_content[0]?.value,
        listItems: _component?.field_column?.map((item) => {
          return {
            image: item?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
            text: item?.field_content[0]?.value,
          };
        }),
        textLink: _component?.field_primary_cta[0]?.title,
        navigationLink: _component?.field_primary_cta[0]?.uri,
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
        variant: '01',
      };
    },
  },
  subscription: {
    component: SE_SubscriberContent,
    props: (_component: T_Subscription) => {
      return {
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
        description: _component?.field_content[0]?.value,
      };
    },
  },
  image_slider: {
    component: CE_ImageSliderMain,
    props: (_component: T_ImageSlider) => {
      return {
        title: _component?.field_title[0]?.value,
        data: _component.field_image_slider_items?.map((item) => {
          return {
            link: item?.field_primary_cta[0]?.uri,
            image: item?.field_image[0].field_media_image[0]?.uri[0]?.url,
          };
        }),
      };
    },
  },
  header: {
    component: SE_PortletMain,
    props: (_component: T_Header) => {
      return {
        title: _component?.field_title[0]?.value,
        subtitle: _component?.field_content[0]?.value,
        buttonItems: _component?.field_primary_cta?.map((item) => {
          return {
            buttonText: item?.title,
            buttonLink: item?.uri,
          };
        }),
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
        variant: '02',
      };
    },
  },
  multi_tab: {
    component: CE_SectionPromo,
    props: (_component: T_MultiTab) => {
      return {
        title: _component?.field_title_custom[0]?.value,
        listTab: _component?.field_tab?.map((item) => {
          return {
            group: {
              title: item.field_title[0].value,
              informationText:
                item.field_paragraphs[0].field_title_custom[0].value,
              showMore: {
                title: item.field_primary_cta[0].title,
                url: item.field_primary_cta[0].full_url,
              },
            },
            contents: item.field_paragraphs[0]?.field_carousel_items?.map(
              (items) => {
                return {
                  img: items.field_image[0].field_media_image[0].uri[0].url,
                  title: items.field_title[0].value,
                  date: items.field_simple_text[0].value,
                  href: items.field_primary_cta[0].full_url,
                  description: items.field_content[0]?.value,
                };
              }
            ),
          };
        }),
      };
    },
  },
  two_column: {
    component: () => <></>,
    props: (_component) => {
      return {};
    },
  },
};

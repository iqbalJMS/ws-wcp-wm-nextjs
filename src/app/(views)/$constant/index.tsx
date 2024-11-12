import dynamic from 'next/dynamic';
import { T_Slider } from './types/widget/slider';
import { T_ComponentMapWidget, T_Widget } from './types';
import { T_DropdownAction } from './types/widget/dropdown-action';
import { T_Subscription } from './types/widget/subscription';
import { T_ImageSlider } from './types/widget/image-slider';
import { T_MultiTab } from './types/widget/multi_tab';
import { T_Header } from './types/widget/header';
// {--------------}
import { WIDGET_VARIANT } from './variables';
import { T_VideoSlider } from './types/widget/video-slider';
import { T_CardVariant04 } from './types/widget/card-variant4';
import { T_CardVariant05 } from './types/widget/card-variant5';
import { T_CardVariant06 } from './types/widget/card-variant6';
import { T_CardVariant03 } from './types/widget/card-variant3';
import { T_Section } from './types/widget/section';

const SE_SubscriberContent = dynamic(
  () => import('@/app/$element/server.subscriber.content')
);

const SE_PortletMain = dynamic(
  () => import('@/app/(views)/$element/portlet/server.portlet.main')
);

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

const CE_CardVariant5 = dynamic(
  () => import('@/app//(views)/$element/card/client.card.variant5')
);
// --------------------
const CE_CardVariant4 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant4')
);

const CE_CardVariant6 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant6')
);
const CE_CardVariant3 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant3')
);

// {-----------end--------------}

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  // {---------start--------------}
  slider: {
    component: (...props) => {
      const findVariantStyle = props?.[0]?.variant;
      const data = props?.[0]?.data;
      switch (findVariantStyle) {
        case 'header_curved':
        default:
          return <CE_BannerMain variant="02" data={data} />;
      }
    },
    props: (_component: T_Slider) => {
      const findVariantStyle = _component?.field_slider_variant?.[0]?.value;
      const data = _component?.field_slider_items?.map((item) => {
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url;
        const title = item?.field_title?.[0]?.value;
        const description = item?.field_content?.[0]?.value;
        const button = item?.field_primary_cta[0]?.title;

        return {
          image: image,
          title: title,
          desc: description,
          button: button,
        };
      });

      switch (findVariantStyle) {
        case 'header_curved':
        default:
          return {
            variant: findVariantStyle,
            data: data,
          };
      }
    },
  },

  // {Carousel Variant 3}
  video_slider: {
    component: CE_CarouselVariant3,
    props: (_component: T_VideoSlider) => {
      return {
        data: _component?.field_video_items?.map((item) => {
          return {
            id: item?.id?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri[0]?.url,
            alt: item?.field_image?.[0]?.thumbnail?.[0]?.filename?.value,
            label: item?.field_video?.[0]?.name?.[0]?.value,
            desc: item?.field_title?.[0]?.value,
            video: item?.field_video?.[0]?.field_media_oembed_video?.[0]?.value,
            labelVideo: item?.field_video?.[0]?.name?.[0]?.value,
            subLabel: item?.field_title?.[0]?.value,
          };
        }),
        title: _component?.field_title[0]?.value,
        subtitle: _component?.field_subtitle[0]?.value,
        titlelink: _component?.field_primary_cta?.[0]?.title,
        linkcta: _component?.field_primary_cta?.[0]?.full_url,
      };
    },
  },

  section: {
    component: (...props) => {
      const findVariantStyle = props?.[0]?.variant;
      const title = props?.[0]?.title;
      const subtitle = props?.[0]?.subtitle;
      const desctitle = props?.[0]?.desctitle;
      const data = props?.[0]?.data;
      const label = props?.[0]?.label;
      const sublabel = props?.[0]?.sublabel;
      const image = props?.[0]?.image;
      const desc = props?.[0]?.desc;
      const link = props?.[0]?.link;
      const backGround = props?.[0]?.backGround;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant01:
          return (
            <CE_CardVariant2
              title={title}
              subtitle={subtitle}
              desctitle={desctitle}
              data={data}
            />
          );
        case WIDGET_VARIANT.variant02:
          return (
            <CE_CardVariant5 data={data} label={label} sublabel={sublabel} />
          );
        case WIDGET_VARIANT.variant03:
          return <CE_CardVariant4 data={data} />;
        case WIDGET_VARIANT.variant04:
          return (
            <CE_CardVariant6
              image={image}
              label={label}
              desc={desc}
              link={null}
              backGround={backGround}
            />
          );
        default:
          return <></>;
      }
    },
    props: (_component: T_Section) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;

      const subtitle = _component?.field_formatted_title?.[0]?.value;
      const title = _component?.field_column?.[0]?.field_content?.[0]?.value;
      const desctitle =
        _component?.field_column?.[1]?.field_content?.[0]?.value;
      const label = _component?.field_formatted_title?.[0]?.value;
      const sublabel = _component?.field_content?.[0]?.value;

      const dataCard = _component?.field_column?.[2]?.field_column?.map(
        (item) => {
          return {
            iconcard: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            labelcard: item?.field_title?.[0]?.value,
            desccard: item?.field_content?.[0]?.value,
          };
        }
      );

      const dataProduk = _component?.field_column?.map((item) => {
        return {
          image: item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
          title: item?.field_title?.[0]?.value,
          link: item?.field_image?.[0]?.path?.[0]?.alias,
        };
      });

      const dataCardVariant4 = _component?.field_column.map((item) => {
        return {
          image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          label: item?.field_content?.[0]?.value,
          link: item?.field_primary_cta?.[0]?.uri,
          logo: item?.field_second_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
        };
      });

      const dataImageCardV6 =
        _component?.field_column?.[0]?.field_image?.[0]?.thumbnail?.[0]
          ?.uri?.[0]?.url;
      const dataLabelCardV6 =
        _component?.field_column?.[1]?.field_title?.[0]?.value;
      const dataDescCardV6 =
        _component?.field_column?.[1]?.field_content?.[0]?.value;
      const dataLinkCardV6 =
        _component?.field_column?.[0]?.field_image?.[0]?.path?.[0]?.alias;
      const dataBgCardV6 =
        _component?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant01:
          return {
            variant: findVariantStyle,
            title: title,
            subtitle: subtitle,
            desctitle: desctitle,
            data: dataCard,
          };
        case WIDGET_VARIANT.variant02:
          return {
            variant: findVariantStyle,
            label: label,
            sublabel: sublabel,
            data: dataProduk,
          };
        case WIDGET_VARIANT.variant03:
          return {
            variant: findVariantStyle,
            data: dataCardVariant4,
          };
        case WIDGET_VARIANT.variant04:
          return {
            variant: findVariantStyle,
            image: dataImageCardV6,
            label: dataLabelCardV6,
            desc: dataDescCardV6,
            link: dataLinkCardV6,
            backGround: dataBgCardV6,
          };
        default:
          return {
            title: null,
            subtitle: null,
            desctitle: null,
            data: null,
          };
      }
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
    component: SE_PortletMain,
    props: (_component) => {
      return {};
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

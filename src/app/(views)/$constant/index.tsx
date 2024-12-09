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
import { T_Breadcrumb } from './types/widget/breadcrumb';
import { T_OurStory } from './types/widget/our-story';
import { T_CarouselV2 } from './types/widget/carouselV2';
import { T_TwoColumn } from './types/widget/two-column';
import { T_Insight } from './types/widget/content_type';
import { T_ExternalMagazine } from './types/widget/external_magazine';

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

const CE_BannerMain = dynamic(
  () => import('@/app/(views)/$element/banner/client.banner.main')
);

const CE_CarouselMain = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.main')
);

const CE_CardVariant2 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant2')
);

const CE_CardVariant5 = dynamic(
  () => import('@/app//(views)/$element/card/client.card.variant5')
);

const CE_CardVariant2Private = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant2.private')
);

const CE_BreadcrumbMain = dynamic(
  () => import('@/app/(views)/$element/breadcrumb/client.breadcrumb.main')
);

const CE_CardVariant12 = dynamic(
  () => import('@/app/(views)/$element/card/card-variant12')
);

const CE_CarouselVariant2 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant2')
);
const CE_CardVariant4 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant4')
);

const CE_CardVariant6 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant6')
);
const CE_CardVariant3 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant3')
);

const CE_GridVariant02 = dynamic(
  () => import('@/app/(views)/$element/grid/client.grid.variant02')
);

const CE_CardVariant16 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant16')
);

const CE_GridVariant04 = dynamic(
  () => import('@/app/(views)/$element/grid/client.grid.variant04')
);

const CE_CardGrid5Main = dynamic(
  () => import('@/app/(views)/$element/grid/client.card-grid-5.main')
);

const CE_CardGrid6Main = dynamic(
  () => import('@/app/(views)/$element/grid/client.card-grid-6.main')
);

const CE_CardGrid7Main = dynamic(
  () => import('@/app/(views)/$element/grid/client.card-grid-7.main')
);

const CE_CardVariant2Prioritas = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant2.prioritas')
);

const CE_CardFlipMain = dynamic(
  () => import('@/app/(views)/$element/card-flip/card-flip-main')
);

const CE_CardMagazineMain = dynamic(
  () => import('@/app/(views)/$element/card-magazine/card.magazine.main')
);

export const COMPONENT_MAP_WIDGET = (key: T_Widget, theme: string): any => {
  const components: Record<T_Widget, T_ComponentMapWidget> = {
    slider: {
      component: (...props) => {
        const findVariantStyle = props?.[0]?.variant;
        const data = props?.[0]?.data;
        switch (findVariantStyle) {
          case 'header_curved':
          default:
            return <CE_BannerMain variant={theme} data={data} />;
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

    video_slider: {
      component: (...props) => {
        const findVariantStyle = props?.[0]?.variant;
        const data = props?.[0]?.data;
        const title = props?.[0]?.title;
        const subtitle = props?.[0]?.subtitle;
        const titlelink = props?.[0]?.titlelink;
        const linkcta = props?.[0]?.linkcta;

        switch (findVariantStyle) {
          case 'carousel_video_01':
          default:
            return (
              <CE_CarouselMain
                variant={theme}
                data={data}
                title={title}
                subtitle={subtitle}
                titlelink={titlelink}
                linkcta={linkcta}
              />
            );
        }
      },

      props: (_component: T_VideoSlider) => {
        const findVariantStyle =
          _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
        const title = _component?.field_title[0]?.value;
        const subtitle = _component?.field_subtitle[0]?.value;
        const titlelink = _component?.field_primary_cta?.[0]?.title;
        const linkcta = _component?.field_primary_cta?.[0]?.uri;

        const dataCarousel = _component?.field_video_items?.map((item) => {
          const id = item?.id?.[0]?.value;
          const image = item?.field_image?.[0]?.thumbnail?.[0]?.uri[0]?.url;
          const alt = item?.field_image?.[0]?.thumbnail?.[0]?.filename?.value;
          const label = item?.field_video?.[0]?.name?.[0]?.value;
          const desc = item?.field_title?.[0]?.value;
          const video =
            item?.field_video?.[0]?.field_media_oembed_video?.[0]?.value;
          const labelVideo = item?.field_video?.[0]?.name?.[0]?.value;
          const subLabel = item?.field_title?.[0]?.value;

          return {
            image: image,
            id: id,
            alt: alt,
            label: label,
            desc: desc,
            video: video,
            labelVideo: labelVideo,
            subLabel: subLabel,
          };
        });

        switch (findVariantStyle) {
          case 'carousel_video_01':
          default:
            return {
              variant: findVariantStyle,
              data: dataCarousel,
              title: title,
              subtitle: subtitle,
              titlelink: titlelink,
              linkcta: linkcta,
            };
        }
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
        const bgImage = props?.[0]?.bgImage;
        const buttonText = props?.[0]?.buttonText;
        const subTitle = props?.[0]?.subTitle;

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
            return <CE_CardVariant4 data={data} title={title} />;
          case WIDGET_VARIANT.variant04:
            return (
              <CE_CardVariant6
                image={image}
                label={label}
                desc={desc}
                link={link}
                backGround={backGround}
              />
            );
          case WIDGET_VARIANT.variant05:
            return (
              <CE_CardFlipMain
                data={data}
                topTitle={title}
                subTitle={subTitle}
                buttonText={buttonText}
                buttonUri={link}
                variant={theme}
              />
            );
          case WIDGET_VARIANT.variant07:
            return (
              <CE_CardVariant2Private
                data={data}
                bgImage={bgImage}
                title={title}
                variant={theme}
              />
            );
          case WIDGET_VARIANT.variant08:
            return (
              <CE_CardVariant16 title={title} subTitle={subTitle} data={data} />
            );
          case WIDGET_VARIANT.variant09:
            return (
              <CE_GridVariant04 title={title} data={data} bgImage={bgImage} />
            );
          case WIDGET_VARIANT.variant13:
            return (
              <CE_CardVariant2Prioritas
                data={data}
                bgImage={bgImage}
                title={title}
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
            image:
              item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
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
        const titleCardVariant4 = _component?.field_formatted_title?.[0]?.value;

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

        const dataCardVariant15 = _component?.field_column?.map((item) => {
          return {
            title: item?.field_title?.[0]?.value,
            subtitle: item?.field_subtitle?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            frontImage: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            backImage:
              item?.field_second_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          };
        });
        const topTitle = _component?.field_formatted_title?.[0]?.value;
        const subTitle = _component?.field_content?.[0]?.value;
        const buttonText = _component?.field_primary_cta?.[0]?.title;
        const buttonUri = _component?.field_primary_cta?.[0]?.uri;

        const bgImageCardV2 =
          _component?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;
        const titleCardV2 = _component?.field_formatted_title?.[0]?.value;
        const dataCardV2 = _component?.field_column?.map((item) => {
          return {
            label: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            icon: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          };
        });

        const titleCardV16 = _component?.field_formatted_title?.[0]?.value;
        const subTitleCardV16 = _component?.field_content?.[0]?.value;
        const dataCardV16 = _component?.field_column?.map((item) => {
          return {
            uuid: item?.uuid?.[0]?.value,
            label: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            linkCta: item?.field_primary_cta?.[0]?.full_url,
          };
        });

        const titleCardGridV4 = _component?.field_formatted_title?.[0]?.value;
        const bgImageCardGridV4 =
          _component?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;
        const dataItemCardGridV4 =
          _component?.field_column?.[0]?.field_paragraphs?.map((item) => {
            return {
              image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              desc: item?.field_title?.[0]?.value,
            };
          });

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
              title: titleCardVariant4,
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
          case WIDGET_VARIANT.variant05:
            return {
              variant: findVariantStyle,
              data: dataCardVariant15,
              title: topTitle,
              subTitle: subTitle,
              buttonText: buttonText,
              buttonUri: buttonUri,
            };
          case WIDGET_VARIANT.variant07:
            return {
              variant: findVariantStyle,
              data: dataCardV2,
              title: titleCardV2,
              bgImage: bgImageCardV2,
            };
          case WIDGET_VARIANT.variant08:
            return {
              variant: findVariantStyle,
              data: dataCardV16,
              title: titleCardV16,
              subTitle: subTitleCardV16,
            };
          case WIDGET_VARIANT.variant09:
            return {
              variant: findVariantStyle,
              title: titleCardGridV4,
              bgImage: bgImageCardGridV4,
              data: dataItemCardGridV4,
            };
          case WIDGET_VARIANT.variant13:
            return {
              variant: findVariantStyle,
              data: dataCardV2,
              title: titleCardV2,
              bgImage: bgImageCardV2,
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

    breadcrumb: {
      component: (...props) => {
        const findVariantStyle = props?.[0]?.variant;
        const data = props?.[0]?.data;

        switch (findVariantStyle) {
          case 'breadcrumb':
          default:
            return <CE_BreadcrumbMain variant={theme} data={data} />;
        }
      },
      props: (_component: T_Breadcrumb) => {
        const findVariantStyle = _component?.field_menu?.[0]?.target_id;
        const data = _component?.data.map((item) => {
          return {
            title: item?.title,
            url: item?.url,
          };
        });
        switch (findVariantStyle) {
          case 'breadcrumb':
          default:
            return {
              variant: findVariantStyle,
              data: data,
            };
        }
      },
    },

    our_story: {
      component: CE_CardVariant12,
      props: (_component: T_OurStory) => {
        return {
          data: _component?.field_our_story?.map((item) => {
            return {
              title: item?.title?.[0]?.value,
              desc: item?.field_text?.[0]?.value,
              image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              id: item?.uuid?.[0]?.value,
              nid: item?.nid?.[0]?.value,
            };
          }),
        };
      },
    },

    quote_slider: {
      component: CE_CarouselVariant2,
      props: (_component: T_CarouselV2) => {
        return {
          title: _component?.field_title?.[0]?.value,
          bgImage: _component?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          data: _component?.field_quote?.map((item) => {
            return {
              name: item?.field_title?.[0]?.value,
              subtitle: item?.field_subtitle?.[0]?.value,
              desc: item?.field_content?.[0]?.value,
              image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
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
              image:
                item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
              logo: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
              desc: item?.field_content?.[0]?.value,
              link: item?.field_primary_cta[0]?.full_url,
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
              image:
                item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
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
              image:
                item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
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
              image:
                item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
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
          bgImage:
            _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
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
          bgImage:
            _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
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
    external_magazine: {
      component: CE_CardMagazineMain,
      props: (_component: T_ExternalMagazine) => {
        return {
          variant: theme,
          title: _component?.field_title?.[0]?.value,
          label: _component?.field_content?.[0]?.value,
          linkMagezine: _component?.endpoint_path,
        };
      },
    },
    two_column: {
      component: CE_GridVariant02,
      props: (_component: T_TwoColumn) => {
        return {
          variant: theme,
          dataCard1: _component?.field_first_column?.map((item) => {
            return {
              textTitle: item?.field_title?.[0]?.value,
              textDesc: item?.field_content?.[0]?.value,
              listMenu:
                _component?.field_first_column?.[0]?.field_paragraphs?.map(
                  (item) => {
                    return {
                      urlLink: item?.field_primary_cta?.[0]?.uri,
                      image:
                        item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                          ?.url,
                      textLink: item?.field_title?.[0]?.value,
                    };
                  }
                ),
            };
          }),
          imageContent1:
            _component?.field_second_column?.[0]?.field_image?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url,

          dataCard2: _component?.field_second_column?.map((item) => {
            return {
              textTitle: item?.field_title?.[0]?.value,
              textDesc: item?.field_content?.[0]?.value,
              listMenu:
                _component?.field_second_column?.[0]?.field_paragraphs?.map(
                  (item) => {
                    return {
                      urlLink: item?.field_primary_cta?.[0]?.uri,
                      image:
                        item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                          ?.url,
                      textLink: item?.field_title?.[0]?.value,
                    };
                  }
                ),
            };
          }),
          imageContent2:
            _component?.field_first_column?.[0]?.field_image?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url,
        };
      },
    },
    content_type: {
      component: (...props) => {
        const findEntityBundle = props?.[0]?.entity;
        const data = props?.[0]?.data;

        switch (findEntityBundle) {
          case WIDGET_VARIANT.variant10:
            return <CE_CardGrid5Main dataCard={data} />;
          case WIDGET_VARIANT.variant12:
            return <CE_CardGrid6Main dataCard={data} />;
          case WIDGET_VARIANT.variant11:
            return <CE_CardGrid7Main dataCard={data} />;

          default:
            return <></>;
        }
      },
      props: (_component: T_Insight) => {
        const findEntityBundle =
          _component?.field_content_type?.[0]?.type?.[0]?.type;
        const dataGridV5 = _component?.field_content_type?.map((item) => {
          return {
            title: item?.title?.[0]?.value,
            date: item?.created?.[0]?.value,
            category: item?.field_items?.[0]?.field_title?.[0]?.value,
            description: item?.field_summary?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            nid: item?.nid?.[0]?.value,
          };
        });

        const dataGridV6 = _component?.field_content_type?.map((item) => {
          return {
            title: item?.title?.[0]?.value,
            description: item?.field_summary?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            nid: item?.nid?.[0]?.value,
          };
        });
        const dataGridV7 = _component?.field_content_type.map((item) => {
          return {
            title: item?.title?.[0]?.value,
            date: item?.created?.[0]?.value,
            category: item?.field_article_category?.[0]?.name?.[0]?.value,
            description: item?.body?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            nid: item?.nid?.[0]?.value,
          };
        });

        switch (findEntityBundle) {
          case WIDGET_VARIANT.variant10:
            return {
              entity: findEntityBundle,
              data: dataGridV5,
            };
          case WIDGET_VARIANT.variant12:
            return {
              entity: findEntityBundle,
              data: dataGridV6,
            };
          case WIDGET_VARIANT.variant11:
            return {
              entity: findEntityBundle,
              data: dataGridV7,
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
  };
  return components[key];
};

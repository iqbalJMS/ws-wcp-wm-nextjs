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
import { T_RequirementBox } from './types/widget/requirement-box';
import { T_RichText } from './types/widget/rich-text';

const SE_SubscriberContent = dynamic(
  () => import('@/app/$element/server.subscriber.content')
);

const CE_PortletHeader = dynamic(
  () => import('@/app/(views)/$element/portlet/client.portlet.header')
);

const CE_PortletVariant02 = dynamic(
  () => import('@/app/(views)/$element/portlet/client.portlet.variant')
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

const CE_Travel = dynamic(
  () => import('@/app/(views)/$element/card/client.card.travel')
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

const CE_CardVariant8Upper = dynamic(
  () => import('@/app/(views)/$element/grid/client.card-grid-8-upper')
);

const CE_CardVariant8Deeper = dynamic(
  () => import('@/app/(views)/$element/grid/client.card-grid-8-deeper')
);

const CE_CardVariant2Detail = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant2.detail')
);

const CE_VideosCard = dynamic(
  () => import('@/app/(views)/$element/card/client.video.card')
);
const CE_CardGrid9 = dynamic(
  () => import('@/app/(views)/$element/grid/client.card-grid-9')
);

const CE_RequirementBox = dynamic(
  () => import('@/app/(views)/$element/requirement-box/client.requirement.box')
);

const CE_Terms = dynamic(
  () => import('@/app/(views)/$element/terms/client.terms')
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
              <CE_CardVariant5
                dataCard={data}
                label={label}
                sublabel={sublabel}
              />
            );
          case WIDGET_VARIANT.variant03:
            return <CE_CardVariant4 data={data} title={title} />;
          case WIDGET_VARIANT.variant04:
            return (
              <CE_CardVariant6
                image={image}
                label={label}
                desc={desc}
                linkCta={link}
                backGround={bgImage}
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
          case WIDGET_VARIANT.variant17:
            return (
              <CE_CardVariant2Detail
                data={data}
                bgImage={bgImage}
                title={title}
              />
            );
          case WIDGET_VARIANT.variant18:
            return <CE_VideosCard data={data} variant={theme} />;

          case WIDGET_VARIANT.variant19:
            return <CE_CardGrid9 dataCard={data} />;

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

        const dataProduk = _component?.field_column.map((item) => {
          return {
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            title: item?.field_title?.[0]?.value,
            linkCta: item?.field_primary_cta?.[0]?.full_url.replace('/id', ''),
          };
        });

        const dataCardVariant4 = _component?.field_column.map((item) => {
          return {
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            label: item?.field_content?.[0]?.value,
            link: item?.field_primary_cta?.[0]?.full_url.replace('/id', ''),
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
          _component?.field_column?.[1]?.field_primary_cta?.[0]?.full_url.replace(
            '/id',
            ''
          );
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
        const buttonUri = _component?.field_primary_cta?.[0]?.full_url;

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

        const videoCardData = _component?.field_column?.map((item) => {
          return {
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            title: item?.field_title?.[0]?.value,
            date: item?.field_content?.[0]?.value,
            link: item?.field_primary_cta?.[0]?.full_url,
          };
        });

        const cardGrid9data = _component?.field_column?.map((item) => {
          return {
            title: item?.field_title?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            description: item?.field_content?.[0]?.value,
            uuid: item?.uuid?.[0]?.value,
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
              data: dataProduk,
              sublabel: sublabel,
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
              bgImage: dataBgCardV6,
            };
          case WIDGET_VARIANT.variant05:
            return {
              variant: findVariantStyle,
              data: dataCardVariant15,
              title: topTitle,
              subTitle: subTitle,
              buttonText: buttonText,
              link: buttonUri,
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
          case WIDGET_VARIANT.variant17:
            return {
              variant: findVariantStyle,
              data: dataCardV2,
              title: titleCardV2,
              bgImage: bgImageCardV2,
            };
          case WIDGET_VARIANT.variant18:
            return {
              variant: findVariantStyle,
              data: videoCardData,
            };
          case WIDGET_VARIANT.variant19:
            return {
              variant: findVariantStyle,
              data: cardGrid9data,
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
      component: CE_PortletVariant02,
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
      component: (...props) => {
        const findVariantStyle = props?.[0]?.variant;
        const titleProps = props?.[0]?.titleProps;
        const subtitleProps = props?.[0]?.subtitleProps;
        const buttonTextProps = props?.[0]?.buttonTextProps;
        const buttonLinkProps = props?.[0]?.buttonLinkProps;
        const bgImageProps = props?.[0]?.bgImageProps;

        switch (findVariantStyle) {
          case 'div_portlet_01':
            return (
              <CE_PortletVariant02
                title={titleProps}
                subtitle={subtitleProps}
                bgImage={bgImageProps}
                variant={theme}
                buttonText={buttonTextProps}
                buttonLink={buttonLinkProps}
              />
            );

          default:
            return (
              <CE_PortletHeader
                title={titleProps}
                bgImage={bgImageProps}
                subTitle={subtitleProps}
              />
            );
        }
      },
      props: (_component: T_Header) => {
        const findVariantStyle =
          _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
        const title = _component?.field_title[0]?.value;
        const subtitle = _component?.field_content[0]?.value;
        const buttonLink = _component?.field_primary_cta?.[0]?.uri;
        const buttonText = _component?.field_primary_cta?.[0]?.title;
        const bgImage =
          _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url;

        switch (findVariantStyle) {
          case 'div_portlet_01':
            return {
              titleProps: title,
              subtitleProps: subtitle,
              buttonTextProps: buttonText,
              buttonLinkProps: buttonLink,
              bgImageProps: bgImage,
              variant: findVariantStyle,
            };
          default:
            return {
              titleProps: title,
              bgImageProps: bgImage,
              variant: findVariantStyle,
              subtitleProps: subtitle,
            };
        }
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
      component: (...props) => {
        const findVariantStyle = props?.[0]?.variant;
        const data1 = props?.[0]?.data1;
        const data2 = props?.[0]?.data2;
        const dataCard1 = props?.[0]?.dataCard1;
        const dataCard2 = props?.[0]?.dataCard2;
        const imgContent1 = props?.[0]?.imgContent1;
        const imgContent2 = props?.[0]?.imgContent2;
        const firstColumn = props?.[0]?.firstColumn;
        const secondColumn = props?.[0]?.secondColumn;

        switch (findVariantStyle) {
          case WIDGET_VARIANT.variant14:
            return (
              <CE_CardVariant8Upper firstColumn={data1} secondColumn={data2} />
            );
          case WIDGET_VARIANT.variant15:
            return (
              <CE_CardVariant8Deeper firstColumn={data1} secondColumn={data2} />
            );
          case WIDGET_VARIANT.variant16:
            return (
              <CE_GridVariant02
                variant={theme}
                dataCard1={dataCard1}
                dataCard2={dataCard2}
                imageContent1={imgContent1}
                imageContent2={imgContent2}
              />
            );
          case WIDGET_VARIANT.variant21:
            return (
              <CE_Travel
                firstColumnProps={firstColumn}
                secondColumnProps={secondColumn}
              />
            );
          default:
            return <></>;
        }
      },
      props: (_component: T_TwoColumn) => {
        const findVariantStyle =
          _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
        const gridData1 = _component?.field_first_column?.map((item) => {
          return {
            title: item?.field_title?.[0]?.value,
            link: item?.field_primary_cta?.[0]?.full_url,
            titleLink: item?.field_primary_cta?.[0]?.title,
            desc: item?.field_content?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          };
        });

        const gridData2 = _component?.field_second_column?.map((item) => {
          return {
            title: item?.field_title?.[0]?.value,
            link: item?.field_primary_cta?.[0]?.full_url,
            titleLink: item?.field_primary_cta?.[0]?.title,
            desc: item?.field_content?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          };
        });
        const dataCard1 = _component?.field_first_column?.map((item) => {
          return {
            textTitle: item?.field_title?.[0]?.value,
            textDesc: item?.field_content?.[0]?.value,
            listMenu:
              _component?.field_first_column?.[0]?.field_paragraphs?.map(
                (item) => {
                  return {
                    urlLink: item?.field_primary_cta?.[0]?.full_url,
                    image:
                      item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                        ?.url,
                    textLink: item?.field_title?.[0]?.value,
                  };
                }
              ),
          };
        });
        const imageContent2 =
          _component?.field_first_column?.[0]?.field_image?.[0]?.thumbnail?.[0]
            ?.uri?.[0]?.url;

        const imageContent1 =
          _component?.field_second_column?.[0]?.field_image?.[0]
            ?.field_media_image?.[0]?.uri?.[0]?.url;
        const dataCard2 = _component?.field_second_column?.map((item) => {
          return {
            textTitle: item?.field_title?.[0]?.value,
            textDesc: item?.field_content?.[0]?.value,
            listMenu:
              _component?.field_second_column?.[0]?.field_paragraphs?.map(
                (item) => {
                  return {
                    urlLink: item?.field_primary_cta?.[0]?.full_url,
                    image:
                      item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                        ?.url,
                    textLink: item?.field_title?.[0]?.value,
                  };
                }
              ),
          };
        });

        const firstColumnData = _component?.field_first_column?.map((item) => {
          return {
            title: item?.field_content?.[0]?.value,
          };
        });

        const secondColumnData = _component?.field_second_column?.map(
          (item) => {
            return {
              image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            };
          }
        );

        switch (findVariantStyle) {
          case WIDGET_VARIANT.variant14:
            return {
              variant: findVariantStyle,
              data1: gridData1,
              data2: gridData2,
            };
          case WIDGET_VARIANT.variant15:
            return {
              variant: findVariantStyle,
              data1: gridData1,
              data2: gridData2,
            };
          case WIDGET_VARIANT.variant16:
            return {
              variant: findVariantStyle,
              dataCard1: dataCard1,
              dataCard2: dataCard2,
              imgContent1: imageContent1,
              imgContent2: imageContent2,
            };
          case WIDGET_VARIANT.variant21:
            return {
              variant: findVariantStyle,
              firstColumn: firstColumnData,
              secondColumn: secondColumnData,
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
    content_type: {
      component: (...props) => {
        const findEntityBundle = props?.[0]?.entity;
        const data = props?.[0]?.data;

        switch (findEntityBundle) {
          case WIDGET_VARIANT.variant10:
            return <CE_CardGrid5Main dataCard={data} variant={theme} />;
          case WIDGET_VARIANT.variant12:
            return <CE_CardGrid6Main dataCard={data} variant={theme} />;
          case WIDGET_VARIANT.variant11:
            return <CE_CardGrid7Main dataCard={data} variant={theme} />;

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
    requirement_box: {
      component: CE_RequirementBox,
      props: (_component: T_RequirementBox) => {
        return {
          variant: theme,
          data: _component?.field_requirement_items?.map((item) => {
            return {
              label: item?.field_label?.[0]?.value,
              title: item?.field_value?.[0]?.value,
            };
          }),
        };
      },
    },
    rich_text: {
      component: CE_Terms,
      props: (_component: T_RichText) => {
        return {
          desc: _component?.field_content?.[0]?.value,
        };
      },
    },
  };
  return components[key];
};

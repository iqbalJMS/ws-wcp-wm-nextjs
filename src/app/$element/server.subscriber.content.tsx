import { parseHTMLToReact } from "@/lib/functions/global/htmlParser";
import CE_SubscriberForm from "./client.subscriber.form";

type T_SubscriberContentProps = {
  bgImage?: string;
  description?: string;
};

export default function SE_SubscriberContent({
  bgImage,
  description,
}: T_SubscriberContentProps) {
  const backgroundImg = bgImage
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage}`
    : "";
  return (
    <section className="py-24">
      <div className="container md:flex items-center">
        <div className="relative md:h-96 h-72 md:w-[60%] w-full">
          <div
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: "cover",
            }}
            className="bg-no-repeat w-full h-full absolute mdmax:-left-12 z-[2]"
          />
          <div className="absolute top-1/3 md:ml-56 ml-28 mt-4 md:text-3xl text-xl md:pr-16">
            {parseHTMLToReact(description ?? "")}
          </div>
        </div>
        <CE_SubscriberForm />
      </div>
    </section>
  );
}

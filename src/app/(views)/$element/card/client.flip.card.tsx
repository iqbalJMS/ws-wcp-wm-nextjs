'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import creditcard from '@/../../public/images/dummy/cardCredit.png';
import creditcard2 from '@/../../public/images/dummy/cardCredit2.png';
import Image from 'next/image';

export default function CE_FlipCard() {
  const [flip, setFlip] = useState(true);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="flip-card w-[600px] h-[360px] flex justify-center"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="flip-card-inner hidden md:flex w-[70%] h-[70%] md:w-[90%] md:h-[90%]"
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 180 : 360 }}
          onMouseEnter={() => setFlip(true)}
          onMouseLeave={() => setFlip(false)}
        >
          <div className="flip-card-front w-full h-full bg-cover cursor-pointer">
            <Image
              src={creditcard}
              alt="card credit image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flip-card-back w-full h-full bg-cover cursor-pointer">
            <Image
              src={creditcard2}
              alt="card credit image"
              width={1000}
              height={1000}
            />
          </div>
        </motion.div>

        {/* Mobile */}
        <div className="flip-card-inner relative md:hidden w-[70%] h-[70%] md:w-[90%] md:h-[90%]">
          <div className="flip-card-transition group z-10 w-full h-full bg-cover cursor-pointer hover:z-0">
            <Image
              src={creditcard}
              alt="card credit image"
              width={1000}
              height={1000}
              className=""
            />
          </div>
          <div className="flip-card-transition w-full h-full bg-cover cursor-pointer z-0 hover:z-10">
            <Image
              src={creditcard2}
              alt="card credit image"
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//   "entity_type": [
//     {
//       "value": "node"
//     }
//   ],
//   "entity_bundle": [
//     {
//       "value": "page"
//     }
//   ],
//   "nid": [
//     {
//       "value": 106
//     }
//   ],
//   "uuid": [
//     {
//       "value": "8d68180a-03a8-4e35-a677-7a97d0d501bb"
//     }
//   ],
//   "vid": [
//     {
//       "value": 547
//     }
//   ],
//   "langcode": [
//     {
//       "value": "id"
//     }
//   ],
//   "type": [
//     {
//       "uuid": "15533131-aba4-488c-8095-70ede7849882",
//       "langcode": "en",
//       "status": true,
//       "dependencies": {
//         "module": [
//           "menu_ui"
//         ]
//       },
//       "third_party_settings": {
//         "menu_ui": {
//           "available_menus": [
//             "main"
//           ],
//           "parent": "main:"
//         }
//       },
//       "name": "Page",
//       "type": "page",
//       "description": null,
//       "help": null,
//       "new_revision": true,
//       "preview_mode": 1,
//       "display_submitted": true
//     }
//   ],
//   "revision_timestamp": [
//     {
//       "value": "2024-10-28T09:43:05+00:00",
//       "format": "Y-m-d\\TH:i:sP"
//     }
//   ],
//   "revision_uid": [
//     {
//       "target_id": 1,
//       "target_type": "user",
//       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//       "url": "/user/1"
//     }
//   ],
//   "status": [
//     {
//       "value": true
//     }
//   ],
//   "uid": [
//     {
//       "target_id": 1,
//       "target_type": "user",
//       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//       "url": "/user/1"
//     }
//   ],
//   "title": [
//     {
//       "value": "Home -id #WM"
//     }
//   ],
//   "created": [
//     {
//       "value": "2024-10-28T09:42:45+00:00",
//       "format": "Y-m-d\\TH:i:sP"
//     }
//   ],
//   "changed": [
//     {
//       "value": "2024-10-28T09:43:05+00:00",
//       "format": "Y-m-d\\TH:i:sP"
//     }
//   ],
//   "promote": [
//     {
//       "value": true
//     }
//   ],
//   "sticky": [
//     {
//       "value": false
//     }
//   ],
//   "default_langcode": [
//     {
//       "value": false
//     }
//   ],
//   "revision_translation_affected": [
//     {
//       "value": true
//     }
//   ],
//   "path": [
//     {
//       "alias": "/wealth-management",
//       "pid": 152,
//       "langcode": "id"
//     }
//   ],
//   "content_translation_source": [
//     {
//       "value": "en"
//     }
//   ],
//   "content_translation_outdated": [
//     {
//       "value": false
//     }
//   ],
//   "body": [],
//   "field_components": [
//     {
//       "entity_type": [
//         {
//           "value": "paragraph"
//         }
//       ],
//       "entity_bundle": [
//         {
//           "value": "slider"
//         }
//       ],
//       "id": [
//         {
//           "value": 707
//         }
//       ],
//       "uuid": [
//         {
//           "value": "11d25511-42cc-4038-96e6-95b8a9b1dc7a"
//         }
//       ],
//       "parent_id": [
//         {
//           "value": "106"
//         }
//       ],
//       "parent_type": [
//         {
//           "value": "node"
//         }
//       ],
//       "parent_field_name": [
//         {
//           "value": "field_components"
//         }
//       ],
//       "content_translation_source": [
//         {
//           "value": "en"
//         }
//       ],
//       "content_translation_outdated": [
//         {
//           "value": false
//         }
//       ],
//       "content_translation_changed": [
//         {
//           "value": "2024-10-23T08:26:17+00:00",
//           "format": "Y-m-d\\TH:i:sP"
//         }
//       ],
//       "field_slider_items": [
//         {
//           "entity_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "entity_bundle": [
//             {
//               "value": "slider_item"
//             }
//           ],
//           "id": [
//             {
//               "value": 704
//             }
//           ],
//           "uuid": [
//             {
//               "value": "6ba40a64-1ca8-4711-8b86-d9f9a18860c1"
//             }
//           ],
//           "parent_id": [
//             {
//               "value": "707"
//             }
//           ],
//           "parent_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "parent_field_name": [
//             {
//               "value": "field_slider_items"
//             }
//           ],
//           "content_translation_source": [
//             {
//               "value": "und"
//             }
//           ],
//           "content_translation_outdated": [
//             {
//               "value": false
//             }
//           ],
//           "content_translation_changed": [
//             {
//               "value": "2024-10-23T08:26:17+00:00",
//               "format": "Y-m-d\\TH:i:sP"
//             }
//           ],
//           "field_alignment": [
//             {
//               "value": "left"
//             }
//           ],
//           "field_content": [
//             {
//               "value": "\u003Cp\u003EWe are the one stop financial solution for the advancement of your business.\u003C/p\u003E",
//               "format": "custom_editor",
//               "processed": "\u003Cp\u003EWe are the one stop financial solution for the advancement of your business.\u003C/p\u003E"
//             }
//           ],
//           "field_image": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "image"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 247
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "f5eb9c96-954c-40a1-bc9f-3086139d7c7e"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 247
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "image",
//                   "target_type": "media_type",
//                   "target_uuid": "34844745-47ae-40a8-a0ca-a0ed6e5cb22f"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-23T08:18:40+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "carousel-home-1-resize.jpg"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 428
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "eb8e1edb-2851-4444-9579-0f41533149de"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "carousel-home-1-resize.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/carousel-home-1-resize.jpg",
//                       "url": "/sites/default/files/images/carousel-home-1-resize.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 512101
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-23T08:18:40+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-23T08:18:49+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ],
//               "created": [
//                 {
//                   "value": "2024-10-23T08:18:40+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "changed": [
//                 {
//                   "value": "2024-10-23T08:18:40+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "default_langcode": [
//                 {
//                   "value": true
//                 }
//               ],
//               "revision_translation_affected": [
//                 {
//                   "value": true
//                 }
//               ],
//               "path": [
//                 {
//                   "alias": null,
//                   "pid": null,
//                   "langcode": "en"
//                 }
//               ],
//               "field_media_image": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 428
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "eb8e1edb-2851-4444-9579-0f41533149de"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "carousel-home-1-resize.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/carousel-home-1-resize.jpg",
//                       "url": "/sites/default/files/images/carousel-home-1-resize.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 512101
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-23T08:18:40+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-23T08:18:49+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ],
//           "field_primary_cta": [],
//           "field_title": [
//             {
//               "value": "A New Perspective of Investment"
//             }
//           ]
//         },
//         {
//           "entity_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "entity_bundle": [
//             {
//               "value": "slider_item"
//             }
//           ],
//           "id": [
//             {
//               "value": 705
//             }
//           ],
//           "uuid": [
//             {
//               "value": "cc60ce4e-6b44-4816-8662-11b0b695d158"
//             }
//           ],
//           "parent_id": [
//             {
//               "value": "707"
//             }
//           ],
//           "parent_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "parent_field_name": [
//             {
//               "value": "field_slider_items"
//             }
//           ],
//           "content_translation_source": [
//             {
//               "value": "und"
//             }
//           ],
//           "content_translation_outdated": [
//             {
//               "value": false
//             }
//           ],
//           "content_translation_changed": [
//             {
//               "value": "2024-10-23T08:26:17+00:00",
//               "format": "Y-m-d\\TH:i:sP"
//             }
//           ],
//           "field_alignment": [
//             {
//               "value": "left"
//             }
//           ],
//           "field_content": [
//             {
//               "value": "\u003Cp\u003EWe have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.\u003C/p\u003E",
//               "format": "custom_editor",
//               "processed": "\u003Cp\u003EWe have just the right solutions for your financial goals. Our mission is to focus on the details, so you can focus on the big picture.\u003C/p\u003E"
//             }
//           ],
//           "field_image": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "image"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 248
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "fb33095e-8181-4a07-8cda-5d4f501834e4"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 248
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "image",
//                   "target_type": "media_type",
//                   "target_uuid": "34844745-47ae-40a8-a0ca-a0ed6e5cb22f"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-23T08:19:16+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "carousel-home-2-resize.jpg"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 429
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "bca53539-2fa1-47f8-92e3-b351b828fbe7"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "carousel-home-2-resize.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/carousel-home-2-resize.jpg",
//                       "url": "/sites/default/files/images/carousel-home-2-resize.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 441876
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-23T08:19:16+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-23T08:19:20+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ],
//               "created": [
//                 {
//                   "value": "2024-10-23T08:19:16+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "changed": [
//                 {
//                   "value": "2024-10-23T08:19:16+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "default_langcode": [
//                 {
//                   "value": true
//                 }
//               ],
//               "revision_translation_affected": [
//                 {
//                   "value": true
//                 }
//               ],
//               "path": [
//                 {
//                   "alias": null,
//                   "pid": null,
//                   "langcode": "en"
//                 }
//               ],
//               "field_media_image": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 429
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "bca53539-2fa1-47f8-92e3-b351b828fbe7"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "carousel-home-2-resize.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/carousel-home-2-resize.jpg",
//                       "url": "/sites/default/files/images/carousel-home-2-resize.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 441876
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-23T08:19:16+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-23T08:19:20+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ],
//           "field_primary_cta": [],
//           "field_title": [
//             {
//               "value": "Helping You Get Where You Want to be"
//             }
//           ]
//         },
//         {
//           "entity_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "entity_bundle": [
//             {
//               "value": "slider_item"
//             }
//           ],
//           "id": [
//             {
//               "value": 706
//             }
//           ],
//           "uuid": [
//             {
//               "value": "f62e2dea-6965-4f9d-9da2-ab0942955a5f"
//             }
//           ],
//           "parent_id": [
//             {
//               "value": "707"
//             }
//           ],
//           "parent_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "parent_field_name": [
//             {
//               "value": "field_slider_items"
//             }
//           ],
//           "content_translation_source": [
//             {
//               "value": "und"
//             }
//           ],
//           "content_translation_outdated": [
//             {
//               "value": false
//             }
//           ],
//           "content_translation_changed": [
//             {
//               "value": "2024-10-23T08:26:17+00:00",
//               "format": "Y-m-d\\TH:i:sP"
//             }
//           ],
//           "field_alignment": [
//             {
//               "value": "left"
//             }
//           ],
//           "field_content": [
//             {
//               "value": "\u003Cp\u003EAs lives are driven by values, we believe those values need to be passed on to the next generations. Let every value protected and shared as our legacy.\u003C/p\u003E",
//               "format": "custom_editor",
//               "processed": "\u003Cp\u003EAs lives are driven by values, we believe those values need to be passed on to the next generations. Let every value protected and shared as our legacy.\u003C/p\u003E"
//             }
//           ],
//           "field_image": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "image"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 249
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "201ce96e-b185-4897-a032-4ec3f28f9ac1"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 249
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "image",
//                   "target_type": "media_type",
//                   "target_uuid": "34844745-47ae-40a8-a0ca-a0ed6e5cb22f"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-23T08:21:00+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "carousel-home-3-resize.jpg"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 430
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "9647451f-5cc8-4cd8-bf70-ddadccee3052"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "carousel-home-3-resize.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/carousel-home-3-resize.jpg",
//                       "url": "/sites/default/files/images/carousel-home-3-resize.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 600878
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-23T08:21:00+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-23T08:21:05+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ],
//               "created": [
//                 {
//                   "value": "2024-10-23T08:21:00+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "changed": [
//                 {
//                   "value": "2024-10-23T08:21:00+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "default_langcode": [
//                 {
//                   "value": true
//                 }
//               ],
//               "revision_translation_affected": [
//                 {
//                   "value": true
//                 }
//               ],
//               "path": [
//                 {
//                   "alias": null,
//                   "pid": null,
//                   "langcode": "en"
//                 }
//               ],
//               "field_media_image": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 430
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "9647451f-5cc8-4cd8-bf70-ddadccee3052"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "carousel-home-3-resize.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/carousel-home-3-resize.jpg",
//                       "url": "/sites/default/files/images/carousel-home-3-resize.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 600878
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-23T08:21:00+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-23T08:21:05+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ],
//           "field_primary_cta": [],
//           "field_title": [
//             {
//               "value": "An Old Tradition for a New Generations"
//             }
//           ]
//         }
//       ],
//       "field_slider_variant": [
//         {
//           "value": "header_curved"
//         }
//       ]
//     },
//     {
//       "entity_type": [
//         {
//           "value": "paragraph"
//         }
//       ],
//       "entity_bundle": [
//         {
//           "value": "video_slider"
//         }
//       ],
//       "id": [
//         {
//           "value": 795
//         }
//       ],
//       "uuid": [
//         {
//           "value": "f821f06c-3d14-4667-8d05-12145409acac"
//         }
//       ],
//       "parent_id": [
//         {
//           "value": "106"
//         }
//       ],
//       "parent_type": [
//         {
//           "value": "node"
//         }
//       ],
//       "parent_field_name": [
//         {
//           "value": "field_components"
//         }
//       ],
//       "content_translation_source": [
//         {
//           "value": "en"
//         }
//       ],
//       "content_translation_outdated": [
//         {
//           "value": false
//         }
//       ],
//       "content_translation_changed": [
//         {
//           "value": "2024-10-28T07:09:40+00:00",
//           "format": "Y-m-d\\TH:i:sP"
//         }
//       ],
//       "field_primary_cta": [
//         {
//           "uri": "internal:#",
//           "full_url": "",
//           "title": "Lihat lainnya \u003E",
//           "options": []
//         }
//       ],
//       "field_subtitle": [
//         {
//           "value": "Daftar putar teratas minggu ini"
//         }
//       ],
//       "field_title": [
//         {
//           "value": "Video"
//         }
//       ],
//       "field_video_items": [
//         {
//           "entity_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "entity_bundle": [
//             {
//               "value": "video"
//             }
//           ],
//           "id": [
//             {
//               "value": 790
//             }
//           ],
//           "uuid": [
//             {
//               "value": "5ec461ca-b517-493e-ad46-22e83a6e6507"
//             }
//           ],
//           "parent_id": [
//             {
//               "value": "795"
//             }
//           ],
//           "parent_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "parent_field_name": [
//             {
//               "value": "field_video_items"
//             }
//           ],
//           "content_translation_source": [
//             {
//               "value": "und"
//             }
//           ],
//           "content_translation_outdated": [
//             {
//               "value": false
//             }
//           ],
//           "content_translation_changed": [
//             {
//               "value": "2024-10-28T09:14:17+00:00",
//               "format": "Y-m-d\\TH:i:sP"
//             }
//           ],
//           "field_image": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "image"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 272
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "a8ab9f73-ff5b-44ce-aee3-b60f2a3b36a1"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 272
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "image",
//                   "target_type": "media_type",
//                   "target_uuid": "34844745-47ae-40a8-a0ca-a0ed6e5cb22f"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-28T08:32:55+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "paket-sembako-min.jpg"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 454
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "e92ce53f-55f6-42e2-b149-0cabe635f37f"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "paket-sembako-min.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/paket-sembako-min.jpg",
//                       "url": "/sites/default/files/images/paket-sembako-min.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 86400
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-28T08:32:55+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-28T08:33:00+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ],
//               "created": [
//                 {
//                   "value": "2024-10-28T08:32:55+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "changed": [
//                 {
//                   "value": "2024-10-28T08:32:55+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "default_langcode": [
//                 {
//                   "value": true
//                 }
//               ],
//               "revision_translation_affected": [
//                 {
//                   "value": true
//                 }
//               ],
//               "path": [
//                 {
//                   "alias": null,
//                   "pid": null,
//                   "langcode": "en"
//                 }
//               ],
//               "field_media_image": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 454
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "e92ce53f-55f6-42e2-b149-0cabe635f37f"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "paket-sembako-min.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/paket-sembako-min.jpg",
//                       "url": "/sites/default/files/images/paket-sembako-min.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 86400
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-28T08:32:55+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-28T08:33:00+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ],
//           "field_title": [
//             {
//               "value": "Bank BRI terus berperan aktif dalam penanggulangan Covid-19, kali ini perseroan menyalurkan bantuan 50.000 paket sembako gratis kepada masyarakat kurang mampu yang terkena dampak Covid 19."
//             }
//           ],
//           "field_video": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "remote_video"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 271
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "dc1c610a-d988-4a64-8a4e-c642e2ff3ae9"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 271
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "remote_video",
//                   "target_type": "media_type",
//                   "target_uuid": "fe6caa2d-3408-4615-9df2-04de968d5c31"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-28T08:31:23+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "Tanggulangi Covid-19 Bank BRI Salurkan 50.000 Paket Sembako"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 453
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "84a9f829-3811-4e63-a789-4250f0839f71"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "ACAUL3c_NdXJEhhjRjoxOvJRPHiZnQg7cbXhK2q77rU.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://oembed_thumbnails/2024-10/ACAUL3c_NdXJEhhjRjoxOvJRPHiZnQg7cbXhK2q77rU.jpg",
//                       "url": "/sites/default/files/oembed_thumbnails/2024-10/ACAUL3c_NdXJEhhjRjoxOvJRPHiZnQg7cbXhK2q77rU.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 27418
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-28T08:31:33+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-28T08:31:33+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ],
//               "created": [
//                 {
//                   "value": "2024-10-28T08:31:23+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "changed": [
//                 {
//                   "value": "2024-10-28T08:31:23+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "default_langcode": [
//                 {
//                   "value": true
//                 }
//               ],
//               "revision_translation_affected": [
//                 {
//                   "value": true
//                 }
//               ],
//               "path": [
//                 {
//                   "alias": null,
//                   "pid": null,
//                   "langcode": "en"
//                 }
//               ],
//               "field_media_oembed_video": [
//                 {
//                   "value": "https://youtu.be/SeImufyiYoM"
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "entity_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "entity_bundle": [
//             {
//               "value": "video"
//             }
//           ],
//           "id": [
//             {
//               "value": 791
//             }
//           ],
//           "uuid": [
//             {
//               "value": "b2ecbc97-1c0d-40d9-b414-4f6bf46a8aff"
//             }
//           ],
//           "parent_id": [
//             {
//               "value": "795"
//             }
//           ],
//           "parent_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "parent_field_name": [
//             {
//               "value": "field_video_items"
//             }
//           ],
//           "content_translation_source": [
//             {
//               "value": "und"
//             }
//           ],
//           "content_translation_outdated": [
//             {
//               "value": false
//             }
//           ],
//           "content_translation_changed": [
//             {
//               "value": "2024-10-28T09:14:17+00:00",
//               "format": "Y-m-d\\TH:i:sP"
//             }
//           ],
//           "field_image": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "image"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 274
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "5b47ba21-1ade-429e-bb00-0a3be9727d05"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 274
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "image",
//                   "target_type": "media_type",
//                   "target_uuid": "34844745-47ae-40a8-a0ca-a0ed6e5cb22f"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-28T08:34:30+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "brimo-login-min.jpg"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 456
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "4e876011-e715-4e7c-9b71-8256106e10c9"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "brimo-login-min.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/brimo-login-min.jpg",
//                       "url": "/sites/default/files/images/brimo-login-min.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 50630
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-28T08:34:30+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-28T08:34:34+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ],
//               "created": [
//                 {
//                   "value": "2024-10-28T08:34:30+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "changed": [
//                 {
//                   "value": "2024-10-28T08:34:30+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "default_langcode": [
//                 {
//                   "value": true
//                 }
//               ],
//               "revision_translation_affected": [
//                 {
//                   "value": true
//                 }
//               ],
//               "path": [
//                 {
//                   "alias": null,
//                   "pid": null,
//                   "langcode": "en"
//                 }
//               ],
//               "field_media_image": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 456
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "4e876011-e715-4e7c-9b71-8256106e10c9"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "brimo-login-min.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/brimo-login-min.jpg",
//                       "url": "/sites/default/files/images/brimo-login-min.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 50630
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-28T08:34:30+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-28T08:34:34+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ]
//             }
//           ],
//           "field_title": [
//             {
//               "value": "Buka Rekening sambil kerja di rumah, Bayar listrik gak perlu lama, Transfer dana gak perlu ke mana-mana, Isi pulsa biar selalu ada kuota, Top up BRIZZI so easy di hape aja"
//             }
//           ],
//           "field_video": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "remote_video"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 273
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "3d1fe300-86e5-4e5d-915e-ee11fad4256a"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 273
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "remote_video",
//                   "target_type": "media_type",
//                   "target_uuid": "fe6caa2d-3408-4615-9df2-04de968d5c31"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-28T08:33:49+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "Pakai BRImo, #LoginKeseruanmu Semua Beres dari Rumah"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 455
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "6c7fe156-1e39-4111-886b-872040754e9d"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "RT4d13tq3jnizuOI0AV9ZTHIsh_U3EzuucwumkCLGXY.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://oembed_thumbnails/2024-10/RT4d13tq3jnizuOI0AV9ZTHIsh_U3EzuucwumkCLGXY.jpg",
//                       "url": "/sites/default/files/oembed_thumbnails/2024-10/RT4d13tq3jnizuOI0AV9ZTHIsh_U3EzuucwumkCLGXY.jpg"
//                     }
//                   ],
//                   "filemime": [
//                     {
//                       "value": "image/jpeg"
//                     }
//                   ],
//                   "filesize": [
//                     {
//                       "value": 8336
//                     }
//                   ],
//                   "status": [
//                     {
//                       "value": true
//                     }
//                   ],
//                   "created": [
//                     {
//                       "value": "2024-10-28T08:33:52+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ],
//                   "changed": [
//                     {
//                       "value": "2024-10-28T08:33:52+00:00",
//                       "format": "Y-m-d\\TH:i:sP"
//                     }
//                   ]
//                 }
//               ],
//               "created": [
//                 {
//                   "value": "2024-10-28T08:33:49+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "changed": [
//                 {
//                   "value": "2024-10-28T08:33:49+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "default_langcode": [
//                 {
//                   "value": true
//                 }
//               ],
//               "revision_translation_affected": [
//                 {
//                   "value": true
//                 }
//               ],
//               "path": [
//                 {
//                   "alias": null,
//                   "pid": null,
//                   "langcode": "en"
//                 }
//               ],
//               "field_media_oembed_video": [
//                 {
//                   "value": "https://youtu.be/RIt437CR7bY"
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "entity_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "entity_bundle": [
//             {
//               "value": "video"
//             }
//           ],
//           "id": [
//             {
//               "value": 792
//             }
//           ],
//           "uuid": [
//             {
//               "value": "d7e75635-005e-4b29-b9e2-11fec9fbe359"
//             }
//           ],
//           "parent_id": [
//             {
//               "value": "795"
//             }
//           ],
//           "parent_type": [
//             {
//               "value": "paragraph"
//             }
//           ],
//           "parent_field_name": [
//             {
//               "value": "field_video_items"
//             }
//           ],
//           "content_translation_source": [
//             {
//               "value": "und"
//             }
//           ],
//           "content_translation_outdated": [
//             {
//               "value": false
//             }
//           ],
//           "content_translation_changed": [
//             {
//               "value": "2024-10-28T09:14:17+00:00",
//               "format": "Y-m-d\\TH:i:sP"
//             }
//           ],
//           "field_image": [
//             {
//               "entity_type": [
//                 {
//                   "value": "media"
//                 }
//               ],
//               "entity_bundle": [
//                 {
//                   "value": "image"
//                 }
//               ],
//               "mid": [
//                 {
//                   "value": 276
//                 }
//               ],
//               "uuid": [
//                 {
//                   "value": "a538db37-294c-4474-999b-15435625cc4f"
//                 }
//               ],
//               "vid": [
//                 {
//                   "value": 276
//                 }
//               ],
//               "langcode": [
//                 {
//                   "value": "en"
//                 }
//               ],
//               "bundle": [
//                 {
//                   "target_id": "image",
//                   "target_type": "media_type",
//                   "target_uuid": "34844745-47ae-40a8-a0ca-a0ed6e5cb22f"
//                 }
//               ],
//               "revision_created": [
//                 {
//                   "value": "2024-10-28T08:35:54+00:00",
//                   "format": "Y-m-d\\TH:i:sP"
//                 }
//               ],
//               "revision_user": [],
//               "status": [
//                 {
//                   "value": true
//                 }
//               ],
//               "uid": [
//                 {
//                   "target_id": 1,
//                   "target_type": "user",
//                   "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                   "url": "/user/1"
//                 }
//               ],
//               "name": [
//                 {
//                   "value": "brimo-transfer-min.jpg"
//                 }
//               ],
//               "thumbnail": [
//                 {
//                   "entity_type": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "entity_bundle": [
//                     {
//                       "value": "file"
//                     }
//                   ],
//                   "fid": [
//                     {
//                       "value": 458
//                     }
//                   ],
//                   "uuid": [
//                     {
//                       "value": "6bce30ab-a695-480f-9e09-bb2794f3cf02"
//                     }
//                   ],
//                   "langcode": [
//                     {
//                       "value": "en"
//                     }
//                   ],
//                   "uid": [
//                     {
//                       "target_id": 1,
//                       "target_type": "user",
//                       "target_uuid": "2e723f08-6e73-409e-8bb6-8149d5dcf957",
//                       "url": "/user/1"
//                     }
//                   ],
//                   "filename": [
//                     {
//                       "value": "brimo-transfer-min.jpg"
//                     }
//                   ],
//                   "uri": [
//                     {
//                       "value": "public://images/brimo-tra

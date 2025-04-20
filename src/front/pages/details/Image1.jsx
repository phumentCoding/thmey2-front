import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const product = {
  name: "",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "", href: "" },
    { id: 2, name: "", href: "" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "គោលការណ៍«រៀបការ ឬបណ្ដេញចេញពីការងារ»  បានទាក់ទាញ ការចាប់អារម្មណ៍ជាខ្លាំងពីមនុស្សក្នុងបណ្ដាញសង្គម និងអាជ្ញាធរមូលដ្ឋាន។ វាកើតឡើងនៅពេលចិនកំពុងជំរុញឱ្យគូស្នេហ៍វ័យក្មេងរៀបអាពាហ៍ពិពាហ៍ និងមានកូន ដើម្បីជួយពន្យឺតការថយចុះចំនួនប្រជាជនរបស់ខ្លួនក្រុមហ៊ុន​ Shandong Shuntian Chemical Group ប្រកាសឲ្យបុគ្គលិក ១ ២០០ នាក់របស់ខ្លួន ដែលមិនទាន់មានគូ ចាប់ពីអាយុ ២៨ ដល់ ៥៩ ឆ្នាំ រួមទាំងពោះម៉ាយតម្រូវឲ្យរៀបអាពាហ៍ពិពាហ៍ និងបង្កើតគ្រួសារនៅត្រឹមថ្ងៃទី ៣០ ខែ កញ្ញា ឆ្នាំ ២០២៥។ការដាក់កំហិតបែបនេះ ត្រូវបានចុះផ្សាយលើប្រព័ន្ធផ្សព្វផ្សាយ និងរាយការណ៍ដោយសារព័ត៌មានរបស់រដ្ឋ រួមទាំង Global Times និង Beijing News បើបុគ្គលិកណាមិនរៀបអាពាហ៍ពិពាហ៍នៅត្រឹមថ្ងៃកំណត់ទេ​ ក្រុមហ៊ុននឹងបញ្ចប់កិច្ចសន្យាការងាររបស់ពួកគេ។ លើសពីនេះ ក្រុមហ៊ុនលើកកម្ពស់តម្លៃ ដូចជាភាពឧស្សាហ៍ព្យាយាម ចិត្តល្អ ភក្ដីភាព ភាពស្មោះត្រង់ និងសុចរិតភាព។ ប៉ុន្តែ ក្រុមហ៊ុនមិនបានឆ្លើយតបទៅកាន់សំណួររបស់មហាជន ដែលឲ្យបកស្រាយរឿងនេះទេ។យ៉ាងណាក៏ដោយ តាមការចុះផ្សាយរបស់សារព័ត៌មាន Global Times គោលការណ៍របស់ក្រុមហ៊ុន Shandong Shuntian Chemical Group គឺបំពានច្បាប់ការងារ និងកិច្ចសន្យាការងាររបស់ចិន។​ ក្រុមហ៊ុន Shandong Shuntian Chemical Group ពន្យល់ថាគោលបំណងគឺដើម្បីលើកទឹកចិត្តបុគ្គលិកដែលមិនទាន់រៀបការវ័យចំណាស់ឲ្យផ្តោតលើ «ការសម្រេចចិត្តសំខាន់ៗក្នុងជីវិត ជំរុញពួកគេឲ្យរៀបការ និងបង្កើតជីវិតគ្រួសារដែលមានស្ថិរភាព»។ក្នុងឆ្នាំ ២០២៣ ចំនួនអាពាហ៍ពិពាហ៍នៅចិនបានធ្លាក់ចុះ ២០​ ភាគរយ ជាចំនួនដ៏ច្រើនបំផុតមិនធ្លាប់មាន។ចិន ជាប្រទេសទី២ លើពិភពលោកដែលមានប្រជាជនច្រើនជាងគេ​ ១,៤ ពាន់លាននាក់ ហើយចំនួនប្រជាជនវ័យចំណាស់កើនឡើងច្រើនជាងចំនួនប្រជាជនវ័យក្មេងកាន់តែលឿន ធ្វើឲ្យចិនព្រួយបារម្មណ៍លើការថយចុះប្រជាជនកាន់តែច្រើនឡើង។អត្រាកំណើតរបស់ចិនបានធ្លាក់ចុះជាច្រើនទសវត្សរ៍ ដោយសារតែគោលនយោបាយចាប់ពីឆ្នាំ ១៩៨០ ដល់ ២០១៥ តម្រូវឲ្យមានកូនតែមួយក្នុងមួយគ្រួសារ និងភាពជឿនលឿនរបស់ប្រទេស។ ក្នុងរយៈពេល ១០ ឆ្នាំខាងមុខ ប្រជាជនចិន ៣០០ លាននាក់នឹងត្រូវចូលនិវត្តន៍ ដែលចំនួននេះស្ទើតែស្មើប្រជាជនសរុបអាម៉េរិក។ដើម្បីដោះស្រាយបញ្ហាការធ្លាក់ចុះអត្រាកំណើត អាជ្ញាធរចិនបានចេញវិធានការកាលពីឆ្នាំមុន រួមជាមួយការជំរុញឲ្យសាកលវិទ្យាល័យមានកម្មវិធីសិក្សាពី «ការអប់រំស្នេហា»។ កម្មវិធីនេះមានគោលបំណងលើកកម្ពស់ទស្សនៈវិជ្ជមានលើអាពាហ៍ពិពាហ៍ សេចក្តីស្រឡាញ់ ការមានកូន និងគ្រួសារ៕",
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Image1() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      {/* /////////////// */}

      <div className="container mx-auto p-4">
        {/* Grid Layout for Ads */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={false} // Disable pagination (cycle action icon)
              navigation={false} // Disable navigation arrows
              modules={[Autoplay]} // Only include Autoplay module
              className="mySwiper"
            >
              {[...Array(5)].map((_, index) => (
                <SwiperSlide key={index}>
                  <img
                    src="https://image.thmeythmey.com/advertising/644/c1000x100-01.jpg"
                    alt={`Ad ${index + 1}`}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Ad 1 */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://image.thmeythmey.com/advertising/539/1000000638.jpg"
              alt="Ad 1"
              className="w-full h-auto"
            />
          </div>

          {/* Ad 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://image.thmeythmey.com/advertising/598/1gif-may-1000x100.gif"
              alt="Ad 2"
              className="w-full h-auto"
            />
          </div>

          {/* Ad 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://image.thmeythmey.com/advertising/595/ttn_pc.gif"
              alt="Ad 3"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Footer Section (If Needed) */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">Advertisements & Promotions</p>
        </div>
      </div>

      {/* @@@@@@@@@@@ */}

      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className=" w-[70%] p-5">

          <h1 className=" text-4xl">ការវាយតម្លៃ ពីរដ្ឋមន្រ្តីព័ត៌មាន សាស្ត្រាចារ្យ ពិធីករព័ត៌មាន និងមិត្តអ្នកអាន ជុំវិញសៀវភៅ«លើសពីអង្គរ»</h1>
        </div>
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {/* Left side (Main Image) */}
          <div className="lg:col-span-2 flex justify-center">
            <img
              alt=""
              src="https://image.thmeythmey.com/pictures/2025/03/05/image_67c7bf7644b7d.jpg"
              className="size-full rounded-lg object-cover"
            />
          </div>

          {/* Right side (Small Ad Image) */}
          <div className="lg:col-span-1 flex justify-center">
            <img
              alt=""
              src="https://image.thmeythmey.com/advertising/577/thmey-thmey-loyalty-point-260-x-400.jpg"
              className="aspect-[4/5] w-full object-cover sm:rounded-lg"
            />
          </div>
        </div>

        <div className=" w-[70%] p-9">
          <img
            src="https://image.thmeythmey.com/advertising/404/banner12.jpg"
            alt=""
          />
        </div>

        {/* Product info */}
        <div className="mx-auto px-4 pb-16 pt-10 sm:px-6 ">
          {/* <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              wert5yt6u7yi8o9
            </h1>
          </div> */}

          {/* Options */}
          <div className="flex w-full flex-wrap lg:flex-nowrap ">
            {/* Description (Left side) */}
            <div className="lg:w-[70%] p-4">
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Swiper Slider (Right side) */}
            <div className="lg:w-[30%] p-4">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={false} // Disable pagination (cycle action icon)
                navigation={false} // Disable navigation arrows
                modules={[Autoplay]} // Only include Autoplay module
                className="mySwiper"
              >
                {[...Array(5)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src="https://image.thmeythmey.com/advertising/270/ezgif_com-animated-gif-maker__1_.gif"
                      alt={`Ad ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-6 md:grid-cols-2">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="group relative border border-gray-300 rounded-md  hover:border-gray-500 transition-transform hover:scale-105 hover:shadow-md duration-300 p-2 overflow-hidden"
          >
            <a href="/image1">
              <img
                src="https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg"
                className="w-full bg-gray-200 object-cover group-hover:opacity-75 lg:h-64"
                alt="Khmer Image"
              />
            </a>
            <h4 className="text-sm font-semibold text-gray-700">
              កម្ពុជា បញ្ជូនជនជាតិថៃ ១១៩នាក់ ធ្វើការខុសច្បាប់ទៅថៃវិញ
            </h4>
          </div>
        ))}
      </div>
    </div>

    //////////////////////////
  );
}

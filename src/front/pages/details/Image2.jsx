import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";

// Install the autoplay module globally
// SwiperCore.use([Autoplay]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Image2() {
  const newsArticles = [
    {
      id: 1,
      title: "ខ្មែរជួយខ្មែរដើម្បីការអភិវឌ្ឍ",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "សេដ្ឋកិច្ចកម្ពុជាកំពុងមានកំណើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 9,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
    {
      id: 10,
      title: "ការអប់រំក្នុងប្រទេសកម្ពុជាកាន់តែរីកចម្រើន",
      imageSrc: "https://image.thmeythmey.com/pictures/2025/03/01/thumb2/image_67c2b42c13cc2.jpg",
      link: "#",
    },
  ];

  return (
    <div className="bg-white py-6">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - 70% */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-2xl font-bold text-gray-900">ព័ត៌មានថ្មីៗ</h4>
                <div className="border-b-4 w-24 border-blue-500 mt-2"></div>
              </div>
              <a href="#" className="text-blue-600 hover:underline">មើលបន្ថែម</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  className="group block rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={article.imageSrc}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:opacity-75"
                  />
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                      {article.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - 30% */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">ផលិតផលផ្សេងទៀត</h4>
              <div className="border-b-4 w-20 border-blue-500 mb-4"></div>
              <div className="space-y-4">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500, // Auto slide every 2.5 seconds
                    disableOnInteraction: false, // Keep autoplay running even when interacting
                  }}
                  pagination={false}
                  navigation={false}
                  modules={[]} // Import Autoplay module
                  className="mySwiper"
                  style={{ width: "100%", height: "300px" }} // Set height for the swiper
                >
                  {[...Array(12)].map((_, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src="https://image.thmeythmey.com/advertising/575/thmey_thmey-06.jpg"
                        alt={`Ad ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <a href="#" className="block text-blue-600 hover:underline mt-4">មើលបន្ថែម</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

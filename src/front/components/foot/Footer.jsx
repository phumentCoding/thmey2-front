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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="  w-[400px]">
            <h3 className="font-bold text-lg mb-4">ទំនាក់ទំនង</h3>
            <hr /> <br />
            <p className="flex items-center justify-center gap-2">
              📞 (+855) 81 699 329, 12 900 132, 86 654 846
            </p>
            <p className="flex items-center justify-center gap-2">
              ✉️{" "}
              <a href="mailto:sales@thmeythmey.com" className="hover:underline">
                sales@thmeythmey.com
              </a>
            </p>
            <p className="flex items-start justify-center gap-2">
              📖 អាសយដ្ឋាន: ភ្នំពេញ
            </p>
          </div>

          {/* Download Section */}
          <div className="  w-[400px]">
            <h3 className="font-bold text-lg mb-4">ទាញយកកម្មវិធី</h3>
            <hr /> <br />
            <div className="flex justify-center space-x-4">
              <a href="#">
                <img
                  src="https://thmeythmey.com/img/download_app_store.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className=" w-[400px]">
            <h3 className="font-bold text-lg mb-4">គ្រួសារយើង</h3>
            <hr /> <br />
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-2xl">
                📘
              </a>
              <a href="#" className="text-2xl">
                🐦
              </a>
              <a href="#" className="text-2xl">
                📸
              </a>
              <a href="#" className="text-2xl">
                ▶️
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          Copyright © 2025 ThmeyThmey - Designed
        </div>
      </div>
      <div className="fixed bottom-0 left-[120px] right-[120px] z-50">
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
                src="https://image.thmeythmey.com/advertising/590/ezgif.com-animated-gif-maker%20(1).gif" 
                width={"100"}
                alt={`Ad ${index + 1}`}
                className="w-full h-auto" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr />
      <div className=" flex justify-center items-center space-x-4">
        <p><span>Copyright © 2025 ThmeyThmey - Designed</span></p>
      </div>
    </footer>
  );
}

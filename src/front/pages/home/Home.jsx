const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];
  
  export default function Home() {
    return (
      <div className="bg-white">
        <div className="mx-auto px-2 sm:px-4 lg:max-w-5xl lg:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-[30px] font-bold text-gray-900">
                ព័ត្នមានជាតិ
              </h4>
              <div className=" border-b-[5px] w-[100px]  border-blue-400 mt-2"></div>{" "}
              {/* Thick line */}
            </div>
            <a href="#">ព័ត៌មានជាតិបន្ថែម</a>
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
      </div>
    );
  }
  
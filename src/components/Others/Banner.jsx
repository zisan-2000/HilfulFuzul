// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// import bannerImage1 from "../../assets/banner.jpg";
// import bannerImage2 from "../../assets/banner01.jpg";
// import bannerImage3 from "../../assets/banner02.jpg";

// const Banner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//     arrows: false,
//     pauseOnHover: false,
//   };

//   const slides = [
//     {
//       image: bannerImage1,
//       title: "Welcome to Birds of Eden Bookstore",
//       subtitle: "Your Gateway to a World of Knowledge",
//       description:
//         "Discover thousands of books across various genres and categories. From fiction to non-fiction, we have something for every reader.",
//       buttons: [
//         {
//           text: "Shop Now",
//           link: "#shop",
//           style: "bg-orange-500 hover:bg-orange-600",
//         },
//         {
//           text: "Learn More",
//           link: "#about",
//           style: "bg-green-500 hover:bg-gray-200 text-black",
//         },
//       ],
//     },
//     {
//       image: bannerImage2,
//       title: "Explore Our Curated Collections",
//       subtitle: "Dive into Our Handpicked Selections",
//       description:
//         "Whether you're looking for the latest bestsellers or timeless classics, our collections are designed to captivate and inspire.",
//       buttons: [
//         {
//           text: "Browse Collections",
//           link: "#collections",
//           style: "bg-orange-500 hover:bg-orange-600",
//         },
//         {
//           text: "Join Our Community",
//           link: "#community",
//           style: "bg-green-500 hover:bg-gray-200 text-black",
//         },
//       ],
//     },
//     {
//       image: bannerImage3,
//       title: "Find Your Next Great Read",
//       subtitle: "Books That Enlighten and Entertain",
//       description:
//         "Our extensive catalog offers books that cater to every taste. Whether you're into thrillers, romance, or self-improvement, Birds of Eden has the perfect book for you.",
//       buttons: [
//         {
//           text: "Discover More",
//           link: "#discover",
//           style: "bg-orange-500 hover:bg-orange-600",
//         },
//         {
//           text: "Get in Touch",
//           link: "#contact",
//           style: "bg-green-500 hover:bg-gray-200 text-black",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="relative h-[90vh] w-full">
//       <Slider {...settings} className="h-full">
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <div
//               className="relative flex h-[90vh] w-full items-center justify-center bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
//               <div className="z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white md:px-16">
//                 <h1 className="mb-4 text-5xl font-extrabold leading-tight drop-shadow-md md:text-7xl">
//                   {slide.title}
//                 </h1>
//                 <p className="mb-6 text-2xl drop-shadow-md md:text-3xl">
//                   {slide.subtitle}
//                 </p>
//                 <p className="mb-8 max-w-3xl text-lg drop-shadow-md md:text-xl">
//                   {slide.description}
//                 </p>
//                 <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
//                   {slide.buttons.map((button, btnIndex) => (
//                     <a
//                       key={btnIndex}
//                       href={button.link}
//                       className={`inline-block ${button.style} rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-300 md:px-8 md:py-4`}
//                     >
//                       {button.text}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Banner;

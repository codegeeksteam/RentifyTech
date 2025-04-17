import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://i.ibb.co.com/Kz66MXhg/gadefa.webp",
  "https://i.ibb.co.com/tG9KpSr/80s.jpg",
  "https://www.yankodesign.com/images/design_news/2021/09/retro-home-gadgets/retro_home_gadgets_modern_functionality_15.jpg",
  "https://e-techno-electronic.myshopify.com/cdn/shop/files/L03-banner-03.webp?v=1710236180&width=1920",
  "https://weburbanist.com/wp-content/uploads/2015/01/retro-tech-rotary-iphone-dock-468x351.jpg",
  "https://i.ibb.co.com/jB0t8Fx/key.jpg",
  "https://i.pinimg.com/474x/0f/2e/70/0f2e709bf2869de7e50763e5f98a6c94.jpg",
  "https://product-images-cdn.liketoknow.it/RJtL9ogkeRa7cAM9.5Wf3AknuHC41iKQgllxGNB2poVmZaYuqttIS8qoykK9Q2Xckb3Dnnplt8Xs9n0Ig5Bb7DonPwlPhpbIzF4_6FFqOM_R6g2wDjo_VR_bpFdYwyVSNNcZpG8FSrPa3Iws5baBOtSSz2IZwW5ZPm32E18lAU2DR41ELamk_p_lOeQ-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2.625",
];

const Gallery = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <h2 className="text-5xl font-bold text-center tracking-widest">GALLERY</h2><br />
      <div className="text-center max-w-xl mx-auto mt-4 mb-12">
        <h1 className="text-4xl font-semibold text-[#f495bf] mb-2">
          ✨ Tech You Desire,
        </h1><hr />
        <h1 className="text-4xl font-semibold">
          <span className="text-[#31D2f7]">Moments You </span>
          <span className="text-[#fff100]">Create.</span>
        </h1>
      </div>

      {/* Two-Column Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="h-screen flex justify-center items-center"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-[500px] max-h-[80vh] rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

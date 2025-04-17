import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NormalBanner = () => {
  const titleRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 65%",
        },
      }
    );

    imageRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: img,
            start: "top 60%",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div>
        <h1
          ref={titleRef}
          className="text-3xl font-bold py-10 text-center"
        >
          Most popular products
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {[
          {
            link: "/",
            src: "https://i.ibb.co.com/YT26cbmS/Screenshot-2.png",
            className: "h-50",
          },
          {
            link: "/",
            src: "https://i.ibb.co.com/nqQ8rxGb/Screenshot-22.png",
            className: "h-52",
          },
          {
            link: "/",
            src: "https://i.ibb.co.com/SSwszwF/div-card-two.webp",
            className: "h-50 w-96",
          },
        ].map((item, index) => (
          <div key={index}>
            <Link to={item.link}>
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                className={item.className}
                src={item.src}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NormalBanner;

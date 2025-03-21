const Gallery = () => {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      {/* Grid Layout */}
      {/* Left Section */}
      <div className="space-y-6 relative border-1 pb-[1400px]">
        <h2 className="text-4xl mt-3 ml-3 font-bold tracking-wide">GALLERY</h2><hr />
        <div className="absolute top-[550px] left-[600px]">
          <h1 className="font-semibold opacity-80 text-[#f495bf] text-4xl w-1/2">✨ Tech You Desire, <br /><span className="text-[#31D2f7]">Moments You <br /> </span><span className="text-[#fff100]">Create.</span></h1>
        </div>

        {/* Image Grid */}
        <div className="opacity-70 absolute top-64 left-15 overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://i.ibb.co.com/Kz66MXhg/gadefa.webp"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-[200px] left-96 overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://i.ibb.co.com/tG9KpSr/80s.jpg"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-56 right-96 overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://www.yankodesign.com/images/design_news/2021/09/retro-home-gadgets/retro_home_gadgets_modern_functionality_15.jpg"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-60 right-20 overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://e-techno-electronic.myshopify.com/cdn/shop/files/L03-banner-03.webp?v=1710236180&width=1920"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-[600px] left-60 overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://weburbanist.com/wp-content/uploads/2015/01/retro-tech-rotary-iphone-dock-468x351.jpg"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-[900px] left-52 overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://i.ibb.co.com/jB0t8Fx/key.jpg"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-[600px] right-[100px] overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://i.pinimg.com/474x/0f/2e/70/0f2e709bf2869de7e50763e5f98a6c94.jpg"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-[950px] left-[600px] overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://product-images-cdn.liketoknow.it/RJtL9ogkeRa7cAM9.5Wf3AknuHC41iKQgllxGNB2poVmZaYuqttIS8qoykK9Q2Xckb3Dnnplt8Xs9n0Ig5Bb7DonPwlPhpbIzF4_6FFqOM_R6g2wDjo_VR_bpFdYwyVSNNcZpG8FSrPa3Iws5baBOtSSz2IZwW5ZPm32E18lAU2DR41ELamk_p_lOeQ-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2.625"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
        <div className="opacity-80 absolute top-[1100px] right-[100px] overflow-hidden hover:scale-105 transition-all duration-300">
          <img
            src="https://i.ibb.co.com/5WxS0MG8/taafh.jpg"
            alt="Project"
            className="w-64 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

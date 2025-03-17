const LattesrBanner = () => {
  return (
    <div className="mt-16">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[url('https://i.ibb.co.com/Fb1kbh21/div-card-one.webp')] bg-cover bg-center h-60  rounded-4xl ">
            <div className="pt-10 pl-15">
              <h1 className="text-2xl font-bold mb-5">The Best Cameras</h1>
              <p className="text-stone-700 font-semibold mb-1">from just </p>
              <p className="mb-6">
                <span className="text-red-600 text-[18px] -pt-10 font-bold">
                  $
                </span>{" "}
                <span className="text-red-600 font-bold text-4xl">21,99</span>{" "}
                <span className="italic">/m</span>{" "}
              </p>
              <p className="underline font-semibold">START GAME</p>
            </div>
          </div>
          <div className="bg-[url('https://i.ibb.co.com/SSwszwF/div-card-two.webp')] bg-cover bg-center h-80 -mt-6 rounded-4xl">
            <div className="pt-14 pl-12">
              <h1 className="text-2xl font-bold mb-5">
                The Latest in <br />
                SmartWatch
              </h1>
              <p className="text-stone-700 font-semibold mb-1">from just </p>
              <p className="mb-6">
                <span className="text-red-600 text-[18px] -pt-10 font-bold">
                  $
                </span>{" "}
                <span className="text-red-600 font-bold text-4xl">21,99</span>{" "}
                <span className="italic">/m</span>{" "}
              </p>
              <p className="underline font-semibold">START GAME</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('https://i.ibb.co.com/v4Yqgvfz/div-card-three.webp')] bg-cover bg-center mt-10 h-80 rounded-4xl">
          <div className="pt-18 pl-18">
            <h1 className="text-2xl font-bold mb-5">The Best Cameras</h1>
            <p className="text-stone-700 font-semibold mb-1">from just </p>
            <p className="mb-6">
              <span className="text-red-600 text-[18px] -pt-10 font-bold">
                $
              </span>{" "}
              <span className="text-red-600 font-bold text-4xl">21,99</span>{" "}
              <span className="italic">/m</span>{" "}
            </p>
            <p className="underline font-semibold">START GAME</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LattesrBanner;

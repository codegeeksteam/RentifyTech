function OurNews() {
  const ourNews = [
    {
      title:
        "Latest Updates on Keyboard and TWS Rentals: Enhance Your Productivity and Sound Quality",
      img: "https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404177.jpg",
      date: "25 Jan, 2025",
    },
    {
      title:
        "The Best Student Gadgets to Rent: Laptops and iPads for Every Study Need",
      img: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg",
      date: "20 feb, 2025",
    },
    {
      title:
        "Level Up Your Content Creation: Renting Cameras and Mics for High-Quality Production",
      img: "https://img.freepik.com/free-photo/table-with-content-creator-stuff-camera-microphone-tripod-headphones-working-from-home_1268-17410.jpg",
      date: "11 Mar, 2025",
    },
  ];

  return (
    <div className="container mb-9 py-8 px-2 flex flex-col gap-4 mx-auto text-center">
      <h1 className="text-4xl font-bold">New Updates</h1>
      <h3 className="text-md mb-3 text-gray-600">
        Stay updated with our news and latest technologies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 justify-between flex-grow">
        {ourNews.map((news) => (
          <div
            key={news.title}
            className="mid pb-4  cursor-pointer  text-left   hover:border rounded-lg"
          >
            <img
              src={news.img}
              alt={news.title}
              className="w-full h-[300px] object-cover rounded-t-lg"
            />

            <div className="p-2 px-5">
              <p className="text-sm opacity-60">{news.date}</p>
              <p className="mt-3 text-lg font-semibold">{news.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurNews;

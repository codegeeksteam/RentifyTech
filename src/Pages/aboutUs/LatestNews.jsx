import React from "react";

const newsData = [
  {
    date: "February 21, 2024",
    category: "Installation",
    title: "Elevate Your Sound: Rent the Latest Audio Gear at Unbeatable Prices!",
    image: "https://electrental.webdevia.com/wp-content/uploads/2023/12/image_image_main_-600x600.webp", // Replace with actual image URL
  },
  {
    date: "February 21, 2024",
    category: "Remodelling",
    title: "Tech Upgrade: Explore Our Top 10 Trending Gadgets for Rent!",
    image: "https://electrental.webdevia.com/wp-content/uploads/2023/12/mask_group-3-600x235.webp", // Replace with actual image URL
  },
  {
    date: "February 20, 2024",
    category: "3D Design, Appliances, Installation",
    title: "Game On: Rent High-Performance Gaming Consoles for Ultimate Entertainment!",
    image: "https://electrental.webdevia.com/wp-content/uploads/2023/12/frame_155.webp", // Replace with actual image URL
  },
];

const NewsCard = ({ date, category, title, image }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{date} • {category}</p>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
      </div>
    </div>
  );
};

const LatestNews = () => {
  return (
    <section className="w-11/12 mx-auto py-10">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold">Our Latest news</h2><br />
        <hr className='text-gray-400' /><br />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;

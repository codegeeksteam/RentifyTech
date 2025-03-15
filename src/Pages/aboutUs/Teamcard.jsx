import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nikita Xing",
    role: "HR Manager",
    image: "https://i.ibb.co.com/QrDzY4w/Professional-Headshots-NYC-Corporate-Business-Headshots.jpg", // Replace with actual image URL
    active: false,
  },
  {
    name: "Harsh Patel",
    role: "Design Head",
    image: "https://i.ibb.co.com/3v1RfdZ/Dr-Emily-Roberts.jpg", // Replace with actual image URL
    active: true,
  },
  {
    name: "Sasha Grey",
    role: "Team Lead",
    image: "https://i.ibb.co.com/MVN3z1C/Mr-John-Smith.jpg", // Replace with actual image URL
    active: false,
  },
];

const TeamCard = ({ member }) => {
  return (
    <div
      className="rounded-xl shadow-lg p-6 transition-all duration-300 bg-white text-black hover:bg-blue-500"
      
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full  h-96 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
      <p className="text-sm">{member.role}</p>
      <div className="flex justify-center gap-4 items-center mt-3">
        <FaFacebook className="text-2xl text-indigo-500"></FaFacebook>
        <FaInstagram className="text-2xl text-pink-500"></FaInstagram>
      </div>
    </div>
  );
};

const Teamcard= () => {
  return (
    <div className="w-11/12 mx-auto text-center py-10">
      <h2 className="text-5xl font-bold">Meet our team</h2>
      <p className="text-gray-500">These people work on making our product best.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Teamcard;

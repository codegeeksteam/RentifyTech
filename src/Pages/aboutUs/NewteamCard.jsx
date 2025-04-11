import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 3,
      name: "Alex Chen",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 4,
      name: "Maria Garcia",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The brilliant minds behind our success</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                {/* Profile Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-100"
                />
                {/* Name & Role */}
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-indigo-600 italic mb-4">{member.role}</p>
                {/* Social Icons */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Button */}
        
      </div>
    </div>
  );
};

export default Team;
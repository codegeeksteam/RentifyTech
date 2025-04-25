import { useState } from 'react';
import {
  User,
  Calendar,
  Package,
  Clock,
  Star,
  Settings,
  ChevronRight,
  Camera,
  Bell,
  Bookmark,
  Repeat,
} from 'lucide-react';

function Profile() {
  const [activeTab, setActiveTab] = useState('rentals');

  const tabs = [
    {
      id: 'rentals',
      label: 'Current Rentals',
      icon: <Package className="w-5 h-5" />,
    },
    {
      id: 'history',
      label: 'Rental History',
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: 'favorites',
      label: 'Saved Gadgets',
      icon: <Bookmark className="w-5 h-5" />,
    },
    {
      id: 'upcoming',
      label: 'Reservations',
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  const rentalItems = [
    {
      id: 1,
      name: 'DJI Mini 3 Pro Drone',
      image: '/api/placeholder/80/80',
      startDate: 'April 20, 2025',
      endDate: 'April 27, 2025',
      status: 'active',
      daysLeft: 2,
    },
    {
      id: 2,
      name: 'Sony A7 IV Camera',
      image: '/api/placeholder/80/80',
      startDate: 'April 22, 2025',
      endDate: 'April 29, 2025',
      status: 'active',
      daysLeft: 4,
    },
  ];

  const rentalHistory = [
    {
      id: 3,
      name: 'iPad Pro 12.9"',
      image: '/api/placeholder/80/80',
      startDate: 'March 15, 2025',
      endDate: 'March 22, 2025',
      status: 'completed',
    },
    {
      id: 4,
      name: 'Oculus Quest 3',
      image: '/api/placeholder/80/80',
      startDate: 'February 10, 2025',
      endDate: 'February 17, 2025',
      status: 'completed',
    },
  ];

  const favoriteGadgets = [
    {
      id: 5,
      name: 'MacBook Pro 16"',
      image: '/api/placeholder/80/80',
      price: '$45/day',
      availability: 'Available',
    },
    {
      id: 6,
      name: 'PlayStation 5',
      image: '/api/placeholder/80/80',
      price: '$20/day',
      availability: 'Available May 1',
    },
  ];

  const reservations = [
    {
      id: 7,
      name: 'Canon R5 Camera Kit',
      image: '/api/placeholder/80/80',
      startDate: 'May 10, 2025',
      endDate: 'May 17, 2025',
      status: 'confirmed',
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'rentals':
        return (
          <div className="space-y-4">
            {rentalItems.length > 0 ? (
              rentalItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-4 border border-gray-200 rounded-lg"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.startDate} - {item.endDate}
                    </p>
                    <div className="mt-2 flex items-center">
                      <span className="text-xs px-2 py-1 bg-black text-white rounded-full">
                        {item.daysLeft} days left
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="text-sm border border-black rounded-md px-3 py-1 hover:bg-gray-100">
                      Extend
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Package className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>You don't have any active rentals</p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-md text-sm">
                  Browse Gadgets
                </button>
              </div>
            )}
          </div>
        );
      case 'history':
        return (
          <div className="space-y-4">
            {rentalHistory.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 border border-gray-200 rounded-lg"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.startDate} - {item.endDate}
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full">
                      Completed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-sm border border-black rounded-md px-3 py-1 hover:bg-gray-100">
                    Review
                  </button>
                  <button className="text-sm bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800">
                    Rent Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'favorites':
        return (
          <div className="space-y-4">
            {favoriteGadgets.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 border border-gray-200 rounded-lg"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full">
                      {item.availability}
                    </span>
                  </div>
                </div>
                <div>
                  <button className="text-sm bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'upcoming':
        return (
          <div className="space-y-4">
            {reservations.length > 0 ? (
              reservations.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-4 border border-gray-200 rounded-lg"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.startDate} - {item.endDate}
                    </p>
                    <div className="mt-2 flex items-center">
                      <span className="text-xs px-2 py-1 bg-gray-800 text-white rounded-full">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="text-sm border border-black rounded-md px-3 py-1 hover:bg-gray-100">
                      Modify
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>No upcoming reservations</p>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      {/* Header/Profile Information */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/api/placeholder/80/80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <Camera className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">Jordan Smith</h2>
              <p className="text-gray-600">Premium Member</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-black" />
                <Star className="w-4 h-4 text-black" />
                <Star className="w-4 h-4 text-black" />
                <Star className="w-4 h-4 text-black" />
                <Star className="w-4 h-4 text-gray-300" />
                <span className="text-sm ml-1">4.0</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-md p-2 mr-2">
                <Repeat className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Rentals</p>
                <p className="font-medium">12</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-md p-2 mr-2">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Membership</p>
                <p className="font-medium">Since Jan 2025</p>
              </div>
            </div>
            <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Account Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-500">Credit Balance</p>
          <p className="text-xl font-bold">$45.00</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Pending Returns</p>
          <p className="text-xl font-bold">2</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Reward Points</p>
          <p className="text-xl font-bold">350</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Damage Deposit</p>
          <p className="text-xl font-bold">$200.00</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span className="ml-2">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">{renderTabContent()}</div>
    </div>
  );
}

export default Profile;

import { useState } from 'react';
import { Camera, Edit, Check, X } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'U Mahi',
    email: 'kmahi@user.com',
    phone: '01912345678',
    address: 'Bangladesh',
    memberSince: 'January 2025',
    membershipTier: 'Premium'
  });

  const [editedInfo, setEditedInfo] = useState({...userInfo});

  const handleEdit = () => {
    setIsEditing(true);
    setEditedInfo({...userInfo});
  };

  const handleSave = () => {
    setUserInfo({...editedInfo});
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      {/* Header with profile picture and edit button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Profile Information</h2>
        {!isEditing ? (
          <button 
            onClick={handleEdit}
            className="flex items-center text-sm bg-white border border-black px-3 py-1 rounded-md hover:bg-gray-100"
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </button>
        ) : (
          <div className="flex space-x-2">
            <button 
              onClick={handleCancel}
              className="flex items-center text-sm bg-white border border-black px-3 py-1 rounded-md hover:bg-gray-100"
            >
              <X className="w-4 h-4 mr-1" />
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center text-sm bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800"
            >
              <Check className="w-4 h-4 mr-1" />
              Save
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src="/api/placeholder/96/96" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
          {!isEditing && (
            <div className="text-center">
              <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                {userInfo.membershipTier}
              </span>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="flex-1">
          {!isEditing ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">{userInfo.name}</h3>
                <p className="text-sm text-gray-500">Member since {userInfo.memberSince}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{userInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>{userInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p>{userInfo.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Membership</p>
                    <p>{userInfo.membershipTier}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={editedInfo.name} 
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={editedInfo.email} 
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="text" 
                  name="phone"
                  value={editedInfo.phone} 
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={editedInfo.address} 
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Membership</label>
                <select
                  name="membershipTier"
                  value={editedInfo.membershipTier}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-white"
                >
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
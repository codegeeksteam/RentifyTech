import { useState, useEffect } from 'react';
import { Camera, Edit, Check, X } from 'lucide-react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export default function Profile() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    photo: '',
    address: '',
    memberSince: '',
    membershipTier: 'Basic',
  });

  const [editedInfo, setEditedInfo] = useState({ ...userInfo });

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get(`/user/${user?.email}`);
        if (response.data.length > 0) {
          const userData = response.data[0];
          console.log('da', user.photoURL);
          setUserInfo({
            name: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
            photo: userData.photo || user.photoURL,
            address: userData.address || '',
            memberSince:
              userData.memberSince ||
              new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              }),
            membershipTier: userData.membershipTier || 'Basic',
            _id: userData._id,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to fetch user data',
        });
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchUserData();
    }
  }, [user?.email, axiosSecure]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedInfo({ ...userInfo });
  };
  console.log('user ifo', userInfo);
  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await axiosSecure.put(
        `/update-user/${userInfo._id}`,
        editedInfo,
      );

      if (response.data.message === 'User updated successfully') {
        setUserInfo({ ...editedInfo });
        setIsEditing(false);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile updated successfully',
        });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update profile',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading && !userInfo.email) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      {/* Header with profile picture and edit button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Profile Information</h2>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="flex hidden items-center text-sm bg-white border border-black px-3 py-1 rounded-md hover:bg-gray-100"
            disabled={loading}
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleCancel}
              className="flex items-center text-sm bg-white border border-black px-3 py-1 rounded-md hover:bg-gray-100"
              disabled={loading}
            >
              <X className="w-4 h-4 mr-1" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center text-sm bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800"
              disabled={loading}
            >
              {loading ? (
                'Saving...'
              ) : (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Save
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={userInfo.photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
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
                <p className="text-sm text-gray-500">
                  Member since {userInfo.memberSince}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{userInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>{userInfo.phone || 'Not provided'}</p>
                  </div>
                  {/* <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p>{userInfo.address || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Membership</p>
                    <p>{userInfo.membershipTier}</p> 
                  </div>*/}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={editedInfo.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editedInfo.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  disabled={true} // Email shouldn't be editable typically
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={editedInfo.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={editedInfo.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Membership
                </label>
                <select
                  name="membershipTier"
                  value={editedInfo.membershipTier}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-white"
                  disabled={loading}
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

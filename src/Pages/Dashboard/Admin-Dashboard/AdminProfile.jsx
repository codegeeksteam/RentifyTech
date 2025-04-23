import { useState } from 'react';
import { 
  FiBell, 
  FiSearch, 
  FiMail, 
  FiLock, 
  FiLogOut,
  FiEdit,
  FiChevronDown,
  FiUser,
  FiSettings
} from 'react-icons/fi';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
    const {user,signOutUser  } =useAuth()
    const navigate = useNavigate();
    
  const [notifications] = useState(3);
  const handleSignOut = () => {
    signOutUser()
    .then(() => {
    toast('Sign Out Successfully')
    navigate('/')
   })
  }
  
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Only (no sidebar) */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">AdminPanel</h1>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <FiSearch className="text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none w-full"
            />
          </div>
          
          <div className="relative">
            <FiBell className="text-gray-600 text-xl cursor-pointer" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2 cursor-pointer">
            <img 
              src={user.photoURL} 
              alt="User" 
              className="w-10 h-10 rounded-full object-cover" 
            />
            <span className="font-medium">{user.name}</span>
            <FiChevronDown className="text-gray-500" />
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <main className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Profile</h2>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              <FiUser className="mr-2" />
              View Mode
            </button>
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              <FiSettings className="mr-2" />
              Settings
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-600 h-20"></div>
            <div className="p-6 -mt-12 text-center">
              <div className="relative inline-block">
                <img 
                  src={user.photoURL} 
                  alt="Admin" 
                  className="w-24 h-24 rounded-full border-4 border-white object-cover mx-auto"
                />
                <button className="absolute bottom-0 right-0 bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition">
                  <FiEdit size={14} />
                </button>
              </div>
              
              <h3 className="mt-4 text-xl font-bold">{user.displayName}</h3>
              <p className="text-indigo-600">{user.role}</p>
              
              <div className="mt-6 space-y-3 text-left">
                <div className="flex items-center">
                  <FiMail className="text-gray-500 mr-3" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <FiLock className="text-gray-500 mr-3" />
                  <span>********</span>
                </div>
              </div>
              
               
            </div>
          </div>
          
          {/* Profile Details */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden lg:col-span-2">
            <div className="border-b border-gray-200 p-4">
              <h3 className="font-semibold text-lg">Profile Information</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoField label="Full Name" value={user.displayName}  />
                <InfoField label="Email" value={user.email} editable />
                <InfoField  label="Role" value="Admin" />
                <InfoField label="Join Date" value={user.metadata?.creationTime} />
                <InfoField label="Last Login" value={user.metadata?.lastSignInTime} />
              </div>
              
               
              
              <div className="mt-8 flex justify-end">
                <button onClick={handleSignOut} className="flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition">
                  <FiLogOut className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Reusable Component
const InfoField = ({ label, value, editable = false }) => (
  <div>
    <label className="block text-sm text-gray-500 mb-1">{label}</label>
    <div className="flex items-center">
      <p className="font-medium">{value}</p>
       
    </div>
  </div>
);

export default AdminProfile;
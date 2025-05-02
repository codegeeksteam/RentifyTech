import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace this with actual logged-in admin role logic (e.g., from context or props)
  const currentUserRole = 'Admin'; // Simulated role for now

  // Fetch all users
  const fetchUsers = () => {
    setLoading(true);
    fetch('https://rentify-tech-server.vercel.app/all-users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Make Agent an Admin
  const handleMakeAdmin = (email) => {
    fetch(`https://rentify-tech-server.vercel.app/users/make-admin/${email}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success!', 'User promoted to Admin.', 'success');
          fetchUsers();
        }
      });
  };

  // Delete a user
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'User will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rentify-tech-server.vercel.app/delete-user/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'User has been removed.', 'success');
              fetchUsers();
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-medium text-gray-600">
          <svg className="animate-spin h-8 w-8 mr-3 inline text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading users...
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Users</h2>
        <div className="text-sm text-gray-500">{users.length} users total</div>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              {currentUserRole === 'Admin' && (
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-700 font-medium text-sm">{(user.name || 'NA').substring(0, 2).toUpperCase()}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name || 'N/A'}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 
                      user.role === 'Agent' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'}`}>
                    {user.role}
                  </span>
                </td>
                {currentUserRole === 'Admin' && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {user.role === 'Agent' && (
                        <button
                          onClick={() => handleMakeAdmin(user.email)}
                          className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:from-green-500 hover:to-green-600 transition duration-300 shadow-sm"
                        >
                          Make Admin
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="bg-gradient-to-r from-red-400 to-red-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:from-red-500 hover:to-red-600 transition duration-300 shadow-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        
        {users.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No users found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // For confirmation dialog
import { Watch } from 'react-loader-spinner';

const MyAll = () => {
  const [gadgets, setGadgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchGadgets = async () => {
      try {
        const response = await axiosSecure.get(`/gadgets/seller/${user.email}`);
        setGadgets(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching gadgets:', err);
        setError('Failed to load gadgets.');
        setLoading(false);
      }
    };

    fetchGadgets();
  }, [axiosSecure, user.email]);

  const handleDelete = async (id) => {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        // Send delete request
        const response = await axiosSecure.delete(`/delete-gadget/${id}`);

        if (response.data.message === 'Gadget deleted successfully') {
          // Update the UI by removing the deleted gadget
          setGadgets(gadgets.filter((gadget) => gadget._id !== id));

          Swal.fire('Deleted!', 'Your gadget has been deleted.', 'success');
        } else {
          throw new Error('Failed to delete gadget');
        }
      }
    } catch (error) {
      console.error('Error deleting gadget:', error);
      Swal.fire('Error!', 'Failed to delete gadget.', 'error');
    }
  };

  if (loading) {
    return <div>
 
loading..
    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">My All Gadgets</h1>
      {gadgets.length === 0 ? (
        <p>No gadgets found for this seller.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {gadgets.map((gadget) => (
            <div
              key={gadget._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 mb-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 overflow-hidden rounded-lg">
                  <img
                    src={gadget.images[0]}
                    alt={gadget.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {gadget.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{gadget.brand}</p>
                  <div className="flex justify-between items-center">
                    <button
                      className={`px-3 py-1 rounded-md text-xs font-medium ${
                        gadget.availability.status === 'In Stock'
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={gadget.availability.status !== 'In Stock'}
                    >
                      {gadget.availability.status}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 *:cursor-pointer *:btn">
                <Link to={`/update-gadget/${gadget._id}`}>Update</Link>
                <Link to={`/gadget/${gadget._id}`}>View</Link>
                <button
                  onClick={() => handleDelete(gadget._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>

              <div
                className={`${
                  gadget?.approvalStatus === 'Published' && 'hidden'
                } bg-red-500 text-white text-center py-1 mt-3 rounded-full`}
              >
                <p className="text-xs uppercase">Unpublished</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAll;

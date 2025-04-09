import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyAll = () => {
  const [gadgets, setGadgets] = useState([]); // State to store the gadgets
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to store error messages
  const axiosSecure = useAxiosSecure(); // Get the axiosSecure instance

  const { user } = useContext(AuthContext);
  useEffect(() => {
    // Function to fetch gadgets
    const fetchGadgets = async () => {
      try {
        const response = await axiosSecure.get(`/gadgets/seller/${user.email}`);
        setGadgets(response.data); // Store the fetched gadgets
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.error('Error fetching gadgets:', err);
        setError('Failed to load gadgets.'); // Set error message if request fails
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchGadgets(); // Call the function to fetch gadgets
  }, [axiosSecure]); // Dependency array ensures the effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there is any error
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">My All Gadgets</h1>
      {gadgets.length === 0 ? (
        <p>No gadgets found for this seller.</p> // If no gadgets are returned, show this message
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
                  <p className="text-sm text-gray-600 mb-3">
                    {gadget.description}
                  </p>
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
                <button>View</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAll;

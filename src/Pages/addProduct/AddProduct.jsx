import { useContext, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import HelmetTitle from '../../Components/HelmetTitle';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    description: '',
    usageGuide: '',
    rentalPolicy: '',
    pricing: {
      hourly: '',
      daily: '',
      weekly: '',
      deposit: '',
    },
    availability: {
      status: 'In Stock',
      quantity: 1,
      nextAvailable: 'Immediately',
    },
    specifications: [{ name: '', value: '' }],
    includes: [''],
  });

  const [images, setImages] = useState([]);
  const categories = [
    'Cameras',
    'Audio Equipment',
    'Lighting',
    'Camera Accessories',
    'Computers',
    'Drones',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // const handleImageUpload = (e) => {
  //   // In a real implementation, you would handle file uploads here
  //   // For now, we'll just store the file names
  //   const newImages = [...images];
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     newImages.push(e.target.files[i].name);
  //   }
  //   setImages(newImages);
  // };

  const [isUploading, setIsUploading] = useState(false);
  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Show loading indicator or message
    setIsUploading(true);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Create FormData object to send to ImgBB
      const formData = new FormData();
      formData.append('image', file);
      formData.append('key', '749ef71fc1cc2413552fce9e7178e027'); // Replace with your actual ImgBB API key

      try {
        // Upload to ImgBB
        const response = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          // Add the image URL to your state
          setImages((prevImages) => [...prevImages, data.data.url]);
        } else {
          console.error('Upload failed:', data.error);
          alert(
            `Failed to upload ${file.name}: ${
              data.error?.message || 'Unknown error'
            }`,
          );
        }
      } catch (error) {
        console.error('Upload error:', error);
        alert(`Error uploading ${file.name}: ${error.message}`);
      }
    }
    setIsUploading(false);
    // files.reset()
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const addSpecification = () => {
    setFormData({
      ...formData,
      specifications: [...formData.specifications, { name: '', value: '' }],
    });
  };

  const updateSpecification = (index, field, value) => {
    const newSpecs = [...formData.specifications];
    newSpecs[index][field] = value;
    setFormData({
      ...formData,
      specifications: newSpecs,
    });
  };

  const removeSpecification = (index) => {
    const newSpecs = [...formData.specifications];
    newSpecs.splice(index, 1);
    setFormData({
      ...formData,
      specifications: newSpecs,
    });
  };

  const addIncludedItem = () => {
    setFormData({
      ...formData,
      includes: [...formData.includes, ''],
    });
  };

  const updateIncludedItem = (index, value) => {
    const newIncludes = [...formData.includes];
    newIncludes[index] = value;
    setFormData({
      ...formData,
      includes: newIncludes,
    });
  };

  const removeIncludedItem = (index) => {
    const newIncludes = [...formData.includes];
    newIncludes.splice(index, 1);
    setFormData({
      ...formData,
      includes: newIncludes,
    });
  };

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    const gadgetInfo = {
      ...formData,
      images,
      seller: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
    };
    console.log(gadgetInfo);

    // Make the API request to submit the gadget info
    axiosPublic
      .post('/gadgets', gadgetInfo) // Call the post method on axiosPublic
      .then((res) => {
        if (res.data.insertedId) {
          // Reset form and show success message
          // reset(); // Ensure reset is defined
          toast.success('Product submitted successfully!');
          navigate('/dashboard/myAll'); // Redirect to success page
        }
      })
      .catch((error) => {
        // Handle errors and display error message
        toast.error(error.message);
      });
  };

  return (
    <>
      <Toaster />
      <HelmetTitle title={'Add Gadget'} />
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Add New Rental Product</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand*
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability Status
                </label>
                <select
                  name="availability.status"
                  value={formData.availability.status}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Coming Soon">Coming Soon</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity Available*
                </label>
                <input
                  type="number"
                  name="availability.quantity"
                  value={formData.availability.quantity}
                  onChange={handleChange}
                  min="0"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Product Images</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Images*
              </label>
              <input
                type="file"
                accept=".webp,.png,.jpg,.jpeg" // Added the specific image types
                multiple
                onChange={handleImageUpload}
                disabled={images.length > 5 || isUploading}
                className={`w-full p-2 disabled:opacity-40 disabled:cursor-not-allowed border cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black`}
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload at least one image. Maximum 6 images.
              </p>
            </div>

            {isUploading && (
              <div className="mt-2 text-blue-600">
                <p>Uploading images, please wait...</p>
              </div>
            )}

            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {images.map((imageUrl, index) => (
                  <div key={index} className="relative">
                    <div className="aspect-square bg-gray-100 rounded overflow-hidden border border-gray-200">
                      <img
                        src={imageUrl}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Pricing Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hourly Rate ($)*
                </label>
                <input
                  type="number"
                  name="pricing.hourly"
                  value={formData.pricing.hourly}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Daily Rate ($)*
                </label>
                <input
                  type="number"
                  name="pricing.daily"
                  value={formData.pricing.daily}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weekly Rate ($)*
                </label>
                <input
                  type="number"
                  name="pricing.weekly"
                  value={formData.pricing.weekly}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Security Deposit ($)*
                </label>
                <input
                  type="number"
                  name="pricing.deposit"
                  value={formData.pricing.deposit}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Description*
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Provide a detailed description of your product..."
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Usage Guide
              </label>
              <textarea
                name="usageGuide"
                value={formData.usageGuide}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Instructions for optimal use of the product..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rental Policy
              </label>
              <textarea
                name="rentalPolicy"
                value={formData.rentalPolicy}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Specific rental terms and conditions for this product..."
              ></textarea>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Product Specifications</h2>
              <button
                type="button"
                onClick={addSpecification}
                className="bg-black text-white py-1 px-3 rounded text-sm hover:bg-white hover:text-black border cursor-pointer"
              >
                Add Specification
              </button>
            </div>

            {formData.specifications.map((spec, index) => (
              <div key={index} className="flex items-start mb-3">
                <div className="flex-1 mr-2">
                  <input
                    type="text"
                    value={spec.name}
                    onChange={(e) =>
                      updateSpecification(index, 'name', e.target.value)
                    }
                    placeholder="Specification name"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
                <div className="flex-1 mr-2">
                  <input
                    type="text"
                    value={spec.value}
                    onChange={(e) =>
                      updateSpecification(index, 'value', e.target.value)
                    }
                    placeholder="Specification value"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeSpecification(index)}
                  className="bg-red-500 text-white cursor-pointer w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
                  disabled={formData.specifications.length === 1}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Included Items */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">What's Included</h2>
              <button
                type="button"
                onClick={addIncludedItem}
                className="bg-black text-white py-1 px-3 rounded text-sm hover:bg-white hover:text-black border cursor-pointer"
              >
                Add Item
              </button>
            </div>

            {formData.includes.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <div className="flex-1 mr-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateIncludedItem(index, e.target.value)}
                    placeholder="Item included with rental"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeIncludedItem(index)}
                  className="bg-red-500 text-white cursor-pointer w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
                  disabled={formData.includes.length === 1}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-black  hover:border-black border cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddProduct;

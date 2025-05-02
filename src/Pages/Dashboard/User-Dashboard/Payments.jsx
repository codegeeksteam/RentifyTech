import { useEffect, useState } from 'react';
import {
  Clock,
  Check,
  AlertCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Download,
} from 'lucide-react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

function Payments() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('current');
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [orders, setOrders] = useState({ current: [], past: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/orders?email=${user?.email}`)
      .then(res => {
        processOrders(res.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, [axiosSecure, user?.email]);

  const processOrders = (ordersData) => {
    // Process and format the orders data from the server
    // Split orders into current and past based on status
    if (!Array.isArray(ordersData)) {
      console.warn('Orders data is not an array, using a single order object');
      ordersData = [ordersData]; // Convert to array if single object
    }

    const currentOrders = [];
    const pastOrders = [];

    ordersData.forEach(order => {
      // Create formatted order objects from the data
      const processedOrder = {
        id: order._id || order.orderId?.[0] || 'ORD-' + Math.random().toString(36).substr(2, 9),
        gadget: Array.isArray(order.gadgetsName) ? order.gadgetsName.join(', ') : 'Unknown Gadget',
        status: order.status || 'processing',
        orderDate: order.localCart?.[0]?.orderDate || order.orderDate || new Date().toLocaleDateString(),
        orderTime: order.localCart?.[0]?.orderTime || 'N/A',
        paymentDate: order.paymentDate || 'Pending',
        paymentTime: order.paymentTime || 'N/A',
        amount: `${(order.amount / 100).toFixed(2)}`,
        rentalPeriod: order.localCart?.[0]?.rentalPeriod === 'weekly' ? 'Weekly Rental' : 
                     (order.localCart?.[0]?.rentalPeriod === 'monthly' ? 'Monthly Rental' : 'N/A'),
        paymentMethod: order.paymentMethodTypes?.[0] === 'card' ? 'Credit Card' : 'Unknown',
        transactionId: order.transactionId || 'Not available',
        receipt: order.receipt || false,
        refundAmount: order.refundAmount || 'N/A',
        refundDate: order.refundDate || 'N/A',
      };

      // Determine if this is a current or past order
      // Assuming orders with status 'completed' or 'cancelled' are past orders
      if (processedOrder.status === 'completed' || processedOrder.status === 'cancelled') {
        pastOrders.push(processedOrder);
      } else {
        currentOrders.push(processedOrder);
      }
    });

    // Update state with processed orders
    setOrders({
      current: currentOrders,
      past: pastOrders
    });
  };

  const toggleOrderDetails = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  const getStatusIcon = (status) => {
    // Simple status icon based on the status string
    if (status === 'paid successfully') {
      return <Check className="w-5 h-5 text-black" />;
    } else if (status === 'cancelled') {
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
    } else {
      return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusClass = (status) => {
    // Simple styling based on the status string
    if (status === 'paid successfully') {
      return 'bg-black text-white';
    } else if (status === 'cancelled') {
      return 'bg-gray-200 text-gray-700';
    } else {
      return 'bg-gray-200 text-gray-700';
    }
  };

  const filteredOrders = orders[activeTab]?.filter((order) => {
    // Filter by search query
    const matchesSearch =
      order.gadget.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by status
    const matchesStatus =
      filterStatus === 'all' || order.status === filterStatus;

    return matchesSearch && matchesStatus;
  }) || [];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Payments & Orders</h2>
        <p className="text-gray-500">View and manage your rental payments</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'current'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('current')}
        >
          Current Orders
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'past'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('past')}
        >
          Past Orders
        </button>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="paid successfully">Paid Successfully</option>
          <option value="processing">Processing</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Order Summary (always visible) */}
              <div
                className="flex flex-col md:flex-row md:items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleOrderDetails(order.id)}
              >
                <div className="flex items-center">
                  <div className="mr-4">{getStatusIcon(order.status)}</div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">{order.gadget}</h3>
                      <span
                        className={`ml-2 text-xs px-2 py-1 rounded-full ${getStatusClass(
                          order.status,
                        )}`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500 gap-2 md:gap-4">
                      <span>Order: {order.id}</span>
                      <span>Ordered: {order.orderDate} {order.orderTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="text-right mr-4">
                    <div className="font-medium">$ {order.amount}</div>
                    <div className="text-sm text-gray-500">
                      {order.rentalPeriod || 'N/A'}
                    </div>
                  </div>
                  {expandedOrder === order.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Order Details (expandable) */}
              {expandedOrder === order.id && (
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Order Date & Time</p>
                      <p>{order.orderDate} at {order.orderTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Date & Time</p>
                      <p>{order.paymentDate} at {order.paymentTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Method</p>
                      <p>{order.paymentMethod}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Transaction ID</p>
                      <p>{order.transactionId}</p>
                    </div>
                    {order.status === 'cancelled' && (
                      <>
                        <div>
                          <p className="text-sm text-gray-500">Refund Amount</p>
                          <p>{order.refundAmount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Refund Date</p>
                          <p>{order.refundDate}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {order.receipt && (
                    <div className="mt-4 flex justify-end">
                      <button className="flex items-center text-sm bg-white border border-black px-3 py-1 rounded-md hover:bg-gray-100">
                        <Download className="w-4 h-4 mr-1" />
                        Receipt
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payments;
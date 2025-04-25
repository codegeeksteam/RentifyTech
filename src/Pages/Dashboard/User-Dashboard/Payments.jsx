import { useState } from 'react';
import {
  Clock,
  Check,
  AlertCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Download,
} from 'lucide-react';

function Payments() {
  const [activeTab, setActiveTab] = useState('current');
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data for orders
  const orders = {
    current: [
      {
        id: 'ORD-24578',
        date: 'April 20, 2025',
        gadget: 'DJI Mavic 3 Pro',
        amount: '$129.99',
        status: 'processing',
        rentalPeriod: 'Apr 25 - May 2, 2025',
        paymentMethod: 'Visa •••• 4242',
        transactionId: 'TXN-987654321',
        receipt: true,
      },
      {
        id: 'ORD-24565',
        date: 'April 19, 2025',
        gadget: 'Sony A7 IV Camera',
        amount: '$95.50',
        status: 'confirmed',
        rentalPeriod: 'Apr 22 - Apr 29, 2025',
        paymentMethod: 'PayPal',
        transactionId: 'TXN-123456789',
        receipt: true,
      },
    ],
    past: [
      {
        id: 'ORD-23491',
        date: 'March 15, 2025',
        gadget: 'iPad Pro 12.9"',
        amount: '$85.00',
        status: 'completed',
        rentalPeriod: 'Mar 18 - Mar 25, 2025',
        paymentMethod: 'Apple Pay',
        transactionId: 'TXN-567891234',
        receipt: true,
      },
      {
        id: 'ORD-22387',
        date: 'February 10, 2025',
        gadget: 'Oculus Quest 3',
        amount: '$65.50',
        status: 'completed',
        rentalPeriod: 'Feb 12 - Feb 19, 2025',
        paymentMethod: 'Visa •••• 4242',
        transactionId: 'TXN-345678912',
        receipt: true,
      },
      {
        id: 'ORD-21254',
        date: 'January 25, 2025',
        gadget: 'MacBook Pro 16"',
        amount: '$145.00',
        status: 'cancelled',
        rentalPeriod: 'N/A',
        paymentMethod: 'Visa •••• 4242',
        transactionId: 'TXN-234567891',
        receipt: true,
        refundAmount: '$145.00',
        refundDate: 'January 26, 2025',
      },
    ],
  };

  const toggleOrderDetails = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing':
        return <Clock className="w-5 h-5 text-gray-500" />;
      case 'confirmed':
      case 'completed':
        return <Check className="w-5 h-5 text-black" />;
      case 'cancelled':
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'processing':
        return 'bg-gray-200 text-gray-700';
      case 'confirmed':
        return 'bg-black text-white';
      case 'completed':
        return 'bg-gray-800 text-white';
      case 'cancelled':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const filteredOrders = orders[activeTab].filter((order) => {
    // Filter by search query
    const matchesSearch =
      order.gadget.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by status
    const matchesStatus =
      filterStatus === 'all' || order.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

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
          <option value="processing">Processing</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
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
                      <span>{order.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="text-right mr-4">
                    <div className="font-medium">{order.amount}</div>
                    <div className="text-sm text-gray-500">
                      {order.rentalPeriod !== 'N/A'
                        ? order.rentalPeriod
                        : 'Cancelled'}
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

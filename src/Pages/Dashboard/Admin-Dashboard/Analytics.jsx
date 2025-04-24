import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell, RadarChart, Radar, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import useAuth from '../../../Hooks/useAuth';

const AnalyticsDashboard = () => {
  const [period, setPeriod] = useState('monthly');
  const {user} = useAuth()
  
  // Demo data sets
  const monthlyVisits = [
    { name: 'Jan', visits: 4000, uniqueUsers: 2400 },
    { name: 'Feb', visits: 3000, uniqueUsers: 1398 },
    { name: 'Mar', visits: 2000, uniqueUsers: 9800 },
    { name: 'Apr', visits: 2780, uniqueUsers: 3908 },
    { name: 'May', visits: 1890, uniqueUsers: 4800 },
    { name: 'Jun', visits: 2390, uniqueUsers: 3800 },
  ];
  
  const weeklyVisits = [
    { name: 'Mon', visits: 840, uniqueUsers: 480 },
    { name: 'Tue', visits: 930, uniqueUsers: 598 },
    { name: 'Wed', visits: 1200, uniqueUsers: 750 },
    { name: 'Thu', visits: 980, uniqueUsers: 608 },
    { name: 'Fri', visits: 1100, uniqueUsers: 680 },
    { name: 'Sat', visits: 790, uniqueUsers: 470 },
    { name: 'Sun', visits: 590, uniqueUsers: 350 },
  ];
  
  const visitsData = period === 'monthly' ? monthlyVisits : weeklyVisits;
  
  const salesData = [
    { name: 'Q1', value: 34000 },
    { name: 'Q2', value: 48000 },
    { name: 'Q3', value: 42000 },
    { name: 'Q4', value: 61000 }
  ];
  
  const userDemographics = [
    { subject: '18-24', A: 80, B: 110, fullMark: 150 },
    { subject: '25-34', A: 120, B: 130, fullMark: 150 },
    { subject: '35-44', A: 86, B: 130, fullMark: 150 },
    { subject: '45-54', A: 99, B: 100, fullMark: 150 },
    { subject: '55-64', A: 85, B: 90, fullMark: 150 },
    { subject: '65+', A: 65, B: 85, fullMark: 150 },
  ];
  
  const trafficSources = [
    { name: 'Search', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Direct', value: 300 },
    { name: 'Referral', value: 200 },
    { name: 'Email', value: 100 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  const performanceMetrics = [
    { name: 'Bounce Rate', value: '38%', trend: '-4%', status: 'improved' },
    { name: 'Avg. Time', value: '3m 42s', trend: '+18s', status: 'improved' },
    { name: 'Pages/Visit', value: '3.8', trend: '+0.6', status: 'improved' },
    { name: 'Conversion', value: '4.2%', trend: '-0.3%', status: 'declined' },
  ];
  
  const recentActivity = [
    { action: 'Purchase', user: 'user281', amount: '$129.99', time: '4m ago' },
    { action: 'Signup', user: 'johndoe', amount: '-', time: '12m ago' },
    { action: 'Refund', user: 'user195', amount: '$49.99', time: '28m ago' },
    { action: 'Purchase', user: 'amysmith', amount: '$79.99', time: '35m ago' },
    { action: 'Signup', user: 'kylew', amount: '-', time: '42m ago' },
  ];
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex rounded-md overflow-hidden">
              <button 
                className={`px-4 py-2 text-sm font-medium ${period === 'weekly' ? 'bg-white text-blue-600' : 'bg-blue-700 text-white'}`}
                onClick={() => setPeriod('weekly')}
              >
                Weekly
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium ${period === 'monthly' ? 'bg-white text-blue-600' : 'bg-blue-700 text-white'}`}
                onClick={() => setPeriod('monthly')}
              >
                Monthly
              </button>
            </div>
            <div className="bg-blue-700 rounded-full h-10 w-10 flex items-center justify-center">
            <img className='rounded-4xl' src={user.photoURL} alt="" />
            </div>
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-700 bg-opacity-25 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-lg font-semibold">Total Users</div>
            <div className="text-3xl font-bold mt-2">24,568</div>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-green-300">↑ 12%</span>
              <span className="ml-2 text-blue-100">vs previous period</span>
            </div>
          </div>
          <div className="bg-blue-700 bg-opacity-25 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-lg font-semibold">Revenue</div>
            <div className="text-3xl font-bold mt-2">$184,593</div>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-green-300">↑ 8.3%</span>
              <span className="ml-2 text-blue-100">vs previous period</span>
            </div>
          </div>
          <div className="bg-blue-700 bg-opacity-25 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-lg font-semibold">Orders</div>
            <div className="text-3xl font-bold mt-2">1,893</div>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-green-300">↑ 5.7%</span>
              <span className="ml-2 text-blue-100">vs previous period</span>
            </div>
          </div>
          <div className="bg-blue-700 bg-opacity-25 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-lg font-semibold">Conversion Rate</div>
            <div className="text-3xl font-bold mt-2">3.8%</div>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-red-300">↓ 0.5%</span>
              <span className="ml-2 text-blue-100">vs previous period</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Traffic Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 7 }} />
                <Line type="monotone" dataKey="uniqueUsers" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Total Visits</div>
                <div className="text-xl font-bold text-gray-800">
                  {visitsData.reduce((sum, item) => sum + item.visits, 0).toLocaleString()}
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Unique Users</div>
                <div className="text-xl font-bold text-gray-800">
                  {visitsData.reduce((sum, item) => sum + item.uniqueUsers, 0).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          
          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Traffic Sources</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, 'Visits']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Performance Metrics */}
          <div className="lg:col-span-4 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Metrics</h2>
            <div className="space-y-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
                  <div>
                    <div className="text-sm text-gray-500">{metric.name}</div>
                    <div className="text-xl font-semibold text-gray-800">{metric.value}</div>
                  </div>
                  <div className={`text-sm font-medium px-2 py-1 rounded ${metric.status === 'improved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {metric.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sales by Quarter */}
          <div className="lg:col-span-4 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales by Quarter</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]}>
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* User Demographics */}
          <div className="lg:col-span-4 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Demographics</h2>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart outerRadius={90} data={userDemographics}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Male" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Female" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Activity Feed */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentActivity.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        activity.action === 'Purchase' ? 'bg-green-100 text-green-800' : 
                        activity.action === 'Signup' ? 'bg-blue-100 text-blue-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {activity.action}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
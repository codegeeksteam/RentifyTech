import React from 'react';
import { NavLink } from 'react-router-dom';

const AgentDashboard = () => {
    return (
            <nav className="flex-1 px-2 py-4 bg-gray-700">
                <NavLink>
                <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                   Agent Dashboard
                </a>
                </NavLink>
                <div className="divider divider-neutral"></div>
            </nav>
    );
};

export default AgentDashboard;
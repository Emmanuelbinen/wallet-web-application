import React from "react";
import { Link } from "react-router-dom";
import {
    HomeIcon,
    CurrencyDollarIcon,
    FolderIcon,
    DocumentReportIcon
} from "@heroicons/react/outline";

function Sidebar() {
    const menuItems = [
      { name: 'Dashboard', icon: HomeIcon, path: '/' },
      { name: 'Transactions', icon: CurrencyDollarIcon, path: '/transactions' },
      { name: 'Categories', icon: FolderIcon, path: '/categories' },
      { name: 'Reports', icon: DocumentReportIcon, path: '/reports' },
    ];
  
    return (
      <div className="w-64 bg-white h-screen shadow-lg">
        <div className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center p-3 mb-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600"
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  export default Sidebar;
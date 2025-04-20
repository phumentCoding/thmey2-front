import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { UsersIcon, NewspaperIcon, FolderIcon } from "@heroicons/react/24/outline"; // Updated icons

const Dashboard = () => {
  const data = [
    { month: "Jan", income: 20000, outcome: 15000 },
    { month: "Feb", income: 40000, outcome: 30000 },
    { month: "Mar", income: 50000, outcome: 60000 },
    { month: "Apr", income: 70000, outcome: 80000 },
    { month: "May", income: 90000, outcome: 50000 },
    { month: "Jun", income: 50000, outcome: 40000 },
    { month: "Jul", income: 45000, outcome: 42000 },
    { month: "Aug", income: 60000, outcome: 35000 },
    { month: "Sep", income: 85000, outcome: 50000 },
    { month: "Oct", income: 78000, outcome: 45000 },
    { month: "Nov", income: 60000, outcome: 50000 },
    { month: "Dec", income: 70000, outcome: 55000 },
  ];

  // Detect dark mode
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="p-6 min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-gray-900 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 dark:text-white"
    >
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center">
          <div className="bg-blue-500 p-3 rounded-full">
            <UsersIcon className="h-6 w-6 text-white" /> {/* User Admin Icon */}
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total User Admin</h2>
            <p className="text-xl font-semibold">5</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center">
          <div className="bg-green-500 p-3 rounded-full">
            <NewspaperIcon className="h-6 w-6 text-white" /> {/* News Icon */}
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total News</h2>
            <p className="text-xl font-semibold">8</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center">
          <div className="bg-purple-500 p-3 rounded-full">
            <FolderIcon className="h-6 w-6 text-white" /> {/* Category Icon */}
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Category</h2>
            <p className="text-xl font-semibold">120</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center">
          <div className="bg-yellow-500 p-3 rounded-full">
            {/* Add another appropriate icon, for example, a statistics icon */}
            <FolderIcon className="h-6 w-6 text-white" /> {/* Placeholder for a new stat */}
          </div>
          <div className="ml-4">
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Stats</h2>
            <p className="text-xl font-semibold">10</p>
          </div>
        </div>
      </div>

      {/* Income vs Outcome Chart */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Income vs Outcome Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <XAxis
              dataKey="month"
              stroke={isDarkMode ? "#ffffff" : "#000000"} // Adjust text color
            />
            <YAxis stroke={isDarkMode ? "#ffffff" : "#000000"} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                color: isDarkMode ? "#ffffff" : "#000000",
                borderRadius: "8px",
              }}
              itemStyle={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            />
            <Legend iconType="circle" wrapperStyle={{ color: isDarkMode ? "#ffffff" : "#000000" }} />

            {/* Blue Line for Income */}
            {/* <Line type="monotone" dataKey="income" stroke="#4299E1" strokeWidth={2} dot={false} /> */}

            {/* Purple Line for Outcome */}
            <Line type="monotone" dataKey="outcome" stroke="#9F7AEA" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

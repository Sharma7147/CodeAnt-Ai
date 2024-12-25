import React, { useState } from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="p-4 border-b border-gray-300 flex justify-between items-center">
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden bg-gray-100 p-2 rounded-md"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <h1 className="text-2xl font-bold">Repositories</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search Repositories"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <button className="bg-gray-200 px-4 py-2 rounded-md hidden md:block">
          Refresh All
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block">
          Add Repository
        </button>
      </div>
    </div>
  );
};

const repositories = [
  { name: "design-system", type: "Public", tech: "React", size: "7320 KB", updated: "1 day ago" },
  { name: "codeant-ci-app", type: "Private", tech: "Javascript", size: "5871 KB", updated: "2 days ago" },
  { name: "analytics-dashboard", type: "Private", tech: "Python", size: "4521 KB", updated: "5 days ago" },
  { name: "mobile-app", type: "Public", tech: "Swift", size: "3096 KB", updated: "3 days ago" },
  { name: "e-commerce-platform", type: "Private", tech: "Java", size: "6210 KB", updated: "6 days ago" },
  { name: "blog-website", type: "Public", tech: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
  { name: "social-network", type: "Public", tech: "PHP", size: "5432 KB", updated: "7 days ago" },
];

const RepositoryList = () => {
  return (
    <div className="p-4 space-y-4">
      {repositories.map((repo, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between items-start md:items-center p-4 border border-gray-300 rounded-md"
        >
          <div>
            <span className="text-lg font-semibold">{repo.name}</span>
            <span className="ml-2 text-sm text-gray-500">({repo.type})</span>
          </div>
          <div className="flex flex-wrap space-x-4 mt-2 md:mt-0 text-sm text-gray-600">
            <span>{repo.tech}</span>
            <span>{repo.size}</span>
            <span>{repo.updated}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed md:relative w-64 bg-gray-100 p-4 flex flex-col justify-between transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 z-20`}
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">CodeAnt AI</h2>
        <ul className="space-y-4">
          <li className="font-semibold text-blue-600">Repositories</li>
          <li>AI Code Review</li>
          <li>Cloud Security</li>
          <li>How to Use</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="text-sm text-gray-500">
        <p className="mb-2">Support</p>
        <p>Logout</p>
      </div>

      {/* Close Button for Mobile */}
      <button
        className="absolute top-4 right-4 md:hidden text-gray-500"
        onClick={toggleSidebar}
      >
        ✖
      </button>
    </div>
  );
};


export default { Header,RepositoryList,Sidebar}

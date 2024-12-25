import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-gray-50 flex flex-col items-start justify-center space-y-8 px-6 md:px-12">
        {/* Main Heading */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            AI to Detect & Autofix Bad Code
          </h1>
        </div>

        {/* Statistics */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-lg font-semibold text-gray-800">30+</p>
              <p className="text-sm text-gray-600">Language Support</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">10K+</p>
              <p className="text-sm text-gray-600">Developers</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">100K+</p>
              <p className="text-sm text-gray-600">Hours Saved</p>
            </div>
          </div>

          {/* Additional Statistics */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold text-gray-800">500K+</p>
              <p className="text-sm text-green-500">↑ 14% this week</p>
            </div>
            <p className="text-gray-600 text-sm">Issues Fixed</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white max-w-md w-full px-6 py-8 shadow-md rounded-lg flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Welcome to CodeAnt AI
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-l-lg">
            SAAS
          </button>
          <button className="bg-gray-200 px-6 py-2 rounded-r-lg">Self Hosted</button>
        </div>

        {/* Buttons */}
        <div className="space-y-4 w-full">
          <button className="w-full border border-gray-300 py-3 text-gray-700 rounded-lg flex items-center justify-center">
            <i className="fab fa-github mr-2"></i> Sign in with Github
          </button>
          <button className="w-full border border-gray-300 py-3 text-gray-700 rounded-lg flex items-center justify-center">
            <i className="fab fa-bitbucket mr-2"></i> Sign in with Bitbucket
          </button>
          <button className="w-full border border-gray-300 py-3 text-gray-700 rounded-lg flex items-center justify-center">
            <i className="fab fa-azure-devops mr-2"></i> Sign in with Azure DevOps
          </button>
          <button className="w-full border border-gray-300 py-3 text-gray-700 rounded-lg flex items-center justify-center">
            <i className="fab fa-gitlab mr-2"></i> Sign in with GitLab
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          By signing up you agree to the <span className="text-blue-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;




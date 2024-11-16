import React from 'react'

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-xl font-semibold text-center mb-2 text-gray-800">
              Create Account
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Please sign up to book an appointment
            </p>
    
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-[#68BBE3] text-white py-2 px-4 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Create account
              </button>
            </form>
    
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-[#68BBE3] font-medium hover:underline"
                >
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      );
  }
export default Login
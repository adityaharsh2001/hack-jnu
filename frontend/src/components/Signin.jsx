import React from 'react'

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h2>
      
      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your password"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Role</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your role"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
      >
        Sign In
      </button>
    </div>
  </div>
  )
}

export default Signin
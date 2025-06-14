'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt: Date;
}

const AdminPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedEmails, setCopiedEmails] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/auth/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmails((prev) => [...prev, email]);
      setTimeout(() => {
        setCopiedEmails((prev) => prev.filter((e) => e !== email));
      }, 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  const copyAllEmails = async () => {
    try {
      const emails = users.map((user) => user.email).join(', ');
      await navigator.clipboard.writeText(emails);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy emails:', error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      (user.phone && user.phone.toLowerCase().includes(searchLower))
    );
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-background">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,142,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(18,255,142,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">User Management</h1>
            <div className="flex items-center gap-4">
              <button
                disabled
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-800/30 border border-gray-700/30 rounded-lg cursor-not-allowed"
              >
                Copy All Emails
              </button>
              <Link
                href="/"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800/50 border border-gray-700/30 rounded-lg hover:bg-gray-700/50 hover:border-primary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-gray-800/50 rounded-lg"></div>
            <div className="h-12 bg-gray-800/50 rounded-lg"></div>
            <div className="h-12 bg-gray-800/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,142,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(18,255,142,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 relative">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={copyAllEmails}
              className={`flex items-center px-4 py-2 text-sm font-medium ${
                copySuccess
                  ? 'text-black bg-primary border-primary'
                  : 'text-gray-200 bg-gray-800/50 border-gray-700/30 hover:bg-gray-700/50 hover:border-primary/30'
              } border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50`}
            >
              {copySuccess ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                'Copy All Emails'
              )}
            </button>
            <Link
              href="/"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800/50 border border-gray-700/30 rounded-lg hover:bg-gray-700/50 hover:border-primary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, or phone..."
              className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30
                placeholder-gray-500 transition-all duration-300 shadow-sm hover:border-gray-400"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-lg opacity-50" />
          <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Joined
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.firstName} {user.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {user.phone || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => copyEmail(user.email)}
                          className={`inline-flex items-center px-3 py-1.5 text-sm font-medium ${
                            copiedEmails.includes(user.email)
                              ? 'text-white bg-primary border-primary'
                              : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50 hover:border-primary/30'
                          } border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50`}
                        >
                          {copiedEmails.includes(user.email) ? (
                            <>
                              <svg
                                className="w-4 h-4 mr-1.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Copied!
                            </>
                          ) : (
                            'Copy Email'
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

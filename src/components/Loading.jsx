import React from 'react';

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>
  );
}

export default Loading;

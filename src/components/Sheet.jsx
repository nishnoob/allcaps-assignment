import React from "react";

const GptSheet = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto border border-border">
      {/* Header Section */}
      <div className="text-center">
        <div className="w-10 h-10 mx-auto mb-2">
          {/* Replace with your logo/image */}
          <img
            src="https://openai.com/logo.png"
            alt="GPT-4 Model Logo"
            className="object-contain"
          />
        </div>
        <h2 className="text-lg font-bold">GPT 4 Model</h2>
        <p className="text-sm text-gray-600">
          The latest GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more...
        </p>
      </div>

      {/* Context & Training Data */}
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <p className="text-sm font-semibold">Context Window</p>
          <p className="text-gray-600 text-sm">128,000 tokens</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold">Training Data</p>
          <p className="text-gray-600 text-sm">Up to Apr 2023</p>
        </div>
      </div>

      {/* Status Section */}
      <div className="mt-6">
        <div className="flex items-center bg-green-100 text-green-600 px-3 py-2 rounded-md mb-2">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span> Searched for: Lorem ipsum dolor sit amet</span>
        </div>
        <div className="flex items-center bg-green-100 text-green-600 px-3 py-2 rounded-md">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Successfully generated responses</span>
        </div>
      </div>

      {/* Generated Response Section */}
      <div className="mt-6">
        <p className="text-gray-800 mb-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </li>
          <li>
            Lorem ipsum dolor that tincidunt bibendum gravida phasellus sed dignitas id tempus ridiculus.
          </li>
          <li>
            Lorem ipsum also confirms that tincidunt bibendum gravida phasellus sed dignitas id tempus ridiculus.
          </li>
        </ol>
      </div>

      {/* Links Section */}
      <div className="mt-6 flex space-x-4">
        <a
          href="https://google.com"
          className="bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        >
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6" />
        </a>
        <a
          href="https://medium.com"
          className="bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        >
          <img src="https://img.icons8.com/color/48/000000/medium.png" alt="Medium" className="w-6 h-6" />
        </a>
        <a
          href="https://producthunt.com"
          className="bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        >
          <img src="https://img.icons8.com/color/48/000000/product-hunt.png" alt="Product Hunt" className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com"
          className="bg-gray-100 rounded-full p-2 hover:bg-gray-200"
        >
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>

      {/* Fact Check Section */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">Fact check history</p>
      </div>
    </div>
  );
};

export default GptSheet;
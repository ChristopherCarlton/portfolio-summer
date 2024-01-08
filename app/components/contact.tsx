import * as React from "react";
import Layout from "./Layout";

export default function MainComponent() {
  return (
    <Layout>
    <div className="min-h-screen text-black bg-[#F4F5F7] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow max-w-[600px] w-full">
        <div className="flex justify-center items-center mb-10">
          <span className="text-[#0000FF] text-5xl font-bold mr-2">💬</span>
          <h1 className="text-5xl font-bold">Let's talk</h1>
        </div>
        <form>
          <div className="flex gap-10 mb-8">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border-0 border-b-2 border-black bg-transparent py-2 focus:outline-none"
                name="firstName"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border-0 border-b-2 border-black bg-transparent py-2 focus:outline-none"
                name="lastName"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border-0 border-b-2 border-black bg-transparent py-2 focus:outline-none"
              name="email"
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              className="w-full border-0 border-b-2 border-black bg-transparent py-2 focus:outline-none"
              name="subject"
            />
          </div>
          <div className="mb-10">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full border-0 border-b-2 border-black bg-transparent py-2 focus:outline-none"
              name="message"
            //   rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[150px] bg-[#0000FF] text-white py-3 px-4 rounded-full hover:bg-[#0000cc]"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
    
    </Layout>
  );
}
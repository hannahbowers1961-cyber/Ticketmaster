import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col font-sans text-white">
      
      {/* Top Header */}
      <header className="bg-[#1a1a1a] pt-12 pb-4 px-4 flex items-center justify-between">
        <div className="w-10"></div> {/* Spacer for center alignment */}
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold">My Tickets</h1>
          <img 
            src="https://flagcdn.com/w40/us.png" 
            alt="US" 
            className="w-6 h-6 object-cover rounded-full border border-gray-200"
          />
        </div>
        <button className="text-sm font-medium text-gray-200">Help</button>
      </header>

      {/* Tabs */}
      <div className="bg-[#1a1a1a] flex border-b border-[#333]">
        <button className="flex-1 pb-3 text-center border-b-2 border-white">
          <span className="text-[13px] font-bold tracking-wide">UPCOMING (1)</span>
        </button>
        <button className="flex-1 pb-3 text-center">
          <span className="text-[13px] font-bold text-gray-500 tracking-wide">PAST (2)</span>
        </button>
      </div>

      {/* Main Content Area (Blurred Background Effect) */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#3a3026] to-[#1a1c19] px-4 pt-6 pb-24">
      

        {/* Ticket Card */}
        <div className="bg-black w-full rounded-sm overflow-hidden shadow-xl">
          {/* Image */}
          <div className="w-full h-56 bg-gray-800 relative">
            <img 
              src="https://www.hollywoodreporter.com/wp-content/uploads/2026/01/Harry-Styles-Together-Together-Tour-Tickets-MAIN.jpg?w=1296" 
              alt="Concert Placeholder" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="relative">
            {/* Overlapping Date Badge */}
            <div className="absolute -top-7 left-0 bg-black px-3 py-1.5">
              <p className="text-[11px] font-bold tracking-wide uppercase">
                SAT, OCT 31, 2026 • 8:00 PM
              </p>
            </div>

            {/* Event Title */}
            <div className="pt-4 px-4 pb-3">
              <h3 className="text-[22px] font-extrabold uppercase leading-tight tracking-tight">
                HARRY STYLES: TOGETHER,<br />TOGETHER. HARRYWEEN
              </h3>
            </div>

            {/* Divider */}
            <div className="mx-4 border-b border-[#333]"></div>

            {/* Location & Ticket Count */}
            <div className="flex justify-between items-center px-4 py-3">
              <p className="text-[13px] text-gray-400">
                Madison Square Garden — New York, NY
              </p>
              <div className="flex items-center space-x-1 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path>
                  <line x1="4" y1="10" x2="20" y2="10"></line>
                  <line x1="4" y1="14" x2="20" y2="14"></line>
                </svg>
                <span className="text-sm font-semibold">x4</span>
              </div>
            </div>

            {/* Button */}
            <div className="px-4 pb-5 pt-1">
              {/* Button */}
            <div className="px-4 pb-5 pt-1">
              <Link href="/tickets" className="block w-full text-center bg-[#1e40af] hover:bg-blue-700 text-white font-semibold py-3 rounded-sm transition-colors text-[15px]">
                View Tickets
              </Link>
            </div>
            </div>
          </div>
        </div>

      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white text-gray-400 border-t border-gray-200 px-2 pb-safe pt-2 flex justify-between items-end pb-6">
        {/* Discover */}
        <button className="flex flex-col items-center flex-1 space-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span className="text-[10px] font-medium">Discover</span>
        </button>

        {/* For You */}
        <button className="flex flex-col items-center flex-1 space-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span className="text-[10px] font-medium">For You</span>
        </button>

        {/* My Tickets (Active) */}
        <button className="flex flex-col items-center flex-1 space-y-1 text-[#1e40af]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          </svg>
          <span className="text-[10px] font-medium">My Tickets</span>
        </button>

        {/* Sell */}
        <button className="flex flex-col items-center flex-1 space-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M6 12h.01M18 12h.01"></path>
          </svg>
          <span className="text-[10px] font-medium">Sell</span>
        </button>

        {/* My Account */}
        <button className="flex flex-col items-center flex-1 space-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5"></circle>
            <path d="M20 21a8 8 0 0 0-16 0"></path>
          </svg>
          <span className="text-[10px] font-medium">My Account</span>
        </button>
      </nav>

    </div>
  );
}

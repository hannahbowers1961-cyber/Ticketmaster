"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function TicketBarcodeView() {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalTickets = 4;

  // This function tracks which ticket is currently centered on the screen
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollX = scrollRef.current.scrollLeft;
      const cardWidth = window.innerWidth * 0.88; // matches the 88vw width of the cards
      const index = Math.round(scrollX / cardWidth) + 1;
      setActiveIndex(index > totalTickets ? totalTickets : index < 1 ? 1 : index);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f4] font-sans text-black flex flex-col relative overflow-hidden">
      
      {/* Inline styles for hiding the scrollbar and animating the scanner */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes scan {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        .animate-scan {
          animation: scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          width: 3px;
        }
      `}} />

      {/* Top Header */}
      <header className="fixed top-0 w-full bg-white z-50 px-4 py-3 flex items-center border-b border-gray-200">
        <Link href="/tickets" className="mr-3 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <div className="flex-1 overflow-hidden">
          <h1 className="text-[15px] font-extrabold truncate text-black">Harry Styles: Together, Together. Harryween.</h1>
          <p className="text-[11px] text-gray-500 truncate mt-0.5">Oct 30, 2026, 8:00 PM - Madison Square Garden - New York, NY</p>
        </div>
      </header>

      {/* Swipeable Carousel Area */}
      <main className="flex-1 pt-20 pb-32">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 items-center h-full"
        >
          {/* Map through the 4 tickets */}
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="w-[88vw] h-[65vh] flex-shrink-0 snap-center mx-2 first:ml-[6vw] last:mr-[6vw] rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col bg-white border border-gray-100">
              
              {/* Blue Ticketmaster Header */}
              <div className="bg-[#1f4ebb] text-white text-center py-2">
                <span className="font-regular text-[13px] tracking-widest lowercase italic">ticketmaster</span>
              </div>
              
              {/* Image & Floating Barcode Block */}
              <div className="relative w-full h-[55%] bg-gray-200">
                <img 
                  src="https://www.hollywoodreporter.com/wp-content/uploads/2026/01/Harry-Styles-Together-Together-Tour-Tickets-MAIN.jpg?w=1296" 
                  alt="Concert Placeholder" 
                  className="w-full h-full object-cover"
                />
                
                {/* The Floating Barcode */}
                <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-lg p-3 z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-gray-800">Screenshots won't get you in</span>
                    <button className="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2v6h-6"></path>
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Actual Barcode Image */}
                  <div className="h-16 w-full relative bg-white flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/PDF417_barcode.svg" 
                      alt="Barcode" 
                      className="w-full h-full object-fill px-2 py-1"
                    />
                    
                    {/* The Blue Scanner Line (Forward looping) */}
                    <div className="absolute top-0 bottom-0 left-0 w-full overflow-hidden">
                      {/* We added 'absolute' here so it follows the 'left' animation */}
                      <div className="absolute h-full w-[4px] bg-[#4285f4] shadow-[0_0_16px_6px_rgba(66,133,244,0.8)] animate-scan"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Section (Where your redacted block was) */}
              <div className="flex-1 bg-white px-6 pb-6 pt-4 flex flex-col justify-end">
                {/* Standard Ticket Info placeholders */}
                <div className="flex justify-between text-center mb-4 border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-wide mb-0.5">SEC</p>
                    <p className="text-2xl font-extrabold">119</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-wide mb-0.5">ROW</p>
                    <p className="text-2xl font-extrabold">C</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-wide mb-0.5">SEAT</p>
                    <p className="text-2xl font-extrabold">{9 + num}</p>
                  </div>
                </div>
                
                {/* Simulated NFC / SafeTix Area */}
                <div className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                    <path d="M12 12v9"></path>
                    <path d="m8 17 4 4 4-4"></path>
                  </svg>
                  <span className="text-[12px] font-bold uppercase tracking-wider">Hold Near Reader</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </main>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 w-full bg-[#f2f2f4] pb-safe pt-2 px-4 z-50">
        {/* Pagination Indicator */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-300/80 px-4 py-1.5 rounded-full">
            <span className="text-[13px] font-bold text-gray-600">
              {activeIndex} of {totalTickets}
            </span>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex space-x-3 pb-8 px-2">
          {/* Apple Wallet Button */}
          <button className="flex-1 bg-black text-white rounded-lg py-2.5 flex items-center justify-center space-x-2 border border-black hover:bg-gray-900">
            <div className="w-9 h-7 relative bg-gray-200 rounded-md overflow-hidden flex flex-col justify-end border border-gray-600">
                <div className="absolute top-0 w-full h-1.5 bg-[#44a2e5]"></div>
                <div className="absolute top-1.5 w-full h-1 bg-[#a3d166]"></div>
                <div className="absolute top-2.5 w-full h-1 bg-[#f7cf49]"></div>
                <div className="absolute top-3.5 w-full h-3.5 bg-[#f14846] rounded-b-full"></div>
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[10px] font-medium tracking-wide">Add to</span>
              <span className="block text-[15px] font-semibold -mt-0.5">Apple Wallet</span>
            </div>
          </button>
          
          {/* Ticket Info Button */}
          <button className="flex-1 bg-white border-[1.5px] border-black text-black rounded-full py-2.5 flex items-center justify-center space-x-2 shadow-sm hover:bg-gray-50">
            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white">
              <span className="text-[13px] font-bold italic font-serif">i</span>
            </div>
            <span className="text-[14px] font-bold">Ticket Info</span>
          </button>
        </div>
      </div>

    </div>
  );
}
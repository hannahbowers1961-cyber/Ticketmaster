"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TicketDetails() {
  // State to manage the transfer flow
  // 'idle' | 'auth-loading' | 'auth-input' | 'auth-verifying' | 'select-tickets' | 'transfer-method' | 'recipient-details'
  const [transferStep, setTransferStep] = useState('idle');
  const [otpCode, setOtpCode] = useState('');
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  // Simulated loading delays to match the real app feel
  useEffect(() => {
    if (transferStep === 'auth-loading') {
      const timer = setTimeout(() => setTransferStep('auth-input'), 1500);
      return () => clearTimeout(timer);
    }
    if (transferStep === 'auth-verifying') {
      const timer = setTimeout(() => setTransferStep('select-tickets'), 1000);
      return () => clearTimeout(timer);
    }
  }, [transferStep]);

  const closeTransfer = () => {
    setTransferStep('idle');
    setOtpCode('');
    setSelectedSeats([]);
  };

  const toggleSeat = (seat: number) => {
    setSelectedSeats(prev => 
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black pb-32 relative">
      
      {/* ========================================= */}
      {/* BACKGROUND PAGE CONTENT (Already Built)   */}
      {/* ========================================= */}
      <div className="relative w-full h-72 bg-gray-800">
        <img src="https://www.hollywoodreporter.com/wp-content/uploads/2026/01/Harry-Styles-Together-Together-Tour-Tickets-MAIN.jpg?w=1296" alt="Concert Placeholder" className="w-full h-full object-cover" />
        <div className="absolute top-12 left-4">
          <Link href="/" className="flex items-center justify-center w-10 h-10 bg-black/40 rounded-full text-white backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </Link>
        </div>
        <div className="absolute top-12 right-4">
          <button className="bg-black/40 px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm">Help</button>
        </div>
      </div>

      <div className="bg-[#1a1a1a] text-white w-full relative">
        <div className="absolute -top-7 left-0 bg-[#1a1a1a] px-4 py-1.5 z-10">
          <p className="text-[12px] font-bold tracking-wide uppercase">FRI, AUG 28, 2026 • 8:00 PM</p>
        </div>
        <div className="px-4 pb-5 pt-6">
          <h1 className="text-[22px] font-extrabold uppercase leading-tight tracking-tight mb-3">HARRY STYLES: TOGETHER,<br />TOGETHER</h1>
          <div className="flex justify-between items-center text-gray-300 mb-5">
            <p className="text-[14px]">Madison Square Garden — New York, NY</p>
            <div className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path><line x1="4" y1="10" x2="20" y2="10"></line><line x1="4" y1="14" x2="20" y2="14"></line></svg>
              <span className="font-semibold text-sm">x4</span>
            </div>
          </div>
          <Link href="/tickets/view" className="w-full bg-[#0a58d6] hover:bg-blue-700 text-white font-semibold py-3 rounded-sm flex items-center justify-center space-x-2 text-[15px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5v14"></path><path d="M8 5v14"></path><path d="M12 5v14"></path><path d="M17 5v14"></path><path d="M21 5v14"></path></svg>
            <span>View Tickets</span>
          </Link>
        </div>
      </div>

      <div className="flex border-b border-gray-200 mt-2 px-4">
        <button className="flex-1 pb-3 text-center border-b-2 border-black"><span className="text-[15px] font-bold">Tickets</span></button>
        <button className="flex-1 pb-3 text-center"><span className="text-[15px] font-medium text-gray-400">Extras</span></button>
      </div>

      <div className="px-4 py-5 flex justify-between items-center">
        <div>
          <h2 className="text-[15px] font-bold">Order #69-5J4K3L2</h2>
          <p className="text-[13px] text-gray-400 mt-0.5">x4 Tickets</p>
        </div>
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </button>
      </div>

      <div className="px-4 space-y-4">
        {[8, 9, 10, 11].map((seat) => (
          <div key={seat} className="border border-gray-200 rounded-sm overflow-hidden">
            <div className="bg-[#f0f0f0] py-2 px-4 border-b border-gray-200"><p className="text-[11px] font-bold tracking-wide text-gray-700">AMERICAN EXPRESS PRESALE</p></div>
            <div className="flex justify-between px-6 py-4 bg-white text-center">
              <div><p className="text-[11px] font-bold text-gray-500 tracking-wide mb-1">SECTION</p><p className="text-xl font-bold">105</p></div>
              <div><p className="text-[11px] font-bold text-gray-500 tracking-wide mb-1">ROW</p><p className="text-xl font-bold">18</p></div>
              <div><p className="text-[11px] font-bold text-gray-500 tracking-wide mb-1">SEAT</p><p className="text-xl font-bold">{seat}</p></div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 mt-10 mb-4"><h3 className="text-[13px] font-bold tracking-widest text-black uppercase">More Options</h3></div>

      <div className="px-4 mb-6">
        <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
          <div className="relative h-48 w-full bg-gray-300">
            <img src="/images/MSG.png" alt="Map Placeholder" className="w-full h-full object-cover" />
            <div className="absolute top-3 left-4"></div>
            <div className="absolute top-3 right-3 flex flex-col bg-white/90 rounded-sm shadow-sm overflow-hidden">
              <button className="w-8 h-8 flex items-center justify-center text-black border-b border-gray-300 text-xl font-light">+</button>
              <button className="w-8 h-8 flex items-center justify-center text-black text-xl font-light">-</button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#ea4335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white"></circle></svg>
            </div>
          </div>
          <div className="bg-white p-4"> 
            <button className="w-full bg-[#e8e8ea] hover:bg-gray-300 text-black font-bold py-3.5 rounded-sm text-[15px] transition-colors">Get Directions</button>
          </div>
        </div>
      </div>

      <div className="px-4 mb-32"> 
        <div className="rounded-sm overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-[#151515] text-white flex">
            <div className="w-[60%] flex flex-col relative">
              <div className="h-36 w-full p-4 pb-0 relative">
                <img src="https://www.hollywoodreporter.com/wp-content/uploads/2026/01/Harry-Styles-Together-Together-Tour-Tickets-MAIN.jpg?w=1296" alt="Seating Chart Placeholder" className="w-full h-full object-contain object-left-bottom opacity-80" />
              </div>
              <div className="px-4 pb-4 relative z-10 -mt-3">
                <div className="bg-[#151515] inline-block pr-3 py-1">
                  <p className="text-[10px] font-bold tracking-wide uppercase text-[#c3a976]">FRI, AUG 28, 2026 • 8:00 PM</p>
                </div>
                <h4 className="text-[13px] font-extrabold uppercase leading-tight mt-0.5 mb-1">HARRY STYLES: TOGETHER,<br />TOGETHER</h4>
                <p className="text-[10px] text-gray-400">Madison Square Garden — New York, NY</p>
              </div>
            </div>
            <div className="w-[40%] flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-[18px] font-extrabold uppercase leading-tight mb-2">YOU GOT<br />TICKETS!</h3>
              <p className="text-[11px] font-medium text-gray-300 uppercase tracking-wide">SEC 105, ROW 18</p>
            </div>
          </div>
          <div className="bg-[#f0f0f2] p-5">
            <h4 className="text-[15px] font-bold text-black mb-1.5">Post on Social Media</h4>
            <p className="text-[14px] text-gray-700 leading-snug">Build hype for the event, and share that you got tickets with your friends and family.</p>
          </div>
        </div>
      </div>

      {/* Action Bar - Triggers the Transfer Flow */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center border border-gray-100 z-40 overflow-hidden">
        
        <button onClick={() => setTransferStep('auth-loading')} className="w-[110px] flex flex-col items-center justify-center py-3 space-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a58d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          <span className="text-[12px] font-bold text-gray-800">Transfer</span>
        </button>
        
        <div className="w-[1px] h-10 bg-gray-200"></div>
        
        <button className="w-[110px] flex flex-col items-center justify-center py-3 space-y-1">
          {/* New refresh-cw Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
          <span className="text-[12px] font-bold text-gray-400">Sell</span>
        </button>

      </div>


      {/* ========================================= */}
      {/* THE TRANSFER FLOW MODALS & OVERLAYS       */}
      {/* ========================================= */}
      
      {/* Phase 1: Authentication Full Screen */}
      {(transferStep === 'auth-loading' || transferStep === 'auth-input' || transferStep === 'auth-verifying') && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col">
          {/* Blue Header */}
          <div className="bg-[#0256d4] text-white px-4 py-4 flex items-center justify-between shadow-sm">
            <button onClick={closeTransfer} className="text-[15px] font-medium w-16 text-left">Cancel</button>
            <h2 className="text-[16px] font-semibold flex-1 text-center">Authentication</h2>
            <div className="w-16"></div> {/* Spacer */}
          </div>

          {/* Body Content */}
          <div className="flex-1 flex flex-col bg-[#fafafa]">
            {transferStep === 'auth-loading' ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-[#0256d4] rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="p-6 bg-white flex-1">
                <h3 className="text-[22px] font-bold leading-tight mb-4 text-black">Authenticate Your<br/>Account</h3>
                <p className="text-[15px] text-gray-700 mb-8 leading-snug">
                  A one-time code has been sent to <span className="font-bold">*****7934</span>.<br/>Please enter your code below to continue.
                </p>
                
                <div className="mb-8">
                  <label className="block text-[13px] font-medium text-gray-700 mb-2">One-Time Code</label>
                  <input 
                    type="number" 
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-2xl tracking-[0.3em] font-medium outline-none focus:border-[#0256d4]"
                    maxLength={6}
                  />
                  <p className="text-[13px] text-gray-500 mt-4">It may take a minute to receive your code.</p>
                </div>

                <button 
                  onClick={() => setTransferStep('auth-verifying')}
                  disabled={otpCode.length < 6}
                  className={`w-full py-3.5 rounded-sm font-bold text-[15px] flex justify-center items-center ${otpCode.length >= 6 ? 'bg-[#0a58d6] text-white' : 'bg-gray-200 text-gray-400'}`}
                >
                  {transferStep === 'auth-verifying' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Confirm Code"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}


      {/* Phase 2: Bottom Sheet Overlays */}
      {(transferStep === 'select-tickets' || transferStep === 'transfer-method' || transferStep === 'recipient-details') && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex flex-col justify-end">
          {/* Black overlay clickable area to close */}
          <div className="flex-1" onClick={closeTransfer}></div>
          
          {/* Sliding Sheet */}
          <div className="bg-white rounded-t-xl w-full flex flex-col animate-[slideUp_0.3s_ease-out]">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
            `}} />
            
            {/* Dragger Handle */}
            <div className="w-full flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-black rounded-full"></div>
            </div>

            {/* View A: Select Tickets */}
            {transferStep === 'select-tickets' && (
              <>
                <div className="text-center pb-4 pt-2 border-b border-gray-200">
                  <h3 className="text-[14px] font-bold uppercase tracking-widest text-black">Select Tickets To Transfer</h3>
                </div>
                
                <div className="p-4 bg-gray-50 min-h-[30vh]">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[15px] text-black">Sec 105, Row 18</p>
                    <p className="text-[13px] text-black font-semibold flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M4 5v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path></svg>
                      4 Tickets
                    </p>
                  </div>
                  
                  <div className="flex justify-between space-x-2">
                    {[8, 9, 10, 11].map(seat => {
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <button 
                          key={seat} 
                          onClick={() => toggleSeat(seat)}
                          className="flex-1 flex flex-col items-center border border-gray-200 bg-white rounded-sm overflow-hidden pb-3"
                        >
                          <div className="bg-[#0a58d6] w-full py-1 text-center text-white text-[11px] font-bold tracking-wide">
                            SEAT {seat}
                          </div>
                          <div className="mt-3">
                            {isSelected ? (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a58d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            ) : (
                              <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-between items-center p-4 border-t border-gray-200 mt-10 mb-4 pb-safe bg-white">
                  <span className="text-[15px] font-medium text-gray-700">{selectedSeats.length} Selected</span>
                  <button 
                    disabled={selectedSeats.length === 0}
                    onClick={() => setTransferStep('transfer-method')}
                    className={`text-[14px] font-bold uppercase tracking-wider flex items-center ${selectedSeats.length > 0 ? 'text-[#0a58d6]' : 'text-gray-300'}`}
                  >
                    Transfer To <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
              </>
            )}

            {/* View B: Transfer Method */}
            {transferStep === 'transfer-method' && (
              <>
                <div className="text-center pb-4 pt-2 border-b border-gray-200">
                  <h3 className="text-[14px] font-bold uppercase tracking-widest text-black">Transfer To</h3>
                </div>
                
                <div className="p-4 bg-gray-50 min-h-[40vh] flex flex-col items-center">
                  <button className="w-full bg-white border border-black rounded-sm py-3.5 mb-3 font-bold text-[15px] flex items-center justify-center">
                    Select From Contacts 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </button>
                  <button onClick={() => setTransferStep('recipient-details')} className="w-full bg-white border border-black rounded-sm py-3.5 mb-8 font-bold text-[15px] flex items-center justify-center">
                    Manually Enter A Recipient 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>

                  <svg className="w-10 h-10 text-gray-800 mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  <p className="text-center text-[15px] font-bold text-black mb-1">Transfer Tickets Via Email or Text Message</p>
                  <p className="text-center text-[14px] text-gray-600 px-6">Select an Email or mobile number to transfer tickets to your recipient.</p>
                </div>

                <div className="p-4 border-t border-gray-200 mt-10 mb-2 pb-safe bg-white flex items-center">
                  <button onClick={() => setTransferStep('select-tickets')} className="text-[#0a58d6] text-[15px] font-semibold flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg> Back
                  </button>
                </div>
              </>
            )}

            {/* View C: Recipient Details Form */}
            {transferStep === 'recipient-details' && (
              <>
                <div className="text-center pb-4 pt-2 border-b border-gray-200">
                  <h3 className="text-[14px] font-bold uppercase tracking-widest text-black">Recipient Details</h3>
                </div>
                
                <div className="p-4 bg-gray-50 min-h-[50vh] space-y-4">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-sm px-3 py-2.5 outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-sm px-3 py-2.5 outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full border border-gray-300 rounded-sm px-3 py-2.5 outline-none focus:border-black mb-1" />
                    <button className="text-[#0a58d6] text-[13px] font-medium">Use Mobile Number Instead</button>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1">Note</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-sm px-3 py-2 outline-none focus:border-black"></textarea>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 pb-safe bg-white flex justify-between items-center">
                  <button onClick={() => setTransferStep('transfer-method')} className="text-[#0a58d6] text-[15px] font-semibold flex items-center uppercase">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg> Back
                  </button>
                  <button className="bg-black text-white font-bold text-[15px] px-6 py-3.5 rounded-sm">
                    Transfer {selectedSeats.length} Tickets
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
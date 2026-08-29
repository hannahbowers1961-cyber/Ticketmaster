'use client'

import { useState } from 'react'

// Minimal inline icon components to avoid external dependency on 'lucide-react'
const Icon = ({ children, ...props }: any) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
)
export const CalendarDays = (p: any) => (
  <Icon {...p}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></Icon>
)
export const ChevronDown = (p: any) => (<Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>)
export const ChevronLeft = (p: any) => (<Icon {...p}><polyline points="15 18 9 12 15 6"/></Icon>)
export const ChevronRight = (p: any) => (<Icon {...p}><polyline points="9 6 15 12 9 18"/></Icon>)
export const MapPin = (p: any) => (<Icon {...p}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></Icon>)
export const Menu = (p: any) => (<Icon {...p}><path d="M3 12h18M3 6h18M3 18h18"/></Icon>)
export const Search = (p: any) => (<Icon {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>)
export const UserRound = (p: any) => (<Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M6 20c1.5-4 9-4 12 0"/></Icon>)
import Link from "next/link"

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

const trending = [
  ['photo-1492684223066-81342ee5ff30', 'POP', 'Harry Styles'],
  ['photo-1516280440614-37939bbacd81', 'ROCK', 'Noah Kahan'],
  ['photo-1524368535928-5b5e00ddc76b', 'HIP-HOP/RAP', 'Don Toliver'],
  ['photo-1460039230329-eb070fc6c77c', 'FOOTBALL', 'Dallas Cowboys'],
  ['photo-1506157786151-b8491531f063', 'ROCK', 'Triumph'],
]
const weekend = [
  ['photo-1533174072545-7a4b6ad7a6c3', 'The Wizard of Oz at Sphere', 'Sphere · Las Vegas, NV'],
  ['photo-1492684223066-81342ee5ff30', 'Ella Langley w/ Ernest', 'The Auburn Arena at Auburn University · Auburn, AL'],
  ['photo-1501386761578-eac5c94b800a', 'Tim McGraw: Pawn Shop Guitar Tour 2026', 'Pine Knob Music Theatre · Clarkston, MI'],
  ['photo-1540039155733-5bb30b53aa14', 'Pinstripe Pass · New York Yankees v. Boston Red Sox', 'Yankee Stadium · Bronx, NY'],
]
const popular = [
  ['photo-1501386761578-eac5c94b800a', 'POP', 'Eagles'], ['photo-1514525253161-7a46d19cd819', 'URBAN', 'JAY-Z'], ['photo-1506157786151-b8491531f063', 'HEAVY METAL', 'Metallica'],
]
const sports = [['photo-1461896836934-ffe607ba8211', 'NBA', 'Brooklyn Nets'], ['photo-1461896836934-ffe607ba8211', 'NBA', 'Atlanta Hawks'], ['photo-1461896836934-ffe607ba8211', 'NBA', 'Phoenix Suns']]
const guides = [
  ['photo-1461896836934-ffe607ba8211', 'NBA Basketball Tickets', 'See your favorite team hit the court and get tickets at the Official Ticket Marketplace of the NBA.'],
  ['photo-1508098682722-e99c43a406b2', 'NHL Hockey Tickets', 'Be there live when your favorite team hits the ice and get tickets at the Official Ticket Marketplace of the NHL.'],
  ['photo-1508098682722-e99c43a406b2', 'MLS Soccer Tickets', 'Catch every action-packed game this season and get tickets at the Official Ticket Marketplace of the MLS.'],
  ['photo-1540747913346-19e32dc3e97e', 'MLB Baseball Tickets', 'We answer all of your questions about the 2026 MLB season, including how to get tickets to see your favorite team.'],
  ['photo-1517457373958-b7bdd4587205', 'Broadway Tickets', 'Browse Broadway tickets and discover upcoming shows.'],
]
const cities = [['photo-1485871981521-5b1fd3805eee', 'New York City'], ['photo-1515896769750-31548aa180ed', 'Los Angeles'], ['photo-1470214304380-aadaedcfff1b', 'Las Vegas'], ['photo-1477959858617-67f85cf4f1df', 'Chicago'], ['photo-1514924013411-cbf25faa35bb', 'Atlanta']]

function Section({ title, children, action = true }: { title: string; children: React.ReactNode; action?: boolean }) {
  return <section className="section"><div className="section-heading"><div><span className="dash" /><h2>{title}</h2></div>{action && <div className="rail-actions"><button aria-label="Previous"><ChevronLeft /></button><button aria-label="Next"><ChevronRight /></button></div>}</div>{children}</section>
}
function Cards({ items, className = '' }: { items: string[][]; className?: string }) {
  return <div className={`cards ${className}`}>{items.map((item, i) => <article className="card" key={`${item[1]}-${i}`}><img src={image(item[0])} alt="" /><span className="eyebrow">{item[1]}</span><h3>{item[2]}</h3>{item[3] && <p>{item[3]}</p>}</article>)}</div>
}

export default function Page() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  return <div className="site">
    <header>
      <div className="utility"><span className="country">◉</span><span>US</span><nav><a>▣ Hotels</a><a>Sell</a><a>▣ Gift Cards</a><a>Help</a><a>VIP</a><b>PayPal <small>Preferred<br />Payments Partner</small></b></nav></div>
      <div className="brandbar"><div className="brandrow"><div className="wordmark">ticketmaster<sup>®</sup></div><nav className="mainnav"><a>Concerts</a><a>More</a></nav>
      


<Link href="/order" className="account">
  <UserRound /> <span>My Account</span>
</Link>


      
      <button className="menu"><Menu /></button>

      </div>
        <form className="searchbar" onSubmit={(e) => e.preventDefault()}><label><MapPin /><span>LOCATION</span><input value={location} onChange={e => setLocation(e.target.value)} placeholder="City or Zip Code" /></label><label><CalendarDays /><span>DATES</span><input placeholder="All Dates" /></label><label className="searchfield"><Search /><span>SEARCH</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Artist, Event or Venue" /></label><button type="submit">Search</button></form>
      </div>
    </header>
    <main>
      <div className="hero-grid"><article className="hero-card"><img src={image('photo-1501386761578-eac5c94b800a')} alt="Concert crowd" /><div><span>ON SALE NOW</span><h1>2 Concert Tickets for $55</h1></div></article><div className="mini-grid"><article><img src={image('photo-1506157786151-b8491531f063')} alt="Live performance" /><span>BE THERE LIVE</span><h2>My Chemical Romance</h2></article><article><img src={image('photo-1492684223066-81342ee5ff30')} alt="Music festival" /><span>THE CARIBBEAN&apos;S BIGGEST MUSIC FEST</span><h2>Festival Presidente 2026</h2></article><article><img src={image('photo-1514525253161-7a46d19cd819')} alt="Family show" /><span>CHILDREN&apos;S THEATRE</span><h2>Bluey&apos;s Big Play</h2></article><article><img src={image('photo-1533174072545-7a4b6ad7a6c3')} alt="Theatre production" /><span>THEATRE</span><h2>Disney&apos;s Beauty and the Beast (Touring)</h2></article></div></div>
      <div className="content-layout"><div className="primary"><Section title="TRENDING SEARCHES"><Cards items={trending} /></Section><Section title="HAPPENING THIS WEEKEND"><Cards items={weekend} className="event-cards" /></Section><div className="ad">Advertisement</div><Section title="SPONSORED PRESALES AND OFFERS"><Cards items={weekend.slice(0, 3).map((x, i) => [x[0], 'PRESALE', ['Bright Eyes performing Wide Awake and Digital Ash', 'Aries Spears', 'Lindsey Stirling - The Snow Waltz Tour'][i], 'Citi · Wed · Aug 26 · 10:00 AM'])} /></Section><Section title="POPULAR NEAR YOU" action={false}><h3 className="subhead">CONCERTS</h3><Cards items={popular} /><h3 className="subhead">SPORTS</h3><Cards items={sports} /><h3 className="subhead">ARTS, THEATER & COMEDY</h3><Cards items={popular} /><h3 className="subhead">FAMILY</h3><Cards items={popular} /></Section><Section title="ENTERTAINMENT GUIDES" action={false}><Cards items={guides.map(x => [x[0], 'GUIDE', x[1], x[2]])} /></Section><Section title="DISCOVER MORE" action={false}><Cards items={guides.slice(0, 3).map(x => [x[0], 'DISCOVER MORE', x[1], x[2]])} /></Section><Section title="POPULAR CITIES" action={false}><div className="citycards">{cities.map(c => <article key={c[1]}><img src={image(c[0])} alt="" /><h3>{c[1]}</h3></article>)}</div></Section></div><aside><button className="feedback">t&nbsp; Feedback</button><span>Advertisement</span><h2><span className="dash" />FEATURED</h2>{[['photo-1517248135467-4c7edcad34c4','Hotels'],['photo-1508098682722-e99c43a406b2','Ticket Deals'],['photo-1506157786151-b8491531f063','VIP Packages'],['photo-1492684223066-81342ee5ff30','Sell on Ticketmaster']].map(x => <article key={x[1]}><img src={image(x[0])} alt="" /><h3>{x[1]}</h3></article>)}</aside></div>
    </main>
    <footer><div className="footer-top"><div><div className="wordmark">ticketmaster<sup>®</sup></div><p>Let&apos;s connect</p><div className="social">f　𝕏　BLOG　▶　◎</div><p>Download Our Apps</p><div className="apps">App Store　　Google Play</div><p>By continuing past this page, you agree to our <u>terms of use</u></p></div>{[['Helpful Links','Help/FAQ','Sell','My Account','Contact Us','Gift Cards','Do Not Sell or Share My Personal Information'],['Our Network','Live Nation','House of Blues','Front Gate Tickets','TicketWeb','universe','NFL','NBA','NHL'],['About Us','Ticketmaster Blog','Ticketing Truths','Ad Choices','Careers','Ticket Your Event','Innovation'],['Friends & Partners','PayPal','Allianz','AWS','Affiliates']].map(col => <div className="footer-col" key={col[0]}><h3>{col[0]}</h3>{col.slice(1).map(v => <a key={v}>{v}</a>)}</div>)}</div><div className="footer-bottom"><span>Our Policies　|　Privacy Policy　|　Cookie Policy　|　Manage my cookies and ad choices</span><span>© 1999-2026 Ticketmaster. All rights reserved.</span></div></footer>
  </div>
}

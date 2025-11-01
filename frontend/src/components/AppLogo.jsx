import React from 'react'
import { Link } from 'react-router-dom'

function AppLogo() {
  return (
    <div className='px-5 py-2.5 bg-[#f8fbfb] text-[#0c5f60] rounded-xl border border-gray-300 font-medium tracking-wide select-none cursor-pointer'>
      <Link to='/dashboard'>
          TexTradeOS
      </Link>
    </div>
  )
}

export default AppLogo
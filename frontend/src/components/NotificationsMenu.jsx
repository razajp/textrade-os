import { Bell } from 'lucide-react';

function MainMenu() {
  return (
    <div className='main-menu bg-[#f8fbfb] shadow-md border border-gray-300 p-1 rounded-2xl'>
        <button className="menu-button p-2 rounded-xl hover:bg-[#127475]/15 text-gray-700">
          <Bell size={20}/>
        </button>
    </div>
  )
}

export default MainMenu
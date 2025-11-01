import React from 'react'
import Button from "./Button";
import { Menu } from 'lucide-react';

function MainMenu() {
  return (
    <div className='main-menu'>
        <div className="menu-button">
            <Button variant="border-btn">
                <Menu size={26} />
            </Button>
        </div>
    </div>
  )
}

export default MainMenu
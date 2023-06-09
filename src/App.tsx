import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
Navbar

function App() {

  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className='app'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
   </div>
  )
}

export default App;

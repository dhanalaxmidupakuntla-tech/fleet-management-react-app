import React, { useCallback, useState } from 'react'
import Sidebar from '../components/Sidebar'
import FleetCard from '../components/FleetCard';

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new Driver name" );
    if (!name || !name.trim()) return;

    setFleets((prev) => 
      prev.map((f) => (f.id === id ? {...f, driver:name} : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) => 
      prev.map((f) => (f.id === id ? {...f, available: !f.available} : f))
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (!window.confirm("Are you sure?")) return;
    setFleets((prev) => prev.filter((f) => f.id !== id));
  }, [])

  return (
    <div style={{display:"flex", flexDirection:"row", padding:20, gap:20, alignItems:"flex-start"}}>
      <div>
        <Sidebar setFleets={setFleets} />
      </div>
      <br />
      <br />
      <div style={{flex:1}}>
        <h2>Fleet List</h2>

        <br />
        <br />
        <br />

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(3, 1fr)',
          gap:10,
        }}>
          {fleets.map((fleet) => (
            <FleetCard 
              key={fleet.id}
              fleet={fleet}
              onUpdateDriver = {updateDriver}
              onToggleAvailability={toggleAvailability}
              onDelete = {deleteFleet}
            />
          ))}
        </div>
      </div>      
    </div>
  )
}

export default Admin;

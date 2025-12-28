import { useState } from "react";

const Sidebar = ({ setFleets }) => {
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    status: "Available",
  });

  const handleAdd = () => {
    if (!form.regNo || !form.category || !form.driver) {
      alert("All fields are required");
      return;
    }

    setFleets((prev) => [
      ...prev,
      {
        id: Date.now(),
        regNo: form.regNo,
        category: form.category,
        driver: form.driver,
        available: form.status === "Available",
      },
    ]);

    setForm({
      regNo: "",
      category: "",
      driver: "",
      status: "Available",
    });
  };

  return (
    <div>
      <h3>Add Fleet</h3>

      <input
        placeholder="Vehicle Reg No"
        value={form.regNo}
        onChange={(e) => setForm({ ...form, regNo: e.target.value })}
      />

      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Category</option>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>

      <input
        placeholder="Driver Name"
        value={form.driver}
        onChange={(e) => setForm({ ...form, driver: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Available</option>
        <option>Unavailable</option>
      </select>

      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;

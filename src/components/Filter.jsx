import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const doctors = [
  { id: 1, name: 'Dr. Faisal Ahammad', type: 'General Physician', area: 'Dhanmondi', fee: 150 },
  { id: 2, name: 'Dr. Jaharia Islam', type: 'Gynecologist', area: 'Jigatola', fee: 100 },
  { id: 3, name: 'Dr. Hrittik Sinha', type: 'Dermatologist', area: 'Uttara', fee: 90 },
  { id: 4, name: 'Dr. Forhad Ahammad', type: 'Pediatrician', area: 'Mohammadpur', fee: 100 },
  { id: 5, name: 'Dr. Topura Islam', type: 'Neurologist', area: 'Ukil Para', fee: 120 },
  { id: 6, name: 'Dr. Babul', type: 'Gastroenterologist', area: 'Ukil Para', fee: 100 },
];

function Filter() {
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [fee, setFee] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const filteredDoctors = doctors.filter((doctor) => {
      const matchesType = type === '' || doctor.type === type;
      const matchesArea = area === '' || doctor.area === area;
      const matchesFee = fee === '' || doctor.fee <= parseInt(fee, 10);

      return matchesType && matchesArea && matchesFee;
    });

    // Navigate to Doctors.jsx and pass filters and results via state
    navigate('/doctors', {
      state: {
        filteredDoctors,
        filters: { type, area, fee },
      },
    });
  };

  const uniqueTypes = [...new Set(doctors.map((doc) => doc.type))];
  const uniqueAreas = [...new Set(doctors.map((doc) => doc.area))];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-primary font-semibold leading-tight text-center mb-8">
        Find Your Doctor
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 hover:border-primary"
        >
          <option value="">Select Type</option>
          {uniqueTypes.map((docType) => (
            <option key={docType} value={docType}>
              {docType}
            </option>
          ))}
        </select>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 hover:border-primary"
        >
          <option value="">Select Area</option>
          {uniqueAreas.map((docArea) => (
            <option key={docArea} value={docArea}>
              {docArea}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Max Fee"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 hover:border-primary"
        />
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={handleSearch}
          className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary-dark focus:outline-none">
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;

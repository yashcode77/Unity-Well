import React, { useState } from 'react';

const doctorsData = [
    {
        id: 1,
        logoLink: "https://example.com/doctor1-logo.png",
        name: "Dr. John Smith",
        location: "Airoli",
        rating: 4.5,
        contact: {
          phoneNumber: "+91 1234567890",
          email: "dr.john@example.com"
        }
      },
      {
        id: 2,
        logoLink: "https://example.com/doctor2-logo.png",
        name: "Dr. Emily Johnson",
        location: "Rabale",
        rating: 4.8,
        contact: {
          phoneNumber: "+91 9876543210",
          email: "dr.emily@example.com"
        }
      },
      {
        id: 3,
        logoLink: "https://example.com/doctor3-logo.png",
        name: "Dr. David Williams",
        location: "Ghansoli",
        rating: 4.2,
        contact: {
          phoneNumber: "+91 4567890123",
          email: "dr.david@example.com"
        }
      },
];

function DocDetails() {
  const [filters, setFilters] = useState({
    search: '',
    location: 'All',
    minActivePersonnel: 0,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredDoctors = doctorsData.filter((doctor) => {
    const { search, location, minActivePersonnel } = filters;
    const doctorName = doctor.name.toLowerCase();

    // Apply filters
    const nameMatch = doctorName.includes(search.toLowerCase());
    const locationMatch =
      location === 'All' || doctor.location.toLowerCase() === location.toLowerCase();
    const ratingMatch = doctor.rating >= minActivePersonnel;

    return nameMatch && locationMatch && ratingMatch;
  });

  return (
    <div className="p-4">
      <div className="mb-4 flex space-x-4">
        {/* Search Input */}
        <input
          type="text"
          name="search"
          placeholder="Search by name"
          className="w-1/4 p-2 border rounded-md text-black"
          value={filters.search}
          onChange={handleFilterChange}
        />

        {/* Location Filter */}
        <select
          name="location"
          className="w-1/4 p-2 border rounded-md text-black"
          value={filters.location}
          onChange={handleFilterChange}
        >
          <option value="All">All Locations</option>
          <option value="Airoli">Airoli</option>
          <option value="Rabale">Rabale</option>
          <option value="Ghansoli">Ghansoli</option>
          {/* Add more location options here */}
        </select>

       
      </div>

      {/* Doctors Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDoctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {doctor.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doctor.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doctor.rating}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-blue-500">
                    <a href={`mailto:${doctor.contact.email}`}>
                      {doctor.contact.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-500">
                    {doctor.contact.phoneNumber}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocDetails;

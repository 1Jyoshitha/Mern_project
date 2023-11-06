"use client"
import React from 'react';
import Select from 'react-select';
import '../Popup.css';

const LocationPopup = ({
    setShowLocationPopup
}: {
    setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [cities, setCities] = React.useState<any[]>([]);
    const [selectedCity, setSelectedCity] = React.useState<any>(null);

    const getcities = () => {
        const indianCities = [
            "Jabalpur",
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Hyderabad",
            "Chennai",
            "Kolkata",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Surat",
            "Lucknow",
            "Kanpur",
            "Nagpur",
            "Indore",
            "Thane",
            "Bhopal",
            "Visakhapatnam",
            "Pimpri-Chinchwad",
            "Patna",
            "Vadodara"
        ];

        const cities = indianCities.map((city) => ({
            label: city,
            value: city
        }));

        setCities(cities);
    };

    React.useEffect(() => {
        getcities();
    }, []);

    const handleSave = () => {
        setShowLocationPopup(false);
        // You can perform any client-side actions here, as there is no backend code.
    };

    return (
        <div className='popup-bg'>
            <div className='popup-cont'>
                <select
                    className='select'
                    onChange={(e) => {
                        setSelectedCity(e.target.value);
                    }}
                >
                    <option value="" disabled>Select your city</option>
                    {cities &&
                        cities.map((city: any) => (
                            <option key={city.value} value={city.value}>
                                {city.label}
                            </option>
                        ))}
                </select>

                <button className='btn' onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default LocationPopup;

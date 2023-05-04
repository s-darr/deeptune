import React, { useState } from 'react'

const Toggle = ({ onToggleSelect }) => {
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = (option) => {
        setSelectedOption(option)
        onToggleSelect(option) // Pass the selected option to the parent component
    }

    return (
        <div className="inline-flex items-center p-2 rounded-md cursor-pointer text-white text-opacity-60">
            <label className="inline-flex items-center">
                <input
                    id="ToggleSinging"
                    name="toggle"
                    type="radio"
                    className="hidden peer"
                    checked={selectedOption === 'Singing'}
                    onChange={() => handleOptionChange('Singing')}
                />
                <span
                    className={`px-10 py-2 rounded-l-md bg-base border border-secondary ${
                        selectedOption === 'Singing'
                            ? 'bg-secondary opacity-60 text-white'
                            : 'bg-base'
                    }`}
                >
                    Singing
                </span>
            </label>
            <label className="inline-flex items-center">
                <input
                    id="ToggleRapping"
                    name="toggle"
                    type="radio"
                    className="hidden peer"
                    checked={selectedOption === 'Rapping'}
                    onChange={() => handleOptionChange('Rapping')}
                />
                <span
                    className={`px-10 py-2 rounded-r-md bg-base border border-secondary ${
                        selectedOption === 'Rapping'
                            ? 'bg-secondary opacity-60 text-white'
                            : 'bg-base'
                    }`}
                >
                    Rapping
                </span>
            </label>
        </div>
    )
}

export default Toggle

import React, { useState } from 'react'

const Toggle = ({ onToggleSelect }) => {
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionChange = (option) => {
        setSelectedOption(option)
        onToggleSelect(option) // pass the selected option to the parent component
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
                    className={`bg-opacity-het border-opacity-het w-32 text-center py-3 rounded-l-md border border-white text-sm text-opacity-het hover:text-opacity-100 hover:cursor-pointer ${
                        selectedOption === 'Singing'
                            ? 'bg-white text-black'
                            : 'bg-transparent text-white'
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
                    className={`bg-opacity-het border-opacity-het w-32 text-center py-3 rounded-r-md border border-white text-sm text-opacity-het hover:text-opacity-100 hover:cursor-pointer ${
                        selectedOption === 'Rapping'
                            ? 'bg-white text-black'
                            : 'bg-transparent text-white'
                    }`}
                >
                    Rapping
                </span>
            </label>
        </div>
    )
}

export default Toggle

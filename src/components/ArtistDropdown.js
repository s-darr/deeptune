import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import styles from './Dropdown.module.css'

const Dropdown = ({ models, onArtistSelect }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [selectedArtist, setSelectedArtist] = useState('Select an artist')
    const buttonRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleMouseDown = (event) => {
            if (buttonRef.current?.contains(event.target)) return
            if (!dropdownRef.current?.contains(event.target)) {
                setDropdownVisible(false)
            }
        }

        document.addEventListener('mousedown', handleMouseDown)

        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible)
    }

    const handleModelClick = (model) => {
        setSelectedArtist(model.modelName)
        setDropdownVisible(false)
        onArtistSelect(model) // Pass the selected artist to the parent component
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="hover:text-white  bg-base w-full md:w-[48rem] border border-secondary shadow-sm flex items-center justify-center rounded-md px-4 py-2 text-lg font-medium text-white text-opacity-60"
                    onClick={toggleDropdown}
                    ref={buttonRef}
                >
                    {selectedArtist}
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                </button>
            </div>
            {dropdownVisible && (
                <div
                    ref={dropdownRef}
                    className={`absolute z-10 w-screen max-w-md px-2 mt-3 transform left-1/2 -translate-x-1/2 sm:px-0 ml-0 lg:left-1/2 lg:-translate-x-1/2 ${styles.dropdownList}`}
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 max-h-80 overflow-auto">
                        <div className="relative grid px-5 py-6 bg-base divide-y divide-gray-100 sm:gap-10 sm:p-8">
                            <div className="overflow">
                                {models.map((model) => (
                                    <a
                                        className={`flex items-center p-2 m-2 hover:bg-white hover:bg-opacity-10 rounded-lg ${
                                            model.modelName === selectedArtist
                                                ? 'bg-opacity-10 bg-white'
                                                : ''
                                        }`}
                                        key={model.id}
                                        onClick={() => handleModelClick(model)}
                                    >
                                        <Image
                                            src={`/images/${model.fileName}.png`}
                                            alt={model.modelName}
                                            width={60}
                                            height={60}
                                            className="flex-shrink-0 mr-2 rounded-full"
                                        />
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-primary">
                                                {model.modelName}
                                            </p>
                                            <p className="mt-1 text-sm text-white text-opacity-70">
                                                {`Uses: ${model.numUses}`}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown

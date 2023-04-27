import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { useClerk } from '@clerk/clerk-react'
import { useState } from 'react'

const Navbar = (isSignedIn) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState)
    }

    const { signOut } = useClerk()

    return (
        <header className="p-4 bg-base">
            <div className="container flex justify-between h-16 mx-auto">
                <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Back to homepage"
                    className="flex items-center p-2 font-extrabold text-5xl font-heading text-tertiary"
                >
                    dt
                </a>
                <ul className="hidden space-x-3 md:flex mb-1">
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center px-4 text-white border-b-2 border-secondary opacity-het hover:opacity-100"
                        >
                            Create
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center px-4 text-white opacity-het hover:opacity-100"
                        >
                            Discover
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center px-4 text-white opacity-het hover:opacity-100"
                        >
                            FAQ
                        </a>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden md:flex">
                    {isSignedIn.isSignedIn ? (
                        <>
                            <button
                                className="self-center px-8 py-3 text-white opacity-het hover:opacity-100"
                                onClick={() => signOut()}
                            >
                                Sign out
                            </button>
                            <h1 className="text-white opacity-het hover-opacity-100">
                                Credits: 100
                            </h1>
                        </>
                    ) : (
                        <>
                            <SignInButton mode="modal">
                                <button className="self-center px-8 py-3 text-white opacity-het hover:opacity-100">
                                    Sign in
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="self-center px-8 py-3 rounded bg-primary bg-opacity-het hover:bg-opacity-100 text-black text-opacity-het">
                                    Sign up
                                </button>
                            </SignUpButton>
                        </>
                    )}
                </div>
                <button
                    className="p-4 md:hidden"
                    onClick={toggleDropdown}
                    aria-label="Toggle navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white text-opacity-het"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            {isDropdownOpen && (
                <ul className="container flex-col space-y-4 p-2 my-2 md:hidden mx-auto">
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center text-white opacity-het hover:opacity-100"
                        >
                            Create
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center text-white opacity-het hover:opacity-100"
                        >
                            Discover
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center text-white opacity-het hover:opacity-100"
                        >
                            FAQ
                        </a>
                    </li>
                    <li className="flex">
                        <SignInButton mode="modal">
                            <button className="flex items-center text-white opacity-het hover:opacity-100">
                                Sign in
                            </button>
                        </SignInButton>
                    </li>
                    <li className="flex">
                        <SignUpButton mode="modal">
                            <button className="flex items-center text-white opacity-het hover:opacity-100">
                                Sign up
                            </button>
                        </SignUpButton>
                    </li>
                </ul>
            )}
        </header>
    )
}

export default Navbar

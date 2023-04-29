import CheckoutForm from './CheckoutForm'
const Modal = ({ show, onClose, credits }) => {
    // credits passed in from parent component

    const handleCloseClick = (e) => {
        e.preventDefault()
        onClose()
    }
    return show ? (
        <div
            id="staticModal"
            data-modal-backdrop="static"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
        >
            <div className="relative bg-white rounded-lg shadow w-full max-w-2xl">
                <div className="flex items-start justify-between p-4 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Credits
                    </h3>
                </div>

                <div className="p-6 space-y-6">
                    <CheckoutForm />
                    <button
                        type="button"
                        onClick={handleCloseClick}
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <span class="sr-only">Close menu</span>

                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                    {/* Additional content here */}
                </div>
            </div>
        </div>
    ) : null
}

export default Modal

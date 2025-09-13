export function CTAButton() {
    return (
        <button className="bg-primary hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 w-fit">
            Agendar Consulta
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    )
}

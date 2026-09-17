export default function AevonLogoMark({ className = "w-8 h-8" }: { className?: string }) {
    return (
      <div className={`${className} bg-[#C81C33] rounded-sm flex items-center justify-center p-1.5 shadow-sm`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          <path
            d="M20 85L85 20M15 65L65 15M35 85L85 35M15 45L45 15"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="square"
          />
        </svg>
      </div>
    );
  }
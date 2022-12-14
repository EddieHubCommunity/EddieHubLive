import OpenModal from "./about-modal";

export default function Header() {
  let feedStart = new Date().toLocaleTimeString();
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="h-16 md:flex md:items-center md:justify-between md:space-x-5">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img src="/logo192.png" alt="Eddie Hub Logo" height={38} width={38} />
                <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-50">EddieHubLive</h1>
              <p className="text-sm font-medium text-gray-300">
                Data feed start time: <span>{feedStart}</span>
              </p>
            </div>
          </div>
          <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
            <OpenModal />
          </div>
        </div>
      </div>
    </nav>
  );
}

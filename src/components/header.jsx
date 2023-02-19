import OpenModal from "./about-modal";

export default function Header() {
  let feedStart = new Date().toLocaleTimeString();
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 justify-between md:items-center md:space-x-5">
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
          <div className="justify-stretch xs:my-auto">
            <OpenModal />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Nav() {
    const username = "MEDIUMCAKE"; // Replace this with your authentication logic
  
    return (
      <nav className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg md:flex-wrap md:justify-start" data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center">
            <button
              className="border-0 bg-transparent px-2 text-xl leading-none lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7">
                  <path
                    strokeinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </span>
            </button>
          </div>
          
          <div className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY" data-te-collapse-item>
            <ul className="mr-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
            <li className="mb-4 lg:mb-0 lg:pr-2 hover:drop-shadow-2xl" data-te-nav-item-ref>
    <a className="block lg:p-2 font-bold" href="mainPage">
        <span style={{color: 'red'}}>Spicy</span> Traders
    </a>
</li>

          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              className="block transition duration-150 ease-in-out dark:hover:text-red-600 lg:p-2"
              href="dashboard"
              >Dashboard</a
            >
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              className="block transition duration-150 ease-in-out dark:hover:text-red-600 lg:p-2"
              href="contracts"
              >Contracts</a
            >
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              className="block transition duration-150 ease-in-out dark:hover:text-red-600 lg:p-2"
              href="marketplaces"
              >Marketplaces</a
            >
          </li>
            </ul>
          </div>

          <div className="absolute top-0 right-0 m-3 text-lg">
            {username}
          </div>
        </div>
      </nav>
    )
  }
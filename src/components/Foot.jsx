import React from 'react'

const Foot = () => {
  return (
    <footer className="bg-black text-white dark:bg-slate-500">
  <div className="mx-auto w-full max-w-screen-xl">
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="#" className="hover:underline">Kyaw Min Htwe</a>. All Rights Reserved.</span>
      <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
          </svg>
          <span className="sr-only">Discord community</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
            <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">Twitter page</span>
        </a>
        <a href="https://github.com/kyawminht/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.556 1.396.204 2.755.1 3.045A3.842 3.842 0 0 1 15.3 10.45c0 3.813-2.322 4.643-4.528 4.887.276.238.655.723.655 1.463 0 1.056-.01 1.91-.01 2.169 0 .266.174.575.683.476A9.912 9.912 0 0 0 10 .333Z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">GitHub account</span>
        </a>
        <a href="https://www.linkedin.com/in/kyaw-min-htwe-99839b244/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0a10 10 0 1 0 7.073 2.927A9.95 9.95 0 0 0 10 0Zm4.256 7.24A4.886 4.886 0 0 1 8.365 13.5a4.886 4.886 0 0 1-5.891-3.845 7.634 7.634 0 0 0 5.89 2.915c.637.006 1.27-.08 1.882-.257a4.893 4.893 0 0 1-3.742-4.794 7.65 7.65 0 0 0 5.89 2.916c.482-.001.964-.04 1.438-.115a4.89 4.89 0 0 1-3.742-4.794 4.886 4.886 0 0 1 6.13-4.779c-.215.56-.52 1.084-.9 1.56-.336.355-.722.684-1.148.97a4.88 4.88 0 0 1 2.234-.615c-.716.9-1.622 1.688-2.624 2.323a9.14 9.14 0 0 1-1.625.91 4.866 4.866 0 0 1-.015-2.105c-.003-.01-.007-.019-.01-.029a7.616 7.616 0 0 0 5.89 2.916c.482-.001.964-.04 1.438-.115A4.89 4.89 0 0 1 10 0a7.633 7.633 0 0 0 7.073 2.927c.12-.18.24-.36.359-.543a10 10 0 0 0-13.284 13.284 10 10 0 0 0 6.853 2.767c1.22 0 2.42-.155 3.574-.454A10 10 0 0 0 10 0Z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">LinkedIn profile</span>
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Foot

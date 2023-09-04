'use client';

import Logo from '../navbar/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ternary text-white py-6 border-t-2 border-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left ">
           <Logo />
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline">Address</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">Support</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">Phone</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-primary">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline">Terms of Service</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-primary">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">LinkedIn</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

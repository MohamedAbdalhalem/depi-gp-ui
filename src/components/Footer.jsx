import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20">
  <div className="max-w-8xl mx-auto px-4 lg:px-10 py-16">
    
    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Brand */}
      <div>
        <h2 className="text-3xl font-extrabold mb-4">
          ACME<span className="text-primary">.</span>
        </h2>

        <p className="text-sm leading-7 opacity-70 mb-6 max-w-sm">
          Discover premium products crafted for modern lifestyles with
          fast delivery and trusted quality.
        </p>

        <div className="flex items-center gap-3">
          <a className="w-11 h-11 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a className="w-11 h-11 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a className="w-11 h-11 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a className="w-11 h-11 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Company
        </h3>

        <ul className="space-y-3 text-sm">
          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              About Us
            </a>
          </li>

          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Careers
            </a>
          </li>

          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Blog
            </a>
          </li>

          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Press Kit
            </a>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Support
        </h3>

        <ul className="space-y-3 text-sm">
          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Contact
            </a>
          </li>

          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Help Center
            </a>
          </li>

          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Shipping Info
            </a>
          </li>

          <li>
            <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Returns
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Newsletter
        </h3>

        <p className="text-sm opacity-70 leading-6 mb-5">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary px-6">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-base-300 my-10"></div>

    {/* Bottom */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
      
      <p className="text-sm opacity-70 text-center md:text-left">
        © {new Date().getFullYear()} ACME Industries. All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm opacity-70">
        <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
          Privacy Policy
        </a>

        <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
          Terms of Service
        </a>

        <a className="hover:text-primary transition-colors duration-300 cursor-pointer">
          Cookies
        </a>
      </div>
    </div>
  </div>
</footer>
  );
}

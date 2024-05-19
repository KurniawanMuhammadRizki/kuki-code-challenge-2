import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-100 text-base-content px-5 sm:px-10 md:px-14 lg:px-[76px]">
        <aside>
          <Logo />
        </aside>
        <nav>
          <h6 className="footer-title">Why Kukilabs</h6>
          <Link href={"why"} className="link link-hover">
            Help Center
          </Link>
          <Link href={"/#our-client"} className="link link-hover">
            Our Client
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <Link href={"product/#kuki-talenta"} className="link link-hover">
            Kuki-Talenta
          </Link>
          <Link href={"product/#kuki-jurnal"} className="link link-hover">
            Kuki-Jurnal
          </Link>
          <Link href={"product/#kuki-dlex"} className="link link-hover">
            Kuki-Flex
          </Link>
          <Link href={"product/#kuki-sign"} className="link link-hover">
            Kuki-Sign
          </Link>
          <Link href={"product/#kuki-klik-pajak"} className="link link-hover">
            Kuki-Klikpajak
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Solution</h6>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href={"about"} className="link link-hover">
            About Kukilabs
          </Link>
          <Link
            href={"https://wa.me/6281340921609"}
            className="link link-hover">
            Contact Us
          </Link>
          <Link href={"why"} className="link link-hover">
            Privacy policy
          </Link>
          <Link href={"why"} className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 cursor-pointer">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <nav>
          <div className="flex flex-row flex-wrap gap-2">
            <Image
              src={"/qr-code-jurnal_EDIT.png.webp"}
              alt={"qr"}
              width={56}
              height={56}
            />
            <Image
              src={"/pse-terdaftar.png.webp"}
              alt={"pse"}
              width={56}
              height={56}
            />
            <Image src={"/logo-iso-1.svg"} alt={"iso"} width={76} height={56} />
          </div>
        </nav>
        <hr />
      </footer>
      <footer className="footer footer-center  bg-base-color text-base-content px-5 sm:px-10 md:px-14 lg:px-[76px]">
        <aside>
          <p>© 2024 Copyright 2024 PT Kuki Solusi Nusantara.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

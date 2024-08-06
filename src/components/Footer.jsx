import React from "react";

function Footer() {
  return (
    <footer className="footer w-full mt-[100px] footer-center  text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;

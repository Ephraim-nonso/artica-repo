import React from "react";
import ConnectWallet from "../buttons/ConnectWallet";
import Search from "../inputs/Search";
import BrandLogo from "../brand/BrandLogo";

function Head() {
  return (
    <header className="header">
      <section>
        <section class=" pb-5 bg-black px-2 md:px-2 lg:px-12 py-5">
          <div class="flex justify-between align-center">
            <BrandLogo />

            <div class=" sm:flex sm:justify-between ">
              <div class="p-3 sm:flex gap-3 ">
                <Search />
                <ConnectWallet />
              </div>
            </div>
          </div>
        </section>
      </section>
    </header>
  );
}

export default Head;

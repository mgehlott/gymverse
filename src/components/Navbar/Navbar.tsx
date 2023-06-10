import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "../ui/ActionButton";
import { useState } from "react";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isTopOfPage: boolean;
};



const Navbar = ({ selectedPage, setSelectedPage,isTopOfPage }: Props) => {
 
  const [isMenuToggeled, setIsMenuToggled] = useState<boolean>(false);

  const flexbetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery(`(min-width:1060px)`);
  const bgClass = isTopOfPage ? "" : "bg-primary-300 drop-shadow"
  
  return (
    <nav>
      <div className={`${flexbetween} ${bgClass} top-0 fixed z-30 w-full py-6`}>
        <div className={`${flexbetween} mx-auto w-5/6`}>
          <div className={`${flexbetween} w-full gap-16`}>
            <img alt="Logo" src={Logo} />

            {isAboveMediumScreens ? (
              <div className={`${flexbetween} w-full`}>
                <div className={`${flexbetween} gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexbetween} gap-4 `}>
                  <p>Sign in</p>
                  <ActionButton
                    setSelectedPage={setSelectedPage}
                  >
                    Become a Member
                 </ActionButton>
                </div>
              </div>
            ) : (
                <button
                  className="p-2 bg-secondary-500 rounded-full"
                  onClick={()=>setIsMenuToggled(!isMenuToggeled)}
                >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile nav bar */}
      {!isAboveMediumScreens && isMenuToggeled && (
        <div className='fixed  right-0 bottom-0 z-40 bg-primary-100 w-[330px] h-full drop-shadow-md'>
          {/* Close icon */}
          <div className="flex justify-end p-2">
            <XMarkIcon
              className="h-6 w-6 text-gray-400"
              onClick={()=>setIsMenuToggled(!isMenuToggeled)}
            />
          </div>

          {/* Links  */}
          <div className="flex flex-col ml-[33%] gap-10 text-2xl">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
        </div>
     )}
    </nav>
  );
};

export default Navbar;

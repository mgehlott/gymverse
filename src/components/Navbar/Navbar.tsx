import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexbetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery(`(min-width:1060px)`);
  console.log(isAboveMediumScreens);
  
  return (
    <nav>
      <div className={`${flexbetween} top-0 fixed z-30 w-full py-6`}>
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
                  <button>Become member</button>
                </div>
              </div>
            ) : (
              <button className="p-2 bg-secondary-500 rounded-full">
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

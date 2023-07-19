import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from 'framer-motion';


type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
  setSelectedPage: (value: string) => void;
};

const childrenVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible:{opacity:1,scale:1}
 }

const SingleBenefit = ({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) => {
  return (
      <motion.div
          variants={childrenVariant}
          className="my-5 rounded-md border-gray-100 border-2 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full p-4 border-2 border-gray-100 bg-gray-100">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href="#contactus"
        onClick={() => setSelectedPage("contactus")}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default SingleBenefit;

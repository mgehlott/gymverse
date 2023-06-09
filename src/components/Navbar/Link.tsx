import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    page: string,
    selectedPage: string,
    setSelectedPage:(value:string)=>void
}

const Link = ({ page,selectedPage,setSelectedPage }: Props) => {
    const lowerpage = page.toLowerCase();
  return (
      <AnchorLink
          href={`#${lowerpage}`} 
          className={`${selectedPage==lowerpage ? 'text-primary-500':""} transition duration-500 hover:text-primary-300`}
          onClick={()=>setSelectedPage(lowerpage)}
      >
          {page}
     </AnchorLink>
  )
}

export default Link
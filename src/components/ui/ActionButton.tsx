import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    children: React.ReactNode,
    setSelectedPage:(value:string)=>void
}

const ActionButton = ({children ,setSelectedPage}: Props) => {
  return (
      <AnchorLink
          className="bg-secondary-500 text-black rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white"
          href='#contactus'
          onClick={()=>setSelectedPage('contactus')}
      >
          {children}
    </AnchorLink>
  )
}

export default ActionButton
import Link from "next/link"

const Footer = () => {
  return (
    <div className=" px-20  pt-10 grid grid-cols-10 text-white bg-[#0D0D0D] pr-5">
      <div className="col-start-1 col-end-4">
        <Link href='/'><img className="w-[200px] pb-5 "  src='../immer logo_orange.svg' /></Link>
        <p className="pl-5 pb-8 text-sm">Empowering entertainers. All-in-one control for event coordination, venue booking, marketing, and ticket sales. </p>
        <div className=" pt-4 flex content-start">
          <p className="pl-5 pt-3">Follow Us </p>
          <Link className="pl-5 pt-2 w-[50px] h-[50px] " href='/'><img  src='../social/instagram logo.svg'></img></Link>
          <Link className="pl-5 pt-2 w-[50px] h-[50px]" href='/'><img  src='../social/x logo.svg'></img></Link>
          <Link className="pl-5 pt-2 w-[50px] h-[50px]" href='/'><img  src='../social/facebook logo.svg'></img></Link>
          <Link className="pl-5 pt-2 w-[50px] h-[50px]" href='/'><img src='../social/threats logo.svg'></img></Link>
        </div>
      </div>
      <div className="col-start-7 col-end-9 mt-5 pl-20">
        <h2 className="text-lg pb-5 text-[#FF6C00]" >Navigate</h2>
        <Link href='/'><p className="text-sm pb-5">Home</p></Link>
        <Link href='/'><p className="text-sm pb-5">Updates</p></Link>
        <Link href='/'><p className="text-sm pb-5">Our Mission</p></Link>
      </div>
      <div className="col-start-9 col-end-10 mt-5">
        <h2 className="text-lg pb-5 text-[#FF6C00]">Contact Us</h2>
        <Link href='/'><p className="text-sm pb-5">immer.world@gmail.com</p></Link>
        <Link href='/'><p className="text-sm pb-5">+2349091354365</p></Link>
        <Link href='/'><p className="text-sm pb-5">Lorem ipsum, USA.</p></Link>
      </div>
      <div className="py-14 pl-5 pr-20 row-start-2 col-start-1 col-end-11 text-white bg-[#0D0D0D] ">
        <hr className="border-[#727272]"/>
        <div className="pt-10 grid grid-cols-10">
          <p className="text-sm col-start-1 col-end-7">Copyright ©2023 immer. All rights reserved</p>
          <Link className="col-start-7 col-end-9 text-center pl-6" href='/'><p className="text-sm " > Terms & Conditions</p></Link>
          <Link className="col-start-9 col-end-11 pl-16" href='/'><p className="text-sm "> Privacy & Policy</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

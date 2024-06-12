import { navlinks } from "./links";
const Navbar = () =>{
    // you can write ts code here
    console.log(navlinks)
    return(
        <>
        {/* html code here */}
        <div className="grid grid-cols-5 nav-grid">
            <div className="logo text-white text-2xl flex space-x-2 mx-2 my-2 ">
                <img width={50}height={50} src="../../../public/Motorola-logo-2005.webp"/> 
                <span className="font-bold text-3xl font-serif mx-3 mt-2">Momin</span>
            </div>
            <div className="nav-links text-white text-xl col-span-3 space-x-2  ml-[20%] my-5 ">
                <div className="grid grid-cols-6 ">
                    
                    {navlinks.map((navlink)=>(
                        <div key={navlink.url} className="">
                        <a href={navlink.url} className={`text-xl ${navlink.name=="Services" ?"col-span-2":""} font-light text-center hover:text-yellow-300`}>{navlink.name}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="goto  text-2xl grid justify-center items-center">
                <button >
                <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
  <rect width="100" height="20" rx="10"></rect>
  <rect y="30" width="100" height="20" rx="10"></rect>
  <rect y="60" width="100" height="20" rx="10"></rect>
</svg></button>
            </div>
        </div>
        </>
    )
}

export default Navbar;
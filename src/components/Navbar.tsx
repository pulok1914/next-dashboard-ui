import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      {/* searchbar */}
      <div className="hidden md:flex justify-center items-center gap-2 p-2 rounded-full ring-[1.5px] ring-gray-300 px-4 text-xs">
        <Image src="/search.png" width={14} height={14} alt="searchbar"/>
        <input type="text" placeholder="Search" className="bg-transparent outline-none"/>
      </div>
      {/* icons and user */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 flex justify-center items-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message" />
        </div>
        <div className="bg-white rounded-full w-7 flex justify-center items-center cursor-pointer relative">
          <Image src="/announcement.png" width={20} height={20} alt="message" />
          <div className="absolute -right-3 -top-3 flex justify-center items-center bg-purple-500 text-white w-5 h-5 rounded-full text-xs" >1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right" >Admin</span>
        </div>
        <Image src="/avatar.png" width={36} height={36} alt="avater" className="rounded-full" />
      </div>
    </div>
  )
}

export default Navbar
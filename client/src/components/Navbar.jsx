import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-sm py-2 px-20 mb-5 border-b border-b-gray-300'>
            <Link to="/"><img className='w-44 cursor-pointer' src='/logo.png' alt="" /></Link>
            <ul className='hidden md:flex items-start font-medium gap-10'>
                <Link to="/">
                    <li className='py-1'>Home</li>
                </Link>
                <Link to="#">
                    <li className='py-1'>Downloader</li>
                </Link>
                <Link to="#">
                    <li className='py-1'>About</li>
                </Link>
                <Link to="#">
                    <li className='py-1'>Contact</li>
                </Link>
            </ul>
            <div className='flex item gap-4'>
                <button className='gradient text-white px-8 py-3 rounded-full font-light hidden md:block'>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
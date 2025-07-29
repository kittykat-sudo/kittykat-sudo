import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between">
                <div className="text-lg font-bold">My Portfolio</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:underline">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
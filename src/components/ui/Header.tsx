import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
            <div className="text-xl font-bold text-white">AARONN</div>
            <nav className="flex space-x-8">
                <Link 
                    href="/" 
                    className={`transition-colors ${isActive('/') ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                >
                    HOME
                </Link>
                <Link 
                    href="/about" 
                    className={`transition-colors ${isActive('/about') ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                >
                    ABOUT ME
                </Link>
                <Link 
                    href="/projects" 
                    className={`transition-colors ${isActive('/projects') ? 'text-orange-400' : 'text-white hover:text-orange-400'}`}
                >
                    MY WORKS
                </Link>
                <Link 
                    href="/contact" 
                    className={`border border-white px-4 py-2 rounded transition-colors ${
                        isActive('/contact') 
                            ? 'bg-orange-500 text-white border-orange-500' 
                            : 'text-white hover:bg-white hover:text-black'
                    }`}
                >
                    CONTACT
                </Link>
            </nav>
        </header>
    );
};

export default Header;
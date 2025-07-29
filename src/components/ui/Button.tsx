import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    onClick, 
    href,
    type = 'button'
}) => {
    const baseClasses = 'font-semibold transition-colors rounded-full inline-block text-center';
    
    const variantClasses = {
        primary: 'bg-orange-500 hover:bg-orange-600 text-white',
        secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
        outline: 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
    };
    
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-3 text-lg'
    };
    
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {children}
            </Link>
        );
    }
    
    return (
        <button 
            type={type}
            onClick={onClick} 
            className={buttonClasses}
        >
            {children}
        </button>
    );
};

export default Button;
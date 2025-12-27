import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    icon?: string;
    fullWidth?: boolean;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    icon, 
    fullWidth = false, 
    isLoading = false,
    className = '',
    ...props 
}) => {
    const baseStyles = "relative font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-primary hover:bg-[#c59262] text-white shadow-lg shadow-primary/25",
        secondary: "bg-secondary hover:bg-[#8f9d76] text-white shadow-soft",
        outline: "bg-transparent border-2 border-gray-200 dark:border-gray-700 text-text-main dark:text-white hover:bg-black/5 dark:hover:bg-white/5",
        ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-text-main dark:text-white"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                 <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
            ) : (
                <>
                    {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
                    <span className="tracking-wide">{children}</span>
                </>
            )}
        </button>
    );
};
import React, { useRef } from 'react';

interface DashboardProps {
    onImageSelect: (file: File) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onImageSelect }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onImageSelect(e.target.files[0]);
        }
    };

    const triggerUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 animate-fade-in">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-5 py-2 flex items-center justify-between transition-colors">
                <button className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
                    <span className="material-symbols-outlined text-[28px]">menu</span>
                </button>
                <div className="flex items-center gap-1.5">
                    <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-[20px] filled">chair</span>
                    </div>
                    <h1 className="text-lg font-extrabold tracking-tight text-text-main dark:text-white">ReRoom</h1>
                </div>
                <button className="size-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm relative group cursor-pointer">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYvhE2fZIJLA2audrVIXJAI3HluhvKcq3bQld870ogXLCHtdIFPs9u0xxlBxsx6bEbIzreE72lZ1cJnjwZY9R_WXBYPf7WdPcCNBYLMIwHt2WMr-s5jsRrPJh4ZfyHueZH0w9IKfXnSZDuyBKanf81ptgBrx-lOxI9Eq0eVEHavNiXB-p7wOPtOHwpZjoVvWBzyyfZSg7NcNQuVA77X5jmEWKSs44ztLRMYA9nq78Fq0eXcqSlrSx7sXTaM2IUw9AeWfpYvAfK8E" 
                        alt="User Profile" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                    />
                </button>
            </header>

            {/* Content */}
            <div className="px-6 pt-6 pb-4">
                <p className="text-text-subtle dark:text-primary/80 text-sm font-semibold tracking-wide uppercase mb-1">Good morning, Alex</p>
                <h2 className="text-[32px] font-bold leading-[1.1] text-text-main dark:text-white tracking-tight">Ready to <span className="text-primary">redesign?</span></h2>
            </div>

            {/* Hero CTA */}
            <div className="px-5 mb-8">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-card group">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAOtHGFB6MkCKWiWHA2OP2ZZgkep2YfqoeyXepIyVNTm3FNdMcIGScJMgbQJYBkrhBJ7aW5_YX9z0l47upX2p5UvY63z8DuBsWOrw2VGHQrWrCB4iY_0kRXotaG0a6YMkhPwcCd1ap_WXAgjeDv7JEXPv07-2mq3c9j6-NTIbRaPmzkCyiOyUyVkj3swzv2AURASRIMlDrlwWi2RelbuiHuN1kGlOGLOLj34EJLU_zsq72qZlpFu1xxry1R1n70Z2laktBRvyjJHg')"}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-white">
                        <div className="mb-5 animate-slide-up">
                            <h3 className="text-2xl font-bold leading-tight mb-2 drop-shadow-md">Visualize your<br/>dream room</h3>
                            <p className="text-white/90 text-sm font-medium drop-shadow-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">photo_library</span>
                                Take a photo or choose from library
                            </p>
                        </div>
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleFileChange} 
                            accept="image/*" 
                            className="hidden" 
                        />
                        <button 
                            onClick={triggerUpload}
                            className="w-full bg-primary hover:bg-[#c59262] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-black/20 transition-all active:scale-[0.98] group/btn"
                        >
                            <span className="material-symbols-outlined group-hover/btn:animate-bounce">add_a_photo</span>
                            <span className="tracking-wide">Upload Room Photo</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Styles Grid */}
            <div className="px-5 mb-6">
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-5 px-1">Trending Styles</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        <div className="h-36 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeTSapY5YGiNy1j_AD2K9aoOLz4RTduDi86CWLN3-7p83_AcgBjVWTSw_w5NVpqNmIiBF_44u0MwcAagDwSCwKxjbedwDFyPVKXY24Ab785TWJ5iwELGC7Bu-5DOZfoF-fQpksOe9h3mlZ0VE7UbIqE_S-rrDJlFs2OyDAZfdAHclMFct9hmJ-vadrksNNQx3a9ulPpzulymt3TzpkfVrHVGOiaXyUQxahqFA6swExEYeL3xZ3_bT3e95s2G6Bc9jptKA2cViK830')"}}></div>
                            <div className="absolute top-2 right-2 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md shadow-sm">POPULAR</div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-base text-text-main dark:text-white leading-tight">Mid-Century</h4>
                            <p className="text-xs text-text-subtle dark:text-gray-400 mt-1 font-medium">Retro & organic feel</p>
                        </div>
                    </div>
                    {/* Additional stylistic placeholders for visual completeness */}
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        <div className="h-36 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCG81yfhY8oe974dilHlKTC0BTZX8xa7pLIDHyYDFvRB_AaN1I56zxRF0n3Lek_Hh47ah0NpcE7oCJF5Atbq0g2ABZyL8nV-HCkqCe3k6rNYfqpdo5aUNQiLD17TAcqT19HQFDlKQg8mOnVytLo6rhNxn98uuqwri45pA4aqFn9sh9ehuSa1iUZNuuBztFCNNDsqFjFrU-XfF7k_ggtbZPrNtQDSFoF1MwzKSo_Bbd14txpzTKP8GCPK8k1GbSt3t6ksLtQLs39fYo')"}}></div>
                            <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md shadow-sm">NEW</div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-base text-text-main dark:text-white leading-tight">Boho Chic</h4>
                            <p className="text-xs text-text-subtle dark:text-gray-400 mt-1 font-medium">Eclectic & cozy vibe</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="fixed bottom-0 w-full bg-surface-light/90 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/5 pb-8 pt-3 px-8 flex justify-between items-center z-50 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)]">
                <button className="group flex flex-col items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined filled text-[26px]">home</span>
                    <span className="text-[11px] font-bold">Home</span>
                </button>
                <button className="group flex flex-col items-center gap-1.5 text-gray-400">
                    <span className="material-symbols-outlined text-[26px]">explore</span>
                    <span className="text-[11px] font-semibold">Discover</span>
                </button>
                <button className="group flex flex-col items-center gap-1.5 text-gray-400">
                    <span className="material-symbols-outlined text-[26px]">bookmarks</span>
                    <span className="text-[11px] font-semibold">Saved</span>
                </button>
                <button className="group flex flex-col items-center gap-1.5 text-gray-400">
                    <span className="material-symbols-outlined text-[26px]">settings</span>
                    <span className="text-[11px] font-semibold">Settings</span>
                </button>
            </nav>
        </div>
    );
};
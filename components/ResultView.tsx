import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';

interface ResultViewProps {
    originalImage: string;
    generatedImage: string;
    onSave: () => void;
    onBack: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ originalImage, generatedImage, onSave, onBack }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        
        const position = ((clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display animate-fade-in">
             <header className="flex items-center justify-between px-6 pt-6 pb-2 z-30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm sticky top-0">
                <button onClick={onBack} className="group flex size-11 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-transparent dark:border-white/10 shadow-sm transition-all active:scale-95 hover:shadow-md">
                    <span className="material-symbols-outlined text-text-main dark:text-white" style={{fontSize: '20px'}}>arrow_back_ios_new</span>
                </button>
                <h2 className="text-text-main dark:text-white text-[17px] font-bold tracking-tight">Result</h2>
                <button className="group flex size-11 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-transparent dark:border-white/10 shadow-sm transition-all active:scale-95 hover:shadow-md">
                    <span className="material-symbols-outlined text-text-main dark:text-white" style={{fontSize: '20px'}}>ios_share</span>
                </button>
            </header>

            <main className="flex-1 flex flex-col gap-6 p-4 pb-24 max-w-md mx-auto w-full">
                {/* Comparison Card */}
                <div 
                    ref={containerRef}
                    className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-card group select-none ring-1 ring-black/5 dark:ring-white/10 cursor-ew-resize touch-none"
                    onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
                    onTouchMove={handleDrag}
                    onClick={handleDrag}
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0 w-full h-full">
                        <img 
                            src={generatedImage} 
                            alt="After" 
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                        <div className="absolute top-5 right-5 z-10 pointer-events-none">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg animate-fade-in">
                                <div className="size-2 rounded-full bg-secondary"></div>
                                <span className="text-white text-xs font-bold tracking-wide uppercase">After</span>
                            </div>
                        </div>
                    </div>

                    {/* Before Image (Foreground, clipped) */}
                    <div 
                        className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                        style={{ width: `${sliderPosition}%` }}
                    >
                         <div className="absolute inset-0 w-full h-full" style={{ width: `${10000 / sliderPosition}%` }}> 
                             {/* ^ Counter-scale trick to keep image static while container resizes. 
                                 Simpler: just set image width to container width. 
                             */}
                             <img 
                                src={originalImage} 
                                alt="Before" 
                                className="h-full object-cover absolute top-0 left-0 max-w-none"
                                style={{ width: containerRef.current?.offsetWidth || '100%' }}
                                draggable={false}
                             />
                         </div>
                         <div className="absolute top-5 left-5 z-10 pointer-events-none">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                                <div className="size-2 rounded-full bg-gray-500"></div>
                                <span className="text-text-main dark:text-white text-xs font-bold tracking-wide uppercase">Before</span>
                            </div>
                        </div>
                    </div>

                    {/* Handle */}
                    <div 
                        className="absolute top-1/2 -translate-y-1/2 z-30 pointer-events-none"
                        style={{ left: `calc(${sliderPosition}% - 24px)` }}
                    >
                        <div className="flex items-center justify-center size-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] ring-4 ring-black/5 dark:ring-white/10">
                            <span className="material-symbols-outlined text-primary text-[28px]">swap_horiz</span>
                        </div>
                    </div>
                </div>

                {/* Info Panel */}
                <div className="flex flex-col gap-5 px-1">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h1 className="text-[28px] font-extrabold text-text-main dark:text-white leading-[1.15] tracking-tight">AI Redesign<br/>Result</h1>
                            <div className="flex items-center gap-2 mt-2.5">
                                <span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5">
                                    <span className="material-symbols-outlined text-green-700 dark:text-green-400 text-[14px]">bolt</span>
                                    <span className="text-[10px] font-bold text-green-800 dark:text-green-300 ml-0.5 uppercase tracking-wide">AI Generated</span>
                                </span>
                            </div>
                        </div>
                        <button onClick={onSave} className="shrink-0 flex items-center justify-center size-12 rounded-2xl bg-primary text-white shadow-soft hover:bg-[#c59260] transition-colors active:scale-95">
                            <span className="material-symbols-outlined filled">bookmark</span>
                        </button>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 p-5 shadow-sm">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
                        <div className="flex gap-3">
                            <div className="shrink-0 size-8 rounded-full bg-gradient-to-br from-primary to-[#e6c4a3] flex items-center justify-center text-white shadow-sm">
                                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                            </div>
                            <div>
                                <p className="text-[15px] leading-relaxed text-text-main dark:text-gray-200">
                                    <span className="font-bold text-primary">Design Insight:</span>
                                    We applied your requested style adjustments using Gemini 2.5 Flash Image.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
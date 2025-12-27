import React from 'react';
import { Button } from './Button';

interface SaveProjectProps {
    image: string;
    onDone: () => void;
    onBack: () => void;
}

export const SaveProject: React.FC<SaveProjectProps> = ({ image, onDone, onBack }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative animate-fade-in">
            <header className="sticky top-0 z-30 flex items-center justify-between p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md transition-colors">
                <button onClick={onBack} className="group flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-charcoal dark:text-white" style={{fontSize: '24px'}}>arrow_back_ios_new</span>
                </button>
                <h2 className="text-charcoal dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Save Project</h2>
                <button onClick={onDone} className="flex w-12 items-center justify-end group active:scale-95 transition-transform">
                    <p className="text-primary hover:text-primary/80 text-base font-bold leading-normal tracking-wide shrink-0 transition-colors">Done</p>
                </button>
            </header>

            <main className="flex-1 flex flex-col pb-24 max-w-md mx-auto w-full">
                <div className="px-4 py-2 w-full">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-soft group">
                        <img src={image} className="w-full h-full object-cover" alt="Final Result" />
                         <div className="absolute bottom-4 left-4">
                            <div className="bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 rounded-lg px-3 py-1.5">
                                <span className="text-white text-xs font-semibold tracking-wide">Generated with ReRoom AI</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 pt-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-charcoal dark:text-white text-2xl font-bold tracking-tight">Project Details</h2>
                        <span className="px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">Draft</span>
                    </div>

                    <div className="group">
                        <label className="block text-charcoal dark:text-gray-300 text-sm font-semibold mb-2 ml-1">Name your concept</label>
                        <div className="relative flex items-center">
                            <input 
                                className="block w-full rounded-xl border-0 bg-white dark:bg-white/5 py-4 pl-4 pr-10 text-charcoal dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base font-medium transition-all" 
                                placeholder="e.g. Dream Living Room 2024" 
                                type="text" 
                                defaultValue="My ReRoom Project"
                            />
                            <div className="absolute right-3 text-primary pointer-events-none">
                                <span className="material-symbols-outlined filled" style={{fontSize: '20px'}}>edit</span>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-charcoal dark:text-gray-300 text-sm font-semibold mb-2 ml-1">Notes & Ideas</label>
                        <textarea 
                            className="block w-full rounded-xl border-0 bg-white dark:bg-white/5 p-4 text-charcoal dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base leading-relaxed min-h-[140px] resize-none transition-all" 
                            placeholder="Add details about finishes, furniture, or lighting adjustments..."
                        ></textarea>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-20 max-w-md mx-auto">
                <div className="h-8 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
                <div className="bg-background-light dark:bg-background-dark px-6 pb-8 pt-2 flex flex-col gap-3">
                    <Button onClick={onDone} icon="save_alt" fullWidth>
                        Save to Gallery
                    </Button>
                </div>
            </div>
        </div>
    );
};
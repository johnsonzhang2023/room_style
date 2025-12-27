import React, { useState } from 'react';
import { Button } from './Button';
import { DesignStyle } from '../types';

interface StyleSelectorProps {
    onBack: () => void;
    onGenerate: (prompt: string) => void;
    isGenerating: boolean;
}

const styles: DesignStyle[] = [
    {
        id: 'modern',
        name: 'Modern',
        description: 'Sleek glass & steel',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD80QbzVePrmk7KRP2a3N-vhOabas74oI5AzoyCAlQryhwB48P4OGfe3YO1z2InQxOt_ibrPN6dJB0vOd9S5GCC-ycwuzi_Htr2GLsbZharphUtJqV56KxwJq69aYa6UnqKABQ7vkl6ujFW6rX3Ws3LmmKubzzjcVZdtjpZR2NLyHIgmyaRnpCaNaR9HS7w6QbK829rYbaKT1kBFUAppQ4KtLjZlA90Nnm0eRQbVqoZNEW3WW7AG6nehAetGFV4CO2QgqRtPkLEVzA',
        promptSnippet: 'modern sleek glass and steel style'
    },
    {
        id: 'japandi',
        name: 'Japandi',
        description: 'Wood & cream tones',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuu9ztv0Ne6ELHskhX6nxC4iMeQdn_6qVXuMI6S8sXhnCMrlazcn8fY_MrDDf_NFGqaGTYiqgsh8ehU95QfsfneXm0R35X385pOu-zhY99gnMgxvwO3jjTIJLsFEZgZNaRm2SP9ra-gBjd6IqmlnRCJ38N5ahd2JGbJGjcEWXKZ-obY05xqnGahI9g8bBN4fOOvtJSl4LruEpqCpGj99uHLE-XTmYOn05_1CnEw_yZI0Nw0JWhVnZahNtYm6on-5U81iAgO8Xuqb8',
        promptSnippet: 'japandi style with wood and cream tones'
    },
    {
        id: 'luxury',
        name: 'Luxury',
        description: 'Marble & gold',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7KhAlNCli5-3Xu3nWvaYp-vvaQ0R0vz9DAyakYaVkLZRHH5prLr68VaZmliGrMmFADsoeqTcSwQdo8NdcAK9mLd7_YPI9B-V4lLmlCbscpVF8DTm3rIk4vMqhgCyqv5xuV6XyXPuPVAlh4Fzkf_DFm3muw2NTcUqGNGr6I3ClFRkz98akSVTKvtvSx1xDDFMiGUlRXSM9VEyoG8iJzbTaWkCE_aBpfCUUlWH3z2G7zckARsp7Klk5vf9BmGEsyO48B7y79yc-vvo',
        promptSnippet: 'luxury style with marble and gold accents'
    },
    {
        id: 'industrial',
        name: 'Industrial',
        description: 'Exposed brick',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrGJF8KUSqGCdyY5XX5rA2KLLhv6PASGnRSt2l1YjEE1GGYyI00ouqiUqycr1z5gwGwb_Z34E5QkyfokqHhJameGVMRA9nQGEbQTaEMGA7oooNozt74VXybEwwUCYcxTdvMAKhjoX3LnIdD_J4Iqgl51TLSmhoF-E8P-K0acSL5nkrJvIh1Gbq00VLZiEYNYKwJNFD6glud9A6Cs2vQ9hlfPxxIWXrZl_0zSZCbXPW5KWKQjxGduuJd4MbHSl-2d2g_r1jRh7VFaU',
        promptSnippet: 'industrial loft style with exposed brick'
    },
];

export const StyleSelector: React.FC<StyleSelectorProps> = ({ onBack, onGenerate, isGenerating }) => {
    const [selectedStyleId, setSelectedStyleId] = useState<string | null>(null);
    const [customPrompt, setCustomPrompt] = useState<string>('');

    const handleStyleSelect = (styleId: string) => {
        if (selectedStyleId === styleId) {
            setSelectedStyleId(null); // toggle off
        } else {
            setSelectedStyleId(styleId);
        }
    };

    const handleContinue = () => {
        let finalPrompt = '';
        if (customPrompt.trim()) {
            finalPrompt = customPrompt;
        } else if (selectedStyleId) {
            const style = styles.find(s => s.id === selectedStyleId);
            if (style) finalPrompt = `Redesign room in ${style.promptSnippet}`;
        } else {
            return; // Nothing selected
        }
        onGenerate(finalPrompt);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display animate-fade-in">
            {/* Top Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
                <div className="flex items-center justify-between px-6 py-4 max-w-md mx-auto w-full">
                    <button onClick={onBack} className="flex items-center justify-center text-charcoal dark:text-white hover:text-primary transition-colors size-10 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
                        <span className="material-symbols-outlined text-2xl">chevron_left</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-primary rounded-full"></div>
                        </div>
                        <p className="text-secondary text-xs font-bold tracking-wide uppercase">Step 2 of 4</p>
                    </div>
                </div>
            </div>

            <main className="flex-1 flex flex-col pt-20 pb-40 px-6 max-w-md mx-auto w-full overflow-y-auto no-scrollbar">
                <section className="mb-6">
                    <h1 className="text-text-main dark:text-white text-[32px] font-bold leading-[1.1] mb-3 tracking-tight">
                        Define your style.
                    </h1>
                    <p className="text-text-main/70 dark:text-gray-400 text-lg font-medium leading-relaxed">
                        Choose an aesthetic or describe your vision to guide the AI renovation.
                    </p>
                </section>

                {/* Custom Prompt Input */}
                <section className="mb-8">
                    <label className="block text-sm font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Custom Instruction</label>
                    <div className="relative">
                        <textarea 
                            value={customPrompt}
                            onChange={(e) => {
                                setCustomPrompt(e.target.value);
                                if (e.target.value) setSelectedStyleId(null); // Clear style if typing
                            }}
                            placeholder="e.g., 'Add a retro filter' or 'Make it a cyber-punk bedroom'"
                            className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-text-main dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none h-28 shadow-sm"
                        />
                        <div className="absolute bottom-3 right-3 text-primary">
                            <span className="material-symbols-outlined">edit_note</span>
                        </div>
                    </div>
                </section>

                <h3 className="text-sm font-bold text-text-main dark:text-gray-300 mb-4 uppercase tracking-wide">Or Choose a Preset</h3>

                {/* Style Grid */}
                <section className="grid grid-cols-2 gap-4 mb-8">
                    {styles.map((style) => (
                        <div 
                            key={style.id} 
                            onClick={() => {
                                handleStyleSelect(style.id);
                                setCustomPrompt(''); // Clear text if selecting style
                            }}
                            className="group relative aspect-[3/4] cursor-pointer"
                        >
                            <div className={`absolute inset-0 rounded-2xl border-4 ${selectedStyleId === style.id ? 'border-primary shadow-[0_8px_20px_rgb(212,163,115,0.3)]' : 'border-transparent hover:border-primary/50'} z-20 pointer-events-none transition-all duration-300`}></div>
                            {selectedStyleId === style.id && (
                                <div className="absolute top-3 right-3 z-30 bg-primary text-white rounded-full p-1 shadow-md animate-fade-in">
                                    <span className="material-symbols-outlined text-sm font-bold block">check</span>
                                </div>
                            )}
                            <div className="h-full w-full rounded-2xl overflow-hidden relative shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                <div 
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                                    style={{backgroundImage: `url('${style.image}')`}}
                                ></div>
                                <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                                    <p className="text-white text-lg font-bold leading-tight">{style.name}</p>
                                    <p className="text-gray-200 text-xs font-medium opacity-90 mt-1">{style.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pointer-events-none">
                <div className="max-w-md mx-auto pointer-events-auto">
                    <Button 
                        onClick={handleContinue} 
                        disabled={(!selectedStyleId && !customPrompt) || isGenerating}
                        fullWidth
                        isLoading={isGenerating}
                    >
                        {isGenerating ? 'Designing...' : 'Continue'}
                        {!isGenerating && <span className="material-symbols-outlined text-xl">arrow_forward</span>}
                    </Button>
                </div>
            </div>
        </div>
    );
};
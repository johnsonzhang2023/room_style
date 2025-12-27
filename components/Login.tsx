import React, { useState } from 'react';
import { Button } from './Button';

interface LoginProps {
    onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-background-light dark:bg-background-dark">
            <div className="absolute top-0 right-0 w-[80%] h-[50%] bg-gradient-to-b from-primary/5 to-transparent rounded-bl-full -z-10 pointer-events-none"></div>
            <div className="absolute -left-20 top-[20%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            
            <header className="w-full pt-10 px-8 flex justify-center">
                <div className="flex items-center gap-2 opacity-90">
                    <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-[20px] filled">chair</span>
                    </div>
                    <h1 className="text-lg font-extrabold tracking-tight text-text-main dark:text-white">ReRoom</h1>
                </div>
            </header>

            <main className="flex-1 w-full max-w-md mx-auto px-8 flex flex-col justify-center gap-10">
                <div className="text-center space-y-3 relative z-10">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-widest uppercase mb-2">
                        <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                        AI Powered
                    </div>
                    <h2 className="text-5xl font-extrabold text-text-main dark:text-white leading-[0.95] tracking-tight drop-shadow-sm">
                        Time to <br/>
                        <span className="text-primary italic">Redesign.</span>
                    </h2>
                    <p className="text-text-subtle dark:text-gray-400 font-medium text-sm max-w-[260px] mx-auto pt-2">
                        Log in to visualize your dream home with our advanced AI engine.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm p-1 rounded-3xl">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-text-main dark:text-gray-300 ml-1 uppercase tracking-wide opacity-80" htmlFor="email">Email or Username</label>
                        <div className="relative group">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors material-symbols-outlined text-[20px]">mail</span>
                            <input 
                                className="w-full bg-surface-light dark:bg-white/5 border-none ring-1 ring-black/5 dark:ring-white/10 focus:ring-2 focus:ring-primary/50 rounded-2xl py-4 pl-12 pr-4 text-base font-medium shadow-sm transition-all outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600 text-text-main dark:text-white" 
                                id="email" 
                                placeholder="alex@example.com" 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center ml-1 pr-1">
                            <label className="text-xs font-bold text-text-main dark:text-gray-300 uppercase tracking-wide opacity-80" htmlFor="password">Password</label>
                            <a href="#" className="text-xs font-bold text-secondary hover:text-primary transition-colors">Forgot Password?</a>
                        </div>
                        <div className="relative group">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors material-symbols-outlined text-[20px]">lock</span>
                            <input 
                                className="w-full bg-surface-light dark:bg-white/5 border-none ring-1 ring-black/5 dark:ring-white/10 focus:ring-2 focus:ring-primary/50 rounded-2xl py-4 pl-12 pr-12 text-base font-medium shadow-sm transition-all outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600 text-text-main dark:text-white" 
                                id="password" 
                                placeholder="••••••••" 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button type="submit" className="mt-4">
                        Login
                    </Button>
                </form>

                <div className="flex items-center gap-4 px-4 opacity-40">
                    <div className="h-px bg-gray-400 dark:bg-gray-600 flex-1"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-main dark:text-gray-400">Or</span>
                    <div className="h-px bg-gray-400 dark:bg-gray-600 flex-1"></div>
                </div>
            </main>

            <footer className="w-full pb-10 px-8 text-center z-10">
                <p className="text-sm font-medium text-text-main dark:text-gray-400">
                    New to ReRoom? 
                    <a href="#" className="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center gap-0.5 ml-1">
                        Sign Up 
                    </a>
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/40 via-primary/40 to-secondary/40"></div>
            </footer>
        </div>
    );
};
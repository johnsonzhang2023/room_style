import React, { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { StyleSelector } from './components/StyleSelector';
import { ResultView } from './components/ResultView';
import { SaveProject } from './components/SaveProject';
import { AppView } from './types';
import { generateRoomRedesign } from './services/geminiService';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<AppView>(AppView.LOGIN);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    // Helpers
    const handleLogin = () => setCurrentView(AppView.DASHBOARD);
    
    const handleImageSelect = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedImage(reader.result as string);
            setCurrentView(AppView.STYLE_SELECTOR);
        };
        reader.readAsDataURL(file);
    };

    const handleGenerate = async (prompt: string) => {
        if (!uploadedImage) return;
        setIsGenerating(true);
        try {
            const resultBase64 = await generateRoomRedesign(uploadedImage, prompt);
            setGeneratedImage(resultBase64);
            setCurrentView(AppView.RESULT);
        } catch (error) {
            console.error("Failed to generate:", error);
            alert("Failed to generate image. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSave = () => setCurrentView(AppView.SAVE);
    const handleDone = () => {
        setUploadedImage(null);
        setGeneratedImage(null);
        setCurrentView(AppView.DASHBOARD);
    };

    return (
        <>
            {currentView === AppView.LOGIN && <Login onLogin={handleLogin} />}
            
            {currentView === AppView.DASHBOARD && <Dashboard onImageSelect={handleImageSelect} />}
            
            {currentView === AppView.STYLE_SELECTOR && (
                <StyleSelector 
                    onBack={() => setCurrentView(AppView.DASHBOARD)}
                    onGenerate={handleGenerate}
                    isGenerating={isGenerating}
                />
            )}

            {currentView === AppView.RESULT && uploadedImage && generatedImage && (
                <ResultView 
                    originalImage={uploadedImage}
                    generatedImage={generatedImage}
                    onSave={handleSave}
                    onBack={() => setCurrentView(AppView.STYLE_SELECTOR)}
                />
            )}

            {currentView === AppView.SAVE && generatedImage && (
                <SaveProject 
                    image={generatedImage}
                    onDone={handleDone}
                    onBack={() => setCurrentView(AppView.RESULT)}
                />
            )}
        </>
    );
};

export default App;
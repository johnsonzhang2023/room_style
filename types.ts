export enum AppView {
    LOGIN = 'LOGIN',
    DASHBOARD = 'DASHBOARD',
    STYLE_SELECTOR = 'STYLE_SELECTOR',
    RESULT = 'RESULT',
    SAVE = 'SAVE'
}

export interface DesignStyle {
    id: string;
    name: string;
    description: string;
    image: string;
    promptSnippet: string;
    isNew?: boolean;
    isPopular?: boolean;
}

export interface GenerationResult {
    originalImage: string; // Base64
    generatedImage: string; // Base64
    promptUsed: string;
    styleName?: string;
}
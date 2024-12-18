import { create } from 'zustand';

// Global configuration store
const useGlobalStore = create((set) => ({
	serverAddress: 'https://localhost:8020', // Default server address
	isDemo: false, // Add the isDemo value
	setServerAddress: (newAddress) => set({ serverAddress: newAddress }),
	setIsDemo: (newIsDemo) => set({ isDemo: newIsDemo }), // Method to update isDemo
}));

export default useGlobalStore;
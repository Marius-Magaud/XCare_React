import { create } from 'zustand';

// Global configuration store
const useGlobalStore = create((set) => ({
	serverAddress: 'https://aexfr-care-dev:8021', // Default server address
	isDemo: true, // Add the isDemo value
	setServerAddress: (newAddress) => set({ serverAddress: newAddress }),
	setIsDemo: (newIsDemo) => set({ isDemo: newIsDemo }), // Method to update isDemo
}));

export default useGlobalStore;

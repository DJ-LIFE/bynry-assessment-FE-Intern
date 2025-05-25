import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { profiles as initialProfiles } from "@/data/profiles";

interface Profile {
	name: string;
	img: string;
	description: string;
	coordinates: { lat: number; lng: number };
	contact: string;
	interests: string[];
}

interface ProfileContextType {
	profiles: Profile[];
	addProfile: (profile: Profile) => void;
	deleteProfile: (index: number) => void;
	updateProfile: (index: number, profile: Profile) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
	const [profiles, setProfiles] = useState(initialProfiles);
	const addProfile = (profile: Profile) => {
		setProfiles((prev) => [...prev, profile]);
	};

	const deleteProfile = (index: number) => {
		setProfiles((prev) => prev.filter((_, i) => i !== index));
	};

	const updateProfile = (index: number, profile: Profile) => {
		setProfiles((prev) => prev.map((p, i) => (i === index ? profile : p)));
	};

	return (
		<ProfileContext.Provider
			value={{ profiles, addProfile, deleteProfile, updateProfile }}
		>
			{children}
		</ProfileContext.Provider>
	);
};

export const useProfileContext = () => {
	const context = useContext(ProfileContext);
	if (!context) {
		throw new Error(
			"useProfileContext must be used within a ProfileProvider"
		);
	}
	return context;
};

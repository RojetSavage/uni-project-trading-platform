import { Sidebar } from "./Sidebar"
import { Navbar } from "./Navbar"
import { ProfileScreen } from "./ProfileScreen/ProfileScreen"
import { useState } from 'react';

export default function App() {
	const [showForSale, setShowForSale ] = useState(true)

	return (
		<div className="flex">
			<Sidebar />
			<div className="flex flex-col w-full h-full">
				<Navbar setShowForSale={setShowForSale} />
				<ProfileScreen showForSale={showForSale}/>				
			</div>
		</div>
	)
}

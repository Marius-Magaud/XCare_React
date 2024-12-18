import { useEffect, useState } from "react";
import axios from "axios";
import useGlobalStore from "../../../store/golbal_store.tsx";

const use_RD_LiveThreads = () => {
	const [threads, setThreads] = useState([]);
	const serverAddress = useGlobalStore((state) => state.serverAddress);

	useEffect(() => {
		const fetchThreads = async () => {
			try {
				console.log(`${serverAddress}/dashboard-threads`)
				const response = await axios.get(`${serverAddress}/dashboard-threads`);
				if (response.data) {
					console.log(response.data)
					setThreads(response.data);
				}
			} catch (error) {
				console.error("Error fetching threads:", error);
			}
		};

		if (serverAddress) {
			fetchThreads();
		}
	}, [serverAddress]);

	return threads;
};

export default use_RD_LiveThreads;

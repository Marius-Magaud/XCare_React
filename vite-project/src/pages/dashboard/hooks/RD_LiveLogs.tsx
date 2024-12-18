import { useEffect, useState } from "react";
import axios from "axios";
import useGlobalStore from "../../../store/golbal_store.tsx";

const use_RD_LiveLogs = () => {
	const [logs, setLogs] = useState([]);
	const serverAddress = useGlobalStore((state) => state.serverAddress);

	useEffect(() => {
		const fetchLogs = async () => {
			try {
				console.log(`${serverAddress}/dashboard-logs`)
				const response = await axios.get(`${serverAddress}/dashboard-logs`);
				if (response.data) {
					console.log(response.data)
					setLogs(response.data);
				}
			} catch (error) {
				console.error("Error fetching logs:", error);
			}
		};

		if (serverAddress) {
			fetchLogs();
		}
	}, [serverAddress]);

	return logs;
};

export default use_RD_LiveLogs;

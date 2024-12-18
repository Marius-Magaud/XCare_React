import { useEffect, useState } from "react";
import axios from "axios";
import useGlobalStore from "../../../store/golbal_store.tsx";

const use_RD_LiveLogs = () => {
	const [logs, setLogs] = useState([]);
	const serverAddress = useGlobalStore((state) => state.serverAddress);

	const query_params = {
		startTime: "2000-01-01 00:00",
		endTime: "3000-01-01 00:00",
		level: ["Debug", "Info", "Warn", "Error", "Fatal"],
		logger: [
			"TM1.Process",
			"TM1.Chore",
			"TM1.Server",
			"TM1.Transaction",
			"TM1.Cube",
			"TM1.Dimensions",
			"TM1.Cube.Dependency",
			"TM1.Blob",
			"TM1.MDX.Interface",
			"TM1.SQLAPI",
			"TM1.NGAPI.Rest",
		],
		contains: "=== No String ===",
		notContains: "=== No String ===",
	};

	useEffect(() => {
		const fetchLogs = async () => {
			try {
				console.log(`${serverAddress}/query/logs`);
				const response = await axios.post(
					`${serverAddress}/query/logs`,
					query_params, // Sending JSON object as request body
					{
						headers: {
							"Content-Type": "application/json", // Setting appropriate header for JSON
						},
					}
				);
				if (response.data) {
					console.log(response.data);
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

import { fetchDataWithAddress, fetchDataWithAddressAndData, MappingData } from "./fetchData";

export async function getMappingData(serverAddress: string) {
  const token = sessionStorage.getItem("Token");
  const url = `https://localhost:4000/data/mapping/getItemList`;

  // Check if the token is available, otherwise return an error.
  if (!token) {
    throw new Error("Authentication required. Token not found.");
  }

  // Check if the server address is valid, otherwise return an error.
  if (!serverAddress || serverAddress.trim() === "") {
    throw new Error(
      "Server address not found. Please provide a valid address."
    );
  }

  console.log("serverAddress", serverAddress);

  try {
    // API call with the server address and token.
    const response = await fetchDataWithAddress(serverAddress, token, url);

    // Check if the response contains data.
    if (!response || !response.data) {
      throw new Error("No data received from the server.");
    }
    console.log("Mapping data List:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error while retrieving mapping data:", error);
    throw error; // Propagate the error for external error handling.
  }
}

export async function getMappingFilteredData(
  serverAddress: string,
  data: MappingData
) {
  const token = sessionStorage.getItem("Token");
  const url = `https://localhost:4000/data/mapping/getAround`;

  // Check if the token is available, otherwise return an error.
  if (!token) {
    throw new Error("Authentication required. Token not found.");
  }

  // Check if the server address is valid, otherwise return an error.
  if (!serverAddress || serverAddress.trim() === "") {
    throw new Error(
      "Server address not found. Please provide a valid address."
    );
  }

  try {
    // API call with the server address and token.
    const response = await fetchDataWithAddressAndData(
      serverAddress,
      token,
      url,
      data
    );

    // Check if the response contains data.
    if (!response || !response.data) {
      throw new Error("No data received from the server.");
    }
    console.log("Mapping data filtered getAround:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error while retrieving mapping data:", error);
    throw error; // Propagate the error for external error handling.
  }
}

import axios from "axios";

export async function fetchDataWithName(addressToSend: string, token: string, username: string, url: string) {
  return await axios.post(
    url,
    { server: addressToSend },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Username': username
      }
    }
  );
}

export async function fetchDataWithAddress(addressToSend: string, token: string, url:string) {
  return await axios.post(
    url,
    { server: addressToSend },
    { headers: { Authorization: token } }
  );
}

export type MappingData = {
  NodesTypes: string[];
  EdgesTypes: string[];
  IntraLinks: string;
  Depth: number;
  ID: string | null;
};

export async function fetchDataWithAddressAndData(addressToSend: string, token: string, url: string, p_data: MappingData) {
  return await axios.post(
    url,
    { server: addressToSend, data : p_data },
    { headers: { Authorization: token } }
  );
}

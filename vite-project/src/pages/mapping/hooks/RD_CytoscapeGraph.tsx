import axios from "axios";
import useStoreMapping from "../store/STORE_mapping.tsx";
import useGlobalStore from "../../../store/golbal_store.tsx";

// Définition du type MappingData
export type MappingData = {
  NodesTypes: string[];
  EdgesTypes: string[];
  IntraLinks: string;
  Depth: number;
  ID: string | null;
};

// Fonction pour effectuer le post
const fetchMappingData = async () => {
  // Récupérer l'adresse du serveur depuis useGlobalStore
  const { serverAddress } = useGlobalStore.getState();

  // Construire l'URL de l'API
  const url = `${serverAddress}/mapping/getAround`;

  const {NodesFilter, EdgesFilter, selectedNodeId, depthLevel} = useStoreMapping.getState()

  // Préparer le JSON vide
  const mappingContent: MappingData = {
    NodesTypes: NodesFilter,
    EdgesTypes: EdgesFilter,
    IntraLinks: "True",
    Depth: depthLevel,
    ID: selectedNodeId,
  };

  // Effectuer la requête POST avec axios
  const response = await axios.post(url, mappingContent);
  return response.data

};

export default fetchMappingData;

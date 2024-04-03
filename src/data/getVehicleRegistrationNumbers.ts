import axios from "axios";

export const getVehicleRegistrationNumbers = async () => {
  const response = await axios.get(
    "https://huggingface.co/spaces/dbhenriques/license-plate-reader/raw/main/license-plates.txt"
  );

  const VRNS = response.data;
  return { VRNS };
};

import axios from "axios";

const url = "https://covidtracking.com/api/v1/us/current.json";

export const usaData = async () => {
  try {
    const { data } = await axios.get(url);

    return data[0];
  } catch (error) {
    console.log(error);
  }
};

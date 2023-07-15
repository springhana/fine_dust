import axios from "axios";
const request = async (url: any) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDust = async (PM: any, Year: any, Page: any) =>
  request(
    `${process.env.REACT_APP_END_POINT}?serviceKey=${process.env.REACT_APP_SERVICE_KEY}&returnType=json&numOfRows=100&pageNo=${Page}&year=${Year}&itemCode=${PM}`
  );

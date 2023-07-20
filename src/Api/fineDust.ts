import axios from "axios";
const request = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDust = async (PM: string, Year: number, Page: string) => {
  try {
    const responseData = await request(
      `${process.env.REACT_APP_END_POINT}?serviceKey=${process.env.REACT_APP_SERVICE_KEY}&returnType=json&numOfRows=100&pageNo=${Page}&year=${Year}&itemCode=${PM}`
    );
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

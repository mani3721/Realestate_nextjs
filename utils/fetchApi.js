import axios from "axios";

export const baseUrl='https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '13982f8a2dmsh616b0b57ce6f4ccp19e2eajsnd0267428e678',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    

  return data;

}
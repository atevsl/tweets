import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://6492a0b8428c3d2035d0615f.mockapi.io/api'
}) ;

export default axiosInstance;



//   export const getTweets = async () => {
//     try {
//       const response = await axios.get(`/tweets`);
//       return response.data;
//     } catch (error) {
//       return console.log(error.message);
//     }
//   };

//   export const getTweetsByPage = async (page) => {
//     try {
//       const response = await axios.get(`/tweets?page=${page}&limit=3`);
//       return response.data;
//     } catch (error) {
//       return console.log(error.message);
//     }
//   };

//   export const updTweet = async (id, tweetToUpd) => {
//   try {
//     const { data } = await axios.put(`/users/${id}`, tweetToUpd);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
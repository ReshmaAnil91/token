import axios from 'axios';

const Axios = axios.create({
    baseURL:"http://127.0.0.1:8000/todolist/",
    headers:{},
});

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
  
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
});

  Axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        // alert('accesstoken expired.refresh?')
        const accessToken = await refreshAccessToken();
        localStorage.setItem("accessToken", accessToken);
        axiosPrivate.defaults.headers.common["Authorization"] =
          "Bearer " + accessToken;
        return axiosPrivate(originalRequest);
      } else if (error.response.status === 401) {
        localStorage.clear();
        console.log("refresh failed");
        window.location.replace("/");
      } else {
        throw error;
      }
    }
  );
  
  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const data = { refresh: refreshToken };
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/todolist/" + "token/refresh/", data);
      const accessToken = response?.data?.access;
      localStorage.setItem("accessToken", accessToken);
      return accessToken;
    } catch (err) {
      console.log(err)
      localStorage.clear();
      window.location.replace("/");
    }
  };


export const axiosPrivate = Axios;
export default Axios;
import BaseUrl from "../../Api/Axios"

const createuser = (datas) => async (dispatch) => {
    try {
      const response = await BaseUrl.post('/api/v1/userSecurity/signup', datas);
      console.log("Data from auth: ", response.data);
      dispatch({ type: 'CREATE_USER', payload: response.data });
    } catch (error) {
      console.error("Error from server: ", error.response?.data);
      dispatch({ type: 'CREATE_USER', payload: error.response?.data });
    }
  };
export const loginuser = (datas) => async (dispatch) => {
    try {
      const response = await BaseUrl.post('/api/v1/userSecurity/login', datas);
      console.log("Data from auth: ", response.data);
      dispatch({ type: 'LOGIN_USER', payload: response.data });
    } catch (error) {
      console.error("Error from server: ", error.response?.data);
      dispatch({ type: 'LOGIN_USER', payload: error.response?.data });
    }
  };
  
export default createuser;
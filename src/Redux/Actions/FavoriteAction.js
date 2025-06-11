import BaseUrl from "../../Api/Axios";

export const createfavorite = (body) => async (dispatch) => {
    const response = await BaseUrl.post('/api/v1/favorite/favorites/add', body);
    dispatch({ type: "CREATEFAVORITE", data: response.data });
};

export const getallfavorite = (userId) => async (dispatch) => {
    const response = await BaseUrl.get(`/api/v1/favorite/favorites/${userId}`);
    console.log("sam", response );
    dispatch({ type: "GETALLFAVORITE", data: response.data.favorites });
};
export const Deletefavorite = ( body) => async (dispatch) => {
    const response = await BaseUrl.delete(`/api/v1/favorite/favorites/remove`,{ data: body });
    console.log("sam", response );
    dispatch({ type: "DELETEFAVORITE", data: response.data.favorites });
};

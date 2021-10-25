import { FETCH_DOGS, FETCH_BY_BREED, SET_LOADING, FETCH_IMAGES } from "../keys";
export function fetchDogs(payload) {
  return {
    type: FETCH_DOGS,
    payload,
  };
}
export function dogsByBreed(payload) {
  return {
    type: FETCH_BY_BREED,
    payload,
  };
}
export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}
export function fetchImages(payload) {
  return {
    type: FETCH_IMAGES,
    payload,
  };
}
const baseURL = "http://192.168.1.3:4003";
export function fetchDogsAsync() {
  return function (dispatch) {
    dispatch(setLoading(true));
    return fetch(`${baseURL}/dogs`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(fetchDogs(data));
        console.log(data, "<<<");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => dispatch(setLoading(false)));
  };
}
export function dogsByBreedAsync(breed) {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      fetch(`${baseURL}/dogs/${breed}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(dogsByBreed(data));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => dispatch(setLoading(false)));
    } catch (error) {
      console.log(error);
    }
  };
}
export function fetchImagesAsync(breed) {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      fetch(`${baseURL}/dogs/${breed}/images`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(fetchImages(data));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    } catch (error) {
      console.log(error);
    }
  };
}

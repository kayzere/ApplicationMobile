const API_TOKEN = "9ba3265fa4c0615501083ce55d7eebc1";
const id = ""
const url = ""

export function getPicturefromGraphAPI(id){
    const route = "/";
    const tmp_url = url + route + text
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

export function getMusicfromGraphAPIWithId(id){
    const route = "/";
    const tmp_url = url + route + id
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getImageFromApi () {
    const route = "logos/";
    const tmp_url = url + route + "1";
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getVideosFromApiWithId(id){
    const route = "/";
    const tmp_url = url + route + id
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }
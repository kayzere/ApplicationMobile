const API_TOKEN = "9ba3265fa4c0615501083ce55d7eebc1";
const ip = ""
const url = "https://kayzere.me/public/index.php/"

export function getMusiqueFromApiWithSearchedText(text){
    const route = "musique/";
    const tmp_url = url + route + text
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

export function getMusiqueFromApiWithId(id){
    const route = "musiqueWithId/";
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

  export function getVideosFromApiWithSearchedText(){
    const route = "videos/";
    const tmp_url = url + route
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }
import axios from "axios"
const Key="AIzaSyBwWwp7t9hkXg4JsgpufNZM81iAKJQGYTo"
export default axios.create({
  baseURL:"https://www.googleapis.com/youtube/v3/",
  params:{
    part:"snippet",
    maxResults:8,
    key: Key,
  
  }
})

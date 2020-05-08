import axios from 'axios'
import { environment } from '../environment/environment.js'
const URL = environment.baseUrl
const token = localStorage.getItem('token')
export async function getNotes () {
  var responseResult = []
  responseResult = await axios.get(URL + '/notes/getNotesList', {
    headers: {
      Authorization: token
    }
  })
  return responseResult
}

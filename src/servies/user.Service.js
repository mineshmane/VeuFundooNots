import axios from 'axios'
export async function UserLogin (data) {
  console.log('in the service ', data)
  let registerResponse = []
  try {
    registerResponse = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data)
    console.log(registerResponse)
    return registerResponse
  } catch (err) {
    return err
  }
}

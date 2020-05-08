import axios from 'axios'
export async function userRegister(data) {
    let registerResponse = [];
    try {
        registerResponse = await axios.post("http://34.213.106.173/api/user/userSignUp", data);
        return registerResponse
    } catch (err) {
        return err;
    }
}
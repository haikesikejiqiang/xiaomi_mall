import axios from 'axios'

export async function getLogin() {
  const { data } = await axios.get('/api/user')
  return data
}

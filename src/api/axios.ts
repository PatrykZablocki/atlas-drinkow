import Axios from 'axios'

export const axios = Axios.create({
  baseURL: 'https://atlasdrinkow-9348.restdb.io/rest',
  headers: {
    'cache-control': 'no-cache',
    'x-apikey': '6171abab8597142da17458d7',
  },
})

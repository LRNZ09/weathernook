import axios from 'axios'

const weatherApi = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_BASE_URL,
  params: {
    /**
     * ! FIXME
     * If you must have an API key or a secret to access some resource from your
     * app, the most secure way to handle this would be to build an orchestration
     * layer between your app and the resource. This could be a serverless function
     * (e.g. using AWS Lambda or Google Cloud Functions) which can forward the
     * request with the required API key or secret. Secrets in server side code
     * cannot be accessed by the API consumers the same way secrets in your app code can.
     *
     * @see {@link https://reactnative.dev/docs/security#storing-sensitive-info}
     */
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  },
})

export default weatherApi

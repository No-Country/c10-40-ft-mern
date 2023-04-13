import axios from 'axios'

export const sendEmail = async (data: Record<string, string>): Promise<any> => {
  const { name, email, subject, message } = data

  if (name === '' || subject === '' || email === '' || message === '') {
    throw new Error(`${name} ${subject} ${email} missing`)
  }

  const response = await axios
    .post('https://backend-workout-aoo.onrender.com/api/v1/contact', data)
    .catch((error) => {
      console.log(error)
    })

  return response
}

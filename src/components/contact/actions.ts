import emailjs from 'emailjs-com'

// interfaces
import { MessageI } from '../../interfaces'

export const response: { [key: string]: string } = {
  success: 'Your message has been sent',
  failed: 'There was an error: Email not sent',
  failed_params: 'There was an error: You must fill in the form'
}

export const sendMessage = (data: MessageI): Promise<[string, boolean]> => {
  return new Promise(resolve => {
    if (!data.email || !data.message) {
      resolve([response.failed_params, false])
    } else {
      // @ts-ignore -- this ignores data type parameter for emailjs send func
      emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, data, process.env.USERID)
        .then(_ => {
          resolve([response.success, true])
        })
        .catch(err => {
          console.error(err)
          resolve([response.failed, false])
        })
    }
  })
}

export const handletextareaInput = async () => {
  const textarea = await document.getElementsByTagName('textarea')[0]
  textarea.addEventListener('keydown', () => {
    const el = textarea
    setTimeout(() => {
      el.style.cssText = 'height:auto; padding:0;'
      el.style.cssText = 'height:' + (el.scrollHeight + 12) + 'px'
    }, 0)
  })
}

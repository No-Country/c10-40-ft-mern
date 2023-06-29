import { toast } from 'sonner'

export const sendNotification = (
  message: string,
  type?: 'success' | 'error'
): string | number => {
  switch (type) {
    case 'success':
      return toast.success(message, {
        style: {
          color: '#185E54',
          border: '1px solid #185E54',
          background: 'rgba(174, 236, 227, 0.8)',
          backdropFilter: 'blur(2px)',
          fontFamily: 'Work Sans, sans-serif'
        }
      })
    case 'error':
      return toast.error(message, {
        style: {
          color: '#7D202D',
          border: '1px solid #7D202D',
          background: 'rgba(236, 174, 183, 0.8)',
          backdropFilter: 'blur(2px)',
          fontFamily: 'Work Sans, sans-serif'
        }
      })
    default:
      return 0
  }
}

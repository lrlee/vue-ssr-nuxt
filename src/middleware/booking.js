import { bookingOnOrOff } from '@/api/index'
export default function({ route, redirect }) {
  if (route.path === '/') {
    bookingOnOrOff().then(res => {
      if (res.code !== 0 || (res.data && !res.data.on_off)) {
        return redirect('/home')
      }
    })
  }
}

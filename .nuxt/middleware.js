const middleware = {}

middleware['booking'] = require('../src/middleware/booking.js')
middleware['booking'] = middleware['booking'].default || middleware['booking']

middleware['guard'] = require('../src/middleware/guard.js')
middleware['guard'] = middleware['guard'].default || middleware['guard']

export default middleware

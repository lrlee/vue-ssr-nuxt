const middleware = {}

middleware['guard'] = require('../src/middleware/guard.js')
middleware['guard'] = middleware['guard'].default || middleware['guard']

export default middleware

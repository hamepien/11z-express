import express, { Router } from '../index'
import { CatRoute } from './cat.ro'

// Initialize express.
const app = express()

// Router instance.
const router = new Router(app)

// Apply middleware.
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Attach and register decorated route.
router.attach('/api/v1', [CatRoute])

// Listen for connections.
app.listen(4000, () => console.log('Server is up! visit: http://localhost:4000'))

// It will be used for testing purposes.
export default app

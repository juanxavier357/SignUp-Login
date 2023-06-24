import express, {Express, Request, Response, NextFunction} from 'express'

const app: Express = express()

const PORT = process.env.PORT ?? 8080

// creando rutas
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    //res.send('Hello World')
    res.json({ message: 'Hello world' })
})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
}) 
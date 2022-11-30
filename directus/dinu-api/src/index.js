export default (router) => {
  router.get('/', (req, res) => {
    console.log(':cookies', req.cookies)
    console.log(':headers', req.headers)
    res.send('Hello, World!')
  })
}

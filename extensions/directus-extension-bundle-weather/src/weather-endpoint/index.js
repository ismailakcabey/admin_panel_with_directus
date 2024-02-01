export default {
	id: "hello-world",
	handler: (router) => {
		router.get("/", async (req, res) => {
			res.json({ data: "hello world" })
		})
	}
}
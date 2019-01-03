module.exports = {
  index: async (ctx, next) => {
    console.log(ctx.req.header)
    console.log(ctx.query)
    ctx.body = {
      name: "kjj"
    }
  }
}
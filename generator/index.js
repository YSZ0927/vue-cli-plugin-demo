module.exports = (api, options) => {
    const { select: template } = options
    api.extendPackage({
        scripts: {
            "build:qa": "vue-cli-service build --mode qa",
            "new": "vue-cli-service new --name"
          },
    })
  
    api.render(`./template/${template}`)
  
  }
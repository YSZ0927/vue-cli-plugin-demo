module.exports = (api, options) => {
    const { select: template } = options
    const dependencies = {
        pc: {
            "@zyf2e/capsule-ui": "^1.3.0",
            
        },
        mobile: {
            "@zyf2e/capui-mobile": "^0.5.1",
        }
    }[template]
    api.extendPackage({
        scripts: {
            "build:qa": "vue-cli-service build --mode qa",
            "build:pre": "vue-cli-service build --mode pre",
            "new": "vue-cli-service new --name"
          },
        dependencies,
        // devDependencies: {
        //     "release-it": "^13.5.0",
        // },
    })
  
    api.render(`./template/${template}`)
  
  }
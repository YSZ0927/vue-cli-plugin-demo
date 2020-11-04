const fs = require('fs')
const path = require('path')
module.exports = (api) => {
    api.registerCommand(
        'new',
        {
          description: 'create new page',
          usage: 'vue-cli-service new --name'
        },
        (args) => {
            fs.mkdir(`./src/${args.name}`, (err) => {
                console.log(err)
                if(err === null) {
                    
                }
            })
            console.log(args.name)
          console.log(`👋  Hello`)
        }
      )
}
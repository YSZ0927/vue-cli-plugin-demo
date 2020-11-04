const fs = require('fs');
const util = require('util');
const path = require('path');
const chalk = require('chalk');
const mkdirAsync = util.promisify(fs.mkdir);

const template = `<template>
  <div></div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>

</style>
`;

module.exports = (api) => {
  api.registerCommand(
    'new',
    {
      description: 'create new page',
      usage: 'vue-cli-service new --name'
    },
    async (args) => {
      const cwd = args.cwd || process.cwd();
      const data = fs.readFileSync(`./src/router/index.js`, 'utf-8');
      
      const targetDir = path.resolve(cwd, `src/${args.name}`);
      if (fs.existsSync(targetDir)) {
        console.error(chalk.red('目录已存在！！'));
        return;
      }
      const result = await mkdirAsync(`./src/${args.name}`);
      if (typeof result === 'undefined') {
        fs.writeFileSync(`./src/${args.name}/index.vue`, template, 'utf-8');
      }
    }
  );
};

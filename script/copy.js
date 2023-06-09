/**
 * 转换 examples/basic下除src目录下所有ts文件为js文件
 * */
const path = require('path');
const fs = require('fs');
const FS = require('fs-extra');
const ts = require('typescript');
const { transformFileAsync } = require('@babel/core');
const PWDEntry = path.resolve(__dirname, '../examples/basic/');
const PWDOutPut = path.resolve(__dirname, '../examples/basicjs/');

// 获取文件
const getFields = async () => {
  const { recursiveReaddirFiles } = await import('recursive-readdir-files');
  const dirToFiles = await recursiveReaddirFiles(PWDEntry, {
    exclude:
      /(node_modules|.umi|build|dist|\.d\.ts|\.(test|spec)\.(ts|tsx|js|jsx))$/,
  });
  return dirToFiles;
};

// 转换ts tsx代码
const transform = async (paths) => {
  const result = await transformFileAsync(paths, {
    presets: ['@babel/preset-typescript'],
  });
  if (result) {
    const output = result.options.filename
      .replace(PWDEntry, PWDOutPut)
      .replace(/\.tsx$/, '.jsx')
      .replace(/\.ts$/, '.js');
    ts.sys.writeFile(output, result.code);
  }
};
// 循环文件
const fieldMap = async () => {
  const fieldArr = (await getFields()) || [];
  fieldArr.forEach((item) => {
    if (item.ext && /ts|tsx/.test(item.ext)) {
      transform(item.path);
    } else {
      const outPutPath = item.path.replace(PWDEntry, PWDOutPut);
      // 删除 custom.d.ts 文件
      if (outPutPath.endsWith('custom.d.ts')) {
        fs.unlinkSync(outPutPath);
      } else {
        FS.copySync(item.path, outPutPath);
      }
    }
  });
};
// 为了后面那一步 修改package.json
const ci = async () => {
  try {
    await fieldMap();
    // 删除 tsconfig.json
    const tsConfigPath = path.resolve(
      __dirname,
      '../examples/basicjs/tsconfig.json',
    );
    FS.remove(tsConfigPath);
    // 更改 package.json name 名称
    const pagPath = path.resolve(__dirname, '../examples/basicjs/package.json');
    const pagContent = fs.readFileSync(pagPath, { encoding: 'utf-8' });
    const packageJson = JSON.parse(pagContent);
    packageJson.name = '@example/basicjs';
    const newPageContent = JSON.stringify(packageJson, null, 2);
    fs.writeFileSync(pagPath, newPageContent);
  } catch (error) {
    console.error(error);
  }
};
ci();

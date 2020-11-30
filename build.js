const { generateFromFolder, generateIndex } = require("svg-to-svelte");
const fs = require("fs");
const { name, devDependencies } = require("./package.json");

(async () => {
  const lib = "@shopify/polaris-icons";
  const { moduleNames } = await generateFromFolder(`node_modules/${lib}/images`);

  await generateIndex({
    moduleNames,
    pkgName: name,
    pkgVersion: devDependencies[lib],
    outputFile: "ICON_INDEX.md",
  });
})();

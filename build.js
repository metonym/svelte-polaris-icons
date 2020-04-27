const fs = require("fs");
const pkg = require("./package.json");
const { cleanDir, generateFromFolder } = require("svg-to-svelte");

function build() {
  const { moduleNames } = generateFromFolder(
    "node_modules/@shopify/polaris-icons/images",
    "lib",
    {
      clean: true,
    }
  );

  cleanDir("docs");

  const docs = [
    "# docs",
    `> ${moduleNames.length} icons from @shopify/polaris-icons@${pkg.devDependencies["@shopify/polaris-icons"]}.`,
    "## Usage",
    "```html",
    `<script>
       import Icon from "svelte-polaris-icons/lib/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "## List of icons by `ModuleName`",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ];

  fs.writeFileSync("docs/README.md", docs.join("\n"));
}

build();

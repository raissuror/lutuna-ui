/**
 * `style-dictionary` configuration
 */
import { resolve } from "path"
import StyleDictionary from "style-dictionary"
import transforms from "./util/transforms.js"

//  we call this config from repo root, so __dirname will be root.
const getBuildPath = (subdir) => `${resolve("./dist/tokens")}/${subdir}/`;

// register all custom transforms
transforms.forEach((transform) => {
  StyleDictionary.registerTransform(transform);
});

const CSS_TRANSFORM_GROUP = [
  "attribute/cti",
  "custom/name/kebab-cti",
  "custom/name/kebab-ti",
  "custom/name/kebab-ci",
  "custom/name/kebab-cis",
  "custom/name/bgColor",
  "custom/value/pxToRem"
];
const config = {
  source: [`${resolve("tokens/src")}/**/*.json`],
  platforms: {
    /**
     * Custom properties in a CSS file
     */
    css: {
      basePxFontSize: 16,
      transforms: [...CSS_TRANSFORM_GROUP],
      buildPath: getBuildPath("css"),
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
      options: { outputReferences: true },
    },
  },
};

export default config;

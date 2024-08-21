/**
 * Custom transforms for style-dictionary.
 *
 * These transforms modify the output name or value of tokens in distributions
 * and are registered/referenced in the style dictionary config file.
 */

/**
 * Used for filtering tokens in transform `matcher` functions.
 * Checks to see if any of the attribues in `arr` match the given token attribute.
 *
 * @param {Array} searchWords - list of attributes to match against token
 * @param {String} attribute - attribue from token to match against
 * @returns {Boolean}
 */
const _matchByAttribute = (searchWords, attribute) =>
  searchWords.some((s) => s == attribute);

/**
 *  Transforms that modify the output name of tokens
 */
const nameTransforms = [
  {
    // outputs full category,type,item name in kebab format
    // each CTI segment is camelCased by default by style-dictionary
    name: "custom/name/kebab-cti",
    type: "name",
    transform: ({ attributes }) => {
      const { category, type, item } = attributes;
      return `${category}-${type}-${item}`;
    },
  },
  {
    // outputs type,item name in kebab format
    // FILTERED - only applies to some tokens (see matcher)
    name: "custom/name/kebab-ti",
    type: "name",
    filter: ({ attributes }) =>
      _matchByAttribute(
        ["theme", "space", "elevation"],
        attributes.type,
      ),
    transform: ({ attributes }) => {
      const { type, item } = attributes;
      return `${type}-${item}`;
    },
  },
  {
    // outputs category,item name in kebab format
    // FILTERED - only applies to some tokens (see matcher)
    name: "custom/name/kebab-ci",
    type: "name",
    filter: ({ attributes }) =>
      _matchByAttribute([ "system"], attributes.type),
    transform: ({ attributes }) => {
      const { category, item } = attributes;
      return `${category}-${item}`;
    },
  },
  {
    // outputs category,item name in kebab format
    // FILTERED - only applies to some tokens (see matcher)
    name: "custom/name/kebab-cis",
    type: "name",
    filter: ({ attributes }) =>
      _matchByAttribute(["lutuna"], attributes.type),
    transform: ({ attributes }) => {
      const { category, item, subitem } = attributes;
      return `${category}-${item}-${subitem}`;
    },
  },
  {
    // custom naming for color-background properties
    // (color/background tokens only)
    name: "custom/name/bgColor",
    type: "name",
    filter: ({ attributes }) => attributes.type === "background",
    transform: ({ attributes }) => {
      const { item, subitem } = attributes;
      return `bgColor-${item}-${subitem}`;
    },
  },
];

/**
 *  Transforms that modify the output value of tokens
 */
const valueTransforms = [
  // transforms a pixel font size to rem based on base font size
  // (base font size is configured in `tokens/config.js`)
  {
    name: "custom/value/pxToRem",
    type: "value",
    filter: ({ attributes }) => {
      const { category, type } = attributes;
      const isFont = type === "size" && category === "font";
      const isRadius = type === "border" && category === "radius";
      return isFont || isRadius;
    },
    transform: (token, options) => {
      const base = (options && options.basePxFontSize) || 16;
      const floatVal = parseFloat(token.value);
      if (floatVal === 0) return floatVal;
      return `${floatVal / base}rem`;
    },
  },
];

const transforms = [...nameTransforms, ...valueTransforms];
export default transforms

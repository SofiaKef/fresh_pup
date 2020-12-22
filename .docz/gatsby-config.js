const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Codenerd',
    description: 'Code school for kids.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'F:\\fresh_pup\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Codenerd',
        description: 'Code school for kids.',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'F:\\fresh_pup',
          templates: 'F:\\fresh_pup\\node_modules\\docz-core\\dist\\templates',
          docz: 'F:\\fresh_pup\\.docz',
          cache: 'F:\\fresh_pup\\.docz\\.cache',
          app: 'F:\\fresh_pup\\.docz\\app',
          appPackageJson: 'F:\\fresh_pup\\package.json',
          appTsConfig: 'F:\\fresh_pup\\tsconfig.json',
          gatsbyConfig: 'F:\\fresh_pup\\gatsby-config.js',
          gatsbyBrowser: 'F:\\fresh_pup\\gatsby-browser.js',
          gatsbyNode: 'F:\\fresh_pup\\gatsby-node.js',
          gatsbySSR: 'F:\\fresh_pup\\gatsby-ssr.js',
          importsJs: 'F:\\fresh_pup\\.docz\\app\\imports.js',
          rootJs: 'F:\\fresh_pup\\.docz\\app\\root.jsx',
          indexJs: 'F:\\fresh_pup\\.docz\\app\\index.jsx',
          indexHtml: 'F:\\fresh_pup\\.docz\\app\\index.html',
          db: 'F:\\fresh_pup\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)

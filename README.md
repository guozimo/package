 cnpm i npm-run-all -g
dev:"npm-run-all --parallel dev:**"


npm link

husky commit 钩子

{
  "name": "orign-vue-project",
  "version": "2021.0105.1449",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "start": "npm run serve",
    "build": "vue-cli-service build",
    "build-test": "vue-cli-service build --mode bt",
    "build:qa": "vue-cli-service build --mode qa",
    "build:dev197": "vue-cli-service build --mode dev197",
    "test:unit": "vue-cli-service test:unit",
    "lint": "vue-cli-service lint && npm run lint:style",
    "lint:style": "stylelint --fix \"src/**/*.scss\" --syntax scss",
    "commit": "git add . && git cz",
    "lint-staged": "lint-staged",
    "test": "vue-cli-service test:unit",
    "tag": "node version/version.js"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "caller-callsite": "^4.1.0",
    "deep-copy": "^1.4.2",
    "document-offset": "^1.0.4",
    "element-theme-chalk": "^2.13.2",
    "element-ui": "^2.13.2",
    "install": "^0.13.0",
    "intro.js": "^2.9.3",
    "lodash": "^4.17.11",
    "moment": "^2.24.0",
    "normalize.css": "^8.0.1",
    "qs": "^6.9.4",
    "sanitize-html": "^1.27.0",
    "spark-md5": "^3.0.1",
    "svg-sprite-loader": "^5.0.0",
    "uglifyjs-webpack-plugin": "^2.1.3",
    "vue": "^2.6.6",
    "vue-cookie": "^1.1.4",
    "vue-cropper": "^0.4.9",
    "vue-infinite-scroll": "^2.0.2",
    "vue-router": "^3.0.1",
    "vue-video-player": "^5.0.2",
    "vuedraggable": "^2.24.0",
    "vuex": "^3.0.1",
    "wb-dynamic-form": "http://nexus.biz.weibo.com/repository/npm/wb-dynamic-form/-/wb-dynamic-form-1.0.7.tgz",
    "wb-superfans-components": "http://nexus.biz.weibo.com/repository/npm/wb-superfans-components/-/wb-superfans-components-1.0.21.tgz",
    "webpack": "^4.29.6",
    "webpack-dev-server": "^3.2.1"
  },
  "devDependencies": {
    "@babel/core": "^7.10.5",
    "@babel/preset-env": "^7.10.4",
    "@commitlint/cli": "^9.0.1",
    "@vue/cli-plugin-babel": "^3.5.0",
    "@vue/cli-plugin-eslint": "^3.5.0",
    "@vue/cli-plugin-unit-jest": "^4.4.6",
    "@vue/cli-service": "^3.5.0",
    "@vue/test-utils": "^1.0.3",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.1.0",
    "babel-plugin-component": "^1.1.1",
    "babel-plugin-import": "^1.11.0",
    "chalk": "^4.1.0",
    "changelog-sn": "^2.1.5",
    "commitizen": "^4.1.2",
    "conventional-changelog": "^3.1.24",
    "cropperjs": "^1.5.7",
    "cz-customizable": "^6.2.0",
    "eslint": "^5.8.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-vue": "^5.0.0",
    "husky": "^4.2.5",
    "inquirer": "^7.3.3",
    "lint-staged": "^10.2.11",
    "mockjs": "^1.1.0",
    "ora": "^5.1.0",
    "postcss-preset-env": "^6.7.0",
    "prettier": "^2.0.5",
    "prettier-eslint": "^11.0.0",
    "sass": "^1.17.2",
    "sass-loader": "^7.1.0",
    "shelljs": "^0.8.4",
    "stylelint": "^13.6.1",
    "stylelint-config-sass-guidelines": "^7.0.0",
    "stylelint-scss": "^3.18.0",
    "video.js": "^7.8.3",
    "vue-template-compiler": "^2.5.21",
    "wd-ad-file-sdk": "http://nexus.biz.weibo.com/repository/npm/wd-ad-file-sdk/-/wd-ad-file-sdk-0.1.17.tgz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    },
    "cz-customizable": {
      "config": "./.czconfigrc.js"
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx,vue}": "vue-cli-service lint",
    "**/*.{scss}": "npm run lint:style"
  }
}


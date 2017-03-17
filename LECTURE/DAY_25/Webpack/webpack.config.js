//모듈 로드
const webpack = require('webpack');
const path    = require('path'); // NodeJs 내장 모듈

// 모듈 내보내기
// webpack이 내보낸 모듈을 해석하여 번들링 수행
module.exports = 
{
    "entry" : "./app/app.js",
    "output": {
        "filename" : "bundle.js",
        // 반드시 절대 경로 설정 __dirname은 현재 디렉토리 가리킴
        "path" : path.resolve(__dirname, "dist")
    },
    //webpack 로더 설정
    "module" : {
        "rules" : [
            {
                "test"   : /\.js$/,
                "exclude": /node_modules/,
                "use"    : {
                    "loader" : "babel-loader",
                    "options": {
                        "presets": ['env']
                    }
                }
            }, // babel-loader
            {
                "test": /\.css$/,
                "use" : ["style-loader", "css-loader"] 
            }, // css-loader
            {
                "test": /\.(sass|scss)$/,
                "use" : ["style-loader", "css-loader", 'sass-loader'] 
            }, // sass-loader
        ] // rule
    }
};

const webpack = require('webpack');
const path    = require('path');

module.exports = {
  // 진입파일 설정
  entry: './app/app.js',
  // 출력파일 설정
  output: {
    // 절대 경로 설정
    path: path.resolve(__dirname, 'dist'),
    // 출력 파일 이름 설정
    filename: 'app.js'
  },
  // 모듈 로더 설정
  module: {
    rules: [
      // babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      // style-loader < css-loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // style-loader < css-loader < sass-loader
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ] // rule
  }, // module

};

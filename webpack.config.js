const isProduction = process.env.NODE_ENV === "production"; // NodeJS 환경 변수

const HtmlWebpackPlugin = require("html-webpack-plugin"); // 번들을 <script>로 제공하는 HTML 파일 생성해주는 플러그인

module.exports = {
  mode: isProduction ? "production" : "development", // 웹팩 모드
  // target: "es5", // 배포 대상
  entry: "./src/index.tsx", // 처음 실행되는 파일
  output: {
    path: __dirname + "/dist/", // 번들링된 파일 저장 경로
    filename: "index_bundle.js", // 번들링된 파일 이름
  },
  module: {
    // 모듈 처리하는 방법 결정
    rules: [
      // 모듈 생성 규칙
      {
        test: /\.(ts|tsx)$/, // 테스트 통과하는 파일 유형
        exclude: /node_modules/, // 테스트에 제외되는 파일
        resolve: {
          // 모듈 해석 방식
          extensions: [".js", ".jsx", ".ts", ".tsx"], // 이 순서대로 간주
        },
        use: ["ts-loader"], // 모듈에 적용되는 옵션, ts를 js로 변환해줌, 로더는 파일을 해석하고 변환하는 역할, tsconfig 설정대로 동작
      },
      {
        test: /\.css$/,
        use: ["css-loader"], // css파일을 string으로 변환
      },
    ],
  },
  devtool: isProduction ? false : "cheap-module-source-map",
  // devtool: "source-map",// 소스맵 제공 옵션
  // 개발 모드면 source-map 생성
  plugins: [
    // 웹팩의 기본 동작에 추가 기능을 제공하는 속성, 결과물의 형태를 변경하는 역할
    new HtmlWebpackPlugin({
      template: "./index.html", // 사용할 템플릿 경로, 번들링 결과로 만들어지는 html 파일의 템플릿
    }),
  ],
  devServer: {
    // webpack-dev-server 동작을 변경하는 옵션
    client: {
      // 브라우저에서 로그 설정
      logging: "none", // 로그 출력 x
    },
  },
};

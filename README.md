### **[문제해결 전략]**

- webpack-dev-server 환경 구성

      -webpack, webpack-cli, webpack-dev-server 설치
 
      -html-webpack-plugin 설치
 
      -css-loader, style-loader 설치
      
- webpack.config.js 작성

      -const HtmlWebpackPlugin = require('html-webpack-plugin');
       const path = require('path');
       
       module.exports = {
           devServer: {
               contentBase: './public',
               hot: true, // hot reloading : 수정사항 생겼을때 자동으로 서버 재시동
           },
           mode: 'development',
           entry: { // js파일 가져와서 bundle할때 필요한 경로
               app: './src/js/index.js'
           },
           output: { // webpack 사용해서 bundle파일 만들때 경로지정
               filename: "bundle.js",
               path: path.resolve(__dirname, 'public')
           },
           module:{
               rules:[
                   {
                       test:/\.css$/,
                       use:['style-loader','css-loader']
                   }
               ]
           },
           plugins: [
               new HtmlWebpackPlugin({
                   template: './src/template/index.html'
               })
           ]
       }
 


- 기능 구현
          
      [이름]
      -keydown EventHandler: 한글 이외 텍스트 입력방지
      -input maxLength: 최대 10자 입력
      
      [휴대폰번호 / 주민등록번호]
      -keyup EventHandler
       * validation check(자리 수)[휴대폰번호:10또는11자리/주민등록번호:7자]
       * 자리 수 충족 시리(휴대폰번호:11자리), 다음 input으로 포커스 이동
      
      -keydown
       * 숫자 이외 입력 방지
      
      -focusout EventHandler
       * format 적용
       * validation check(자리 수)
       * input maxLength 변경:수 format에 맞춰(휴대폰번호: +2/주민등록번호: +1)
      
      -focusin EventHandler
       * 적용한 format 제거
       * input maxLength 변경: 기존 제한 길이
       
      [통신사]
      -change EventHandler: 선택 시, 다음 input(휴대폰 번호)으로 이동
      
      [이용약관]
      -click EventHandler:
       * 4가지 이용약관은 ul>li>checkbox로 구성 / 전체동의는 checkbox로 단독 구성
       * 전체동의 값에 따라 4가지 모두 체크/체크해제
       * 4가지 이용약관을 모두 선택시, 전체동의도 체크
       * 4가지 중 1개라도 체크해제인 경우, 전체동의도 체크해제
       
       [인증하기]
       -click EventHandler: 주어진 형식에 맞게 console창에 출력
       -validationObject를 생성하여 휴대폰번호,주민등록번호,이름,필수이용약관동의여부
       를 실시간으로 확인 및 버튼의 활성화 여부 판단
        * setter를 통해 각 항목의 validation 체크 시마다 통과여부 확인
        * getter를 통해 각 항목의 값이 모두 통과인지 확인
       
- 단위 테스트
        
        [테스트환경구성]
        -karma + jasmine : karma에서 jasmine 프레임워크를 활용
        
        yarn add karma --save
        
        #명령어를 통해 설정파일 생(karma.conf.js)
        node_modules/.bin/karma init
        
        #karma plug-in 설치
        yarn add karma-jasmine jasmine-core karma-chrome-launcher --save
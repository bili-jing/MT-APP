export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '504554873@qq.com'
    },
    get pass() {
      return 'vzskujlepgfbbjbj'
    }
    ,
    get code() {
      //  说白了我要生成一个验证码
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      //  过期时间必须是唯一de
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }

//  redis服务配置设置它真是ip
}

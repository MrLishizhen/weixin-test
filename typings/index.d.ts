/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}
import PropertyOption = WechatMiniprogram.Component.PropertyOption;
import MethodOption = WechatMiniprogram.Component.MethodOption;

interface IList extends PropertyOption {
  list:{
    type:ObjectConstructor,
    value:{
      essay_title:string
      essay_sub:string
      essay_content:string
    }
  }
}
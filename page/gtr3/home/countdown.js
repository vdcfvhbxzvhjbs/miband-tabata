import { DEVICE_WIDTH } from "./index.style";
let globalData = getApp()._options.globalData;

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page three invoked");
    console.log("we are interating"+globalData.interval_list)

    try {
      let option = { minutes: globalData.duration - 1, second: 59 };
      let index = 0
      let timePassed = 0
      hmSetting.setScreenAutoBright(false)
      const result = hmSetting.setBrightScreen(globalData.duration*60)
      console.log("brightscreen result is "+ result)
      const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)
      // hmUI.createWidget(hmUI.widget.FILL_RECT, {
      //   x: 0,
      //   y: 0,
      //   w: 192,
      //   h: 490,
      //   radius: 20,
      //   color: 0xbebebe,
      // });

      const countdown = hmUI.createWidget(hmUI.widget.TEXT, {
        // text: gettext('appName'),
        text: option.minutes+':'+option.second,
        x: px(55),
        y: px(150),
        w: DEVICE_WIDTH - px(42) * 2,
        h: px(100),
        color: 0xffffff,
        text_size: px(48),
        text_style: hmUI.text_style.WRAP,
      });
      const timer1 = timer.createTimer(1000, 1000, function () {
     
        option.second = option.second - 1;
        if (option.second == 0 && option.minutes == 0) {
            timer.stopTimer(timer1);
            hmSetting.setBrightScreenCancel()
            hmSetting.setScreenAutoBright(true)
          }

        if (option.second == 0) {
          option.minutes - 1;
          option.second = 59;
        }
        
        countdown.setProperty(hmUI.prop.MORE,{
            // text: gettext('appName'),
            text: option.minutes+':'+option.second,
            x: px(55),
            y: px(150),
            w: DEVICE_WIDTH - px(42) * 2,
            h: px(100),
            color: 0xffffff,
            text_size: px(48),
            text_style: hmUI.text_style.WRAP,
          })

         

          console.log('vibrating at index '+index)
            console.log('vibrating at '+globalData.interval_list[index].value)

          timePassed+=1
          if(timePassed==globalData.interval_list[index].value){
            //vibrate
            vibrate.stop()
            vibrate.scene = 24
            vibrate.start()
            //--
            console.log('vibrate at index '+index)
            console.log('vibrate at '+globalData.interval_list[index].value)
            timePassed=0 //reset
            index+=1
            if(index==globalData.interval_list.length){
                index=0
              }
          }
          
          

        
      });

      const endButton = hmUI.createWidget(hmUI.widget.BUTTON, {
        // text: gettext('appName'),
        text: "Stop ",
        x: px(15),
        y: px(340),
        w: DEVICE_WIDTH - px(150) * 2,
        h: px(50),
        color: 0xffffff,
        text_size: px(36),
        normal_color: 0xbebebe,
        press_color: 0x808080,
        click_func: (button_widget) => {
          hmApp.goBack();
          timer.stopTimer(timer1);
          
        },
      });

      //
    } catch (e) {
      logger.log("The error is " + e);
    }
  },
  onInit() {
    logger.debug("page3 onInit invoked");
  },

  onDestroy() {
    
    logger.debug("page3 onDestroy invoked");
  },
});

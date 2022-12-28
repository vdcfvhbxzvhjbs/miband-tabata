import { TEXT_STYLE } from "./index.style";
import { buttonStyle } from "./index.style";
import { radioGroupParam } from "./index.style";
import { subtitle } from "./index.style";
import { addButton } from "./index.style";
import { durationStyle } from "./index.style";
import { selectDuration } from "./index.style";
import { DEVICE_WIDTH } from "./index.style";
const globalData = getApp()._options.globalData 

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page build invoked");
    console.log(globalData.interval_list)
    console.log(globalData.duration)

    try{
    
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      radius: 20,
      color: 0xbebebe,
    });
    const title = hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_STYLE,
    });

    //const startButton = hmUI.createWidget(hmUI.widget.BUTTON, buttonStyle );
    // startButton.setProperty(hmUI.prop.MORE,{
    //   // text: gettext('appName'),
    //   text: "Start " + globalData.duration+'m',
    //   x: px(15),
    //   y:px(310),
    //   w: DEVICE_WIDTH - px(150) * 2,
    //   h: px(50),
    //   color: 0xffffff,
    //   text_size: px(28),
    //   normal_color: 0x76B947,
    //   press_color:0x808080,
    //   click_func: (button_widget) => {
    //     hmApp.gotoPage({ url: 'page/gtr3/home/countdown',})
        
    //     // button_widget.setProperty(hmUI.prop.MORE, {
    //     //   x: (480 - 400) / 2,
    //     //   y: 300,
    //     //   w: 400,
    //     //   h: 100,
    //     // })
    //   }
      
    // })

    const dataList = [
      { name: "1min",value:1 },
      { name: "2min" ,value:2},
      { name: "5min" ,value:5},
      { name: "10min" ,value:10},
      { name: "15min" ,value:15},
      { name: "20min" ,value:20},
      { name: "30min",value:30 },
      { name: "60min" ,value:60},
    ];
    hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
      x: 55,
      y: 40,
      h: 200,
      w: 80,
      item_space: 10,
      item_config: [
        {
          type_id: 1,
          item_bg_color: 0xef5350,
          item_bg_radius: 10,
          text_view: [
            {
              x: 0,
              y: 0,
              w: 80,
              h: 30,
              key: "name",
              color: 0xffffff,
              text_size: 20,
            },
          ],
          text_view_count: 1,
          item_height: 20,
        },
      ],
      
      item_config_count: 1,
      data_array: dataList,
      data_count: dataList.length,
      item_click_func: (item, index) => {
        console.log(`scrollListItemClick index=${index}`);
        globalData.duration = dataList[index].value
        startButton.setProperty(hmUI.prop.MORE,{
          // text: gettext('appName'),
          text: "Start " + globalData.duration+'m',
          x: px(200-125),
      y:px(320),
      w: px(100),
      h: px(40),
      color: 0xffffff,
      text_size: px(20),
      normal_color: 0x68BBE3,
      press_color:0x808080,
      click_func: () => {
         hmApp.gotoPage({ url: 'page/gtr3/home/countdown',})
        // button_widget.setProperty(hmUI.prop.MORE, {
        //   x: (480 - 400) / 2,
        //   y: 300,
        //   w: 400,
        //   h: 100,
        // })
      }
          
        })
        
        
      },
      data_type_config: [
        {
          start: 0,
          end: 7,
          type_id: 1,
        },
      ],
      data_type_config_count: 1,
    });
  

    hmUI.createWidget(hmUI.widget.TEXT,{...subtitle} );
    hmUI.createWidget(hmUI.widget.BUTTON, addButton)
    const startButton = hmUI.createWidget(hmUI.widget.BUTTON, {
      // text: gettext('appName'),
      text: "Start",
      x: px(200-125),
      y:px(320),
      w: px(100),
      h: px(40),
      color: 0xffffff,
      text_size: px(20),
      normal_color: 0x68BBE3,
      press_color:0x808080,
      click_func: () => {
         hmApp.gotoPage({ url: 'page/gtr3/home/countdown',})
        // button_widget.setProperty(hmUI.prop.MORE, {
        //   x: (480 - 400) / 2,
        //   y: 300,
        //   w: 400,
        //   h: 100,
        // })
      }
      
    })
    // function updateConfig() {
    //   scroll_list.setProperty(hmUI.prop.UPDATE_DATA, {
    //     data_type_config: [
    //       {
    //         start: 0,
    //         end: 2,
    //         type_id: 1,
    //       },
    //     ],
    //     data_type_config_count: 1,
    //     data_array: dataList,
    //     data_count: dataList.length,
    //     on_page: 1,
    //   });
    // }

    for(var i = 0;i<globalData.interval_list.length;i++){
      hmUI.createWidget(hmUI.widget.TEXT,{
      text: globalData.interval_list[i].value,
      y:px(270)+i*15,
      x: px(55),
      w: 40,
      h: px(25),
      color: 0xffffff,
      text_size: px(15),
      text_style: hmUI.text_style.WRAP,
    } );
    }
    
  }catch(e){
    logger.log("The error is "+e)
  }
},
  onInit() {
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});

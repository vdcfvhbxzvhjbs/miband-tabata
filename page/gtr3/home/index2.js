import { TEXT_STYLE } from "./index.style";
import { buttonStyle } from "./index.style";
import { radioGroupParam } from "./index.style";
import { subtitle } from "./index.style";
import { addButton } from "./index.style";
let globalData = getApp()._options.globalData

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page two invoked");

    try{

    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      radius: 20,
      color: 0xbebebe,
    });

    let dataList = [
        { name: "1s",value:1 },
        { name: "2s", value:2},
        { name: "5s" , value:5},
        { name: "10s" , value:10},
        { name: "15s" , value:15},
        { name: "20s" , value:20},
        { name: "30s" , value:30},
        { name: "60s" , value:60},
      ];
  
      hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
        x: 55,
        y: 40,
        h: 400,
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
                h: 40,
                key: "name",
                color: 0xffffff,
                text_size: 20,
              },
            ],
            text_view_count: 1,
            item_height: 40,
          },
        ],
        item_config_count: 1,
        data_array: dataList,
        data_count: dataList.length,
        item_click_func: (item, index) => {
          console.log(`scrollListItemClick index=${index}`);
        globalData.interval_list.push({value:dataList[index].value})
          hmApp.goBack()
        },
        data_type_config: [
          {
            start: 0,
            end: 1,
            type_id: 1,
          },
        ],
        data_type_config_count: 1,
      });
  
    
    //   function updateConfig() {
    //     scroll_list.setProperty(hmUI.prop.UPDATE_DATA, {
    //       data_type_config: [
    //         {
    //           start: 0,
    //           end: 2,
    //           type_id: 1,
    //         },
    //       ],
    //       data_type_config_count: 1,
    //       data_array: dataList,
    //       data_count: dataList.length,
    //       on_page: 1,
    //     });
    //   }
    }catch(e){
      logger.log("The error is "+e)
    }

  },
  onInit() {
    logger.debug("page2 onInit invoked");
  },

  onDestroy() {
    logger.debug("page2 onDestroy invoked");
  },
});
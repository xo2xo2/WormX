var vLN14 = 1;
var vLSHttpswormatefriendsg = "https://wormatefriendsglobal.com";
window.detectLog = null;
const vO13 = {
  BETAisSkinCustom(p) {
    var v = /[a-zA-Z]/;
    return typeof p === "string" && v.test(p);
  },
  testSkinCustom: function (p11) {
    if (vO13.BETAisSkinCustom(p11)) {
      return 34 || 33;
    } else {
      return p11;
    }
  },
  testSkinMod: function (p12) {
    return p12 >= 399 && p12 < 999;
  },
  testWear: function (p13) {
    return p13 >= 399 && p13 < 999;
  },
  isNumberValid: function (p14) {
    return p14 !== "" && p14 !== null && p14 !== undefined && !isNaN(p14);
  },
  validInput: function (p640) {
    if (!vO13.testSkinMod(p640) && !vO13.BETAisSkinCustom(p640)) {
      return p640;
    }
    try {
      let v8 = $("#inputReplaceSkin").val();
      return encodeURI(vO13.isNumberValid(v8) ? v8 : 35);
    } catch (e) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var v9 = localStorage.getItem("inputReplaceSkin");
var v10 = null;
var v11 = false;
var vO14 = {};
window.keyMove = 81;
var vO15 = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#FF3B3B",
    pxy: 110
  }
};
var vO16 = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: vO15.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let v12 = JSON.parse(saveGameLocal);
  for (let v13 in v12) {
    vO16[v13] = v12[v13];
  }
}
vO16.loading = true;
const vF = function () {
  let v14 = false;
  vO16.mobile = false;
  var v15 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v15) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v15.substr(0, 4))) {
    vO16.mobile = true;
    v14 = true;
  }
  return v14;
};
const vF2 = function () {
  let v16 = false;
  var v17 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v17) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v17.substr(0, 4))) {
    v16 = true;
  }
  return v16;
};
const vF60 = function (p641) {
  let v18;
  try {
    console.log(p641);
    vO16.gamePad ||= vO15.joystick;
    if (vF2() && (p641 || vO16.gamePad.checked)) {
      v18 = nipplejs.create(vO16.gamePad);
      v18.on("move", function (p642, p643) {
        vO15.eventoPrincipal.sk = p643.angle.radian <= Math.PI ? p643.angle.radian * -1 : Math.PI - (p643.angle.radian - Math.PI);
        console.log(p643);
      });
    }
    return v18;
  } catch (e4) {
    console.log(e4);
  }
};
let vO17 = {
  clientesVencidos: [],
  clientesActivos: []
};
let vO18 = {
  Api_listServer: []
};
async function f() {
  await fetch("https://xo2xo2.github.io/wormX/api/user.json").then(p644 => p644.json()).then(p645 => {
    if (p645.success) {
      let v592 = p645.Users;
      vO17.clientesActivos = v592.filter(p646 => {
        return p646.cliente_ID;
      });
    } else {
      vO17 = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
async function f109() {
  await fetch("https://xo2xo2.github.io/wormX/api/server.json").then(p647 => p647.json()).then(p648 => {
    if (p648.success) {
      let v593 = p648.servers;
      vO18.Api_listServer = v593.filter(p649 => {
        return p649.serverUrl;
      });
    } else {
      vO18 = {
        Api_listServer: []
      };
      alert("An error occurred while loading the servers");
    }
  });
}
f();
f109();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var v$111 = $("#idReplaceSkin");
const vO19 = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "vuonghiep",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "vuonghiep",
      wordWrap: true
    })
  }
};
vO19.clock = PIXI.Sprite.fromImage("https://i.imgur.com/GvhDl7u.png");
vO19.clock.width = 100;
vO19.clock.height = 100;
vO19.clock.x = -50;
vO19.clock.y = -50;
vO19.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");
vO19.top10sv.height = 30;
vO19.top10sv.width = 110;
vO19.top10sv.x = -20;
vO19.top10sv.y = -4;
vO19.value_server = new PIXI.Text("WFC", vO19.fontStyle.name);
vO19.value_server.x = 25;
vO19.value_server.y = -18;
vO19.label_hs = new PIXI.Text("HS", vO19.fontStyle.amarillo);
vO19.value1_hs = new PIXI.Text("0", vO19.fontStyle.amarillo);
vO19.value2_hs = new PIXI.Text("0", vO19.fontStyle.amarillo1);
vO19.label_kill = new PIXI.Text("KL", vO19.fontStyle.morado);
vO19.value1_kill = new PIXI.Text("0", vO19.fontStyle.morado);
vO19.value2_kill = new PIXI.Text("0", vO19.fontStyle.morado1);
vO19.label_hs.x = 65;
vO19.label_hs.y = 106;
vO19.label_kill.x = 10;
vO19.label_kill.y = 106;
vO19.value1_hs.x = 65;
vO19.value1_hs.y = 122;
vO19.value1_kill.x = 10;
vO19.value1_kill.y = 122;
vO19.value2_hs.x = 65;
vO19.value2_hs.y = 139;
vO19.value2_kill.x = 10;
vO19.value2_kill.y = 139;
vO19.containerCountInfo = new PIXI.Container();
vO19.containerCountInfo.x = -45;
vO19.containerCountInfo.y = -52;
vO19.containerCountInfo.addChild(vO19.value_server);
vO19.containerCountInfo.addChild(vO19.label_hs);
vO19.containerCountInfo.addChild(vO19.value1_hs);
vO19.containerCountInfo.addChild(vO19.value2_hs);
vO19.containerCountInfo.addChild(vO19.label_kill);
vO19.containerCountInfo.addChild(vO19.value1_kill);
vO19.containerCountInfo.addChild(vO19.value2_kill);
vO19.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
vO19.borderurl = PIXI.Texture.fromImage("i.imgur.com/nwJih2e.png");
vO19.onclickServer = PIXI.Texture.fromImage(vO16.flag);
vO19.containerImgS = new PIXI.Sprite(vO19.imgServerbase);
vO19.containerImgS.anchor.set(0.5);
vO19.containerImgS.x = 0;
vO19.containerImgS.y = -10;
vO19.containerImgS.width = 25;
vO19.containerImgS.height = 20;
vO19.borderImg = new PIXI.Sprite(vO19.borderurl);
vO19.borderImg.anchor.set(0.5);
vO19.borderImg.x = -2;
vO19.borderImg.y = 78;
vO19.borderImg.width = 110;
vO19.borderImg.height = 60;
vO19.setServer = function (p650) {
  vO19.value_server.text = p650 || "WFC";
};
vO19.setCountGame = function (p651, p652, p653, p654) {
  vO19.value1_hs.text = p652;
  vO19.value2_hs.text = p654;
  vO19.value1_kill.text = p651;
  vO19.value2_kill.text = p653;
};
"use strict";
var v594 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p655) {
  return typeof p655;
} : function (p656) {
  if (p656 && typeof Symbol == "function" && p656.constructor === Symbol && p656 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p656;
  }
};
var v595;
(function () {
  try {
    console.log(function (p657, p658) {
      for (var vLN0 = 0; vLN0 < p658.length; vLN0 += 2) {
        p657 = p657.replaceAll(p658[vLN0], p658[vLN0 + 1]);
      }
      return p657;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e27) {}
})();
window.addEventListener("load", function () {
  function f110() {
    (function (p659, p660, p661) {
      function f111(p662, p663) {
        return (p662 === undefined ? "undefined" : v594(p662)) === p663;
      }
      function f112() {
        if (typeof p660.createElement != "function") {
          return p660.createElement(arguments[0]);
        } else if (v598) {
          return p660.createElementNS.call(p660, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p660.createElement.apply(p660, arguments);
        }
      }
      var vA = [];
      var vA17 = [];
      var vO20 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p664, p665) {
          var vThis38 = this;
          setTimeout(function () {
            p665(vThis38[p664]);
          }, 0);
        },
        addTest: function (p666, p667, p668) {
          vA17.push({
            name: p666,
            fn: p667,
            options: p668
          });
        },
        addAsyncTest: function (p669) {
          vA17.push({
            name: null,
            fn: p669
          });
        }
      };
      function f113() {}
      f113.prototype = vO20;
      f113 = new f113();
      var v596 = false;
      try {
        v596 = "WebSocket" in p659 && p659.WebSocket.CLOSING === 2;
      } catch (e28) {}
      f113.addTest("websockets", v596);
      var v597 = p660.documentElement;
      var v598 = v597.nodeName.toLowerCase() === "svg";
      f113.addTest("canvas", function () {
        var vF112 = f112("canvas");
        return !!vF112.getContext && !!vF112.getContext("2d");
      });
      f113.addTest("canvastext", function () {
        return f113.canvas !== false && typeof f112("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var v599;
        var v600;
        var v601;
        var v602;
        var v603;
        var v604;
        var v605;
        for (var v606 in vA17) {
          if (vA17.hasOwnProperty(v606)) {
            v599 = [];
            v600 = vA17[v606];
            if (v600.name && (v599.push(v600.name.toLowerCase()), v600.options && v600.options.aliases && v600.options.aliases.length)) {
              for (v601 = 0; v601 < v600.options.aliases.length; v601++) {
                v599.push(v600.options.aliases[v601].toLowerCase());
              }
            }
            v602 = f111(v600.fn, "function") ? v600.fn() : v600.fn;
            v603 = 0;
            for (; v603 < v599.length; v603++) {
              v604 = v599[v603];
              v605 = v604.split(".");
              if (v605.length === 1) {
                f113[v605[0]] = v602;
              } else {
                if (!!f113[v605[0]] && !(f113[v605[0]] instanceof Boolean)) {
                  f113[v605[0]] = new Boolean(f113[v605[0]]);
                }
                f113[v605[0]][v605[1]] = v602;
              }
              vA.push((v602 ? "" : "no-") + v605.join("-"));
            }
          }
        }
      })();
      (function (p670) {
        var v607 = v597.className;
        var v608 = f113._config.classPrefix || "";
        if (v598) {
          v607 = v607.baseVal;
        }
        if (f113._config.enableJSClass) {
          var v609 = new RegExp("(^|\\s)" + v608 + "no-js(\\s|$)");
          v607 = v607.replace(v609, "$1" + v608 + "js$2");
        }
        if (f113._config.enableClasses) {
          v607 += " " + v608 + p670.join(" " + v608);
          if (v598) {
            v597.className.baseVal = v607;
          } else {
            v597.className = v607;
          }
        }
      })(vA);
      delete vO20.addTest;
      delete vO20.addAsyncTest;
      for (var vLN087 = 0; vLN087 < f113._q.length; vLN087++) {
        f113._q[vLN087]();
      }
      p659.Modernizr = f113;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f114(p671, p672, p673) {
    const vA18 = [38, 38, 38, 120, 38, 25, 38];
    const vA19 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v610 = vA18[p672] - parseInt((p673 == 0.99 ? 1 : p673) * vA18[p672] / 1);
    const v611 = new PIXI.TextStyle({
      align: "center",
      fill: vA19[p672],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      dropShadow: true,
      dropShadowBlur: 6,
      fontFamily: "vuonghiep",
      fontWeight: "bold"
    });
    let v612 = "pwr_clock" + p672;
    if (!vO14[v612] && vA18[p672] === v610) {
      vO14[v612] = new PIXI.Text(v610, v611);
      vO14[v612].y = 61;
      p671.Tf[p672].addChild(vO14[v612]);
    }
    if (vO14[v612]) {
      vO14[v612].x = v610 >= 100 ? 11 : v610 >= 10 ? 18 : 26;
      vO14[v612].text = v610;
      if (v610 === 0) {
        delete vO14[v612];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f110()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f115() {
      return window.anApp = vUndefined28;
    }
    function f116(p674) {
      const v613 = p674 + "=";
      const v614 = document.cookie.split(";");
      for (let vLN097 = 0; vLN097 < v614.length; vLN097++) {
        let v615 = v614[vLN097];
        while (v615.charAt(0) === " ") {
          v615 = v615.substring(1);
        }
        if (v615.indexOf(v613) === 0) {
          return v615.substring(v613.length, v615.length);
        }
      }
      return "";
    }
    function f117(p675, p676, p677) {
      var v616 = new Date();
      v616.setTime(v616.getTime() + p677 * 86400000);
      var v617 = "expires=" + v616.toUTCString();
      document.cookie = p675 + "=" + p676 + "; " + v617 + "; path=/";
    }
    function f118(p678) {
      return window.I18N_MESSAGES[p678];
    }
    function f119(p679) {
      if (p679[v687]) {
        return p679[v687];
      } else if (p679.en) {
        return p679.en;
      } else {
        return p679.x;
      }
    }
    function f120(p680) {
      var v618 = (Math.floor(p680) % 60).toString();
      var v619 = (Math.floor(p680 / 60) % 60).toString();
      var v620 = (Math.floor(p680 / 3600) % 24).toString();
      var v621 = Math.floor(p680 / 86400).toString();
      var vF118 = f118("util.time.days");
      var vF1182 = f118("util.time.hours");
      var vF1183 = f118("util.time.min");
      var vF1184 = f118("util.time.sec");
      if (v621 > 0) {
        return v621 + " " + vF118 + " " + v620 + " " + vF1182 + " " + v619 + " " + vF1183 + " " + v618 + " " + vF1184;
      } else if (v620 > 0) {
        return v620 + " " + vF1182 + " " + v619 + " " + vF1183 + " " + v618 + " " + vF1184;
      } else if (v619 > 0) {
        return v619 + " " + vF1183 + " " + v618 + " " + vF1184;
      } else {
        return v618 + " " + vF1184;
      }
    }
    function f121(p681) {
      if (p681.includes("href")) {
        return p681.replaceAll("href", "target=\"_black\" href");
      } else {
        return p681;
      }
    }
    function f122(p682, p683, p684) {
      var v622 = document.createElement("script");
      var v623 = true;
      if (p683) {
        v622.id = p683;
      }
      v622.async = "async";
      v622.type = "text/javascript";
      v622.src = p682;
      if (p684) {
        v622.onload = v622.onreadystatechange = function () {
          v623 = false;
          try {
            p684();
          } catch (e29) {
            console.log(e29);
          }
          v622.onload = v622.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v622);
    }
    function f123(p685, p686) {
      var vP686 = p686;
      vP686.prototype = Object.create(p685.prototype);
      vP686.prototype.constructor = vP686;
      vP686.parent = p685;
      return vP686;
    }
    function f124(p687) {
      p687 %= v691;
      if (p687 < 0) {
        return p687 + v691;
      } else {
        return p687;
      }
    }
    function f125(p688, p689, p690) {
      return f126(p690, p688, p689);
    }
    function f126(p691, p692, p693) {
      if (p691 > p693) {
        return p693;
      } else if (p691 < p692) {
        return p692;
      } else if (Number.isFinite(p691)) {
        return p691;
      } else {
        return (p692 + p693) * 0.5;
      }
    }
    function f127(p694, p695, p696, p697) {
      if (p695 > p694) {
        return Math.min(p695, p694 + p696 * p697);
      } else {
        return Math.max(p695, p694 - p696 * p697);
      }
    }
    function f128(p698, p699, p700, p701, p702) {
      return p699 + (p698 - p699) * Math.pow(1 - p701, p700 / p702);
    }
    function f129(p703, p704, p705) {
      return p703 * (1 - p705) + p704 * p705;
    }
    function f130(p706, p707, p708, p709) {
      var vP708 = p708;
      var vP707 = p707;
      var v624 = p707 + p709;
      if (p706 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v625 = p706.length >>> 0;
      var v626 = vP708 >> 0;
      var v627 = v626 < 0 ? Math.max(v625 + v626, 0) : Math.min(v626, v625);
      var v628 = vP707 >> 0;
      var v629 = v628 < 0 ? Math.max(v625 + v628, 0) : Math.min(v628, v625);
      var v630 = v624 === undefined ? v625 : v624 >> 0;
      var v631 = v630 < 0 ? Math.max(v625 + v630, 0) : Math.min(v630, v625);
      var v632 = Math.min(v631 - v629, v625 - v627);
      var vLN15 = 1;
      for (v629 < v627 && v627 < v629 + v632 && (vLN15 = -1, v629 += v632 - 1, v627 += v632 - 1); v632 > 0;) {
        if (v629 in p706) {
          p706[v627] = p706[v629];
        } else {
          delete p706[v627];
        }
        v629 += vLN15;
        v627 += vLN15;
        v632--;
      }
      return p706;
    }
    function f131(p710) {
      return p710.getContext("2d");
    }
    function f132(p711) {
      if (p711.parent != null) {
        p711.parent.removeChild(p711);
      }
    }
    function f133(p712) {
      return p712[parseInt(Math.random() * p712.length)];
    }
    function f134() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f135(p713, p714, p715) {
      var v633 = (1 - Math.abs(p715 * 2 - 1)) * p714;
      var v634 = v633 * (1 - Math.abs(p713 / 60 % 2 - 1));
      var v635 = p715 - v633 / 2;
      if (p713 >= 0 && p713 < 60) {
        return [v635 + v633, v635 + v634, v635 + 0];
      } else if (p713 >= 60 && p713 < 120) {
        return [v635 + v634, v635 + v633, v635 + 0];
      } else if (p713 >= 120 && p713 < 180) {
        return [v635 + 0, v635 + v633, v635 + v634];
      } else if (p713 >= 180 && p713 < 240) {
        return [v635 + 0, v635 + v634, v635 + v633];
      } else if (p713 >= 240 && p713 < 300) {
        return [v635 + v634, v635 + 0, v635 + v633];
      } else {
        return [v635 + v633, v635 + 0, v635 + v634];
      }
    }
    function f136() {
      function f137() {
        let v636 = vO16.adblock ? 1 : 5;
        $("#adbl-1").text(f118("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f118("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f118("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f118("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f118("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG92).fadeIn(500);
        var vV636 = v636;
        for (var vLN098 = 0; vLN098 < v636; vLN098++) {
          setTimeout(function () {
            vV636--;
            $("#adbl-4").text(f118("index.game.antiadblocker.msg4").replace("{0}", vV636));
            if (vV636 === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e30) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN098 + 1) * 1000);
        }
      }
      var v637 = false;
      function f138() {}
      var vO21 = {};
      var vLSJDHnkHtYwyXyVgG92 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG92).fadeOut(500);
        f138(false);
      });
      vO21.a = function (p716) {
        f138 = p716;
        if (!v637) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (p717) {
                  console.log("aipC");
                  f138(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG92).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e31) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v637 = true;
          } catch (e32) {}
        }
      };
      vO21.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e33) {}
          f137();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e34) {}
          f137();
        }
      };
      return vO21;
    }
    function f139(p718, p719) {
      var v$112 = $("#" + p718);
      var vP719 = p719;
      var vO22 = {};
      var v638 = false;
      vO22.a = function () {
        if (!v638) {
          v$112.empty();
          v$112.append("<div id='" + vP719 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e35) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP719);
            });
            v638 = true;
          } catch (e36) {}
        }
      };
      vO22.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e37) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP719);
          });
        } catch (e38) {}
      };
      return vO22;
    }
    function f140() {
      function f141(p720) {
        var v639 = p720 + Math.floor(Math.random() * 65535) * 37;
        f117(vF89.d, v639, 30);
      }
      function f142() {
        return parseInt(f116(vF89.d)) % 37;
      }
      return function () {
        var vF142 = f142();
        console.log("init1 pSC: " + vF142);
        if (!(vF142 >= 0) || !(vF142 < v1096.e)) {
          vF142 = Math.max(0, v1096.e - 2);
          console.log("init2 pSC: " + vF142);
        }
        var vO23 = {};
        vUndefined28 = vO23;
        vO23.f = v1096;
        vO23.g = false;
        vO23.i = Date.now();
        vO23.j = 0;
        vO23.k = 0;
        vO23.l = null;
        vO23.m = vUndefined27;
        vO23.n = v687;
        vO23.o = null;
        vO23.p = null;
        vO23.q = null;
        vO23.r = null;
        vO23.s = null;
        vO23.t = null;
        vO23.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p721) {
              if (p721.coords !== undefined) {
                var v640 = p721.coords;
                if (v640.latitude !== undefined && v640.longitude !== undefined) {
                  vO23.l = p721;
                }
              }
            }, function (p722) {});
          }
        } catch (e39) {}
        vO23.v = function () {
          vO23.p = new vF84();
          vO23.q = new vF119();
          vO23.r = new vF86();
          vO23.s = new vF120();
          vO23.t = new vF114();
          vO23.u = new vF122();
          vO23.o = new f143();
          vO23.o.z = new vF107(vO23.o);
          vO23.a();
        };
        vO23.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e40) {}
          vO23.o.A = function () {
            vO23.o.B();
          };
          vO23.o.C = function () {
            var v641 = vO23.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v641);
            } catch (e41) {}
            vO23.r.G(vF86.AudioState.H);
            vO23.s.I(vO23.s.H.J());
          };
          vO23.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e42) {}
            if ($("body").height() >= 430) {
              vO23.f.K.c();
            }
            vO23.p.L();
            (function () {
              var v642 = Math.floor(vO23.o.N.M);
              var v643 = vO23.o.O;
              if (vO23.u.P()) {
                vO23.u.Q(function () {
                  vO23.R(v642, v643);
                });
              } else {
                vO23.R(v642, v643);
              }
            })();
          };
          vO23.o.S = function (p723) {
            p723(vO23.s.H.T(), vO23.s.H.U());
          };
          vO23.u.V(function () {
            if (vO23.p.W) {
              vO23.r.G(vF86.AudioState.F);
              vO23.s.I(vO23.s.F);
            }
            if (vO23.u.P()) {
              try {
                var v644 = vO23.u.X();
                ga("set", "userId", v644);
              } catch (e43) {}
            }
            if (vO23.Y() && vO23.u.P() && !vO23.u.Z()) {
              vO23.$(false, false);
              vO23.s.aa._(new vF158());
            } else {
              vO23.ba(true);
            }
          });
          vO23.p.ca(function () {
            vO23.r.G(vF86.AudioState.F);
            vO23.s.I(vO23.s.F);
          });
          vO23.q.a(function () {
            vO23.o.a();
            vO23.r.a();
            vO23.s.a();
            vO23.t.a();
            vO23.p.a();
            vO23.u.a();
            if (vO23.Y() && !vO23.Z()) {
              vO23.s.aa._(new vF158());
            } else {
              vO23.ba(true);
            }
          });
        };
        vO23.da = function (p724) {
          if (vO23.u.P()) {
            var v645 = vO23.u.ea();
            $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + v645 + "/consent/change?value=" + encodeURI(p724), function (p725) {});
          }
        };
        vO23.fa = function (p726) {
          var v646 = vO23.u.ea();
          var v647 = vO23.s.F.D();
          var v648 = vO23.s.F.ga();
          var v649 = vO23.t.ha(vF116.ia);
          var v650 = vO23.t.ha(vF116.ja);
          var v651 = vO23.t.ha(vF116.ka);
          var v652 = vO23.t.ha(vF116.la);
          var v653 = vO23.t.ha(vF116.ma);
          var vLN099 = 0;
          if (vO23.l != null) {
            var v654 = vO23.l.coords.latitude;
            var v655 = vO23.l.coords.longitude;
            vLN099 = Math.max(0, Math.min(32767, (v654 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v655 + 180) / 360 * 65536)) << 16;
          }
          vO13.testSkinCustom(v649);
          let v656 = "x" + (v649 > 9999 ? "0000" : v649.toString().padStart(4, 0)) + (v653 > 999 ? "000" : v653.toString().padStart(3, 0)) + (v650 > 999 ? "000" : v650.toString().padStart(3, 0)) + (v651 > 999 ? "000" : v651.toString().padStart(3, 0));
          v648 = (v648.length >= 32 ? v648.substr(0, 16) : v648.substr(0, 16).padEnd(16)) + v656;
          v648 = v648.trim();
          console.log(v648);
          var v657 = vLSHttpsgatewaywormatei + "/pub/wuid/" + v646 + "/start?gameMode=" + encodeURI(v647) + "&gh=" + vLN099 + "&nickname=" + encodeURI(v648) + "&skinId=" + vO13.validInput(v649) + "&eyesId=" + encodeURI(v650) + "&mouthId=" + encodeURI(v651) + "&glassesId=" + encodeURI(v652) + "&hatId=" + encodeURI(v653);
          console.log("urlRequest: " + v657);
          $.get(v657, function (p727) {
            var v658 = p727.server_url;
            p726(v658);
          });
        };
        vO23.na = function () {
          vF142++;
          console.log("start pSC: " + vF142);
          if (!vO23.f.oa && vF142 >= vO23.f.e) {
            vO23.s.I(vO23.s.pa);
            vO23.r.G(vF86.AudioState.qa);
            vO23.f.ra.b();
          } else {
            f141(vF142);
            vO23.sa();
          }
        };
        vO23.sa = function (p728) {
          if (vO23.o.ta()) {
            vO23.s.I(vO23.s.ua);
            vO23.r.G(vF86.AudioState.ua);
            var v659 = vO23.s.F.D();
            f117(vF89.va, v659, 30);
            console.log("save gm: " + v659);
            var v660 = vO23.s.xa.wa();
            f117(vF89.ya, v660, 30);
            console.log("save sPN: " + v660);
            if (vO23.u.P()) {
              vO23.fa(function (p729) {
                vO23.o.za(window.server_url || p729, vO23.u.ea());
              });
            } else {
              var v661 = vO23.s.F.ga();
              f117(vF89.Aa, v661, 30);
              var v662 = vO23.t.ha(vF116.ia);
              f117(vF89.Ba, v662, 30);
              vO23.fa(function (p730) {
                vO23.o.Ca(p730, v661, v662);
              });
            }
          }
        };
        vO23.R = function (p731, p732) {
          var v663 = vO23.s.F.ga();
          vO23.s.H.Da(p731, p732, v663);
          vO23.r.G(vF86.AudioState.Ea);
          vO23.s.I(vO23.s.H.Fa());
        };
        vO23.Ga = function () {
          if (!vO23.Ha()) {
            return vO23.t.Ia();
          }
          var vParseInt2 = parseInt(f116(vF89.Ba));
          if (vParseInt2 != null && vO23.t.Ja(vParseInt2, vF116.ia)) {
            return vParseInt2;
          } else {
            return vO23.t.Ia();
          }
        };
        vO23.Ka = function (p733) {
          f117(vF89.La, !!p733, 1800);
        };
        vO23.Ha = function () {
          return f116(vF89.La) === "true";
        };
        vO23.ba = function (p734) {
          if (p734 != vO23.g) {
            vO23.g = p734;
            var v664 = v664 || {};
            v664.consented = p734;
            v664.gdprConsent = p734;
            vO23.f.Ma.a();
            vO23.f.K.a();
            vO23.f.ra.a(function (p735) {
              if (p735) {
                f141(vF142 = 0);
              }
              vO23.sa();
            });
          }
        };
        vO23.$ = function (p736, p737) {
          f117(vF89.Na, p736 ? "true" : "false");
          if (p737) {
            vO23.da(p736);
          }
          vO23.ba(p736);
        };
        vO23.Z = function () {
          switch (f116(vF89.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO23.Y = function () {
          try {
            return !!window.isIPInEEA || vO23.l != null && !!vF90.Oa(vO23.l.coords.latitude, vO23.l.coords.longitude);
          } catch (e44) {
            return true;
          }
        };
        vO23.Pa = function () {
          vO23.j = Date.now();
          vO23.k = vO23.j - vO23.i;
          vO23.o.Qa(vO23.j, vO23.k);
          vO23.s.Qa(vO23.j, vO23.k);
          vO23.i = vO23.j;
        };
        vO23.Ra = function () {
          vO23.s.Ra();
        };
        return vO23;
      }();
    }
    function f143() {
      var vO24 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF99(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      vO24.fb.ub = 500;
      vO24.N = new vF127(vO24.fb);
      vO24.a = function () {
        vO24.N.vb(f115().s.H.wb);
        setInterval(function () {
          vO24.S(function (p738, p739) {
            vO24.xb(p738, p739);
          });
        }, 10);
      };
      vO24.yb = function (p740, p741, p742, p743) {
        vO24.lb = p740;
        vO24.mb = p741;
        vO24.nb = p742;
        vO24.ob = p743;
        vO24.zb();
      };
      vO24.Ab = function (p744) {
        vO24.kb = p744;
        vO24.zb();
      };
      vO24.zb = function () {
        vO24.pb = vO24.lb - vO24.kb;
        vO24.qb = vO24.mb + vO24.kb;
        vO24.rb = vO24.nb - vO24.kb;
        vO24.sb = vO24.ob + vO24.kb;
      };
      vO24.Qa = function (p745, p746) {
        vO24.$a += p746;
        vO24.Za -= vO24.Ya * 0.2 * p746;
        vO24.z.Bb();
        if (vO24.db != null && (vO24.cb === 2 || vO24.cb === 3)) {
          vO24.Cb(p745, p746);
          vO24.jb = 4 + vO24.ib * vO24.N.Db;
        }
        var v665 = 1000 / Math.max(1, p746);
        var vLN0100 = 0;
        var vLN0101 = 0;
        for (; vLN0101 < vO24.Xa.length - 1; vLN0101++) {
          vLN0100 = vLN0100 + vO24.Xa[vLN0101];
          vO24.Xa[vLN0101] = vO24.Xa[vLN0101 + 1];
        }
        vO24.Xa[vO24.Xa.length - 1] = v665;
        vO24.Wa = (vLN0100 + v665) / vO24.Xa.length;
      };
      vO24.Eb = function (p747, p748) {
        return p747 > vO24.pb && p747 < vO24.qb && p748 > vO24.rb && p748 < vO24.sb;
      };
      vO24.Cb = function (p749, p750) {
        var v666 = vO24.$a + vO24.Za;
        var v667 = (v666 - vO24._a) / (vO24.ab - vO24._a);
        vO24.N.Fb(p749, p750);
        vO24.N.Gb(p749, p750, v667, vO24.Eb);
        var vLN0102 = 0;
        var v668;
        for (v668 in vO24.hb) {
          var v669 = vO24.hb[v668];
          v669.Fb(p749, p750);
          v669.Gb(p749, p750, v667, vO24.Eb);
          if (v669.Hb && v669.Db > vLN0102) {
            vLN0102 = v669.Db;
          }
          if (!v669.Ib && (!!(v669.Jb < 0.005) || !v669.Hb)) {
            v669.Kb();
            delete vO24.hb[v669.Mb.Lb];
          }
        }
        vO24.Ab(vLN0102 * 3);
        var v670;
        for (v670 in vO24.gb) {
          var v671 = vO24.gb[v670];
          v671.Fb(p749, p750);
          v671.Gb(p749, p750, vO24.Eb);
          if (v671.Nb && (v671.Jb < 0.005 || !vO24.Eb(v671.Ob, v671.Pb))) {
            v671.Kb();
            delete vO24.gb[v671.Mb.Lb];
          }
        }
      };
      vO24.Qb = function (p751, p752) {
        if (vO24.cb === 1) {
          vO24.cb = 2;
          vO24.C();
        }
        var v672 = f115().j;
        vO24.bb = p751;
        if (p751 === 0) {
          vO24._a = v672 - 95;
          vO24.ab = v672;
          vO24.$a = vO24._a;
          vO24.Za = 0;
        } else {
          vO24._a = vO24.ab;
          vO24.ab = vO24.ab + p752;
        }
        var v673 = vO24.$a + vO24.Za;
        vO24.Ya = (v673 - vO24._a) / (vO24.ab - vO24._a);
      };
      vO24.Rb = function () {
        if (vO24.cb === 1 || vO24.cb === 2) {
          vO24.cb = 3;
          var v674 = vO24.db;
          setTimeout(function () {
            if (vO24.cb === 3) {
              vO24.cb = 0;
            }
            if (v674 != null && v674 === vO24.db) {
              vO24.db.close();
              vO24.db = null;
            }
          }, 5000);
          vO24.B();
        }
      };
      vO24.ta = function () {
        return vO24.cb !== 2 && (vO24.cb = 1, vO24.z.Sb(), vO24.gb = {}, vO24.hb = {}, vO24.N.Tb(), vO24.db != null && (vO24.db.close(), vO24.db = null), true);
      };
      vO24.Ub = function () {
        vO24.db = null;
        vO24.z.Sb();
        if (vO24.cb !== 3) {
          vO24.A();
        }
        vO24.cb = 0;
      };
      vO24.za = function (p753, p754) {
        vO24.Vb(p753, function () {
          var v675 = Math.min(2048, p754.length);
          var v676 = new ArrayBuffer(6 + v675 * 2);
          var v677 = new DataView(v676);
          var vLN0103 = 0;
          v677.setInt8(vLN0103, 129);
          vLN0103 = vLN0103 + 1;
          v677.setInt16(vLN0103, 2800);
          vLN0103 = vLN0103 + 2;
          v677.setInt8(vLN0103, 1);
          vLN0103 = vLN0103 + 1;
          v677.setInt16(vLN0103, v675);
          vLN0103 = vLN0103 + 2;
          var vLN0104 = 0;
          for (; vLN0104 < v675; vLN0104++) {
            v677.setInt16(vLN0103, p754.charCodeAt(vLN0104));
            vLN0103 = vLN0103 + 2;
          }
          vO24.Wb(v676);
        });
      };
      vO24.Ca = function (p755, p756, p757) {
        vO24.Vb(p755, function () {
          var v678 = Math.min(32, p756.length);
          var v679 = new ArrayBuffer(7 + v678 * 2);
          var v680 = new DataView(v679);
          var vLN0105 = 0;
          v680.setInt8(vLN0105, 129);
          vLN0105 = vLN0105 + 1;
          v680.setInt16(vLN0105, 2800);
          vLN0105 = vLN0105 + 2;
          v680.setInt8(vLN0105, 0);
          vLN0105 = vLN0105 + 1;
          v680.setInt16(vLN0105, p757);
          vLN0105 = vLN0105 + 2;
          v680.setInt8(vLN0105, v678);
          vLN0105++;
          var vLN0106 = 0;
          for (; vLN0106 < v678; vLN0106++) {
            v680.setInt16(vLN0105, p756.charCodeAt(vLN0106));
            vLN0105 = vLN0105 + 2;
          }
          vO24.Wb(v679);
        });
      };
      vO24.Wb = function (p758) {
        try {
          if (vO24.db != null && vO24.db.readyState === WebSocket.OPEN) {
            vO24.db.send(p758);
          }
        } catch (e45) {
          console.log("Socket send error: " + e45);
          vO24.Ub();
        }
      };
      vO24.xb = function (p759, p760) {
        var v681 = p760 ? 128 : 0;
        var v682 = f124(p759) / v691 * 128 & 127;
        var v683 = (v681 | v682) & 255;
        if (vO24.eb !== v683) {
          var v684 = new ArrayBuffer(1);
          new DataView(v684).setInt8(0, v683);
          vO24.Wb(v684);
          vO24.eb = v683;
        }
      };
      vO24.Vb = function (p761, p762) {
        let vVF60 = vF60(!vO16.mobile);
        var v685 = vO24.db = new WebSocket(p761);
        v685.binaryType = "arraybuffer";
        window.onOpen = v685.onopen = function () {
          f215("open");
          if (vO24.db === v685) {
            console.log("Socket opened");
            p762();
          }
          v11 = true;
        };
        window.onclose = v685.onclose = function () {
          f215("closed");
          vO13.aload = false;
          if (vO24.db === v685) {
            console.log("Socket closed");
            vO24.Ub();
          }
          v11 = false;
          if (vVF60) {
            vVF60.destroy();
          }
        };
        v685.onerror = function (p763) {
          if (vO24.db === v685) {
            console.log("Socket error");
            vO24.Ub();
          }
          v11 = false;
          if (vVF60) {
            vVF60.destroy();
          }
        };
        v685.onmessage = function (p764) {
          if (vO24.db === v685) {
            vO24.z.Xb(p764.data);
          }
        };
      };
      return vO24;
    }
    var vLSimageslinelogoxmas202 = "/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma2 = "/images/guest-avatar-xmas2022.png";
    var v686 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vLSHttpsgatewaywormatei = "https://gateway.wormate.io";
    var vLSHttpsresourceswormat = "https://resources.wormate.io";
    var v687 = window.I18N_LANG;
    v687 ||= "en";
    var vUndefined27 = undefined;
    switch (v687) {
      case "uk":
        vUndefined27 = "uk_UA";
        break;
      case "de":
        vUndefined27 = "de_DE";
        break;
      case "fr":
        vUndefined27 = "fr_FR";
        break;
      case "ru":
        vUndefined27 = "ru_RU";
        break;
      case "es":
        vUndefined27 = "es_ES";
        break;
      default:
        vUndefined27 = "en_US";
    }
    moment.locale(vUndefined27);
    var v688 = false;
    var vUndefined28 = undefined;
    var vF81 = function () {
      var vO25 = {
        Yb: eval("PIXI")
      };
      var v689 = vO25.Yb.BLEND_MODES;
      var v690 = vO25.Yb.WRAP_MODES;
      return {
        Zb: vO25.Yb.Container,
        $b: vO25.Yb.BaseTexture,
        _b: vO25.Yb.Texture,
        ac: vO25.Yb.Renderer,
        bc: vO25.Yb.Graphics,
        cc: vO25.Yb.Shader,
        dc: vO25.Yb.Rectangle,
        ec: vO25.Yb.Sprite,
        fc: vO25.Yb.Text,
        gc: vO25.Yb.Geometry,
        hc: vO25.Yb.Mesh,
        ic: {
          jc: v689.ADD
        },
        kc: {
          lc: v690.REPEAT
        }
      };
    }();
    var v691 = Math.PI * 2;
    (function () {
      var vLSZ2V02 = "Z2V0";
      var vLS7 = "=";
      var v692 = vLSZ2V02 + "SW50";
      var v693 = vLSZ2V02 + "RmxvYXQ";
      var vA20 = [atob(v692 + "OA=="), atob(v692 + "MTY" + vLS7), atob(v692 + "MzI" + vLS7), atob(v693 + "zMg=="), atob(v693 + "2NA==")];
      DataView.prototype.mc = function (p765) {
        return this[vA20[0]](p765);
      };
      DataView.prototype.nc = function (p766) {
        return this[vA20[1]](p766);
      };
      DataView.prototype.oc = function (p767) {
        return this[vA20[2]](p767);
      };
      DataView.prototype.pc = function (p768) {
        return this[vA20[3]](p768);
      };
      DataView.prototype.qc = function (p769) {
        return this[vA20[4]](p769);
      };
    })();
    var vF83 = function () {
      function f144(p770) {
        this.rc = p770;
        this.sc = false;
        this.tc = 1;
      }
      f144.VELOCITY_TYPE = 0;
      f144.FLEXIBLE_TYPE = 1;
      f144.MAGNETIC_TYPE = 2;
      f144.ZOOM_TYPE = 6;
      f144.X2_TYPE = 3;
      f144.X5_TYPE = 4;
      f144.X10_TYPE = 5;
      return f144;
    }();
    var vF84 = function () {
      function f145() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF85.yc();
      }
      function f146(p771, p772) {
        for (var v694 in p771) {
          if (p771.hasOwnProperty(v694)) {
            p772(v694, p771[v694]);
          }
        }
      }
      f145.prototype.a = function () {
        this.L();
      };
      f145.prototype.W = function () {
        return this.wc != null;
      };
      f145.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f145.prototype.Ac = function () {
        return this.wc;
      };
      f145.prototype.L = function () {
        var vThis39 = this;
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/revision.json", function (p773) {
          if (p773 > vThis39.zc()) {
            vThis39.Bc();
          }
        });
      };
      f145.prototype.Bc = function () {
        var vThis40 = this;
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/registry.json", function (p774) {
          if (p774.revision > vThis40.zc()) {
            vThis40.Cc(p774);
          }
        });
      };
      f145.prototype.ca = function (p775) {
        this.uc.push(p775);
      };
      f145.prototype.Dc = function () {
        return this.xc;
      };
      f145.prototype.Ec = function () {
        for (var vLN0107 = 0; vLN0107 < this.uc.length; vLN0107++) {
          this.uc[vLN0107]();
        }
      };
      f145.prototype.Fc = function (p776, p777) {
        if (!(p776.revision <= this.zc())) {
          var vP777 = p777;
          f146(this.vc, function (p778, p779) {
            var v695 = vP777[p778];
            if (v695 == null || p779.Gc !== v695.Gc) {
              print("disposing prev texture: " + p778 + " at " + p779.Gc);
              p779.Hc.destroy();
            }
          });
          this.vc = vP777;
          this.wc = p776;
          this.xc = vF85.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f145.prototype.Cc = function (p780) {
        var vO26 = {};
        (function (p781, p782) {
          for (var v696 in p781) {
            if (p781.hasOwnProperty(v696)) {
              p782(v696, p781[v696]);
            }
          }
        })(p780.textureDict, function (p783, p784) {
          var v697 = vLSHttpswormatefriendsg + p784.relativePath;
          if (!p784.custom) {
            v697 = vLSHttpsresourceswormat + p784.relativePath;
          }
          try {
            vO26[p783] = new vF98(v697, vF81.$b.from(p784.file || v697));
          } catch (e46) {
            console.log(v697);
          }
        });
        this.Fc(p780, vO26);
      };
      return f145;
    }();
    var vF85 = function () {
      function f147() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function f148(p785, p786) {
        for (var v698 in p785) {
          if (p785.hasOwnProperty(v698)) {
            p786(v698, p785[v698]);
          }
        }
      }
      f147.yc = function () {
        var v699 = new vF85();
        v699.Jc = {};
        v699.Kc = {
          Zc: null,
          $c: null
        };
        v699.Lc = {};
        v699.Mc = {
          Zc: null
        };
        v699.Nc = {};
        v699.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v699.Pc = {};
        v699.Qc = {
          ad: {},
          bd: v699.Oc,
          cd: v699.Kc
        };
        v699.Rc = {};
        v699.Sc = {
          Zc: []
        };
        v699.Tc = {};
        v699.Uc = {
          Zc: []
        };
        v699.Vc = {};
        v699.Wc = {
          Zc: []
        };
        v699.Xc = {};
        v699.Yc = {
          Zc: []
        };
        return v699;
      };
      f147.Ic = function (p787, p788) {
        var v700 = new vF85();
        var vO27 = {};
        f148(p787.colorDict, function (p789, p790) {
          vO27[p789] = p790;
        });
        var vO28 = {};
        f148(p787.regionDict, function (p791, p792) {
          vO28[p791] = new vF117(p788[p792.texture].Hc, p792.x, p792.y, p792.w, p792.h, p792.px, p792.py, p792.pw, p792.ph);
        });
        v700.Nc = {};
        for (var vLN0108 = 0; vLN0108 < p787.skinArrayDict.length; vLN0108++) {
          var v701 = p787.skinArrayDict[vLN0108];
          v700.Nc[v701.id] = new vF85.WormSkinData("#" + vO27[v701.prime], v701.base.map(function (p793) {
            return vO28[p793];
          }), v701.glow.map(function (p794) {
            return vO28[p794];
          }));
        }
        var v702 = p787.skinUnknown;
        v700.Oc = new vF85.WormSkinData("#" + vO27[v702.prime], v702.base.map(function (p795) {
          return vO28[p795];
        }), v702.glow.map(function (p796) {
          return vO28[p796];
        }));
        v700.Rc = {};
        f148(p787.eyesDict, function (p797, p798) {
          p797 = parseInt(p797);
          v700.Rc[p797] = new vF85.WearSkinData(p798.base.map(function (p799) {
            return vO28[p799.region];
          }));
        });
        v700.Sc = new vF85.WearSkinData(p787.eyesUnknown.base.map(function (p800) {
          return vO28[p800.region];
        }));
        v700.Tc = {};
        f148(p787.mouthDict, function (p801, p802) {
          p801 = parseInt(p801);
          v700.Tc[p801] = new vF85.WearSkinData(p802.base.map(function (p803) {
            return vO28[p803.region];
          }));
        });
        v700.Uc = new vF85.WearSkinData(p787.mouthUnknown.base.map(function (p804) {
          return vO28[p804.region];
        }));
        v700.Vc = {};
        f148(p787.glassesDict, function (p805, p806) {
          p805 = parseInt(p805);
          v700.Vc[p805] = new vF85.WearSkinData(p806.base.map(function (p807) {
            return vO28[p807.region];
          }));
        });
        v700.Wc = new vF85.WearSkinData(p787.glassesUnknown.base.map(function (p808) {
          return vO28[p808.region];
        }));
        v700.Xc = {};
        f148(p787.hatDict, function (p809, p810) {
          p809 = parseInt(p809);
          v700.Xc[p809] = new vF85.WearSkinData(p810.base.map(function (p811) {
            return vO28[p811.region];
          }));
        });
        v700.Yc = new vF85.WearSkinData(p787.hatUnknown.base.map(function (p812) {
          return vO28[p812.region];
        }));
        v700.Jc = {};
        f148(p787.portionDict, function (p813, p814) {
          p813 = parseInt(p813);
          v700.Jc[p813] = new vF85.PortionSkinData(vO28[p814.base], vO28[p814.glow]);
        });
        var v703 = p787.portionUnknown;
        v700.Kc = new vF85.PortionSkinData(vO28[v703.base], vO28[v703.glow]);
        v700.Lc = {};
        f148(p787.abilityDict, function (p815, p816) {
          p815 = parseInt(p815);
          v700.Lc[p815] = new vF85.AbilitySkinData(vO28[p816.base]);
        });
        var v704 = p787.abilityUnknown;
        v700.Mc = new vF85.AbilitySkinData(vO28[v704.base]);
        v700.Pc = {};
        f148(p787.teamDict, function (p817, p818) {
          p817 = parseInt(p817);
          v700.Pc[p817] = new vF85.TeamSkinData(p818.name, new vF85.WormSkinData("#" + vO27[p818.skin.prime], [], p818.skin.glow.map(function (p819) {
            return vO28[p819];
          })), new vF85.PortionSkinData([], vO28[p818.portion.glow]));
        });
        v700.Qc = new vF85.TeamSkinData({}, v700.Oc, v700.Kc);
        return v700;
      };
      f147.prototype.dd = function (p820) {
        var v705 = this.Nc[p820];
        return v705 || this.Oc;
      };
      f147.prototype.ed = function (p821) {
        var v706 = this.Pc[p821];
        return v706 || this.Qc;
      };
      f147.prototype.fd = function (p822) {
        var v707 = this.Rc[p822];
        return v707 || this.Sc;
      };
      f147.prototype.gd = function (p823) {
        var v708 = this.Tc[p823];
        return v708 || this.Uc;
      };
      f147.prototype.hd = function (p824) {
        var v709 = this.Vc[p824];
        return v709 || this.Wc;
      };
      f147.prototype.jd = function (p825) {
        var v710 = this.Xc[p825];
        return v710 || this.Yc;
      };
      f147.prototype.kd = function (p826) {
        var v711 = this.Jc[p826];
        return v711 || this.Kc;
      };
      f147.prototype.ld = function (p827) {
        var v712 = this.Lc[p827];
        return v712 || this.Mc;
      };
      f147.TeamSkinData = function () {
        function f149(p828, p829, p830) {
          this.ad = p828;
          this.bd = p829;
          this.cd = p830;
        }
        return f149;
      }();
      f147.WormSkinData = function () {
        function f150(p831, p832, p833) {
          this._c = p831;
          this.Zc = p832;
          this.$c = p833;
        }
        return f150;
      }();
      f147.WearSkinData = function () {
        function f151(p834) {
          this.Zc = p834;
        }
        return f151;
      }();
      f147.PortionSkinData = function () {
        function f152(p835, p836) {
          this.Zc = p835;
          this.$c = p836;
        }
        return f152;
      }();
      f147.AbilitySkinData = function () {
        function f153(p837) {
          this.Zc = p837;
        }
        return f153;
      }();
      return f147;
    }();
    var vF86 = function () {
      function f154() {
        this.md = vF86.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f154.prototype.a = function () {};
      f154.prototype.rd = function (p838) {
        this.od = p838;
      };
      f154.prototype.G = function (p839) {
        this.md = p839;
        this.sd();
      };
      f154.prototype.td = function (p840) {
        this.nd = p840;
        this.sd();
      };
      f154.prototype.sd = function () {};
      f154.prototype.ud = function (p841, p842) {
        if (!f115().p.W) {
          return null;
        }
        var v713 = p841[p842];
        if (v713 == null || v713.length == 0) {
          return null;
        } else {
          return v713[Math.floor(Math.random() * v713.length)].cloneNode();
        }
      };
      f154.prototype.vd = function (p843, p844, p845) {
        if (this.od && !(p845 <= 0)) {
          var v714 = this.ud(p843, p844);
          if (v714 != null) {
            v714.volume = Math.min(1, p845);
            v714.play();
          }
        }
      };
      f154.prototype.wd = function (p846, p847) {
        if (this.md.xd) {
          this.vd(app.q.yd, p846, p847);
        }
      };
      f154.prototype.zd = function (p848, p849) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, p848, p849);
        }
      };
      f154.prototype.Cd = function () {};
      f154.prototype.Dd = function () {};
      f154.prototype.Ed = function () {};
      f154.prototype.Fd = function () {};
      f154.prototype.Gd = function () {};
      f154.prototype.Hd = function () {};
      f154.prototype.Id = function (p850, p851, p852) {};
      f154.prototype.Jd = function (p853) {};
      f154.prototype.Kd = function (p854) {};
      f154.prototype.Ld = function (p855) {};
      f154.prototype.Md = function (p856) {};
      f154.prototype.Nd = function (p857) {};
      f154.prototype.Od = function (p858) {};
      f154.prototype.Pd = function (p859) {};
      f154.prototype.Qd = function (p860) {};
      f154.prototype.Rd = function (p861) {};
      f154.prototype.Sd = function (p862) {};
      f154.prototype.Td = function (p863) {};
      f154.prototype.Ud = function (p864) {};
      f154.prototype.Vd = function (p865) {};
      f154.prototype.Wd = function (p866) {};
      f154.prototype.Xd = function (p867, p868) {};
      f154.prototype.Yd = function (p869) {};
      f154.prototype.Zd = function (p870, p871, p872) {};
      (function () {
        function f155(p873) {
          this.$d = new vF87(p873, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f155.prototype.be = function (p874) {
          if (p874) {
            this.b();
          } else {
            this.ce();
          }
        };
        f155.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f155.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f156(p875) {
          this.ge = p875.map(function (p876) {
            return new vF87(p876, 0.4);
          });
          f157(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f157(p877, p878, p879) {
          for (var v715 = p879 - 1; v715 > p878; v715--) {
            var v716 = p878 + Math.floor(Math.random() * (v715 - p878 + 1));
            var v717 = p877[v715];
            p877[v715] = p877[v716];
            p877[v716] = v717;
          }
        }
        f156.prototype.be = function (p880) {
          if (p880) {
            this.b();
          } else {
            this.ce();
          }
        };
        f156.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f156.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f156.prototype.ke = function (p881) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(p881, 100);
            var v718 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis41 = this;
            var vSetTimeout3 = setTimeout(function () {
              if (vThis41.ae && vSetTimeout3 == vThis41.ie) {
                vThis41.he.fe(vThis41.je, 100);
                vThis41.he = vThis41.le();
                vThis41.he._d.currentTime = 0;
                vThis41.ke(vThis41.je);
              }
            }, v718);
            this.ie = vSetTimeout3;
          }
        };
        f156.prototype.le = function () {
          var v719 = this.ge[0];
          var v720 = Math.max(1, this.ge.length / 2);
          f157(this.ge, v720, this.ge.length);
          this.ge.push(this.ge.shift());
          return v719;
        };
      })();
      var vF87 = function () {
        function f158(p882, p883) {
          this._d = p882;
          this.me = p883;
          this.de = 0;
          p882.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f158.prototype.ee = function (p884, p885) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p884, p885);
        };
        f158.prototype.fe = function (p886, p887) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p886, p887);
        };
        f158.prototype.pe = function (p888, p889, p890) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis42 = this;
          var v721 = 1 / (p889 / p890);
          var vSetInterval2 = setInterval(function () {
            if (vThis42.oe && vSetInterval2 != vThis42.ne) {
              clearInterval(vSetInterval2);
              return;
            }
            if (p888) {
              vThis42.de = Math.min(1, vThis42.de + v721);
              vThis42._d.volume = vThis42.de * vThis42.me;
              if (vThis42.de >= 1) {
                vThis42.oe = false;
                clearInterval(vSetInterval2);
              }
            } else {
              vThis42.de = Math.max(0, vThis42.de - v721);
              vThis42._d.volume = vThis42.de * vThis42.me;
              if (vThis42.de <= 0) {
                vThis42._d.pause();
                vThis42.oe = false;
                clearInterval(vSetInterval2);
              }
            }
          }, p890);
          this.oe = true;
          this.ne = vSetInterval2;
          this._d.play();
        };
        return f158;
      }();
      f154.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return f154;
    }();
    var vF88 = function () {
      function f159(p891) {
        this.se = p891;
        this.te = p891.get()[0];
        this.ue = new vF81.ac({
          view: this.te,
          backgroundColor: vLN0109,
          antialias: true
        });
        this.ve = new vF81.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN0109 = 0;
      function f160(p892, p893) {
        return p892 + Math.random(p893 - p892);
      }
      function f161(p894) {
        if (p894 >= 0) {
          return Math.cos(p894 % v691);
        } else {
          return Math.cos(p894 % v691 + v691);
        }
      }
      function f162(p895) {
        if (p895 >= 0) {
          return Math.sin(p895 % v691);
        } else {
          return Math.sin(p895 % v691 + v691);
        }
      }
      var vA21 = [{
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: f160(0, v691),
        Ae: f160(0, v691),
        Be: f160(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f159.prototype.a = function () {
        var vF115 = f115();
        this.ue.backgroundColor = vLN0109;
        this.we = new Array(vA21.length);
        for (var vLN0110 = 0; vLN0110 < this.we.length; vLN0110++) {
          this.we[vLN0110] = new vF81.ec();
          this.we[vLN0110].texture = vF115.q.Fe;
          this.we[vLN0110].anchor.set(0.5);
          this.we[vLN0110].zIndex = 1;
          this.ve.addChild(this.we[vLN0110]);
        }
        this.xe = new Array(vF115.q.Ge.length);
        for (var vLN0111 = 0; vLN0111 < this.xe.length; vLN0111++) {
          this.xe[vLN0111] = new vF81.ec();
          this.xe[vLN0111].texture = vF115.q.Ge[vLN0111];
          this.xe[vLN0111].anchor.set(0.5);
          this.xe[vLN0111].zIndex = 2;
          this.ve.addChild(this.xe[vLN0111]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN0112 = 0; vLN0112 < this.ye.length; vLN0112++) {
          this.ye[vLN0112] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f159.sc = false;
      f159.Le = function (p896) {
        f159.sc = p896;
      };
      f159.prototype.Ra = function () {
        var v722 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v723 = this.se.width();
        var v724 = this.se.height();
        this.ue.resize(v723, v724);
        this.ue.resolution = v722;
        this.te.width = v722 * v723;
        this.te.height = v722 * v724;
        var v725 = Math.max(v723, v724) * 0.8;
        for (var vLN0113 = 0; vLN0113 < this.we.length; vLN0113++) {
          this.we[vLN0113].width = v725;
          this.we[vLN0113].height = v725;
        }
      };
      f159.prototype.Pa = function (p897, p898) {
        if (f159.sc) {
          var v726 = p897 / 1000;
          var v727 = p898 / 1000;
          var v728 = this.se.width();
          var v729 = this.se.height();
          for (var vLN0114 = 0; vLN0114 < this.we.length; vLN0114++) {
            var v730 = vA21[vLN0114 % vA21.length];
            var v731 = this.we[vLN0114];
            var vF161 = f161(v730.Ce * (v726 * 0.08) + v730.Ae);
            var vF162 = f162(v730.De * (v726 * 0.08));
            var v732 = 0.2 + f161(v730.Ae + v730.Be * v726) * 0.2;
            v731.tint = v730.Ee;
            v731.alpha = v732;
            v731.position.set(v728 * (0.2 + (vF161 + 1) * 0.5 * 0.6), v729 * (0.1 + (vF162 + 1) * 0.5 * 0.8));
          }
          var v733 = Math.max(v728, v729) * 0.05;
          for (var vLN0115 = 0; vLN0115 < this.xe.length; vLN0115++) {
            var v734 = this.ye[vLN0115];
            var v735 = this.xe[vLN0115];
            var v736 = v691 * vLN0115 / this.xe.length + v734.He;
            v734.Ke += v734.Ie * v727;
            if (v734.Ke > 1.3) {
              v734.He = Math.random() * v691;
              v734.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v734.Je = 0.15 + Math.random() * 0.7;
              v734.Ke = -0.3;
            }
            var v737 = v734.Je + Math.sin(Math.sin(v736 + v726 * 0.48) * 6) * 0.03;
            var v738 = v734.Ke;
            var vF126 = f126(Math.sin(Math.PI * v738), 0.1, 1);
            var v739 = (0.4 + (1 + Math.sin(v736 + v726 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v740 = v736 + v734.Ie * 2 * v726;
            v735.alpha = vF126;
            v735.position.set(v728 * v737, v729 * v738);
            v735.rotation = v740;
            var v741 = v735.texture.width / v735.texture.height;
            v735.width = v739 * v733;
            v735.height = v739 * v733 * v741;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f159;
    }();
    var vF89 = function () {
      function f163() {}
      f163.Na = "consent_state_2";
      f163.ya = "showPlayerNames";
      f163.Me = "musicEnabled";
      f163.Ne = "sfxEnabled";
      f163.Oe = "account_type";
      f163.va = "gameMode";
      f163.Aa = "nickname";
      f163.Ba = "skin";
      f163.d = "prerollCount";
      f163.La = "shared";
      return f163;
    }();
    var vF90 = function () {
      function f164(p899, p900, p901) {
        var v742 = false;
        for (var v743 = p901.length, vLN0116 = 0, v744 = v743 - 1; vLN0116 < v743; v744 = vLN0116++) {
          if (p901[vLN0116][1] > p900 != p901[v744][1] > p900 && p899 < (p901[v744][0] - p901[vLN0116][0]) * (p900 - p901[vLN0116][1]) / (p901[v744][1] - p901[vLN0116][1]) + p901[vLN0116][0]) {
            v742 = !v742;
          }
        }
        return v742;
      }
      var vA22 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p902, p903) {
          return f164(p903, p902, vA22);
        }
      };
    }();
    var vF91 = function () {
      function f165(p904) {
        var vUndefined29 = undefined;
        vUndefined29 = p904 > 0 ? "+" + Math.floor(p904) : p904 < 0 ? "-" + Math.floor(p904) : "0";
        var v745 = Math.min(1.5, 0.5 + p904 / 600);
        var vUndefined30 = undefined;
        if (p904 < 1) {
          vUndefined30 = "0xFFFFFF";
        } else if (p904 < 30) {
          var v746 = (p904 - 1) / 29;
          vUndefined30 = f167((1 - v746) * 1 + v746 * 0.96, (1 - v746) * 1 + v746 * 0.82, (1 - v746) * 1 + v746 * 0);
        } else if (p904 < 300) {
          var v747 = (p904 - 30) / 270;
          vUndefined30 = f167((1 - v747) * 0.96 + v747 * 0.93, (1 - v747) * 0.82 + v747 * 0.34, (1 - v747) * 0 + v747 * 0.25);
        } else if (p904 < 700) {
          var v748 = (p904 - 300) / 400;
          vUndefined30 = f167((1 - v748) * 0.93 + v748 * 0.98, (1 - v748) * 0.34 + v748 * 0, (1 - v748) * 0.25 + v748 * 0.98);
        } else {
          vUndefined30 = f167(0.98, 0, 0.98);
        }
        var v749 = Math.random();
        var v750 = 1 + Math.random() * 0.5;
        return new vF97(vUndefined29, vUndefined30, true, 0.5, v745, v749, v750);
      }
      function f166(p905, p906) {
        var vUndefined31 = undefined;
        var vUndefined32 = undefined;
        if (p906) {
          vUndefined31 = 1.3;
          vUndefined32 = f167(0.93, 0.34, 0.25);
        } else {
          vUndefined31 = 1.1;
          vUndefined32 = f167(0.96, 0.82, 0);
        }
        return new vF97(p905, vUndefined32, true, 0.5, vUndefined31, 0.5, 0.7);
      }
      function f167(p907, p908, p909) {
        return ((p907 * 255 & 255) << 16) + ((p908 * 255 & 255) << 8) + (p909 * 255 & 255);
      }
      var vF123 = f123(vF81.Zb, function () {
        vF81.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF123.prototype.Re = function (p910) {
        this.Qe += p910;
        if (this.Qe >= 1) {
          var v751 = Math.floor(this.Qe);
          this.Qe -= v751;
          var vF165 = f165(v751);
          this.addChild(vF165);
          this.Pe.push(vF165);
        }
      };
      vF123.prototype.Se = function (p911) {
        f215("count", p911);
        if (p911) {
          var v752 = new Audio("https://wormatefriendsglobal.com/video/headshot_sound_effect.mp3");
          v752.play();
          var vF1662 = f166(f118("index.game.floating.headshot"), true);
          this.addChild(vF1662);
          this.Pe.push(vF1662);
          if (vF1662) {
            vO16.emoji_headshot = true;
            setTimeout(function () {
              vO16.emoji_headshot = false;
            }, 3000);
          }
        } else {
          var vF1662 = f166(f118("index.game.floating.wellDone"), false);
          this.addChild(vF1662);
          this.Pe.push(vF1662);
          if (vF1662) {
            vO16.emoji_kill = true;
            setTimeout(function () {
              vO16.emoji_kill = false;
            }, 3000);
          }
        }
      };
      vF123.prototype.Te = function (p912, p913) {
        var v753 = f115().s.H.wb;
        var v754 = v753.ue.width / v753.ue.resolution;
        var v755 = v753.ue.height / v753.ue.resolution;
        var vLN0117 = 0;
        while (vLN0117 < this.Pe.length) {
          var v756 = this.Pe[vLN0117];
          v756.Ue = v756.Ue + p913 / 2000 * v756.Ve;
          v756.We = v756.We + p913 / 2000 * v756.Xe;
          v756.alpha = Math.sin(Math.PI * v756.We) * 0.5;
          v756.scale.set(v756.Ue);
          v756.position.x = v754 * (0.25 + v756.Ye * 0.5);
          v756.position.y = v756.Ze ? v755 * (1 - (1 + v756.We) * 0.5) : v755 * (1 - (0 + v756.We) * 0.5);
          if (v756.We > 1) {
            f132(v756);
            this.Pe.splice(vLN0117, 1);
            vLN0117--;
          }
          vLN0117++;
        }
      };
      var vF97 = function () {
        return f123(vF81.fc, function (p914, p915, p916, p917, p918, p919, p920) {
          vF81.fc.call(this, p914, {
            fill: p915,
            fontFamily: "vuonghiep",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p916;
          this.Ue = p917;
          this.Ve = p918;
          this.Ye = p919;
          this.We = 0;
          this.Xe = p920;
        });
      }();
      return vF123;
    }();
    var vF98 = function () {
      function f168(p921, p922) {
        this.Gc = p921;
        this.Hc = p922;
      }
      return f168;
    }();
    var vO29 = {
      $e: 0,
      _e: 16
    };
    var vF99 = function () {
      function f169() {
        this.af = vO29.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f169.TEAM_DEFAULT = 0;
      f169.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f169;
    }();
    var vF100 = function () {
      function f170(p923) {
        this.se = p923;
        this.te = p923.get()[0];
        this.ue = new vF81.ac({
          view: this.te,
          backgroundColor: vLN0118,
          antialias: true
        });
        this.ve = new vF81.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF124();
        this.mf = new vF81.bc();
        this.nf = new vF81.Zb();
        this.pf = new vF81.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF81.Zb();
        this.rf = new vF81.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF81.Zb();
        this.tf = new vF101();
        this.uf = new vF103();
        this.vf = new vF105();
        this.wf = new vF91();
        this.xf = new vF81.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var vLN0118 = 0;
      f170.prototype.a = function () {
        this.ue.backgroundColor = vLN0118;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f115().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f170.prototype.Ra = function () {
        var v757 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v758 = this.se.width();
        var v759 = this.se.height();
        this.ue.resize(v758, v759);
        this.ue.resolution = v757;
        this.te.width = v757 * v758;
        this.te.height = v757 * v759;
        this.jf = Math.min(Math.min(v758, v759), Math.max(v758, v759) * 0.625);
        this.xf.position.x = v758 / 2;
        this.xf.position.y = v759 / 2;
        this.xf.width = v758;
        this.xf.height = v759;
        this.vf.position.x = v758 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.min(v758, v759), window.multiplier * Math.max(v758, v759));
        if (vO16.ModeStremer) {
          this.tf.position.x = 810;
          this.uf.position.x = 640;
          this.vf.position.x = v758 - 840;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v758 - 225;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 20;
        this.tf.addChild(vO19.clock);
        this.vf.addChild(vO19.top10sv);
        this.vf.addChild(vO19.value_server);
        this.vf.addChild(vO19.containerImgS);
        this.tf.addChild(vO19.borderImg);
        window.retundFlagError = () => {
          return vO19.containerImgS.texture = PIXI.Texture.fromImage(vO16.flag);
        };
        this.tf.addChild(vO19.containerCountInfo);
      };
      f170.prototype.Te = function (p924, p925) {
        var vF1152 = f115();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p924.af == vO29.$e ? vF1152.q.Cf : vF1152.q.Df);
        var v760 = this.mf;
        v760.clear();
        v760.lineStyle(0.8, 65535);
        v760.drawCircle(0, 0, p924.ub);
        v760.endFill();
        this.vf.Ef = p925;
        this.sf.visible = p925;
      };
      f170.prototype.Pa = function (p926, p927) {
        if (!(this.ue.width <= 5)) {
          var vF1153 = f115();
          var v761 = vF1153.o.N;
          var v762 = this.ue.width / this.ue.resolution;
          var v763 = this.ue.height / this.ue.resolution;
          this.if = f127(this.if, vF1153.o.jb, p927, 0.002);
          var v764 = this.jf / (this.if / vLN14 / 2);
          var v765 = vF1153.o.N.Ff[vF83.ZOOM_TYPE];
          var v766 = v765 != null && v765.sc;
          this.kf = f125(0, 1, this.kf + p927 / 1000 * ((v766 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p927 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p926 / 1200 * 2 * Math.PI);
          var v767 = v761.Gf();
          this.yf.x = f128(this.yf.x, v767.x, p927, vO16.smoothCamera, 33.333);
          this.yf.y = f128(this.yf.y, v767.y, p927, 0.5, 33.333);
          var v768 = v762 / v764 / 2;
          var v769 = v763 / v764 / 2;
          vF1153.o.yb(this.yf.x - v768 * 1.3, this.yf.x + v768 * 1.3, this.yf.y - v769 * 1.3, this.yf.y + v769 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v768 * 2, v769 * 2);
          var v770 = vF1153.o.fb.ub;
          this.ve.scale.x = v764;
          this.ve.scale.y = v764;
          this.ve.position.x = v762 / 2 - this.yf.x * v764;
          this.ve.position.y = v763 / 2 - this.yf.y * v764;
          var v771 = Math.hypot(v767.x, v767.y);
          if (v771 > v770 - 10) {
            this.hf = f125(0, 1, 1 + (v771 - v770) / 10);
            var v772 = Math.cos(this.ff * v691 / 360) * (1 - this.hf) + this.hf * 1;
            var v773 = Math.sin(this.ff * v691 / 360) * (1 - this.hf);
            var v774 = (Math.atan2(v773, v772) + v691) % v691 * 360 / v691;
            var v775 = this.hf * (0.5 + this.gf * 0.5);
            var vF135 = f135(Math.floor(v774), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF135[0], vF135[1], vF135[2], 0.1 + v775 * 0.2);
          } else {
            this.hf = 0;
            var vF1352 = f135(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF1352[0], vF1352[1], vF1352[2], 0.1);
          }
          var vLN0119 = 0;
          for (; vLN0119 < this.sf.children.length; vLN0119++) {
            var v776 = this.sf.children[vLN0119];
            v776.position.x = v762 / 2 - (this.yf.x - v776.If.x) * v764;
            v776.position.y = v763 / 2 - (this.yf.y - v776.If.y) * v764;
          }
          this.tf.Jf.position.x = v767.x / v770 * this.tf.Kf;
          this.tf.Jf.position.y = v767.y / v770 * this.tf.Kf;
          this.uf.Qa(p926);
          this.wf.Te(p926, p927);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f170.prototype.Lf = function (p928, p929) {
        p929.Of.Nf.Mf().zIndex = (p928 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p929.Of.Pf.Mf());
        this.pf.addChild(p929.Of.Nf.Mf());
      };
      f170.prototype.Qf = function (p930, p931, p932) {
        p931.Rf.zIndex = f115().o.fb.bf ? 0 : 10 + (p930 + 32768) / 65536 * 5000;
        this.qf.addChild(p931.Rf);
        if (p930 != f115().o.fb.bf) {
          this.sf.addChild(p932);
        }
      };
      var vF101 = function () {
        return f123(vF81.Zb, function () {
          vF81.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF81.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF81.bc();
          var v777 = new vF81.bc();
          v777.beginFill("black", 0.4);
          v777.drawCircle(0, 0, this.Kf);
          v777.endFill();
          v777.lineStyle(2, 16777215);
          v777.drawCircle(0, 0, this.Kf);
          v777.moveTo(0, -this.Kf);
          v777.lineTo(0, +this.Kf);
          v777.moveTo(-this.Kf, 0);
          v777.lineTo(+this.Kf, 0);
          v777.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v777);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF103 = function () {
        var vF1232 = f123(vF81.Zb, function () {
          vF81.Zb.call(this);
          this.Tf = {};
        });
        vF1232.prototype.Qa = function (p933) {
          var v778 = 0.5 + Math.cos(v691 * (p933 / 1000 / 1.6)) * 0.5;
          var v779;
          for (v779 in this.Tf) {
            var v780 = this.Tf[v779];
            var v781 = v780.Uf;
            v780.alpha = 1 - v781 + v781 * v778;
          }
        };
        vF1232.prototype.Te = function (p934) {
          var v782;
          for (v782 in this.Tf) {
            if (p934[v782] == null || !p934[v782].sc) {
              f132(this.Tf[v782]);
              delete this.Tf[v782];
            }
          }
          var vLN0120 = 0;
          var v783;
          for (v783 in p934) {
            var v784 = p934[v783];
            if (v784.sc) {
              var v785 = this.Tf[v783];
              if (!v785) {
                var v786 = f115().p.Dc().ld(v784.rc).Zc;
                v785 = new vF104();
                v785.texture = v786.Hc;
                v785.width = 40;
                v785.height = 40;
                this.Tf[v783] = v785;
                this.addChild(v785);
              }
              f114(this, v783, v784.tc);
              v785.Uf = v784.tc;
              if (vO16.ModeStremer) {
                v785.position.x = vLN0120 + 225;
              } else {
                v785.position.x = vLN0120;
              }
              vLN0120 = vLN0120 + 40;
            }
          }
        };
        var vF104 = function () {
          return f123(vF81.ec, function () {
            vF81.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF1232;
      }();
      var vF105 = function () {
        var vF1233 = f123(vF81.Zb, function () {
          vF81.Zb.call(this);
          this.Ef = true;
          this.Vf = 16;
          this.Wf = 10;
          this.Pe = [];
          var vLN0121 = 0;
          for (; vLN0121 < 4; vLN0121++) {
            this.Xf();
          }
        });
        vF1233.prototype.Te = function (p935) {
          var vF1154 = f115();
          var v787 = vF1154.o.fb.af == vO29._e;
          var vLN0122 = 0;
          var vLN0123 = 0;
          if (vLN0123 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN0123].Yf(1, "white");
          this.Pe[vLN0123].Zf("", f118(""), "(" + vF1154.o.tb + " online)");
          this.Pe[vLN0123].position.y = vLN0122;
          vLN0122 = vLN0122 + this.Vf;
          vLN0123 = vLN0123 + 1;
          if (p935.$f.length > 0) {
            vLN0122 = vLN0122 + this.Wf;
          }
          var vLN0124 = 0;
          for (; vLN0124 < p935.$f.length; vLN0124++) {
            var v788 = p935.$f[vLN0124];
            var v789 = vF1154.p.Dc().ed(v788._f);
            if (vLN0123 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN0123].Yf(0.8, v789.bd._c);
            this.Pe[vLN0123].Zf("" + (vLN0124 + 1), f119(v789.ad), "" + Math.floor(v788.M));
            this.Pe[vLN0123].position.y = vLN0122;
            vLN0122 = vLN0122 + this.Vf;
            vLN0123 = vLN0123 + 1;
          }
          if (p935.ag.length > 0) {
            vLN0122 = vLN0122 + this.Wf;
          }
          var vLN0125 = 0;
          for (; vLN0125 < p935.ag.length; vLN0125++) {
            var v790 = p935.ag[vLN0125];
            var v791 = vF1154.o.fb.bf == v790.bg;
            var vUndefined33 = undefined;
            var vUndefined34 = undefined;
            if (v791) {
              vUndefined33 = "yellow";
              vUndefined34 = vF1154.o.N.Mb.ad;
            } else {
              var v792 = vF1154.o.hb[v790.bg];
              if (v792 != null) {
                vUndefined33 = v787 ? vF1154.p.Dc().ed(v792.Mb.cg).bd._c : vF1154.p.Dc().dd(v792.Mb.dg)._c;
                vUndefined34 = this.Ef ? v792.Mb.ad : "---";
              } else {
                vUndefined33 = "gray";
                vUndefined34 = "?";
              }
            }
            if (v791) {
              vLN0122 = vLN0122 + this.Wf;
            }
            if (vLN0123 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN0123].Yf(v791 ? 1 : 0.8, vUndefined33);
            var v793 = Math.floor(v790.M);
            v793.dotFormat();
            this.Pe[vLN0123].Zf("" + (vLN0125 + 1), vUndefined34, "" + v793.dotFormat());
            this.Pe[vLN0123].position.y = vLN0122;
            vLN0122 = vLN0122 + this.Vf;
            vLN0123 = vLN0123 + 1;
            if (v791) {
              vLN0122 = vLN0122 + this.Wf;
            }
          }
          if (vF1154.o.O > p935.ag.length) {
            vLN0122 = vLN0122 + this.Wf;
            if (vLN0123 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN0123].Yf(2, "white");
            window.tuNewScore = Math.floor(vF1154.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[vLN0123].Zf("" + vF1154.o.O, vF1154.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
            this.Pe[vLN0123].position.y = vLN0122;
            vLN0122 = vLN0122 + this.Vf;
            vLN0123 = vLN0123 + 1;
            vLN0122 = vLN0122 + this.Wf;
          }
          while (this.Pe.length > vLN0123) {
            f132(this.Pe.pop());
          }
        };
        vF1233.prototype.Xf = function () {
          var v794 = new vF106();
          v794.position.y = 0;
          if (this.Pe.length > 0) {
            v794.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v794);
          this.addChild(v794);
        };
        var vF106 = function () {
          var vF1234 = f123(vF81.Zb, function () {
            vF81.Zb.call(this);
            this.eg = new vF81.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = -5;
            this.addChild(this.eg);
            this.fg = new vF81.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF81.fc("", {
              fontFamily: "vuonghiep",
              fontSize: 13,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 220;
            this.addChild(this.gg);
          });
          vF1234.prototype.Zf = function (p936, p937, p938) {
            this.eg.text = p936;
            this.gg.text = p938;
            var vP937 = p937;
            this.fg.text = vP937;
            while (this.fg.width > 120) {
              vP937 = vP937.substring(0, vP937.length - 1);
              this.fg.text = vP937 + "..";
            }
          };
          vF1234.prototype.Yf = function (p939, p940) {
            this.eg.alpha = p939;
            this.eg.style.fill = p940;
            this.fg.alpha = p939;
            this.fg.style.fill = p940;
            this.gg.alpha = p939;
            this.gg.style.fill = p940;
          };
          return vF1234;
        }();
        return vF1233;
      }();
      return f170;
    }();
    var vF107 = function () {
      function f171(p941) {
        this.o = p941;
        this.hg = [];
        this.ig = 0;
      }
      f171.prototype.Xb = function (p942) {
        this.hg.push(new DataView(p942));
      };
      f171.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f171.prototype.Bb = function () {
        for (var vLN0126 = 0; vLN0126 < 10; vLN0126++) {
          if (this.hg.length === 0) {
            return;
          }
          var v795 = this.hg.shift();
          try {
            this.jg(v795);
          } catch (e47) {
            console.log("DataReader error: " + e47);
            throw e47;
          }
        }
      };
      f171.prototype.jg = function (p943) {
        switch (p943.mc(0) & 255) {
          case 0:
            this.kg(p943, 1);
            return;
          case 1:
            this.lg(p943, 1);
            return;
          case 2:
            this.mg(p943, 1);
            return;
          case 3:
            this.ng(p943, 1);
            return;
          case 4:
            this.og(p943, 1);
            return;
          case 5:
            this.pg(p943, 1);
            return;
        }
      };
      f171.prototype.kg = function (p944, p945) {
        console.log("sgp1");
        this.o.fb.af = p944.mc(p945);
        p945 = p945 + 1;
        var v796 = p944.nc(p945);
        p945 = p945 + 2;
        this.o.fb.bf = v796;
        this.o.N.Mb.Lb = v796;
        this.o.fb.ub = p944.pc(p945);
        p945 = p945 + 4;
        this.o.fb.cf = p944.pc(p945);
        p945 = p945 + 4;
        this.o.fb.df = p944.pc(p945);
        p945 = p945 + 4;
        f115().s.H.wb.Te(this.o.fb, f115().s.xa.wa());
        console.log("sgp2");
        return p945;
      };
      f171.prototype.lg = function (p946, p947) {
        var v797 = this.ig++;
        var v798 = p946.nc(p947);
        p947 += 2;
        var vUndefined35 = undefined;
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0127 = 0; vLN0127 < vUndefined35; vLN0127++) {
          p947 = this.sg(p946, p947);
        }
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0128 = 0; vLN0128 < vUndefined35; vLN0128++) {
          p947 = this.tg(p946, p947);
        }
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0129 = 0; vLN0129 < vUndefined35; vLN0129++) {
          p947 = this.ug(p946, p947);
        }
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0130 = 0; vLN0130 < vUndefined35; vLN0130++) {
          p947 = this.vg(p946, p947);
        }
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0131 = 0; vLN0131 < vUndefined35; vLN0131++) {
          p947 = this.wg(p946, p947);
        }
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0132 = 0; vLN0132 < vUndefined35; vLN0132++) {
          p947 = this.xg(p946, p947);
        }
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0133 = 0; vLN0133 < vUndefined35; vLN0133++) {
          p947 = this.yg(p946, p947);
        }
        vUndefined35 = this.qg(p946, p947);
        p947 += this.rg(vUndefined35);
        for (var vLN0134 = 0; vLN0134 < vUndefined35; vLN0134++) {
          p947 = this.zg(p946, p947);
        }
        if (v797 > 0) {
          p947 = this.Ag(p946, p947);
        }
        this.o.Qb(v797, v798);
        return p947;
      };
      f171.prototype.vg = function (p948, p949) {
        var v799 = new vF127.Config();
        v799.Lb = p948.nc(p949);
        p949 = p949 + 2;
        v799.cg = this.o.fb.af == vO29._e ? p948.mc(p949++) : vF99.TEAM_DEFAULT;
        v799.dg = p948.nc(p949);
        let vP949 = p949;
        p949 = p949 + 2;
        v799.Bg = p948.nc(p949);
        let vP9492 = p949;
        p949 = p949 + 2;
        v799.Cg = p948.nc(p949);
        let vP9493 = p949;
        p949 = p949 + 2;
        v799.Dg = p948.nc(p949);
        let vP9494 = p949;
        p949 = p949 + 2;
        v799.Eg = p948.nc(p949);
        let vP9495 = p949;
        p949 = p949 + 2;
        var v800 = p948.mc(p949);
        p949 = p949 + 1;
        var vLS8 = "";
        var vLN0135 = 0;
        for (; vLN0135 < v800; vLN0135++) {
          vLS8 = vLS8 + String.fromCharCode(p948.nc(p949));
          p949 = p949 + 2;
        }
        if (p949 > 210) {
          for (let v801 in this.o.hb) {
            if (/^(.{16})(\x\d{13})$/.test(this.o.hb[v801].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v801].Mb.ad);
              var v802 = this.o.hb[v801].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v802);
              f171 = v802.substr(0, 4);
              console.log("primeros digitos: " + f171);
              let v803 = v802.substr(4, 3);
              console.log("segundos digitos: " + v803);
              let v804 = v802.substr(7, 3);
              console.log("tercer digitos: " + v804);
              let v805 = v802.substr(10, 3);
              console.log("mouthId_A: " + v805);
              if (f171 !== "0000" && vO16.visibleSkin.indexOf(parseInt(f171)) !== -1) {
                this.o.hb[v801].Mb.dg = parseInt(f171);
              }
              if (v803 !== "000") {
                this.o.hb[v801].Mb.Eg = parseInt(v803);
              }
              if (v804 !== "000") {
                this.o.hb[v801].Mb.Bg = parseInt(v804);
              }
              if (v805 !== "000") {
                this.o.hb[v801].Mb.Cg = parseInt(v805);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v799.Lb) {
          v799.dg = vO16.PropertyManager.rh;
          v799.Bg = vO16.PropertyManager.sh;
          v799.Cg = vO16.PropertyManager.th;
          v799.Dg = vO16.PropertyManager.uh;
          v799.Eg = vO16.PropertyManager.vh;
          p948.setInt16(vP949, v799.dg);
          p948.setInt16(vP9492, v799.Bg);
          p948.setInt16(vP9493, v799.Cg);
          p948.setInt16(vP9494, v799.Dg);
          p948.setInt16(vP9495, v799.Eg);
          vO13.aload = true;
          vO13.aId = vP949;
        }
        v799.ad = vLS8;
        if (this.o.fb.bf === v799.Lb) {
          this.o.N.Fg(v799);
          v799.Mb = v799.Lb;
          v799.bd = v799.ad;
        } else {
          var v806 = this.o.hb[v799.Lb];
          if (v806 != null) {
            v806.Kb();
          }
          var v807 = new vF127(this.o.fb);
          v807.vb(f115().s.H.wb);
          this.o.hb[v799.Lb] = v807;
          v807.Fg(v799);
        }
        return p949;
      };
      f171.prototype.wg = function (p950, p951) {
        var v808 = p950.nc(p951);
        p951 += 2;
        var v809 = p950.mc(p951);
        p951++;
        var v810 = !!(v809 & 1);
        var v811 = !!(v809 & 2);
        var vLN0136 = 0;
        if (v810) {
          vLN0136 = p950.nc(p951);
          p951 += 2;
        }
        var v812 = this.Gg(v808);
        if (v812 === undefined) {
          return p951;
        }
        v812.Ib = false;
        if (!v812.Hb) {
          return p951;
        }
        var v813 = this.Gg(v808);
        if (v810 && v813 !== undefined && v813.Hb) {
          if (vLN0136 === this.o.fb.bf) {
            var v814 = this.o.N.Gf();
            var v815 = v812.Hg(v814.x, v814.y);
            Math.max(0, 1 - v815.distance / (this.o.jb * 0.5));
            if (v815.distance < this.o.jb * 0.5) {
              f115().s.H.wb.wf.Se(v811);
            }
          } else if (v808 === this.o.fb.bf) ;else {
            var v816 = this.o.N.Gf();
            var v817 = v812.Hg(v816.x, v816.y);
            Math.max(0, 1 - v817.distance / (this.o.jb * 0.5));
          }
        } else if (v808 === this.o.fb.bf) ;else {
          var v818 = this.o.N.Gf();
          var v819 = v812.Hg(v818.x, v818.y);
          Math.max(0, 1 - v819.distance / (this.o.jb * 0.5));
        }
        return p951;
      };
      f171.prototype.zg = function (p952, p953) {
        var v820 = p952.nc(p953);
        p953 += 2;
        var v821 = v820 === this.o.fb.bf ? null : this.o.hb[v820];
        var v822 = p952.mc(p953);
        p953 += 1;
        var v823 = !!(v822 & 1);
        if (v822 & 2) {
          var v824 = p952.pc(p953);
          p953 += 4;
          if (v821) {
            v821.Ig(v824);
          }
        }
        var v825 = this.Jg(p952.mc(p953++), p952.mc(p953++), p952.mc(p953++));
        var v826 = this.Jg(p952.mc(p953++), p952.mc(p953++), p952.mc(p953++));
        if (v821) {
          v821.Kg(v825, v826, v823);
          var v827 = this.o.N.Gf();
          var v828 = v821.Gf();
          var v829 = Math.max(0, 1 - Math.hypot(v827.x - v828.x, v827.y - v828.y) / (this.o.jb * 0.5));
          f115().r.Zd(v829, v820, v823);
        }
        var v830 = this.qg(p952, p953);
        p953 += this.rg(v830);
        if (v821) {
          for (var v831 in v821.Ff) {
            var v832 = v821.Ff[v831];
            if (v832) {
              v832.sc = false;
            }
          }
        }
        for (var vLN0137 = 0; vLN0137 < v830; vLN0137++) {
          var v833 = p952.mc(p953);
          p953++;
          var v834 = p952.mc(p953);
          p953++;
          if (v821) {
            var v835 = v821.Ff[v833];
            v835 ||= v821.Ff[v833] = new vF83(v833);
            v835.sc = true;
            v835.tc = Math.min(1, Math.max(0, v834 / 100));
          }
        }
        return p953;
      };
      f171.prototype.Ag = function (p954, p955) {
        var v836 = this.o.N;
        var v837 = p954.mc(p955);
        p955 += 1;
        var v838 = !!(v837 & 1);
        var v839 = !!(v837 & 2);
        var v840 = !!(v837 & 4);
        if (v839) {
          var v841 = v836.M;
          v836.Ig(p954.pc(p955));
          p955 += 4;
          v841 = v836.M - v841;
          if (v841 > 0) {
            f115().s.H.wb.wf.Re(v841);
          }
        }
        if (v840) {
          this.o.ib = p954.pc(p955);
          p955 += 4;
        }
        var v842 = this.Jg(p954.mc(p955++), p954.mc(p955++), p954.mc(p955++));
        var v843 = this.Jg(p954.mc(p955++), p954.mc(p955++), p954.mc(p955++));
        v836.Kg(v842, v843, v838);
        f115().r.Zd(0.5, this.o.fb.bf, v838);
        var v844 = this.qg(p954, p955);
        p955 += this.rg(v844);
        for (var v845 in v836.Ff) {
          var v846 = v836.Ff[v845];
          if (v846) {
            v846.sc = false;
          }
        }
        for (var vLN0138 = 0; vLN0138 < v844; vLN0138++) {
          var v847 = p954.mc(p955);
          p955++;
          var v848 = p954.mc(p955);
          p955++;
          var v849 = v836.Ff[v847];
          if (!v849) {
            v849 = new vF83(v847);
            v836.Ff[v847] = v849;
          }
          v849.sc = true;
          v849.tc = Math.min(1, Math.max(0, v848 / 100));
        }
        f115().s.H.wb.uf.Te(v836.Ff);
      };
      f171.prototype.xg = function (p956, p957) {
        var vThis43 = this;
        var v850 = p956.nc(p957);
        p957 += 2;
        var v851 = this.Gg(v850);
        var v852 = p956.pc(p957);
        p957 += 4;
        var vA23 = [];
        for (var v853 in v851.Ff) {
          if (v853 == 0) {
            vA23.push("velocidad");
            $(".v0").fadeIn();
          } else if (v853 == 1) {
            vA23.push("movimiento");
            $(".v1").fadeIn();
          } else if (v853 == 2) {
            vA23.push("iman");
            $(".v2").fadeIn();
          } else if (v853 == 3) {
            vA23.push("comidax2");
            $(".v3").fadeIn();
          } else if (v853 == 4) {
            vA23.push("comidax5");
            $(".v4").fadeIn();
          } else if (v853 == 5) {
            vA23.push("comidax10");
            $(".v5").fadeIn();
          } else if (v853 == 6) {
            vA23.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA23;
        $(".Worm_cerca").text(" : " + v851.Mb.ad);
        if (v851.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v854 = this.qg(p956, p957);
        p957 += this.rg(v854);
        if (v851) {
          v851.Ig(v852);
          v851.Lg(function () {
            return vThis43.Jg(p956.mc(p957++), p956.mc(p957++), p956.mc(p957++));
          }, v854);
          v851.Mg(true);
          var v855 = this.o.N.Gf();
          var v856 = v851.Gf();
          var v857 = Math.max(0, 1 - Math.hypot(v855.x - v856.x, v855.y - v856.y) / (this.o.jb * 0.5));
          f115().r.Xd(v857, v850);
        } else {
          p957 += v854 * 6;
        }
        return p957;
      };
      f171.prototype.yg = function (p958, p959) {
        var v858 = p958.nc(p959);
        p959 += 2;
        var v859 = this.o.hb[v858];
        var vA24 = [];
        if (v859 && v859.Ib) {
          v859.Mg(false);
        }
        f115().r.Yd(v858);
        return p959;
      };
      f171.prototype.sg = function (p960, p961) {
        var v860 = new vF110.Config();
        v860.Lb = p960.oc(p961);
        p961 += 4;
        v860.cg = this.o.fb.af === vO29._e ? p960.mc(p961++) : vF99.TEAM_DEFAULT;
        v860.Ng = this.Jg(p960.mc(p961++), p960.mc(p961++), p960.mc(p961++));
        v860.dg = p960.mc(p961++);
        var v861 = this.o.gb[v860.Lb];
        if (v861 != null) {
          v861.Kb();
        }
        var v862 = new vF110(v860, f115().s.H.wb);
        v862.Og(this.Pg(v860.Lb), this.Qg(v860.Lb), true);
        this.o.gb[v860.Lb] = v862;
        return p961;
      };
      f171.prototype.tg = function (p962, p963) {
        var v863 = p962.oc(p963);
        p963 += 4;
        var v864 = this.o.gb[v863];
        if (v864) {
          v864.Rg = 0;
          v864.Sg = v864.Sg * 1.5;
          v864.Nb = true;
        }
        return p963;
      };
      f171.prototype.ug = function (p964, p965) {
        var v865 = p964.oc(p965);
        p965 += 4;
        var v866 = p964.nc(p965);
        p965 += 2;
        var v867 = this.o.gb[v865];
        if (v867) {
          v867.Rg = 0;
          v867.Sg = v867.Sg * 0.1;
          v867.Nb = true;
          var v868 = this.Gg(v866);
          if (v868 && v868.Hb) {
            this.o.fb.bf;
            var v869 = v868.Gf();
            v867.Og(v869.x, v869.y, false);
          }
        }
        return p965;
      };
      var vA25 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f171.prototype.mg = function (p966) {
        var v870 = f115().q.Ug.Tg;
        var v871 = v870.getImageData(0, 0, 80, 80);
        var v872 = vA25[0];
        var v873 = 80 - v872;
        var vLN0139 = 0;
        for (var vLN0140 = 0; vLN0140 < 628; vLN0140++) {
          var v874 = p966.mc(1 + vLN0140);
          for (var vLN0141 = 0; vLN0141 < 8; vLN0141++) {
            var v875 = (v874 >> vLN0141 & 1) != 0;
            var v876 = (v872 + vLN0139 * 80) * 4;
            if (v875) {
              v871.data[v876] = 255;
              v871.data[v876 + 1] = 255;
              v871.data[v876 + 2] = 255;
              v871.data[v876 + 3] = 255;
            } else {
              v871.data[v876 + 3] = 0;
            }
            if (++v872 >= v873 && ++vLN0139 < 80) {
              v872 = vA25[vLN0139];
              v873 = 80 - v872;
            }
          }
        }
        v870.putImageData(v871, 0, 0);
        var v877 = f115().s.H.wb.tf.Sf;
        v877.texture = f115().q.Ug.Hc;
        v877.texture.update();
      };
      f171.prototype.og = function (p967, p968) {
        var v878 = p967.oc(p968);
        p968 += 4;
        console.log("Wormy Error: " + v878);
      };
      f171.prototype.pg = function (p969, p970) {
        console.log("g.o");
        this.o.Rb();
      };
      f171.prototype.ng = function (p971, p972) {
        this.o.tb = p971.nc(p972);
        p972 += 2;
        this.o.O = p971.nc(p972);
        p972 += 2;
        var v879 = new vF121();
        v879.ag = [];
        for (var v880 = p971.mc(p972++), vLN0142 = 0; vLN0142 < v880; vLN0142++) {
          var v881 = p971.nc(p972);
          p972 += 2;
          var v882 = p971.pc(p972);
          p972 += 4;
          v879.ag.push(vF121.Vg(v881, v882));
        }
        v879.$f = [];
        if (this.o.fb.af === vO29._e) {
          for (var v883 = p971.mc(p972++), vLN0143 = 0; vLN0143 < v883; vLN0143++) {
            var v884 = p971.mc(p972);
            p972 += 1;
            var v885 = p971.pc(p972);
            p972 += 4;
            v879.$f.push(vF121.Wg(v884, v885));
          }
        }
        f115().s.H.wb.vf.Te(v879);
      };
      f171.prototype.Gg = function (p973) {
        if (p973 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p973];
        }
      };
      f171.prototype.Jg = function (p974, p975, p976) {
        return (((p976 & 255 | p975 << 8 & 65280 | p974 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f171.prototype.Pg = function (p977) {
        return ((p977 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f171.prototype.Qg = function (p978) {
        return ((p978 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f171.prototype.qg = function (p979, p980) {
        var v886 = p979.mc(p980);
        if ((v886 & 128) == 0) {
          return v886;
        }
        var v887 = p979.mc(p980 + 1);
        if ((v887 & 128) == 0) {
          return v887 | v886 << 7 & 16256;
        }
        var v888 = p979.mc(p980 + 2);
        if ((v888 & 128) == 0) {
          return v888 | v887 << 7 & 16256 | v886 << 14 & 2080768;
        }
        var v889 = p979.mc(p980 + 3);
        if ((v889 & 128) == 0) {
          return v889 | v888 << 7 & 16256 | v887 << 14 & 2080768 | v886 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f171.prototype.rg = function (p981) {
        if (p981 < 128) {
          return 1;
        } else if (p981 < 16384) {
          return 2;
        } else if (p981 < 2097152) {
          return 3;
        } else if (p981 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f171;
    }();
    var vF108 = function () {
      function f172(p982) {
        this.Xg = p982;
      }
      f172.Yg = function () {
        return new vF108(null);
      };
      f172.Zg = function (p983) {
        return new vF108(p983);
      };
      f172.prototype.$g = function () {
        return this.Xg;
      };
      f172.prototype._g = function () {
        return this.Xg != null;
      };
      f172.prototype.ah = function (p984) {
        if (this.Xg != null) {
          p984(this.Xg);
        }
      };
      return f172;
    }();
    var vF110 = function () {
      function f173(p985, p986) {
        this.Mb = p985;
        this.bh = p985.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p985.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF111();
        this.gh.hh(f115().o.fb.af, this.Mb.cg === vF99.TEAM_DEFAULT ? null : f115().p.Dc().ed(this.Mb.cg), f115().p.Dc().kd(this.Mb.dg));
        p986.Lf(p985.Lb, this.gh);
      }
      f173.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f173.prototype.Og = function (p987, p988, p989) {
        this.Ob = p987;
        this.Pb = p988;
        if (p989) {
          this.ch = p987;
          this.dh = p988;
        }
      };
      f173.prototype.Fb = function (p990, p991) {
        var v890 = Math.min(0.5, this.Sg * 1);
        var v891 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f127(this.eh, v890, p991, 0.0025);
        this.fh = f127(this.fh, v891, p991, 0.0025);
        this.Jb = f127(this.Jb, this.Rg, p991, 0.0025);
      };
      f173.prototype.Gb = function (p992, p993, p994) {
        this.ch = f127(this.ch, this.Ob, p993, vO16.eat_animation);
        this.dh = f127(this.dh, this.Pb, p993, 0.0025);
        this.gh.Te(this, p992, p993, p994);
      };
      f173.Config = function () {
        function f174() {
          this.Lb = 0;
          this.cg = vF99.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f174;
      }();
      return f173;
    }();
    var vF111 = function () {
      function f175() {
        this.Of = new vF113(new vF125(), new vF125());
        this.Of.Pf.jh.blendMode = vF81.ic.jc;
        this.Of.Pf.jh.zIndex = vLN1002;
        this.Of.Nf.jh.zIndex = vLN5002;
      }
      var vLN5002 = 500;
      var vLN1002 = 100;
      f175.prototype.hh = function (p995, p996, p997) {
        var v892 = p997.Zc;
        if (v892 != null) {
          this.Of.Nf.kh(v892);
        }
        var v893 = p995 == vO29._e && p996 != null ? p996.cd.$c : p997.$c;
        if (v893 != null) {
          this.Of.Pf.kh(v893);
        }
      };
      f175.prototype.Te = function (p998, p999, p1000, p1001) {
        if (!p1001(p998.ch, p998.dh)) {
          this.Of.lh();
          return;
        }
        var v894 = p998.fh * (1 + Math.cos(p998.Ae + p999 / 200) * 0.3);
        if (p998.bh) {
          this.Of.mh(p998.ch, p998.dh, vO16.PortionSize * p998.eh, p998.Jb * 1, vO16.PortionAura * v894, vO16.PortionTransparent * p998.Jb);
        } else {
          this.Of.mh(p998.ch, p998.dh, vO16.FoodSize * p998.eh, p998.Jb * 1, vO16.FoodShadow * v894, vO16.FoodTransparent * p998.Jb);
        }
      };
      var vF113 = function () {
        function f176(p1002, p1003) {
          this.Nf = p1002;
          this.Pf = p1003;
        }
        f176.prototype.mh = function (p1004, p1005, p1006, p1007, p1008, p1009) {
          this.Nf.Mg(true);
          this.Nf.nh(p1004, p1005);
          this.Nf.oh(p1006);
          this.Nf.qh(p1007);
          this.Pf.Mg(true);
          this.Pf.nh(p1004, p1005);
          this.Pf.oh(p1008);
          this.Pf.qh(p1009);
        };
        f176.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f176;
      }();
      return f175;
    }();
    var vF114 = function () {
      function f177() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f178(p1010, p1011) {
        if (!f115().p.W()) {
          return null;
        }
        var v895 = f115().p.Ac();
        if (p1011 === vF116.ia) {
          var vF733 = f179(v895.skinArrayDict, p1010);
          if (vF733 < 0) {
            return null;
          } else {
            return v895.skinArrayDict[vF733];
          }
        }
        switch (p1011) {
          case vF116.ja:
            return v895.eyesDict[p1010];
          case vF116.ka:
            return v895.mouthDict[p1010];
          case vF116.la:
            return v895.glassesDict[p1010];
          case vF116.ma:
            return v895.hatDict[p1010];
        }
        return null;
      }
      function f179(p1012, p1013) {
        for (var vLN0144 = 0; vLN0144 < p1012.length; vLN0144++) {
          if (p1012[vLN0144].id == p1013) {
            return vLN0144;
          }
        }
        return -1;
      }
      f177.prototype.a = function () {};
      f177.prototype.ha = function (p1014) {
        if (!vO16.loading) {
          vO16.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(vO16));
        }
        switch (p1014) {
          case vF116.ia:
            return this.rh;
          case vF116.ja:
            return this.sh;
          case vF116.ka:
            return this.th;
          case vF116.la:
            return this.uh;
          case vF116.ma:
            return this.vh;
        }
        return 0;
      };
      f177.prototype.xh = function (p1015) {
        this.wh.push(p1015);
        this.yh();
      };
      f177.prototype.Ia = function () {
        if (!f115().p.W()) {
          return f133([32, 33, 34, 35]);
        }
        for (var v896 = f115().p.Ac(), vA26 = [], vLN0145 = 0; vLN0145 < v896.skinArrayDict.length; vLN0145++) {
          var v897 = v896.skinArrayDict[vLN0145];
          if (this.Ja(v897.id, vF116.ia)) {
            vA26.push(v897);
          }
        }
        if (vA26.length === 0) {
          return 0;
        } else {
          return vA26[parseInt(vA26.length * Math.random())].id;
        }
      };
      f177.prototype.zh = function () {
        if (f115().p.W) {
          var v898 = f115().p.Ac().skinArrayDict;
          var vF179 = f179(v898, this.rh);
          if (!(vF179 < 0)) {
            for (var v899 = vF179 + 1; v899 < v898.length; v899++) {
              if (this.Ja(v898[v899].id, vF116.ia)) {
                this.rh = v898[v899].id;
                this.yh();
                return;
              }
            }
            for (var vLN0146 = 0; vLN0146 < vF179; vLN0146++) {
              if (this.Ja(v898[vLN0146].id, vF116.ia)) {
                this.rh = v898[vLN0146].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f177.prototype.Ah = function () {
        if (f115().p.W) {
          var v900 = f115().p.Ac().skinArrayDict;
          var vF1792 = f179(v900, this.rh);
          if (!(vF1792 < 0)) {
            for (var v901 = vF1792 - 1; v901 >= 0; v901--) {
              if (this.Ja(v900[v901].id, vF116.ia)) {
                this.rh = v900[v901].id;
                this.yh();
                return;
              }
            }
            for (var v902 = v900.length - 1; v902 > vF1792; v902--) {
              if (this.Ja(v900[v902].id, vF116.ia)) {
                this.rh = v900[v902].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f177.prototype.Bh = function (p1016, p1017) {
        if (!f115().p.W() || this.Ja(p1016, p1017)) {
          switch (p1017) {
            case vF116.ia:
              if (this.rh != p1016) {
                this.rh = p1016;
                this.yh();
              }
              return;
            case vF116.ja:
              if (this.sh != p1016) {
                this.sh = p1016;
                this.yh();
              }
              return;
            case vF116.ka:
              if (this.th != p1016) {
                this.th = p1016;
                this.yh();
              }
              return;
            case vF116.la:
              if (this.uh != p1016) {
                this.uh = p1016;
                this.yh();
              }
              return;
            case vF116.ma:
              if (this.vh != p1016) {
                this.vh = p1016;
                this.yh();
              }
              return;
          }
        }
      };
      f177.prototype.Ja = function (p1018, p1019) {
        var vF178 = f178(p1018, p1019);
        return vF178 != null && (f115().u.P() ? vF178.price == 0 && !vF178.nonbuyable || f115().u.Ch(p1018, p1019) : vF178.guest);
      };
      f177.prototype.yh = function () {
        for (var vLN0147 = 0; vLN0147 < this.wh.length; vLN0147++) {
          this.wh[vLN0147]();
        }
      };
      return f177;
    }();
    var vF116 = function () {
      function f180() {}
      f180.ia = "SKIN";
      f180.ja = "EYES";
      f180.ka = "MOUTH";
      f180.la = "GLASSES";
      f180.ma = "HAT";
      return f180;
    }();
    var vF117 = function () {
      function f181(p1020, p1021, p1022, p1023, p1024, p1025, p1026, p1027, p1028) {
        this.Hc = new vF81._b(p1020, new vF81.dc(p1021, p1022, p1023, p1024));
        this.Dh = p1021;
        this.Eh = p1022;
        this.Fh = p1023;
        this.Gh = p1024;
        this.Hh = p1025 || (p1027 || p1023) / 2;
        this.Ih = p1026 || (p1028 || p1024) / 2;
        this.Jh = p1027 || p1023;
        this.Kh = p1028 || p1024;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f181;
    }();
    var vF119 = function () {
      function f182() {
        this.fn_o = f183;
        this.Fe = new vF81._b(vF81.$b.from("/images/bg-obstacle.png"));
        var v903 = vF81.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128)), new vF81._b(v903, new vF81.dc(0, 0, 128, 128))];
        this.Cf = new vF81._b(f183());
        this.Df = new vF81._b(function () {
          var v904 = vF81.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v904.wrapMode = vF81.kc.lc;
          return v904;
        }());
        this.Af = new vF81._b(vF81.$b.from("/images/lens.png"));
        var v905 = vF81.$b.from("/images/wear-ability.png");
        var v906 = vF81.$b.from("https://i.imgur.com/st7wlKO.png");
        var v907 = vF81.$b.from("https://i.imgur.com/st7wlKO.png");
        var v908 = vF81.$b.from("https://i.imgur.com/ub4ed3R.png");
        this.Id_mobileguia = new vF117(v908, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF117(v906, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF117(v907, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF117(v905, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF117(v905, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Rh = new vF117(v905, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        this.Ug = function () {
          var v909 = window.document.createElement("canvas");
          v909.width = 80;
          v909.height = 80;
          return {
            te: v909,
            Tg: v909.getContext("2d"),
            Hc: new vF81._b(vF81.$b.from(v909))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f183(p1029) {
        var v910 = vF81.$b.from(p1029 || "https://i.imgur.com/8ubx4RA.png");
        v910.wrapMode = vF81.kc.lc;
        return v910;
      }
      f182.prototype.a = function (p1030) {
        function f184() {
          if (--vLN43 == 0) {
            p1030();
          }
        }
        var vLN43 = 4;
        this.Bd = {};
        f184();
        this.yd = {};
        f184();
        this.Sh = [];
        f184();
        this.Th = null;
        f184();
      };
      return f182;
    }();
    var vF120 = function () {
      function f185() {
        this.H = new vF136();
        this.F = new vF138();
        this.Uh = new vF153();
        this.Vh = new vF154();
        this.Wh = new vF143();
        this.Xh = new vF144();
        this.Yh = new vF146();
        this.Zh = new vF145();
        this.xa = new vF147();
        this.$h = new vF148();
        this._h = new vF150();
        this.ai = new vF151();
        this.aa = new vF140();
        this.ua = new vF137();
        this.pa = new vF139();
        this.bi = [];
        this.ci = null;
      }
      function f186(p1031, p1032) {
        if (p1032 != 0) {
          var v911 = p1031[p1032];
          f130(p1031, 0, 1, p1032);
          p1031[0] = v911;
        }
      }
      function f187(p1033, p1034) {
        if (p1034 != p1033.length + 1) {
          var v912 = p1033[p1034];
          f130(p1033, p1034 + 1, p1034, p1033.length - p1034 - 1);
          p1033[p1033.length - 1] = v912;
        }
      }
      function f188(p1035, p1036) {
        for (var vLN0148 = 0; vLN0148 < p1035.length; vLN0148++) {
          if (p1035[vLN0148] == p1036) {
            return vLN0148;
          }
        }
        return -1;
      }
      f185.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN0149 = 0; vLN0149 < this.bi.length; vLN0149++) {
          this.bi[vLN0149].a();
        }
        this.ci = new vF88(vF134.di);
      };
      f185.prototype.Qa = function (p1037, p1038) {
        for (var v913 = this.bi.length - 1; v913 >= 0; v913--) {
          this.bi[v913].Pa(p1037, p1038);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p1037, p1038);
        }
      };
      f185.prototype.Ra = function () {
        for (var v914 = this.bi.length - 1; v914 >= 0; v914--) {
          this.bi[v914].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f185.prototype.I = function (p1039) {
        var vF188 = f188(this.bi, p1039);
        if (!(vF188 < 0)) {
          this.bi[0].ei();
          f186(this.bi, vF188);
          this.fi();
        }
      };
      f185.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f187(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f185.prototype.fi = function () {
        var v915 = this.bi[0];
        v915.ii();
        v915.ji();
        this.ki();
      };
      f185.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f185.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f185;
    }();
    var vF121 = function () {
      function f189() {
        this.ag = [];
        this.$f = [];
      }
      f189.Vg = function (p1040, p1041) {
        return {
          bg: p1040,
          M: p1041
        };
      };
      f189.Wg = function (p1042, p1043) {
        return {
          _f: p1042,
          M: p1043
        };
      };
      return f189;
    }();
    var vF122 = function () {
      function f190() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest2;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest2 = "guest";
      f190.prototype.a = function () {
        this.vi();
      };
      f190.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f190.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f190.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f190.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma2;
        }
      };
      f190.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f190.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f190.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f190.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f190.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f190.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f190.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f190.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f190.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f190.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f190.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f190.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f190.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f190.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f190.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f190.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f190.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f190.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f190.prototype.V = function (p1044) {
        this.ni.push(p1044);
        p1044();
      };
      f190.prototype.Pi = function (p1045) {
        this.oi.push(p1045);
        p1045();
      };
      f190.prototype.Qi = function (p1046) {
        this.pi.push(p1046);
      };
      f190.prototype.Ch = function (p1047, p1048) {
        var v916 = this.si.propertyList.concat(vO16.pL || []);
        if (!v916) {
          return false;
        }
        for (var vLN0150 = 0; vLN0150 < v916.length; vLN0150++) {
          var v917 = v916[vLN0150];
          if (v917.id == p1047 && v917.type === p1048) {
            return true;
          }
        }
        return false;
      };
      f190.prototype.P = function () {
        return this.qi;
      };
      f190.prototype.ea = function () {
        return this.ri;
      };
      f190.prototype.Q = function (p1049) {
        var vThis44 = this;
        if (this.qi) {
          this.Ri(function (p1050) {
            if (p1050) {
              var v918 = vThis44.zi();
              var v919 = vThis44.Ai();
              vThis44.si = p1050;
              f208(vThis44.si);
              vThis44.Si();
              var v920 = vThis44.zi();
              var v921 = vThis44.Ai();
              if (v921 > 1 && v921 != v919) {
                f115().s.aa.Ti(new vF157(v921));
              }
              var v922 = v920 - v918;
              if (v922 >= 20) {
                f115().s.aa.Ti(new vF156(v922));
              }
            }
            if (p1049) {
              p1049();
            }
          });
        }
      };
      f190.prototype.Ri = function (p1051) {
        $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/getUserData", function (p1052) {
          p1051(p1052.user_data);
        });
      };
      f190.prototype.Ui = function (p1053, p1054, p1055) {
        var vThis45 = this;
        $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p1053 + "&type=" + p1054, function (p1056) {
          if (p1056.code == 1200) {
            vThis45.Q(p1055);
          } else {
            p1055();
          }
        }).fail(function () {
          p1055();
        });
      };
      f190.prototype.Vi = function () {
        var vThis46 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p1057) {
          if (p1057.status === "connected") {
            if (p1057.authResponse && p1057.authResponse.accessToken) {
              vThis46.Yi("facebook", "fb_" + p1057.authResponse.accessToken);
            } else {
              vThis46.Xi();
            }
            return;
          }
          FB.login(function (p1058) {
            if (p1058.status === "connected" && p1058.authResponse && p1058.authResponse.accessToken) {
              vThis46.Yi("facebook", "fb_" + p1058.authResponse.accessToken);
            } else {
              vThis46.Xi();
            }
          });
        });
      };
      f190.prototype.Zi = function () {
        var vThis47 = this;
        this.Wi();
        if (v595 === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        v595.then(function () {
          console.log("gsi:then");
          if (v595.isSignedIn.get()) {
            console.log("gsi:sil");
            var v923 = v595.currentUser.get();
            vThis47.Yi("google", "gg_" + v923.getAuthResponse().id_token);
            return;
          }
          v595.signIn().then(function (p1059) {
            if (p1059.error !== undefined) {
              console.log("gsi:e: " + p1059.error);
              vThis47.Xi();
              return;
            } else if (p1059.isSignedIn()) {
              console.log("gsi:s");
              vThis47.Yi("google", "gg_" + p1059.getAuthResponse().id_token);
              return;
            } else {
              console.log("gsi:c");
              vThis47.Xi();
              return;
            }
          });
        });
      };
      f190.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var v924 = this.ri;
        var v925 = this.ti;
        this.qi = false;
        this.ri = vLSGuest2;
        this.si = {};
        this.ti = null;
        f117(vF89.Oe, "", 60);
        switch (v925) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v924 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f190.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/deleteAccount", function (p1060) {
            if (p1060.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f190.prototype.vi = function () {
        console.log("rs");
        var vF1162 = f116(vF89.Oe);
        var vThis48 = this;
        if (vF1162 == "facebook") {
          console.log("rs:fb");
          (function f191() {
            if (typeof FB != "undefined") {
              vThis48.Vi();
            } else {
              setTimeout(f191, 100);
            }
          })();
        } else if (vF1162 == "google") {
          console.log("rs:gg");
          (function f192() {
            if (v595 !== undefined) {
              vThis48.Zi();
            } else {
              setTimeout(f192, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f190.prototype.aj = function () {
        var vLN0151 = 0;
        for (; vLN0151 < this.ni.length; vLN0151++) {
          this.ni[vLN0151]();
        }
        this.Si();
      };
      f190.prototype.Si = function () {
        var vLN0152 = 0;
        for (; vLN0152 < this.oi.length; vLN0152++) {
          this.oi[vLN0152]();
        }
        var v926 = this.pi;
        this.pi = [];
        var vLN0153 = 0;
        for (; vLN0153 < v926.length; vLN0153++) {
          v926[vLN0153]();
        }
      };
      f190.prototype.Yi = function (p1061, p1062) {
        var vThis49 = this;
        var vLN0154 = 0;
        var v927 = localStorage.getItem("token__gg");
        if (v927) {
          console.log("Using the stored token:", v927);
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + v927 + "/login", function (p1063) {
            if (p1063 && p1063.code === 1485 && p1063.error === "expired_token") {
              vLN0154++;
              console.log("auto login attempt:", vLN0154);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Global : " + vLN0154 + "</h2>");
              f193();
            } else {
              f194(p1063);
            }
          }).fail(function () {
            f193();
          });
        } else {
          f193();
        }
        function f193() {
          console.log("Fetching a new token...");
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + p1062 + "/login", function (p1064) {
            if (p1064 && p1064.code === 1485 && p1064.error === "expired_token") {
              vLN0154++;
              console.log("auto login attempt:", vLN0154);
              $("#login-view").html("<h2>Auto Login Google Wormate Friends Conncet : " + vLN0154 + "</h2>");
              f193();
            } else {
              f194(p1064);
            }
          }).fail(function () {
            vThis49.Xi();
          });
        }
        function f194(p1065) {
          if (p1065 && p1065.user_data) {
            f208(p1065.user_data);
            var v928 = this.ri;
            vThis49.qi = true;
            vThis49.ri = p1062;
            vThis49.si = p1065.user_data;
            vO16.FB_UserID = p1065.user_data.userId;
            vThis49.ti = p1061;
            f117(vF89.Oe, vThis49.ti, 60);
            f209();
            for (var vLN0155 = 0; vLN0155 < vO17.clientesActivos.length; vLN0155++) {
              var v929 = vO17.clientesActivos[vLN0155].cliente_NOMBRE;
              var v930 = vO17.clientesActivos[vLN0155].cliente_ID;
              var v931 = vO17.clientesActivos[vLN0155].Client_VisibleSkin;
              var v932 = vO17.clientesActivos[vLN0155].Client_VisibleSkin1;
              var v933 = vO17.clientesActivos[vLN0155].Client_VisibleSkin2;
              var v934 = vO17.clientesActivos[vLN0155].Client_VisibleSkin3;
              var v935 = vO17.clientesActivos[vLN0155].Client_VisibleSkin4;
              var v936 = vO17.clientesActivos[vLN0155].Client_VisibleSkin5;
              var v937 = vO17.clientesActivos[vLN0155].Client_VisibleSkin6;
              var v938 = vO17.clientesActivos[vLN0155].Client_VisibleSkin7;
              var v939 = vO17.clientesActivos[vLN0155].Client_VisibleSkin8;
              var v940 = vO17.clientesActivos[vLN0155].Client_VisibleSkin9;
              var v941 = vO17.clientesActivos[vLN0155].Client_VisibleSkin10;
              var v942 = vO17.clientesActivos[vLN0155].Client_VisibleSkin11;
              var v943 = vO17.clientesActivos[vLN0155].Client_VisibleSkin12;
              var v944 = vO17.clientesActivos[vLN0155].Client_VisibleSkin13;
              var v945 = vO17.clientesActivos[vLN0155].Client_VisibleSkin14;
              var v946 = vO17.clientesActivos[vLN0155].Client_VisibleSkin15;
              var v947 = vO17.clientesActivos[vLN0155].Client_VisibleSkin16;
              var v948 = vO17.clientesActivos[vLN0155].Client_VisibleSkin17;
              var v949 = vO17.clientesActivos[vLN0155].Client_VisibleSkin18;
              var v950 = vO17.clientesActivos[vLN0155].Client_VisibleSkin19;
              var v951 = vO17.clientesActivos[vLN0155].Client_VisibleSkin20;
              var v952 = vO17.clientesActivos[vLN0155].Client_KeyAccecs;
              var v953 = vO17.clientesActivos[vLN0155].cliente_DateExpired;
              if (vO16.FB_UserID == 0) {} else if (vO16.FB_UserID == v930) {
                $(".column-left").append("<div class='het-han'> Aktivasyon SÃ¼resi : " + v953 + "</div>");
                f211();
                f210();
              } else {}
            }
            vO16.loading = false;
            if (v928 !== p1062) {
              vThis49.aj();
            } else {
              vThis49.Si();
            }
            localStorage.setItem("token__gg", p1062);
          } else {
            vThis49.Xi();
          }
        }
      };
      f190.prototype.Xi = function () {
        this.Wi();
      };
      f190.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f190.prototype._i = function () {
        console.log("lo:gg");
        v595.signOut();
      };
      return f190;
    }();
    var vF124 = function () {
      function f195() {
        this.cj = {};
        this.cj[v957] = [1, 0.5, 0.25, 0.5];
        this.cj[v958] = vF81._b.WHITE;
        this.cj[v959] = [0, 0];
        this.cj[v960] = [0, 0];
        var v954 = vF81.cc.from(v963, v964, this.cj);
        this.zf = new vF81.hc(v962, v954);
      }
      var v955 = "a1_" + f134();
      var v956 = "a2_" + f134();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v957 = "u3_" + f134();
      var v958 = "u4_" + f134();
      var v959 = "u5_" + f134();
      var v960 = "u6_" + f134();
      var v961 = "v1_" + f134();
      var v962 = new vF81.gc().addAttribute(v955, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v956, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v963 = "precision mediump float;attribute vec2 " + v955 + ";attribute vec2 " + v956 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v961 + ";void main(){" + v961 + "=" + v956 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v955 + ",1.0)).xy,0.0,1.0);}";
      var v964 = "precision highp float;varying vec2 " + v961 + ";uniform vec4 " + v957 + ";uniform sampler2D " + v958 + ";uniform vec2 " + v959 + ";uniform vec2 " + v960 + ";void main(){vec2 coord=" + v961 + "*" + v959 + "+" + v960 + ";vec4 v_color_mix=" + v957 + ";gl_FragColor=texture2D(" + v958 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f195.prototype.Hf = function (p1066, p1067, p1068, p1069) {
        var v965 = this.cj[v957];
        v965[0] = p1066;
        v965[1] = p1067;
        v965[2] = p1068;
        v965[3] = p1069;
      };
      f195.prototype.Bf = function (p1070) {
        this.cj[v958] = p1070;
      };
      f195.prototype.Te = function (p1071, p1072, p1073, p1074) {
        this.zf.position.x = p1071;
        this.zf.position.y = p1072;
        this.zf.scale.x = p1073;
        this.zf.scale.y = p1074;
        var v966 = this.cj[v959];
        v966[0] = p1073 * 0.2520615384615385;
        v966[1] = p1074 * 0.4357063736263738;
        var v967 = this.cj[v960];
        v967[0] = p1071 * 0.2520615384615385;
        v967[1] = p1072 * 0.4357063736263738;
      };
      return f195;
    }();
    var vF125 = function () {
      function f196() {
        this.jh = new vF81.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f196.prototype.kh = function (p1075) {
        this.jh.texture = p1075.Hc;
        this.jh.anchor.set(p1075.Lh, p1075.Mh);
        this.dj = p1075.Nh;
        this.ej = p1075.Oh;
      };
      f196.prototype.oh = function (p1076) {
        this.jh.width = p1076 * this.dj;
        this.jh.height = p1076 * this.ej;
      };
      f196.prototype.fj = function (p1077) {
        this.jh.rotation = p1077;
      };
      f196.prototype.nh = function (p1078, p1079) {
        this.jh.position.set(p1078, p1079);
      };
      f196.prototype.Mg = function (p1080) {
        this.jh.visible = p1080;
      };
      f196.prototype.gj = function () {
        return this.jh.visible;
      };
      f196.prototype.qh = function (p1081) {
        this.jh.alpha = p1081;
      };
      f196.prototype.Mf = function () {
        return this.jh;
      };
      f196.prototype.ih = function () {
        f132(this.jh);
      };
      return f196;
    }();
    var vF127 = function () {
      function f197(p1082) {
        this.fb = p1082;
        this.Mb = new vF127.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(vLN2002 * 2);
        this.mj = new Float32Array(vLN2002 * 2);
        this.nj = new Float32Array(vLN2002 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var vLN2002 = 200;
      f197.prototype.Kb = function () {
        if (this.pj != null) {
          f132(this.pj.Rf);
        }
        if (this.qj != null) {
          f132(this.qj);
        }
      };
      f197.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f197.prototype.Fg = function (p1083) {
        this.Mb = p1083;
        this.rj(this.Hb);
      };
      f197.prototype.Mg = function (p1084) {
        var v968 = this.Hb;
        this.Hb = p1084;
        this.rj(v968);
      };
      f197.prototype.Ig = function (p1085) {
        this.M = p1085 * 50;
        var vP1085 = p1085;
        if (p1085 > this.fb.cf) {
          vP1085 = Math.atan((p1085 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v969 = Math.sqrt(Math.pow(vP1085 * 5, 0.707106781186548) * 4 + 25);
        var v970 = Math.min(vLN2002, Math.max(3, (v969 - 5) * 5 + 1));
        var v971 = this.kj;
        this.Db = (5 + v969 * 0.9) * 0.025;
        this.kj = Math.floor(v970);
        this.ij = v970 - this.kj;
        if (v971 > 0 && v971 < this.kj) {
          var v972 = this.lj[v971 * 2 - 2];
          var v973 = this.lj[v971 * 2 - 1];
          var v974 = this.mj[v971 * 2 - 2];
          var v975 = this.mj[v971 * 2 - 1];
          var v976 = this.nj[v971 * 2 - 2];
          var v977 = this.nj[v971 * 2 - 1];
          for (var vV971 = v971; vV971 < this.kj; vV971++) {
            this.lj[vV971 * 2] = v972;
            this.lj[vV971 * 2 + 1] = v973;
            this.mj[vV971 * 2] = v974;
            this.mj[vV971 * 2 + 1] = v975;
            this.nj[vV971 * 2] = v976;
            this.nj[vV971 * 2 + 1] = v977;
          }
        }
      };
      f197.prototype.Lg = function (p1086, p1087) {
        this.kj = p1087;
        for (var vLN0156 = 0; vLN0156 < this.kj; vLN0156++) {
          this.lj[vLN0156 * 2] = this.mj[vLN0156 * 2] = this.nj[vLN0156 * 2] = p1086();
          this.lj[vLN0156 * 2 + 1] = this.mj[vLN0156 * 2 + 1] = this.nj[vLN0156 * 2 + 1] = p1086();
        }
      };
      f197.prototype.Kg = function (p1088, p1089, p1090) {
        this.hj = p1090;
        for (var vLN0157 = 0; vLN0157 < this.kj; vLN0157++) {
          this.lj[vLN0157 * 2] = this.mj[vLN0157 * 2];
          this.lj[vLN0157 * 2 + 1] = this.mj[vLN0157 * 2 + 1];
        }
        var v978 = p1088 - this.mj[0];
        var v979 = p1089 - this.mj[1];
        this.sj(v978, v979, this.kj, this.mj);
      };
      f197.prototype.sj = function (p1091, p1092, p1093, p1094) {
        var v980 = Math.hypot(p1091, p1092);
        if (!(v980 <= 0)) {
          var v981 = p1094[0];
          var vUndefined36 = undefined;
          p1094[0] += p1091;
          var v982 = p1094[1];
          var vUndefined37 = undefined;
          p1094[1] += p1092;
          var v983 = this.Db / (this.Db + v980);
          var v984 = 1 - v983 * 2;
          for (var vLN16 = 1, v985 = p1093 - 1; vLN16 < v985; vLN16++) {
            vUndefined36 = p1094[vLN16 * 2];
            p1094[vLN16 * 2] = p1094[vLN16 * 2 - 2] * v984 + (vUndefined36 + v981) * v983;
            v981 = vUndefined36;
            vUndefined37 = p1094[vLN16 * 2 + 1];
            p1094[vLN16 * 2 + 1] = p1094[vLN16 * 2 - 1] * v984 + (vUndefined37 + v982) * v983;
            v982 = vUndefined37;
          }
          v983 = this.ij * this.Db / (this.ij * this.Db + v980);
          v984 = 1 - v983 * 2;
          p1094[p1093 * 2 - 2] = p1094[p1093 * 2 - 4] * v984 + (p1094[p1093 * 2 - 2] + v981) * v983;
          p1094[p1093 * 2 - 1] = p1094[p1093 * 2 - 3] * v984 + (p1094[p1093 * 2 - 1] + v982) * v983;
        }
      };
      f197.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f197.prototype.Hg = function (p1095, p1096) {
        var vLN10000002 = 1000000;
        var vP1095 = p1095;
        var vP1096 = p1096;
        for (var vLN0158 = 0; vLN0158 < this.kj; vLN0158++) {
          var v986 = this.nj[vLN0158 * 2];
          var v987 = this.nj[vLN0158 * 2 + 1];
          var v988 = Math.hypot(p1095 - v986, p1096 - v987);
          if (v988 < vLN10000002) {
            vLN10000002 = v988;
            vP1095 = v986;
            vP1096 = v987;
          }
        }
        return {
          x: vP1095,
          y: vP1096,
          distance: vLN10000002
        };
      };
      f197.prototype.vb = function (p1097) {
        this.oj = p1097;
      };
      f197.prototype.Fb = function (p1098, p1099) {
        this.Jb = f127(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p1098 / 400 * Math.PI) * 0.1 : 1 : 0, p1099, 1 / 800);
        this.jj = f127(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p1099, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f197.prototype.Gb = function (p1100, p1101, p1102, p1103) {
        if (this.Hb && this.Ib) {
          var v989 = Math.pow(0.11112, p1101 / 95);
          for (var vLN0159 = 0; vLN0159 < this.kj; vLN0159++) {
            var vF129 = f129(this.lj[vLN0159 * 2], this.mj[vLN0159 * 2], p1102);
            var vF1292 = f129(this.lj[vLN0159 * 2 + 1], this.mj[vLN0159 * 2 + 1], p1102);
            this.nj[vLN0159 * 2] = f129(vF129, this.nj[vLN0159 * 2], v989);
            this.nj[vLN0159 * 2 + 1] = f129(vF1292, this.nj[vLN0159 * 2 + 1], v989);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p1100, p1101, p1103);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f197.prototype.rj = function (p1104) {
        if (this.Hb) {
          if (!p1104) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f132(this.pj.Rf);
          }
          if (this.qj != null) {
            f132(this.qj);
          }
        }
      };
      f197.prototype.uj = function () {
        var vF1155 = f115();
        if (this.pj == null) {
          this.pj = new vF130();
        } else {
          f132(this.pj.Rf);
        }
        this.pj.hh(vF1155.o.fb.af, vF1155.p.Dc().ed(this.Mb.cg), vF1155.p.Dc().dd(this.Mb.dg), vF1155.p.Dc().fd(this.Mb.Bg), vF1155.p.Dc().gd(this.Mb.Cg), vF1155.p.Dc().hd(this.Mb.Dg), vF1155.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF128("");
          this.qj.style.fontFamily = "vuonghiep";
          this.qj.anchor.set(0.5);
        } else {
          f132(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF1155.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f197.Config = function () {
        function f198() {
          this.Lb = 0;
          this.cg = vF99.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f198;
      }();
      return f197;
    }();
    var vF128 = function () {
      return f123(vF81.fc, function (p1105, p1106, p1107) {
        vF81.fc.call(this, p1105, p1106, p1107);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF130 = function () {
      function f199() {
        this.Rf = new vF81.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF131();
        this.vj.zIndex = vLN00012 * ((vLN7972 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN7972);
        this.xj[0] = this.yj(0, new vF125(), new vF125());
        for (var vLN17 = 1; vLN17 < vLN7972; vLN17++) {
          this.xj[vLN17] = this.yj(vLN17, new vF125(), new vF125());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN00012 = 0.001;
      var vLN7972 = 797;
      var v990 = Math.PI * 0.1;
      var v991 = -0.06640625;
      var vLN0843752 = 0.84375;
      var vLN025781252 = 0.2578125;
      var v992 = -0.03515625;
      var v993 = -0.0625;
      var vLN056252 = 0.5625;
      var v994 = v991 * 3 + vLN0843752;
      var v995 = vLN025781252 - v991 * 3;
      var v996 = v991 + v992;
      var vLN03752 = 0.375;
      var vLN0752 = 0.75;
      var v997 = v993 + v993;
      var v998 = v992 * 3 + vLN025781252;
      var v999 = vLN0843752 - v992 * 3;
      var v1000 = v992 + v991;
      f199.prototype.yj = function (p1108, p1109, p1110) {
        var v1001 = new vF132(p1109, p1110);
        p1109.jh.zIndex = vLN00012 * ((vLN7972 - p1108) * 2 + 1 + 3);
        p1110.jh.zIndex = vLN00012 * ((vLN7972 - p1108) * 2 - 2 + 3);
        return v1001;
      };
      f199.prototype.hh = function (p1111, p1112, p1113, p1114, p1115, p1116, p1117) {
        var v1002 = p1113.Zc;
        var v1003 = p1111 == vO29._e ? p1112.bd.$c : p1113.$c;
        if (v1002.length > 0 && v1003.length > 0) {
          for (var vLN0160 = 0; vLN0160 < this.xj.length; vLN0160++) {
            this.xj[vLN0160].Nf.kh(v1002[vLN0160 % v1002.length]);
            this.xj[vLN0160].Pf.kh(v1003[vLN0160 % v1003.length]);
          }
        }
        this.vj.hh(p1114, p1115, p1116, p1117);
      };
      var vF131 = function () {
        var vF1235 = f123(vF81.Zb, function () {
          vF81.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF81.Zb();
          this.Hj = [];
          for (var vLN0161 = 0; vLN0161 < 4; vLN0161++) {
            var v1004 = new vF125();
            v1004.kh(f115().q.Ph);
            this.Gj.addChild(v1004.jh);
            this.Hj.push(v1004);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF125();
          this.Jj.kh(f115().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF125();
          this.xEmojiType_headshot.kh(f115().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF125();
          this.xEmojiType_kill.kh(f115().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF125();
          this.guia_mobile.kh(f115().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
        });
        vF1235.prototype.hh = function (p1118, p1119, p1120, p1121) {
          this.Lj(0.002, this.Cj, p1118.Zc);
          this.Lj(0.003, this.Dj, p1119.Zc);
          this.Lj(0.004, this.Fj, p1121.Zc);
          this.Lj(0.005, this.Ej, p1120.Zc);
        };
        vF1235.prototype.Lj = function (p1122, p1123, p1124) {
          while (p1124.length > p1123.length) {
            var v1005 = new vF125();
            p1123.push(v1005);
            this.addChild(v1005.Mf());
          }
          while (p1124.length < p1123.length) {
            p1123.pop().ih();
          }
          var vP1122 = p1122;
          for (var vLN0162 = 0; vLN0162 < p1124.length; vLN0162++) {
            vP1122 += 0.0001;
            var v1006 = p1123[vLN0162];
            v1006.kh(p1124[vLN0162]);
            v1006.jh.zIndex = vP1122;
          }
        };
        vF1235.prototype.mh = function (p1125, p1126, p1127, p1128) {
          this.visible = true;
          this.position.set(p1125, p1126);
          this.rotation = p1128;
          for (var vLN0163 = 0; vLN0163 < this.Cj.length; vLN0163++) {
            this.Cj[vLN0163].oh(p1127);
          }
          for (var vLN0164 = 0; vLN0164 < this.Dj.length; vLN0164++) {
            this.Dj[vLN0164].oh(p1127);
          }
          for (var vLN0165 = 0; vLN0165 < this.Ej.length; vLN0165++) {
            this.Ej[vLN0165].oh(p1127);
          }
          for (var vLN0166 = 0; vLN0166 < this.Fj.length; vLN0166++) {
            this.Fj[vLN0166].oh(p1127);
          }
        };
        vF1235.prototype.lh = function () {
          this.visible = false;
        };
        vF1235.prototype.Mj = function (p1129, p1130, p1131, p1132) {
          this.Gj.visible = true;
          var v1007 = p1131 / 1000;
          var v1008 = 1 / this.Hj.length;
          for (var vLN0167 = 0; vLN0167 < this.Hj.length; vLN0167++) {
            var v1009 = 1 - (v1007 + v1008 * vLN0167) % 1;
            this.Hj[vLN0167].jh.alpha = 1 - v1009;
            this.Hj[vLN0167].oh(p1130 * (0.5 + v1009 * 4.5));
          }
        };
        vF1235.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF1235.prototype.Nj = function (p1133, p1134, p1135, p1136) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f127(this.Jj.jh.alpha, p1133.hj ? 0.9 : 0.2, p1136, 0.0025);
          this.Jj.oh(p1134);
        };
        vF1235.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF1235.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF1235.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF1235.prototype.Rx = function (p1137, p1138, p1139, p1140) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p1138);
        };
        vF1235.prototype.Njh = function (p1141, p1142, p1143, p1144) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p1142);
        };
        vF1235.prototype.Njk = function (p1145, p1146, p1147, p1148) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p1146);
        };
        return vF1235;
      }();
      f199.prototype.Oj = function (p1149) {
        return this.Aj + this.Bj * Math.sin(p1149 * v990 - this.zj);
      };
      f199.prototype.tj = function (p1150, p1151, p1152, p1153) {
        var v1010 = p1150.Db * 2;
        var v1011 = p1150.nj;
        var v1012 = p1150.kj;
        var v1013 = v1012 * 4 - 3;
        var vV1013 = v1013;
        this.zj = p1151 / 400 * Math.PI;
        this.Aj = v1010 * 1.5;
        this.Bj = v1010 * 0.15 * p1150.jj;
        var vUndefined38 = undefined;
        var vUndefined39 = undefined;
        var vUndefined40 = undefined;
        var vUndefined41 = undefined;
        var vUndefined42 = undefined;
        var vUndefined43 = undefined;
        var vUndefined44 = undefined;
        var vUndefined45 = undefined;
        vUndefined39 = v1011[0];
        vUndefined43 = v1011[1];
        if (p1153(vUndefined39, vUndefined43)) {
          vUndefined40 = v1011[2];
          vUndefined44 = v1011[3];
          vUndefined41 = v1011[4];
          vUndefined45 = v1011[5];
          var v1014 = Math.atan2(vUndefined45 + vUndefined43 * 2 - vUndefined44 * 3, vUndefined41 + vUndefined39 * 2 - vUndefined40 * 3);
          this.vj.mh(vUndefined39, vUndefined43, v1010, v1014);
          this.xj[0].mh(vUndefined39, vUndefined43, v1010, this.Oj(0), v1014);
          this.xj[1].mh(v994 * vUndefined39 + v995 * vUndefined40 + v996 * vUndefined41, v994 * vUndefined43 + v995 * vUndefined44 + v996 * vUndefined45, v1010, this.Oj(1), vF132.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN03752 * vUndefined39 + vLN0752 * vUndefined40 + v997 * vUndefined41, vLN03752 * vUndefined43 + vLN0752 * vUndefined44 + v997 * vUndefined45, v1010, this.Oj(2), vF132.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v998 * vUndefined39 + v999 * vUndefined40 + v1000 * vUndefined41, v998 * vUndefined43 + v999 * vUndefined44 + v1000 * vUndefined45, v1010, this.Oj(3), vF132.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN44 = 4;
        for (var vLN22 = 2, v1015 = v1012 * 2 - 4; vLN22 < v1015; vLN22 += 2) {
          vUndefined39 = v1011[vLN22];
          vUndefined43 = v1011[vLN22 + 1];
          if (p1153(vUndefined39, vUndefined43)) {
            vUndefined38 = v1011[vLN22 - 2];
            vUndefined42 = v1011[vLN22 - 1];
            vUndefined40 = v1011[vLN22 + 2];
            vUndefined44 = v1011[vLN22 + 3];
            vUndefined41 = v1011[vLN22 + 4];
            vUndefined45 = v1011[vLN22 + 5];
            this.xj[vLN44].mh(vUndefined39, vUndefined43, v1010, this.Oj(vLN44), vF132.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
            this.xj[vLN44].mh(v991 * vUndefined38 + vLN0843752 * vUndefined39 + vLN025781252 * vUndefined40 + v992 * vUndefined41, v991 * vUndefined42 + vLN0843752 * vUndefined43 + vLN025781252 * vUndefined44 + v992 * vUndefined45, v1010, this.Oj(vLN44), vF132.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
            this.xj[vLN44].mh(v993 * vUndefined38 + vLN056252 * vUndefined39 + vLN056252 * vUndefined40 + v993 * vUndefined41, v993 * vUndefined42 + vLN056252 * vUndefined43 + vLN056252 * vUndefined44 + v993 * vUndefined45, v1010, this.Oj(vLN44), vF132.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
            this.xj[vLN44].mh(v992 * vUndefined38 + vLN025781252 * vUndefined39 + vLN0843752 * vUndefined40 + v991 * vUndefined41, v992 * vUndefined42 + vLN025781252 * vUndefined43 + vLN0843752 * vUndefined44 + v991 * vUndefined45, v1010, this.Oj(vLN44), vF132.angleBetween(this.xj[vLN44 - 1], this.xj[vLN44 + 1]));
            vLN44++;
          } else {
            this.xj[vLN44].lh();
            vLN44++;
            this.xj[vLN44].lh();
            vLN44++;
            this.xj[vLN44].lh();
            vLN44++;
            this.xj[vLN44].lh();
            vLN44++;
          }
        }
        vUndefined39 = v1011[v1012 * 2 - 4];
        vUndefined43 = v1011[v1012 * 2 - 3];
        if (p1153(vUndefined39, vUndefined43)) {
          vUndefined38 = v1011[v1012 * 2 - 6];
          vUndefined42 = v1011[v1012 * 2 - 5];
          vUndefined40 = v1011[v1012 * 2 - 2];
          vUndefined44 = v1011[v1012 * 2 - 1];
          this.xj[v1013 - 5].mh(vUndefined39, vUndefined43, v1010, this.Oj(v1013 - 5), vF132.angleBetween(this.xj[v1013 - 6], this.xj[v1013 - 4]));
          this.xj[v1013 - 4].mh(v1000 * vUndefined38 + v999 * vUndefined39 + v998 * vUndefined40, v1000 * vUndefined42 + v999 * vUndefined43 + v998 * vUndefined44, v1010, this.Oj(v1013 - 4), vF132.angleBetween(this.xj[v1013 - 5], this.xj[v1013 - 3]));
          this.xj[v1013 - 3].mh(v997 * vUndefined38 + vLN0752 * vUndefined39 + vLN03752 * vUndefined40, v997 * vUndefined42 + vLN0752 * vUndefined43 + vLN03752 * vUndefined44, v1010, this.Oj(v1013 - 3), vF132.angleBetween(this.xj[v1013 - 4], this.xj[v1013 - 2]));
          this.xj[v1013 - 2].mh(v996 * vUndefined38 + v995 * vUndefined39 + v994 * vUndefined40, v996 * vUndefined42 + v995 * vUndefined43 + v994 * vUndefined44, v1010, this.Oj(v1013 - 2), vF132.angleBetween(this.xj[v1013 - 3], this.xj[v1013 - 1]));
          this.xj[v1013 - 1].mh(vUndefined40, vUndefined44, v1010, this.Oj(v1013 - 1), vF132.angleBetween(this.xj[v1013 - 2], this.xj[v1013 - 1]));
        } else {
          this.xj[v1013 - 5].lh();
          this.xj[v1013 - 4].lh();
          this.xj[v1013 - 3].lh();
          this.xj[v1013 - 2].lh();
          this.xj[v1013 - 1].lh();
        }
        if (this.wj == 0 && vV1013 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV1013 == 0) {
          f132(this.vj);
        }
        while (this.wj < vV1013) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV1013) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v1016 = p1150.Ff[vF83.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v1016 != null && v1016.sc) {
          this.vj.Mj(p1150, v1010, p1151, p1152);
        } else {
          this.vj.Ij();
        }
        var v1017 = p1150.Ff[vF83.VELOCITY_TYPE];
        if (this.xj[0].gj() && v1017 != null && v1017.sc) {
          this.vj.Nj(p1150, v1010, p1151, p1152);
        } else {
          this.vj.Kj();
        }
        if (vO16.emoji_headshot && p1150 && p1150.Mb && p1150.Mb.Mb) {
          this.vj.Njh(p1150, v1010, p1151, p1152);
        } else {
          this.vj.xzs();
        }
        if (vO16.emoji_kill && p1150 && p1150.Mb && p1150.Mb.Mb) {
          this.vj.Njk(p1150, v1010, p1151, p1152);
        } else {
          this.vj.zas();
        }
        if (vO16.mobile && vO16.arrow && p1150 && p1150.Mb && p1150.Mb.Mb) {
          this.vj.Rx(p1150, v1010, p1151, p1152);
        }
      };
      var vF132 = function () {
        function f200(p1154, p1155) {
          this.Nf = p1154;
          this.Nf.Mg(false);
          this.Pf = p1155;
          this.Pf.Mg(false);
        }
        f200.prototype.mh = function (p1156, p1157, p1158, p1159, p1160) {
          this.Nf.Mg(true);
          this.Nf.nh(p1156, p1157);
          this.Nf.oh(p1158);
          this.Nf.fj(p1160);
          this.Pf.Mg(true);
          this.Pf.nh(p1156, p1157);
          this.Pf.oh(p1159);
          this.Pf.fj(p1160);
        };
        f200.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f200.prototype.gj = function () {
          return this.Nf.gj();
        };
        f200.angleBetween = function (p1161, p1162) {
          return Math.atan2(p1161.Nf.jh.position.y - p1162.Nf.jh.position.y, p1161.Nf.jh.position.x - p1162.Nf.jh.position.x);
        };
        return f200;
      }();
      return f199;
    }();
    var vF133 = function () {
      function f201(p1163) {
        this.se = p1163;
        this.te = p1163.get()[0];
        this.ue = new vF81.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF130();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var vThis50 = this;
        f115().p.ca(function () {
          if (f115().p.W()) {
            vThis50.Fb();
          }
        });
      }
      f201.prototype.Fb = function () {
        var vF1156 = f115();
        this.Pj.hh(vO29.$e, null, vF1156.p.Dc().dd(this.rh), vF1156.p.Dc().fd(this.sh), vF1156.p.Dc().gd(this.th), vF1156.p.Dc().hd(this.uh), vF1156.p.Dc().jd(this.vh));
      };
      f201.prototype.Le = function (p1164) {
        this.sc = p1164;
      };
      f201.prototype.ak = function (p1165, p1166, p1167) {
        this.rh = p1165;
        this.Sj = p1166;
        this.Xj = p1167;
        this.Fb();
      };
      f201.prototype.bk = function (p1168, p1169, p1170) {
        this.sh = p1168;
        this.Tj = p1169;
        this.Yj = p1170;
        this.Fb();
      };
      f201.prototype.ck = function (p1171, p1172, p1173) {
        this.th = p1171;
        this.Uj = p1172;
        this.Zj = p1173;
        this.Fb();
      };
      f201.prototype.dk = function (p1174, p1175, p1176) {
        this.uh = p1174;
        this.Vj = p1175;
        this.$j = p1176;
        this.Fb();
      };
      f201.prototype.ek = function (p1177, p1178, p1179) {
        this.vh = p1177;
        this.Wj = p1178;
        this._j = p1179;
        this.Fb();
      };
      f201.prototype.Ra = function () {
        var v1018 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v1018;
        this.te.width = v1018 * this.Qj;
        this.te.height = v1018 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF1252 = f125(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF1252) {
          for (var vVF1252 = vF1252; vVF1252 < this.Pj.xj.length; vVF1252++) {
            this.Pj.xj[vVF1252].lh();
          }
          while (this.Pj.wj < vF1252) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF1252) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f201.prototype.Pa = function () {
        if (this.sc) {
          if (f115().p.W) {
            var v1019 = Date.now();
            var v1020 = v1019 / 200;
            var v1021 = Math.sin(v1020);
            var v1022 = this.Ng;
            var v1023 = this.Ng * 1.5;
            var v1024 = this.Qj - (this.Qj - v1022 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v1025 = this.Rj * 0.5;
            var vLN0168 = 0;
            var vLN0169 = 0;
            for (var v1026 = -1; v1026 < this.Pj.wj; v1026++) {
              var vV1026 = v1026;
              var v1027 = Math.cos(vV1026 * 1 / 12 * Math.PI - v1020) * (1 - Math.pow(16, vV1026 * -1 / 12));
              if (v1026 >= 0) {
                var v1028 = v1024 + v1022 * -0.5 * vV1026;
                var v1029 = v1025 + v1022 * 0.5 * v1027;
                var v1030 = v1022 * 2;
                var v1031 = v1023 * 2;
                var v1032 = Math.atan2(vLN0169 - v1027, vV1026 - vLN0168);
                if (v1026 == 0) {
                  this.Pj.vj.mh(v1028, v1029, v1030, v1032);
                }
                this.Pj.xj[v1026].mh(v1028, v1029, v1030, v1031, v1032);
                var v1033 = this.Sj ? this.Xj ? 0.4 + v1021 * 0.2 : 0.9 + v1021 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v1026].Nf.qh(v1033);
                this.Pj.xj[v1026].Pf.qh(v1033);
              }
              vLN0168 = vV1026;
              vLN0169 = v1027;
            }
            for (var vLN0170 = 0; vLN0170 < this.Pj.vj.Cj.length; vLN0170++) {
              var v1034 = this.Tj ? this.Yj ? 0.4 + v1021 * 0.2 : 0.9 + v1021 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN0170].qh(v1034);
            }
            for (var vLN0171 = 0; vLN0171 < this.Pj.vj.Dj.length; vLN0171++) {
              var v1035 = this.Uj ? this.Zj ? 0.4 + v1021 * 0.2 : 0.9 + v1021 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN0171].qh(v1035);
            }
            for (var vLN0172 = 0; vLN0172 < this.Pj.vj.Ej.length; vLN0172++) {
              var v1036 = this.Vj ? this.$j ? 0.4 + v1021 * 0.2 : 0.9 + v1021 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN0172].qh(v1036);
            }
            for (var vLN0173 = 0; vLN0173 < this.Pj.vj.Fj.length; vLN0173++) {
              var v1037 = this.Wj ? this._j ? 0.4 + v1021 * 0.2 : 0.9 + v1021 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN0173].qh(v1037);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f201;
    }();
    var vF134 = function () {
      function f202(p1180) {
        this.rc = p1180;
      }
      f202.fk = $("#game-view");
      f202.gk = $("#results-view");
      f202.hk = $("#main-menu-view");
      f202.ik = $("#popup-view");
      f202.jk = $("#toaster-view");
      f202.kk = $("#loading-view");
      f202.lk = $("#stretch-box");
      f202.mk = $("#game-canvas");
      f202.di = $("#background-canvas");
      f202.nk = $("#social-buttons");
      f202.ok = $("#markup-wrap");
      f202.prototype.a = function () {};
      f202.prototype.ii = function () {};
      f202.prototype.ji = function () {};
      f202.prototype.ei = function () {};
      f202.prototype.Ra = function () {};
      f202.prototype.Pa = function (p1181, p1182) {};
      return f202;
    }();
    var vF136 = function () {
      function f203(p1183, p1184, p1185, p1186, p1187, p1188) {
        var v1038 = "<div><svg xmlns=\"https://www.tiktok.com/@hayalet69692\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p1183 + "</span></div>";
        var v$113 = $(v1038);
        v$113.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p1184,
              name: p1185,
              caption: p1186,
              description: p1187,
              picture: p1188
            }, function () {});
          }
        });
        return v$113;
      }
      var v$114 = $("#final-caption");
      var v$115 = $("#final-continue");
      var v$116 = $("#congrats-bg");
      var v$117 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$118 = $("#final-share-fb");
      var v$119 = $("#final-message");
      var v$120 = $("#final-score");
      var v$121 = $("#final-place");
      var v$122 = $("#final-board");
      var vF1236 = f123(vF134, function () {
        vF134.call(this, 0);
        var vThis51 = this;
        var vF1157 = f115();
        var v1039 = vF134.mk.get()[0];
        console.log("sSE=" + v1096.qk);
        v$118.toggle(v1096.qk);
        v$114.text(f118("index.game.result.title"));
        v$115.text(f118("index.game.result.continue"));
        v$115.click(function () {
          vF1157.r.Cd();
          vF1157.f.Ma.c();
          vF1157.r.G(vF86.AudioState.F);
          vF1157.s.I(vF1157.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (p1189) {
          if (p1189.keyCode == 32) {
            vThis51.rk = true;
          }
          if (p1189.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p1189.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (vO16.KeyCodeRespawn == p1189.keyCode) {
            vThis51.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
            }, 1000);
          }
        }).keyup(function (p1190) {
          if (p1190.keyCode == 32) {
            vThis51.rk = false;
          }
        });
        v1039.addEventListener("touchmove", function (p1191) {
          if (!vF2() || !vO16.gamePad.checked) {
            if (p1191 = p1191 || window.event) {
              p1191 = p1191.touches[0];
              if (p1191.clientX !== undefined) {
                vThis51.sk = Math.atan2(p1191.clientY - v1039.offsetHeight * 0.5, p1191.clientX - v1039.offsetWidth * 0.5);
              } else {
                vThis51.sk = Math.atan2(p1191.pageY - v1039.offsetHeight * 0.5, p1191.pageX - v1039.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v1039.addEventListener("touchstart", function (p1192) {
          if (p1192 = p1192 || window.event) {
            vThis51.rk = p1192.touches.length >= 2;
          }
          p1192.preventDefault();
        }, true);
        v1039.addEventListener("touchend", function (p1193) {
          if (p1193 = p1193 || window.event) {
            vThis51.rk = p1193.touches.length >= 2;
          }
        }, true);
        v1039.addEventListener("mousemove", function (p1194) {
          if (!v10) {
            if (p1194 = p1194 || window.event && p1194.clientX !== undefined) {
              vThis51.sk = Math.atan2(p1194.clientY - v1039.offsetHeight * 0.5, p1194.clientX - v1039.offsetWidth * 0.5);
            }
          }
        }, true);
        v1039.addEventListener("mousedown", function (p1195) {
          console.log(p1195);
          vThis51.rk = true;
        }, true);
        v1039.addEventListener("mouseup", function (p1196) {
          console.log(p1196);
          vThis51.rk = false;
        }, true);
        this.wb = new vF100(vF134.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        vO15.eventoPrincipal = vThis51;
      });
      vF1236.prototype.a = function () {};
      vF1236.prototype.ii = function () {
        if (this.cb == 0) {
          vF134.fk.stop();
          vF134.fk.fadeIn(500);
          vF134.gk.stop();
          vF134.gk.fadeOut(1);
          vF134.hk.stop();
          vF134.hk.fadeOut(50);
          vF134.ik.stop();
          vF134.ik.fadeOut(50);
          vF134.jk.stop();
          vF134.jk.fadeOut(50);
          vF134.kk.stop();
          vF134.kk.fadeOut(50);
          vF134.lk.stop();
          vF134.lk.fadeOut(1);
          vF134.di.stop();
          vF134.di.fadeOut(50);
          vF88.Le(false);
          vF134.nk.stop();
          vF134.nk.fadeOut(50);
          vF134.ok.stop();
          vF134.ok.fadeOut(50);
        } else {
          vF134.fk.stop();
          vF134.fk.fadeIn(500);
          vF134.gk.stop();
          vF134.gk.fadeIn(500);
          vF134.hk.stop();
          vF134.hk.fadeOut(50);
          vF134.ik.stop();
          vF134.ik.fadeOut(50);
          vF134.jk.stop();
          vF134.jk.fadeOut(50);
          vF134.kk.stop();
          vF134.kk.fadeOut(50);
          vF134.lk.stop();
          vF134.lk.fadeOut(1);
          vF134.di.stop();
          vF134.di.fadeOut(50);
          vF88.Le(false);
          vF134.nk.stop();
          vF134.nk.fadeOut(50);
          vF134.ok.stop();
          vF134.ok.fadeOut(50);
        }
      };
      vF1236.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF1236.prototype.Fa = function () {
        console.log("re");
        v$116.hide();
        setTimeout(function () {
          console.log("fi_bg");
          v$116.fadeIn(500);
        }, 3000);
        v$117.hide();
        setTimeout(function () {
          console.log("fi_aw");
          v$117.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF1236.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f115().r.Gd();
        }
      };
      vF1236.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF1236.prototype.Pa = function (p1197, p1198) {
        this.wb.Pa(p1197, p1198);
      };
      vF1236.prototype.Da = function (p1199, p1200, p1201) {
        var vUndefined46 = undefined;
        var vUndefined47 = undefined;
        var vUndefined48 = undefined;
        if (p1200 >= 1 && p1200 <= 10) {
          vUndefined46 = f118("index.game.result.place.i" + p1200);
          vUndefined47 = f118("index.game.result.placeInBoard");
          vUndefined48 = f118("index.game.social.shareResult.messGood").replace("{0}", p1201).replace("{1}", p1199).replace("{2}", vUndefined46);
        } else {
          vUndefined46 = "";
          vUndefined47 = f118("index.game.result.tryHit");
          vUndefined48 = f118("index.game.social.shareResult.messNorm").replace("{0}", p1201).replace("{1}", p1199);
        }
        v$119.html(f118("index.game.result.your"));
        v$120.html(p1199);
        v$121.html(vUndefined46);
        v$122.html(vUndefined47);
        if (v1096.qk) {
          var vF1185 = f118("index.game.result.share");
          f118("index.game.social.shareResult.caption");
          v$118.empty().append(f203(vF1185, "https://wormate.io", "wormate.io", vUndefined48, vUndefined48, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF1236.prototype.T = function () {
        return this.sk;
      };
      vF1236.prototype.U = function () {
        return this.rk;
      };
      return vF1236;
    }();
    var vF137 = function () {
      var v$123 = $("#loading-worm-a");
      var v$124 = $("#loading-worm-b");
      var v$125 = $("#loading-worm-c");
      var vA27 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF1237 = f123(vF134, function () {
        vF134.call(this, 0);
      });
      vF1237.prototype.a = function () {};
      vF1237.prototype.ii = function () {
        vF134.fk.stop();
        vF134.fk.fadeOut(50);
        vF134.gk.stop();
        vF134.gk.fadeOut(50);
        vF134.hk.stop();
        vF134.hk.fadeOut(50);
        vF134.ik.stop();
        vF134.ik.fadeOut(50);
        vF134.jk.stop();
        vF134.jk.fadeOut(50);
        vF134.kk.stop();
        vF134.kk.fadeIn(500);
        vF134.lk.stop();
        vF134.lk.fadeIn(1);
        vF134.di.stop();
        vF134.di.fadeIn(500);
        vF88.Le(true);
        vF134.nk.stop();
        vF134.nk.fadeOut(50);
        vF134.ok.stop();
        vF134.ok.fadeOut(50);
      };
      vF1237.prototype.ji = function () {
        this.tk();
      };
      vF1237.prototype.tk = function () {
        v$123.css("background-position", "100% 200%");
        for (var vLN0174 = 0; vLN0174 < vA27.length; vLN0174++) {
          var v1040 = Math.floor(Math.random() * vA27.length);
          var v1041 = vA27[vLN0174];
          vA27[vLN0174] = vA27[v1040];
          vA27[v1040] = v1041;
        }
        v$123.css("background-position", vA27[0]);
        v$124.css("background-position", vA27[1]);
        v$125.css("background-position", vA27[2]);
      };
      return vF1237;
    }();
    var vF138 = function () {
      $("#mm-event-text");
      var v$126 = $("#mm-skin-canv");
      var v$127 = $("#mm-skin-prev");
      var v$128 = $("#mm-skin-next");
      var v$129 = $("#mm-skin-over");
      var v$130 = $("#mm-skin-over-button-list");
      var v$131 = $("#mm-params-nickname");
      var v$132 = $("#mm-params-game-mode");
      var v$133 = $("#mm-action-buttons");
      var v$134 = $("#mm-action-play");
      var v$135 = $("#mm-action-guest");
      var v$136 = $("#mm-action-login");
      var v$137 = $("#mm-player-info");
      var v$138 = $("#mm-store");
      var v$139 = $("#mm-leaders");
      var v$140 = $("#mm-settings");
      var v$141 = $("#mm-coins-box");
      var v$142 = $("#mm-player-avatar");
      var v$143 = $("#mm-player-username");
      var v$144 = $("#mm-coins-val");
      var v$145 = $("#mm-player-exp-bar");
      var v$146 = $("#mm-player-exp-val");
      var v$147 = $("#mm-player-level");
      var vF1238 = f123(vF134, function () {
        vF134.call(this, 1);
        var vF1158 = f115();
        this.uk = new vF133(v$126);
        v$132.click(function () {
          vF1158.r.Cd();
        });
        v$126.click(function () {
          if (vF1158.u.P()) {
            vF1158.r.Cd();
            vF1158.s.I(vF1158.s.$h);
          }
        });
        v$127.click(function () {
          vF1158.r.Cd();
          vF1158.t.Ah();
        });
        v$128.click(function () {
          vF1158.r.Cd();
          vF1158.t.zh();
        });
        v$131.keypress(function (p1202) {
          if (p1202.keyCode == 13) {
            vF1158.na();
          }
        });
        v$134.click(function () {
          vF1158.r.Cd();
          vF1158.na();
        });
        v$135.click(function () {
          vF1158.r.Cd();
          vF1158.na();
        });
        v$136.click(function () {
          vF1158.r.Cd();
          vF1158.s.I(vF1158.s.Zh);
        });
        v$140.click(function () {
          vF1158.r.Cd();
          vF1158.s.I(vF1158.s.xa);
        });
        v$137.click(function () {
          if (vF1158.u.P()) {
            vF1158.r.Cd();
            vF1158.s.I(vF1158.s.Yh);
          }
        });
        v$139.click(function () {
          if (vF1158.u.P()) {
            vF1158.r.Cd();
            vF1158.s.I(vF1158.s.Xh);
          }
        });
        v$138.click(function () {
          if (vF1158.u.P()) {
            vF1158.r.Cd();
            vF1158.s.I(vF1158.s._h);
          }
        });
        v$141.click(function () {
          if (vF1158.u.P()) {
            vF1158.r.Cd();
            vF1158.s.I(vF1158.s.Wh);
          }
        });
        this.vk();
        this.wk();
        var vF1163 = f116(vF89.va);
        if (vF1163 != "ARENA" && vF1163 != "TEAM2") {
          vF1163 = "ARENA";
        }
        v$132.val(vF1163);
        console.log("Load GM: " + vF1163);
      });
      vF1238.prototype.a = function () {
        var vF1159 = f115();
        var vThis52 = this;
        vF1159.u.V(function () {
          vF1159.s.F.xk();
        });
        vF1159.u.Pi(function () {
          if (vF1159.u.P()) {
            vF1159.t.Bh(vF1159.u.Di(), vF116.ia);
            vF1159.t.Bh(vF1159.u.Ei(), vF116.ja);
            vF1159.t.Bh(vF1159.u.Fi(), vF116.ka);
            vF1159.t.Bh(vF1159.u.Gi(), vF116.la);
            vF1159.t.Bh(vF1159.u.Hi(), vF116.ma);
          } else {
            vF1159.t.Bh(vF1159.Ga(), vF116.ia);
            vF1159.t.Bh(0, vF116.ja);
            vF1159.t.Bh(0, vF116.ka);
            vF1159.t.Bh(0, vF116.la);
            vF1159.t.Bh(0, vF116.ma);
          }
        });
        vF1159.u.Pi(function () {
          v$134.toggle(vF1159.u.P());
          v$136.toggle(!vF1159.u.P());
          v$135.toggle(!vF1159.u.P());
          v$139.toggle(vF1159.u.P());
          v$138.toggle(vF1159.u.P());
          v$141.toggle(vF1159.u.P());
          if (vF1159.u.P()) {
            v$129.hide();
            v$143.html(vF1159.u.wi());
            v$142.attr("src", vF1159.u.xi());
            v$144.html(vF1159.u.zi());
            v$145.width(vF1159.u.Bi() * 100 / vF1159.u.Ci() + "%");
            v$146.html(vF1159.u.Bi() + " / " + vF1159.u.Ci());
            v$147.html(vF1159.u.Ai());
            v$131.val(vF1159.u.ga());
          } else {
            v$129.toggle(v1096.qk && !vF1159.Ha());
            v$143.html(v$143.data("guest"));
            v$142.attr("src", vLSimagesguestavatarxma2);
            v$144.html("10");
            v$145.width("0");
            v$146.html("");
            v$147.html(1);
            v$131.val(f116(vF89.Aa));
          }
        });
        vF1159.t.xh(function () {
          vThis52.uk.ak(vF1159.t.ha(vF116.ia), false, false);
          vThis52.uk.bk(vF1159.t.ha(vF116.ja), false, false);
          vThis52.uk.ck(vF1159.t.ha(vF116.ka), false, false);
          vThis52.uk.dk(vF1159.t.ha(vF116.la), false, false);
          vThis52.uk.ek(vF1159.t.ha(vF116.ma), false, false);
        });
      };
      vF1238.prototype.ii = function () {
        vF134.fk.stop();
        vF134.fk.fadeOut(50);
        vF134.gk.stop();
        vF134.gk.fadeOut(50);
        vF134.hk.stop();
        vF134.hk.fadeIn(500);
        vF134.ik.stop();
        vF134.ik.fadeOut(50);
        vF134.jk.stop();
        vF134.jk.fadeOut(50);
        vF134.kk.stop();
        vF134.kk.fadeOut(50);
        vF134.lk.stop();
        vF134.lk.fadeIn(1);
        vF134.di.stop();
        vF134.di.fadeIn(500);
        vF88.Le(true);
        vF134.nk.stop();
        vF134.nk.fadeIn(500);
        vF134.ok.stop();
        vF134.ok.fadeIn(500);
      };
      vF1238.prototype.ji = function () {
        f115().r.Dd();
        this.uk.Le(true);
      };
      vF1238.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF1238.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF1238.prototype.Pa = function (p1203, p1204) {
        this.uk.Pa();
      };
      vF1238.prototype.ga = function () {
        return v$131.val();
      };
      vF1238.prototype.D = function () {
        return v$132.val();
      };
      vF1238.prototype.xk = function () {
        v$133.show();
      };
      vF1238.prototype.vk = function () {
        var v1042 = $("#mm-advice-cont").children();
        var vLN0175 = 0;
        setInterval(function () {
          v1042.eq(vLN0175).fadeOut(500, function () {
            if (++vLN0175 >= v1042.length) {
              vLN0175 = 0;
            }
            v1042.eq(vLN0175).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF1238.prototype.wk = function () {
        function f204() {
          vF11510.Ka(true);
          setTimeout(function () {
            v$129.hide();
          }, 3000);
        }
        var vF11510 = f115();
        if (v1096.qk && !vF11510.Ha()) {
          v$129.show();
          var vF1186 = f118("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent3 = encodeURIComponent(f118("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent4 = encodeURIComponent(f118("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$130.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent3 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF1186 + "</span></a>").click(f204));
          v$130.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent4 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF1186 + "</span></a>").click(f204));
        }
      };
      return vF1238;
    }();
    var vF139 = function () {
      var vF1239 = f123(vF134, function () {
        vF134.call(this, 0);
      });
      vF1239.prototype.a = function () {};
      vF1239.prototype.ii = function () {
        vF134.fk.stop();
        vF134.fk.fadeOut(50);
        vF134.gk.stop();
        vF134.gk.fadeOut(50);
        vF134.hk.stop();
        vF134.hk.fadeOut(50);
        vF134.ik.stop();
        vF134.ik.fadeOut(50);
        vF134.jk.stop();
        vF134.jk.fadeOut(50);
        vF134.kk.stop();
        vF134.kk.fadeOut(50);
        vF134.lk.stop();
        vF134.lk.fadeOut(1);
        vF134.di.stop();
        vF134.di.fadeOut(50);
        vF88.Le(false);
        vF134.nk.stop();
        vF134.nk.fadeOut(50);
        vF134.ok.stop();
        vF134.ok.fadeOut(50);
      };
      return vF1239;
    }();
    var vF140 = function () {
      var v$148 = $("#toaster-stack");
      var vF12310 = f123(vF134, function () {
        vF134.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF12310.prototype.a = function () {};
      vF12310.prototype.ii = function () {
        vF134.fk.stop();
        vF134.fk.fadeOut(50);
        vF134.gk.stop();
        vF134.gk.fadeOut(50);
        vF134.hk.stop();
        vF134.hk.fadeOut(50);
        vF134.ik.stop();
        vF134.ik.fadeOut(50);
        vF134.jk.stop();
        vF134.jk.fadeIn(500);
        vF134.kk.stop();
        vF134.kk.fadeOut(50);
        vF134.lk.stop();
        vF134.lk.fadeIn(1);
        vF134.di.stop();
        vF134.di.fadeIn(500);
        vF88.Le(true);
        vF134.nk.stop();
        vF134.nk.fadeOut(50);
        vF134.ok.stop();
        vF134.ok.fadeIn(500);
      };
      vF12310.prototype.ji = function () {
        this.Ak();
      };
      vF12310.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF12310.prototype._ = function (p1205) {
        this.yk.unshift(p1205);
        setTimeout(function () {
          f115().s.ki();
        }, 0);
      };
      vF12310.prototype.Ti = function (p1206) {
        this.yk.push(p1206);
        setTimeout(function () {
          f115().s.ki();
        }, 0);
      };
      vF12310.prototype.Ak = function () {
        var vThis53 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f115().s.gi();
            return;
          }
          var v1043 = this.yk.shift();
          this.zk = v1043;
          var v1044 = v1043.Bk();
          v1044.hide();
          v1044.fadeIn(300);
          v$148.append(v1044);
          v1043.Ck = function () {
            v1044.fadeOut(300);
            setTimeout(function () {
              v1044.remove();
            }, 300);
            if (vThis53.zk == v1043) {
              vThis53.zk = null;
            }
            vThis53.Ak();
          };
          v1043.ji();
        }
      };
      return vF12310;
    }();
    var vF141 = function () {
      var v$149 = $("#popup-menu-label");
      var v$150 = $("#popup-menu-coins-box");
      var v$151 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF11511 = f115();
        vF11511.r.Cd();
        vF11511.s.gi();
      });
      v$150.click(function () {
        var vF11512 = f115();
        if (vF11512.u.P()) {
          vF11512.r.Cd();
          vF11512.s.I(vF11512.s.Wh);
        }
      });
      var vF12311 = f123(vF134, function (p1207, p1208) {
        vF134.call(this, 1);
        this.ad = p1207;
        this.Dk = p1208;
      });
      vF12311.prototype.a = function () {
        vF12311.parent.prototype.a.call(this);
        if (!vF12311.Ek) {
          vF12311.Ek = true;
          var vF11513 = f115();
          vF11513.u.Pi(function () {
            if (vF11513.u.P()) {
              v$151.html(vF11513.u.zi());
            } else {
              v$151.html("0");
            }
          });
        }
      };
      vF12311.Fk = $("#coins-view");
      vF12311.Gk = $("#leaders-view");
      vF12311.Hk = $("#profile-view");
      vF12311.Ik = $("#settings-view");
      vF12311.Jk = $("#login-view");
      vF12311.Kk = $("#skins-view");
      vF12311.Lk = $("#store-view");
      vF12311.Mk = $("#wear-view");
      vF12311.Nk = $("#withdraw-consent-view");
      vF12311.Ok = $("#delete-account-view");
      vF12311.Pk = $("#please-wait-view");
      vF12311.prototype.ii = function () {
        vF134.fk.stop();
        vF134.fk.fadeOut(200);
        vF134.gk.stop();
        vF134.gk.fadeOut(200);
        vF134.hk.stop();
        vF134.hk.fadeOut(200);
        vF134.ik.stop();
        vF134.ik.fadeIn(200);
        vF134.jk.stop();
        vF134.jk.fadeOut(200);
        vF134.kk.stop();
        vF134.kk.fadeOut(200);
        vF134.nk.stop();
        vF134.nk.fadeIn(200);
        vF134.ok.stop();
        vF134.ok.fadeIn(200);
        v$149.html(this.ad);
        v$150.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF12311.prototype.Rk = function () {};
      vF12311.prototype.Sk = function () {
        vF141.Pk.stop();
        vF141.Pk.fadeIn(300);
      };
      vF12311.prototype.Qk = function () {
        vF141.Pk.stop();
        vF141.Pk.fadeOut(300);
      };
      return vF12311;
    }();
    var vF143 = function () {
      var v$152 = $("#store-buy-coins_125000");
      var v$153 = $("#store-buy-coins_50000");
      var v$154 = $("#store-buy-coins_16000");
      var v$155 = $("#store-buy-coins_7000");
      var v$156 = $("#store-buy-coins_3250");
      var v$157 = $("#store-buy-coins_1250");
      var vF12312 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.coins.tab"), false);
        var vF11514 = f115();
        var vThis54 = this;
        v$152.click(function () {
          vF11514.r.Cd();
          vThis54.Tk("coins_125000");
        });
        v$153.click(function () {
          vF11514.r.Cd();
          vThis54.Tk("coins_50000");
        });
        v$154.click(function () {
          vF11514.r.Cd();
          vThis54.Tk("coins_16000");
        });
        v$155.click(function () {
          vF11514.r.Cd();
          vThis54.Tk("coins_7000");
        });
        v$156.click(function () {
          vF11514.r.Cd();
          vThis54.Tk("coins_3250");
        });
        v$157.click(function () {
          vF11514.r.Cd();
          vThis54.Tk("coins_1250");
        });
      });
      vF12312.prototype.a = function () {
        vF12312.parent.prototype.a.call(this);
      };
      vF12312.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeIn(200);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12312.prototype.ji = function () {
        f115().r.Dd();
      };
      vF12312.prototype.Tk = function (p1209) {};
      return vF12312;
    }();
    var vF144 = function () {
      var v$158 = $("#highscore-table");
      var v$159 = $("#leaders-button-level");
      var v$160 = $("#leaders-button-highscore");
      var v$161 = $("#leaders-button-kills");
      var vF12313 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.leaders.tab"), true);
        var vF11515 = f115();
        var vThis55 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$159,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$160,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$161,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$159.click(function () {
          vF11515.r.Cd();
          vThis55._k(vThis55.Vk.Wk);
        });
        v$160.click(function () {
          vF11515.r.Cd();
          vThis55._k(vThis55.Vk.Zk);
        });
        v$161.click(function () {
          vF11515.r.Cd();
          vThis55._k(vThis55.Vk.$k);
        });
      });
      vF12313.prototype.a = function () {
        vF12313.parent.prototype.a.call(this);
      };
      vF12313.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeIn(200);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12313.prototype.ji = function () {
        f115().r.Dd();
        var vThis56 = this;
        this.Sk();
        $.get(vLSHttpsgatewaywormatei + "/pub/leaders", function (p1210) {
          vThis56.Uk = p1210;
          vThis56._k(vThis56.al ?? vThis56.Vk.Wk);
          vThis56.Qk();
        }).done(function () {
          vThis56.Qk();
        });
      };
      vF12313.prototype._k = function (p1211) {
        this.al = p1211;
        for (var v1045 in this.Vk) {
          if (this.Vk.hasOwnProperty(v1045)) {
            var v1046 = this.Vk[v1045];
            v1046.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v1047 = this.Uk[this.al.Yk], vLS9 = "", vLN0176 = 0; vLN0176 < v1047.length; vLN0176++) {
          var v1048 = v1047[vLN0176];
          vLS9 += "<div class=\"table-row\"><span>" + (vLN0176 + 1) + "</span><span><img src=\"" + v1048.avatarUrl + "\"/></span><span>" + v1048.username + "</span><span>" + v1048.level + "</span><span>" + v1048.highScore + "</span><span>" + v1048.headShots + " / " + v1048.kills + "</span></div>";
        }
        v$158.empty();
        v$158.append(vLS9);
      };
      return vF12313;
    }();
    var vF145 = function () {
      var v$162 = $("#popup-login-gg");
      var v$163 = $("#popup-login-fb");
      var vF12314 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.login.tab"), false);
        var vF11516 = f115();
        var vThis57 = this;
        v$162.click(function () {
          vF11516.r.Cd();
          vThis57.Sk();
          vF11516.u.Qi(function () {
            vThis57.Qk();
          });
          setTimeout(function () {
            vThis57.Qk();
          }, 10000);
          vF11516.u.Zi();
        });
        v$163.click(function () {
          vF11516.r.Cd();
          vThis57.Sk();
          vF11516.u.Qi(function () {
            vThis57.Qk();
          });
          setTimeout(function () {
            vThis57.Qk();
          }, 10000);
          vF11516.u.Vi();
        });
      });
      vF12314.prototype.a = function () {
        vF12314.parent.prototype.a.call(this);
      };
      vF12314.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeIn(200);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12314.prototype.ji = function () {
        f115().r.Dd();
      };
      return vF12314;
    }();
    var vF146 = function () {
      var v$164 = $("#profile-avatar");
      var v$165 = $("#profile-username");
      var v$166 = $("#profile-experience-bar");
      var v$167 = $("#profile-experience-val");
      var v$168 = $("#profile-level");
      var v$169 = $("#profile-stat-highScore");
      var v$170 = $("#profile-stat-bestSurvivalTime");
      var v$171 = $("#profile-stat-kills");
      var v$172 = $("#profile-stat-headshots");
      var v$173 = $("#profile-stat-gamesPlayed");
      var v$174 = $("#profile-stat-totalTimeSpent");
      var v$175 = $("#profile-stat-registrationDate");
      var vF12315 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.profile.tab"), true);
      });
      vF12315.prototype.a = function () {
        vF12315.parent.prototype.a.call(this);
      };
      vF12315.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeIn(200);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12315.prototype.ji = function () {
        var vF11517 = f115();
        vF11517.r.Dd();
        var v1049 = vF11517.u.Oi();
        var v1050 = moment([v1049.year, v1049.month - 1, v1049.day]).format("LL");
        v$165.html(vF11517.u.wi());
        v$164.attr("src", vF11517.u.xi());
        v$166.width(vF11517.u.Bi() * 100 / vF11517.u.Ci() + "%");
        v$167.html(vF11517.u.Bi() + " / " + vF11517.u.Ci());
        v$168.html(vF11517.u.Ai());
        v$169.html(vF11517.u.Ii());
        v$170.html(f120(vF11517.u.Ji()));
        v$171.html(vF11517.u.Ki());
        v$172.html(vF11517.u.Li());
        v$173.html(vF11517.u.Mi());
        v$174.html(f120(vF11517.u.Ni()));
        v$175.html(v1050);
      };
      return vF12315;
    }();
    var vF147 = function () {
      var v$176 = $("#settings-music-enabled-switch");
      var v$177 = $("#settings-sfx-enabled-switch");
      var v$178 = $("#settings-show-names-switch");
      var v$179 = $("#popup-logout");
      var v$180 = $("#popup-logout-container");
      var v$181 = $("#popup-delete-account");
      var v$182 = $("#popup-delete-account-container");
      var v$183 = $("#popup-withdraw-consent");
      var vF12316 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.settings.tab"), false);
        var vThis58 = this;
        var vF11518 = f115();
        v$176.click(function () {
          var v1051 = !!v$176.prop("checked");
          f117(vF89.Me, v1051, 30);
          vF11518.r.td(v1051);
          vF11518.r.Cd();
        });
        v$177.click(function () {
          var v1052 = !!v$177.prop("checked");
          f117(vF89.Ne, v1052, 30);
          vF11518.r.rd(v1052);
          vF11518.r.Cd();
        });
        v$178.click(function () {
          vF11518.r.Cd();
        });
        v$179.click(function () {
          vF11518.r.Cd();
          vThis58.Sk();
          setTimeout(function () {
            vThis58.Qk();
          }, 2000);
          vF11518.u.Wi();
        });
        v$181.click(function () {
          if (vF11518.u.P()) {
            vF11518.r.Cd();
            vF11518.s.I(vF11518.s.Vh);
          } else {
            vF11518.r.Hd();
          }
        });
        v$183.click(function () {
          if (vF11518.Y()) {
            vF11518.r.Cd();
            vF11518.s.I(vF11518.s.Uh);
          } else {
            vF11518.r.Hd();
          }
        });
      });
      vF12316.prototype.a = function () {
        vF12316.parent.prototype.a.call(this);
        var vF11519 = f115();
        var vUndefined49 = undefined;
        switch (f116(vF89.Me)) {
          case "false":
            vUndefined49 = false;
            break;
          default:
            vUndefined49 = true;
        }
        v$176.prop("checked", vUndefined49);
        vF11519.r.td(vUndefined49);
        var vUndefined50 = undefined;
        switch (f116(vF89.Ne)) {
          case "false":
            vUndefined50 = false;
            break;
          default:
            vUndefined50 = true;
        }
        v$177.prop("checked", vUndefined50);
        vF11519.r.rd(vUndefined50);
        var vUndefined51 = undefined;
        switch (f116(vF89.ya)) {
          case "false":
            vUndefined51 = false;
            break;
          default:
            vUndefined51 = true;
        }
        console.log("Load sPN: " + vUndefined51);
        v$178.prop("checked", vUndefined51);
        vF11519.u.V(function () {
          v$180.toggle(vF11519.u.P());
          v$182.toggle(vF11519.u.P());
        });
      };
      vF12316.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeIn(200);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12316.prototype.ji = function () {
        var vF11520 = f115();
        vF11520.r.Dd();
        if (vF11520.Y()) {
          v$183.show();
        } else {
          v$183.hide();
        }
      };
      vF12316.prototype.wa = function () {
        return v$178.prop("checked");
      };
      return vF12316;
    }();
    var vF148 = function () {
      var v$184 = $("#store-view-canv");
      var v$185 = $("#skin-description-text");
      var v$186 = $("#skin-group-description-text");
      var v$187 = $("#store-locked-bar");
      var v$188 = $("#store-locked-bar-text");
      var v$189 = $("#store-buy-button");
      var v$190 = $("#store-item-price");
      var v$191 = $("#store-groups");
      var v$192 = $("#store-view-prev");
      var v$193 = $("#store-view-next");
      var vF12317 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.skins.tab"), true);
        var vThis59 = this;
        var vF11521 = f115();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF133(v$184);
        v$189.click(function () {
          vF11521.r.Cd();
          vThis59.fl();
        });
        v$192.click(function () {
          vF11521.r.Cd();
          vThis59.bl.gl();
        });
        v$193.click(function () {
          vF11521.r.Cd();
          vThis59.bl.hl();
        });
      });
      vF12317.prototype.a = function () {
        vF12317.parent.prototype.a.call(this);
        var vThis60 = this;
        var vF11522 = f115();
        vF11522.p.ca(function () {
          var v1053 = vF11522.p.Ac();
          if (v1053 != null) {
            vThis60.cl = [];
            for (var vLN0177 = 0; vLN0177 < v1053.skinGroupArrayDict.length; vLN0177++) {
              vThis60.cl.push(new vF149(vThis60, v1053.skinGroupArrayDict[vLN0177]));
            }
            vThis60.dl = {};
            for (var vLN0178 = 0; vLN0178 < v1053.skinArrayDict.length; vLN0178++) {
              var v1054 = v1053.skinArrayDict[vLN0178];
              vThis60.dl[v1054.id] = v1054;
            }
          }
        });
        this.il(false);
        vF11522.t.xh(function () {
          vThis60.il(false);
        });
      };
      vF12317.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeIn(200);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12317.prototype.ji = function () {
        f115().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF12317.prototype.ei = function () {
        this.el.Le(false);
      };
      vF12317.prototype.Ra = function () {
        this.el.Ra();
      };
      vF12317.prototype.Pa = function (p1212, p1213) {
        this.el.Pa();
      };
      vF12317.prototype.jl = function () {
        var vThis61 = this;
        var vThis62 = this;
        var vF11523 = f115();
        v$191.empty();
        for (var vLN0181 = 0; vLN0181 < this.cl.length; vLN0181++) {
          (function (p1214) {
            var v1055 = vThis61.cl[p1214];
            var v1056 = document.createElement("li");
            v$191.append(v1056);
            var v$194 = $(v1056);
            v$194.html(v1055.kl());
            v$194.click(function () {
              vF11523.r.Cd();
              vThis62.ll(v1055);
            });
            v1055.ml = v$194;
          })(vLN0181);
        }
        if (this.cl.length > 0) {
          var v1057 = vF11523.t.ha(vF116.ia);
          for (var vLN0181 = 0; vLN0181 < this.cl.length; vLN0181++) {
            var v1058 = this.cl[vLN0181];
            for (var v1059 = v1058.nl.list, vLN0182 = 0; vLN0182 < v1059.length; vLN0182++) {
              if (v1059[vLN0182] == v1057) {
                v1058.ol = vLN0182;
                this.ll(v1058);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF12317.prototype.ll = function (p1215) {
        if (this.bl != p1215) {
          var vF11524 = f115();
          this.bl = p1215;
          v$191.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$186.html("");
          if (p1215.nl != null) {
            var v1060 = vF11524.p.Ac().textDict[p1215.nl.description];
            if (v1060 != null) {
              v$186.html(f121(f119(v1060)));
            }
          }
          this.il(true);
        }
      };
      vF12317.prototype.pl = function () {
        if (this.bl == null) {
          return vF108.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF12317.prototype.fl = function () {
        var vThis63 = this;
        this.pl().ah(function (p1216) {
          vThis63.rl(p1216);
        });
      };
      vF12317.prototype.rl = function (p1217) {
        var vThis64 = this;
        var vF11525 = f115();
        var v1061 = this.dl[p1217].price;
        if (!(vF11525.u.zi() < v1061)) {
          this.Sk();
          var v1062 = vF11525.t.ha(vF116.ia);
          var v1063 = vF11525.t.ha(vF116.ja);
          var v1064 = vF11525.t.ha(vF116.ka);
          var v1065 = vF11525.t.ha(vF116.la);
          var v1066 = vF11525.t.ha(vF116.ma);
          vF11525.u.Ui(p1217, vF116.ia, function () {
            vF11525.t.Bh(v1062, vF116.ia);
            vF11525.t.Bh(v1063, vF116.ja);
            vF11525.t.Bh(v1064, vF116.ka);
            vF11525.t.Bh(v1065, vF116.la);
            vF11525.t.Bh(v1066, vF116.ma);
            if (vF11525.u.Ch(p1217, vF116.ia)) {
              vF11525.t.Bh(p1217, vF116.ia);
            }
            vThis64.Qk();
          });
        }
      };
      vF12317.prototype.il = function (p1218) {
        var vF11526 = f115();
        this.el.bk(vF11526.t.ha(vF116.ja), false, false);
        this.el.ck(vF11526.t.ha(vF116.ka), false, false);
        this.el.dk(vF11526.t.ha(vF116.la), false, false);
        this.el.ek(vF11526.t.ha(vF116.ma), false, false);
        var v1067 = this.pl();
        if (v1067._g()) {
          var v1068 = v1067.$g();
          var v1069 = this.dl[v1068];
          var v1070 = false;
          if (vF11526.t.Ja(v1068, vF116.ia)) {
            v$187.hide();
            v$189.hide();
          } else if (v1069 == null || v1069.nonbuyable == 1) {
            v1070 = true;
            v$187.show();
            v$189.hide();
            v$188.text(f118("index.game.popup.menu.store.locked"));
            if (v1069 != null && v1069.nonbuyable && v1069.nonbuyableCause != null) {
              var v1071 = vF11526.p.Ac().textDict[v1069.nonbuyableCause];
              if (v1071 != null) {
                v$188.text(f119(v1071));
              }
            }
          } else {
            v$187.hide();
            v$189.show();
            v$190.html(v1069.price);
          }
          v$185.html("");
          if (v1069 != null && v1069.description != null) {
            var v1072 = vF11526.p.Ac().textDict[v1069.description];
            if (v1072 != null) {
              v$185.html(f121(f119(v1072)));
            }
          }
          v$111.html(v1069.id);
          this.el.ak(v1068, true, v1070);
          if (p1218) {
            vF11526.t.Bh(v1068, vF116.ia);
          }
        }
      };
      var vF149 = function () {
        function f205(p1219, p1220) {
          this.sl = p1219;
          this.ol = 0;
          this.nl = p1220;
        }
        f205.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f205.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f205.prototype.kl = function () {
          let vF1192 = f119(this.nl.name);
          if (this.nl.img) {
            var vLSimgSrc2 = "<img src=\"";
            vLSimgSrc2 = vLSimgSrc2 + vLSHttpswormatefriendsg + "/images/paths/" + this.nl.img;
            vF1192 = vLSimgSrc2 = vLSimgSrc2 + "\" height=\"43\" width=\"220\" />";
          }
          return vF1192;
        };
        f205.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF108.Yg();
          } else {
            return vF108.Zg(this.nl.list[this.ol]);
          }
        };
        return f205;
      }();
      return vF12317;
    }();
    var vF150 = function () {
      var v$195 = $("#store-go-coins-button");
      var v$196 = $("#store-go-skins-button");
      var v$197 = $("#store-go-wear-button");
      var vF12318 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.store.tab"), true);
        var vF11527 = f115();
        v$195.click(function () {
          vF11527.r.Cd();
          vF11527.s.I(vF11527.s.Wh);
        });
        v$196.click(function () {
          vF11527.r.Cd();
          vF11527.s.I(vF11527.s.$h);
        });
        v$197.click(function () {
          vF11527.r.Cd();
          vF11527.s.I(vF11527.s.ai);
        });
      });
      vF12318.prototype.a = function () {
        vF12318.parent.prototype.a.call(this);
      };
      vF12318.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeIn(200);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12318.prototype.ji = function () {
        f115().r.Dd();
      };
      return vF12318;
    }();
    var vF151 = function () {
      var v$198 = $("#wear-view-canv");
      var v$199 = $("#wear-description-text");
      var v$200 = $("#wear-locked-bar");
      var v$201 = $("#wear-locked-bar-text");
      var v$202 = $("#wear-buy-button");
      var v$203 = $("#wear-item-price");
      var v$204 = $("#wear-eyes-button");
      var v$205 = $("#wear-mouths-button");
      var v$206 = $("#wear-glasses-button");
      var v$207 = $("#wear-hats-button");
      var v$208 = $("#wear-tint-chooser");
      var v$209 = $("#wear-view-prev");
      var v$210 = $("#wear-view-next");
      var vF12319 = f123(vF141, function () {
        var vThis65 = this;
        vF141.call(this, f118("index.game.popup.menu.wear.tab"), true);
        var vF11528 = f115();
        var vThis66 = this;
        this.tl = [];
        this.ja = new vF152(this, vF116.ja, v$204);
        this.ka = new vF152(this, vF116.ka, v$205);
        this.la = new vF152(this, vF116.la, v$206);
        this.ma = new vF152(this, vF116.ma, v$207);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF133(v$198);
        v$202.click(function () {
          vF11528.r.Cd();
          vThis66.Bl();
        });
        v$209.click(function () {
          vF11528.r.Cd();
          vThis66.ul.Cl();
        });
        v$210.click(function () {
          vF11528.r.Cd();
          vThis66.ul.Dl();
        });
        v$204.click(function () {
          vF11528.r.Cd();
          vThis66.El(vThis65.ja);
        });
        v$205.click(function () {
          vF11528.r.Cd();
          vThis66.El(vThis65.ka);
        });
        v$206.click(function () {
          vF11528.r.Cd();
          vThis66.El(vThis65.la);
        });
        v$207.click(function () {
          vF11528.r.Cd();
          vThis66.El(vThis65.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF12319.prototype.a = function () {
        vF12319.parent.prototype.a.call(this);
        var vF11529 = f115();
        var vThis67 = this;
        vF11529.p.ca(function () {
          var v1073 = vF11529.p.Ac();
          if (v1073 != null) {
            vThis67.vl = v1073.eyesDict;
            vThis67.wl = v1073.mouthDict;
            vThis67.xl = v1073.glassesDict;
            vThis67.yl = v1073.hatDict;
            vThis67.zl = v1073.colorDict;
            vThis67.ja.Fl(v1073.eyesVariantArray);
            vThis67.ja.Gl(vThis67.vl);
            vThis67.ka.Fl(v1073.mouthVariantArray);
            vThis67.ka.Gl(vThis67.wl);
            vThis67.la.Fl(v1073.glassesVariantArray);
            vThis67.la.Gl(vThis67.xl);
            vThis67.ma.Fl(v1073.hatVariantArray);
            vThis67.ma.Gl(vThis67.yl);
          }
        });
        this.il(false);
        vF11529.t.xh(function () {
          vThis67.il(false);
        });
      };
      vF12319.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeIn(200);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12319.prototype.ji = function () {
        f115().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF12319.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF12319.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF12319.prototype.Pa = function (p1221, p1222) {
        this.Al.Pa();
      };
      vF12319.prototype.El = function (p1223) {
        this.ul = p1223;
        for (var vLN0183 = 0; vLN0183 < this.tl.length; vLN0183++) {
          this.tl[vLN0183].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF12319.prototype.Hl = function () {
        if (this.ul == null) {
          return vF108.Yg();
        } else {
          return vF108.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF12319.prototype.Bl = function () {
        var vThis68 = this;
        this.Hl().ah(function (p1224) {
          vThis68.Ui(p1224.Lb, p1224.rc);
        });
      };
      vF12319.prototype.Ui = function (p1225, p1226) {
        var vThis69 = this;
        var vF11530 = f115();
        var vUndefined52 = undefined;
        switch (p1226) {
          case vF116.ja:
            vUndefined52 = this.vl[p1225].price;
            break;
          case vF116.ka:
            vUndefined52 = this.wl[p1225].price;
            break;
          case vF116.la:
            vUndefined52 = this.xl[p1225].price;
            break;
          case vF116.ma:
            vUndefined52 = this.yl[p1225].price;
            break;
          default:
            return;
        }
        if (!(vF11530.u.zi() < vUndefined52)) {
          this.Sk();
          var v1074 = vF11530.t.ha(vF116.ia);
          var v1075 = vF11530.t.ha(vF116.ja);
          var v1076 = vF11530.t.ha(vF116.ka);
          var v1077 = vF11530.t.ha(vF116.la);
          var v1078 = vF11530.t.ha(vF116.ma);
          vF11530.u.Ui(p1225, p1226, function () {
            vF11530.t.Bh(v1074, vF116.ia);
            vF11530.t.Bh(v1075, vF116.ja);
            vF11530.t.Bh(v1076, vF116.ka);
            vF11530.t.Bh(v1077, vF116.la);
            vF11530.t.Bh(v1078, vF116.ma);
            if (vF11530.u.Ch(p1225, p1226)) {
              vF11530.t.Bh(p1225, p1226);
            }
            vThis69.Qk();
          });
        }
      };
      vF12319.prototype.Il = function (p1227, p1228) {
        switch (p1228) {
          case vF116.ja:
            return this.vl[p1227];
          case vF116.ka:
            return this.wl[p1227];
          case vF116.la:
            return this.xl[p1227];
          case vF116.ma:
            return this.yl[p1227];
        }
        return null;
      };
      vF12319.prototype.il = function (p1229) {
        var vF11531 = f115();
        this.Al.ak(vF11531.t.ha(vF116.ia), false, false);
        this.Al.bk(vF11531.t.ha(vF116.ja), false, false);
        this.Al.ck(vF11531.t.ha(vF116.ka), false, false);
        this.Al.dk(vF11531.t.ha(vF116.la), false, false);
        this.Al.ek(vF11531.t.ha(vF116.ma), false, false);
        var v1079 = this.Hl();
        if (v1079._g()) {
          var v1080 = v1079.$g();
          var v1081 = this.Il(v1080.Lb, v1080.rc);
          var v1082 = false;
          if (vF11531.t.Ja(v1080.Lb, v1080.rc)) {
            v$200.hide();
            v$202.hide();
          } else if (v1081 == null || v1081.nonbuyable == 1) {
            v1082 = true;
            v$200.show();
            v$202.hide();
            v$201.text(f118("index.game.popup.menu.store.locked"));
            if (v1081 != null && v1081.nonbuyable && v1081.nonbuyableCause != null) {
              var v1083 = vF11531.p.Ac().textDict[v1081.nonbuyableCause];
              if (v1083 != null) {
                v$201.text(f119(v1083));
              }
            }
          } else {
            v$200.hide();
            v$202.show();
            v$203.html(v1081.price);
          }
          v$199.html("");
          if (v1081 != null && v1081.description != null) {
            var v1084 = vF11531.p.Ac().textDict[v1081.description];
            if (v1084 != null) {
              v$199.html(f121(f119(v1084)));
            }
          }
          switch (v1080.rc) {
            case vF116.ja:
              this.Al.bk(v1080.Lb, true, v1082);
              break;
            case vF116.ka:
              this.Al.ck(v1080.Lb, true, v1082);
              break;
            case vF116.la:
              this.Al.dk(v1080.Lb, true, v1082);
              break;
            case vF116.ma:
              this.Al.ek(v1080.Lb, true, v1082);
          }
          if (p1229) {
            vF11531.t.Bh(v1080.Lb, v1080.rc);
          }
        }
      };
      var vF152 = function () {
        function f206(p1230, p1231, p1232) {
          this.sl = p1230;
          this.rc = p1231;
          this.Xk = p1232;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f206.prototype.Fl = function (p1233) {
          this.Kl = p1233;
        };
        f206.prototype.Gl = function (p1234) {
          this.Jl = p1234;
        };
        f206.prototype.ii = function () {
          var vF11532 = f115();
          var v1085 = vF11532.t.ha(this.rc);
          for (var vLN0184 = 0; vLN0184 < this.Kl.length; vLN0184++) {
            for (var vLN0185 = 0; vLN0185 < this.Kl[vLN0184].length; vLN0185++) {
              if (this.Kl[vLN0184][vLN0185] == v1085) {
                this.Nl(vLN0184);
                this.Ol(vLN0185);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f206.prototype.Cl = function () {
          var v1086 = this.Ll - 1;
          if (v1086 < 0) {
            v1086 = this.Kl.length - 1;
          }
          this.Nl(v1086);
          this.Ol(this.Ml % this.Kl[v1086].length);
        };
        f206.prototype.Dl = function () {
          var v1087 = this.Ll + 1;
          if (v1087 >= this.Kl.length) {
            v1087 = 0;
          }
          this.Nl(v1087);
          this.Ol(this.Ml % this.Kl[v1087].length);
        };
        f206.prototype.Nl = function (p1235) {
          var vThis70 = this;
          if (!(p1235 < 0) && !(p1235 >= this.Kl.length)) {
            this.Ll = p1235;
            v$208.empty();
            var v1088 = this.Kl[this.Ll];
            if (v1088.length > 1) {
              for (var vLN0186 = 0; vLN0186 < v1088.length; vLN0186++) {
                (function (p1236) {
                  var v1089 = v1088[p1236];
                  var v1090 = vThis70.Jl[v1089];
                  var v1091 = "#" + vThis70.sl.zl[v1090.prime];
                  var v$211 = $("<div style=\"border-color:" + v1091 + "\"></div>");
                  v$211.click(function () {
                    f115().r.Cd();
                    vThis70.Ol(p1236);
                  });
                  v$208.append(v$211);
                })(vLN0186);
              }
            }
          }
        };
        f206.prototype.Ol = function (p1237) {
          if (!(p1237 < 0) && !(p1237 >= this.Kl[this.Ll].length)) {
            this.Ml = p1237;
            v$208.children().css("background-color", "transparent");
            var v1092 = v$208.children(":nth-child(" + (1 + p1237) + ")");
            v1092.css("background-color", v1092.css("border-color"));
            this.sl.il(true);
          }
        };
        f206.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f206;
      }();
      return vF12319;
    }();
    var vF153 = function () {
      var v$212 = $("#withdraw-consent-yes");
      var v$213 = $("#withdraw-consent-no");
      var vF12320 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.consent.tab"), false);
        var vF11533 = f115();
        v$212.click(function () {
          vF11533.r.Cd();
          if (vF11533.Y()) {
            vF11533.s.I(vF11533.s.F);
            vF11533.$(false, true);
            vF11533.s.aa._(new vF158());
          } else {
            vF11533.s.gi();
          }
        });
        v$213.click(function () {
          vF11533.r.Cd();
          vF11533.s.gi();
        });
      });
      vF12320.prototype.a = function () {
        vF12320.parent.prototype.a.call(this);
      };
      vF12320.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeIn(200);
        vF141.Ok.stop();
        vF141.Ok.fadeOut(50);
      };
      vF12320.prototype.ji = function () {
        f115().r.Dd();
      };
      return vF12320;
    }();
    var vF154 = function () {
      var v$214 = $("#delete-account-timer");
      var v$215 = $("#delete-account-yes");
      var v$216 = $("#delete-account-no");
      var vF12321 = f123(vF141, function () {
        vF141.call(this, f118("index.game.popup.menu.delete.tab"), false);
        var vF11534 = f115();
        v$215.click(function () {
          vF11534.r.Cd();
          if (vF11534.u.P()) {
            vF11534.u.bj();
            vF11534.u.Wi();
          } else {
            vF11534.s.gi();
          }
        });
        v$216.click(function () {
          vF11534.r.Cd();
          vF11534.s.gi();
        });
        this.Pl = [];
      });
      vF12321.prototype.a = function () {
        vF12321.parent.prototype.a.call(this);
      };
      vF12321.prototype.Rk = function () {
        vF141.Fk.stop();
        vF141.Fk.fadeOut(50);
        vF141.Gk.stop();
        vF141.Gk.fadeOut(50);
        vF141.Hk.stop();
        vF141.Hk.fadeOut(50);
        vF141.Jk.stop();
        vF141.Jk.fadeOut(50);
        vF141.Ik.stop();
        vF141.Ik.fadeOut(50);
        vF141.Kk.stop();
        vF141.Kk.fadeOut(50);
        vF141.Lk.stop();
        vF141.Lk.fadeOut(50);
        vF141.Mk.stop();
        vF141.Mk.fadeOut(50);
        vF141.Nk.stop();
        vF141.Nk.fadeOut(50);
        vF141.Ok.stop();
        vF141.Ok.fadeIn(200);
      };
      vF12321.prototype.ji = function () {
        f115().r.Hd();
        v$215.stop();
        v$215.hide();
        v$214.stop();
        v$214.show();
        v$214.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$214.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$214.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$214.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$214.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$214.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$214.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$214.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$214.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$214.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$214.hide();
          v$215.fadeIn(300);
        }, 10000);
      };
      vF12321.prototype.Rl = function (p1238, p1239) {
        var vSetTimeout4 = setTimeout(p1238, p1239);
        this.Pl.push(vSetTimeout4);
      };
      vF12321.prototype.Ql = function () {
        for (var vLN0187 = 0; vLN0187 < this.Pl.length; vLN0187++) {
          clearTimeout(this.Pl[vLN0187]);
        }
        this.Pl = [];
      };
      return vF12321;
    }();
    var vF155 = function () {
      function f207() {
        this.Ck = function () {};
      }
      f207.prototype.Bk = function () {};
      f207.prototype.ji = function () {};
      return f207;
    }();
    var vF156 = function () {
      var vF12322 = f123(vF155, function (p1240) {
        vF155.call(this);
        var v1093 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v1093 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1240 + "</div>    <div class=\"toaster-coins-close\">" + f118("index.game.toaster.continue") + "</div></div>");
        var vThis71 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f115().r.Cd();
          vThis71.Ck();
        });
      });
      vF12322.prototype.Bk = function () {
        return this.Sl;
      };
      vF12322.prototype.ji = function () {
        f115().r.Fd();
      };
      return vF12322;
    }();
    var vF157 = function () {
      var vF12323 = f123(vF155, function (p1241) {
        vF155.call(this);
        var v1094 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v1094 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1241 + "</div>    <div class=\"toaster-levelup-text\">" + f118("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f118("index.game.toaster.continue") + "</div></div>");
        var vThis72 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f115().r.Cd();
          vThis72.Ck();
        });
      });
      vF12323.prototype.Bk = function () {
        return this.Sl;
      };
      vF12323.prototype.ji = function () {
        f115().r.Ed();
      };
      return vF12323;
    }();
    var vF158 = function () {
      var vF12324 = f123(vF155, function () {
        vF155.call(this);
        var vThis73 = this;
        var vF11535 = f115();
        var v1095 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v1095 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas202 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f118("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f118("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f118("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF11535.r.Cd();
          if (vF11535.Y()) {
            vF11535.$(true, true);
          }
          vThis73.Ck();
        });
      });
      vF12324.prototype.Bk = function () {
        return this.Sl;
      };
      vF12324.prototype.ji = function () {
        var vThis74 = this;
        var vF11536 = f115();
        if (vF11536.Y() && !vF11536.Z()) {
          vF11536.r.Hd();
          setTimeout(function () {
            vThis74.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis74.Ck();
          }, 0);
        }
      };
      return vF12324;
    }();
    var vO30 = {};
    vO30.main = {
      Ma: f139("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f139("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f136(),
      e: 4,
      oa: false,
      qk: true
    };
    vO30.miniclip = {
      Ma: f139("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f139("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f136(),
      e: 4,
      oa: false,
      qk: false
    };
    var v1096 = vO30[window.ENV];
    v1096 ||= vO30.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p1242) {
      p1242.preventDefault();
      p1242.stopPropagation();
      return false;
    });
    f122("//connect.facebook.net/" + vUndefined27 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f122("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        v595 = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined28 = f140();
    vUndefined28.v();
    if (vF()) {
      f122("https://wormatefriendsglobal.com/js/joy.min.js", "mobileconfig", function () {
        vF159();
      });
    }
    ;
    let vF159 = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-out'>-</div><div id='zoom-in'>+</div></div>");
    };
    window.keyMove = 81;
    window.addEventListener("keydown", function (p1243) {
      console.log("event.keyCode " + p1243.keyCode);
      p1243 = p1243.which || p1243.keyCode || 0;
      if (p1243 !== 113 && window.keyMove !== p1243 || !v11 || v10) {
        clearInterval(v10);
        v10 = null;
      } else {
        let v1097 = vO15.eventoPrincipal.sk = 0;
        p1243 = window.tuNewScore;
        v10 = setInterval(function () {
          let vParseFloat2 = parseFloat(vO15.eventoPrincipal.sk);
          vO15.eventoPrincipal.sk = (vParseFloat2 >= Math.PI ? -vParseFloat2 : vParseFloat2) + (v1097 === 0 ? 0 : Math.PI / 4);
          v1097++;
        }, 165 + (p1243 >= 100000 ? 5 : p1243 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(vO16));
    }, false);
    let vA28 = [{
      nombre: "duck-unicorn",
      url: "https://cdn.custom-cursor.com/db/15674/32/duck-unicorn-thanksgiving-day-cursor.png"
    }, {
      nombre: "cute-gnome",
      url: "https://cdn.custom-cursor.com/db/15543/32/cute-gnomes-pointer.png"
    }, {
      nombre: "fnf-markus",
      url: "https://cdn.custom-cursor.com/db/15536/32/fnf-markus-cursor.png"
    }, {
      nombre: "sanrio-fairy",
      url: "https://cdn.custom-cursor.com/db/15524/32/sanrio-fairy-charmer-cursor.png"
    }, {
      nombre: "Batman_Logo",
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254715592003293225/TikTok.png?ex=667a8074&is=66792ef4&hm=fb51a7461fa799d7326e9a36a49ed98d0d425d7158301bb41cc5c905acc0356e&"
    }, {
      nombre: "arrow",
      url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      nombre: "Superman",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      nombre: "Kratos",
      url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      nombre: "Pusheen_Ca",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      nombre: "lipstick",
      url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      nombre: "AKM",
      url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254718587587919892/Adsz.png?ex=667a833e&is=667931be&hm=88222eabdffd11733dd84a670597e29f185ca6a6154557e0f6be8ebf4262e087&"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254717629999087626/doritos.png?ex=667a825a&is=667930da&hm=f059338f084b16aaf89e40fc4fc0a98d7abb705255a0ec49f7d92a541877c41c&"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.discordapp.com/attachments/1232066016515850330/1254716340066062387/Adsz.png?ex=667a8126&is=66792fa6&hm=dd4586b5c16e145e9ed0c04aeb901374e4d725bd643c153c0f32851e633aeccc&"
    }];
    let vA29 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/2Cb1fpQ.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/hSGiXs6.jpg"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://wormatefriendsglobal.com/backgrounds/bg_1.png"
    }];
    vO16.loading = true;
    var vLS10 = "";
    vLS10 += "</div>";
    vLS10 += "</div>";
    vLS10 += "</div>";
    vLS10 += "<div id=\"wormcerca\">";
    vLS10 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS10 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS10 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS10 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS10 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS10 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS10 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS10 += "</div>";
    vLS10 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS10 += "\n      \n         <div style=\"display:none\" id=\"zoom-container\">\n         <div id=\"zoom-out\">-</div>\n         <div id=\"zoom-in\">+</div>\n         </div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button>\n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
    $("#game-view").append(vLS10);
    function f208(p1244) {
      if (vO16.PropertyManager) {
        p1244.skinId = vO16.PropertyManager.rh;
        p1244.eyesId = vO16.PropertyManager.sh;
        p1244.mouthId = vO16.PropertyManager.th;
        p1244.glassesId = vO16.PropertyManager.uh;
        p1244.hatId = vO16.PropertyManager.vh;
      }
    }
    function f209() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><img src=\"https://wormatefriendsglobal.com/images/hiep_img/logo.png\"/><a href=\"https://www.wormatefriendsglobal.com/\">Wormate  Friends Global</a></div>");
      $("#mm-store").after("<div id=\"mm-store\" style=\"float: right;position: relative;background: #fff0;width:-30px;\">\n            <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            \n        <button style=\"margin-top: 0px;\" onclick=\"openPopup()\"><img style=\"height: 40px;\"src=\"https://i.imgur.com/nwJih2e.png\"/></button>\n        <div id=\"popup\" class=\"popup\">\n        <div class=\"phdr1\">  Settings</div>\n        <button class=\"close-button\" onclick=\"closePopup()\">Close</button>\n        \n                    <div id=\"kich-hoat\">\n                \n           <center><input type=\"text\" value=\"" + vO16.FB_UserID + "\" style=\"text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border: solid 2px #ff8d00;margin-left: -80px;    width: 50%;margin-top: 8px;\"/></center>\n                \n                <button style=\"width: 80px; height: 28px;float: right; margin-top: -28px;margin-right: 105px;\" onclick=\"navigator.clipboard.writeText('" + vO16.FB_UserID + "').then(()=> alert('You ID " + vO16.FB_UserID + " copiado! copied!'));\">COPY</button>\n                </div>   \n                \n                \n                    <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"> Eating Speed</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-Abilityzoom-switch\"></label>\n                    </div><div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"> Top 3</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-top3sv-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-top3sv-switch\"></label>\n                    </div>\n                    \n                    <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\">Streamer Mode</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmode-switch\"></label>\n                    </div>\n                    \n                    \n                    <div class=\"spancursor\">Select Cursor</div>\n                    <div class=\"cursor-container\"></div>\n                    <div id=\"bgtext\" class=\"bgtext\">Select Background</div>\n                    <div class=\"background-container\"></div></center>\n\n           \n        </div>");
      $("#loa831pibur0w4gv").replaceWith("<div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n                <div class=\"label\" id=\"titleSetings\">Notification </div>\n                \n                <div class=\"list1\">  :   / </div>\n                <div class=\"list1\"> Aktivasyon yaptÄ±rmanÄ±z gerekiyor. </div>\n                <div class=\"list1\">     </div><hr>\n                \n                <div class=\"list1\">      </div>\n                <div class=\"list1\">    </div>\n                <div class=\"list1\">     </div>\n                <hr> \n                <input type=\"text\" value=\"" + vO16.FB_UserID + "\" style=\"width: 236px;height: 23px;text-align: center;border-radius: 4px;font-size: 17px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button style=\"height: 25px;float: right;margin-top: -24px;\" onclick=\"navigator.clipboard.writeText('" + vO16.FB_UserID + "').then(()=> alert('You ID " + vO16.FB_UserID + " copiado! copied!'));\">COPY</button>\n                <center><div class=\"hg\"><a target=\"_blank\" href=\"https://wormatefriendsglobal.com/\">Aktivasyon </a></div></center>\n             </div>\n             ");
      var v1098 = document.getElementById("settingBtn");
      var v1099 = document.getElementById("settingContent");
      v1098.addEventListener("click", function () {
        if (v1099.style.display === "none") {
          v1099.style.display = "block";
        } else {
          v1099.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        vO16.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO16.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO16.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO16.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO16.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO16.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO16.FoodSize = $(this).val();
        localStorage.ComidaSize = vO16.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO16.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO16.FoodShadow;
      });
      $("#ltmolilci1iurq1i").replaceWith("\n                <div id=\"toantrang-quangcao\">\n                \n                <div class=\"quangcao-left1\"><a href=\"https://www.tiktok.com/@hayalet69692\"><div class=\"ten-khach-hang\">HAYALET  69</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/hayalet.png\"></a></div>\n                \n                <div class=\"quangcao-left2\"><a href=\"\"><div class=\"ten-khach-hang\">REKLAM ALANI âœ </div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div> \n                \n                <div class=\"quangcao-left3\"><a href=\"https://www.tiktok.com/ayyildiz_ded/\"><div class=\"ten-khach-hang\"> REKLAM ALANI</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div> \n                \n                <div class=\"quangcao-left4\"><a href=\"https://www.tiktok.com/@matadorr_5\"><div class=\"ten-khach-hang\">REKLAM ALANI</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div>  \n                \n                <div class=\"quangcao-left5\"><a href=\"https://www.tiktok.com/@hayalet69692\"><div class=\"ten-khach-hang\">REKLAM ALANI âœ</div><img src=\"https://wormatefriendsglobal.com/images/hiep_img/bosreklam.gif\"></a></div>  \n                </div>");
      $("#mm-advice-cont").html("<input type=\"button\" style=\"float: left;height: 35.5px;color: #000;font-size:18px;border-radius: 5px ;font-weight:600;background:#ffffff;width: 49%;font-family: vuonghiep;\" class=\"fullscreen_button\" value=\"F. SCREEN\"/><div class=\"nhac\"><a href=\"https://wormatefriendsglobal.com/\">Contact (Aktivasyon)</div>");
      $(".mm-merchant-cont").append("<div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width:97%' src='https://wormatefriendsglobal.com/images/hiep_img/r2.gif'/><a/></div><div style='float: left;'><a href=''><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r9.gif'/><a/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@sinan_gaming_67'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/mikaildisreklam.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@matadorr_5'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@hayalet69692'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@hayalet69692'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@guven_43_sima'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href=''><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@hayalet69692'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div><div style='float: left;'><a href='https://www.tiktok.com/@ayyildiz_ded'><img style='width: 97%;' src='https://wormatefriendsglobal.com/images/hiep_img/r1.png'/><a/></div>");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#mm-store").after("\n            <div id=\"mm-store\" style=\"float: right;position: relative; width:40px; margin-right: 25px; \" onclick=\"navigator.clipboard.writeText('" + vO16.FB_UserID + "').then(()=> alert('You ID " + vO16.FB_UserID + " copiado! copied!'));\"> Copy ID</Div>");
      $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://wormatefriendsglobal.com/images/hiep_img/hayaletarkafon.png);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
      $(".mm-merchant").replaceWith("");
      $("#markup-footer").replaceWith("\n            <footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language </button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\"></a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a>\n</div></div>\n            <a class=\"link\" hreflang=\"en\" href=\"/\">Home</a>\n            <a class=\"link\" hreflang=\"en\" href=\"https://wormatefriendsglobal.com\">  Wormate Friends GlobalÂ©</a>\n            \n            <a style=\"color: #00ff21;\"></a>\n            \n            </footer>");
      $(".description-text").replaceWith("\n                   <div style=\";padding: 0px;margin: 0;height:338px\" class=\"description-text\">\n                    <div id=\"title\">Wormate Friends Global</div>\n                    <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                        <a>\n                        <span class=\"flag br\" value=\"https://i.imgur.com/pReVs6K.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag mx\"  value=\"https://i.imgur.com/YSLUmBO.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag ca\" value=\"https://i.imgur.com/c90q4Qs.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag de\" value=\"https://i.imgur.com/cU5uwia.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag sg\" value=\"https://i.imgur.com/FviIPCg.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag au\" value=\"https://i.imgur.com/DlVbD1Y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span>\n                        </a>\n                    </li>\n                    \n                    </ul>\n                    \n                    <div class=\"gachngang\"></div>\n                    \n                    <div class=\"servers-container\">\n                    <div class=\"servers-peru\"></div>\n                    <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                    <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                    <div class=\"servers-canada\" style=\"display: none;\"></div>\n                    <div class=\"servers-germania\" style=\"display: none;\"></div>\n                    <div class=\"servers-francia\" style=\"display: none;\"></div>\n                    <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                    <div class=\"servers-japon\" style=\"display: none;\"></div>\n                    <div class=\"servers-australia\" style=\"display: none;\"></div>\n                    <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n                    \n                    \n                    \n                    </div>\n                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n                    \n                    \n                    ");
      $(".ui-tab").on("click", f220);
      $(".flag").click(function () {
        let v1100 = $(this).attr("value");
        vO16.flag = v1100;
        vO19.containerImgS.texture = vO19.onclickServer;
        retundFlagError();
        console.log(v1100);
      });
      for (a = 0; a < vO18.Api_listServer.length; a++) {
        var v1101 = vO18.Api_listServer[a].serverUrl;
        var v1102 = vO18.Api_listServer[a].name;
        var v1103 = vO18.Api_listServer[a].region;
        let v1104 = document.createElement("p");
        v1104.value = v1101;
        v1104.innerHTML = v1102;
        if (v1103 == "peru") {
          $(".servers-peru").prepend(v1104);
        } else if (v1103 == "mexico") {
          $(".servers-mexico").prepend(v1104);
        } else if (v1103 == "eeuu") {
          $(".servers-eeuu").prepend(v1104);
        } else if (v1103 == "canada") {
          $(".servers-canada").prepend(v1104);
        } else if (v1103 == "germania") {
          $(".servers-germania").prepend(v1104);
        } else if (v1103 == "francia") {
          $(".servers-francia").prepend(v1104);
        } else if (v1103 == "singapur") {
          $(".servers-singapur").prepend(v1104);
        } else if (v1103 == "japon") {
          $(".servers-japon").prepend(v1104);
        } else if (v1103 == "australia") {
          $(".servers-australia").prepend(v1104);
        } else if (v1103 == "granbretana") {
          $(".servers-granbretana").prepend(v1104);
        }
        $(v1104).attr("id", v1103);
        $(v1104).attr("class", "selectSala");
        $(v1104).attr("value", v1102);
        $(v1104).click(function () {
          vO19.setServer($(this).text());
          let v1105 = $(this).val();
          vO19.containerImgS.texture = vO19.onclickServer;
          retundFlagError();
          window.server_url = v1105;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function f210() {
      $("#getskin").on("click", function () {
        for (var vLN0188 = 0; vLN0188 < vO17.clientesActivos.length; vLN0188++) {
          var v1106 = vO17.clientesActivos[vLN0188].cliente_NOMBRE;
          var v1107 = vO17.clientesActivos[vLN0188].cliente_ID;
          var v1108 = vO17.clientesActivos[vLN0188].Client_VisibleSkin;
          var v1109 = vO17.clientesActivos[vLN0188].Client_VisibleSkin1;
          var v1110 = vO17.clientesActivos[vLN0188].Client_VisibleSkin2;
          var v1111 = vO17.clientesActivos[vLN0188].Client_VisibleSkin3;
          var v1112 = vO17.clientesActivos[vLN0188].Client_VisibleSkin4;
          var v1113 = vO17.clientesActivos[vLN0188].Client_VisibleSkin5;
          var v1114 = vO17.clientesActivos[vLN0188].Client_VisibleSkin6;
          var v1115 = vO17.clientesActivos[vLN0188].Client_VisibleSkin7;
          var v1116 = vO17.clientesActivos[vLN0188].Client_VisibleSkin8;
          var v1117 = vO17.clientesActivos[vLN0188].Client_VisibleSkin9;
          var v1118 = vO17.clientesActivos[vLN0188].Client_VisibleSkin10;
          var v1119 = vO17.clientesActivos[vLN0188].Client_VisibleSkin11;
          var v1120 = vO17.clientesActivos[vLN0188].Client_VisibleSkin12;
          var v1121 = vO17.clientesActivos[vLN0188].Client_VisibleSkin13;
          var v1122 = vO17.clientesActivos[vLN0188].Client_VisibleSkin14;
          var v1123 = vO17.clientesActivos[vLN0188].Client_VisibleSkin15;
          var v1124 = vO17.clientesActivos[vLN0188].Client_VisibleSkin16;
          var v1125 = vO17.clientesActivos[vLN0188].Client_VisibleSkin17;
          var v1126 = vO17.clientesActivos[vLN0188].Client_VisibleSkin18;
          var v1127 = vO17.clientesActivos[vLN0188].Client_VisibleSkin19;
          var v1128 = vO17.clientesActivos[vLN0188].Client_VisibleSkin20;
          var v1129 = vO17.clientesActivos[vLN0188].Client_KeyAccecs;
          if (vO16.FB_UserID == 0) {} else if (vO16.FB_UserID == v1107) {
            if (v1129 == "XTPRIVATESKIN") {
              for (let vLN0189 = 0; vLN0189 < vO16.idSkin.length; vLN0189++) {
                const v1130 = vO16.idSkin[vLN0189];
                if (v1130.id == v1108 || v1130.id == v1109 || v1130.id == v1110 || v1130.id == v1111 || v1130.id == v1112 || v1130.id == v1113 || v1130.id == v1114 || v1130.id == v1115 || v1130.id == v1116 || v1130.id == v1117 || v1130.id == v1118 || v1130.id == v1119 || v1130.id == v1120 || v1130.id == v1121 || v1130.id == v1122 || v1130.id == v1123 || v1130.id == v1124 || v1130.id == v1125 || v1130.id == v1126 || v1130.id == v1127 || v1130.id == v1128) {
                  v1130.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function f211() {
      vO16.adblock = true;
      $("#loa831pibur0w4gv").replaceWith("\n                \n                   <div class=\"list1\">      </div>\n                <div class=\"list1\">    </div>\n                <div class=\"list1\">      </div>  \n                  <div class=\"list1\">     </div>\n                  <div class=\"list1\">        </div>\n             \n            ");
      $("#mm-coins-box").replaceWith("<div style=\"margin: 0;\" id=\"mm-coins-box\">\n                \n                <button style='width: 304px;height: 45px;float: right;border-radius: 10px;border: solid #fac 2px;' id='getskin'>Unlock Skin (Desen Kilidi AÃ§ma)</button>\n  \n                </div>\n\n                </div>");
      window.multiplier = 0.625;
      function f212() {
        window.multiplier *= 1.1;
        changedNf();
      }
      function f213() {
        window.multiplier *= 0.9;
        changedNf();
      }
      document.getElementById("zoom-in").addEventListener("touchstart", f212);
      document.getElementById("zoom-out").addEventListener("touchstart", f213);
      window.onwheel = p1245 => {
        if (p1245.deltaY < 0) {
          f213();
        } else {
          f212();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO16.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          vO16.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var v1131 = localStorage.getItem("mySwitch");
        if (v1131 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          vO16.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          vO16.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO16.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          vO16.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var v1132 = localStorage.getItem("ModeStremer");
        if (v1132 === "true") {
          vO16.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          vO16.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO16.arrow = false;
        } else {
          console.log("I'm not checked");
          vO16.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        vO16.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO16.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO16.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO16.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO16.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO16.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO16.FoodSize = $(this).val();
        localStorage.ComidaSize = vO16.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO16.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO16.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (p1246) {
        if (isValidHotkey(p1246)) {
          var v$217 = $(this);
          var vGetPresedKey2 = getPresedKey(p1246);
          var v1133 = p1246.keyCode;
          v$217.val(vGetPresedKey2);
          v$217.blur();
          window.keyMove = v1133;
          window.localStorage.setItem(v$217.attr("id"), v1133);
        } else {
          p1246.preventDefault();
        }
      });
      for (a = 0; a < vA28.length; a++) {
        var v1134 = vA28[a].url;
        var v1135 = vA28[a].nombre;
        let v1136 = document.createElement("img");
        v1136.src = v1134;
        $(".cursor-container").prepend(v1136);
        $(v1136).attr("class", "cursor");
        $(v1136).click(function () {
          let v1137 = $(this).attr("src");
          localStorage.cursorSeleccionado = v1137;
          $("#game-cont").css({
            cursor: "url(" + v1137 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v1137 + "), default"
          });
          $("body").css({
            cursor: "url(" + v1137 + "), default"
          });
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < vA29.length; a++) {
        var v1138 = vA29[a].url;
        var v1139 = vA29[a].nombre;
        let v1140 = document.createElement("img");
        v1140.src = v1138;
        $(".background-container").prepend(v1140);
        $(v1140).attr("class", "background");
        $(v1140).attr("value", v1139);
        $(v1140).click(function () {
          let v1141 = $(this).attr("src");
          let v1142 = $(this).attr("value");
          backgroundIMG = v1141;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v1142);
          vUndefined28.q.Cf = new vF81._b(vUndefined28.q.fn_o(v1141));
        });
      }
      $(".background-container").prepend("");
      vUndefined28.q.Cf = new vF81._b(vUndefined28.q.fn_o(localStorage.fondoSeleccionado));
    }
    function f214() {
      $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://i.imgur.com/Y3keVY4.jpg);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
      $(".description-text").replaceWith("<div class=\"description-text\">");
      $(".description-text").prepend("<p id='title'>Wormate Friends</p>");
      $("#title").after("<div id=\"idwormworld\" style=\"text-align: center\"><div class='logo'><img src='https://wormatefriendsglobal.com/images/hiep_img/logo.png'/></div>\n        <input type=\"text\" value=\"" + vO16.FB_UserID + "\" style=\"width: 230px;text-align: center;border-radius: 4px;font-size: 20px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button onclick=\"navigator.clipboard.writeText('" + vO16.FB_UserID + "').then(()=> alert('You ID " + vO16.FB_UserID + " copiado! copied!'));\">COPY</button>\n    </div>\n<div></div>\n<div><input type=\"button\" value=\"ACTIVATE ALL\" target=\"_blank\" onclick=\"window.location.href='" + MYPAGE + "'\" style=\"margin-top: 5px; width: 100%\"></div>");
    }
    function f215(p1247, p1248) {
      let vF160 = function (p1249, p1250, p1251, p1252) {
        vO19.setCountGame(p1249, p1250, p1251, p1252);
      };
      if (p1247 === "count") {
        vO16.kill = (vO16.kill || 0) + (p1248 ? 0 : 1);
        vO16.headshot = (vO16.headshot || 0) + (p1248 ? 1 : 0);
        vO16.totalKills = vO16.totalKills + (p1248 ? 0 : 1);
        vO16.totalHeadshots = vO16.totalHeadshots + (p1248 ? 1 : 0);
        vF160(vO16.kill, vO16.headshot, vO16.totalKills, vO16.totalHeadshots);
      }
      if (p1247 === "open") {
        vO16.kill = 0;
        vO16.headshot = 0;
        $("#contadorKill_12").show();
        vF160(vO16.kill, vO16.headshot, vO16.totalKills, vO16.totalHeadshots);
      }
      if (p1247 === "closed") {
        vO14 = {};
      }
      if (p1247 === "cerrar") {
        vO16.kill = 0;
        vO16.headshot = 0;
        vO16.totalKills = 0;
        vO16.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var vA30 = ["fuck you", "Ã„â€˜Ã¡Â»â€¹t", "cÃƒÂ¡i lÃ¡Â»â€œn", "chÃƒÂ³", "Ã„â€˜ÃƒÂ©o", "lÃ¡Â»â€œn", "Ã„â€˜ÃƒÂ©o", "Ã„â€˜Ã¡Â»â€¹t", "vÃƒÂ£i lÃ¡Â»â€œn", "cÃ¡ÂºÂ·c"];
      $("#mm-action-play").on("click", function () {
        var v1143 = $("#mm-params-nickname").val();
        var v1144 = vA30.some(function (p1253) {
          return v1143.toLowerCase().includes(p1253.toLowerCase());
        });
        if (v1144) {
          $("#mm-params-nickname").val("VÃ„Æ’n Minh LÃƒÂªn BÃ¡ÂºÂ¡n");
        }
      });
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#relojHelp").css("position", "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var vF227 = function f216() {
      requestAnimationFrame(f216);
      f115().Pa();
    };
    vF227();
    function f217() {
      var v1145 = v$218.width();
      var v1146 = v$218.height();
      var v1147 = v$219.outerWidth();
      var v1148 = v$219.outerHeight();
      var v1149 = v$220.outerHeight();
      var v1150 = v$221.outerHeight();
      var v1151 = Math.min(1, Math.min((v1146 - v1150 - v1149) / v1148, v1145 / v1147));
      var v1152 = "translate(-50%, -50%) scale(" + v1151 + ")";
      v$219.css({
        "-webkit-transform": v1152,
        "-moz-transform": v1152,
        "-ms-transform": v1152,
        "-o-transform": v1152,
        transform: v1152
      });
      f115().Ra();
      window.scrollTo(0, 1);
    }
    var v$218 = $("body");
    var v$219 = $("#stretch-box");
    var v$220 = $("#markup-header");
    var v$221 = $("#markup-footer");
    f217();
    $(window).resize(f217);
  })();
  window.anApp.p.Bc = function () {
    var v1153 = window.anApp.p;
    var vO31 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p1254) {
      vO31 = p1254;
      fetch("https://wormatefriendsglobal.com/api/skins.php").then(p1255 => p1255.json()).then(p1256 => {
        vO16.visibleSkin = p1256.visibleSkin;
        delete p1256.visibleSkin;
        for (let v1154 in p1256) {
          if (v1154 !== "propertyList") {
            if (Array.isArray(p1256[v1154])) {
              p1254[v1154] = p1254[v1154].concat(p1256[v1154]);
            } else {
              p1254[v1154] = {
                ...p1254[v1154],
                ...p1256[v1154]
              };
            }
          }
        }
        vO16.pL = p1256.propertyList;
        vO16.idSkin = p1256.skinArrayDict;
        v1153.Cc(p1254);
      }).catch(function (p1257) {
        console.error(p1257);
        v1153.Cc(vO31);
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://wormatefriendsglobal.com/images/hiep_img/arkfon.png/);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google </div>");
});
function f218() {
  var v1155 = document.getElementById("popup");
  var v1156 = document.getElementById("overlay");
  v1155.style.display = "block";
  v1156.style.display = "block";
}
function f219() {
  var v1157 = document.getElementById("popup");
  var v1158 = document.getElementById("overlay");
  v1157.style.display = "none";
  v1158.style.display = "none";
}
function f220() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (p1258) {
  var vLS11 = "";
  if (p1258.keyCode == 9) {
    vLS11 += "TAB";
  } else if (p1258.keyCode == 13) {
    vLS11 += "ENTER";
  } else if (p1258.keyCode == 16) {
    vLS11 += "SHIFT";
  } else {
    vLS11 += String.fromCharCode(p1258.keyCode);
  }
  return vLS11;
};
getStringKey = function (p1259) {
  var vLS12 = "";
  if (p1259 == 9) {
    vLS12 += "TAB";
  } else if (p1259 == 13) {
    vLS12 += "ENTER";
  } else if (p1259 == 16) {
    vLS12 += "SHIFT";
  } else if (p1259 == 32) {
    vLS12 += "SPACE";
  } else if (p1259 == 27) {
    vLS12 += "ESC";
  } else {
    vLS12 += String.fromCharCode(p1259);
  }
  return vLS12;
};
isValidHotkey = function (p1260) {
  if (p1260.keyCode >= 48 && p1260.keyCode <= 57 || p1260.keyCode >= 65 && p1260.keyCode <= 90 || p1260.keyCode == 9 || p1260.keyCode == 13 || p1260.keyCode == 16 || p1260.keyCode == 32 || p1260.keyCode == 27) {
    return true;
  } else {
    return false;
  }
};
console.log("Core 2022 THEO Update 2023");
eval(function (p1261, p1262, p1263, p1264, p1265, p1266) {
  p1265 = function (p1267) {
    return (p1267 < p1262 ? "" : p1265(parseInt(p1267 / p1262))) + ((p1267 = p1267 % p1262) > 35 ? String.fromCharCode(p1267 + 29) : p1267.toString(36));
  };
  if (!"".replace(/^/, String)) {
    while (p1263--) {
      p1266[p1265(p1263)] = p1264[p1263] || p1265(p1263);
    }
    p1264 = [function (p1268) {
      return p1266[p1268];
    }];
    p1265 = function () {
      return "\\w+";
    };
    p1263 = 1;
  }
  ;
  while (p1263--) {
    if (p1264[p1263]) {
      p1261 = p1261.replace(new RegExp("\\b" + p1265(p1263) + "\\b", "g"), p1264[p1263]);
    }
  }
  return p1261;
}("q(Q()){J c={u:()=>3=1.0,e:()=>3>0.5?3+=0.5:3*=2,p:()=>3>0.5?3-=0.5:3/=2};P f=$('<6 L=\"4-8-S\"><9>#4-8-S {C: 1m;z-1l: W;n: 1k%;1j: 1i;}#4-8-j {C: 1h;1g: 0 1f;n: 1e;a: l;l-1a: 1c;B-I: 1b-13;H-K: d;} #4-8-j > 6 { F: E;19-r: #D;r: #o;v: T 12 #o;v-18: 10;n: m;Z: m;17-16: X;a: l;B-I: d;H-K: d;}</9><6 L=\"4-8-j\" 9=\"\"><6 h=\"4-7-M\"> - </6><6 h=\"4-7-O\"> = </6><6 h=\"4-7-e\"> + </6></6></6>').1d('#1p-1w');f.x('.4-7-e').k(c.p).N().x('.4-7-M').k(c.e).N().x('.4-7-O').k(c.u)}q(Q()){J c={u:()=>3=1.0,e:()=>3>0.5?3+=0.5:3*=2,p:()=>3>0.5?3-=0.5:3/=2};P f=$('#4-8-j');y g=$('<6 h=\"4-7-1z\">1u</6>');g.1o({F:'E',1y:'#D',r:'#o',v:'T 12 #o',1E:'10',n:'m',Z:'m',1q:'X',a:'l',1H:'d',1r:'d',});g.k(w(){U.11('1s 1t tÄ±1vÄ±!');y b=1x.1A('b');q(b.9.a==='V'){b.9.a='1B'}1C{b.9.a='V'}});f.1D(g)}w G(A){1F(w(){U.11('Y iÅŸ1G 1nÄ±. Y sÃ¼14: '+A+' 15')},A)}y R=W;G(R);", 62, 106, "|||TRZM|wm||div|zoom|mobile|style|display|settingContent|fZoom|center|in|trzBtns|newButton|class||buttons|click|flex|36px|width|8ab021|ot|if|color|||_n|border|function|find|var||pingTime|justify|position|000|pointer|cursor|simulatePing|align|content|const|items|id|out|end|normal|let|RechekingPhone|pingTimeInMilliseconds|box|1px|console|block|1000|bold|Ping|height|50px|log|solid|between|resi|ms|weight|font|radius|background|wrap|space|nowrap|prependTo|120px|auto|margin|relative|10px|top|100|index|fixed|tamamland|css|game|fontWeight|alignItems|Yeni|buton|Ayar|kland|view|document|backgroundColor|new|getElementById|none|else|append|borderRadius|setInterval|lemi|justifyContent".split("|"), 0, {}));
window.addEventListener("load", () => {
  const v1159 = document.querySelector("#mm-line-bottom");
  const v1160 = document.querySelectorAll(".mm-merchant-cont");

  // Mouse olaylarÄ± iÃ§in event listener ekleme
  v1159.addEventListener("mouseenter", () => {
    f221(v1160);
  });
  v1159.addEventListener("mouseleave", () => {
    f222(v1160);
  });
});

// Animasyonu durdur
function f221(p1269) {
  p1269.forEach(p1270 => {
    p1270.style.animationPlayState = "paused";
  });
}

// Animasyonu baÅŸlat
function f222(p1271) {
  p1271.forEach(p1272 => {
    p1272.style.animationPlayState = "running";
  });
}
window.multiplier = 0.625;
async function f223() {
  const vLSHttpswormatefriendsg2 = "https://wormatefriendsglobal.com/kufur.txt";
  try {
    const v1161 = await fetch(vLSHttpswormatefriendsg2);
    if (!v1161.ok) {
      throw new Error("Network response was not ok");
    }
    const v1162 = await v1161.text();
    console.log("Fetched bad words:", v1162);
    return v1162.split("\n").map(p1273 => p1273.trim().toLowerCase()).filter(p1274 => p1274 !== "");
  } catch (e48) {
    console.error("Fetching bad words failed:", e48);
    return [];
  }
}
async function f224() {
  const v1163 = await f223();
  if (v1163.length === 0) {
    console.warn("No bad words loaded");
  }
  document.getElementById("mm-params-nickname").addEventListener("input", function () {
    const v1164 = this.value.toLowerCase();
    let v1165 = false;
    for (let vLN0190 = 0; vLN0190 < v1163.length; vLN0190++) {
      const v1166 = v1163[vLN0190];
      if (v1164.includes(v1166)) {
        v1165 = true;
        break;
      }
    }
    if (v1165) {
      this.value = "kÃ¼fÃ¼rlÃ¼isim";
    }
  });
}
f224();
document.addEventListener("DOMContentLoaded", p1288 => {
  function f225() {
    // TÃ¼m Ã¶ÄŸeleri iÃ§eren kapsayÄ±cÄ±yÄ± bul
    const v1167 = document.querySelectorAll("#game-canvas");
    v1167.forEach(p1289 => {
      // KapsayÄ±cÄ± iÃ§inde "TOP 10 SERVER" baÅŸlÄ±ÄŸÄ±nÄ± bul
      const v1168 = Array.from(p1289.querySelectorAll("div")).find(p1290 => p1290.textContent.includes("TOP 10 SERVER"));
      if (v1168) {
        // "TOP 10 SERVER" baÅŸlÄ±ÄŸÄ±ndan sonra gelen listeyi bul
        const v1181 = v1168.nextElementSibling;
        if (v1181) {
          const v1182 = v1181.querySelectorAll("div"); // Liste elemanlarÄ±nÄ± seÃ§
          v1182.forEach((p1291, p1292) => {
            if (p1292 >= 3) {
              p1291.style.display = "none"; // 3. sÄ±radan sonrasÄ±nÄ± gizle
            }
          });
        }
      }
    });
  }
  f225();
});

// SaÄŸ tÄ±k menÃ¼sÃ¼nÃ¼ engelleme
document.addEventListener("contextmenu", function (p1293) {
  p1293.preventDefault();
});

// KÄ±sayol tuÅŸlarÄ±nÄ± engelleme (Ã¶rneÄŸin: Ctrl+Shift+I)
document.addEventListener("keydown", function (p1294) {
  if (p1294.ctrlKey && p1294.shiftKey && p1294.key === "I") {
    p1294.preventDefault();
  }
});
const allDishes = [
  // ========== 荤菜 meat 1-40 ==========
  {id:1,name:"东北红烧肉",region:"东北菜",category:"meat",time:"45min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:35,calories:580,protein:32,carbs:15,fat:45,fiber:6,sodium:890,image:"assets/image_1_yi19x4.jpg",favorite:true,
    ingredients:[{name:"五花肉",amount:"500g",isMain:true},{name:"冰糖",amount:"30g",isMain:true},{name:"生抽",amount:"3勺",isMain:false},{name:"老抽",amount:"2勺",isMain:false},{name:"料酒",amount:"2勺",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"八角",amount:"2个",isMain:false},{name:"桂皮",amount:"1小段",isMain:false}],
    steps:[{title:"焯水去腥",description:"五花肉切3cm方块，冷水下锅加料酒焯水3分钟，捞出洗净沥干"},{title:"炒糖色",description:"锅中少许油，放入冰糖小火炒至焦糖色起泡"},{title:"翻炒上色",description:"放入五花肉翻炒至每块均匀裹上糖色，加葱姜蒜八角桂皮爆香"},{title:"炖煮入味",description:"加生抽老抽料酒，倒入热水没过肉面，大火烧开后转小火炖60分钟至酥烂"},{title:"大火收汁",description:"开大火收汁至浓稠，汤汁包裹肉块即可出锅"}]},
  {id:2,name:"锅包肉",region:"东北菜",category:"meat",time:"30min",difficulty:"",spicy:false,servings:"2-3人份",price:32,calories:420,protein:28,carbs:35,fat:22,fiber:2,sodium:520,image:"assets/image_2_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪里脊",amount:"300g",isMain:true},{name:"淀粉",amount:"适量",isMain:true},{name:"番茄酱",amount:"3勺",isMain:false},{name:"白糖",amount:"2勺",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"胡萝卜丝",amount:"少许",isMain:false}],
    steps:[{title:"切肉挂糊",description:"里脊切厚片，加盐腌制10分钟，裹上水淀粉糊"},{title:"炸至金黄",description:"油温六成热，逐片下锅炸至定型捞出，油温升高再复炸一次至金黄酥脆"},{title:"调糖醋汁",description:"番茄酱、白糖、醋、少许水调匀"},{title:"快速翻炒",description:"锅中少许油，倒入糖醋汁烧开，放入炸好的肉片快速翻炒裹汁即可"}]},
  {id:3,name:"小鸡炖蘑菇",region:"东北菜",category:"meat",time:"60min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:38,calories:350,protein:30,carbs:12,fat:22,fiber:4,sodium:680,image:"assets/image_3_yi19x4.jpg",favorite:false,
    ingredients:[{name:"三黄鸡",amount:"半只",isMain:true},{name:"干榛蘑",amount:"50g",isMain:true},{name:"粉条",amount:"100g",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"八角",amount:"2个",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"泡发蘑菇",description:"干榛蘑提前用温水泡发30分钟，洗净泥沙，粉条也提前泡软"},{title:"煸炒鸡块",description:"鸡块焯水后，热油煸炒至表面微焦"},{title:"炖煮",description:"加入葱姜蒜八角炒香，加生抽翻炒，倒入热水没过鸡块，大火烧开转小火炖40分钟"},{title:"加配菜",description:"加入泡好的榛蘑和粉条，继续炖15分钟至入味收汁"}]},
  {id:4,name:"铁锅炖大鹅",region:"东北菜",category:"meat",time:"90min",difficulty:"难度中等",spicy:false,servings:"4-5人份",price:55,calories:480,protein:35,carbs:18,fat:32,fiber:5,sodium:720,image:"assets/image_4_yi19x4.jpg",favorite:false,
    ingredients:[{name:"大鹅",amount:"半只",isMain:true},{name:"土豆",amount:"2个",isMain:true},{name:"酸菜",amount:"200g",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"八角桂皮",amount:"各2个",isMain:false},{name:"生抽老抽",amount:"各2勺",isMain:false}],
    steps:[{title:"处理鹅肉",description:"鹅肉剁块焯水去血沫，土豆去皮切块"},{title:"煸炒鹅肉",description:"热油加冰糖炒糖色，放入鹅块翻炒上色，加葱姜蒜八角桂皮爆香"},{title:"慢炖",description:"加生抽老抽料酒，加热水大火烧开转小火炖60分钟"},{title:"加配菜收汁",description:"放入土豆和酸菜继续炖20分钟至土豆软糯，大火收汁出锅"}]},
  {id:5,name:"东北酸菜炖粉条",region:"东北菜",category:"meat",time:"25min",difficulty:"",spicy:false,servings:"2-3人份",price:22,calories:280,protein:8,carbs:22,fat:18,fiber:3,sodium:650,image:"assets/image_5_yi19x4.jpg",favorite:false,
    ingredients:[{name:"酸菜",amount:"300g",isMain:true},{name:"粉条",amount:"100g",isMain:true},{name:"五花肉",amount:"50g",isMain:false},{name:"葱姜",amount:"适量",isMain:false},{name:"生抽",amount:"1勺",isMain:false}],
    steps:[{title:"处理食材",description:"酸菜切丝，粉条提前泡软，五花肉切片"},{title:"煸炒",description:"热油煸炒五花肉至出油，加葱姜爆香"},{title:"炖煮",description:"放入酸菜翻炒，加清水大火烧开转小火炖15分钟"},{title:"加粉条",description:"放入粉条继续炖5分钟至入味，加盐调味出锅"}]},
  {id:6,name:"溜肉段",region:"东北菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:28,calories:380,protein:25,carbs:20,fat:24,fiber:1,sodium:480,image:"assets/image_6_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪里脊",amount:"250g",isMain:true},{name:"淀粉",amount:"适量",isMain:true},{name:"青椒",amount:"1个",isMain:false},{name:"胡萝卜",amount:"少许",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"醋",amount:"1勺",isMain:false}],
    steps:[{title:"切肉挂糊",description:"里脊切小段，加盐料酒腌制10分钟，裹淀粉糊"},{title:"炸制",description:"油温六成热炸至金黄捞出，油温升高复炸至酥脆"},{title:"调汁",description:"生抽醋糖淀粉水调匀成溜汁"},{title:"翻炒",description:"锅中留底油爆香配菜，倒入溜汁烧开，放入肉段快速翻炒出锅"}]},
  {id:7,name:"排骨炖豆角",region:"东北菜",category:"meat",time:"50min",difficulty:"",spicy:false,servings:"3-4人份",price:42,calories:420,protein:28,carbs:20,fat:28,fiber:5,sodium:580,image:"assets/image_7_yi19x4.jpg",favorite:false,
    ingredients:[{name:"排骨",amount:"400g",isMain:true},{name:"豆角",amount:"300g",isMain:true},{name:"土豆",amount:"1个",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"八角",amount:"1个",isMain:false}],
    steps:[{title:"焯水",description:"排骨冷水下锅焯水去血沫捞出"},{title:"煸炒",description:"热油爆香葱姜蒜八角，放入排骨翻炒至微焦"},{title:"炖煮",description:"加生抽翻炒，加热水没过排骨，大火烧开转小火炖30分钟"},{title:"加配菜",description:"放入豆角和土豆继续炖20分钟至软烂，大火收汁"}]},
  {id:8,name:"东北乱炖",region:"东北菜",category:"meat",time:"40min",difficulty:"",spicy:false,servings:"3-4人份",price:35,calories:380,protein:20,carbs:30,fat:22,fiber:6,sodium:620,image:"assets/image_8_yi19x4.jpg",favorite:false,
    ingredients:[{name:"五花肉",amount:"200g",isMain:true},{name:"土豆",amount:"2个",isMain:true},{name:"茄子",amount:"1根",isMain:false},{name:"豆角",amount:"200g",isMain:false},{name:"西红柿",amount:"1个",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false}],
    steps:[{title:"处理食材",description:"所有食材切滚刀块"},{title:"煸肉",description:"热油煸炒五花肉至出油，加葱姜蒜爆香"},{title:"炖煮",description:"依次放入土豆、豆角、茄子、西红柿，加生抽和热水炖25分钟"},{title:"调味",description:"加盐调味，大火收汁至浓稠出锅"}]},
  {id:9,name:"拔丝地瓜",region:"东北菜",category:"meat",time:"15min",difficulty:"",spicy:false,servings:"2人份",price:18,calories:320,protein:2,carbs:65,fat:8,fiber:3,sodium:20,image:"assets/image_9_yi19x4.jpg",favorite:false,
    ingredients:[{name:"地瓜",amount:"2个",isMain:true},{name:"白糖",amount:"100g",isMain:true},{name:"食用油",amount:"适量",isMain:false}],
    steps:[{title:"切地瓜",description:"地瓜去皮切滚刀块"},{title:"炸制",description:"油温五成热炸地瓜至金黄熟透捞出"},{title:"熬糖",description:"锅中留少许油，放白糖小火熬至焦糖色起泡"},{title:"拔丝",description:"放入炸好的地瓜快速翻炒均匀，出锅装盘趁热食用"}]},
  {id:10,name:"地三鲜",region:"东北菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2-3人份",price:22,calories:280,protein:8,carbs:22,fat:18,fiber:5,sodium:450,image:"assets/image_10_yi19x4.jpg",favorite:false,
    ingredients:[{name:"茄子",amount:"2根",isMain:true},{name:"土豆",amount:"1个",isMain:true},{name:"青椒",amount:"2个",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"淀粉",amount:"适量",isMain:false}],
    steps:[{title:"处理食材",description:"茄子切块裹淀粉，土豆切块，青椒掰块"},{title:"炸制",description:"油温七成热，分别炸土豆和茄子至金黄捞出"},{title:"翻炒",description:"锅中留底油爆香蒜末，放入青椒翻炒，加入炸好的土豆茄子"},{title:"调味收汁",description:"加生抽蚝油调味，水淀粉勾芡翻炒均匀出锅"}]},
  {id:11,name:"糖醋鲤鱼",region:"山东菜",category:"meat",time:"60min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:48,calories:380,protein:28,carbs:35,fat:12,fiber:1,sodium:680,image:"assets/image_11_yi19x4.jpg",favorite:false,
    ingredients:[{name:"鲤鱼",amount:"1条",isMain:true},{name:"淀粉",amount:"适量",isMain:true},{name:"番茄酱",amount:"3勺",isMain:false},{name:"白糖",amount:"2勺",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false}],
    steps:[{title:"处理鱼",description:"鲤鱼去鳞去内脏，鱼身划刀，加料酒盐腌制20分钟"},{title:"挂糊炸制",description:"鱼身裹淀粉糊，油温七成热炸至金黄酥脆捞出"},{title:"调糖醋汁",description:"锅中爆香葱姜蒜，加番茄酱糖醋水烧开"},{title:"浇汁",description:"水淀粉勾芡，将糖醋汁浇在炸好的鱼上即可"}]},
  {id:12,name:"葱烧海参",region:"山东菜",category:"meat",time:"45min",difficulty:"难度中等",spicy:false,servings:"2-3人份",price:88,calories:180,protein:25,carbs:10,fat:8,fiber:2,sodium:520,image:"assets/image_12_yi19x4.jpg",favorite:false,
    ingredients:[{name:"海参",amount:"4条",isMain:true},{name:"大葱",amount:"3根",isMain:true},{name:"生抽",amount:"2勺",isMain:false},{name:"蚝油",amount:"1勺",isMain:false},{name:"淀粉",amount:"适量",isMain:false}],
    steps:[{title:"发海参",description:"干海参提前泡发好，焯水备用"},{title:"煎葱",description:"大葱切段，热油煎至焦黄出香"},{title:"烧海参",description:"放入海参，加生抽蚝油和少许水，小火烧10分钟入味"},{title:"勾芡",description:"水淀粉勾芡，大火收汁出锅"}]},
  {id:13,name:"九转大肠",region:"山东菜",category:"meat",time:"50min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:58,calories:420,protein:28,carbs:15,fat:30,fiber:1,sodium:680,image:"assets/image_13_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪大肠",amount:"500g",isMain:true},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"生抽老抽",amount:"各2勺",isMain:false},{name:"醋",amount:"1勺",isMain:false},{name:"白糖",amount:"1勺",isMain:false},{name:"胡椒粉",amount:"少许",isMain:false}],
    steps:[{title:"处理大肠",description:"大肠反复清洗干净，焯水后切段"},{title:"煸炒",description:"热油爆香葱姜蒜，放入大肠翻炒"},{title:"调味",description:"加生抽老抽醋糖胡椒粉，加热水炖30分钟"},{title:"收汁",description:"大火收汁至浓稠，撒香菜出锅"}]},
  {id:14,name:"油焖大虾",region:"山东菜",category:"meat",time:"25min",difficulty:"",spicy:false,servings:"2-3人份",price:65,calories:280,protein:35,carbs:8,fat:14,fiber:1,sodium:480,image:"assets/image_14_yi19x4.jpg",favorite:false,
    ingredients:[{name:"大虾",amount:"500g",isMain:true},{name:"姜蒜",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"番茄酱",amount:"1勺",isMain:false},{name:"白糖",amount:"1勺",isMain:false}],
    steps:[{title:"处理虾",description:"大虾去虾线，剪虾须，洗净沥干"},{title:"煎虾",description:"热油将虾煎至两面变红出虾油"},{title:"焖制",description:"加姜蒜爆香，放生抽番茄酱糖和少许水，小火焖5分钟"},{title:"收汁",description:"大火收汁至浓稠，虾身裹满汤汁出锅"}]},
  {id:15,name:"德州扒鸡",region:"山东菜",category:"meat",time:"90min",difficulty:"难度中等",spicy:false,servings:"4-5人份",price:68,calories:450,protein:40,carbs:8,fat:30,fiber:1,sodium:720,image:"assets/image_15_yi19x4.jpg",favorite:false,
    ingredients:[{name:"整鸡",amount:"1只",isMain:true},{name:"蜂蜜",amount:"2勺",isMain:false},{name:"生抽老抽",amount:"各3勺",isMain:false},{name:"八角桂皮",amount:"各2个",isMain:false},{name:"葱姜",amount:"适量",isMain:false}],
    steps:[{title:"处理鸡",description:"整鸡清理干净，抹蜂蜜水晾干"},{title:"炸鸡",description:"油温七成热，将鸡炸至金黄捞出"},{title:"炖煮",description:"锅中放所有调料和鸡，加清水没过，大火烧开转小火炖60分钟"},{title:"收汁",description:"大火收汁至浓稠，淋在鸡身上即可"}]},
  {id:16,name:"木须肉",region:"山东菜",category:"meat",time:"15min",difficulty:"",spicy:false,servings:"2人份",price:25,calories:280,protein:22,carbs:12,fat:18,fiber:2,sodium:520,image:"assets/image_16_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪肉",amount:"150g",isMain:true},{name:"鸡蛋",amount:"2个",isMain:true},{name:"木耳",amount:"50g",isMain:false},{name:"黄瓜",amount:"1根",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"备料",description:"猪肉切片，木耳泡发撕小朵，黄瓜切片"},{title:"炒蛋",description:"鸡蛋打散炒熟盛出"},{title:"炒肉",description:"热油滑炒肉片至变色，加木耳翻炒"},{title:"合炒",description:"放入鸡蛋和黄瓜，加生抽调味翻炒均匀出锅"}]},
  {id:17,name:"炸荷花",region:"山东菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:28,calories:250,protein:5,carbs:30,fat:14,fiber:2,sodium:120,image:"assets/image_17_yi19x4.jpg",favorite:false,
    ingredients:[{name:"荷花花瓣",amount:"12片",isMain:true},{name:"鸡蛋",amount:"1个",isMain:true},{name:"面粉",amount:"50g",isMain:false},{name:"淀粉",amount:"30g",isMain:false},{name:"白糖",amount:"适量",isMain:false}],
    steps:[{title:"调糊",description:"鸡蛋面粉淀粉加水调成脆浆糊"},{title:"挂糊",description:"荷花花瓣洗净沥干，裹上脆浆糊"},{title:"炸制",description:"油温六成热，逐片下锅炸至金黄酥脆"},{title:"装盘",description:"捞出控油，撒上白糖即可食用"}]},
  {id:18,name:"山东酥锅",region:"山东菜",category:"meat",time:"120min",difficulty:"难度中等",spicy:false,servings:"4-5人份",price:48,calories:380,protein:25,carbs:20,fat:25,fiber:4,sodium:850,image:"assets/image_18_yi19x4.jpg",favorite:false,
    ingredients:[{name:"五花肉",amount:"300g",isMain:true},{name:"白菜",amount:"半颗",isMain:true},{name:"豆腐",amount:"1块",isMain:false},{name:"海带",amount:"100g",isMain:false},{name:"莲藕",amount:"1节",isMain:false},{name:"葱姜",amount:"适量",isMain:false}],
    steps:[{title:"处理食材",description:"所有食材切大块"},{title:"码放",description:"砂锅底铺白菜，依次码放五花肉、豆腐、海带、莲藕"},{title:"焖制",description:"加生抽老抽醋糖和适量水，大火烧开转最小火焖2小时"},{title:"出锅",description:"自然冷却后更入味，切块装盘即可"}]},
  {id:19,name:"衢州三头一掌",region:"衢州菜",category:"meat",time:"30min",difficulty:"",spicy:true,servings:"3-4人份",price:45,calories:380,protein:30,carbs:8,fat:25,fiber:2,sodium:1240,image:"assets/image_19_yi19x4.jpg",favorite:true,
    ingredients:[{name:"鸭头",amount:"2个",isMain:true},{name:"鸭掌",amount:"4个",isMain:true},{name:"干辣椒",amount:"50g",isMain:false},{name:"花椒",amount:"20g",isMain:false},{name:"生姜",amount:"大片",isMain:false},{name:"料酒",amount:"2勺",isMain:false},{name:"生抽老抽",amount:"各2勺",isMain:false}],
    steps:[{title:"处理鸭件",description:"鸭头鸭掌焯水去腥，从中间劈开便于入味"},{title:"炒制底料",description:"热油爆香姜片干辣椒花椒，加生抽老抽料酒炒出红油"},{title:"慢炖入味",description:"放入鸭头鸭掌翻炒均匀，加热水大火烧开转小火炖40分钟"},{title:"大火收汁",description:"开大火收汁至浓稠，汤汁包裹鸭件，撒上芝麻出锅"}]},
  {id:20,name:"衢州烤饼",region:"衢州菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:15,calories:350,protein:10,carbs:55,fat:12,fiber:3,sodium:380,image:"assets/image_20_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"200g",isMain:true},{name:"猪肉末",amount:"100g",isMain:true},{name:"葱花",amount:"适量",isMain:false},{name:"榨菜",amount:"少许",isMain:false},{name:"生抽",amount:"1勺",isMain:false}],
    steps:[{title:"和面",description:"面粉加温水揉成面团，醒发20分钟"},{title:"调馅",description:"肉末加榨菜末葱花生抽调匀"},{title:"包饼",description:"面团分小剂子，包入馅料擀成薄饼"},{title:"烤制",description:"平底锅刷油，放入饼烙至两面金黄熟透"}]},
  {id:21,name:"衢州豆腐干",region:"衢州菜",category:"meat",time:"15min",difficulty:"",spicy:true,servings:"2人份",price:12,calories:180,protein:15,carbs:8,fat:12,fiber:2,sodium:580,image:"assets/image_21_yi19x4.jpg",favorite:false,
    ingredients:[{name:"豆腐干",amount:"200g",isMain:true},{name:"干辣椒",amount:"5个",isMain:false},{name:"花椒",amount:"少许",isMain:false},{name:"蒜末",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"切豆干",description:"豆腐干切三角块"},{title:"煎制",description:"热油煎至两面金黄盛出"},{title:"炒香",description:"锅中留底油爆香干辣椒花椒蒜末"},{title:"翻炒",description:"放入豆干，加生抽和少许水翻炒入味出锅"}]},
  {id:22,name:"辣椒炒肉",region:"家常菜",category:"meat",time:"15min",difficulty:"",spicy:true,servings:"2人份",price:22,calories:350,protein:25,carbs:5,fat:28,fiber:2,sodium:480,image:"assets/image_22_yi19x4.jpg",favorite:false,
    ingredients:[{name:"五花肉",amount:"200g",isMain:true},{name:"青椒",amount:"3个",isMain:true},{name:"豆豉",amount:"1勺",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"蒜片",amount:"适量",isMain:false}],
    steps:[{title:"切片",description:"五花肉切薄片，青椒切片"},{title:"煸肉",description:"锅中少许油放入五花肉煸至微焦出油"},{title:"炒青椒",description:"加豆豉蒜片爆香，放入青椒大火翻炒"},{title:"调味",description:"加生抽调味翻炒均匀出锅"}]},
  {id:23,name:"回锅肉",region:"川菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2-3人份",price:30,calories:420,protein:25,carbs:12,fat:32,fiber:2,sodium:580,image:"assets/image_23_yi19x4.jpg",favorite:false,
    ingredients:[{name:"五花肉",amount:"300g",isMain:true},{name:"蒜苗",amount:"200g",isMain:true},{name:"豆瓣酱",amount:"2勺",isMain:false},{name:"甜面酱",amount:"1勺",isMain:false},{name:"葱姜",amount:"适量",isMain:false},{name:"花椒",amount:"少许",isMain:false}],
    steps:[{title:"煮肉",description:"五花肉整块冷水下锅加花椒葱姜煮至八成熟捞出晾凉"},{title:"切片",description:"晾凉的五花肉切薄片"},{title:"煸肉",description:"锅中少许油放入肉片煸至卷曲出油"},{title:"调味",description:"加豆瓣酱甜面酱炒出红油，放入蒜苗段翻炒至断生出锅"}]},
  {id:24,name:"麻婆豆腐",region:"川菜",category:"meat",time:"15min",difficulty:"",spicy:true,servings:"2人份",price:18,calories:220,protein:15,carbs:8,fat:14,fiber:3,sodium:520,image:"assets/image_24_yi19x4.jpg",favorite:false,
    ingredients:[{name:"豆腐",amount:"1块",isMain:true},{name:"肉末",amount:"100g",isMain:true},{name:"豆瓣酱",amount:"2勺",isMain:false},{name:"花椒粉",amount:"适量",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"淀粉",amount:"适量",isMain:false}],
    steps:[{title:"豆腐处理",description:"豆腐切2cm方块，放入加了盐的开水中焯烫2分钟捞出备用"},{title:"炒肉末",description:"热油炒散肉末至变色，加入豆瓣酱炒出红油"},{title:"炖豆腐",description:"加入适量热水烧开，放入豆腐轻轻推匀，小火炖5分钟入味"},{title:"勾芡出锅",description:"水淀粉勾芡至汤汁浓稠，撒上花椒粉和葱花出锅"}]},
  {id:25,name:"水煮牛肉",region:"川菜",category:"meat",time:"30min",difficulty:"难度中等",spicy:true,servings:"3-4人份",price:45,calories:350,protein:38,carbs:8,fat:18,fiber:2,sodium:890,image:"assets/image_25_yi19x4.jpg",favorite:false,
    ingredients:[{name:"牛肉",amount:"300g",isMain:true},{name:"豆芽",amount:"200g",isMain:true},{name:"干辣椒",amount:"30g",isMain:false},{name:"花椒",amount:"20g",isMain:false},{name:"蛋清",amount:"1个",isMain:false},{name:"豆瓣酱",amount:"2勺",isMain:false}],
    steps:[{title:"腌牛肉",description:"牛肉切薄片，加盐料酒蛋清淀粉抓匀腌制15分钟"},{title:"煮底菜",description:"豆芽焯水铺在大碗底部"},{title:"煮牛肉",description:"锅中炒香豆瓣酱加水烧开，逐片放入牛肉煮熟，连汤倒入碗中"},{title:"浇热油",description:"牛肉上撒干辣椒花椒，烧一勺热油浇上去即可"}]},
  {id:26,name:"鱼香肉丝",region:"川菜",category:"meat",time:"15min",difficulty:"",spicy:false,servings:"2-3人份",price:25,calories:300,protein:22,carbs:20,fat:14,fiber:2,sodium:580,image:"assets/image_26_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪里脊",amount:"200g",isMain:true},{name:"木耳",amount:"50g",isMain:true},{name:"胡萝卜",amount:"1根",isMain:false},{name:"青椒",amount:"1个",isMain:false},{name:"豆瓣酱",amount:"1勺",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false}],
    steps:[{title:"切丝腌制",description:"里脊切丝加盐料酒淀粉腌制，木耳泡发切丝，胡萝卜青椒切丝"},{title:"炒肉丝",description:"热油滑炒肉丝至变色盛出"},{title:"炒配菜",description:"锅中爆香豆瓣酱葱姜蒜，放入胡萝卜青椒木耳翻炒"},{title:"合炒",description:"倒回肉丝，加鱼香汁(醋酱油糖淀粉)快速翻炒裹匀出锅"}]},
  {id:27,name:"宫保鸡丁",region:"川菜",category:"meat",time:"15min",difficulty:"",spicy:false,servings:"2-3人份",price:28,calories:320,protein:28,carbs:18,fat:16,fiber:2,sodium:480,image:"assets/image_27_yi19x4.jpg",favorite:false,
    ingredients:[{name:"鸡胸肉",amount:"250g",isMain:true},{name:"花生米",amount:"50g",isMain:true},{name:"干辣椒",amount:"8个",isMain:false},{name:"花椒",amount:"少许",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"醋",amount:"1勺",isMain:false}],
    steps:[{title:"腌制鸡丁",description:"鸡胸肉切丁加盐料酒淀粉腌制15分钟"},{title:"炒花生",description:"小火炒花生米至酥脆盛出备用"},{title:"炒鸡丁",description:"热油爆香干辣椒花椒，放入鸡丁翻炒至变白"},{title:"调味收汁",description:"加宫保汁(醋酱油糖淀粉)翻炒均匀，最后放入花生米翻炒出锅"}]},
  {id:28,name:"红烧排骨",region:"家常菜",category:"meat",time:"45min",difficulty:"",spicy:false,servings:"3-4人份",price:45,calories:520,protein:30,carbs:15,fat:38,fiber:2,sodium:620,image:"assets/image_28_yi19x4.jpg",favorite:false,
    ingredients:[{name:"排骨",amount:"500g",isMain:true},{name:"冰糖",amount:"20g",isMain:false},{name:"生抽老抽",amount:"各2勺",isMain:false},{name:"料酒",amount:"2勺",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"八角桂皮",amount:"各1个",isMain:false}],
    steps:[{title:"焯水",description:"排骨冷水下锅加料酒焯水去血沫捞出"},{title:"炒糖色",description:"锅中少许油加冰糖炒至焦糖色"},{title:"炖煮",description:"放入排骨翻炒上色，加葱姜蒜八角桂皮，倒入热水没过排骨，大火烧开转小火炖40分钟"},{title:"收汁",description:"大火收汁至浓稠，汤汁包裹排骨出锅"}]},
  {id:29,name:"可乐鸡翅",region:"家常菜",category:"meat",time:"30min",difficulty:"",spicy:false,servings:"2-3人份",price:22,calories:320,protein:25,carbs:35,fat:10,fiber:0,sodium:420,image:"assets/image_29_yi19x4.jpg",favorite:false,
    ingredients:[{name:"鸡翅",amount:"8个",isMain:true},{name:"可乐",amount:"1罐",isMain:true},{name:"生抽",amount:"2勺",isMain:false},{name:"老抽",amount:"1勺",isMain:false},{name:"姜片",amount:"适量",isMain:false}],
    steps:[{title:"处理鸡翅",description:"鸡翅两面划刀便于入味，冷水下锅焯水捞出"},{title:"煎鸡翅",description:"锅中少许油煎至两面金黄"},{title:"炖煮",description:"倒入可乐没过鸡翅，加生抽老抽姜片"},{title:"收汁",description:"大火烧开转小火炖20分钟，最后大火收汁至浓稠"}]},
  {id:30,name:"糖醋里脊",region:"家常菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2-3人份",price:35,calories:380,protein:25,carbs:40,fat:15,fiber:1,sodium:380,image:"assets/image_30_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪里脊",amount:"300g",isMain:true},{name:"淀粉",amount:"适量",isMain:true},{name:"番茄酱",amount:"3勺",isMain:false},{name:"白糖",amount:"2勺",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"鸡蛋",amount:"1个",isMain:false}],
    steps:[{title:"切肉腌制",description:"里脊切条加盐料酒腌制10分钟，裹上鸡蛋和淀粉糊"},{title:"炸至酥脆",description:"油温六成热炸至定型捞出，油温升至八成复炸至金黄"},{title:"调汁",description:"番茄酱白糖醋少许水调匀"},{title:"翻炒裹汁",description:"锅中倒汁烧开，放入炸好的里脊快速翻炒裹匀即可"}]},
  {id:31,name:"西红柿炒鸡蛋",region:"家常菜",category:"meat",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:180,protein:12,carbs:10,fat:10,fiber:2,sodium:320,image:"assets/image_31_yi19x4.jpg",favorite:false,
    ingredients:[{name:"西红柿",amount:"2个",isMain:true},{name:"鸡蛋",amount:"3个",isMain:true},{name:"葱花",amount:"适量",isMain:false},{name:"白糖",amount:"1勺",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"炒鸡蛋",description:"鸡蛋打散加少许盐，热油炒至金黄凝固盛出"},{title:"炒西红柿",description:"锅中少许油放入西红柿块翻炒至出汁"},{title:"合炒调味",description:"倒入炒好的鸡蛋，加白糖盐调味翻炒均匀"},{title:"出锅",description:"撒上葱花翻炒两下即可出锅"}]},
  {id:32,name:"青椒肉丝",region:"家常菜",category:"meat",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:18,calories:220,protein:20,carbs:6,fat:14,fiber:1,sodium:420,image:"assets/image_32_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪肉",amount:"150g",isMain:true},{name:"青椒",amount:"2个",isMain:true},{name:"生抽",amount:"2勺",isMain:false},{name:"淀粉",amount:"适量",isMain:false},{name:"料酒",amount:"1勺",isMain:false}],
    steps:[{title:"切丝腌制",description:"猪肉切丝加盐料酒淀粉腌制，青椒切丝"},{title:"炒肉丝",description:"热油滑炒肉丝至变色盛出"},{title:"炒青椒",description:"锅中留底油放入青椒大火翻炒"},{title:"合炒",description:"倒回肉丝，加生抽调味翻炒均匀出锅"}]},
  {id:33,name:"红烧茄子",region:"家常菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:15,calories:250,protein:5,carbs:20,fat:16,fiber:4,sodium:450,image:"assets/image_33_yi19x4.jpg",favorite:false,
    ingredients:[{name:"茄子",amount:"2根",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"老抽",amount:"1勺",isMain:false},{name:"白糖",amount:"1勺",isMain:false}],
    steps:[{title:"切茄子",description:"茄子切成滚刀块，加盐腌制10分钟挤去水分"},{title:"煎茄子",description:"锅中多放油，将茄子煎至两面金黄软烂盛出"},{title:"调味",description:"锅中留底油爆香蒜末，加生抽老抽白糖和少许水"},{title:"收汁",description:"放入茄子翻炒均匀，大火收汁至浓稠出锅"}]},
  {id:34,name:"黄焖鸡",region:"家常菜",category:"meat",time:"40min",difficulty:"",spicy:false,servings:"3-4人份",price:38,calories:420,protein:32,carbs:25,fat:22,fiber:3,sodium:680,image:"assets/image_34_yi19x4.jpg",favorite:false,
    ingredients:[{name:"三黄鸡",amount:"半只",isMain:true},{name:"土豆",amount:"2个",isMain:true},{name:"青椒",amount:"2个",isMain:false},{name:"香菇",amount:"5朵",isMain:false},{name:"生抽老抽",amount:"各2勺",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false}],
    steps:[{title:"焯水",description:"鸡肉剁块焯水去血沫捞出"},{title:"煸炒",description:"热油爆香葱姜蒜，放入鸡块翻炒至微焦"},{title:"焖制",description:"加生抽老抽翻炒，加香菇土豆和热水，大火烧开转小火焖25分钟"},{title:"加青椒",description:"放入青椒继续焖5分钟，大火收汁出锅"}]},
  {id:35,name:"干锅花菜",region:"家常菜",category:"meat",time:"15min",difficulty:"",spicy:true,servings:"2-3人份",price:18,calories:180,protein:6,carbs:14,fat:12,fiber:4,sodium:520,image:"assets/image_35_yi19x4.jpg",favorite:false,
    ingredients:[{name:"花菜",amount:"1个",isMain:true},{name:"五花肉",amount:"50g",isMain:false},{name:"干辣椒",amount:"5个",isMain:false},{name:"蒜苗",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"处理花菜",description:"花菜掰成小朵洗净沥干"},{title:"煸炒",description:"锅中少许油煸炒五花肉至出油，加干辣椒爆香"},{title:"炒花菜",description:"放入花菜大火翻炒至微焦"},{title:"调味",description:"加生抽蚝油调味，放入蒜苗翻炒均匀出锅"}]},
  {id:36,name:"蒜蓉虾",region:"家常菜",category:"meat",time:"20min",difficulty:"",spicy:false,servings:"2-3人份",price:58,calories:250,protein:35,carbs:5,fat:12,fiber:1,sodium:420,image:"assets/image_36_yi19x4.jpg",favorite:false,
    ingredients:[{name:"鲜虾",amount:"500g",isMain:true},{name:"大蒜",amount:"10瓣",isMain:true},{name:"生抽",amount:"2勺",isMain:false},{name:"蚝油",amount:"1勺",isMain:false},{name:"葱花",amount:"适量",isMain:false}],
    steps:[{title:"处理虾",description:"大虾去虾线开背，洗净沥干"},{title:"炒蒜蓉",description:"热油爆香蒜末(留一半)"},{title:"焖虾",description:"放入虾翻炒至变色，加生抽蚝油和少许水，小火焖3分钟"},{title:"出锅",description:"撒上剩余蒜末和葱花，大火收汁即可"}]},
  {id:37,name:"黑椒牛柳",region:"家常菜",category:"meat",time:"15min",difficulty:"",spicy:false,servings:"2人份",price:42,calories:280,protein:32,carbs:8,fat:14,fiber:1,sodium:480,image:"assets/image_37_yi19x4.jpg",favorite:false,
    ingredients:[{name:"牛柳",amount:"250g",isMain:true},{name:"黑胡椒",amount:"适量",isMain:true},{name:"洋葱",amount:"半个",isMain:false},{name:"青椒",amount:"1个",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"淀粉",amount:"适量",isMain:false}],
    steps:[{title:"腌制牛肉",description:"牛柳切条，加盐料酒生抽淀粉黑胡椒腌制15分钟"},{title:"滑炒",description:"温油滑炒牛柳至变色盛出"},{title:"炒配菜",description:"锅中爆香洋葱青椒"},{title:"合炒",description:"倒回牛柳，加黑椒汁快速翻炒均匀出锅"}]},
  {id:38,name:"酸菜鱼",region:"川菜",category:"meat",time:"30min",difficulty:"难度中等",spicy:true,servings:"3-4人份",price:42,calories:320,protein:35,carbs:10,fat:15,fiber:2,sodium:780,image:"assets/image_38_yi19x4.jpg",favorite:false,
    ingredients:[{name:"草鱼",amount:"1条",isMain:true},{name:"酸菜",amount:"200g",isMain:true},{name:"泡椒",amount:"5个",isMain:false},{name:"蛋清",amount:"1个",isMain:false},{name:"淀粉",amount:"适量",isMain:false},{name:"葱姜",amount:"适量",isMain:false}],
    steps:[{title:"片鱼片",description:"草鱼去骨片薄片，加盐蛋清淀粉抓匀腌制15分钟"},{title:"炒酸菜",description:"热油爆香葱姜泡椒，放入酸菜翻炒出香味"},{title:"煮鱼汤",description:"加热水烧开后放入鱼骨熬煮10分钟，捞出鱼骨"},{title:"汆鱼片",description:"转小火逐片放入鱼片，煮至变白即熟，盛出撒花椒辣椒热油浇上"}]},
  {id:39,name:"剁椒鱼头",region:"湘菜",category:"meat",time:"25min",difficulty:"难度中等",spicy:true,servings:"3-4人份",price:48,calories:280,protein:30,carbs:8,fat:15,fiber:1,sodium:720,image:"assets/image_39_yi19x4.jpg",favorite:false,
    ingredients:[{name:"鱼头",amount:"1个",isMain:true},{name:"剁椒",amount:"100g",isMain:true},{name:"姜蒜",amount:"适量",isMain:false},{name:"蒸鱼豉油",amount:"2勺",isMain:false},{name:"料酒",amount:"2勺",isMain:false}],
    steps:[{title:"处理鱼头",description:"鱼头清理干净，从中间劈开不切断，加料酒腌制"},{title:"铺剁椒",description:"鱼头摆盘，铺上剁椒和姜蒜末"},{title:"蒸制",description:"水开后上锅大火蒸15分钟"},{title:"浇汁",description:"淋上蒸鱼豉油，浇热油激香出锅"}]},
  {id:40,name:"辣子鸡",region:"川菜",category:"meat",time:"20min",difficulty:"",spicy:true,servings:"2-3人份",price:32,calories:380,protein:28,carbs:10,fat:26,fiber:2,sodium:620,image:"assets/image_40_yi19x4.jpg",favorite:false,
    ingredients:[{name:"鸡胸肉",amount:"300g",isMain:true},{name:"干辣椒",amount:"50g",isMain:true},{name:"花椒",amount:"20g",isMain:false},{name:"花生米",amount:"50g",isMain:false},{name:"葱姜蒜",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"腌制鸡肉",description:"鸡肉切丁加盐料酒生抽淀粉腌制20分钟"},{title:"炸鸡丁",description:"油温六成热炸至金黄，油温升高复炸至酥脆"},{title:"炒香",description:"锅中留底油爆香干辣椒花椒葱姜蒜"},{title:"翻炒",description:"放入鸡丁和花生米，加少许盐糖翻炒均匀出锅"}]},
  // ========== 素菜 veggie 41-60 ==========
  {id:41,name:"干煸四季豆",region:"川菜",category:"veggie",time:"10min",difficulty:"",spicy:true,servings:"2人份",price:14,calories:160,protein:4,carbs:14,fat:10,fiber:3,sodium:380,image:"assets/image_41_yi19x4.jpg",favorite:false,
    ingredients:[{name:"四季豆",amount:"300g",isMain:true},{name:"肉末",amount:"50g",isMain:false},{name:"干辣椒",amount:"3个",isMain:false},{name:"蒜末",amount:"适量",isMain:false},{name:"榨菜",amount:"少许",isMain:false}],
    steps:[{title:"煸四季豆",description:"四季豆去筋掰段，锅中少油煸至表皮起皱熟透盛出"},{title:"炒肉末",description:"锅中爆香肉末干辣椒蒜末榨菜"},{title:"合炒",description:"放入煸好的四季豆翻炒均匀"},{title:"调味",description:"加少许生抽盐调味出锅"}]},
  {id:42,name:"醋溜白菜",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:120,protein:3,carbs:12,fat:8,fiber:2,sodium:420,image:"assets/image_42_yi19x4.jpg",favorite:false,
    ingredients:[{name:"白菜",amount:"半颗",isMain:true},{name:"醋",amount:"2勺",isMain:true},{name:"干辣椒",amount:"2个",isMain:false},{name:"花椒",amount:"少许",isMain:false},{name:"生抽",amount:"1勺",isMain:false}],
    steps:[{title:"切白菜",description:"白菜帮切片，菜叶掰块"},{title:"爆香",description:"热油爆香花椒干辣椒捞出"},{title:"翻炒",description:"先放白菜帮炒至半软，再放菜叶大火快炒"},{title:"调味",description:"加醋生抽盐调味，水淀粉勾芡出锅"}]},
  {id:43,name:"拍黄瓜",region:"家常菜",category:"veggie",time:"5min",difficulty:"",spicy:false,servings:"2人份",price:8,calories:60,protein:2,carbs:6,fat:3,fiber:1,sodium:280,image:"assets/image_43_yi19x4.jpg",favorite:false,
    ingredients:[{name:"黄瓜",amount:"2根",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"辣椒油",amount:"1勺",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"拍黄瓜",description:"黄瓜洗净，用刀拍裂切小段"},{title:"腌制",description:"黄瓜加盐腌制5分钟杀出水分，倒掉"},{title:"调味",description:"加蒜末醋生抽辣椒油香油拌匀"},{title:"装盘",description:"装盘即可食用"}]},
  {id:44,name:"虎皮青椒",region:"家常菜",category:"veggie",time:"15min",difficulty:"",spicy:true,servings:"2人份",price:10,calories:120,protein:3,carbs:8,fat:8,fiber:3,sodium:380,image:"assets/image_44_yi19x4.jpg",favorite:false,
    ingredients:[{name:"青椒",amount:"6个",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"醋",amount:"1勺",isMain:false},{name:"白糖",amount:"1勺",isMain:false}],
    steps:[{title:"处理青椒",description:"青椒洗净去籽去蒂，用刀背拍扁"},{title:"煎虎皮",description:"平底锅不放油，放入青椒煎至两面起虎皮斑盛出"},{title:"调汁",description:"生抽醋糖蒜末调匀"},{title:"翻炒",description:"锅中倒汁烧开，放入青椒翻炒均匀收汁出锅"}]},
  {id:45,name:"素炒西兰花",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:80,protein:5,carbs:10,fat:3,fiber:4,sodium:280,image:"assets/image_45_yi19x4.jpg",favorite:false,
    ingredients:[{name:"西兰花",amount:"1个",isMain:true},{name:"大蒜",amount:"5瓣",isMain:false},{name:"盐",amount:"适量",isMain:false},{name:"蚝油",amount:"1勺",isMain:false}],
    steps:[{title:"处理西兰花",description:"西兰花掰成小朵，淡盐水浸泡10分钟后洗净"},{title:"焯水",description:"锅中水烧开加少许油盐，焯水1分钟捞出过凉水"},{title:"炒蒜蓉",description:"锅中油爆香蒜末"},{title:"翻炒",description:"放入西兰花翻炒，加蚝油盐调味出锅"}]},
  {id:46,name:"手撕包菜",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:true,servings:"2人份",price:10,calories:100,protein:3,carbs:8,fat:6,fiber:3,sodium:320,image:"assets/image_46_yi19x4.jpg",favorite:false,
    ingredients:[{name:"包菜",amount:"半个",isMain:true},{name:"干辣椒",amount:"5个",isMain:false},{name:"蒜末",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"醋",amount:"1勺",isMain:false}],
    steps:[{title:"手撕包菜",description:"包菜洗净去硬梗，用手撕成小块"},{title:"爆香",description:"热油爆香干辣椒蒜末"},{title:"翻炒",description:"放入包菜大火快炒"},{title:"调味",description:"加生抽醋盐调味翻炒均匀出锅"}]},
  {id:47,name:"蒜蓉娃娃菜",region:"家常菜",category:"veggie",time:"15min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:90,protein:3,carbs:8,fat:5,fiber:3,sodium:380,image:"assets/image_47_yi19x4.jpg",favorite:false,
    ingredients:[{name:"娃娃菜",amount:"3棵",isMain:true},{name:"大蒜",amount:"8瓣",isMain:false},{name:"粉丝",amount:"1把",isMain:false},{name:"蒸鱼豉油",amount:"2勺",isMain:false}],
    steps:[{title:"处理娃娃菜",description:"娃娃菜洗净切四瓣，粉丝泡软铺底"},{title:"摆盘",description:"娃娃菜码在粉丝上"},{title:"炒蒜蓉",description:"热油爆香蒜末(留一半生蒜)"},{title:"蒸制",description:"撒上蒜蓉，水开后蒸8分钟，淋豉油浇热油即可"}]},
  {id:48,name:"香菇青菜",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:100,protein:5,carbs:8,fat:5,fiber:4,sodium:320,image:"assets/image_48_yi19x4.jpg",favorite:false,
    ingredients:[{name:"青菜",amount:"200g",isMain:true},{name:"香菇",amount:"5朵",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"蚝油",amount:"1勺",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"处理食材",description:"青菜洗净对半切开，香菇切片"},{title:"焯水",description:"青菜焯水30秒捞出摆盘"},{title:"炒香菇",description:"热油爆香蒜末炒香菇至软"},{title:"调味",description:"加蚝油和少许水，勾芡后浇在青菜上"}]},
  {id:49,name:"酸辣土豆丝",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:true,servings:"2人份",price:10,calories:150,protein:3,carbs:22,fat:6,fiber:3,sodium:320,image:"assets/image_49_yi19x4.jpg",favorite:false,
    ingredients:[{name:"土豆",amount:"2个",isMain:true},{name:"干辣椒",amount:"3个",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"葱花",amount:"适量",isMain:false},{name:"花椒",amount:"少许",isMain:false}],
    steps:[{title:"切丝",description:"土豆去皮切细丝，泡入清水去除淀粉沥干"},{title:"爆香",description:"热油爆香花椒干辣椒捞出"},{title:"翻炒",description:"放入土豆丝大火快炒，沿锅边淋醋"},{title:"调味",description:"加盐调味翻炒均匀，撒葱花出锅"}]},
  {id:50,name:"油焖茄子",region:"家常菜",category:"veggie",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:200,protein:3,carbs:18,fat:13,fiber:4,sodium:380,image:"assets/image_50_yi19x4.jpg",favorite:false,
    ingredients:[{name:"茄子",amount:"2根",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false},{name:"老抽",amount:"1勺",isMain:false},{name:"白糖",amount:"1勺",isMain:false}],
    steps:[{title:"切茄子",description:"茄子切滚刀块，加盐腌制10分钟挤去水分"},{title:"煎制",description:"锅中多放油，将茄子煎至软烂"},{title:"调味",description:"锅中留底油爆香蒜末，加生抽老抽白糖和少许水"},{title:"焖制",description:"放入茄子小火焖5分钟，大火收汁出锅"}]},
  {id:51,name:"清炒时蔬",region:"家常菜",category:"veggie",time:"8min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:80,protein:3,carbs:6,fat:5,fiber:3,sodium:280,image:"assets/image_51_yi19x4.jpg",favorite:false,
    ingredients:[{name:"时令青菜",amount:"300g",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"处理青菜",description:"青菜洗净沥干"},{title:"热油",description:"锅中油烧至七成热，爆香蒜末"},{title:"翻炒",description:"放入青菜大火快炒至断生"},{title:"调味",description:"加盐调味翻炒均匀出锅"}]},
  {id:52,name:"韭菜炒鸡蛋",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:180,protein:12,carbs:8,fat:12,fiber:2,sodium:320,image:"assets/image_52_yi19x4.jpg",favorite:false,
    ingredients:[{name:"韭菜",amount:"200g",isMain:true},{name:"鸡蛋",amount:"3个",isMain:true},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"处理韭菜",description:"韭菜洗净切段，鸡蛋打散"},{title:"炒蛋",description:"热油倒入蛋液炒至凝固盛出"},{title:"炒韭菜",description:"锅中留底油放入韭菜大火快炒"},{title:"合炒",description:"倒入鸡蛋，加盐调味翻炒均匀出锅"}]},
  {id:53,name:"家常豆腐",region:"家常菜",category:"veggie",time:"15min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:200,protein:15,carbs:10,fat:12,fiber:2,sodium:420,image:"assets/image_53_yi19x4.jpg",favorite:false,
    ingredients:[{name:"豆腐",amount:"1块",isMain:true},{name:"猪肉",amount:"50g",isMain:false},{name:"豆瓣酱",amount:"1勺",isMain:false},{name:"蒜苗",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"切豆腐",description:"豆腐切三角块，猪肉切片"},{title:"煎豆腐",description:"热油将豆腐煎至两面金黄盛出"},{title:"炒肉",description:"锅中爆香肉片豆瓣酱"},{title:"合炒",description:"放入豆腐，加生抽和少许水焖2分钟，撒蒜苗出锅"}]},
  {id:54,name:"凉拌三丝",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:120,protein:8,carbs:10,fat:6,fiber:2,sodium:380,image:"assets/image_54_yi19x4.jpg",favorite:false,
    ingredients:[{name:"黄瓜",amount:"1根",isMain:true},{name:"胡萝卜",amount:"1根",isMain:true},{name:"粉丝",amount:"50g",isMain:true},{name:"蒜末",amount:"适量",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"辣椒油",amount:"1勺",isMain:false}],
    steps:[{title:"处理食材",description:"黄瓜胡萝卜切丝，粉丝泡软焯水"},{title:"焯水",description:"胡萝卜丝焯水30秒捞出过凉"},{title:"调汁",description:"蒜末醋生抽辣椒油香油盐调匀"},{title:"拌匀",description:"所有食材放碗中，倒入调料汁拌匀即可"}]},
  {id:55,name:"炝拌土豆丝",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:140,protein:3,carbs:20,fat:5,fiber:3,sodium:320,image:"assets/image_55_yi19x4.jpg",favorite:false,
    ingredients:[{name:"土豆",amount:"2个",isMain:true},{name:"干辣椒",amount:"3个",isMain:false},{name:"花椒",amount:"少许",isMain:false},{name:"蒜末",amount:"适量",isMain:false},{name:"醋",amount:"2勺",isMain:false}],
    steps:[{title:"切丝",description:"土豆去皮切细丝，泡水去除淀粉"},{title:"焯水",description:"水开焯土豆丝30秒至断生，捞出过凉水"},{title:"爆香",description:"热油爆香花椒干辣椒"},{title:"拌匀",description:"土豆丝加蒜末醋生抽盐，浇上热油拌匀"}]},
  {id:56,name:"东北大拌菜",region:"东北菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2-3人份",price:12,calories:100,protein:4,carbs:12,fat:5,fiber:4,sodium:280,image:"assets/image_56_yi19x4.jpg",favorite:false,
    ingredients:[{name:"黄瓜",amount:"1根",isMain:true},{name:"西红柿",amount:"1个",isMain:true},{name:"紫甘蓝",amount:"100g",isMain:true},{name:"葱花",amount:"适量",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"白糖",amount:"1勺",isMain:false}],
    steps:[{title:"处理食材",description:"所有蔬菜洗净，黄瓜拍段，西红柿切块，紫甘蓝切丝"},{title:"调汁",description:"醋生抽白糖香油盐调匀"},{title:"拌匀",description:"所有食材放碗中，倒入调料汁"},{title:"装盘",description:"拌匀即可食用"}]},
  {id:57,name:"蒜蓉蒸茄子",region:"家常菜",category:"veggie",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:130,protein:4,carbs:14,fat:7,fiber:3,sodium:380,image:"assets/image_57_yi19x4.jpg",favorite:false,
    ingredients:[{name:"茄子",amount:"2根",isMain:true},{name:"大蒜",amount:"10瓣",isMain:true},{name:"生抽",amount:"2勺",isMain:false},{name:"香油",amount:"少许",isMain:false}],
    steps:[{title:"处理茄子",description:"茄子洗净切条，泡水10分钟"},{title:"蒸制",description:"茄子放盘中，水开后蒸10分钟至软烂"},{title:"炒蒜蓉",description:"热油爆香蒜末至金黄"},{title:"调味",description:"茄子取出，铺上蒜蓉，淋生抽香油即可"}]},
  {id:58,name:"干锅包菜",region:"家常菜",category:"veggie",time:"15min",difficulty:"",spicy:true,servings:"2人份",price:12,calories:140,protein:4,carbs:10,fat:9,fiber:3,sodium:420,image:"assets/image_58_yi19x4.jpg",favorite:false,
    ingredients:[{name:"包菜",amount:"半个",isMain:true},{name:"五花肉",amount:"50g",isMain:false},{name:"干辣椒",amount:"5个",isMain:false},{name:"蒜片",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"手撕包菜",description:"包菜洗净去硬梗，撕成小块"},{title:"煸肉",description:"锅中少许油煸五花肉至出油，加干辣椒蒜片爆香"},{title:"炒包菜",description:"放入包菜大火翻炒至微软"},{title:"调味",description:"加生抽盐调味翻炒均匀出锅"}]},
  {id:59,name:"地瓜拔丝",region:"东北菜",category:"veggie",time:"15min",difficulty:"",spicy:false,servings:"2人份",price:18,calories:320,protein:2,carbs:65,fat:8,fiber:3,sodium:20,image:"assets/image_59_yi19x4.jpg",favorite:false,
    ingredients:[{name:"地瓜",amount:"2个",isMain:true},{name:"白糖",amount:"100g",isMain:true},{name:"食用油",amount:"适量",isMain:false}],
    steps:[{title:"切地瓜",description:"地瓜去皮切滚刀块"},{title:"炸制",description:"油温五成热炸地瓜至金黄熟透捞出"},{title:"熬糖",description:"锅中留少许油，放白糖小火熬至焦糖色起泡"},{title:"拔丝",description:"放入炸好的地瓜快速翻炒均匀，出锅装盘趁热食用"}]},
  {id:60,name:"凉拌木耳",region:"家常菜",category:"veggie",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:80,protein:5,carbs:10,fat:3,fiber:5,sodium:280,image:"assets/image_60_yi19x4.jpg",favorite:false,
    ingredients:[{name:"干木耳",amount:"30g",isMain:true},{name:"黄瓜",amount:"1根",isMain:false},{name:"胡萝卜",amount:"少许",isMain:false},{name:"蒜末",amount:"适量",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"辣椒油",amount:"1勺",isMain:false}],
    steps:[{title:"泡发木耳",description:"干木耳提前泡发，洗净撕小朵"},{title:"焯水",description:"水开焯木耳2分钟，捞出过凉沥干"},{title:"处理配菜",description:"黄瓜胡萝卜切丝"},{title:"拌匀",description:"所有食材放碗中，加蒜末醋生抽辣椒油盐拌匀"}]},
  // ========== 汤 soup 61-75 ==========
  {id:61,name:"西红柿鸡蛋汤",region:"家常菜",category:"soup",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:100,protein:6,carbs:8,fat:6,fiber:2,sodium:380,image:"assets/image_61_yi19x4.jpg",favorite:false,
    ingredients:[{name:"西红柿",amount:"2个",isMain:true},{name:"鸡蛋",amount:"2个",isMain:true},{name:"葱花",amount:"适量",isMain:false},{name:"香油",amount:"少许",isMain:false},{name:"淀粉",amount:"适量",isMain:false}],
    steps:[{title:"炒番茄",description:"西红柿切块，热油翻炒至出汁"},{title:"煮汤",description:"加适量水烧开，加盐调味"},{title:"甩蛋花",description:"水淀粉勾芡，淋入蛋液形成蛋花"},{title:"出锅",description:"撒葱花滴香油即可"}]},
  {id:62,name:"紫菜蛋花汤",region:"家常菜",category:"soup",time:"5min",difficulty:"",spicy:false,servings:"2人份",price:8,calories:80,protein:6,carbs:5,fat:5,fiber:1,sodium:420,image:"assets/image_62_yi19x4.jpg",favorite:false,
    ingredients:[{name:"紫菜",amount:"10g",isMain:true},{name:"鸡蛋",amount:"1个",isMain:true},{name:"虾皮",amount:"少许",isMain:false},{name:"葱花",amount:"适量",isMain:false},{name:"香油",amount:"少许",isMain:false}],
    steps:[{title:"烧水",description:"锅中加适量水烧开"},{title:"加紫菜",description:"放入紫菜和虾皮煮2分钟"},{title:"甩蛋花",description:"鸡蛋打散，淋入锅中形成蛋花"},{title:"调味",description:"加盐调味，撒葱花滴香油出锅"}]},
  {id:63,name:"酸辣汤",region:"川菜",category:"soup",time:"15min",difficulty:"",spicy:true,servings:"2-3人份",price:15,calories:150,protein:10,carbs:12,fat:8,fiber:2,sodium:520,image:"assets/image_63_yi19x4.jpg",favorite:false,
    ingredients:[{name:"豆腐",amount:"1块",isMain:true},{name:"木耳",amount:"30g",isMain:true},{name:"鸡蛋",amount:"2个",isMain:false},{name:"醋",amount:"3勺",isMain:false},{name:"胡椒粉",amount:"2勺",isMain:false},{name:"淀粉",amount:"适量",isMain:false}],
    steps:[{title:"处理食材",description:"豆腐木耳切丝，鸡蛋打散"},{title:"煮汤",description:"锅中加水烧开，放入豆腐木耳丝煮5分钟"},{title:"调味",description:"加醋胡椒粉盐调味，水淀粉勾芡"},{title:"甩蛋花",description:"淋入蛋液形成蛋花，撒葱花出锅"}]},
  {id:64,name:"排骨莲藕汤",region:"家常菜",category:"soup",time:"90min",difficulty:"",spicy:false,servings:"3-4人份",price:38,calories:320,protein:25,carbs:15,fat:18,fiber:3,sodium:480,image:"assets/image_64_yi19x4.jpg",favorite:false,
    ingredients:[{name:"排骨",amount:"400g",isMain:true},{name:"莲藕",amount:"1节",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false},{name:"料酒",amount:"2勺",isMain:false}],
    steps:[{title:"焯水",description:"排骨冷水下锅加料酒焯水去血沫捞出"},{title:"炖汤",description:"锅中放排骨葱姜，加热水大火烧开转小火炖50分钟"},{title:"加莲藕",description:"莲藕去皮切块，放入汤中继续炖30分钟"},{title:"调味",description:"加盐调味即可"}]},
  {id:65,name:"冬瓜排骨汤",region:"家常菜",category:"soup",time:"60min",difficulty:"",spicy:false,servings:"3-4人份",price:32,calories:280,protein:25,carbs:8,fat:18,fiber:2,sodium:480,image:"assets/image_65_yi19x4.jpg",favorite:false,
    ingredients:[{name:"排骨",amount:"400g",isMain:true},{name:"冬瓜",amount:"300g",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false},{name:"料酒",amount:"2勺",isMain:false}],
    steps:[{title:"焯水",description:"排骨冷水下锅加料酒焯水去血沫捞出"},{title:"炖汤",description:"锅中放排骨葱姜，加热水大火烧开转小火炖40分钟"},{title:"加冬瓜",description:"冬瓜去皮切块，放入汤中继续炖15分钟"},{title:"调味",description:"加盐调味，撒葱花出锅"}]},
  {id:66,name:"鸡汤",region:"家常菜",category:"soup",time:"120min",difficulty:"",spicy:false,servings:"3-4人份",price:42,calories:300,protein:28,carbs:5,fat:20,fiber:1,sodium:420,image:"assets/image_66_yi19x4.jpg",favorite:false,
    ingredients:[{name:"整鸡",amount:"半只",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"枸杞",amount:"少许",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"焯水",description:"鸡块冷水下锅焯水去血沫捞出"},{title:"炖汤",description:"锅中放鸡块葱姜，加热水大火烧开转小火炖90分钟"},{title:"去浮沫",description:"中途撇去浮沫保持汤清"},{title:"调味",description:"加盐调味，撒枸杞出锅"}]},
  {id:67,name:"羊肉汤",region:"西北菜",category:"soup",time:"90min",difficulty:"",spicy:false,servings:"3-4人份",price:45,calories:380,protein:30,carbs:8,fat:25,fiber:1,sodium:520,image:"assets/image_67_yi19x4.jpg",favorite:false,
    ingredients:[{name:"羊肉",amount:"500g",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"花椒",amount:"少许",isMain:false},{name:"盐",amount:"适量",isMain:false},{name:"胡椒粉",amount:"少许",isMain:false}],
    steps:[{title:"焯水",description:"羊肉切块冷水下锅焯水去血沫捞出"},{title:"炖汤",description:"锅中放羊肉葱姜花椒，加热水大火烧开转小火炖70分钟"},{title:"去浮沫",description:"中途撇去浮沫"},{title:"调味",description:"加盐胡椒粉调味，撒葱花香菜出锅"}]},
  {id:68,name:"鲫鱼豆腐汤",region:"家常菜",category:"soup",time:"30min",difficulty:"",spicy:false,servings:"2-3人份",price:28,calories:220,protein:25,carbs:8,fat:12,fiber:1,sodium:420,image:"assets/image_68_yi19x4.jpg",favorite:false,
    ingredients:[{name:"鲫鱼",amount:"1条",isMain:true},{name:"豆腐",amount:"1块",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false},{name:"料酒",amount:"2勺",isMain:false}],
    steps:[{title:"处理鱼",description:"鲫鱼清理干净，鱼身划刀，加料酒腌制"},{title:"煎鱼",description:"热油将鱼煎至两面金黄"},{title:"炖汤",description:"加葱姜和热水，大火烧开转小火炖20分钟至汤白"},{title:"加豆腐",description:"放入豆腐块继续炖5分钟，加盐调味出锅"}]},
  {id:69,name:"蘑菇汤",region:"家常菜",category:"soup",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:15,calories:80,protein:6,carbs:8,fat:3,fiber:2,sodium:380,image:"assets/image_69_yi19x4.jpg",favorite:false,
    ingredients:[{name:"各种蘑菇",amount:"300g",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false},{name:"香油",amount:"少许",isMain:false}],
    steps:[{title:"处理蘑菇",description:"蘑菇洗净切片"},{title:"爆香",description:"热油爆香葱姜"},{title:"煮汤",description:"放入蘑菇翻炒，加适量水大火烧开转小火煮10分钟"},{title:"调味",description:"加盐调味，滴香油撒葱花出锅"}]},
  {id:70,name:"玉米排骨汤",region:"家常菜",category:"soup",time:"60min",difficulty:"",spicy:false,servings:"3-4人份",price:35,calories:320,protein:28,carbs:15,fat:18,fiber:3,sodium:450,image:"assets/image_70_yi19x4.jpg",favorite:false,
    ingredients:[{name:"排骨",amount:"400g",isMain:true},{name:"玉米",amount:"2根",isMain:true},{name:"胡萝卜",amount:"1根",isMain:false},{name:"葱姜",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"焯水",description:"排骨冷水下锅焯水去血沫捞出"},{title:"炖汤",description:"锅中放排骨葱姜，加热水大火烧开转小火炖40分钟"},{title:"加玉米",description:"玉米切段，胡萝卜切块，放入汤中继续炖20分钟"},{title:"调味",description:"加盐调味即可"}]},
  {id:71,name:"老鸭汤",region:"江浙菜",category:"soup",time:"120min",difficulty:"",spicy:false,servings:"3-4人份",price:48,calories:380,protein:30,carbs:8,fat:25,fiber:2,sodium:480,image:"assets/image_71_yi19x4.jpg",favorite:false,
    ingredients:[{name:"老鸭",amount:"半只",isMain:true},{name:"酸萝卜",amount:"200g",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"枸杞",amount:"少许",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"焯水",description:"鸭肉冷水下锅焯水去血沫捞出"},{title:"炖汤",description:"锅中放鸭肉酸萝卜葱姜，加热水大火烧开转小火炖90分钟"},{title:"去浮沫",description:"中途撇去浮沫"},{title:"调味",description:"加盐调味，撒枸杞葱花出锅"}]},
  {id:72,name:"丝瓜蛋汤",region:"家常菜",category:"soup",time:"10min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:90,protein:7,carbs:6,fat:5,fiber:1,sodium:320,image:"assets/image_72_yi19x4.jpg",favorite:false,
    ingredients:[{name:"丝瓜",amount:"1根",isMain:true},{name:"鸡蛋",amount:"2个",isMain:true},{name:"葱花",amount:"适量",isMain:false},{name:"香油",amount:"少许",isMain:false}],
    steps:[{title:"处理丝瓜",description:"丝瓜去皮切滚刀块，鸡蛋打散"},{title:"烧水",description:"锅中加水烧开，放入丝瓜煮3分钟"},{title:"甩蛋花",description:"淋入蛋液形成蛋花"},{title:"调味",description:"加盐调味，撒葱花滴香油出锅"}]},
  {id:73,name:"胡椒猪肚汤",region:"广东菜",category:"soup",time:"90min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:38,calories:280,protein:25,carbs:8,fat:18,fiber:1,sodium:520,image:"assets/image_73_yi19x4.jpg",favorite:false,
    ingredients:[{name:"猪肚",amount:"1个",isMain:true},{name:"白胡椒",amount:"20g",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"处理猪肚",description:"猪肚用面粉盐反复搓洗干净，焯水切条"},{title:"炖汤",description:"锅中放猪肚白胡椒葱姜，加热水大火烧开转小火炖70分钟"},{title:"去浮沫",description:"中途撇去浮沫"},{title:"调味",description:"加盐调味出锅"}]},
  {id:74,name:"银耳莲子汤",region:"甜品",category:"soup",time:"60min",difficulty:"",spicy:false,servings:"3-4人份",price:18,calories:180,protein:2,carbs:42,fat:1,fiber:3,sodium:20,image:"assets/image_74_yi19x4.jpg",favorite:false,
    ingredients:[{name:"银耳",amount:"1朵",isMain:true},{name:"莲子",amount:"30g",isMain:true},{name:"红枣",amount:"10颗",isMain:false},{name:"冰糖",amount:"适量",isMain:false},{name:"枸杞",amount:"少许",isMain:false}],
    steps:[{title:"泡发",description:"银耳提前泡发，撕小朵，莲子泡软"},{title:"炖煮",description:"锅中放银耳莲子红枣，加足量水大火烧开转小火炖50分钟"},{title:"加冰糖",description:"放入冰糖和枸杞继续炖10分钟"},{title:"出锅",description:"炖至银耳粘稠即可"}]},
  {id:75,name:"东北酸菜白肉汤",region:"东北菜",category:"soup",time:"40min",difficulty:"",spicy:false,servings:"3-4人份",price:32,calories:380,protein:22,carbs:12,fat:25,fiber:2,sodium:680,image:"assets/image_75_yi19x4.jpg",favorite:false,
    ingredients:[{name:"五花肉",amount:"300g",isMain:true},{name:"酸菜",amount:"200g",isMain:true},{name:"粉条",amount:"100g",isMain:false},{name:"葱姜",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false}],
    steps:[{title:"处理食材",description:"五花肉焯水切薄片，酸菜切丝，粉条泡软"},{title:"炖汤",description:"锅中放五花肉葱姜，加热水大火烧开转小火炖20分钟"},{title:"加酸菜",description:"放入酸菜继续炖10分钟"},{title:"加粉条",description:"放入粉条煮至透明，加盐调味出锅"}]},
  // ========== 主食 staple 76-90 ==========
  {id:76,name:"蛋炒饭",region:"家常菜",category:"staple",time:"10min",difficulty:"",spicy:false,servings:"1人份",price:8,calories:350,protein:10,carbs:50,fat:12,fiber:1,sodium:420,image:"assets/image_76_yi19x4.jpg",favorite:false,
    ingredients:[{name:"米饭",amount:"1碗",isMain:true},{name:"鸡蛋",amount:"2个",isMain:true},{name:"葱花",amount:"适量",isMain:false},{name:"盐",amount:"适量",isMain:false},{name:"生抽",amount:"少许",isMain:false}],
    steps:[{title:"备料",description:"隔夜米饭提前拨散，鸡蛋打散"},{title:"炒蛋",description:"热油倒入蛋液快速炒散成小块"},{title:"炒饭",description:"放入米饭大火快速翻炒，加生抽盐调味"},{title:"出锅",description:"撒入葱花翻炒均匀即可出锅"}]},
  {id:77,name:"酱油炒饭",region:"家常菜",category:"staple",time:"10min",difficulty:"",spicy:false,servings:"1人份",price:8,calories:340,protein:8,carbs:50,fat:10,fiber:1,sodium:520,image:"assets/image_76_yi19x4.jpg",favorite:false,
    ingredients:[{name:"米饭",amount:"1碗",isMain:true},{name:"生抽老抽",amount:"各1勺",isMain:true},{name:"葱花",amount:"适量",isMain:false},{name:"鸡蛋",amount:"1个",isMain:false}],
    steps:[{title:"备料",description:"隔夜米饭提前拨散，鸡蛋打散"},{title:"调酱",description:"生抽老抽调匀"},{title:"炒饭",description:"热油炒蛋，放入米饭翻炒，倒入酱油"},{title:"出锅",description:"大火翻炒均匀上色，撒葱花出锅"}]},
  {id:78,name:"饺子",region:"家常菜",category:"staple",time:"60min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:30,calories:420,protein:20,carbs:50,fat:15,fiber:2,sodium:580,image:"assets/image_77_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"300g",isMain:true},{name:"猪肉馅",amount:"300g",isMain:true},{name:"白菜",amount:"200g",isMain:false},{name:"葱姜",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"和面",description:"面粉加温水揉成面团，醒发30分钟"},{title:"调馅",description:"肉馅加葱姜末盐生抽搅匀，加入剁碎挤干的白菜"},{title:"包饺子",description:"面团切剂子擀皮，包入馅料"},{title:"煮饺子",description:"水开下饺子，点三次水至熟透，捞出即可"}]},
  {id:79,name:"手擀面",region:"家常菜",category:"staple",time:"40min",difficulty:"难度中等",spicy:false,servings:"2人份",price:15,calories:400,protein:12,carbs:65,fat:10,fiber:2,sodium:480,image:"assets/image_78_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"300g",isMain:true},{name:"鸡蛋",amount:"1个",isMain:false},{name:"盐",amount:"少许",isMain:false}],
    steps:[{title:"和面",description:"面粉加盐鸡蛋和成稍硬面团，醒发20分钟"},{title:"擀面",description:"面团撒粉防粘，擀成薄面片"},{title:"切面",description:"面片折叠切成细面条，撒粉防粘"},{title:"煮面",description:"水开下面条，煮至浮起熟透，捞出过水浇臊子即可"}]},
  {id:80,name:"烙饼",region:"家常菜",category:"staple",time:"30min",difficulty:"",spicy:false,servings:"2-3人份",price:12,calories:380,protein:10,carbs:55,fat:14,fiber:2,sodium:420,image:"assets/image_79_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"300g",isMain:true},{name:"盐",amount:"少许",isMain:false},{name:"食用油",amount:"适量",isMain:false}],
    steps:[{title:"和面",description:"面粉加温水和成软面团，醒发30分钟"},{title:"擀面",description:"面团擀薄，刷油撒盐，卷起再擀成饼"},{title:"烙制",description:"平底锅刷油，放入饼小火烙制"},{title:"出锅",description:"两面金黄熟透，切块装盘"}]},
  {id:81,name:"葱油饼",region:"家常菜",category:"staple",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:10,calories:400,protein:10,carbs:55,fat:16,fiber:2,sodium:480,image:"assets/image_80_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"300g",isMain:true},{name:"小葱",amount:"1把",isMain:true},{name:"盐",amount:"少许",isMain:false},{name:"食用油",amount:"适量",isMain:false}],
    steps:[{title:"和面",description:"面粉加温水和成软面团，醒发20分钟"},{title:"制葱油",description:"小葱切碎，热油浇入葱花的碗中制成葱油"},{title:"擀饼",description:"面团擀薄，刷葱油撒盐，卷起再擀成饼"},{title:"烙制",description:"平底锅刷油，放入饼小火烙至两面金黄熟透"}]},
  {id:82,name:"馒头",region:"家常菜",category:"staple",time:"40min",difficulty:"难度中等",spicy:false,servings:"4-5人份",price:8,calories:280,protein:8,carbs:55,fat:2,fiber:2,sodium:120,image:"assets/image_81_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"500g",isMain:true},{name:"酵母",amount:"5g",isMain:false},{name:"白糖",amount:"10g",isMain:false}],
    steps:[{title:"和面",description:"面粉加酵母白糖温水和成面团，发酵至两倍大"},{title:"揉面",description:"面团排气揉匀，分剂子揉成馒头形"},{title:"醒发",description:"馒头放蒸锅醒发15分钟"},{title:"蒸制",description:"冷水上锅，水开后蒸15分钟，关火焖3分钟出锅"}]},
  {id:83,name:"粽子",region:"家常菜",category:"staple",time:"90min",difficulty:"难度中等",spicy:false,servings:"4-5个",price:18,calories:380,protein:8,carbs:65,fat:10,fiber:2,sodium:280,image:"assets/image_82_yi19x4.jpg",favorite:false,
    ingredients:[{name:"糯米",amount:"500g",isMain:true},{name:"粽叶",amount:"20张",isMain:true},{name:"红枣",amount:"10颗",isMain:false},{name:"红豆",amount:"100g",isMain:false}],
    steps:[{title:"泡米",description:"糯米红豆提前浸泡4小时，粽叶煮软洗净"},{title:"包粽子",description:"粽叶折成漏斗状，填入糯米红豆红枣"},{title:"包扎",description:"粽叶包严，用线绳扎紧"},{title:"煮制",description:"锅中放粽子加水没过，大火烧开转小火煮2小时，焖1小时"}]},
  {id:84,name:"炒面",region:"家常菜",category:"staple",time:"15min",difficulty:"",spicy:false,servings:"1人份",price:12,calories:420,protein:12,carbs:55,fat:16,fiber:2,sodium:520,image:"assets/image_83_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面条",amount:"200g",isMain:true},{name:"卷心菜",amount:"100g",isMain:false},{name:"胡萝卜",amount:"少许",isMain:false},{name:"肉丝",amount:"50g",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"煮面",description:"面条煮至八分熟捞出过凉水沥干"},{title:"处理配菜",description:"卷心菜胡萝卜切丝，肉切丝"},{title:"炒配菜",description:"热油炒肉丝，加配菜翻炒"},{title:"炒面",description:"放入面条，加生抽盐调味，大火翻炒均匀出锅"}]},
  {id:85,name:"酸辣粉",region:"川菜",category:"staple",time:"15min",difficulty:"",spicy:true,servings:"1人份",price:12,calories:380,protein:8,carbs:55,fat:14,fiber:2,sodium:680,image:"assets/image_84_yi19x4.jpg",favorite:false,
    ingredients:[{name:"红薯粉",amount:"150g",isMain:true},{name:"花生",amount:"30g",isMain:false},{name:"醋",amount:"3勺",isMain:false},{name:"辣椒油",amount:"2勺",isMain:false},{name:"葱花",amount:"适量",isMain:false},{name:"蒜末",amount:"适量",isMain:false}],
    steps:[{title:"调碗底",description:"碗中放醋辣椒油蒜末生抽盐葱花"},{title:"煮粉",description:"红薯粉提前泡软，开水煮至透明熟透"},{title:"冲汤",description:"舀入煮粉汤化开调料"},{title:"出锅",description:"粉捞入碗中，撒花生碎香菜即可"}]},
  {id:86,name:"凉皮",region:"陕西菜",category:"staple",time:"20min",difficulty:"",spicy:true,servings:"1人份",price:10,calories:320,protein:8,carbs:55,fat:8,fiber:1,sodium:580,image:"assets/image_85_yi19x4.jpg",favorite:false,
    ingredients:[{name:"凉皮",amount:"200g",isMain:true},{name:"黄瓜",amount:"1根",isMain:false},{name:"豆芽",amount:"100g",isMain:false},{name:"辣椒油",amount:"2勺",isMain:false},{name:"醋",amount:"2勺",isMain:false},{name:"蒜水",amount:"适量",isMain:false}],
    steps:[{title:"处理食材",description:"黄瓜切丝，豆芽焯水过凉"},{title:"切凉皮",description:"凉皮切宽条"},{title:"调汁",description:"醋生抽辣椒油蒜水盐糖调匀"},{title:"拌匀",description:"凉皮放碗中，加黄瓜丝豆芽，倒入调料汁，撒花生碎拌匀"}]},
  {id:87,name:"米饭",region:"家常菜",category:"staple",time:"30min",difficulty:"",spicy:false,servings:"2人份",price:3,calories:260,protein:5,carbs:55,fat:1,fiber:1,sodium:5,image:"assets/image_86_yi19x4.jpg",favorite:false,
    ingredients:[{name:"大米",amount:"300g",isMain:true},{name:"清水",amount:"适量",isMain:false}],
    steps:[{title:"淘米",description:"大米淘洗2-3次"},{title:"加水",description:"米水比例1:1.2"},{title:"煮饭",description:"电饭煲按下煮饭键"},{title:"焖饭",description:"煮好后焖5分钟即可开盖"}]},
  {id:88,name:"杂粮粥",region:"家常菜",category:"staple",time:"40min",difficulty:"",spicy:false,servings:"2-3人份",price:8,calories:180,protein:5,carbs:35,fat:2,fiber:5,sodium:10,image:"assets/image_87_yi19x4.jpg",favorite:false,
    ingredients:[{name:"大米",amount:"50g",isMain:true},{name:"小米",amount:"30g",isMain:true},{name:"黑米",amount:"30g",isMain:true},{name:"红豆",amount:"30g",isMain:false},{name:"冰糖",amount:"适量",isMain:false}],
    steps:[{title:"浸泡",description:"红豆黑米提前浸泡2小时"},{title:"熬煮",description:"所有食材加水大火烧开转小火熬30分钟"},{title:"搅拌",description:"中途搅拌几次防止糊底"},{title:"出锅",description:"熬至粥稠软烂即可"}]},
  {id:89,name:"小笼包",region:"上海菜",category:"staple",time:"60min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:25,calories:380,protein:18,carbs:48,fat:14,fiber:2,sodium:520,image:"assets/image_88_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"300g",isMain:true},{name:"猪肉馅",amount:"300g",isMain:true},{name:"皮冻",amount:"150g",isMain:true},{name:"葱姜",amount:"适量",isMain:false},{name:"生抽",amount:"2勺",isMain:false}],
    steps:[{title:"和面",description:"面粉加热水揉成烫面，醒30分钟"},{title:"调馅",description:"肉馅加葱姜末生抽搅匀，加入皮冻丁拌匀"},{title:"包包子",description:"面团切剂子擀薄，包入馅料，捏18个褶"},{title:"蒸制",description:"水开后蒸8分钟即可"}]},
  {id:90,name:"烧麦",region:"广东菜",category:"staple",time:"45min",difficulty:"难度中等",spicy:false,servings:"3-4人份",price:28,calories:350,protein:18,carbs:50,fat:10,fiber:2,sodium:580,image:"assets/image_89_yi19x4.jpg",favorite:false,
    ingredients:[{name:"烧卖皮",amount:"30张",isMain:true},{name:"糯米",amount:"200g",isMain:true},{name:"肉末",amount:"150g",isMain:false},{name:"香菇",amount:"5朵",isMain:false},{name:"生抽老抽",amount:"各1勺",isMain:false}],
    steps:[{title:"蒸糯米",description:"糯米提前浸泡，蒸熟"},{title:"炒馅料",description:"热油炒散肉末，加香菇丁翻炒，加生抽老抽调味"},{title:"拌馅",description:"糯米饭与馅料拌匀"},{title:"包烧卖",description:"烧卖皮包入馅料，捏成石榴形，上锅蒸10分钟"}]},
  // ========== 小吃 snack 91-100 ==========
  {id:91,name:"煎饼果子",region:"天津小吃",category:"snack",time:"15min",difficulty:"",spicy:false,servings:"1人份",price:12,calories:380,protein:15,carbs:45,fat:16,fiber:3,sodium:580,image:"assets/image_90_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"100g",isMain:true},{name:"绿豆面",amount:"50g",isMain:true},{name:"鸡蛋",amount:"2个",isMain:true},{name:"油条",amount:"1根",isMain:false},{name:"葱花",amount:"适量",isMain:false},{name:"甜面酱",amount:"适量",isMain:false}],
    steps:[{title:"调面糊",description:"面粉和绿豆面加水调匀成稀面糊"},{title:"摊饼",description:"平底锅刷油，倒入面糊摊成薄饼，打上鸡蛋摊匀"},{title:"翻面",description:"饼凝固后翻面，刷甜面酱辣酱，撒上葱花"},{title:"卷起",description:"放入油条，将饼卷起对折即可食用"}]},
  {id:92,name:"臭豆腐",region:"湖南小吃",category:"snack",time:"15min",difficulty:"",spicy:true,servings:"2人份",price:15,calories:320,protein:12,carbs:25,fat:18,fiber:2,sodium:620,image:"assets/image_91_yi19x4.jpg",favorite:false,
    ingredients:[{name:"臭豆腐",amount:"8块",isMain:true},{name:"辣椒油",amount:"适量",isMain:false},{name:"蒜水",amount:"适量",isMain:false},{name:"香菜",amount:"适量",isMain:false}],
    steps:[{title:"炸制",description:"油温六成热，放入臭豆腐炸至金黄"},{title:"控油",description:"捞出控油"},{title:"调汤",description:"碗中放辣椒油蒜水盐生抽"},{title:"出锅",description:"臭豆腐扎孔，浇上汤汁，撒香菜即可"}]},
  {id:93,name:"糖葫芦",region:"北京小吃",category:"snack",time:"30min",difficulty:"难度中等",spicy:false,servings:"4-5串",price:15,calories:280,protein:1,carbs:65,fat:1,fiber:3,sodium:10,image:"assets/image_92_yi19x4.jpg",favorite:false,
    ingredients:[{name:"山楂",amount:"500g",isMain:true},{name:"冰糖",amount:"200g",isMain:true},{name:"竹签",amount:"适量",isMain:false}],
    steps:[{title:"处理山楂",description:"山楂洗净去核，用竹签串成串"},{title:"熬糖",description:"冰糖加水小火熬至糖浆浓稠起大泡转小泡"},{title:"蘸糖",description:"山楂串在糖浆中快速转一圈裹上薄糖衣"},{title:"冷却",description:"放在抹油的盘子上冷却至糖衣变硬即可"}]},
  {id:94,name:"韭菜盒子",region:"家常小吃",category:"snack",time:"20min",difficulty:"",spicy:false,servings:"4个",price:12,calories:380,protein:12,carbs:45,fat:16,fiber:3,sodium:480,image:"assets/image_93_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"300g",isMain:true},{name:"韭菜",amount:"200g",isMain:true},{name:"鸡蛋",amount:"3个",isMain:true},{name:"虾皮",amount:"少许",isMain:false}],
    steps:[{title:"和面",description:"面粉加温水和成软面团，醒20分钟"},{title:"调馅",description:"韭菜切碎，鸡蛋炒碎，加虾皮盐香油拌匀"},{title:"包盒子",description:"面团分剂子擀皮，包入馅料捏紧边缘"},{title:"煎制",description:"平底锅刷油，放入盒子小火煎至两面金黄熟透"}]},
  {id:95,name:"鸡蛋灌饼",region:"河南小吃",category:"snack",time:"15min",difficulty:"",spicy:false,servings:"1人份",price:10,calories:380,protein:14,carbs:45,fat:16,fiber:2,sodium:480,image:"assets/image_94_yi19x4.jpg",favorite:false,
    ingredients:[{name:"面粉",amount:"200g",isMain:true},{name:"鸡蛋",amount:"2个",isMain:true},{name:"生菜",amount:"2片",isMain:false},{name:"甜面酱",amount:"适量",isMain:false}],
    steps:[{title:"和面",description:"面粉加温水和成软面团，醒20分钟"},{title:"擀饼",description:"面团擀薄，刷油折叠再擀成饼"},{title:"烙饼",description:"平底锅小火烙至饼起泡鼓起"},{title:"灌蛋",description:"用筷子撑开饼口，倒入蛋液，翻面烙至金黄，刷酱夹生菜即可"}]},
  {id:96,name:"烤红薯",region:"家常小吃",category:"snack",time:"40min",difficulty:"",spicy:false,servings:"2人份",price:8,calories:280,protein:3,carbs:65,fat:1,fiber:4,sodium:30,image:"assets/image_95_yi19x4.jpg",favorite:false,
    ingredients:[{name:"红薯",amount:"4个",isMain:true}],
    steps:[{title:"预热",description:"烤箱预热220度"},{title:"处理红薯",description:"红薯洗净擦干，用叉子扎几个孔"},{title:"烤制",description:"放入烤箱中层烤40分钟"},{title:"出炉",description:"中途翻面一次，烤至红薯软塌流糖汁即可"}]},
  {id:97,name:"酒酿圆子",region:"江浙菜",category:"snack",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:12,calories:280,protein:5,carbs:60,fat:2,fiber:1,sodium:20,image:"assets/image_96_yi19x4.jpg",favorite:false,
    ingredients:[{name:"糯米粉",amount:"150g",isMain:true},{name:"酒酿",amount:"200g",isMain:true},{name:"枸杞",amount:"少许",isMain:false},{name:"白糖",amount:"适量",isMain:false}],
    steps:[{title:"和面",description:"糯米粉加温水和成面团"},{title:"搓圆子",description:"面团搓成小圆子"},{title:"煮圆子",description:"水开下圆子，煮至浮起"},{title:"加酒酿",description:"加入酒酿枸杞煮2分钟，加糖调味出锅"}]},
  {id:98,name:"双皮奶",region:"广东甜品",category:"snack",time:"30min",difficulty:"",spicy:false,servings:"2人份",price:15,calories:220,protein:10,carbs:25,fat:10,fiber:0,sodium:80,image:"assets/image_97_yi19x4.jpg",favorite:false,
    ingredients:[{name:"全脂牛奶",amount:"500ml",isMain:true},{name:"蛋清",amount:"3个",isMain:true},{name:"白糖",amount:"50g",isMain:false}],
    steps:[{title:"煮奶",description:"牛奶加糖煮至微开，倒入碗中冷却结奶皮"},{title:"调奶",description:"倒出牛奶，加蛋清搅匀，倒回奶碗"},{title:"蒸制",description:"盖保鲜膜扎孔，水开后蒸15分钟"},{title:"出锅",description:"关火焖5分钟取出，冷却后食用"}]},
  {id:99,name:"红糖糍粑",region:"四川小吃",category:"snack",time:"20min",difficulty:"",spicy:false,servings:"2人份",price:15,calories:380,protein:6,carbs:75,fat:6,fiber:1,sodium:20,image:"assets/image_98_yi19x4.jpg",favorite:false,
    ingredients:[{name:"糯米粉",amount:"200g",isMain:true},{name:"红糖",amount:"50g",isMain:true},{name:"黄豆粉",amount:"适量",isMain:false},{name:"食用油",amount:"适量",isMain:false}],
    steps:[{title:"和面",description:"糯米粉加温水和成面团"},{title:"搓糍粑",description:"面团搓成长条切小段"},{title:"炸制",description:"油温五成热炸至金黄捞出"},{title:"装盘",description:"撒上黄豆粉，淋上熬好的红糖浆即可"}]},
  {id:100,name:"驴打滚",region:"北京小吃",category:"snack",time:"30min",difficulty:"",spicy:false,servings:"4人份",price:18,calories:380,protein:8,carbs:65,fat:10,fiber:2,sodium:80,image:"assets/image_99_yi19x4.jpg",favorite:false,
    ingredients:[{name:"糯米粉",amount:"200g",isMain:true},{name:"红豆沙",amount:"150g",isMain:true},{name:"黄豆粉",amount:"100g",isMain:true},{name:"白糖",amount:"适量",isMain:false}],
    steps:[{title:"和面",description:"糯米粉加温水和成面团"},{title:"蒸制",description:"面团放盘中大火蒸20分钟"},{title:"擀面",description:"案板撒黄豆粉，面团擀成薄片，抹红豆沙卷起"},{title:"切块",description:"切成小段，撒黄豆粉白糖即可"}]}
];

const cartData = {
  items: [],
  addItem(dish, quantity = 1) {
    const existing = this.items.find(item => item.dish.id === dish.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ dish, quantity });
    }
    this.save();
  },
  removeItem(dishId) {
    this.items = this.items.filter(item => item.dish.id !== dishId);
    this.save();
  },
  updateQuantity(dishId, quantity) {
    const item = this.items.find(item => item.dish.id === dishId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeItem(dishId);
      }
    }
    this.save();
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  },
  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },
  getTotalTime() {
    return this.items.reduce((sum, item) => sum + parseInt(item.dish.time) * item.quantity, 0);
  },
  save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  },
  load() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.items = JSON.parse(saved);
    }
  },
  clear() {
    this.items = [];
    this.save();
  },
  getGroceryList() {
    const grocery = {};
    this.items.forEach(item => {
      item.dish.ingredients.forEach(ing => {
        const key = ing.name;
        if (!grocery[key]) {
          grocery[key] = { name: ing.name, amount: 0, isMain: ing.isMain };
        }
        grocery[key].amount += item.quantity;
      });
    });
    return Object.values(grocery);
  },
  getNutrition() {
    const nutrition = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0 };
    this.items.forEach(item => {
      nutrition.calories += item.dish.calories * item.quantity;
      nutrition.protein += item.dish.protein * item.quantity;
      nutrition.carbs += item.dish.carbs * item.quantity;
      nutrition.fat += item.dish.fat * item.quantity;
      nutrition.fiber += (item.dish.fiber || 0) * item.quantity;
      nutrition.sodium += (item.dish.sodium || 0) * item.quantity;
    });
    return nutrition;
  }
};

// 今日已下单菜品数据（下单后保留，营养页和接单台可读取）
const todayOrders = {
  items: [],

  load() {
    try {
      const saved = localStorage.getItem('todayOrders');
      if (saved) {
        const data = JSON.parse(saved);
        // 仅保留今日的数据
        const today = new Date().toDateString();
        this.items = (data.items || []).filter(it => new Date(it.timestamp).toDateString() === today);
      }
    } catch (e) {
      this.items = [];
    }
    return this;
  },

  save() {
    try {
      localStorage.setItem('todayOrders', JSON.stringify({ items: this.items }));
    } catch (e) {}
  },

  addFromCart(cartItems) {
    const now = Date.now();
    cartItems.forEach(item => {
      this.items.push({
        dish: { ...item.dish },
        quantity: item.quantity,
        timestamp: now
      });
    });
    this.save();
  },

  clear() {
    this.items = [];
    this.save();
  },

  getNutrition() {
    const nutrition = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 0 };
    this.items.forEach(item => {
      nutrition.calories += item.dish.calories * item.quantity;
      nutrition.protein += item.dish.protein * item.quantity;
      nutrition.carbs += item.dish.carbs * item.quantity;
      nutrition.fat += item.dish.fat * item.quantity;
      nutrition.fiber += (item.dish.fiber || 0) * item.quantity;
      nutrition.sodium += (item.dish.sodium || 0) * item.quantity;
    });
    return nutrition;
  },

  getCount() {
    return this.items.reduce((sum, it) => sum + it.quantity, 0);
  }
};

cartData.load();
todayOrders.load();

// 购物车角标：在所有页面的购物车按钮上注入/更新数字角标
function updateCartBadges(animate = false) {
  const count = cartData.getCount();
  const cartBtns = document.querySelectorAll('.nav-btn[data-nav="cart"], button[data-nav-key="cart"]');
  cartBtns.forEach(btn => {
    let badge = btn.querySelector('.cart-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'cart-badge';
      btn.appendChild(badge);
    }
    const prevCount = parseInt(badge.getAttribute('data-count') || '0');
    badge.setAttribute('data-count', count);
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : count;
      badge.classList.add('show');
      if (animate && count !== prevCount) {
        badge.classList.remove('bump');
        // 触发重绘以重启动画
        void badge.offsetWidth;
        badge.classList.add('bump');
      }
    } else {
      badge.classList.remove('show');
      badge.classList.remove('bump');
    }
  });
}

// 页面加载后初始化角标
document.addEventListener('DOMContentLoaded', () => updateCartBadges(false));


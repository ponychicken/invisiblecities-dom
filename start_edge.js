/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wholecity1',
                            symbolName: 'wholecity1',
                            type: 'rect',
                            rect: ['-7', '-103', '2048', '1586', 'auto', 'auto'],
                            transform: [[],[],[],['0.87157','0.87157']]
                        },
                        {
                            id: 'clocktower',
                            type: 'image',
                            rect: ['735', '438', '187', '409', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/clocktower.png','0px','0px']
                        },
                        {
                            id: 'click-to-enter',
                            type: 'image',
                            rect: ['833', '102', '329px', '81px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/text/click-to-enter.png','0px','0px']
                        },
                        {
                            id: 'fallingleaf',
                            symbolName: 'fallingleaf',
                            type: 'rect',
                            rect: ['331', '254', '85', '66', 'auto', 'auto'],
                            transform: [[],[],[],['0.93344','0.93344']]
                        },
                        {
                            id: 'sidewayskyscraperCopy2',
                            type: 'image',
                            rect: ['1706', '371', '204', '373', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sidewayskyscraper.png",'0px','0px']
                        },
                        {
                            id: 'sidewayskyscraperCopy',
                            type: 'image',
                            rect: ['1663', '557', '204', '373', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sidewayskyscraper.png",'0px','0px']
                        },
                        {
                            id: 'veggie',
                            type: 'image',
                            rect: ['1224', '405', '213', '228', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"veggie.png",'0px','0px'],
                            transform: [[],[],[],['1.01408']]
                        },
                        {
                            id: 'bgcurrywurst',
                            symbolName: 'bgcurrywurst',
                            type: 'rect',
                            rect: ['1264', '331', '398', '383', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.48846','0.49215']]
                        },
                        {
                            id: 'bgcurrywurstCopy',
                            symbolName: 'bgcurrywurst',
                            type: 'rect',
                            rect: ['848', '577', '398', '383', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.48846','0.49215']]
                        },
                        {
                            id: 'bgcurrywurstCopy2',
                            symbolName: 'bgcurrywurst',
                            type: 'rect',
                            rect: ['1209', '852', '398', '383', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.48846','0.49215']]
                        },
                        {
                            id: 'tree',
                            type: 'image',
                            rect: ['210', '325', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy',
                            type: 'image',
                            rect: ['337', '249', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy3',
                            type: 'image',
                            rect: ['645', '163', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy4',
                            type: 'image',
                            rect: ['471', '183', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px'],
                            transform: [[],[],[],['-1.20055']]
                        },
                        {
                            id: 'billboard',
                            type: 'image',
                            rect: ['591', '850', '308', '269', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"billboard.png",'0px','0px']
                        },
                        {
                            id: 'veggieCopy',
                            type: 'image',
                            rect: ['815', '687', '213', '228', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"veggie.png",'0px','0px'],
                            transform: [[],[],[],['1.01408']]
                        },
                        {
                            id: 'sittingluna',
                            symbolName: 'sittingluna',
                            type: 'rect',
                            rect: ['748', '803', '155', '202', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.51095','0.51095']]
                        },
                        {
                            id: 'sittinglunaCopy',
                            symbolName: 'sittingluna',
                            type: 'rect',
                            rect: ['844', '155', '155', '202', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],[],[],['0.42221','0.42221']]
                        },
                        {
                            id: 'car1',
                            type: 'image',
                            rect: ['1076', '790', '336', '153', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/car1.png','0px','0px']
                        },
                        {
                            id: 'car2',
                            type: 'image',
                            rect: ['1102', '863', '336', '162', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/car2.png','0px','0px']
                        },
                        {
                            id: 'pumagirl1',
                            symbolName: 'pumagirl1',
                            type: 'rect',
                            rect: ['192', '586', '550', '75', 'auto', 'auto'],
                            transform: [[],[],[],['0.93344','0.93344']]
                        },
                        {
                            id: 'pumagirl2',
                            symbolName: 'pumagirl1',
                            type: 'rect',
                            rect: ['221', '482', '550', '75', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['-0.87029','0.83372']]
                        },
                        {
                            id: 'pumagirl3',
                            symbolName: 'pumagirl1',
                            type: 'rect',
                            rect: ['477', '527', '550', '75', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.89388','0.83372']]
                        },
                        {
                            id: 'pumagirl4',
                            symbolName: 'pumagirl1',
                            type: 'rect',
                            rect: ['337', '413', '550', '75', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['-0.87029','0.83372']]
                        },
                        {
                            id: 'treeCopy5',
                            type: 'image',
                            rect: ['740', '256', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px'],
                            transform: [[],[],[],['-1.20055']]
                        },
                        {
                            id: 'treeCopy2',
                            type: 'image',
                            rect: ['556', '292', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy9',
                            type: 'image',
                            rect: ['442', '385', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy6',
                            type: 'image',
                            rect: ['364', '371', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px'],
                            transform: [[],[],[],['-1.20055']]
                        },
                        {
                            id: 'treeCopy7',
                            type: 'image',
                            rect: ['603', '397', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px'],
                            transform: [[],[],[],['-1.20055']]
                        },
                        {
                            id: 'treeCopy8',
                            type: 'image',
                            rect: ['238', '378', '107', '325', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px'],
                            transform: [[],[],[],['-1.20055']]
                        },
                        {
                            id: 'oldman2',
                            symbolName: 'oldman',
                            type: 'rect',
                            rect: ['1178', '450', '128', '300', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['-0.29305','0.28429']]
                        },
                        {
                            id: 'groupmen1',
                            symbolName: 'groupmen1',
                            type: 'rect',
                            rect: ['1339', '545', '162', '104', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'oldman3',
                            symbolName: 'oldman',
                            type: 'rect',
                            rect: ['1217', '473', '128', '300', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],[],[],['-0.29305','0.28429']]
                        },
                        {
                            id: 'oldman4',
                            symbolName: 'oldman',
                            type: 'rect',
                            rect: ['1266', '457', '128', '300', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],[],[],['0.29304','0.28429']]
                        },
                        {
                            id: 'groupmen2',
                            symbolName: 'groupmen2',
                            type: 'rect',
                            rect: ['1237', '553', '161', '112', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'tattooshop',
                            symbolName: 'tattooshop',
                            type: 'rect',
                            rect: ['1207', '479', '513', '423', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.48427','0.48427']]
                        },
                        {
                            id: 'sidewayskyscraper',
                            type: 'image',
                            rect: ['1496', '623', '248', '454', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sidewayskyscraper.png",'0px','0px']
                        },
                        {
                            id: 'bigblue',
                            type: 'image',
                            rect: ['467', '560', '204', '303', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/bigblue.png','0px','0px']
                        },
                        {
                            id: 'cafe',
                            type: 'image',
                            rect: ['1454', '455', '211', '188', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/cafe.png','0px','0px'],
                            transform: [[],[],[],['-0.9937']]
                        },
                        {
                            id: 'cafeCopy2',
                            type: 'image',
                            rect: ['844', '580', '211', '188', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/cafe.png','0px','0px'],
                            transform: [[],[],[],['-0.9937']]
                        },
                        {
                            id: 'cafeCopy',
                            type: 'image',
                            rect: ['1175', '602', '211', '188', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/cafe.png','0px','0px'],
                            transform: [[],[],[],['0.9937']]
                        },
                        {
                            id: 'plane1',
                            symbolName: 'plane1',
                            type: 'rect',
                            rect: ['22', '119', '2046', '321', 'auto', 'auto']
                        },
                        {
                            id: 'plane2',
                            symbolName: 'plane1',
                            type: 'rect',
                            rect: ['-96', '413', '2046', '321', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['-1.01696']]
                        },
                        {
                            id: 'lampost',
                            type: 'image',
                            rect: ['1330', '551', '61', '229', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/lampost.png','0px','0px']
                        },
                        {
                            id: 'building-1',
                            type: 'image',
                            rect: ['302', '558', '204', '332', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/building-1.png','0px','0px']
                        },
                        {
                            id: 'bench',
                            type: 'image',
                            rect: ['1408', '723', '128', '139', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/bench.png','0px','0px']
                        },
                        {
                            id: 'benchCopy',
                            type: 'image',
                            rect: ['964', '734', '128', '139', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/bench.png','0px','0px'],
                            transform: [[],[],[],['-0.95911'],['133.45%','54.14%']]
                        },
                        {
                            id: 'sailorsit2',
                            symbolName: 'sailorsit',
                            type: 'rect',
                            rect: ['1198', '468', '500', '607', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],[],[],['0.15868','0.15868']]
                        },
                        {
                            id: 'sailorsmoke2',
                            symbolName: 'sailorsmoke',
                            type: 'rect',
                            rect: ['1204', '448', '351', '549', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],['2'],[],['0.17379','0.17379']]
                        },
                        {
                            id: 'sailor',
                            symbolName: 'sailor',
                            type: 'rect',
                            rect: ['1164', '469', '272', '568', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['-0.17034','0.16958']]
                        },
                        {
                            id: 'plane32',
                            symbolName: 'plane3',
                            type: 'rect',
                            rect: ['275', '-66', '1940', '1457', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'factory',
                            type: 'image',
                            rect: ['324', '623', '286', '429', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/factory.png','0px','0px']
                        },
                        {
                            id: 'bgluna1',
                            symbolName: 'bgluna1',
                            type: 'rect',
                            rect: ['1476', '524', '125', '166', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],[],[],['0.57476','0.57476']]
                        },
                        {
                            id: 'crane',
                            type: 'image',
                            rect: ['876', '633', '435', '429', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'cityoverview/images/crane.png','0px','0px']
                        },
                        {
                            id: 'rectangle',
                            symbolName: 'rectangle',
                            type: 'rect',
                            rect: ['4', '8', '2048', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'button2',
                            symbolName: 'button',
                            type: 'rect',
                            rect: ['57px', '43', '1942', '1465', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048', '1536', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 39903,
                    autoPlay: true,
                    data: [
                        [
                            "eid273",
                            "opacity",
                            15261,
                            489,
                            "linear",
                            "${groupmen2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            20000,
                            0,
                            "linear",
                            "${groupmen2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            10002,
                            498,
                            "linear",
                            "${pumagirl2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "scaleY",
                            30000,
                            0,
                            "linear",
                            "${pumagirl3}",
                            '0.83372',
                            '0.83372'
                        ],
                        [
                            "eid319",
                            "opacity",
                            11510,
                            490,
                            "linear",
                            "${bgluna1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "scaleX",
                            30000,
                            0,
                            "linear",
                            "${pumagirl3}",
                            '0.89388',
                            '0.89388'
                        ],
                        [
                            "eid295",
                            "opacity",
                            7013,
                            496,
                            "linear",
                            "${sittinglunaCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid320",
                            "left",
                            13671,
                            0,
                            "linear",
                            "${bgluna1}",
                            '1476px',
                            '1476px'
                        ],
                        [
                            "eid200",
                            "left",
                            30000,
                            0,
                            "linear",
                            "${pumagirl3}",
                            '477px',
                            '477px'
                        ],
                        [
                            "eid101",
                            "top",
                            5940,
                            0,
                            "linear",
                            "${pumagirl1}",
                            '586px',
                            '586px'
                        ],
                        [
                            "eid102",
                            "left",
                            5940,
                            0,
                            "linear",
                            "${bgcurrywurstCopy}",
                            '848px',
                            '848px'
                        ],
                        [
                            "eid167",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tattooshop}",
                            '1207px',
                            '1207px'
                        ],
                        [
                            "eid112",
                            "scaleX",
                            10000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            '-0.87029',
                            '-0.87029'
                        ],
                        [
                            "eid287",
                            "scaleX",
                            20548,
                            0,
                            "linear",
                            "${sittinglunaCopy}",
                            '0.42221',
                            '0.42221'
                        ],
                        [
                            "eid220",
                            "opacity",
                            19352,
                            727,
                            "linear",
                            "${plane2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "top",
                            10000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            '482px',
                            '482px'
                        ],
                        [
                            "eid114",
                            "left",
                            10000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid332",
                            "left",
                            6066,
                            0,
                            "linear",
                            "${button2}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid108",
                            "top",
                            13,
                            0,
                            "linear",
                            "${fallingleaf}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid323",
                            "top",
                            6066,
                            0,
                            "linear",
                            "${pumagirl4}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid292",
                            "top",
                            20548,
                            0,
                            "linear",
                            "${sittinglunaCopy}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${button2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid105",
                            "left",
                            5940,
                            0,
                            "linear",
                            "${bgcurrywurstCopy2}",
                            '1209px',
                            '1209px'
                        ],
                        [
                            "eid288",
                            "scaleY",
                            20548,
                            0,
                            "linear",
                            "${sittinglunaCopy}",
                            '0.42221',
                            '0.42221'
                        ],
                        [
                            "eid196",
                            "top",
                            30000,
                            0,
                            "linear",
                            "${pumagirl3}",
                            '527px',
                            '527px'
                        ],
                        [
                            "eid296",
                            "top",
                            7509,
                            0,
                            "linear",
                            "${plane32}",
                            '-66px',
                            '-66px'
                        ],
                        [
                            "eid103",
                            "top",
                            5940,
                            0,
                            "linear",
                            "${bgcurrywurstCopy}",
                            '577px',
                            '577px'
                        ],
                        [
                            "eid107",
                            "left",
                            13,
                            0,
                            "linear",
                            "${fallingleaf}",
                            '331px',
                            '331px'
                        ],
                        [
                            "eid291",
                            "left",
                            20548,
                            0,
                            "linear",
                            "${sittinglunaCopy}",
                            '844px',
                            '844px'
                        ],
                        [
                            "eid106",
                            "top",
                            5940,
                            0,
                            "linear",
                            "${bgcurrywurstCopy2}",
                            '852px',
                            '852px'
                        ],
                        [
                            "eid240",
                            "opacity",
                            13518,
                            482,
                            "linear",
                            "${sailorsmoke2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "top",
                            0,
                            0,
                            "linear",
                            "${button2}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid322",
                            "left",
                            6066,
                            0,
                            "linear",
                            "${pumagirl4}",
                            '337px',
                            '337px'
                        ],
                        [
                            "eid215",
                            "top",
                            19352,
                            0,
                            "linear",
                            "${plane2}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid98",
                            "opacity",
                            5006,
                            494,
                            "linear",
                            "${oldman3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid237",
                            "opacity",
                            38013,
                            750,
                            "linear",
                            "${plane32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tattooshop}",
                            '479px',
                            '479px'
                        ],
                        [
                            "eid216",
                            "scaleX",
                            19352,
                            0,
                            "linear",
                            "${plane2}",
                            '-1.01696',
                            '-1.01696'
                        ],
                        [
                            "eid199",
                            "opacity",
                            30002,
                            498,
                            "linear",
                            "${pumagirl3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            10000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            '0.83372',
                            '0.83372'
                        ],
                        [
                            "eid321",
                            "left",
                            0,
                            19352,
                            "linear",
                            "${plane2}",
                            '-96px',
                            '-106px'
                        ],
                        [
                            "eid100",
                            "left",
                            5940,
                            0,
                            "linear",
                            "${pumagirl1}",
                            '192px',
                            '192px'
                        ],
                        [
                            "eid243",
                            "opacity",
                            18008,
                            505,
                            "linear",
                            "${sailorsit2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "opacity",
                            20000,
                            548,
                            "linear",
                            "${groupmen1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            5006,
                            494,
                            "linear",
                            "${oldman4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "cityoverview": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cityoverview_01',
                            type: 'image',
                            rect: [0, 0, '1025px', '794px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_01.png', '0px', '0px']
                        },
                        {
                            id: 'cityoverview_02',
                            type: 'image',
                            rect: [1023, 1, '1025px', '794px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_02.png', '0px', '0px']
                        },
                        {
                            id: 'cityoverview_03',
                            type: 'image',
                            rect: [0, 795, '1025px', '794px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_03.png', '0px', '0px']
                        },
                        {
                            id: 'cityoverview_04',
                            type: 'image',
                            rect: [1023, 795, '1025px', '794px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_04.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1589]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "wholecity": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cityoverview_013',
                            type: 'image',
                            rect: [0, 0, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_01.png', '0px', '0px']
                        },
                        {
                            id: 'cityoverview_023',
                            type: 'image',
                            rect: [1016, 0, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_02.png', '0px', '0px']
                        },
                        {
                            id: 'cityoverview_033',
                            type: 'image',
                            rect: [0, 793, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_03.png', '0px', '0px']
                        },
                        {
                            id: 'cityoverview_043',
                            type: 'image',
                            rect: [1016, 793, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_04.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2040, 1586]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sittingluna": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Sittingluna',
                            rect: [0, 0, '500px', '207px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Sittingluna.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 155, 202]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid16",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            250,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid19",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '-167px'
                        ],
                        [
                            "eid20",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '-167px',
                            '-332px'
                        ]
                    ]
                }
            },
            "bgcurrywurst": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bgwurst',
                            rect: [0, 0, '800px', '383px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bgwurst.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 398, 383]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid21",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bgwurst}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            500,
                            0,
                            "linear",
                            "${bgwurst}",
                            '0px',
                            '-426px'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bgwurst}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "top",
                            500,
                            0,
                            "linear",
                            "${bgwurst}",
                            '0px',
                            '3px'
                        ]
                    ]
                }
            },
            "tattooshop": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'minitattooshop',
                            rect: [0, 17, '1024px', '423px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'cityoverview/images/minitattooshop.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 513, 423]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid26",
                            "top",
                            0,
                            0,
                            "linear",
                            "${minitattooshop}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid27",
                            "top",
                            250,
                            0,
                            "linear",
                            "${minitattooshop}",
                            '17px',
                            '-2px'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            0,
                            "linear",
                            "${minitattooshop}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid28",
                            "left",
                            250,
                            0,
                            "linear",
                            "${minitattooshop}",
                            '0px',
                            '-501px'
                        ]
                    ]
                }
            },
            "pumagirl": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'spritesheeet',
                            rect: [0, 0, '700px', '705px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'cityoverview/images/spritesheeet.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 229, 231]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid32",
                            "left",
                            250,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '0px',
                            '-229px'
                        ],
                        [
                            "eid34",
                            "left",
                            500,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-229px',
                            '-456px'
                        ],
                        [
                            "eid36",
                            "left",
                            750,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-456px',
                            '0px'
                        ],
                        [
                            "eid38",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '0px',
                            '-228px'
                        ],
                        [
                            "eid40",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-228px',
                            '-454px'
                        ],
                        [
                            "eid42",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-454px',
                            '-3px'
                        ],
                        [
                            "eid44",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-3px',
                            '-230px'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid31",
                            "top",
                            250,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid33",
                            "top",
                            500,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid35",
                            "top",
                            750,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '0px',
                            '-237px'
                        ],
                        [
                            "eid37",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-237px',
                            '-237px'
                        ],
                        [
                            "eid39",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-237px',
                            '-237px'
                        ],
                        [
                            "eid41",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-237px',
                            '-478px'
                        ],
                        [
                            "eid43",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${spritesheeet}",
                            '-478px',
                            '-481px'
                        ]
                    ]
                }
            },
            "wholecity1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cityoverview_015',
                            rect: [0, 0, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cityoverview_025',
                            rect: [1024, 0, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cityoverview_035',
                            rect: [0, 793, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cityoverview_045',
                            rect: [1024, 793, '1024px', '793px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cityoverview_04.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1586]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pumagirl1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-77, -78, 229, 231, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.3244', '0.3244', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'pumagirl',
                            symbolName: 'pumagirl',
                            display: 'block',
                            type: 'rect'
                        },
                        {
                            rect: [198, -78, 229, 231, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.32812', '0.3244', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'pumagirl2',
                            symbolName: 'pumagirl',
                            display: 'none',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 550, 75]
                        }
                    }
                },
                timeline: {
                    duration: 14000,
                    autoPlay: true,
                    data: [
                        [
                            "eid45",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pumagirl}",
                            '-78px',
                            '-78px'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            6000,
                            "linear",
                            "${pumagirl}",
                            '-77px',
                            '198px'
                        ],
                        [
                            "eid201",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${pumagirl}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pumagirl2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            '-78px',
                            '-78px'
                        ],
                        [
                            "eid54",
                            "left",
                            6000,
                            8000,
                            "linear",
                            "${pumagirl2}",
                            '198px',
                            '-77px'
                        ]
                    ]
                }
            },
            "leaf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'leaf',
                            rect: [0, 0, 85, 66, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/leaf.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 85, 66]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid58",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${leaf}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid59",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${leaf}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "fallingleaf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'leaf2',
                            symbolName: 'leaf',
                            rect: [0, 0, 85, 66, 'auto', 'auto'],
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 85, 66]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid62",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid65",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '74px',
                            '136px'
                        ],
                        [
                            "eid66",
                            "top",
                            5000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '136px',
                            '189px'
                        ],
                        [
                            "eid68",
                            "top",
                            6000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '189px',
                            '222px'
                        ],
                        [
                            "eid70",
                            "top",
                            7000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '222px',
                            '248px'
                        ],
                        [
                            "eid63",
                            "left",
                            3000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '0px',
                            '-14px'
                        ],
                        [
                            "eid64",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '-14px',
                            '21px'
                        ],
                        [
                            "eid67",
                            "left",
                            5000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '21px',
                            '0px'
                        ],
                        [
                            "eid69",
                            "left",
                            6000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '0px',
                            '15px'
                        ],
                        [
                            "eid71",
                            "left",
                            7000,
                            1000,
                            "linear",
                            "${leaf2}",
                            '15px',
                            '-5px'
                        ],
                        [
                            "eid73",
                            "opacity",
                            12000,
                            500,
                            "linear",
                            "${leaf2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "oldman": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'oldman',
                            rect: [0, 0, '690px', '624px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'cityoverview/images/oldman.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 128, 300]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid74",
                            "top",
                            0,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            250,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid78",
                            "top",
                            500,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid80",
                            "top",
                            750,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid82",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid86",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '-296px'
                        ],
                        [
                            "eid88",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${oldman}",
                            '-294px',
                            '-297px'
                        ],
                        [
                            "eid90",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${oldman}",
                            '-297px',
                            '-297px'
                        ],
                        [
                            "eid92",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${oldman}",
                            '-297px',
                            '-297px'
                        ],
                        [
                            "eid75",
                            "left",
                            0,
                            0,
                            "linear",
                            "${oldman}",
                            '-22px',
                            '-22px'
                        ],
                        [
                            "eid77",
                            "left",
                            250,
                            0,
                            "linear",
                            "${oldman}",
                            '-22px',
                            '-153px'
                        ],
                        [
                            "eid79",
                            "left",
                            500,
                            0,
                            "linear",
                            "${oldman}",
                            '-153px',
                            '-276px'
                        ],
                        [
                            "eid81",
                            "left",
                            750,
                            0,
                            "linear",
                            "${oldman}",
                            '-255px',
                            '-276px'
                        ],
                        [
                            "eid83",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${oldman}",
                            '-275px',
                            '-408px'
                        ],
                        [
                            "eid85",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${oldman}",
                            '-388px',
                            '-20px'
                        ],
                        [
                            "eid87",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${oldman}",
                            '0px',
                            '-23px'
                        ],
                        [
                            "eid89",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${oldman}",
                            '-23px',
                            '-154px'
                        ],
                        [
                            "eid91",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${oldman}",
                            '-134px',
                            '-281px'
                        ],
                        [
                            "eid93",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${oldman}",
                            '-263px',
                            '-416px'
                        ]
                    ]
                }
            },
            "rectangle": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'whiterectangle',
                            opacity: '0',
                            rect: ['-113px', '-97px', '2262px', '1728px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle2',
                            opacity: '0.000000',
                            rect: [-103, -89, 2209, 1673, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: [168, 168, 1667, 1296, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'memorytext',
                            symbolName: 'memorytext',
                            type: 'rect',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2048, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: false,
                    labels: {
                        "playhere": 1000
                    },
                    data: [
                        [
                            "eid133",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-89px',
                            '-89px'
                        ],
                        [
                            "eid128",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-103px',
                            '-103px'
                        ],
                        [
                            "eid148",
                            "left",
                            2693,
                            0,
                            "linear",
                            "${memorytext}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid130",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '2209px',
                            '2209px'
                        ],
                        [
                            "eid121",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1673px',
                            '1673px'
                        ],
                        [
                            "eid151",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${memorytext}",
                            '0',
                            '0'
                        ],
                        [
                            "eid152",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${memorytext}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${memorytext}",
                            '1',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${whiterectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid163",
                            "opacity",
                            1914,
                            336,
                            "linear",
                            "${whiterectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid149",
                            "top",
                            2693,
                            0,
                            "linear",
                            "${memorytext}",
                            '168px',
                            '168px'
                        ]
                    ]
                }
            },
            "button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 1942, 1465, 'auto', 'auto'],
                            id: 'button',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1942, 1465]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "memorytext": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group2',
                            rect: [15, 0, '6510', '1211', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'travelers2_02',
                                rect: [2521, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers2_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers2_01',
                                rect: [1725, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers2_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers2_02Copy',
                                rect: [7311, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers2_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers2_01Copy',
                                rect: [6515, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers2_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers1_02',
                                rect: [796, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers1_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers1_01',
                                rect: [0, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers1_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers1_02Copy',
                                rect: [4119, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers1_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers1_01Copy',
                                rect: [3323, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers1_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers1_02Copy2',
                                rect: [5714, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers1_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'travelers1_01Copy2',
                                rect: [4918, 0, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/travelers1_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'memories2_02',
                                rect: [5714, 583, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/memories2_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'memories2_01',
                                rect: [4918, 583, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/memories2_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'memories2_02Copy',
                                rect: [7311, 583, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/memories2_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'memories2_01Copy',
                                rect: [6515, 583, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/memories2_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'memories1_02',
                                rect: [4119, 583, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/memories1_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'memories1_01',
                                rect: [3317, 583, '796px', '628px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'cityoverview/images/text/images/memories1_01.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1667, 1296]
                        }
                    }
                },
                timeline: {
                    duration: 2798,
                    autoPlay: false,
                    data: [
                        [
                            "eid135",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid136",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid138",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid140",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid142",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid144",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid153",
                            "top",
                            2798,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid134",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid137",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Group2}",
                            '15px',
                            '-1726px'
                        ],
                        [
                            "eid139",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Group2}",
                            '-1592px',
                            '0px'
                        ],
                        [
                            "eid141",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${Group2}",
                            '139px',
                            '-3315px'
                        ],
                        [
                            "eid143",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Group2}",
                            '-3191px',
                            '-4915px'
                        ],
                        [
                            "eid145",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${Group2}",
                            '-4786px',
                            '-3319px'
                        ],
                        [
                            "eid146",
                            "left",
                            2607,
                            0,
                            "linear",
                            "${Group2}",
                            '-3187px',
                            '-4915px'
                        ],
                        [
                            "eid147",
                            "left",
                            2693,
                            0,
                            "linear",
                            "${Group2}",
                            '-4786px',
                            '-3322px'
                        ],
                        [
                            "eid154",
                            "left",
                            2798,
                            0,
                            "linear",
                            "${Group2}",
                            '-3322px',
                            '-6509px'
                        ]
                    ]
                }
            },
            "sailorsit": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'sailorsit',
                            rect: [0, 0, '1024px', '1244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/sailorsit.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 500, 607]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid170",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid173",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '-622px'
                        ],
                        [
                            "eid169",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid171",
                            "left",
                            500,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '-460px'
                        ],
                        [
                            "eid172",
                            "left",
                            634,
                            0,
                            "linear",
                            "${sailorsit}",
                            '-460px',
                            '0px'
                        ]
                    ]
                }
            },
            "sailorsmoke": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'sailorsmoke',
                            rect: [0, 0, '700px', '1094px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/sailorsmoke.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 351, 549]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid174",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid177",
                            "left",
                            500,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '-349px'
                        ],
                        [
                            "eid179",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '-349px',
                            '-5px'
                        ],
                        [
                            "eid181",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '-5px',
                            '-349px'
                        ],
                        [
                            "eid183",
                            "left",
                            1648,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '-349px',
                            '1px'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid176",
                            "top",
                            500,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid178",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '-547px'
                        ],
                        [
                            "eid180",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '-547px',
                            '-547px'
                        ],
                        [
                            "eid182",
                            "top",
                            1648,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '-547px',
                            '-547px'
                        ]
                    ]
                }
            },
            "sailor": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'spritesheetsailor',
                            rect: [0, 0, '1024px', '606px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/spritesheetsailor.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 272, 568]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid184",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid187",
                            "left",
                            933,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '-255px'
                        ],
                        [
                            "eid193",
                            "left",
                            1097,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '-255px',
                            '0px'
                        ],
                        [
                            "eid195",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '-752px'
                        ],
                        [
                            "eid185",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid186",
                            "top",
                            933,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid192",
                            "top",
                            1097,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid194",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "plane1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-4', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            id: 'plane',
                            display: 'block',
                            rect: [7, 46, 526, 229, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'cityoverview/images/plane.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['10', 0, 0], [0, 0], ['-1.04259', 1, 1], ['50%', '50%']],
                            type: 'image',
                            id: 'plane2',
                            display: 'none',
                            rect: [1493, 46, 526, 229, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'cityoverview/images/plane.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2046, 321]
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: true,
                    data: [
                        [
                            "eid207",
                            "scaleX",
                            15000,
                            0,
                            "linear",
                            "${plane2}",
                            '-1.04259',
                            '-1.04259'
                        ],
                        [
                            "eid206",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plane2}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid210",
                            "top",
                            15000,
                            0,
                            "linear",
                            "${plane2}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid212",
                            "left",
                            15000,
                            15000,
                            "linear",
                            "${plane2}",
                            '1493px',
                            '119px'
                        ],
                        [
                            "eid213",
                            "display",
                            15011,
                            0,
                            "linear",
                            "${plane}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plane}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid204",
                            "left",
                            0,
                            15006,
                            "linear",
                            "${plane}",
                            '7px',
                            '1497px'
                        ],
                        [
                            "eid209",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${plane2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid208",
                            "rotateZ",
                            15000,
                            0,
                            "linear",
                            "${plane2}",
                            '10deg',
                            '10deg'
                        ]
                    ]
                }
            },
            "plane3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['10', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [22, 61, '732px', '318px', 'auto', 'auto'],
                            display: 'block',
                            id: 'plane3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'cityoverview/images/plane.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['24', 0, 0], [0, 0], ['-1.02234', 1, 1], ['50%', '50%']],
                            type: 'image',
                            id: 'plane3Copy',
                            display: 'none',
                            rect: [1167, 1000, '732px', '318px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'cityoverview/images/plane.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1940, 1457]
                        }
                    }
                },
                timeline: {
                    duration: 39903,
                    autoPlay: true,
                    data: [
                        [
                            "eid225",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${plane3}",
                            '10deg',
                            '10deg'
                        ],
                        [
                            "eid230",
                            "rotateZ",
                            19962,
                            0,
                            "linear",
                            "${plane3Copy}",
                            '24deg',
                            '24deg'
                        ],
                        [
                            "eid223",
                            "top",
                            0,
                            19997,
                            "linear",
                            "${plane3}",
                            '61px',
                            '1000px'
                        ],
                        [
                            "eid232",
                            "display",
                            19997,
                            0,
                            "linear",
                            "${plane3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            19997,
                            0,
                            "linear",
                            "${plane3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "top",
                            19997,
                            19902,
                            "linear",
                            "${plane3Copy}",
                            '1000px',
                            '86px'
                        ],
                        [
                            "eid224",
                            "left",
                            0,
                            19997,
                            "linear",
                            "${plane3}",
                            '22px',
                            '1167px'
                        ],
                        [
                            "eid228",
                            "left",
                            19997,
                            19902,
                            "linear",
                            "${plane3Copy}",
                            '1167px',
                            '-215px'
                        ]
                    ]
                }
            },
            "groupmen1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-45, -108, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman2Copy',
                            symbolName: 'oldman',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.29305', '0.28429', 1], ['50%', '50%']],
                            type: 'rect'
                        },
                        {
                            rect: [9, -89, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman2Copy2',
                            symbolName: 'oldman',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.29304', '0.28429', 1], ['50%', '50%']],
                            type: 'rect'
                        },
                        {
                            rect: [41, -108, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman2Copy3',
                            symbolName: 'oldman',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.29304', '0.28429', 1], ['50%', '50%']],
                            type: 'rect'
                        },
                        {
                            rect: [79, -95, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman2Copy4',
                            symbolName: 'oldman',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.29304', '0.28429', 1], ['50%', '50%']],
                            type: 'rect'
                        },
                        {
                            rect: [60, -94, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman2Copy5',
                            symbolName: 'oldman',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.29304', '0.28429', 1], ['50%', '50%']],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 162, 104]
                        }
                    }
                },
                timeline: {
                    duration: 18513,
                    autoPlay: true,
                    data: [
                        [
                            "eid260",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy}",
                            '-45px',
                            '-45px'
                        ],
                        [
                            "eid264",
                            "scaleX",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy2}",
                            '0.29304',
                            '0.29304'
                        ],
                        [
                            "eid266",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy3}",
                            '-108px',
                            '-108px'
                        ],
                        [
                            "eid269",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy5}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid267",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy4}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid268",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy4}",
                            '-95px',
                            '-95px'
                        ],
                        [
                            "eid263",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy2}",
                            '-89px',
                            '-89px'
                        ],
                        [
                            "eid265",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy3}",
                            '41px',
                            '41px'
                        ],
                        [
                            "eid261",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy}",
                            '-108px',
                            '-108px'
                        ],
                        [
                            "eid262",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy2}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid270",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman2Copy5}",
                            '-94px',
                            '-94px'
                        ]
                    ]
                }
            },
            "groupmen2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.29305', '0.28429', 1], ['50%', '50%']],
                            rect: [-28, -102, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman3Copy',
                            symbolName: 'oldman',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.29304', '0.28429', 1], ['50%', '50%']],
                            rect: [78, -108, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman4Copy',
                            symbolName: 'oldman',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.29304', '0.28429', 1], ['50%', '50%']],
                            rect: [-1, -97, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman4Copy2',
                            symbolName: 'oldman',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.28475', '0.28429', 1], ['50%', '50%']],
                            rect: [-46, -81, 128, 300, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldman4Copy3',
                            symbolName: 'oldman',
                            type: 'rect',
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 161, 112]
                        }
                    }
                },
                timeline: {
                    duration: 18513,
                    autoPlay: true,
                    data: [
                        [
                            "eid259",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman3Copy}",
                            '-102px',
                            '-102px'
                        ],
                        [
                            "eid256",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman4Copy3}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid245",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman4Copy}",
                            '-108px',
                            '-108px'
                        ],
                        [
                            "eid247",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman4Copy2}",
                            '-97px',
                            '-97px'
                        ],
                        [
                            "eid255",
                            "scaleX",
                            18513,
                            0,
                            "linear",
                            "${oldman4Copy3}",
                            '-0.28475',
                            '-0.28475'
                        ],
                        [
                            "eid246",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman4Copy2}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid244",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman4Copy}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid257",
                            "top",
                            18513,
                            0,
                            "linear",
                            "${oldman4Copy3}",
                            '-81px',
                            '-81px'
                        ],
                        [
                            "eid258",
                            "left",
                            18513,
                            0,
                            "linear",
                            "${oldman3Copy}",
                            '-28px',
                            '-28px'
                        ]
                    ]
                }
            },
            "bgluna1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Bgluna',
                            rect: [-2, 0, '500px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/Bgluna.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 125, 166]
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    data: [
                        [
                            "eid303",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid312",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid314",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid316",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid304",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid313",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-2px',
                            '-127px'
                        ],
                        [
                            "eid315",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-127px',
                            '-248px'
                        ],
                        [
                            "eid317",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-248px',
                            '-374px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("start_edgeActions.js");
})("EDGE-115245901");

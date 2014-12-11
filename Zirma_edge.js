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
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Paralex',
                            symbolName: 'Paralex',
                            type: 'rect',
                            rect: ['-5500', '876', '10000', '1377', 'auto', 'auto']
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
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "foreground": {
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
                            id: 'forgeound1_01',
                            rect: [0, 0, '1024px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/forgeound1_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'forgeound1_02',
                            rect: [1024, 0, '1024px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/forgeound1_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'forgeound1_03',
                            rect: [2048, 0, '1024px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/forgeound1_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'forgeound1_04',
                            rect: [3065, 0, '1024px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/forgeound1_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'forgeound1_05',
                            rect: [4089, 0, '1024px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/forgeound1_05.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'forgeound1_06',
                            rect: [5113, 0, '1024px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/forgeound1_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground2_01',
                            rect: [6137, 0, '1024px', '244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground2_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground2_02',
                            rect: [7161, 0, '1024px', '244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground2_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground2_03-1',
                            rect: [8185, 0, '1024px', '244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground2_03-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground2_04',
                            rect: [9209, 0, '1024px', '244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground2_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground2_05',
                            rect: [10233, 0, '1024px', '244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground2_05.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground2_06',
                            rect: [11257, 0, '1024px', '244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground2_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_01',
                            rect: [12281, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_02',
                            rect: [13305, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_02Copy3',
                            rect: [15363, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_02.png', '0px', '0px']
                        },
                        {
                            rect: [14334, 0, '1024px', '240px', 'auto', 'auto'],
                            id: 'foreground3_02Copy',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.01029', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_02.png', '0px', '0px']
                        },
                        {
                            rect: [16392, 0, '1024px', '240px', 'auto', 'auto'],
                            id: 'foreground3_02Copy4',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.01029', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_03',
                            rect: [17421, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_04',
                            rect: [18425, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_05',
                            rect: [19449, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_05.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_06',
                            rect: [20473, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'foreground3_06Copy3',
                            rect: [22513, 0, '1024px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_06.png', '0px', '0px']
                        },
                        {
                            rect: [21493, 0, '1024px', '240px', 'auto', 'auto'],
                            id: 'foreground3_06Copy',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.99292', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/foreground3_06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 18425, 254]
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
            "midground": {
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
                            id: 'midground2_03',
                            rect: [12311, 0, '1024px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/midground2_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'midground2_04',
                            rect: [13335, 0, '1024px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/midground2_04.png', '0px', '0px']
                        },
                        {
                            rect: [14358, 0, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground2_04Copy',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.99866', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground2_04.png', '0px', '0px']
                        },
                        {
                            rect: [15372, 3, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground2_04Copy2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.98315', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground2_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'midground1-_01',
                            rect: [124, 9, '1024px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_01.png', '0px', '0px']
                        },
                        {
                            rect: [1086, 9, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_01Copy',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.87949', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'midground1-_03',
                            rect: [2048, 6, '1024px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'midground1-_04',
                            rect: [3072, 6, '1024px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'midground1-_05',
                            rect: [4096, 6, '1024px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_05.png', '0px', '0px']
                        },
                        {
                            rect: [6142, 3, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_04Copy',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.00943', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_04.png', '0px', '0px']
                        },
                        {
                            rect: [7176, 6, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_04Copy2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.00943', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_04.png', '0px', '0px']
                        },
                        {
                            rect: [8211, 3, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_04Copy3',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.01233', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_04.png', '0px', '0px']
                        },
                        {
                            rect: [8211, 3, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_04Copy4',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.01233', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_04.png', '0px', '0px']
                        },
                        {
                            rect: [9252, 0, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_04Copy5',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.02237', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_04.png', '0px', '0px']
                        },
                        {
                            rect: [5119, 3, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_05Copy',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.98771', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_05.png', '0px', '0px']
                        },
                        {
                            rect: [10281, 0, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_05Copy2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.98771', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_05.png', '0px', '0px']
                        },
                        {
                            rect: [11293, 0, '1024px', '281px', 'auto', 'auto'],
                            id: 'midground1-_05Copy3',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.98771', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/midground1-_05.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 10000, 287]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "background": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'BG1_01',
                            type: 'image',
                            rect: [0, 41, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_01.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_02',
                            type: 'image',
                            rect: [1024, 41, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_02.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_03',
                            type: 'image',
                            rect: [2016, 41, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_03.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_04',
                            type: 'image',
                            rect: [3040, 41, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_04.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_05',
                            type: 'image',
                            rect: [4061, 33, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_05.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_06',
                            type: 'image',
                            rect: [5087, 33, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_06.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_07',
                            type: 'image',
                            rect: [0, 430, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_07.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_08',
                            type: 'image',
                            rect: [1024, 430, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_08.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_09',
                            type: 'image',
                            rect: [2016, 430, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_09.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_10',
                            type: 'image',
                            rect: [3040, 430, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_10.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_11',
                            type: 'image',
                            rect: [4061, 430, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_11.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_12',
                            type: 'image',
                            rect: [5087, 430, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_12.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_13',
                            type: 'image',
                            rect: [0, 825, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_13.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_14',
                            type: 'image',
                            rect: [1024, 825, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_14.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_15',
                            type: 'image',
                            rect: [2016, 825, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_15.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_16',
                            type: 'image',
                            rect: [3040, 825, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_16.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_17',
                            type: 'image',
                            rect: [4061, 825, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_17.png', '0px', '0px']
                        },
                        {
                            id: 'BG1_18',
                            type: 'image',
                            rect: [5087, 825, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG1_18.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_01',
                            type: 'image',
                            rect: [6056, 0, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_01.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_02',
                            type: 'image',
                            rect: [7080, 0, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_02.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_03',
                            type: 'image',
                            rect: [8104, 7, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_03.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_05',
                            type: 'image',
                            rect: [10152, 0, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_05.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_06',
                            type: 'image',
                            rect: [11170, 0, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_06.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_07',
                            type: 'image',
                            rect: [6056, 391, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_07.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_08',
                            type: 'image',
                            rect: [7080, 391, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_08.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_09',
                            type: 'image',
                            rect: [8104, 391, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_09.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_10',
                            type: 'image',
                            rect: [9128, 391, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_10.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_11',
                            type: 'image',
                            rect: [10152, 394, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_11.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_12',
                            type: 'image',
                            rect: [11170, 394, '1024px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_12.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_13',
                            type: 'image',
                            rect: [6056, 786, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_13.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_14',
                            type: 'image',
                            rect: [7080, 786, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_14.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_15',
                            type: 'image',
                            rect: [8104, 786, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_15.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_16',
                            type: 'image',
                            rect: [9128, 786, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_16.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_17',
                            type: 'image',
                            rect: [10152, 786, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_17.png', '0px', '0px']
                        },
                        {
                            id: 'BG2_18',
                            type: 'image',
                            rect: [11176, 786, '1024px', '394px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG2_18.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'BG3_01',
                            rect: [12147, 337, '698px', '417px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04837', '1.04837', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/BG3_01.png', '0px', '0px']
                        },
                        {
                            id: 'BG3_02',
                            type: 'image',
                            rect: [12862, 343, '699px', '417px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG3_02.png', '0px', '0px']
                        },
                        {
                            id: 'BG3_03',
                            type: 'image',
                            rect: [13561, 351, '698px', '417px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG3_03.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04837', '1', 1], ['50%', '50%']],
                            borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                            id: 'BG3_04',
                            rect: [12147, 760, '698px', '416px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BG3_04.png', '0px', '0px']
                        },
                        {
                            id: 'BG3_05',
                            type: 'image',
                            rect: [12862, 760, '699px', '416px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG3_05.png', '0px', '0px']
                        },
                        {
                            id: 'BG3_06',
                            type: 'image',
                            rect: [13561, 764, '698px', '416px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG3_06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 14259, 1219]
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
            "Background": {
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
                            id: 'bg1_01',
                            rect: [5460, -700, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg1_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg1_02',
                            rect: [6484, -700, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg1_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg1_04',
                            rect: [7508, -700, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg1_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg-2_01',
                            rect: [7717, -710, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg-2_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg-5_01',
                            rect: [7717, -710, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg-2_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg-2_02',
                            rect: [8729, -710, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg-2_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg-2_03',
                            rect: [9753, -710, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg-2_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg4_01',
                            rect: [12645, -757, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg4_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'PARALEX_01',
                            rect: [10723, -700, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/PARALEX_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'PARALEX_02',
                            rect: [11725, -700, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/PARALEX_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bg4_03',
                            rect: [13669, -765, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg4_03.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.007', 1, 1], ['50%', '50%']],
                            id: 'bg4_03Copy',
                            type: 'image',
                            rect: [14684, -765, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg4_03.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.007', 1, 1], ['50%', '50%']],
                            id: 'bg4_03Copy4',
                            type: 'image',
                            rect: [16729, -770, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg4_03.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.02707', 1, 1], ['50%', '50%']],
                            id: 'bg4_03Copy2',
                            type: 'image',
                            rect: [15721, -765, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg4_03.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.26861', 1, 1], ['50%', '50%']],
                            id: 'bg4_04',
                            type: 'image',
                            rect: [16992, -762, '1024px', '667px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bg4_04.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'BGtrees',
                            symbolName: 'BGtrees',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.72765', '0.72765', 1], ['50%', '50%']],
                            rect: [12785, -1236, 6672, 1918, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy20',
                            rect: [6627, -961, 98, 358, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy10',
                            type: 'image',
                            rect: [6047, -922, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy13',
                            type: 'image',
                            rect: [6205, -933, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy19',
                            type: 'image',
                            rect: [6410, -910, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy5',
                            rect: [6518, -929, 98, 358, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy4',
                            type: 'image',
                            rect: [6771, -941, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy9',
                            type: 'image',
                            rect: [6948, -941, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy3',
                            type: 'image',
                            rect: [6771, -941, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy17',
                            type: 'image',
                            rect: [6319, -844, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.88449', '0.88076', 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'BGpuma1Copy',
                            symbolName: 'BGpuma1',
                            display: 'none',
                            rect: [5791, -712, 1504, 629, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy18',
                            rect: [7177, -858, 98, 358, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy6',
                            rect: [6646, -796, 98, 358, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.91646', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy7',
                            type: 'image',
                            rect: [5959, -802, 98, 358, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.91646', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy8',
                            type: 'image',
                            rect: [5622, -910, 98, 358, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy2',
                            rect: [5807, -961, 98, 358, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy16',
                            type: 'image',
                            rect: [7489, -949, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy11',
                            type: 'image',
                            rect: [5752, -830, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy12',
                            type: 'image',
                            rect: [7080, -933, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy15',
                            type: 'image',
                            rect: [7289, -943, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy14',
                            type: 'image',
                            rect: [7411, -891, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'littlehouse2',
                            rect: [6833, -789, 186, 332, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/littlehouse.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraperCopy2',
                            rect: [9760, -1047, 301, 579, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraperCopy3',
                            rect: [9283, -1056, 262, 504, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraperCopy4',
                            rect: [9479, -1090, 255, 492, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraperCopy5',
                            rect: [9955, -1031, 262, 504, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraperCopy7',
                            rect: [9479, -986, 301, 579, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraper',
                            rect: [10038, -961, 288, 554, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraperCopy',
                            rect: [10265, -992, 288, 554, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['-9', 0, 0], [0, 0], ['0.64484', '0.64484', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'Fsmoke',
                            symbolName: 'Fsmoke',
                            rect: [8436, -1451, 529, 379, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 10000, 1013]
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1066",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BGpuma1Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1658",
                            "top",
                            0,
                            0,
                            "linear",
                            "${BGpuma1Copy}",
                            '-712px',
                            '-712px'
                        ],
                        [
                            "eid1657",
                            "left",
                            0,
                            0,
                            "linear",
                            "${BGpuma1Copy}",
                            '5791px',
                            '5791px'
                        ]
                    ]
                }
            },
            "Paralex": {
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
                            id: 'Wholebackground',
                            symbolName: 'Wholebackground',
                            rect: [17, -803, 18086, 2148, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'SKYCopy',
                            symbolName: 'SKY',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, '1.06558', 1], ['50%', '50%']],
                            rect: [5502, -904, 6087, 568, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'wholemidground',
                            symbolName: 'wholemidground',
                            rect: [5358, -1183, 14320, 1619, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'wholeforeground',
                            symbolName: 'wholeforeground',
                            rect: [5843, -1826, 18669, 2446, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'shakee',
                            symbolName: 'shakee',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.8006', '0.8006', 1], ['50%', '50%']],
                            rect: [6143, -900, 695, 781, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 10000, 1377]
                        }
                    }
                },
                timeline: {
                    duration: 390000,
                    autoPlay: false,
                    data: [
                        [
                            "eid178",
                            "left",
                            15,
                            9985,
                            "linear",
                            "${wholeforeground}",
                            '5843px',
                            '-11972px'
                        ],
                        [
                            "eid132",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${wholemidground}",
                            '5358px',
                            '-7160px'
                        ],
                        [
                            "eid112",
                            "left",
                            0,
                            10007,
                            "linear",
                            "${Wholebackground}",
                            '17px',
                            '-8048px'
                        ],
                        [
                            "eid176",
                            "top",
                            15,
                            0,
                            "linear",
                            "${wholeforeground}",
                            '-1826px',
                            '-1826px'
                        ],
                        [
                            "eid1647",
                            "scaleX",
                            15,
                            0,
                            "linear",
                            "${shakee}",
                            '0.8006',
                            '0.8006'
                        ],
                        [
                            "eid810",
                            "left",
                            15,
                            0,
                            "linear",
                            "${SKYCopy}",
                            '5502px',
                            '5502px'
                        ],
                        [
                            "eid811",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${SKYCopy}",
                            '1.06558',
                            '1.06558'
                        ],
                        [
                            "eid1648",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${shakee}",
                            '0.8006',
                            '0.8006'
                        ],
                        [
                            "eid130",
                            "top",
                            0,
                            0,
                            "linear",
                            "${wholemidground}",
                            '-1183px',
                            '-1183px'
                        ],
                        [
                            "eid109",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Wholebackground}",
                            '-803px',
                            '-803px'
                        ],
                        [
                            "eid812",
                            "top",
                            15,
                            0,
                            "linear",
                            "${SKYCopy}",
                            '-904px',
                            '-904px'
                        ]
                    ]
                }
            },
            "BGtrees": {
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
                            id: 'tree2Copy',
                            rect: [739, 30, '168px', '616px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy2',
                            rect: [1038, -17, '168px', '616px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy6',
                            rect: [1770, 37, '168px', '616px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy7',
                            rect: [2688, 119, '168px', '616px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree2Copy12',
                            rect: [1882, 122, '168px', '616px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            rect: [2047, 94, '168px', '616px', 'auto', 'auto'],
                            id: 'tree2Copy13',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.07999', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            rect: [1208, 69, '168px', '616px', 'auto', 'auto'],
                            id: 'tree2Copy3',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            rect: [433, 77, '168px', '616px', 'auto', 'auto'],
                            id: 'tree2Copy8',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            rect: [2224, 42, '168px', '616px', 'auto', 'auto'],
                            id: 'tree2Copy9',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            rect: [1379, -29, '168px', '616px', 'auto', 'auto'],
                            id: 'tree2Copy10',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            rect: [2432, 42, '168px', '616px', 'auto', 'auto'],
                            id: 'tree2Copy4',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            rect: [1600, 53, '168px', '616px', 'auto', 'auto'],
                            id: 'tree2Copy5',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 6672, 1918]
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Wholebackground": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7488', '122', 1620, 133, 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'plane4',
                            type: 'rect',
                            id: 'plane42'
                        },
                        {
                            type: 'rect',
                            id: 'plane1',
                            symbolName: 'BGplane3',
                            rect: ['6808', '0', 2594, 218, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], ['6', 0, 0], [0, 0], ['-0.74542', '0.85365', 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'plane2',
                            symbolName: 'BGplane1',
                            display: 'none',
                            rect: [8374, -73, 626, 303, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'crane',
                            rect: [9628, -18, 522, 522, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/crane.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'unfinished',
                            rect: [9908, 132, 228, 396, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/unfinished.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'craneCopy',
                            rect: [11111, 0, 522, 522, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/crane.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'part1',
                            symbolName: 'Background',
                            rect: [0, 1135, 10000, 1013, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'purpleCopy',
                            rect: [11438, 420, 297, 141, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/purple.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yellow',
                            rect: [11139, 413, 271, 129, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/yellow.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yellowCopy',
                            rect: [11548, 500, 271, 129, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/yellow.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'red',
                            rect: [10862, 420, 258, 122, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/red.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'purple',
                            rect: [11223, 488, 297, 141, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/purple.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'blue',
                            rect: [10911, 510, 272, 129, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/blue.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'blueCopy',
                            rect: [11451, 523, 272, 129, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/blue.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'redCopy',
                            rect: [11094, 523, 258, 122, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/cars/red.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2',
                            type: 'image',
                            rect: [7814, 191, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'building2',
                            rect: [7942, 72, 340, 492, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/building2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'BGtrees',
                            symbolName: 'BGtrees',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.69524', '0.72765', 1], ['50%', '50%']],
                            rect: [12219, -152, 6672, 1918, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'skyscraper2',
                            rect: [13242, 60, 271, 522, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.98249', 1, 1], ['50%', '50%']],
                            id: 'buiding',
                            type: 'image',
                            rect: [7719, 122, 369, 535, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/buiding.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.98249', 1, 1], ['50%', '50%']],
                            id: 'buidingCopy',
                            type: 'image',
                            rect: [8464, 53, 369, 535, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/buiding.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'building2Copy',
                            rect: [8627, 258, 340, 492, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/building2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'factory2',
                            rect: [8112, 2, 435, 630, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/factory.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'factory2Copy',
                            rect: [13148, 122, 435, 630, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/factory.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.02419', 1, 1], ['50%', '50%']],
                            id: 'tree2Copy',
                            type: 'image',
                            rect: [8439, 324, 96, 351, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/tree.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'clocktower',
                            rect: [8015, 62, 340, 656, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/clocktower.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'building22',
                            rect: [10477, 99, 390, 565, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/building2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'building22Copy',
                            rect: [12929, 17, 390, 565, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/building2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraper2Copy',
                            rect: [9086, 106, 271, 522, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraper2Copy3',
                            rect: [11819, 24, 271, 522, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraper2Copy4',
                            rect: [11968, 182, 271, 522, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraper2Copy5',
                            rect: [12179, 99, 271, 522, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'clocktower2',
                            rect: [12443, 53, 258, 498, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/clocktower.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.0123', 1, 1], ['50%', '50%']],
                            id: 'buiding2',
                            type: 'image',
                            rect: [12651, 58, 447, 647, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/buiding.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'skyscraper3',
                            rect: [15560, -29, '363px', '699px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/skyscraper.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'littlehouse3',
                            rect: [16047, 233, 222, 396, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/littlehouse.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.52685', '0.52685', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'BGlunatic',
                            symbolName: 'BGlunatic',
                            rect: [9460, 11, 124, 158, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], ['4', 0, 0], [0, 0], ['0.52685', '0.52685', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'BGlunatic',
                            id: 'BGlunatic3',
                            rect: [9078, 80, 124, 158, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], ['4', 0, 0], [0, 0], ['0.52685', '0.52685', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'BGlunatic',
                            id: 'BGlunatic2',
                            rect: [9761, 74, 124, 158, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], ['4', 0, 0], [0, 0], ['0.52685', '0.52685', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'BGlunatic',
                            id: 'BGlunatic4',
                            rect: [10047, 154, 124, 158, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.44746', '0.44746', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'sittingluna',
                            id: 'sittingluna',
                            rect: [9284, 58, 146, 207, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.40214', '0.40214', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'sittingluna',
                            id: 'sittingluna3',
                            rect: [9964, 84, 146, 207, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.49515', '0.44746', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'sittingluna',
                            id: 'sittingluna2',
                            rect: [9650, 125, 146, 207, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.25125', '1.25125', 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'plane3',
                            symbolName: 'BGplane1',
                            display: 'none',
                            rect: [7287, -269, 626, 303, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.25125', '1.25125', 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'plane3Copy',
                            symbolName: 'BGplane1',
                            display: 'none',
                            rect: [7287, -269, 626, 303, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'leaaf',
                            symbolName: 'leaaf',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.30658', '1.30658', 1], ['50%', '50%']],
                            rect: [5770, 172, 50, 83, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04293', '1.04293', 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'BGpuma1',
                            symbolName: 'BGpuma1',
                            display: 'none',
                            rect: [5450, 536, 1504, 629, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'littlehouse2',
                            rect: [6027, 390, 189, 338, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/background/littlehouse.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 18086, 2148]
                        }
                    }
                },
                timeline: {
                    duration: 100000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1348",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sittingluna3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1160",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${plane3}",
                            '1.25125',
                            '1.25125'
                        ],
                        [
                            "eid1169",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${plane3Copy}",
                            '1.25125',
                            '1.25125'
                        ],
                        [
                            "eid1637",
                            "scaleX",
                            15,
                            0,
                            "linear",
                            "${BGtrees}",
                            '0.69524',
                            '0.69524'
                        ],
                        [
                            "eid1056",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${leaaf}",
                            '1.30658',
                            '1.30658'
                        ],
                        [
                            "eid1057",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${leaaf}",
                            '1.30658',
                            '1.30658'
                        ],
                        [
                            "eid1295",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${BGlunatic}",
                            '0.52685',
                            '0.52685'
                        ],
                        [
                            "eid1163",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plane3}",
                            '-269px',
                            '-269px'
                        ],
                        [
                            "eid898",
                            "left",
                            15,
                            0,
                            "linear",
                            "${BGpuma1}",
                            '5450px',
                            '5450px'
                        ],
                        [
                            "eid1651",
                            "top",
                            0,
                            0,
                            "linear",
                            "${BGtrees}",
                            '-152px',
                            '-152px'
                        ],
                        [
                            "eid377",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sittingluna}",
                            '9284px',
                            '9284px'
                        ],
                        [
                            "eid1065",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BGpuma1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid894",
                            "scaleX",
                            15,
                            0,
                            "linear",
                            "${BGpuma1}",
                            '1.04293',
                            '1.04293'
                        ],
                        [
                            "eid1064",
                            "top",
                            0,
                            15,
                            "linear",
                            "${BGpuma1}",
                            '536px',
                            '505px'
                        ],
                        [
                            "eid1061",
                            "top",
                            0,
                            0,
                            "linear",
                            "${leaaf}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid1329",
                            "top",
                            1296,
                            0,
                            "linear",
                            "${BGlunatic4}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid1168",
                            "left",
                            0,
                            0,
                            "linear",
                            "${plane3Copy}",
                            '7287px',
                            '7287px'
                        ],
                        [
                            "eid1166",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${plane3Copy}",
                            '1.25125',
                            '1.25125'
                        ],
                        [
                            "eid1138",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plane2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plane42}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1346",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sittingluna3}",
                            '9964px',
                            '9964px'
                        ],
                        [
                            "eid1350",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BGlunatic2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid370",
                            "top",
                            0,
                            0,
                            "linear",
                            "${BGlunatic}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid295",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sittingluna}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1159",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${plane3}",
                            '1.25125',
                            '1.25125'
                        ],
                        [
                            "eid260",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${BGlunatic}",
                            '0.52685',
                            '0.52685'
                        ],
                        [
                            "eid1054",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${leaaf}",
                            '1.30658',
                            '1.30658'
                        ],
                        [
                            "eid1055",
                            "scaleX",
                            15,
                            0,
                            "linear",
                            "${leaaf}",
                            '1.30658',
                            '1.30658'
                        ],
                        [
                            "eid1328",
                            "left",
                            1296,
                            0,
                            "linear",
                            "${BGlunatic4}",
                            '10047px',
                            '10047px'
                        ],
                        [
                            "eid895",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${BGpuma1}",
                            '1.04293',
                            '1.04293'
                        ],
                        [
                            "eid1164",
                            "left",
                            0,
                            0,
                            "linear",
                            "${plane3}",
                            '7287px',
                            '7287px'
                        ],
                        [
                            "eid1167",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plane3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1158",
                            "left",
                            0,
                            12802,
                            "linear",
                            "${plane2}",
                            '8374px',
                            '8379px'
                        ],
                        [
                            "eid1376",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sittingluna2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1347",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sittingluna3}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid1366",
                            "left",
                            0,
                            0,
                            "linear",
                            "${BGlunatic}",
                            '9460px',
                            '9460px'
                        ],
                        [
                            "eid1344",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${sittingluna3}",
                            '0.40214',
                            '0.40214'
                        ],
                        [
                            "eid1137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plane3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1165",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plane3Copy}",
                            '-269px',
                            '-269px'
                        ],
                        [
                            "eid1349",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BGlunatic4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1345",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${sittingluna3}",
                            '0.40214',
                            '0.40214'
                        ],
                        [
                            "eid245",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${BGlunatic}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid246",
                            "rotateZ",
                            3000,
                            4000,
                            "linear",
                            "${BGlunatic}",
                            '9deg',
                            '-6deg'
                        ],
                        [
                            "eid1336",
                            "left",
                            1296,
                            0,
                            "linear",
                            "${BGlunatic2}",
                            '9761px',
                            '9761px'
                        ],
                        [
                            "eid376",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sittingluna}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid1652",
                            "left",
                            0,
                            15,
                            "linear",
                            "${BGtrees}",
                            '12219px',
                            '12215px'
                        ],
                        [
                            "eid1375",
                            "left",
                            0,
                            0,
                            "linear",
                            "${leaaf}",
                            '5770px',
                            '5770px'
                        ],
                        [
                            "eid1351",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BGlunatic3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1337",
                            "top",
                            1296,
                            0,
                            "linear",
                            "${BGlunatic2}",
                            '74px',
                            '74px'
                        ],
                        [
                            "eid1090",
                            "rotateZ",
                            5438,
                            0,
                            "linear",
                            "${plane2}",
                            '6deg',
                            '6deg'
                        ]
                    ]
                }
            },
            "CurryWurst": {
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
                            rect: [15, -11, '2034', '941', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'CW2',
                                rect: [1010, 0, '1024px', '877px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/CW2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'CW1',
                                rect: [0, 64, '1024px', '877px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/CW1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 877]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid550",
                            "top",
                            15,
                            0,
                            "linear",
                            "${Group2}",
                            '-11px',
                            '-11px'
                        ],
                        [
                            "eid551",
                            "top",
                            250,
                            0,
                            "linear",
                            "${Group2}",
                            '-11px',
                            '-3px'
                        ],
                        [
                            "eid549",
                            "left",
                            15,
                            0,
                            "linear",
                            "${Group2}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid552",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Group2}",
                            '15px',
                            '-1000px'
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
                            type: 'group',
                            id: 'Group3',
                            rect: [0, 0, '1035', '780', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'Tatto1',
                                rect: [1040, 0, '1024px', '780px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/Tatto1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'Tattoo22',
                                rect: [0, 0, '1024px', '780px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/Tattoo2.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1035, 780]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid121",
                            "left",
                            15,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid126",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '-1040px'
                        ],
                        [
                            "eid122",
                            "top",
                            15,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid125",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "objectsmidground": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['5014px', -25, 510, 1393, 'auto', 'auto'],
                            fill: ['rgba(234,234,234,1.00)']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.75862', '0.75862', 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'MGplane3',
                            symbolName: 'MGplane1',
                            display: 'none',
                            rect: [2280, 4, 8966, 957, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.98041', 1, 1], ['50%', '50%']],
                            id: 'benchCopy',
                            type: 'image',
                            rect: [8265, 955, 268, 255, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/bench.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy12',
                            rect: [12693, 62, 308, 1165, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_02Copy12',
                                rect: [2, 594, 308, 582, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_01Copy12',
                                rect: [2, 23, 308, 583, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy10',
                            rect: [556, 260, 295, 1117, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_02Copy10',
                                rect: [3, 596, 308, 582, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_01Copy10',
                                rect: [3, 13, 308, 583, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'tree_02Copy14',
                            rect: [13707, 702, 308, 582, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree_01Copy14',
                            rect: [13707, 131, 308, 583, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy2',
                            rect: [12325, -18, 308, 1165, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_02Copy3',
                                rect: [2, 594, 308, 582, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_01Copy3',
                                rect: [2, 23, 308, 583, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: [11104, -25, 308, 1165, 'auto', 'auto'],
                            c: [
                            {
                                type: 'group',
                                id: 'GroupCopy',
                                rect: [-11103, 167, 295, 1117, 'auto', 'auto'],
                                c: [
                                {
                                    type: 'image',
                                    id: 'tree_02Copy2',
                                    rect: [3, 596, 308, 582, 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'tree_01Copy2',
                                    rect: [3, 13, 308, 583, 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'image',
                                id: 'tree_02Copy',
                                rect: [2, 594, 308, 582, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_01Copy',
                                rect: [2, 23, 308, 583, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy15',
                            rect: [14054, 119, 308, 1165, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_02Copy15',
                                rect: [2, 594, 308, 582, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_01Copy15',
                                rect: [2, 23, 308, 583, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy13',
                            rect: [13159, -13, 308, 1165, 'auto', 'auto'],
                            c: [
                            {
                                transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.85613', 1, 1], ['50%', '50%']],
                                id: 'tree_02Copy13',
                                type: 'image',
                                rect: [-72, 571, 360, 582, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.96612', 1, 1], ['50%', '50%']],
                                id: 'tree_01Copy13',
                                type: 'image',
                                rect: [-46, -5, 308, 583, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy8',
                            rect: [1658, 233, 308, 1165, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_02Copy8',
                                rect: [7, 648, '390px', '738px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_01Copy8',
                                rect: [0, -83, '390px', '739px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy7',
                            rect: [1173, 162, 295, 1118, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_02Copy7',
                                rect: [2, 739, 369, 698, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_01Copy7',
                                rect: [0, 30, 374, 709, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'GroupCopy6',
                            rect: [2101, 36, 308, 1165, 'auto', 'auto'],
                            c: [
                            {
                                transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02165', 1, 1], ['50%', '50%']],
                                id: 'tree_02Copy6',
                                type: 'image',
                                rect: [-52, 728, '390px', '738px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.08414', 1, 1], ['50%', '50%']],
                                id: 'tree_01Copy6',
                                type: 'image',
                                rect: [-52, -11, '390px', '739px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.99537', 1, 1], ['50%', '50%']],
                            id: 'fruitndveg',
                            type: 'image',
                            rect: [6769, 484, 871, 771, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/fruitndveg.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group6',
                            rect: [7402, 25, 162, 676, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'lamposts_022',
                                rect: [99, 776, 161, 347, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'lamposts_012',
                                rect: [93, 402, 173, 374, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'tree_02Copy4',
                            rect: [1482, 645, 308, 582, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree_01Copy4',
                            rect: [1482, 62, 308, 583, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lamposts_022Copy',
                            rect: [10986, 827, 161, 347, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lamposts_012Copy',
                            rect: [10980, 453, 173, 374, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.06051', '1.07672', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'oldman3',
                            symbolName: 'oldman',
                            display: 'none',
                            rect: [7602, 771, 204, 439, 'auto', 'auto']
                        },
                        {
                            rect: ['7438', '816', 1157, 527, 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'crowdmen',
                            type: 'rect',
                            id: 'crowdmen2'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.06052', '1.07672', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'oldman5',
                            symbolName: 'oldman',
                            display: 'none',
                            rect: [8208, 898, 204, 439, 'auto', 'auto']
                        },
                        {
                            rect: [7985, 918, 204, 439, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'firstoldman',
                            symbolName: 'oldman',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04871', '1.07672', 1], ['50%', '50%']],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02818', 1, 1], ['50%', '50%']],
                            id: 'factory_02',
                            type: 'image',
                            rect: [2741, 695, 885, 665, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/factory_02.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.02818', 1, 1], ['50%', '50%']],
                            id: 'factory_01',
                            type: 'image',
                            rect: [2741, 36, 885, 665, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/factory_01.png', '0px', '0px']
                        },
                        {
                            rect: ['1799', '-281', 8966, 957, 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'MGplane1',
                            type: 'rect',
                            id: 'MGplane12'
                        },
                        {
                            type: 'group',
                            id: 'midskyscraper',
                            rect: [4749, -291, '900', '1865', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.01323', 1, 1], ['50%', '50%']],
                            c: [
                            {
                                type: 'image',
                                id: 'midskyscraper_022',
                                rect: [0, 932, '900px', '933px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/midskyscraper_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'midskyscraper_012',
                                rect: [0, 0, '900px', '932px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/midskyscraper_01.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: [10997, 580, 1035, 780, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'tattooshop',
                            symbolName: 'tattooshop',
                            type: 'rect'
                        },
                        {
                            rect: [8404, 371, 1024, 877, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'CurryWurst',
                            symbolName: 'CurryWurst',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'fruitndvegCopy',
                            rect: [9184, 515, 871, 771, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/fruitndveg.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cafeCopy',
                            rect: [9954, 565, 766, 726, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/cafe.png', '0px', '0px']
                        },
                        {
                            rect: [10867, 846, 187, 430, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sailor',
                            symbolName: 'sailor',
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.03986', 1, 1], ['50%', '50%']],
                            id: 'benchCopy2',
                            type: 'image',
                            rect: [11405, 1083, 313, 297, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/bench.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.03986', 1, 1], ['50%', '50%']],
                            id: 'benchCopy3',
                            type: 'image',
                            rect: [13440, 933, 313, 297, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/bench.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.71906', '0.71906', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'sailor2',
                            symbolName: 'sailorsit',
                            display: 'none',
                            rect: [11227, 886, 492, 598, 'auto', 'auto']
                        },
                        {
                            rect: [13052, 824, 700, 535, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sitdowngirl',
                            symbolName: 'sitdowngirl',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.84847', '0.84847', 1], ['50%', '50%']],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.71906', '0.71906', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'sailorsit3',
                            symbolName: 'sailorsit',
                            display: 'none',
                            rect: [13333, 784, 492, 598, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 14015, 1619]
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1729",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oldman5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1568",
                            "display",
                            15,
                            0,
                            "linear",
                            "${oldman5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1921",
                            "display",
                            0,
                            0,
                            "linear",
                            "${MGplane3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1730",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oldman3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1570",
                            "display",
                            15,
                            0,
                            "linear",
                            "${oldman3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1193",
                            "display",
                            0,
                            0,
                            "linear",
                            "${MGplane12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1728",
                            "display",
                            0,
                            0,
                            "linear",
                            "${crowdmen2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1569",
                            "display",
                            15,
                            0,
                            "linear",
                            "${crowdmen2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid739",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sailorsit3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1802",
                            "display",
                            15,
                            0,
                            "linear",
                            "${sailorsit3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1692",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sailor2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "wholemidground": {
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
                            id: 'billboard',
                            rect: [6291, 623, 715, 582, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/text/billboard.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'midground',
                            symbolName: 'midground',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, '1.43391', 1], ['50%', '50%']],
                            rect: [0, 1081, 10000, 287, 'auto', 'auto']
                        },
                        {
                            rect: [13948, '661', 210, 347, 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'behindtreeluna',
                            type: 'rect',
                            id: 'lunabehindtree1'
                        },
                        {
                            rect: [13582, 577, 210, 347, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.96749', 1, 1], ['50%', '50%']],
                            display: 'none',
                            symbolName: 'behindtreeluna',
                            id: 'lunabehindtree2',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'origional',
                            symbolName: 'pumagirl',
                            rect: ['130', '860', 2087, 340, 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'tree_02',
                            rect: [1241, 712, 308, 582, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tree_01',
                            rect: [1241, 141, 308, 583, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/tree_01.png', '0px', '0px']
                        },
                        {
                            rect: ['-176', '958', 2979, 412, 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'Mgpumagirl2',
                            type: 'rect',
                            id: 'Mgpumagirl2'
                        },
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['-0.59984', '0.6189', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'lunaticc',
                            symbolName: 'lunaticc',
                            rect: [5137, 239, 900, 1142, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'objectsmidground',
                            symbolName: 'objectsmidground',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [305, 15, 14015, 1619, 'auto', 'auto']
                        },
                        {
                            rect: [13276, 729, 204, 439, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04871', '1.07672', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'oldman',
                            id: 'bencholdman',
                            type: 'rect'
                        },
                        {
                            rect: [10745, 822, 343, 536, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.85686', '0.85686', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'sailorsmoke',
                            id: 'sailor3',
                            type: 'rect'
                        },
                        {
                            rect: [13065, 751, 343, 536, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.85686', '0.85686', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'sailorsmoke',
                            id: 'sailor4',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'Shopumagirls',
                            symbolName: 'Shopumagirls',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.67987', '0.67987', 1], ['50%', '50%']],
                            rect: [8256, 811, 4651, 707, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'leaf2',
                            symbolName: 'leaf',
                            rect: [14279, 164, 76, 118, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.93743', '0.93743', 1], ['50%', '50%']]
                        },
                        {
                            rect: [14128, 874, 204, 439, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.99846', '1.03401', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            display: 'none',
                            symbolName: 'oldman',
                            id: 'endoldman2',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'newspaper',
                            rect: [7346, 1055, 235, 340, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/text/newspaper.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 14320, 1619]
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: false,
                    data: [
                        [
                            "eid447",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${lunaticc}",
                            '239px',
                            '297px'
                        ],
                        [
                            "eid482",
                            "top",
                            12000,
                            0,
                            "linear",
                            "${lunaticc}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid658",
                            "scaleX",
                            15,
                            0,
                            "linear",
                            "${Shopumagirls}",
                            '0.67987',
                            '0.67987'
                        ],
                        [
                            "eid1697",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sailor4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1815",
                            "display",
                            15,
                            0,
                            "linear",
                            "${sailor4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1841",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${sailor4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1892",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Mgpumagirl2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid773",
                            "top",
                            15,
                            0,
                            "linear",
                            "${leaf2}",
                            '164px',
                            '164px'
                        ],
                        [
                            "eid1789",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lunabehindtree1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1842",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${lunabehindtree1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid659",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${Shopumagirls}",
                            '0.67987',
                            '0.67987'
                        ],
                        [
                            "eid1691",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sailor3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid448",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${lunaticc}",
                            '5137px',
                            '5357px'
                        ],
                        [
                            "eid484",
                            "left",
                            12000,
                            6991,
                            "linear",
                            "${lunaticc}",
                            '5357px',
                            '5136px'
                        ],
                        [
                            "eid1699",
                            "display",
                            0,
                            0,
                            "linear",
                            "${endoldman2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1839",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${endoldman2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid660",
                            "left",
                            15,
                            0,
                            "linear",
                            "${Shopumagirls}",
                            '8256px',
                            '8256px'
                        ],
                        [
                            "eid1731",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bencholdman}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1816",
                            "display",
                            15,
                            0,
                            "linear",
                            "${bencholdman}",
                            'none',
                            'none'
                        ],
                        [
                            "eid661",
                            "top",
                            15,
                            0,
                            "linear",
                            "${Shopumagirls}",
                            '811px',
                            '811px'
                        ],
                        [
                            "eid1817",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lunabehindtree2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1843",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${lunabehindtree2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid450",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${lunaticc}",
                            '0deg',
                            '39deg'
                        ],
                        [
                            "eid483",
                            "rotateZ",
                            12000,
                            6991,
                            "linear",
                            "${lunaticc}",
                            '39deg',
                            '7deg'
                        ]
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
                            type: 'rect',
                            id: 'spritesheet',
                            symbolName: 'spritesheet',
                            rect: ['0', '0', 1024, 1032, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 337, 340]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "wholeforeground": {
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
                            id: 'foreground',
                            symbolName: 'foreground',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, '1.95869', 1], ['50%', '50%']],
                            rect: [-365, 2145, 18425, 254, 'auto', 'auto']
                        },
                        {
                            type: 'group',
                            id: 'Group4Copy5',
                            rect: [-609, 223, '500', '2129', 'auto', 'auto'],
                            c: [
                            {
                                type: 'group',
                                id: 'Group4Copy4',
                                rect: [532, -148, '500', '2129', 'auto', 'auto'],
                                c: [
                                {
                                    type: 'image',
                                    id: 'tree_03Copy4',
                                    rect: [0, 1419, '500px', '710px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_03.png', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'tree_023Copy4',
                                    rect: [0, 710, '500px', '709px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_02.png', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'tree_013Copy4',
                                    rect: [0, 0, '500px', '710px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_01.png', '0px', '0px']
                                }]
                            },
                            {
                                rect: ['230', '1314', 2683, 707, 'auto', 'auto'],
                                display: 'none',
                                symbolName: 'FGpumagirls',
                                type: 'rect',
                                id: 'FGpumagirls'
                            },
                            {
                                type: 'image',
                                id: 'tree_03Copy5',
                                rect: [0, 1419, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_023Copy5',
                                rect: [0, 710, '500px', '709px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_013Copy5',
                                rect: [0, 0, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group4Copy3',
                            rect: [1055, 223, '500', '2129', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_03Copy3',
                                rect: [0, 1419, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_023Copy3',
                                rect: [0, 710, '500px', '709px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_013Copy3',
                                rect: [0, 0, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group4',
                            rect: [17519, 223, '500', '2129', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_03',
                                rect: [0, 1419, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_023',
                                rect: [0, 710, '500px', '709px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_013',
                                rect: [0, 0, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group4Copy',
                            rect: [18703, 457, '500', '2129', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_03Copy',
                                rect: [0, 1419, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_023Copy',
                                rect: [0, 710, '500px', '709px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_013Copy',
                                rect: [0, 0, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group4Copy2',
                            rect: [21437, 317, '500', '2129', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_03Copy2',
                                rect: [0, 1419, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_023Copy2',
                                rect: [0, 710, '500px', '709px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_013Copy2',
                                rect: [0, 0, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group4Copy6',
                            rect: [20815, 241, '500', '2129', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'tree_03Copy6',
                                rect: [0, 1419, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_023Copy6',
                                rect: [0, 710, '500px', '709px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tree_013Copy6',
                                rect: [0, 0, '500px', '710px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/midground/foreground/images/tree_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group3',
                            rect: [2536, 990, '355', '1531', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'lamposts_02',
                                rect: [0, 763, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'lamposts_01',
                                rect: [0, 0, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'lampost2',
                            rect: [12851, 924, 379, 1637, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'lamposts_02Copy4',
                                rect: [0, 763, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'lamposts_01Copy4',
                                rect: [0, 0, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'lampost2Copy',
                            rect: [15245, 924, 379, 1637, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'lamposts_02Copy5',
                                rect: [0, 763, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'lamposts_01Copy5',
                                rect: [0, 0, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group3Copy',
                            rect: [9227, 821, '355', '1531', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'lamposts_02Copy',
                                rect: [0, 763, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'lamposts_01Copy',
                                rect: [0, 0, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group3Copy2',
                            rect: [9994, 969, 463, 1997, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'lamposts_02Copy2',
                                rect: [0, 763, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'lamposts_01Copy2',
                                rect: [0, 0, '355px', '768px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Group3Copy3',
                            rect: [11208, 665, 399, 1719, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'lamposts_02Copy3',
                                rect: [0, 857, 399, 862, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'lamposts_01Copy3',
                                rect: [0, 94, 399, 862, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/lamposts_01.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'factory_02',
                            rect: [4807, 1565, 982, 738, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.28262', '1.21983', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/factory_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'factory_01',
                            rect: [4807, 669, 982, 738, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.28262', '1.21983', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'symbols/midground/images/factory_01.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'lunamove',
                            symbolName: 'lunamove',
                            rect: [8355, '1090', 775, 957, 'auto', 'auto']
                        },
                        {
                            rect: [8416, 792, 432, 1407, 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(244,244,244,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'FGskyscraper',
                            rect: [8292, 547, 989, 2044, 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'midskyscraper_02',
                                rect: [0, 927, '900px', '933px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/midskyscraper_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'midskyscraper_01',
                                rect: [0, 0, '900px', '932px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/midskyscraper_01.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 18669, 2446]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: false,
                    data: [
                        [
                            "eid380",
                            "left",
                            1096,
                            0,
                            "linear",
                            "${foreground}",
                            '-365px',
                            '-365px'
                        ],
                        [
                            "eid541",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FGpumagirls}",
                            'none',
                            'none'
                        ],
                        [
                            "eid381",
                            "top",
                            1096,
                            0,
                            "linear",
                            "${foreground}",
                            '2145px',
                            '2145px'
                        ]
                    ]
                }
            },
            "spritesheet": {
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
                            id: 'girlsprite',
                            rect: [0, 0, '1024px', '1032px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/girlsprite.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1024, 1032]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid138",
                            "left",
                            15,
                            0,
                            "linear",
                            "${girlsprite}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid141",
                            "left",
                            250,
                            0,
                            "linear",
                            "${girlsprite}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid143",
                            "left",
                            500,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-335px',
                            '-668px'
                        ],
                        [
                            "eid145",
                            "left",
                            750,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-668px',
                            '-3px'
                        ],
                        [
                            "eid147",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-3px',
                            '-336px'
                        ],
                        [
                            "eid149",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-336px',
                            '-666px'
                        ],
                        [
                            "eid151",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${girlsprite}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid153",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-4px',
                            '-337px'
                        ],
                        [
                            "eid139",
                            "top",
                            15,
                            0,
                            "linear",
                            "${girlsprite}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid140",
                            "top",
                            250,
                            0,
                            "linear",
                            "${girlsprite}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid142",
                            "top",
                            500,
                            0,
                            "linear",
                            "${girlsprite}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid144",
                            "top",
                            750,
                            0,
                            "linear",
                            "${girlsprite}",
                            '0px',
                            '-346px'
                        ],
                        [
                            "eid146",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-346px',
                            '-346px'
                        ],
                        [
                            "eid148",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-346px',
                            '-346px'
                        ],
                        [
                            "eid150",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-346px',
                            '-701px'
                        ],
                        [
                            "eid152",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${girlsprite}",
                            '-701px',
                            '-704px'
                        ]
                    ]
                }
            },
            "FGpumagirl": {
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
                            display: 'block',
                            id: 'Group',
                            rect: [0, 0, '2930', '1414', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'PG8',
                                rect: [2198, 707, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/8-1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'PG7',
                                rect: [1463, 707, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/7.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'PG6',
                                rect: [732, 707, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/6.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'PG5',
                                rect: [0, 707, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/5.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'PG4',
                                rect: [2198, 0, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/4.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'PG3',
                                rect: [1463, 0, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/3.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'PG2',
                                rect: [732, 0, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'PG1',
                                rect: [0, 0, '732px', '707px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 732, 707]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid194",
                            "left",
                            15,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid202",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '-733px'
                        ],
                        [
                            "eid204",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '-733px',
                            '-1465px'
                        ],
                        [
                            "eid206",
                            "left",
                            750,
                            0,
                            "linear",
                            "${Group}",
                            '-1465px',
                            '-2198px'
                        ],
                        [
                            "eid210",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Group}",
                            '-2198px',
                            '-3px'
                        ],
                        [
                            "eid212",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${Group}",
                            '-3px',
                            '-732px'
                        ],
                        [
                            "eid214",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${Group}",
                            '-732px',
                            '-1458px'
                        ],
                        [
                            "eid216",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${Group}",
                            '-1458px',
                            '-2198px'
                        ],
                        [
                            "eid195",
                            "top",
                            15,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid201",
                            "top",
                            250,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid203",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid205",
                            "top",
                            750,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid209",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '-707px'
                        ],
                        [
                            "eid211",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${Group}",
                            '-707px',
                            '-707px'
                        ],
                        [
                            "eid213",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${Group}",
                            '-707px',
                            '-707px'
                        ],
                        [
                            "eid215",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${Group}",
                            '-707px',
                            '-707px'
                        ],
                        [
                            "eid597",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "FGpumagirls": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 732, 707, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'FGpumagirl',
                            symbolName: 'FGpumagirl',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.98608', 1, 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'FGpumagirlCopy2',
                            symbolName: 'FGpumagirl',
                            display: 'none',
                            rect: [1956, 0, 732, 707, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2683, 707]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid227",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${FGpumagirlCopy2}",
                            '1956px',
                            '-3px'
                        ],
                        [
                            "eid228",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FGpumagirlCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid229",
                            "display",
                            10007,
                            0,
                            "linear",
                            "${FGpumagirlCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid226",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${FGpumagirl}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${FGpumagirl}",
                            '0px',
                            '1956px'
                        ],
                        [
                            "eid225",
                            "scaleX",
                            10000,
                            0,
                            "linear",
                            "${FGpumagirlCopy2}",
                            '-0.98608',
                            '-0.98608'
                        ],
                        [
                            "eid217",
                            "top",
                            0,
                            0,
                            "linear",
                            "${FGpumagirl}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "BGlunatic": {
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
                            rect: [null, null, 124, 158]
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid232",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid233",
                            "top",
                            985,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid235",
                            "top",
                            1485,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid237",
                            "top",
                            1985,
                            0,
                            "linear",
                            "${Bgluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid231",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid234",
                            "left",
                            985,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-2px',
                            '-127px'
                        ],
                        [
                            "eid236",
                            "left",
                            1485,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-122px',
                            '-249px'
                        ],
                        [
                            "eid238",
                            "left",
                            1985,
                            0,
                            "linear",
                            "${Bgluna}",
                            '-245px',
                            '-375px'
                        ]
                    ]
                }
            },
            "BGluna2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [418, -7, 124, 158, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['-0.52954', '0.52685', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'BGlunatic',
                            id: 'BGlunaticCopy',
                            type: 'rect'
                        },
                        {
                            rect: [-29, 86, 124, 158, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['0.52954', '0.52685', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'BGlunatic',
                            id: 'BGlunaticCopy2',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 485, 206]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid276",
                            "left",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy2}",
                            '-29px',
                            '-29px'
                        ],
                        [
                            "eid266",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy}",
                            '0.52685',
                            '0.52685'
                        ],
                        [
                            "eid269",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy}",
                            '-0.52954',
                            '-0.52954'
                        ],
                        [
                            "eid272",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy2}",
                            '0.52685',
                            '0.52685'
                        ],
                        [
                            "eid280",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid273",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${BGlunaticCopy2}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid274",
                            "rotateZ",
                            3000,
                            4000,
                            "linear",
                            "${BGlunaticCopy2}",
                            '9deg',
                            '-6deg'
                        ],
                        [
                            "eid367",
                            "left",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy}",
                            '418px',
                            '418px'
                        ],
                        [
                            "eid271",
                            "top",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy2}",
                            '86px',
                            '86px'
                        ],
                        [
                            "eid267",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${BGlunaticCopy}",
                            '0deg',
                            '9deg'
                        ],
                        [
                            "eid268",
                            "rotateZ",
                            3000,
                            4000,
                            "linear",
                            "${BGlunaticCopy}",
                            '9deg',
                            '-6deg'
                        ],
                        [
                            "eid281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid368",
                            "top",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy}",
                            '-7px',
                            '-7px'
                        ],
                        [
                            "eid275",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${BGlunaticCopy2}",
                            '0.52954',
                            '0.52954'
                        ]
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
                            rect: ['0', '0', 500, 207, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sprite',
                            symbolName: 'srite',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 146, 207]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "srite": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '500px', '207px', 'auto', 'auto'],
                            id: 'Sittingluna',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/Sittingluna.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 500, 207]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid283",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid284",
                            "top",
                            250,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid286",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid292",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Sittingluna}",
                            'block',
                            'block'
                        ],
                        [
                            "eid282",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid285",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '0px',
                            '-167px'
                        ],
                        [
                            "eid287",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Sittingluna}",
                            '-167px',
                            '-333px'
                        ]
                    ]
                }
            },
            "Bigluna": {
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
                            rect: [0, 0, '2273', '979', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bigluna3',
                                type: 'image',
                                rect: [1501, 0, 772, 979, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna3.png', '0px', '0px']
                            },
                            {
                                id: 'bigluna2',
                                type: 'image',
                                rect: [772, 0, 772, 979, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna2.png', '0px', '0px']
                            },
                            {
                                id: 'bigluna1',
                                type: 'image',
                                rect: [0, 0, 772, 979, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 772, 979]
                        }
                    }
                },
                timeline: {
                    duration: 3431,
                    autoPlay: true,
                    data: [
                        [
                            "eid299",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid300",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid302",
                            "top",
                            1478,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid304",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid306",
                            "top",
                            3431,
                            0,
                            "linear",
                            "${Group2}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid298",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid301",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '-772px'
                        ],
                        [
                            "eid303",
                            "left",
                            1478,
                            0,
                            "linear",
                            "${Group2}",
                            '-772px',
                            '0px'
                        ],
                        [
                            "eid305",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${Group2}",
                            '0px',
                            '-772px'
                        ],
                        [
                            "eid307",
                            "left",
                            3431,
                            0,
                            "linear",
                            "${Group2}",
                            '-772px',
                            '-1501px'
                        ]
                    ]
                }
            },
            "smoke": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 391, 375]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid334",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '391px',
                            '391px'
                        ]
                    ]
                }
            },
            "Fsmoke": {
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
                            id: 'smokesprite2',
                            rect: [0, 0, '1024px', '815px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/smoke/smokesprite.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 529, 379]
                        }
                    }
                },
                timeline: {
                    duration: 1473,
                    autoPlay: true,
                    data: [
                        [
                            "eid335",
                            "left",
                            0,
                            0,
                            "linear",
                            "${smokesprite2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid338",
                            "left",
                            649,
                            0,
                            "linear",
                            "${smokesprite2}",
                            '0px',
                            '-542px'
                        ],
                        [
                            "eid340",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${smokesprite2}",
                            '-542px',
                            '11px'
                        ],
                        [
                            "eid336",
                            "top",
                            0,
                            0,
                            "linear",
                            "${smokesprite2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid337",
                            "top",
                            649,
                            0,
                            "linear",
                            "${smokesprite2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid339",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${smokesprite2}",
                            '0px',
                            '-445px'
                        ]
                    ]
                }
            },
            "plane": {
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
                            id: 'PLANE',
                            rect: [0, 0, 626, 303, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/PLANE.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 626, 303]
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
            "BGplane1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-8', 0, 0], [0, 0], ['0.91197', 1, 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'plane',
                            symbolName: 'plane',
                            display: 'block',
                            rect: [9, -8, 626, 303, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], ['7', 0, 0], [0, 0], ['-0.88608', 1, 1], ['50%', '50%']],
                            type: 'rect',
                            id: 'plane2',
                            symbolName: 'plane',
                            display: 'none',
                            rect: [1781, 0, 626, 303, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 626, 303]
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1152",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plane}",
                            '-8px',
                            '-8px'
                        ],
                        [
                            "eid353",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plane}",
                            'block',
                            'block'
                        ],
                        [
                            "eid349",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${plane}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1153",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${plane}",
                            '-8deg',
                            '-8deg'
                        ],
                        [
                            "eid1155",
                            "scaleX",
                            20000,
                            0,
                            "linear",
                            "${plane2}",
                            '-0.88608',
                            '-0.88608'
                        ],
                        [
                            "eid352",
                            "display",
                            0,
                            0,
                            "linear",
                            "${plane2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid354",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${plane2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid355",
                            "left",
                            20000,
                            20000,
                            "linear",
                            "${plane2}",
                            '1781px',
                            '5px'
                        ],
                        [
                            "eid1151",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${plane}",
                            '0.91197',
                            '0.91197'
                        ],
                        [
                            "eid348",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${plane}",
                            '9px',
                            '1833px'
                        ],
                        [
                            "eid1156",
                            "rotateZ",
                            20000,
                            0,
                            "linear",
                            "${plane2}",
                            '7deg',
                            '7deg'
                        ]
                    ]
                }
            },
            "lunaticc": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-41', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'arm4Copy',
                            type: 'image',
                            rect: [88, 305, 365, 280, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/arm.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'sprite',
                            symbolName: 'sprite',
                            rect: ['0', '0', 2700, 1142, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 900, 1142]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid421",
                            "left",
                            541,
                            2459,
                            "linear",
                            "${arm4Copy}",
                            '88px',
                            '61px'
                        ],
                        [
                            "eid430",
                            "left",
                            3000,
                            2000,
                            "linear",
                            "${arm4Copy}",
                            '61px',
                            '79px'
                        ],
                        [
                            "eid420",
                            "top",
                            541,
                            2459,
                            "linear",
                            "${arm4Copy}",
                            '305px',
                            '210px'
                        ],
                        [
                            "eid429",
                            "top",
                            3000,
                            2000,
                            "linear",
                            "${arm4Copy}",
                            '210px',
                            '286px'
                        ],
                        [
                            "eid417",
                            "rotateZ",
                            541,
                            2459,
                            "linear",
                            "${arm4Copy}",
                            '-41deg',
                            '2deg'
                        ],
                        [
                            "eid428",
                            "rotateZ",
                            3000,
                            2000,
                            "linear",
                            "${arm4Copy}",
                            '2deg',
                            '-33deg'
                        ]
                    ]
                }
            },
            "sprite": {
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
                            id: 'Group5',
                            rect: [0, 0, '2700', '1142', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'bigluna3-1',
                                rect: [1800, 0, '900px', '1142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna3-1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'bigluna22',
                                rect: [900, 0, '900px', '1142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'bigluna12',
                                rect: [0, 0, '900px', '1142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2700, 1142]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid400",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid401",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid403",
                            "top",
                            1451,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid405",
                            "top",
                            2481,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid407",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid399",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid402",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '-900px'
                        ],
                        [
                            "eid404",
                            "left",
                            1451,
                            0,
                            "linear",
                            "${Group5}",
                            '-900px',
                            '0px'
                        ],
                        [
                            "eid406",
                            "left",
                            2481,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '-906px'
                        ],
                        [
                            "eid408",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${Group5}",
                            '-906px',
                            '-1800px'
                        ]
                    ]
                }
            },
            "lunamove": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-2', 0, 0], [0, 0], ['0.82518', '0.81611', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'lunatic2',
                            symbolName: 'lunaticc',
                            rect: [-63, -93, 900, 1142, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 775, 957]
                        }
                    }
                },
                timeline: {
                    duration: 17000,
                    autoPlay: true,
                    data: [
                        [
                            "eid510",
                            "rotateZ",
                            0,
                            5000,
                            "linear",
                            "${lunatic2}",
                            '-2deg',
                            '-35deg'
                        ],
                        [
                            "eid515",
                            "rotateZ",
                            9000,
                            6000,
                            "linear",
                            "${lunatic2}",
                            '-35deg',
                            '-3deg'
                        ],
                        [
                            "eid508",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lunatic2}",
                            '-93px',
                            '-93px'
                        ],
                        [
                            "eid513",
                            "top",
                            9000,
                            0,
                            "linear",
                            "${lunatic2}",
                            '-93px',
                            '-93px'
                        ],
                        [
                            "eid503",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${lunatic2}",
                            '0.82518',
                            '0.82518'
                        ],
                        [
                            "eid504",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${lunatic2}",
                            '0.81611',
                            '0.81611'
                        ],
                        [
                            "eid511",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${lunatic2}",
                            '-63px',
                            '-462px'
                        ],
                        [
                            "eid516",
                            "left",
                            9000,
                            6000,
                            "linear",
                            "${lunatic2}",
                            '-463px',
                            '-62px'
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
                            rect: ['2px', '0px', 989, 906, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'oldmanend',
                            symbolName: 'oldmanend',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 204, 439]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

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
                            rect: [0, 0, 741, 439, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/spritesheetsailor.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 187, 430]
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid553",
                            "left",
                            15,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid556",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '-184px'
                        ],
                        [
                            "eid558",
                            "left",
                            1092,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '-184px',
                            '0px'
                        ],
                        [
                            "eid560",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '-184px'
                        ],
                        [
                            "eid562",
                            "left",
                            2111,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '-184px',
                            '0px'
                        ],
                        [
                            "eid564",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '-554px'
                        ],
                        [
                            "eid566",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '-554px',
                            '-371px'
                        ],
                        [
                            "eid554",
                            "top",
                            15,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid555",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid557",
                            "top",
                            1092,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid559",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid561",
                            "top",
                            2111,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid563",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid565",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${spritesheetsailor}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Shopumagirls": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 732, 707, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Shoppumagirl1',
                            symbolName: 'FGpumagirl',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.01431', 1, 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'Shoppumagirl2',
                            symbolName: 'FGpumagirl',
                            display: 'none',
                            rect: [3251, 0, 732, 707, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 4651, 707]
                        }
                    }
                },
                timeline: {
                    duration: 38000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1627",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${Shoppumagirl1}",
                            '0px',
                            '3246px'
                        ],
                        [
                            "eid1625",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Shoppumagirl1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid612",
                            "scaleX",
                            20000,
                            0,
                            "linear",
                            "${Shoppumagirl2}",
                            '-1.01431',
                            '-1.01431'
                        ],
                        [
                            "eid616",
                            "left",
                            20000,
                            18000,
                            "linear",
                            "${Shoppumagirl2}",
                            '3251px',
                            '1px'
                        ],
                        [
                            "eid613",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Shoppumagirl2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid614",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${Shoppumagirl2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid610",
                            "top",
                            20000,
                            0,
                            "linear",
                            "${Shoppumagirl2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1628",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${Shoppumagirl1}",
                            'block',
                            'none'
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
                            rect: [0, -1, '1024px', '1244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/sailorsit.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 492, 598]
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid705",
                            "top",
                            15,
                            0,
                            "linear",
                            "${sailorsit}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid706",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${sailorsit}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid708",
                            "top",
                            1366,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid712",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid710",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${sailorsit}",
                            '-24px',
                            '-622px'
                        ],
                        [
                            "eid704",
                            "left",
                            15,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid707",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '-457px'
                        ],
                        [
                            "eid709",
                            "left",
                            1366,
                            0,
                            "linear",
                            "${sailorsit}",
                            '-457px',
                            '0px'
                        ],
                        [
                            "eid713",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${sailorsit}",
                            '0px',
                            '-458px'
                        ],
                        [
                            "eid711",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${sailorsit}",
                            '-453px',
                            '0px'
                        ]
                    ]
                }
            },
            "sitdowngirl": {
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
                            id: 'Group',
                            rect: [0, 0, '2100', '535', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'sit3',
                                rect: [1400, 0, '700px', '535px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/sit3.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sit2',
                                rect: [700, 0, '700px', '535px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/sit2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'sit1',
                                rect: [0, 0, '700px', '535px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/puma%26girl/sit1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 700, 535]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid714",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid717",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '-700px'
                        ],
                        [
                            "eid718",
                            "left",
                            628,
                            0,
                            "linear",
                            "${Group}",
                            '-700px',
                            '0px'
                        ],
                        [
                            "eid721",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '-700px'
                        ],
                        [
                            "eid723",
                            "left",
                            2123,
                            0,
                            "linear",
                            "${Group}",
                            '-700px',
                            '-1401px'
                        ],
                        [
                            "eid715",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid716",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid719",
                            "top",
                            628,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid720",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid722",
                            "top",
                            2123,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "treeluna": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-168, 9, '900', '1142', 'auto', 'auto'],
                            id: 'Group2',
                            type: 'group',
                            transform: [[0, 0, 0], ['-27', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            c: [
                            {
                                type: 'image',
                                id: 'bigluna3',
                                rect: [1664, 846, '900px', '1142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna3.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'bigluna3-1',
                                rect: [1041, 528, '900px', '1142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna3-1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'bigluna2',
                                rect: [469, 236, '900px', '1142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'bigluna1',
                                rect: [0, 0, '900px', '1142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 441, 831]
                        }
                    }
                },
                timeline: {
                    duration: 2096,
                    autoPlay: true,
                    data: [
                        [
                            "eid727",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid728",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Group2}",
                            '9px',
                            '12px'
                        ],
                        [
                            "eid730",
                            "top",
                            1108,
                            0,
                            "linear",
                            "${Group2}",
                            '12px',
                            '10px'
                        ],
                        [
                            "eid734",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Group2}",
                            '10px',
                            '12px'
                        ],
                        [
                            "eid726",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            '-168px',
                            '-168px'
                        ],
                        [
                            "eid729",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Group2}",
                            '-168px',
                            '-693px'
                        ],
                        [
                            "eid731",
                            "left",
                            1108,
                            0,
                            "linear",
                            "${Group2}",
                            '-168px',
                            '-168px'
                        ],
                        [
                            "eid736",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Group2}",
                            '-168px',
                            '-693px'
                        ]
                    ]
                }
            },
            "behindtreeluna": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-106, -246, 441, 831, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.40915', '0.40915', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'treeluna',
                            id: 'treeluna',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 210, 347]
                        }
                    }
                },
                timeline: {
                    duration: 2096,
                    autoPlay: true,
                    data: [
                        [
                            "eid1784",
                            "display",
                            0,
                            0,
                            "linear",
                            "${treeluna}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "behindtreeluna2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-230', '-150', 2109, 1442, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'lunasprite',
                            symbolName: 'lunasprite',
                            type: 'rect',
                            display: 'block'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 547, 694]
                        }
                    }
                },
                timeline: {
                    duration: 2512,
                    autoPlay: true,
                    data: [
                        [
                            "eid754",
                            "display",
                            15,
                            0,
                            "linear",
                            "${lunasprite}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "lunasprite": {
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
                            id: 'Group3',
                            rect: [0, 0, '1360', '1442', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'bigluna22',
                                rect: [979, 150, '900px', '1142px', 'auto', 'auto'],
                                transform: [[0, 0, 0], ['-31deg', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'bigluna12',
                                rect: [230, 150, '900px', '1142px', 'auto', 'auto'],
                                transform: [[0, 0, 0], ['-31deg', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                                fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/bigluna1.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 2109, 1442]
                        }
                    }
                },
                timeline: {
                    duration: 2512,
                    autoPlay: true,
                    data: [
                        [
                            "eid749",
                            "left",
                            15,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid752",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '-748px'
                        ],
                        [
                            "eid750",
                            "top",
                            15,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid751",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${Group3}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "SKY": {
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
                            id: 'Group5',
                            rect: [0, 0, '6088', '568', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'sky',
                                rect: [0, 1, '1024px', '567px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/sky.png', '0px', '0px']
                            },
                            {
                                type: 'group',
                                id: 'Group4',
                                rect: [1024, 0, '5064', '568', 'auto', 'auto'],
                                c: [
                                {
                                    type: 'image',
                                    id: 'skyCopy',
                                    rect: [0, 0, '1024px', '567px', 'auto', 'auto'],
                                    transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.00058', 1, 1], ['50%', '50%']],
                                    fill: ['rgba(0,0,0,0)', 'images/sky.png', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'skyCopy3',
                                    rect: [996, 1, '1024px', '567px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/sky.png', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'skyCopy2',
                                    rect: [2020, 0, '1024px', '567px', 'auto', 'auto'],
                                    transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.00058', 1, 1], ['50%', '50%']],
                                    fill: ['rgba(0,0,0,0)', 'images/sky.png', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'skyCopy5',
                                    rect: [3015, 1, '1024px', '567px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/sky.png', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'skyCopy4',
                                    rect: [4039, 0, '1024px', '567px', 'auto', 'auto'],
                                    transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.00058', 1, 1], ['50%', '50%']],
                                    fill: ['rgba(0,0,0,0)', 'images/sky.png', '0px', '0px']
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 6087, 568]
                        }
                    }
                },
                timeline: {
                    duration: 390000,
                    autoPlay: true,
                    data: [
                        [
                            "eid759",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group5}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid761",
                            "left",
                            0,
                            210000,
                            "linear",
                            "${Group5}",
                            '0px',
                            '-4096px'
                        ],
                        [
                            "eid762",
                            "left",
                            210000,
                            180000,
                            "linear",
                            "${Group5}",
                            '-4096px',
                            '-28px'
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
                            opacity: '1',
                            rect: [0, 0, 76, 118, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/leaf.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 76, 118]
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: true,
                    data: [
                        [
                            "eid780",
                            "left",
                            15,
                            641,
                            "linear",
                            "${leaf}",
                            '0px',
                            '90px'
                        ],
                        [
                            "eid784",
                            "left",
                            656,
                            522,
                            "linear",
                            "${leaf}",
                            '90px',
                            '0px'
                        ],
                        [
                            "eid788",
                            "left",
                            1178,
                            462,
                            "linear",
                            "${leaf}",
                            '0px',
                            '93px'
                        ],
                        [
                            "eid792",
                            "left",
                            1639,
                            531,
                            "linear",
                            "${leaf}",
                            '93px',
                            '21px'
                        ],
                        [
                            "eid796",
                            "left",
                            2170,
                            488,
                            "linear",
                            "${leaf}",
                            '21px',
                            '70px'
                        ],
                        [
                            "eid800",
                            "left",
                            2658,
                            484,
                            "linear",
                            "${leaf}",
                            '70px',
                            '-10px'
                        ],
                        [
                            "eid804",
                            "left",
                            3143,
                            607,
                            "linear",
                            "${leaf}",
                            '-10px',
                            '38px'
                        ],
                        [
                            "eid806",
                            "left",
                            3750,
                            500,
                            "linear",
                            "${leaf}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid808",
                            "opacity",
                            9575,
                            500,
                            "linear",
                            "${leaf}",
                            '1',
                            '0'
                        ],
                        [
                            "eid779",
                            "top",
                            15,
                            641,
                            "linear",
                            "${leaf}",
                            '0px',
                            '165px'
                        ],
                        [
                            "eid783",
                            "top",
                            656,
                            522,
                            "linear",
                            "${leaf}",
                            '165px',
                            '300px'
                        ],
                        [
                            "eid787",
                            "top",
                            1178,
                            462,
                            "linear",
                            "${leaf}",
                            '300px',
                            '474px'
                        ],
                        [
                            "eid791",
                            "top",
                            1639,
                            531,
                            "linear",
                            "${leaf}",
                            '474px',
                            '635px'
                        ],
                        [
                            "eid795",
                            "top",
                            2170,
                            488,
                            "linear",
                            "${leaf}",
                            '635px',
                            '747px'
                        ],
                        [
                            "eid799",
                            "top",
                            2658,
                            484,
                            "linear",
                            "${leaf}",
                            '747px',
                            '884px'
                        ],
                        [
                            "eid803",
                            "top",
                            3143,
                            607,
                            "linear",
                            "${leaf}",
                            '884px',
                            '994px'
                        ],
                        [
                            "eid805",
                            "top",
                            3750,
                            500,
                            "linear",
                            "${leaf}",
                            '994px',
                            '1032px'
                        ]
                    ]
                }
            },
            "leaaf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.93944', 1, 1], ['50%', '50%']],
                            rect: [24, 0, 20, 31, 'auto', 'auto'],
                            id: 'leaf',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'symbols/leaf.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 50, 83]
                        }
                    }
                },
                timeline: {
                    duration: 35000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1047",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${leaf}",
                            '24px',
                            '16px'
                        ],
                        [
                            "eid924",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${leaf}",
                            '16px',
                            '9px'
                        ],
                        [
                            "eid928",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${leaf}",
                            '9px',
                            '24px'
                        ],
                        [
                            "eid932",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${leaf}",
                            '24px',
                            '9px'
                        ],
                        [
                            "eid936",
                            "left",
                            4500,
                            500,
                            "linear",
                            "${leaf}",
                            '9px',
                            '34px'
                        ],
                        [
                            "eid940",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${leaf}",
                            '34px',
                            '24px'
                        ],
                        [
                            "eid944",
                            "left",
                            5500,
                            500,
                            "linear",
                            "${leaf}",
                            '24px',
                            '49px'
                        ],
                        [
                            "eid951",
                            "left",
                            6000,
                            1750,
                            "linear",
                            "${leaf}",
                            '49px',
                            '31px'
                        ],
                        [
                            "eid954",
                            "left",
                            7750,
                            3750,
                            "linear",
                            "${leaf}",
                            '31px',
                            '49px'
                        ],
                        [
                            "eid1050",
                            "width",
                            0,
                            0,
                            "linear",
                            "${leaf}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid1051",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${leaf}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid925",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${leaf}",
                            '6px',
                            '36px'
                        ],
                        [
                            "eid929",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${leaf}",
                            '36px',
                            '57px'
                        ],
                        [
                            "eid933",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${leaf}",
                            '57px',
                            '83px'
                        ],
                        [
                            "eid937",
                            "top",
                            4500,
                            500,
                            "linear",
                            "${leaf}",
                            '83px',
                            '122px'
                        ],
                        [
                            "eid941",
                            "top",
                            5000,
                            500,
                            "linear",
                            "${leaf}",
                            '122px',
                            '148px'
                        ],
                        [
                            "eid946",
                            "top",
                            5500,
                            500,
                            "linear",
                            "${leaf}",
                            '148px',
                            '210px'
                        ],
                        [
                            "eid950",
                            "top",
                            6000,
                            1750,
                            "linear",
                            "${leaf}",
                            '210px',
                            '324px'
                        ],
                        [
                            "eid955",
                            "top",
                            7750,
                            3750,
                            "linear",
                            "${leaf}",
                            '324px',
                            '381px'
                        ],
                        [
                            "eid958",
                            "opacity",
                            20500,
                            500,
                            "linear",
                            "${leaf}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1049",
                            "height",
                            0,
                            0,
                            "linear",
                            "${leaf}",
                            '31px',
                            '31px'
                        ]
                    ]
                }
            },
            "BGpuma1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.53937', '0.5386', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'pumagirlCopy2',
                            symbolName: 'pumagirl1',
                            display: 'block',
                            rect: [1244, 368, 337, 340, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.53937', '0.5386', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'pumagirlCopy3',
                            symbolName: 'pumagirl1',
                            display: 'block',
                            rect: [-77, -79, 337, 340, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1504, 629]
                        }
                    }
                },
                timeline: {
                    duration: 53018,
                    autoPlay: true,
                    data: [
                        [
                            "eid884",
                            "scaleX",
                            28000,
                            0,
                            "linear",
                            "${pumagirlCopy3}",
                            '0.53937',
                            '0.53937'
                        ],
                        [
                            "eid879",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pumagirlCopy3}",
                            '-79px',
                            '-79px'
                        ],
                        [
                            "eid886",
                            "top",
                            27993,
                            0,
                            "linear",
                            "${pumagirlCopy3}",
                            '-79px',
                            '-79px'
                        ],
                        [
                            "eid891",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pumagirlCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid892",
                            "display",
                            27993,
                            0,
                            "linear",
                            "${pumagirlCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid869",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pumagirlCopy2}",
                            '368px',
                            '-79px'
                        ],
                        [
                            "eid873",
                            "top",
                            28000,
                            0,
                            "linear",
                            "${pumagirlCopy2}",
                            '-79px',
                            '-79px'
                        ],
                        [
                            "eid890",
                            "left",
                            27993,
                            7,
                            "linear",
                            "${pumagirlCopy3}",
                            '-77px',
                            '170px'
                        ],
                        [
                            "eid893",
                            "left",
                            28000,
                            25000,
                            "linear",
                            "${pumagirlCopy3}",
                            '170px',
                            '1245px'
                        ],
                        [
                            "eid885",
                            "display",
                            27993,
                            0,
                            "linear",
                            "${pumagirlCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid875",
                            "left",
                            0,
                            28000,
                            "linear",
                            "${pumagirlCopy2}",
                            '1244px',
                            '-78px'
                        ],
                        [
                            "eid878",
                            "left",
                            28000,
                            0,
                            "linear",
                            "${pumagirlCopy2}",
                            '-78px',
                            '-78px'
                        ]
                    ]
                }
            },
            "BGPUMAGIRLS2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.36981', '0.36927', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'pumagirlCopy5',
                            symbolName: 'pumagirl1',
                            display: 'none',
                            rect: [-106, -107, 337, 340, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.36981', '0.36927', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'pumagirlCopy6',
                            symbolName: 'pumagirl1',
                            display: 'block',
                            rect: [2148, -107, 337, 340, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2379, 126]
                        }
                    }
                },
                timeline: {
                    duration: 90134,
                    autoPlay: true,
                    data: [
                        [
                            "eid971",
                            "scaleX",
                            15,
                            0,
                            "linear",
                            "${pumagirlCopy5}",
                            '0.36981',
                            '0.36981'
                        ],
                        [
                            "eid979",
                            "top",
                            15,
                            0,
                            "linear",
                            "${pumagirlCopy5}",
                            '-107px',
                            '-107px'
                        ],
                        [
                            "eid991",
                            "display",
                            15,
                            0,
                            "linear",
                            "${pumagirlCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid992",
                            "display",
                            45000,
                            0,
                            "linear",
                            "${pumagirlCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid983",
                            "left",
                            15,
                            44985,
                            "linear",
                            "${pumagirlCopy5}",
                            '-106px',
                            '2148px'
                        ],
                        [
                            "eid984",
                            "top",
                            15,
                            0,
                            "linear",
                            "${pumagirlCopy6}",
                            '-107px',
                            '-107px'
                        ],
                        [
                            "eid993",
                            "top",
                            90000,
                            0,
                            "linear",
                            "${pumagirlCopy6}",
                            '-107px',
                            '-107px'
                        ],
                        [
                            "eid972",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${pumagirlCopy5}",
                            '0.36927',
                            '0.36927'
                        ],
                        [
                            "eid995",
                            "left",
                            45000,
                            45000,
                            "linear",
                            "${pumagirlCopy6}",
                            '2148px',
                            '-109px'
                        ],
                        [
                            "eid988",
                            "scaleX",
                            45000,
                            0,
                            "linear",
                            "${pumagirlCopy6}",
                            '0.36981',
                            '-0.37329'
                        ],
                        [
                            "eid990",
                            "display",
                            15,
                            0,
                            "linear",
                            "${pumagirlCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid989",
                            "display",
                            45000,
                            0,
                            "linear",
                            "${pumagirlCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid986",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${pumagirlCopy6}",
                            '0.36927',
                            '0.36927'
                        ]
                    ]
                }
            },
            "Mgpumagirl2": {
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
                            id: 'walk',
                            symbolName: 'walk',
                            rect: ['0', '0', 2979, 412, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2979, 412]
                        }
                    }
                },
                timeline: {
                    duration: 36000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "walk": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.20782', '1.21039', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'MGpumagirl2',
                            symbolName: 'pumagirl1',
                            display: 'block',
                            rect: [2607, 35, 337, 340, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.20781', '1.21039', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'MGpumagirl3',
                            symbolName: 'pumagirl1',
                            display: 'none',
                            rect: [35, 35, 337, 340, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2979, 412]
                        }
                    }
                },
                timeline: {
                    duration: 36000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1076",
                            "top",
                            18750,
                            0,
                            "linear",
                            "${MGpumagirl3}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid1067",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MGpumagirl2}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid1072",
                            "scaleX",
                            18750,
                            0,
                            "linear",
                            "${MGpumagirl3}",
                            '1.20781',
                            '1.20781'
                        ],
                        [
                            "eid1069",
                            "left",
                            0,
                            18750,
                            "linear",
                            "${MGpumagirl2}",
                            '2607px',
                            '35px'
                        ],
                        [
                            "eid1077",
                            "left",
                            18750,
                            17250,
                            "linear",
                            "${MGpumagirl3}",
                            '35px',
                            '2609px'
                        ],
                        [
                            "eid1074",
                            "display",
                            0,
                            0,
                            "linear",
                            "${MGpumagirl3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1075",
                            "display",
                            18750,
                            0,
                            "linear",
                            "${MGpumagirl3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1078",
                            "display",
                            18750,
                            0,
                            "linear",
                            "${MGpumagirl2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "MGplane": {
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
                            id: 'MGplane',
                            symbolName: 'BGplane1',
                            transform: [[0, 0, 0], ['-4', 0, 0], [0, 0], ['2.63369', '2.63369', 1], ['50%', '50%']],
                            rect: [538, 304, 626, 303, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1700, 911]
                        }
                    }
                },
                timeline: {
                    duration: 42000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1108",
                            "left",
                            0,
                            41985,
                            "linear",
                            "${MGplane}",
                            '538px',
                            '324px'
                        ],
                        [
                            "eid1106",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${MGplane}",
                            '2.63369',
                            '2.63369'
                        ],
                        [
                            "eid1109",
                            "top",
                            0,
                            41985,
                            "linear",
                            "${MGplane}",
                            '304px',
                            '201px'
                        ],
                        [
                            "eid1107",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${MGplane}",
                            '2.63369',
                            '2.63369'
                        ]
                    ]
                }
            },
            "BGplane3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-508, 0, 903, 218, 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'Planetext',
                            type: 'rect',
                            id: 'Planetext'
                        },
                        {
                            rect: [2191, -22, 854, 260, 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'planetext2',
                            type: 'rect',
                            id: 'planetext22'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2594, 218]
                        }
                    }
                },
                timeline: {
                    duration: 64043,
                    autoPlay: true,
                    data: [
                        [
                            "eid1296",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Planetext}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1306",
                            "display",
                            0,
                            0,
                            "linear",
                            "${planetext22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1307",
                            "display",
                            31968,
                            0,
                            "linear",
                            "${planetext22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1298",
                            "left",
                            0,
                            32000,
                            "linear",
                            "${Planetext}",
                            '-508px',
                            '1801px'
                        ],
                        [
                            "eid1304",
                            "left",
                            31968,
                            32075,
                            "linear",
                            "${planetext22}",
                            '2191px',
                            '-90px'
                        ],
                        [
                            "eid1305",
                            "top",
                            31968,
                            32075,
                            "linear",
                            "${planetext22}",
                            '-22px',
                            '-21px'
                        ],
                        [
                            "eid1299",
                            "display",
                            32000,
                            0,
                            "linear",
                            "${Planetext}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "plane4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-317, -143, '868px', '420px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-6', 0, 0], [0, 0], ['0.2582', '0.2582', 1], ['50%', '50%']],
                            id: 'plane4',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'symbols/PLANE.png', '0px', '0px']
                        },
                        {
                            rect: [1128, -146, 753, '420px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['6', 0, 0], [0, 0], ['-0.2722', '0.2582', 1], ['50%', '50%']],
                            id: 'plane4Copy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'symbols/PLANE.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1620, 133]
                        }
                    }
                },
                timeline: {
                    duration: 100000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1143",
                            "rotateZ",
                            50034,
                            0,
                            "linear",
                            "${plane4Copy}",
                            '6deg',
                            '6deg'
                        ],
                        [
                            "eid1133",
                            "display",
                            50034,
                            0,
                            "linear",
                            "${plane4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1150",
                            "width",
                            50034,
                            0,
                            "linear",
                            "${plane4Copy}",
                            '753px',
                            '753px'
                        ],
                        [
                            "eid1148",
                            "top",
                            50034,
                            0,
                            "linear",
                            "${plane4Copy}",
                            '-146px',
                            '-146px'
                        ],
                        [
                            "eid1134",
                            "scaleX",
                            50034,
                            0,
                            "linear",
                            "${plane4Copy}",
                            '-0.2722',
                            '-0.2722'
                        ],
                        [
                            "eid1132",
                            "display",
                            50034,
                            0,
                            "linear",
                            "${plane4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1128",
                            "left",
                            0,
                            50034,
                            "linear",
                            "${plane4}",
                            '-317px',
                            '1063px'
                        ],
                        [
                            "eid1140",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plane4}",
                            '-143px',
                            '-143px'
                        ],
                        [
                            "eid1135",
                            "left",
                            50034,
                            49966,
                            "linear",
                            "${plane4Copy}",
                            '1128px',
                            '-311px'
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
                            rect: [0, 0, 337, 340, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'pumagirl',
                            symbolName: 'pumagirl1',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.00597', 1, 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'pumagirl2',
                            symbolName: 'pumagirl1',
                            display: 'none',
                            rect: [1749, 0, 337, 340, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2087, 340]
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: true,
                    data: [
                        [
                            "eid183",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pumagirl}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid187",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${pumagirl}",
                            '0px',
                            '1899px'
                        ],
                        [
                            "eid192",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${pumagirl}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "scaleX",
                            20000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            '-1.00597',
                            '-1.00597'
                        ],
                        [
                            "eid190",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pumagirl2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid191",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${pumagirl2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid193",
                            "left",
                            20000,
                            20000,
                            "linear",
                            "${pumagirl2}",
                            '1749px',
                            '-6px'
                        ]
                    ]
                }
            },
            "MGplane1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-2', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            display: 'block',
                            id: 'MGplane1',
                            type: 'group',
                            rect: [13, 82, '1664', '796', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'largeplane_02',
                                rect: [832, 4, '832px', '792px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/largeplane_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'largeplane_01',
                                rect: [0, 0, '832px', '792px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/largeplane_01.png', '0px', '0px']
                            }]
                        },
                        {
                            transform: [[0, 0, 0], ['6', 0, 0], [0, 0], ['-0.94835', 1, 1], ['49%', '50%']],
                            display: 'none',
                            id: 'MGplane1Copy',
                            type: 'group',
                            rect: [7340, 82, '1664', '796', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'largeplane_02Copy',
                                rect: [832, 4, '832px', '792px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/largeplane_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'largeplane_01Copy',
                                rect: [0, 0, '832px', '792px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/largeplane_01.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 8966, 957]
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1173",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${MGplane1}",
                            '13px',
                            '7340px'
                        ],
                        [
                            "eid1186",
                            "left",
                            20000,
                            20000,
                            "linear",
                            "${MGplane1Copy}",
                            '7340px',
                            '66px'
                        ],
                        [
                            "eid1183",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1181",
                            "rotateZ",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            '6deg',
                            '6deg'
                        ],
                        [
                            "eid1187",
                            "top",
                            20000,
                            20000,
                            "linear",
                            "${MGplane1Copy}",
                            '82px',
                            '84px'
                        ],
                        [
                            "eid1188",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${MGplane1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1171",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MGplane1}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid1180",
                            "scaleX",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            '-0.94835',
                            '-0.94835'
                        ],
                        [
                            "eid1177",
                            "-webkit-transform-origin",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            [49,50],
                            [49,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2069",
                            "-moz-transform-origin",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            [49,50],
                            [49,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2070",
                            "-ms-transform-origin",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            [49,50],
                            [49,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2071",
                            "msTransformOrigin",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            [49,50],
                            [49,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2072",
                            "-o-transform-origin",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            [49,50],
                            [49,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2073",
                            "transform-origin",
                            20000,
                            0,
                            "linear",
                            "${MGplane1Copy}",
                            [49,50],
                            [49,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "shaketext": {
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
                            id: 'shaketorejog2',
                            opacity: '1',
                            rect: [0, 0, 572, 642, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/Lunatic/text/shaketorejog.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 572, 642]
                        }
                    }
                },
                timeline: {
                    duration: 24000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1212",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${shaketorejog2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1214",
                            "opacity",
                            22738,
                            1262,
                            "linear",
                            "${shaketorejog2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "shake": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 654, 735]
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
            "shakerejog": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'shaketorejog',
                            type: 'image',
                            rect: [5, 15, 668, 750, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/text/shaketorejog.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 682, 766]
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
            "Planetext": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-5', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'PLANE',
                            type: 'image',
                            rect: [515, 16, 381, 185, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/PLANE.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'planetext2',
                            rect: [0, 16, 508, 147, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/text/planetext2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 903, 218]
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
            "planetext2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.00393', 1, 1], ['50%', '50%']],
                            id: 'planetext',
                            type: 'image',
                            rect: [395, 68, 501, 147, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/text/planetext.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['12', 0, 0], [0, 0], ['-0.99869', 1, 1], ['50%', '50%']],
                            id: 'PLANE2',
                            type: 'image',
                            rect: [15, 38, 381, 185, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/PLANE.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 854, 260]
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
            "shakeretorejog": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 682, 766]
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "crowdmen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.06052', '1.07672', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'oldman2Copy3',
                            symbolName: 'oldman',
                            rect: [596, 17, 204, 439, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.06052', '1.07672', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'oldman',
                            id: 'oldman4',
                            rect: [869, 17, 204, 439, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04871', '1.07672', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'oldman1',
                            symbolName: 'oldman',
                            rect: [478, 26, 204, 439, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04871', '1.07672', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'oldman6',
                            symbolName: 'oldman',
                            rect: [302, 17, 204, 439, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.06052', '1.07672', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'oldman8',
                            symbolName: 'oldman',
                            rect: [947, 71, 204, 439, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-1.06052', '1.07672', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'oldman2',
                            symbolName: 'oldman',
                            rect: [679, 26, 204, 439, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04871', '1.07672', 1], ['50%', '50%']],
                            overflow: 'hidden',
                            id: 'oldman10',
                            symbolName: 'oldman',
                            rect: [362, 71, 204, 439, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04871', '1.07672', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'oldman',
                            id: 'oldman9',
                            rect: [174, 69, 204, 439, 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.04871', '1.07672', 1], ['50%', '50%']],
                            type: 'rect',
                            overflow: 'hidden',
                            display: 'block',
                            symbolName: 'oldman',
                            id: 'oldman11',
                            rect: [5, 71, 204, 439, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1157, 527]
                        }
                    }
                },
                timeline: {
                    duration: 759,
                    autoPlay: true,
                    data: [
                        [
                            "eid1555",
                            "scaleX",
                            759,
                            0,
                            "linear",
                            "${oldman11}",
                            '1.04871',
                            '1.04871'
                        ],
                        [
                            "eid1546",
                            "top",
                            744,
                            0,
                            "linear",
                            "${oldman9}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1551",
                            "top",
                            759,
                            0,
                            "linear",
                            "${oldman11}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid1550",
                            "scaleX",
                            744,
                            0,
                            "linear",
                            "${oldman9}",
                            '1.04871',
                            '1.04871'
                        ],
                        [
                            "eid1554",
                            "left",
                            759,
                            0,
                            "linear",
                            "${oldman11}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1549",
                            "left",
                            744,
                            0,
                            "linear",
                            "${oldman9}",
                            '174px',
                            '174px'
                        ],
                        [
                            "eid1523",
                            "scaleX",
                            15,
                            0,
                            "linear",
                            "${oldman4}",
                            '-1.06052',
                            '-1.06052'
                        ],
                        [
                            "eid1552",
                            "scaleY",
                            759,
                            0,
                            "linear",
                            "${oldman11}",
                            '1.07672',
                            '1.07672'
                        ],
                        [
                            "eid1548",
                            "display",
                            729,
                            0,
                            "linear",
                            "${oldman9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1521",
                            "top",
                            15,
                            0,
                            "linear",
                            "${oldman4}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid1522",
                            "scaleY",
                            15,
                            0,
                            "linear",
                            "${oldman4}",
                            '1.07672',
                            '1.07672'
                        ],
                        [
                            "eid1547",
                            "scaleY",
                            744,
                            0,
                            "linear",
                            "${oldman9}",
                            '1.07672',
                            '1.07672'
                        ],
                        [
                            "eid1553",
                            "display",
                            744,
                            0,
                            "linear",
                            "${oldman11}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1524",
                            "left",
                            15,
                            0,
                            "linear",
                            "${oldman4}",
                            '869px',
                            '869px'
                        ],
                        [
                            "eid1525",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oldman4}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "shakedevice": {
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
                            id: 'shaketorejog',
                            opacity: '1',
                            rect: [0, 0, 695, 781, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'symbols/text/shaketorejog.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 695, 781]
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
            "shakee": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 695, 781, 'auto', 'auto'],
                            id: 'shakedevice',
                            symbolName: 'shakedevice',
                            type: 'rect',
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 695, 781]
                        }
                    }
                },
                timeline: {
                    duration: 19000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1596",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${shakedevice}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1602",
                            "opacity",
                            18000,
                            628,
                            "linear",
                            "${shakedevice}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1594",
                            "left",
                            0,
                            0,
                            "linear",
                            "${shakedevice}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1593",
                            "top",
                            0,
                            0,
                            "linear",
                            "${shakedevice}",
                            '0px',
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
                            rect: [null, null, 343, 536]
                        }
                    }
                },
                timeline: {
                    duration: 1696,
                    autoPlay: true,
                    data: [
                        [
                            "eid1663",
                            "left",
                            15,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1666",
                            "left",
                            500,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '-346px'
                        ],
                        [
                            "eid1672",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '-346px',
                            '0px'
                        ],
                        [
                            "eid1677",
                            "left",
                            1309,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '-346px'
                        ],
                        [
                            "eid1664",
                            "top",
                            15,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1665",
                            "top",
                            500,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid1671",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid1676",
                            "top",
                            1309,
                            0,
                            "linear",
                            "${sailorsmoke}",
                            '-547px',
                            '-547px'
                        ]
                    ]
                }
            },
            "oldmanend": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-6, 0, '1000px', '906px', 'auto', 'auto'],
                            id: 'oldmanspritesheet',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['-0.98894', 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oldmanspritesheet.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 989, 906]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid520",
                            "left",
                            15,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-6px',
                            '-6px'
                        ],
                        [
                            "eid523",
                            "left",
                            250,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-6px',
                            '-204px'
                        ],
                        [
                            "eid525",
                            "left",
                            500,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-204px',
                            '-405px'
                        ],
                        [
                            "eid527",
                            "left",
                            750,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-405px',
                            '-590px'
                        ],
                        [
                            "eid529",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-590px',
                            '-789px'
                        ],
                        [
                            "eid531",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-789px',
                            '-190px'
                        ],
                        [
                            "eid533",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-189px',
                            '-390px'
                        ],
                        [
                            "eid535",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-394px',
                            '-589px'
                        ],
                        [
                            "eid537",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-593px',
                            '-789px'
                        ],
                        [
                            "eid521",
                            "top",
                            15,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid522",
                            "top",
                            250,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid524",
                            "top",
                            500,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid526",
                            "top",
                            750,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid528",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid530",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '0px',
                            '-453px'
                        ],
                        [
                            "eid532",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-453px',
                            '-453px'
                        ],
                        [
                            "eid534",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-453px',
                            '-453px'
                        ],
                        [
                            "eid536",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${oldmanspritesheet}",
                            '-458px',
                            '-453px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Zirma_edgeActions.js");
})("EDGE-46349536");

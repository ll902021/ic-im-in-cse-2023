export default {
    imagePath: {
        backGround: {
            PC: {
                'BG:Home': './images/backGround/night.gif',
                'BG:2': './images/backGround/night.gif',
            },
            Mobile: {
                'BG:Home': './images/backGround/1.png',
                'BG:2': './images/backGround/2.png',
                'BG:3': './images/backGround/3.png',
                'BG:4': './images/backGround/4.png',
                'BG:5': './images/backGround/5.png'
            }
        },
        player: {
            standing: './images/player/host.jpg',
            running: './images/player/walk.gif'
        },
        npc: {
            'NPC1': './images/npc/housekeeper.png',
            'NPC2': './images/npc/paper.png',
            'NPC3': './images/npc/paper.png',
            'NPC4': './images/npc/paper.png',
            'NPC5': './images/npc/paper.png'
        },
        portal: './images/book.png',
        buttom: {
            leftArrow: './images/buttom/leftArrow.png',
            rightArrow: './images/buttom/rightArrow.png',
            interact: './images/buttom/interact(2).png'
        }
    },
    story: {
        'Welcome:Message': [
            '電腦玩家請使用鍵盤上的A(左),D(右),F(互動)來操作 。\n*按下互動鍵繼續*'
        ],
        'NPC1': [
            '同學，歡迎你的到來',
            '有一群大學生在圖書館意外地發現了一本看似神秘的古卷，上面記載著關於一個奇怪世界的傳說',
            '但最關鍵的幾頁卻被撕掉了',
            '“你的任務是找到被撕掉的幾頁並閱讀他”。'
        ],

        'NPC2': [
            '一張殘破不堪的紙條；',
            '??_魔王‥',
            '結￣界@'
        ],

        'NPC3': [
            '一張被打翻的墨水染黑的紙條；',
            '⬛⬛回⬛⬛方法',
            '⬛集⬛⬛⬛五個⬛⬛‥‥‥'
        ],

        'NPC4': [
            '一張像是從角落撕下的小碎片；',
            '打敗魔王。'
        ],

        'NPC5': ['看起來像是來自不一樣的世界的新聞：',
            '元智大學近日來發生多起離奇命案，警方展開大規模搜索並成立專案小組。',
            '儘管投入大量警力，兇手依舊未有任何蛛絲馬跡。',
            '請大家幫忙一起到案發現場推理，以及找出每個嫌疑人，並鎖定最後的兇手。'
        ]
    },
    speed: {
        player: 5
    }
};

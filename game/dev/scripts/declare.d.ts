/** 可能為指定型態T或undefined */
declare type OrNull<T> = T | undefined;

declare type DirectionType = 'up' | 'down' | 'left' | 'right';
declare type StatusType = 'reading' | 'walking'

declare interface IPosition {
    left: number,
    right: number
}

declare interface ISize {
    width: number,
    height: number,
}

/**
 * 定義每一種Element都會對應一個Entity
 * 
 * @class Entity
 */
declare interface IEntity {
    /** Entity的ID 與對應的Element ID相同 */
    // readonly id: string;
    /** 此Entity的類別 用來統整CSS */
    // readonly className: string;
    /** 圖片路徑 */
    // readonly imagePath: string;

    /** 獲取ID */
    getId(): string;
    /** 獲取圖片路徑 */
    getPath(): string;
    /** 回傳此Entity的Element型態 */
    getElement(): HTMLElement;

    /** 更改圖片路徑 會同步改變顯示在畫面上的圖片 */
    changePath(newPath: string): void;
    /** 以Entity記載之資料生成Element 並顯示在畫面上 */
    summon(elementType: string): void;
    /** 刪除Element */
    kill(): void;
}

/**
 * 遊戲的頁面(背景)
 * 
 * @class BackGround
 */
declare interface IBackGround extends IEntity {
    /** 此頁面的上一頁 如果是第一頁則為undefined */
    // readonly last: string;
    /** 此頁面的下一頁 如果是最後一頁則為undefined */
    // readonly next: string;
    /** 圖片路徑 */
    // readonly imagePath: string;

    /** 獲取上一頁的ID */
    getLast(): OrNull<string>;
    /** 獲取下一頁的ID */
    getNext(): OrNull<string>;
    /** 獲取該頁面的NPC的ID列表 */
    getEntityList(): string[];
}

/**
 * 被互動、更改大小、更改位置的Entity 定義為DynamicEntity
 * 
 * @abstract class Charactor
 */
declare interface IDynamicEntity extends IEntity {
    /** 獲取Entity位置 */
    getPosition(): IPosition;
    /** 獲取Entity大小 */
    getSize(): ISize;
    /** 設定Entity座標 */
    setPosition(x: string, y: string): void;
    /** 設定Entity大小 */
    setSize(width: string, height: string): void;
}

/**
 * 玩家所操控的角色
 * 
 * @class Player
 */
declare interface IPlayer extends IDynamicEntity {
    /** 玩家移動的速度 */
    // speed: number;

    /** 使角色往某個方向移動 */
    move(direction: DirectionType): void;
}

/**
 * NPC
 * 
 * @class NPC
 */
declare interface INPC extends IDynamicEntity {
    /** NPC的名稱 可以在對話時顯示 */
    // name: string;
    /** NPC的位置 */
    // readonly pos: string;

    /** 獲取NPC的名稱 */
    getName(): string;
    /** 和玩家互動時要執行的動作 */
    action(): void;
}

/**
 * 傳送門
 * 
 * @class Portal
 */
declare interface IPortal extends IEntity {
    /** 傳送門的位置 */
    // pos: [number, number]
    /** 要導向的網站 */
    // directLink: string

    /** 和玩家互動時要執行的動作 */
    action(): void;
}

/**
 * 文字框
 * 會在summon後直接開始撥放故事 按f下一頁
 * 
 * @class TextBox
 */
declare interface ITextBox extends IEntity {
    /** 對話框的文字內容 */
    // readonly dialogue: string[]

    /** 生成文字內容 */
    // #readingStory();
}
gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDBushBackgroundObjects1= [];
gdjs.game_32overCode.GDBushBackgroundObjects2= [];
gdjs.game_32overCode.GDHouseTallForegroundObjects1= [];
gdjs.game_32overCode.GDHouseTallForegroundObjects2= [];
gdjs.game_32overCode.GDHouseSmallBackgroundObjects1= [];
gdjs.game_32overCode.GDHouseSmallBackgroundObjects2= [];
gdjs.game_32overCode.GDPurpleBackgroundObjects1= [];
gdjs.game_32overCode.GDPurpleBackgroundObjects2= [];
gdjs.game_32overCode.GDnoObjects1= [];
gdjs.game_32overCode.GDnoObjects2= [];
gdjs.game_32overCode.GDBlackDecoratedButtonObjects1= [];
gdjs.game_32overCode.GDBlackDecoratedButtonObjects2= [];


gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDBlackDecoratedButtonObjects1Objects = Hashtable.newFrom({"BlackDecoratedButton": gdjs.game_32overCode.GDBlackDecoratedButtonObjects1});
gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.game_32overCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDBlackDecoratedButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13106292);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDBushBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDBushBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDHouseTallForegroundObjects1.length = 0;
gdjs.game_32overCode.GDHouseTallForegroundObjects2.length = 0;
gdjs.game_32overCode.GDHouseSmallBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDHouseSmallBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDPurpleBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDPurpleBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDnoObjects1.length = 0;
gdjs.game_32overCode.GDnoObjects2.length = 0;
gdjs.game_32overCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.game_32overCode.GDBlackDecoratedButtonObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDBushBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDBushBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDHouseTallForegroundObjects1.length = 0;
gdjs.game_32overCode.GDHouseTallForegroundObjects2.length = 0;
gdjs.game_32overCode.GDHouseSmallBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDHouseSmallBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDPurpleBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDPurpleBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDnoObjects1.length = 0;
gdjs.game_32overCode.GDnoObjects2.length = 0;
gdjs.game_32overCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.game_32overCode.GDBlackDecoratedButtonObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;

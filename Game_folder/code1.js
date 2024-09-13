gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDTile30TiledSpriteObjects1= [];
gdjs.gameCode.GDTile30TiledSpriteObjects2= [];
gdjs.gameCode.GDTilesetPiece27Objects1= [];
gdjs.gameCode.GDTilesetPiece27Objects2= [];
gdjs.gameCode.GDTilesetPiece272Objects1= [];
gdjs.gameCode.GDTilesetPiece272Objects2= [];
gdjs.gameCode.GDEnergyBarFillObjects1= [];
gdjs.gameCode.GDEnergyBarFillObjects2= [];
gdjs.gameCode.GDComradeCheesePuffTankObjects1= [];
gdjs.gameCode.GDComradeCheesePuffTankObjects2= [];
gdjs.gameCode.GDMissileObjects1= [];
gdjs.gameCode.GDMissileObjects2= [];
gdjs.gameCode.GDSkeletonObjects1= [];
gdjs.gameCode.GDSkeletonObjects2= [];
gdjs.gameCode.GDBlankeyObjects1= [];
gdjs.gameCode.GDBlankeyObjects2= [];
gdjs.gameCode.GDMainShipAutoCannonBulletObjects1= [];
gdjs.gameCode.GDMainShipAutoCannonBulletObjects2= [];
gdjs.gameCode.GDnukeObjects1= [];
gdjs.gameCode.GDnukeObjects2= [];
gdjs.gameCode.GDdebug_9595LevelTimerObjects1= [];
gdjs.gameCode.GDdebug_9595LevelTimerObjects2= [];
gdjs.gameCode.GDWINObjects1= [];
gdjs.gameCode.GDWINObjects2= [];
gdjs.gameCode.GDshareObjects1= [];
gdjs.gameCode.GDshareObjects2= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDComradeCheesePuffTankObjects1Objects = Hashtable.newFrom({"ComradeCheesePuffTank": gdjs.gameCode.GDComradeCheesePuffTankObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.gameCode.GDSkeletonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.gameCode.GDMissileObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDComradeCheesePuffTankObjects1Objects = Hashtable.newFrom({"ComradeCheesePuffTank": gdjs.gameCode.GDComradeCheesePuffTankObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDEnergyBarFillObjects1Objects = Hashtable.newFrom({"EnergyBarFill": gdjs.gameCode.GDEnergyBarFillObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.gameCode.GDSkeletonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.gameCode.GDMissileObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.gameCode.GDSkeletonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDnukeObjects1Objects = Hashtable.newFrom({"nuke": gdjs.gameCode.GDnukeObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDnukeObjects1Objects = Hashtable.newFrom({"nuke": gdjs.gameCode.GDnukeObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDBlankeyObjects1Objects = Hashtable.newFrom({"Blankey": gdjs.gameCode.GDBlankeyObjects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ComradeCheesePuffTank"), gdjs.gameCode.GDComradeCheesePuffTankObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.gameCode.GDSkeletonObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.gameCode.GDComradeCheesePuffTankObjects1.length !== 0 ? gdjs.gameCode.GDComradeCheesePuffTankObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.gameCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.gameCode.GDComradeCheesePuffTankObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDComradeCheesePuffTankObjects1[0].getPointX("")), (( gdjs.gameCode.GDComradeCheesePuffTankObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDComradeCheesePuffTankObjects1[0].getPointY("")));
}
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 148, 30, 1111, 637, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ComradeCheesePuffTank"), gdjs.gameCode.GDComradeCheesePuffTankObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.gameCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDComradeCheesePuffTankObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDComradeCheesePuffTankObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDComradeCheesePuffTankObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "d0abfe40daf33e6c8600e9816ee8aaec809764f183902d123ff15c169222ea52_Theme 1.aac", true, 4, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13024444);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComradeCheesePuffTank"), gdjs.gameCode.GDComradeCheesePuffTankObjects1);
gdjs.copyArray(runtimeScene.getObjects("Missile"), gdjs.gameCode.GDMissileObjects1);
{for(var i = 0, len = gdjs.gameCode.GDComradeCheesePuffTankObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getBehavior("FireBullet").Fire((gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getPointX("")), (gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getPointY("")), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMissileObjects1Objects, (gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getAngle()), 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "6d326aaa7459782a48b425e2ff31e4c19473379e431c82cb3c8b3d50fb9540eb_Gun 4.aac", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13025580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComradeCheesePuffTank"), gdjs.gameCode.GDComradeCheesePuffTankObjects1);
{for(var i = 0, len = gdjs.gameCode.GDComradeCheesePuffTankObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].addPolarForce((gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getAngle()), 6000, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDComradeCheesePuffTankObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "New sound effect", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ComradeCheesePuffTank"), gdjs.gameCode.GDComradeCheesePuffTankObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnergyBarFill"), gdjs.gameCode.GDEnergyBarFillObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDComradeCheesePuffTankObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDEnergyBarFillObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDComradeCheesePuffTankObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDComradeCheesePuffTankObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "c2ff7e2ff52cb5204cf04a6b0ac33909ea6dda6e45dd8cb369f7f1ace5a01c44_Explosion 7.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Missile"), gdjs.gameCode.GDMissileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.gameCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMissileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDMissileObjects1 */
/* Reuse gdjs.gameCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.gameCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonObjects1[i].getBehavior("Pathfinding").setAcceleration(gdjs.gameCode.GDSkeletonObjects1[i].getBehavior("Pathfinding").getAcceleration() - (10));
}
}{for(var i = 0, len = gdjs.gameCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonObjects1[i].setHeight(gdjs.gameCode.GDSkeletonObjects1[i].getHeight() - (3));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.gameCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonObjects1[i].getScaleY() < 1.1 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonObjects1[k] = gdjs.gameCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonObjects1[i].setAnimationName("Crumbling Into Bone Pile");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.gameCode.GDSkeletonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkeletonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkeletonObjects1[i].getScaleY() < 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkeletonObjects1[k] = gdjs.gameCode.GDSkeletonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSkeletonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 2, 0.1, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Blankey"), gdjs.gameCode.GDBlankeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.gameCode.GDSkeletonObjects1);
{for(var i = 0, len = gdjs.gameCode.GDBlankeyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBlankeyObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkeletonObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComradeCheesePuffTank"), gdjs.gameCode.GDComradeCheesePuffTankObjects1);
gdjs.copyArray(runtimeScene.getObjects("nuke"), gdjs.gameCode.GDnukeObjects1);
{for(var i = 0, len = gdjs.gameCode.GDComradeCheesePuffTankObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getBehavior("FireBullet").Fire((gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getPointX("")), (gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getPointY("")), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDnukeObjects1Objects, (gdjs.gameCode.GDComradeCheesePuffTankObjects1[i].getAngle()), 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blankey"), gdjs.gameCode.GDBlankeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("nuke"), gdjs.gameCode.GDnukeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDnukeObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDBlankeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDBlankeyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.gameCode.GDSkeletonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WIN"), gdjs.gameCode.GDWINObjects1);
gdjs.copyArray(runtimeScene.getObjects("share"), gdjs.gameCode.GDshareObjects1);
{for(var i = 0, len = gdjs.gameCode.GDBlankeyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBlankeyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkeletonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 5, 0.1, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameCode.GDWINObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDWINObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "LevelTimer");
}{for(var i = 0, len = gdjs.gameCode.GDshareObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDshareObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "f963419e3251a45463ad24aeab4ac7c5406c82947553aa3c909d53273636d8fe_Theme 4.aac", true, 0.4, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LevelTimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debug_LevelTimer"), gdjs.gameCode.GDdebug_9595LevelTimerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDdebug_9595LevelTimerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdebug_9595LevelTimerObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "LevelTimer"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WIN"), gdjs.gameCode.GDWINObjects1);
gdjs.copyArray(runtimeScene.getObjects("share"), gdjs.gameCode.GDshareObjects1);
{for(var i = 0, len = gdjs.gameCode.GDWINObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDWINObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDshareObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDshareObjects1[i].hide();
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDTile30TiledSpriteObjects1.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects2.length = 0;
gdjs.gameCode.GDTilesetPiece27Objects1.length = 0;
gdjs.gameCode.GDTilesetPiece27Objects2.length = 0;
gdjs.gameCode.GDTilesetPiece272Objects1.length = 0;
gdjs.gameCode.GDTilesetPiece272Objects2.length = 0;
gdjs.gameCode.GDEnergyBarFillObjects1.length = 0;
gdjs.gameCode.GDEnergyBarFillObjects2.length = 0;
gdjs.gameCode.GDComradeCheesePuffTankObjects1.length = 0;
gdjs.gameCode.GDComradeCheesePuffTankObjects2.length = 0;
gdjs.gameCode.GDMissileObjects1.length = 0;
gdjs.gameCode.GDMissileObjects2.length = 0;
gdjs.gameCode.GDSkeletonObjects1.length = 0;
gdjs.gameCode.GDSkeletonObjects2.length = 0;
gdjs.gameCode.GDBlankeyObjects1.length = 0;
gdjs.gameCode.GDBlankeyObjects2.length = 0;
gdjs.gameCode.GDMainShipAutoCannonBulletObjects1.length = 0;
gdjs.gameCode.GDMainShipAutoCannonBulletObjects2.length = 0;
gdjs.gameCode.GDnukeObjects1.length = 0;
gdjs.gameCode.GDnukeObjects2.length = 0;
gdjs.gameCode.GDdebug_9595LevelTimerObjects1.length = 0;
gdjs.gameCode.GDdebug_9595LevelTimerObjects2.length = 0;
gdjs.gameCode.GDWINObjects1.length = 0;
gdjs.gameCode.GDWINObjects2.length = 0;
gdjs.gameCode.GDshareObjects1.length = 0;
gdjs.gameCode.GDshareObjects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
gdjs.gameCode.GDTile30TiledSpriteObjects1.length = 0;
gdjs.gameCode.GDTile30TiledSpriteObjects2.length = 0;
gdjs.gameCode.GDTilesetPiece27Objects1.length = 0;
gdjs.gameCode.GDTilesetPiece27Objects2.length = 0;
gdjs.gameCode.GDTilesetPiece272Objects1.length = 0;
gdjs.gameCode.GDTilesetPiece272Objects2.length = 0;
gdjs.gameCode.GDEnergyBarFillObjects1.length = 0;
gdjs.gameCode.GDEnergyBarFillObjects2.length = 0;
gdjs.gameCode.GDComradeCheesePuffTankObjects1.length = 0;
gdjs.gameCode.GDComradeCheesePuffTankObjects2.length = 0;
gdjs.gameCode.GDMissileObjects1.length = 0;
gdjs.gameCode.GDMissileObjects2.length = 0;
gdjs.gameCode.GDSkeletonObjects1.length = 0;
gdjs.gameCode.GDSkeletonObjects2.length = 0;
gdjs.gameCode.GDBlankeyObjects1.length = 0;
gdjs.gameCode.GDBlankeyObjects2.length = 0;
gdjs.gameCode.GDMainShipAutoCannonBulletObjects1.length = 0;
gdjs.gameCode.GDMainShipAutoCannonBulletObjects2.length = 0;
gdjs.gameCode.GDnukeObjects1.length = 0;
gdjs.gameCode.GDnukeObjects2.length = 0;
gdjs.gameCode.GDdebug_9595LevelTimerObjects1.length = 0;
gdjs.gameCode.GDdebug_9595LevelTimerObjects2.length = 0;
gdjs.gameCode.GDWINObjects1.length = 0;
gdjs.gameCode.GDWINObjects2.length = 0;
gdjs.gameCode.GDshareObjects1.length = 0;
gdjs.gameCode.GDshareObjects2.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;

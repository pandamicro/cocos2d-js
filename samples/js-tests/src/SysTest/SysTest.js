/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var sysTestSceneIdx = -1;
//------------------------------------------------------------------
//
// SysTestBase
//
//------------------------------------------------------------------
var SysTestBase = BaseTestLayer.extend({
    _title:"",
    _subtitle:"",

    ctor:function() {
        this._super(cc.color(0,0,0,255), cc.color(98,99,117,255));
    },

    onRestartCallback:function (sender) {
        var s = new SysTestScene();
        s.addChild(restartSysTest());
        director.runScene(s);
    },
    onNextCallback:function (sender) {
        var s = new SysTestScene();
        s.addChild(nextSysTest());
        director.runScene(s);
    },
    onBackCallback:function (sender) {
        var s = new SysTestScene();
        s.addChild(previousSysTest());
        director.runScene(s);
    },
    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfSysTest.length-1) - sysTestSceneIdx );
    },

    getTestNumber:function() {
        return sysTestSceneIdx;
    }

});

//------------------------------------------------------------------
//
// LocalStorageTest
//
//------------------------------------------------------------------
var JSBSqliteTest = SysTestBase.extend({
    _title:"JSBSqliteTest Test only use in native",
    _subtitle:"See the console",

    ctor:function () {
        this._super();

        if(!cc.sys.isNative){
            cc.log("only used in Native");
            return true;
        }

        cc.log("strat to test sqlite");

        this._db = new jsbsql.SQLiteWrapper();
        this._dbPath = this._db.copyToWritablePath("res/database/data.db");

        //this._isOpen = this._db.open(this._dbPath);
        this._isOpen = this._db.open(this._dbPath);

        cc.log("database open reslut: "+this._isOpen);

        if(this._isOpen){
            var st = this._db.statement("select * from equip");

            var ary = [];
            while(st.nextRow()){
                var equipVO = {
                    wid:null,//like 10000001
                    name:null,//like money
                    level:null,//like 1
                    type:null,//like 1
                    price:null,//like 200
                    stackCount:null,//like 99
                    bind:null,//like 1
                    desc:null,//like plus money
                    quality:null,//like 1
                    icon:null,//like item/article/10000001.png
                    toString:function(){
                    return this.wid + " " + this.name + " " + this.level + " " + this.desc + " " + this.icon;
                    }
                };
                equipVO.wid = parseInt(st.valueString(0));
                equipVO.name = st.valueString(1);
                equipVO.desc = st.valueString(2);
                equipVO.level = st.valueString(3);
                equipVO.icon = st.valueString(4);
                equipVO.quality = st.valueString(5);
                ary.push(equipVO);
            }

            for(var vo in ary){
                cc.log("equipData:" + ary[vo].toString());
            }

            this._db.close();
        }
    }

});

//------------------------------------------------------------------
//
// LocalStorageTest
//
//------------------------------------------------------------------
var LocalStorageTest = SysTestBase.extend({
    _title:"LocalStorage Test ",
    _subtitle:"See the console",

    ctor:function () {
        this._super();

        var key = 'key_' + Math.random();
        var ls = cc.sys.localStorage;
        cc.log(1);
        ls.setItem(key, "Hello world");

        cc.log(2);
        var r = ls.getItem(key);
        cc.log(r);

        cc.log(3);
        ls.removeItem(key);

        cc.log(4);
        r = ls.getItem(key);
        cc.log(r);
    }

});

//------------------------------------------------------------------
//
// CapabilitiesTest
//
//------------------------------------------------------------------
var CapabilitiesTest = SysTestBase.extend({
    _title:"Capabilities Test ",
    _subtitle:"See the console",

    ctor:function () {
        this._super();

        var c = cc.sys.capabilities;
        for( var i in c )
            cc.log( i + " = " + c[i] );
    }

});

var SysTestScene = TestScene.extend({
    runThisTest:function (num) {
        sysTestSceneIdx = (num || num == 0) ? (num - 1) : -1;
        var layer = nextSysTest();
        this.addChild(layer);

        director.runScene(this);
    }
});

//
// Flow control
//

var arrayOfSysTest = [
    LocalStorageTest,
    JSBSqliteTest,
    CapabilitiesTest
];

var nextSysTest = function () {
    sysTestSceneIdx++;
    sysTestSceneIdx = sysTestSceneIdx % arrayOfSysTest.length;

    return new arrayOfSysTest[sysTestSceneIdx]();
};
var previousSysTest = function () {
    sysTestSceneIdx--;
    if (sysTestSceneIdx < 0)
        sysTestSceneIdx += arrayOfSysTest.length;

    return new arrayOfSysTest[sysTestSceneIdx]();
};
var restartSysTest = function () {
    return new arrayOfSysTest[sysTestSceneIdx]();
};


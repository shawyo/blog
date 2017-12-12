(function (lib, img, cjs, ss, an) {
    var p;
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [{
        name: "RedAnimate_atlas_",
        frames: [
            [1446, 1632, 256, 256],
            [1704, 1632, 158, 184],
            [1526, 1890, 77, 69],
            [1704, 1818, 81, 92],
            [1446, 1890, 78, 69],
            [1605, 1890, 92, 45],
            [1787, 1818, 30, 30],
            [1819, 1818, 30, 30],
            [1851, 1818, 30, 30],
            [1864, 1632, 30, 30],
            [0, 0, 480, 270],
            [0, 272, 480, 270],
            [0, 544, 480, 270],
            [0, 816, 480, 270],
            [0, 1088, 480, 270],
            [0, 1360, 480, 270],
            [0, 1632, 480, 270],
            [482, 0, 480, 270],
            [482, 272, 480, 270],
            [482, 544, 480, 270],
            [482, 816, 480, 270],
            [482, 1088, 480, 270],
            [482, 1360, 480, 270],
            [482, 1632, 480, 270],
            [964, 0, 480, 270],
            [964, 272, 480, 270],
            [964, 544, 480, 270],
            [964, 816, 480, 270],
            [964, 1088, 480, 270],
            [964, 1360, 480, 270],
            [964, 1632, 480, 270],
            [1446, 0, 480, 270],
            [1446, 272, 480, 270],
            [1446, 544, 480, 270],
            [1446, 816, 480, 270],
            [1446, 1088, 480, 270],
            [1446, 1360, 480, 270]
        ]
    }];
    lib.updateListCache = function (cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas) {
                cacheList[i].updateCache()
            }
        }
    };
    lib.addElementsToCache = function (textInst, cacheList) {
        var cur = textInst;
        while (cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1) {
                break
            }
            cur = cur.parent
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++
            }
        } else {
            cur = textInst;
            while (cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent
            }
        }
    };
    lib.gfontAvailable = function (family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f) {
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList)
        }
        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList)
        }
    };
    lib.tfontAvailable = function (family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f) {
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList)
        }
        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList)
        }
    };
    (lib.hongbao5_1 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(0)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(1)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha2 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(2)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha3 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(3)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha4 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(4)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha5 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(5)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha6 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(6)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha7 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(7)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha8 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(8)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha9 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(9)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00000 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(10)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00001 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(11)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00002 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(12)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00003 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(13)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00004 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(14)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00005 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(15)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00006 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(16)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00007 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(17)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00008 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(18)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00009 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(19)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00010 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(20)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00011 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(21)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00012 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(22)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00013 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(23)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00014 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(24)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00015 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(25)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00016 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(26)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00017 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(27)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00018 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(28)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00019 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(29)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00020 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(30)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00021 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(31)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00022 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(32)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00023 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(33)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00024 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(34)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00025 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(35)
    }).prototype = p = new cjs.Sprite();
    (lib.hongbaobaozha_04_00026 = function () {
        this.spriteSheet = ss["RedAnimate_atlas_"];
        this.gotoAndStop(36)
    }).prototype = p = new cjs.Sprite();

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype
    }(lib.hongbaojingbi_04 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha3();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.hongbaojingbi_04, new cjs.Rectangle(0, 0, 81, 92), null);
    (lib.hongbaojingbi_03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha2();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.hongbaojingbi_03, new cjs.Rectangle(0, 0, 77, 69), null);
    (lib.hongbaojingbi_02 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha5();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.hongbaojingbi_02, new cjs.Rectangle(0, 0, 92, 45), null);
    (lib.hongbaojingbi_01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha4();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.hongbaojingbi_01, new cjs.Rectangle(0, 0, 78, 69), null);
    (lib.元件34 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha9();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(0, 0, 30, 30), null);
    (lib.元件33 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha8();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(0, 0, 30, 30), null);
    (lib.元件32 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00026();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件31 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00025();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件30 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00024();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件29 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00023();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件28 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00022();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件27 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00021();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件26 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00020();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件25 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00019();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件24 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00018();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件24, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件23 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00017();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件23, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件22 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00016();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件21 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00015();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件20 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00014();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件19 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00013();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件18 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00012();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件17 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00011();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件16 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00010();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件15 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00009();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件14 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00008();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件13 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00007();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件12 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00006();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件11 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00005();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件10 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00004();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件9 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00003();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件8 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00002();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件7 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00001();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha_04_00000();
        this.instance.parent = this;
        this.instance.setTransform(414, 0, 1.533, 1.533, 90);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0, 0, 414, 736), null);
    (lib.元件4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbao5_1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.25, 0.25);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0, 0, 64, 64), null);
    (lib.元件3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EgUdAgNMAAAhAZMAo7AAAMAAABAZg");
        this.shape.setTransform(131, 206.1);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 262.1, 412.1);
    (lib.元件2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha6();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0, 0, 30, 30), null);
    (lib.元件1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha7();
        this.instance.parent = this;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0, 0, 30, 30), null);
    (lib.btn = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.hongbaobaozha();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.6, 0.6);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 94.8, 110.4);
    (lib.元件38 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.元件1();
        this.instance.parent = this;
        this.instance.setTransform(15, 15, 1, 1, 0, 0, 0, 15, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(0, 0, 30, 30), null);
    (lib.元件37 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.元件2();
        this.instance.parent = this;
        this.instance.setTransform(15, 15, 1, 1, 0, 0, 0, 15, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件37, new cjs.Rectangle(0, 0, 30, 30), null);
    (lib.元件36 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.元件33();
        this.instance.parent = this;
        this.instance.setTransform(15, 15, 1, 1, 0, 0, 0, 15, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件36, new cjs.Rectangle(0, 0, 30, 30), null);
    (lib.元件35 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.元件34();
        this.instance.parent = this;
        this.instance.setTransform(7.8, 7.8, 0.517, 0.517, 0, 0, 0, 15, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    }).prototype = getMCSymbolPrototype(lib.元件35, new cjs.Rectangle(0, 0, 15.5, 15.5), null);
    (lib.hongbaobaozha01 = function (mode, startPosition, loop) {
        if (loop == null) {
            loop = false
        }
        this.initialize(mode, startPosition, loop, {});
        this.frame_116 = function () {
            document.getElementById("animation_container").remove();
            setTimeout(function () {
                var videoBox = document.getElementById("videoBox");
                videoBox.className += " " + "bounceIn";
            }, 1000);
        };
        this.frame_86 = function () {
            document.getElementById("animation_container").style.background = "none";
            document.getElementById("bg").remove()
        };
        this.timeline.addTween(cjs.Tween.get(this).wait(116).call(this.frame_116).wait(10));
        this.timeline.addTween(cjs.Tween.get(this).wait(86).call(this.frame_86).wait(10));
        this.frame_19 = function () {
            this.btn.addEventListener("click", fl_MouseClickHandler_5.bind(this));

            function fl_MouseClickHandler_5() {
                this.gotoAndPlay(55)
            }
        };
        this.frame_53 = function () {
            this.gotoAndPlay(21)
        };
        this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(34).call(this.frame_53).wait(69));
        this.instance = new lib.元件35();
        this.instance.parent = this;
        this.instance.setTransform(205.1, 353.6, 1.6, 1.6, 0, 0, 0, 7.8, 7.8);
        this.instance._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({
            _off: false
        }, 0).to({
            regX: 7.9,
            regY: 7.9,
            scaleX: 0.79,
            scaleY: 0.79,
            x: 172.6,
            y: 217.6
        }, 23, cjs.Ease.get(1)).to({
            regX: 7.8,
            regY: 7.8,
            scaleX: 0.64,
            scaleY: 0.64,
            rotation: -90,
            x: 164.8,
            y: 291
        }, 15, cjs.Ease.get(-0.57)).to({
            _off: true
        }, 1).wait(6));
        this.instance_1 = new lib.元件36();
        this.instance_1.parent = this;
        this.instance_1.setTransform(204.8, 338.6, 1, 1, 0, 0, 0, 15, 15);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({
            _off: false
        }, 0).to({
            scaleX: 0.74,
            scaleY: 0.74,
            x: 246.2,
            y: 219
        }, 17, cjs.Ease.get(1)).to({
            regX: 15.1,
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: 142.5,
            x: 274.2,
            y: 270
        }, 16).to({
            _off: true
        }, 1).wait(11));
        this.instance_2 = new lib.元件37();
        this.instance_2.parent = this;
        this.instance_2.setTransform(227.2, 350.7, 0.84, 0.84, 0, 0, 0, 15, 15);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({
            _off: false
        }, 0).to({
            x: 145.1,
            y: 216.5
        }, 20, cjs.Ease.get(1)).to({
            rotation: -142.1,
            x: 99.9,
            y: 257.8
        }, 19).to({
            _off: true
        }, 1).wait(9));
        this.instance_3 = new lib.元件38();
        this.instance_3.parent = this;
        this.instance_3.setTransform(189.3, 347.8, 1.2, 1.2, 0, 0, 180, 14.9, 15);
        this.instance_3._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({
            _off: false
        }, 0).to({
            regX: 14.8,
            regY: 15.1,
            scaleX: 0.43,
            scaleY: 0.43,
            x: 220,
            y: 237.3
        }, 18, cjs.Ease.get(1)).to({
            regY: 14.9,
            scaleX: 0.3,
            scaleY: 0.3,
            skewX: 126,
            skewY: 306,
            x: 227.4,
            y: 265.1
        }, 13).to({
            _off: true
        }, 1).wait(13));
        this.instance_4 = new lib.元件35();
        this.instance_4.parent = this;
        this.instance_4.setTransform(205.1, 353.6, 1.6, 1.6, 0, 0, 0, 7.8, 7.8);
        this.instance_4._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({
            _off: false
        }, 0).to({
            scaleX: 0.64,
            scaleY: 0.64,
            rotation: 180,
            x: 369.7,
            y: 557.1
        }, 38, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(8));
        this.instance_5 = new lib.元件36();
        this.instance_5.parent = this;
        this.instance_5.setTransform(204.8, 338.6, 1, 1, 0, 0, 0, 15, 15);
        this.instance_5._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(77).to({
            _off: false
        }, 0).to({
            scaleX: 0.74,
            scaleY: 0.74,
            x: 291.8,
            y: 350.2
        }, 17, cjs.Ease.get(1)).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: -90,
            x: 342.6,
            y: 403
        }, 16).to({
            _off: true
        }, 1).wait(11));
        this.instance_6 = new lib.元件37();
        this.instance_6.parent = this;
        this.instance_6.setTransform(180.4, 350.7, 0.84, 0.84, 0, 0, 0, 15, 15);
        this.instance_6._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77).to({
            _off: false
        }, 0).to({
            regY: 14.8,
            scaleX: 0.42,
            scaleY: 0.42,
            rotation: 150,
            x: 145.1,
            y: 482.5
        }, 20, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(24));
        this.instance_7 = new lib.元件38();
        this.instance_7.parent = this;
        this.instance_7.setTransform(189.3, 347.8, 1.2, 1.2, 0, 0, 180, 14.9, 15);
        this.instance_7._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({
            _off: false
        }, 0).to({
            regX: 14.8,
            regY: 15.1,
            scaleX: 0.43,
            scaleY: 0.43,
            x: 123.5,
            y: 256.2
        }, 18, cjs.Ease.get(1)).to({
            regX: 14.9,
            regY: 15,
            scaleX: 0.3,
            scaleY: 0.3,
            x: 70.9,
            y: 298.7
        }, 13).to({
            _off: true
        }, 1).wait(16));
        this.instance_8 = new lib.元件35();
        this.instance_8.parent = this;
        this.instance_8.setTransform(180.3, 338.4, 1.6, 1.6, 0, 0, 0, 7.8, 7.8);
        this.instance_8._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(77).to({
            _off: false
        }, 0).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: -27.4,
            y: 557.5
        }, 37, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(7));
        this.instance_9 = new lib.元件36();
        this.instance_9.parent = this;
        this.instance_9.setTransform(189.9, 338.6, 1, 1, 0, 0, 0, 15, 15);
        this.instance_9._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(77).to({
            _off: false
        }, 0).to({
            scaleX: 0.74,
            scaleY: 0.74,
            x: 62.7,
            y: 300.1
        }, 17, cjs.Ease.get(1)).to({
            scaleX: 0.5,
            scaleY: 0.5,
            x: 48,
            y: 371.9
        }, 16).to({
            _off: true
        }, 1).wait(11));
        this.instance_10 = new lib.元件37();
        this.instance_10.parent = this;
        this.instance_10.setTransform(231.6, 339.8, 0.84, 0.84, 0, 0, 0, 15, 15);
        this.instance_10._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74).to({
            _off: false
        }, 0).to({
            scaleX: 0.42,
            scaleY: 0.42,
            x: 369.7,
            y: 385.7
        }, 20, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(27));
        this.instance_11 = new lib.元件38();
        this.instance_11.parent = this;
        this.instance_11.setTransform(201.9, 338.7, 1.2, 1.2, 0, 0, 180, 14.9, 15);
        this.instance_11._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({
            _off: false
        }, 0).to({
            regX: 14.8,
            regY: 15.1,
            scaleX: 0.43,
            scaleY: 0.43,
            x: 312.5,
            y: 237.3
        }, 18, cjs.Ease.get(1)).to({
            regX: 14.9,
            regY: 15,
            scaleX: 0.3,
            scaleY: 0.3,
            x: 354.5,
            y: 283.1
        }, 13).to({
            _off: true
        }, 1).wait(13));
        this.instance_12 = new lib.hongbaojingbi_04();
        this.instance_12.parent = this;
        this.instance_12.setTransform(213, 365, 0.249, 0.249, 81.4, 0, 0, 40.7, 46.1);
        this.instance_12._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(85).to({
            _off: false
        }, 0).to({
            regX: 40.4,
            scaleX: 0.83,
            scaleY: 0.83,
            rotation: 259.5,
            x: 545.9,
            y: 189.1
        }, 13).to({
            _off: true
        }, 1).wait(23));
        this.instance_13 = new lib.hongbaojingbi_04();
        this.instance_13.parent = this;
        this.instance_13.setTransform(227.5, 389.6, 0.249, 0.249, 105.7, 0, 0, 40.4, 46);
        this.instance_13._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80).to({
            _off: false
        }, 0).to({
            regY: 46.1,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: 259.5,
            x: -111.3,
            y: 219.5
        }, 13).to({
            _off: true
        }, 1).wait(28));
        this.instance_14 = new lib.hongbaojingbi_04();
        this.instance_14.parent = this;
        this.instance_14.setTransform(202.1, 363.2, 0.3, 0.3, 0, 0, 0, 40.5, 46);
        this.instance_14._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(83).to({
            _off: false
        }, 0).to({
            regX: 40.4,
            regY: 46.1,
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: -100.5,
            x: -164.6,
            y: 388.5
        }, 13).to({
            _off: true
        }, 1).wait(25));
        this.instance_15 = new lib.hongbaojingbi_03();
        this.instance_15.parent = this;
        this.instance_15.setTransform(210.1, 368, 0.334, 0.334, 0, 100.4, -79.6, 38.6, 34.3);
        this.instance_15._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(83).to({
            _off: false
        }, 0).to({
            regX: 38.7,
            regY: 34.4,
            scaleX: 1,
            scaleY: 1,
            x: 257.3,
            y: -67.1
        }, 10).to({
            _off: true
        }, 1).wait(28));
        this.instance_16 = new lib.hongbaojingbi_03();
        this.instance_16.parent = this;
        this.instance_16.setTransform(214.4, 378.2, 0.403, 0.403, -107.9, 0, 0, 38.4, 34.5);
        this.instance_16._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(81).to({
            _off: false
        }, 0).to({
            regX: 38.6,
            regY: 34.4,
            scaleX: 0.97,
            scaleY: 0.97,
            rotation: -634.2,
            x: 262.4,
            y: 773.4
        }, 14).to({
            _off: true
        }, 1).wait(26));
        this.instance_17 = new lib.hongbaojingbi_03();
        this.instance_17.parent = this;
        this.instance_17.setTransform(222.2, 360.5, 0.316, 0.316, -100.4, 0, 0, 38.4, 34.6);
        this.instance_17._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(91).to({
            _off: false
        }, 0).to({
            regX: 38.6,
            regY: 34.5,
            scaleX: 0.63,
            scaleY: 0.63,
            rotation: -274.2,
            x: 112.8,
            y: -122.4
        }, 13).to({
            _off: true
        }, 1).wait(17));
        this.instance_18 = new lib.hongbaojingbi_03();
        this.instance_18.parent = this;
        this.instance_18.setTransform(204.1, 372.7, 0.265, 0.265, 0, 0, 0, 38.5, 34.6);
        this.instance_18._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(82).to({
            _off: false
        }, 0).to({
            regX: 38.6,
            regY: 34.5,
            scaleX: 1.08,
            scaleY: 1.08,
            rotation: 619.6,
            x: -66.8,
            y: 504
        }, 20).to({
            _off: true
        }, 1).wait(19));
        this.instance_19 = new lib.hongbaojingbi_02();
        this.instance_19.parent = this;
        this.instance_19.setTransform(200.5, 370.3, 0.3, 0.3, 0, 0, 0, 46, 22.5);
        this.instance_19._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(79).to({
            _off: false
        }, 0).to({
            regX: 46.1,
            regY: 22.6,
            scaleX: 0.54,
            scaleY: 0.54,
            rotation: -97.3,
            x: 121.1,
            y: -50.1
        }, 12).to({
            _off: true
        }, 1).wait(30));
        this.instance_20 = new lib.hongbaojingbi_04();
        this.instance_20.parent = this;
        this.instance_20.setTransform(213, 365, 0.249, 0.249, 81.4, 0, 0, 40.7, 46.1);
        this.instance_20._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(88).to({
            _off: false
        }, 0).to({
            regX: 40.5,
            regY: 46,
            scaleX: 0.55,
            scaleY: 0.55,
            rotation: 259.5,
            x: -121.7,
            y: 299.7
        }, 13).to({
            _off: true
        }, 1).wait(20));
        this.instance_21 = new lib.hongbaojingbi_04();
        this.instance_21.parent = this;
        this.instance_21.setTransform(227.5, 389.6, 0.249, 0.249, 105.7, 0, 0, 40.4, 46);
        this.instance_21._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(83).to({
            _off: false
        }, 0).to({
            regY: 46.2,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: 259.5,
            x: 541.7,
            y: 451.6
        }, 13).to({
            _off: true
        }, 1).wait(25));
        this.instance_22 = new lib.hongbaojingbi_04();
        this.instance_22.parent = this;
        this.instance_22.setTransform(202.1, 363.2, 0.3, 0.3, 0, 0, 0, 40.5, 46);
        this.instance_22._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(86).to({
            _off: false
        }, 0).to({
            regY: 46.1,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: -100.5,
            x: 337.7,
            y: -112.3
        }, 13).to({
            _off: true
        }, 1).wait(22));
        this.instance_23 = new lib.hongbaojingbi_03();
        this.instance_23.parent = this;
        this.instance_23.setTransform(210.1, 368, 0.334, 0.334, 0, 100.4, -79.6, 38.6, 34.3);
        this.instance_23._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(86).to({
            _off: false
        }, 0).to({
            regY: 34.5,
            scaleX: 0.67,
            scaleY: 0.67,
            x: -83.6,
            y: 581.2
        }, 10).to({
            _off: true
        }, 1).wait(25));
        this.instance_24 = new lib.hongbaojingbi_03();
        this.instance_24.parent = this;
        this.instance_24.setTransform(214.4, 378.2, 0.403, 0.403, -107.9, 0, 0, 38.4, 34.5);
        this.instance_24._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(87).to({
            _off: false
        }, 0).to({
            regX: 38.6,
            regY: 34.4,
            scaleX: 0.81,
            scaleY: 0.81,
            rotation: -634.2,
            x: 62.1,
            y: 780
        }, 19).to({
            _off: true
        }, 1).wait(15));
        this.instance_25 = new lib.hongbaojingbi_03();
        this.instance_25.parent = this;
        this.instance_25.setTransform(222.2, 360.5, 0.316, 0.316, -100.4, 0, 0, 38.4, 34.6);
        this.instance_25._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(94).to({
            _off: false
        }, 0).to({
            regX: 38.6,
            regY: 34.5,
            scaleX: 0.95,
            scaleY: 0.95,
            rotation: -274.2,
            x: 512.5,
            y: 562.2
        }, 13).to({
            _off: true
        }, 2).wait(13));
        this.instance_26 = new lib.hongbaojingbi_03();
        this.instance_26.parent = this;
        this.instance_26.setTransform(204.1, 372.7, 0.265, 0.265, 0, 0, 0, 38.5, 34.6);
        this.instance_26._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(85).to({
            _off: false
        }, 0).to({
            scaleX: 0.72,
            scaleY: 0.72,
            rotation: 619.6,
            x: 456.1,
            y: 97
        }, 20).to({
            _off: true
        }, 1).wait(16));
        this.instance_27 = new lib.hongbaojingbi_02();
        this.instance_27.parent = this;
        this.instance_27.setTransform(200.5, 370.3, 0.3, 0.3, 0, 0, 0, 46, 22.5);
        this.instance_27._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(82).to({
            _off: false
        }, 0).to({
            regY: 22.4,
            scaleX: 0.54,
            scaleY: 0.54,
            rotation: -97.3,
            x: -56.9,
            y: 664.8
        }, 12).to({
            _off: true
        }, 1).wait(27));
        this.instance_28 = new lib.hongbaojingbi_01();
        this.instance_28.parent = this;
        this.instance_28.setTransform(208.6, 374.8, 0.3, 0.3, 0, 0, 0, 39.1, 34.6);
        this.instance_28._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(82).to({
            _off: false
        }, 0).to({
            scaleX: 0.6,
            scaleY: 0.6,
            rotation: 175.6,
            x: 517.5,
            y: -1.5
        }, 13).to({
            _off: true
        }, 1).wait(26));
        this.instance_29 = new lib.hongbaojingbi_04();
        this.instance_29.parent = this;
        this.instance_29.setTransform(213, 365, 0.249, 0.249, 81.4, 0, 0, 40.7, 46.1);
        this.instance_29._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(82).to({
            _off: false
        }, 0).to({
            regX: 40.5,
            regY: 46,
            scaleX: 0.32,
            scaleY: 0.32,
            rotation: 259.5,
            x: -45.1,
            y: 100.1
        }, 13).to({
            _off: true
        }, 1).wait(26));
        this.instance_30 = new lib.hongbaojingbi_04();
        this.instance_30.parent = this;
        this.instance_30.setTransform(227.5, 389.6, 0.249, 0.249, 105.7, 0, 0, 40.4, 46);
        this.instance_30._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(77).to({
            _off: false
        }, 0).to({
            regY: 46.1,
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: 259.5,
            x: 475.9,
            y: 262.6
        }, 13).to({
            _off: true
        }, 1).wait(31));
        this.instance_31 = new lib.hongbaojingbi_04();
        this.instance_31.parent = this;
        this.instance_31.setTransform(202.1, 363.2, 0.3, 0.3, 0, 0, 0, 40.5, 46);
        this.instance_31._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(80).to({
            _off: false
        }, 0).to({
            regX: 40.4,
            regY: 46.1,
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: -100.5,
            x: 516.3,
            y: 662.8
        }, 13).to({
            _off: true
        }, 1).wait(28));
        this.instance_32 = new lib.hongbaojingbi_03();
        this.instance_32.parent = this;
        this.instance_32.setTransform(210.1, 368, 0.334, 0.334, 0, 100.4, -79.6, 38.6, 34.3);
        this.instance_32._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(80).to({
            _off: false
        }, 0).to({
            regX: 38.7,
            regY: 34.4,
            scaleX: 0.67,
            scaleY: 0.67,
            x: 361.5,
            y: -39.9
        }, 10).to({
            _off: true
        }, 1).wait(31));
        this.instance_33 = new lib.hongbaojingbi_03();
        this.instance_33.parent = this;
        this.instance_33.setTransform(214.4, 378.2, 0.403, 0.403, -107.9, 0, 0, 38.4, 34.5);
        this.instance_33._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(81).to({
            _off: false
        }, 0).to({
            regX: 38.5,
            regY: 34.4,
            scaleX: 0.81,
            scaleY: 0.81,
            rotation: -634.2,
            x: 2,
            y: -43.2
        }, 19).to({
            _off: true
        }, 1).wait(21));
        this.instance_34 = new lib.hongbaojingbi_03();
        this.instance_34.parent = this;
        this.instance_34.setTransform(222.2, 360.5, 0.316, 0.316, -100.4, 0, 0, 38.4, 34.6);
        this.instance_34._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(88).to({
            _off: false
        }, 0).to({
            regX: 38.6,
            regY: 34.5,
            scaleX: 0.63,
            scaleY: 0.63,
            rotation: -274.2,
            x: 435.4,
            y: 733.3
        }, 13).to({
            _off: true
        }, 1).wait(20));
        this.instance_35 = new lib.hongbaojingbi_03();
        this.instance_35.parent = this;
        this.instance_35.setTransform(204.1, 372.7, 0.265, 0.265, 0, 0, 0, 38.5, 34.6);
        this.instance_35._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(79).to({
            _off: false
        }, 0).to({
            regY: 34.5,
            scaleX: 0.72,
            scaleY: 0.72,
            rotation: 619.6,
            x: 536.1,
            y: 358.1
        }, 20).to({
            _off: true
        }, 1).wait(22));
        this.instance_36 = new lib.hongbaojingbi_02();
        this.instance_36.parent = this;
        this.instance_36.setTransform(200.5, 370.3, 0.3, 0.3, 0, 0, 0, 46, 22.5);
        this.instance_36._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(76).to({
            _off: false
        }, 0).to({
            regY: 22.4,
            scaleX: 0.54,
            scaleY: 0.54,
            rotation: -97.3,
            x: -20.6,
            y: 143.7
        }, 12).to({
            _off: true
        }, 1).wait(33));
        this.instance_37 = new lib.hongbaojingbi_01();
        this.instance_37.parent = this;
        this.instance_37.setTransform(208.6, 374.8, 0.3, 0.3, 0, 0, 0, 39.1, 34.6);
        this.instance_37._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(76).to({
            _off: false
        }, 0).to({
            scaleX: 0.6,
            scaleY: 0.6,
            rotation: 175.6,
            x: 510.3,
            y: 538.4
        }, 13).to({
            _off: true
        }, 1).wait(32));
        this.instance_38 = new lib.元件6();
        this.instance_38.parent = this;
        this.instance_38.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_38.alpha = 0.199;
        this.instance_38.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_38.cache(-2, -2, 418, 740);
        this.instance_39 = new lib.元件7();
        this.instance_39.parent = this;
        this.instance_39.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_39.alpha = 0.398;
        this.instance_39.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_39.cache(-2, -2, 418, 740);
        this.instance_40 = new lib.元件8();
        this.instance_40.parent = this;
        this.instance_40.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_40.alpha = 0.602;
        this.instance_40.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_40.cache(-2, -2, 418, 740);
        this.instance_41 = new lib.元件9();
        this.instance_41.parent = this;
        this.instance_41.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_41.alpha = 0.801;
        this.instance_41.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_41.cache(-2, -2, 418, 740);
        this.instance_42 = new lib.元件10();
        this.instance_42.parent = this;
        this.instance_42.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_42.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_42.cache(-2, -2, 418, 740);
        this.instance_43 = new lib.元件11();
        this.instance_43.parent = this;
        this.instance_43.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_43.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_43.cache(-2, -2, 418, 740);
        this.instance_44 = new lib.元件12();
        this.instance_44.parent = this;
        this.instance_44.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_44.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_44.cache(-2, -2, 418, 740);
        this.instance_45 = new lib.元件13();
        this.instance_45.parent = this;
        this.instance_45.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_45.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_45.cache(-2, -2, 418, 740);
        this.instance_46 = new lib.元件14();
        this.instance_46.parent = this;
        this.instance_46.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_46.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_46.cache(-2, -2, 418, 740);
        this.instance_47 = new lib.元件15();
        this.instance_47.parent = this;
        this.instance_47.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_47.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_47.cache(-2, -2, 418, 740);
        this.instance_48 = new lib.元件16();
        this.instance_48.parent = this;
        this.instance_48.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_48.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_48.cache(-2, -2, 418, 740);
        this.instance_49 = new lib.元件17();
        this.instance_49.parent = this;
        this.instance_49.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_49.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_49.cache(-2, -2, 418, 740);
        this.instance_50 = new lib.元件18();
        this.instance_50.parent = this;
        this.instance_50.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_50.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_50.cache(-2, -2, 418, 740);
        this.instance_51 = new lib.元件19();
        this.instance_51.parent = this;
        this.instance_51.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_51.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_51.cache(-2, -2, 418, 740);
        this.instance_52 = new lib.元件20();
        this.instance_52.parent = this;
        this.instance_52.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_52.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_52.cache(-2, -2, 418, 740);
        this.instance_53 = new lib.元件21();
        this.instance_53.parent = this;
        this.instance_53.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_53.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_53.cache(-2, -2, 418, 740);
        this.instance_54 = new lib.元件22();
        this.instance_54.parent = this;
        this.instance_54.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_54.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_54.cache(-2, -2, 418, 740);
        this.instance_55 = new lib.元件23();
        this.instance_55.parent = this;
        this.instance_55.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_55.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
        this.instance_55.cache(-2, -2, 418, 740);
        this.instance_56 = new lib.元件24();
        this.instance_56.parent = this;
        this.instance_56.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_56.alpha = 0.898;
        this.instance_56.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_56.cache(-2, -2, 418, 740);
        this.instance_57 = new lib.元件25();
        this.instance_57.parent = this;
        this.instance_57.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_57.alpha = 0.801;
        this.instance_57.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_57.cache(-2, -2, 418, 740);
        this.instance_58 = new lib.元件26();
        this.instance_58.parent = this;
        this.instance_58.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_58.alpha = 0.699;
        this.instance_58.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_58.cache(-2, -2, 418, 740);
        this.instance_59 = new lib.元件27();
        this.instance_59.parent = this;
        this.instance_59.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_59.alpha = 0.602;
        this.instance_59.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_59.cache(-2, -2, 418, 740);
        this.instance_60 = new lib.元件28();
        this.instance_60.parent = this;
        this.instance_60.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_60.alpha = 0.5;
        this.instance_60.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_60.cache(-2, -2, 418, 740);
        this.instance_61 = new lib.元件29();
        this.instance_61.parent = this;
        this.instance_61.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_61.alpha = 0.398;
        this.instance_61.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_61.cache(-2, -2, 418, 740);
        this.instance_62 = new lib.元件30();
        this.instance_62.parent = this;
        this.instance_62.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_62.alpha = 0.301;
        this.instance_62.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_62.cache(-2, -2, 418, 740);
        this.instance_63 = new lib.元件31();
        this.instance_63.parent = this;
        this.instance_63.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_63.alpha = 0.199;
        this.instance_63.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_63.cache(-2, -2, 418, 740);
        this.instance_64 = new lib.元件32();
        this.instance_64.parent = this;
        this.instance_64.setTransform(207, 368, 1, 1, 0, 0, 0, 207, 368);
        this.instance_64.alpha = 0.102;
        this.instance_64.filters = [new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)];
        this.instance_64.cache(-2, -2, 418, 740);
        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_38
            }]
        }, 72).to({
            state: [{
                t: this.instance_39
            }]
        }, 1).to({
            state: [{
                t: this.instance_40
            }]
        }, 1).to({
            state: [{
                t: this.instance_41
            }]
        }, 1).to({
            state: [{
                t: this.instance_42
            }]
        }, 1).to({
            state: [{
                t: this.instance_43
            }]
        }, 1).to({
            state: [{
                t: this.instance_44
            }]
        }, 1).to({
            state: [{
                t: this.instance_45
            }]
        }, 1).to({
            state: [{
                t: this.instance_46
            }]
        }, 1).to({
            state: [{
                t: this.instance_47
            }]
        }, 1).to({
            state: [{
                t: this.instance_48
            }]
        }, 1).to({
            state: [{
                t: this.instance_49
            }]
        }, 1).to({
            state: [{
                t: this.instance_50
            }]
        }, 1).to({
            state: [{
                t: this.instance_51
            }]
        }, 1).to({
            state: [{
                t: this.instance_52
            }]
        }, 1).to({
            state: [{
                t: this.instance_53
            }]
        }, 1).to({
            state: [{
                t: this.instance_54
            }]
        }, 1).to({
            state: [{
                t: this.instance_55
            }]
        }, 1).to({
            state: [{
                t: this.instance_56
            }]
        }, 1).to({
            state: [{
                t: this.instance_57
            }]
        }, 1).to({
            state: [{
                t: this.instance_58
            }]
        }, 1).to({
            state: [{
                t: this.instance_59
            }]
        }, 1).to({
            state: [{
                t: this.instance_60
            }]
        }, 1).to({
            state: [{
                t: this.instance_61
            }]
        }, 1).to({
            state: [{
                t: this.instance_62
            }]
        }, 1).to({
            state: [{
                t: this.instance_63
            }]
        }, 1).to({
            state: [{
                t: this.instance_64
            }]
        }, 1).to({
            state: []
        }, 1).wait(23));
        this.instance_65 = new lib.元件4();
        this.instance_65.parent = this;
        this.instance_65.setTransform(208.9, 361.7, 0.656, 0.656, 0, 0, 0, 32.1, 32);
        this.instance_65.compositeOperation = "lighter";
        this.instance_65._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(20).to({
            _off: false
        }, 0).to({
            regX: 32,
            scaleX: 1.58,
            scaleY: 1.58,
            x: 209,
            alpha: 0
        }, 33).to({
            _off: true
        }, 1).wait(68));
        this.btn = new lib.btn();
        this.btn.parent = this;
        this.btn.setTransform(207.5, -59.2, 0.739, 1.087, 0, 0, 0, 47.5, 55.2);
        this.timeline.addTween(cjs.Tween.get(this.btn).to({
            regX: 49.2,
            regY: 56.1,
            scaleX: 0.84,
            scaleY: 1.09,
            x: 207.9,
            y: 355.9
        }, 4).to({
            regX: 48.4,
            regY: 55.9,
            scaleX: 1.14,
            scaleY: 0.85,
            x: 207.3,
            y: 368.6
        }, 2).to({
            regX: 47.5,
            regY: 55.4,
            scaleX: 0.92,
            scaleY: 1.06,
            x: 207.5,
            y: 351.8
        }, 3).to({
            regX: 47.6,
            regY: 55.8,
            scaleX: 1.09,
            scaleY: 0.97,
            x: 207.4,
            y: 362.3
        }, 5).to({
            regX: 47.4,
            regY: 55.2,
            scaleX: 1,
            scaleY: 1,
            y: 360.2
        }, 5).wait(35).to({
            regX: 47.6,
            regY: 55.3,
            scaleX: 0.82,
            rotation: 15,
            x: 224.9,
            y: 360.3
        }, 2).to({
            regX: 47.5,
            regY: 55.4,
            scaleX: 1.07,
            scaleY: 0.88,
            rotation: -15,
            x: 197.9,
            y: 362.1
        }, 2).to({
            regX: 47.7,
            regY: 55.5,
            scaleX: 0.87,
            scaleY: 0.83,
            rotation: 15.7,
            x: 235,
            y: 365.9
        }, 2).to({
            regX: 47.5,
            regY: 55.3,
            scaleX: 0.88,
            scaleY: 1.07,
            rotation: -30,
            x: 185.4,
            y: 360.1
        }, 3).to({
            regX: 47.6,
            regY: 55.5,
            scaleX: 1.08,
            scaleY: 0.83,
            rotation: 15,
            x: 224.2,
            y: 367.7
        }, 3).to({
            regY: 55.3,
            scaleX: 0.89,
            scaleY: 1.07,
            rotation: -15,
            x: 196.4,
            y: 359.7
        }, 3).to({
            regY: 55.4,
            scaleX: 1,
            scaleY: 0.93,
            rotation: 17.9,
            x: 220.8,
            y: 356.3
        }, 3).to({
            regX: 46.5,
            regY: 55.5,
            scaleX: 0.26,
            scaleY: 0.5,
            rotation: -15,
            x: 207.4,
            y: 360.3
        }, 3).to({
            _off: true
        }, 1).wait(46));
        this.instance_66 = new lib.元件3();
        this.instance_66.parent = this;
        this.instance_66.setTransform(207, 368.2, 2.911, 3.291, 0, 0, 0, 131, 206.1);
        new cjs.ButtonHelper(this.instance_66, 0, 1, 1);
        this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(87).to({
            alpha: 0
        }, 8).wait(27))
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(32.6, 57.9, 762.8, 1356.1);
    lib.properties = {
        width: 414,
        height: 736,
        fps: 24,
        color: "#454545",
        opacity: 0,
        webfonts: {},
        manifest: [{
            src: "images/RedAnimate_atlas_.png",
            id: "RedAnimate_atlas_"
        }],
        preloads: []
    }
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;
/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchend", function(sym, e) {
         // insert code to be run when a user stops touching an object (for touch devices only)
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchmove", function(sym, e) {
         // insert code to be run when a user drags an object (for touch devices only)
         if ( e.pageX == undefined ) {
         	e.preventDefault();
         
         	var touch = e.originalEvent.touches [0] || e.originalEvent.changedTouches [0];
         
         	sym.getComposition().getStage().onSwipe( touch.pageX );
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         if ( e.pageX == undefined ) {
         	e.preventDefault();
         
         	var touch = e.originalEvent.touches [0] || e.originalEvent.changedTouches [0];
         
         	sym.startPos = touch.pageX;
         }

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stageWidth = sym.$('Stage').width();
         sym.animTimelineLength = 10000;
         
         var curPos = 0;
         var parallax = sym.getSymbol("Paralex");
         
         sym.onSwipe = function(pos) {
         	var diff = sym.startPos - pos;
         	curPos += diff / 200;
         
         	if (curPos < 0) curPos = 0;
         	if (curPos > 2048) curPos = 1536;
         
         	calculatedPos = (curPos / sym.stageWidth) * sym.animTimelineLength;
         
         	// scrub to corresponding anim frame
         	parallax.stop(calculatedPos);
         };
         
         
         //shake
         yepnope({
         	nope: [
         'bower_components/shake.js/shake.js',
         'bower_components/greensock/src/uncompressed/TweenMax.js'
         ],
         	complete: init
         });
         //when yepnope has loaded everything execute init();
         function init() {
         
         }
         
         
         var count = 0;
         
         
         
         //function to call when shake occurs
         function shakeEventDidOccur() {
         	console.log('i was shaken');
         	var foreground = parallax.getSymbol("wholeforeground");
         	var midground = parallax.getSymbol("wholemidground");
         	var background = parallax.getSymbol("wholebackground");
         
         	// select a dom element
         	count++;
         
         	if (count == 1) {
         
         		foreground.getSymbol("lunamove").play();
         
         		//____first scene___ puma
         		foreground.$("FGpumagirls").show();
         
         		//____scene 2 planes____
         		midground.getSymbol("objectsmidground").$("MGplane12").show();
         		midground.getSymbol("objectsmidground").getSymbol("MGplane12").play();
         
         		//____scene 3 - lunatics___
         		//show sitting luna
         		background.$("sittingluna").show();
         		background.$("BGlunatic2").show();
         		background.getSymbol("BGlunatic2").play();
         
         		//______scene 4 old man_____
         		// Show an element
         		midground.getSymbol("objectsmidground").$("oldman5").show();
         		midground.getSymbol("objectsmidground").getSymbol("oldman5").play();
         
         
         		//____scene 5 - sailor_____
         		midground.getSymbol("objectsmidground").$("sailor2").show();
         
         
         		//___scene 6 (bench)
         		// Show an element
         		midground.$("lunabehindtree1").show();
         
         
         	} else if (count == 2) {
         
         		//____scene 6 - bench
         		midground.$("lunabehindtree1").hide();
         		midground.$("bencholdman").show();
         
         
         
         		//_____first scene____Puma:
         		//show BGpuma1 & 2
         		background.$("BGpuma1").show();
         		background.getSymbol("part1").$("BGpuma1Copy").show();
         
         		//____second scene____Planes:
         		//show planes 3&4
         		background.$("plane3").show();
         		background.$("plane42").show();
         
         		//scene 3 - lunatics ____
         		background.$("sittingluna2").show();
         		background.getSymbol("sittingluna2").getSymbol("sprite").play();
         		background.getSymbol("BGluna2").$("BGlunaticCopy").show();
         		background.$("sittingluna").show();
         
         
         		//____scene 4 old man____
         		midground.getSymbol("objectsmidground").$("oldman3").show();
         		midground.getSymbol("objectsmidground").getSymbol("oldman3").play();
         
         		//scene 5 - Sailor_____
         		midground.$("sailor3").show();
         
         		//Scene 6 - bench
         
         	} else if (count == 3) {
         
         		//____scene 6 - bench
         		midground.$("bencholdman").hide();
         		midground.getSymbol("objectsmidground").$("sailorsit3").show();
         
         
         
         
         		//___first scene: Puma walk__
         		midground.$("Mgpumagirl2").show();
         
         		//___second scene: planes__
         		background.$("plane2").show();
         
         		//___scene 4 - old man___
         		midground.getSymbol("objectsmidground").$("crowdmen2").show();
         		midground.getSymbol("objectsmidground").getSymbol("crowdmen2").play();
         
         
         		//scene 3 -- Lunatics___
         		background.$("BGlunatic3").show();
         		background.$("BGlunatic4").show();
         
         		//___scene 6 - BENCH
         		midground.$("bencholdman").hide();
         
         	} else if (count == 4) {
         
         		//____scene 6 ____bench
         		midground.$("bencholdman").show();
         		midground.$("lunabehindtree1").show();
         
         
         		//_____stage 1 : PUMA______
         		// hide all except midpuma1
         		background.$("BGpuma1").hide();
         		background.getSymbol("part1").$("BGpuma1Copy").hide();
         
         
         
         		//___scene 3 : lunatics___
         		// show sitting luna3
         		background.$("sittingluna3").show();
         
         
         
         		//___scene 4 - old man
         		//___planes___
         		midground.getSymbol("objectsmidground").$("MGplane3").show();
         		midground.getSymbol("objectsmidground").getSymbol("MGplane3").play();
         		midground.getSymbol("objectsmidground").$("crowdmen2").hide();
         		midground.getSymbol("objectsmidground").$("oldman5").hide();
         		midground.getSymbol("objectsmidground").$("oldman3").hide();
         
         	} else if (count == 5) {
         
         		midground.$("Mgpumagirl2").hide();
         
         		//___planes___
         		background.$("plane3").hide();
         		background.$("plane42").hide();
         		midground.getSymbol("objectsmidground").$("MGplane12").hide();
         
         
         
         		midground.$("lunabehindtree2").show();
         
         		midground.$("sailor4").show();
         		midground.$("endoldman2").show();
         
         		//Lunatics
         
         		background.getSymbol("BGluna2").$("BGlunaticCopy2").show();
         
         
         	} else if (count == 6) {
         		//Scene 6 ____bench
         
         		midground.$("sailor4").hide();
         
         		midground.$("bencholdman").hide();
         		midground.$("endoldman2").hide();
         		midground.$("lunabehindtree1").hide();
         		midground.$("lunabehindtree2").hide();
         		midground.getSymbol("objectsmidground").$("sailorsit3").hide();
         
         		//____PUMA_____
         
         		foreground.$("FGpumagirls").hide();
         
         		//Planes_____
         		midground.getSymbol("objectsmidground").$("MGplane3").hide();
         
         		//lunatics
         
         
         		background.$("sittingluna").hide();
         
         		// Set a toggle to hide or show an element
         		background.$("BGlunatic2").toggle();
         
         		background.$("sittingluna2").hide();
         		background.$("BGlunatic3").hide();
         		background.$("BGlunatic4").hide();
         		background.$("sittingluna3").hide();
         
         	} else if (count == 7) {
         		// Hide an element
         		background.$("plane2").hide();
         
         		count = 0;
         	}
         }
         
         
         
         // shakeEventDidOccur();
         window.addEventListener('shake', shakeEventDidOccur, false);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'foreground'
   (function(symbolName) {   
   
   })("foreground");
   //Edge symbol end:'foreground'

   //=========================================================
   
   //Edge symbol: 'midground'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1149, function(sym, e) {
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15, function(sym, e) {
         
      });
      //Edge binding end

   })("midground");
   //Edge symbol end:'midground'

   //=========================================================
   
   //Edge symbol: 'Background'
   (function(symbolName) {   
   
   })("Background");
   //Edge symbol end:'Background'

   //=========================================================
   
   //Edge symbol: 'Paralex'
   (function(symbolName) {   
   
   })("Paralex");
   //Edge symbol end:'Paralex'

   //=========================================================
   
   //Edge symbol: 'BGtrees'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         
      });
      //Edge binding end

   })("BGtrees");
   //Edge symbol end:'BGtrees'

   //=========================================================
   
   //Edge symbol: 'wholebackground'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         
         sym.getSymbol("BGluna2").getSymbol("BGlunaticCopy").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         sym.getSymbol("BGluna2").getSymbol("BGlunaticCopy2").play();

      });
      //Edge binding end

   })("wholebackground");
   //Edge symbol end:'wholebackground'

   //=========================================================
   
   //Edge symbol: 'CurryWurst'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("CurryWurst");
   //Edge symbol end:'CurryWurst'

   //=========================================================
   
   //Edge symbol: 'tattooshop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("tattooshop");
   //Edge symbol end:'tattooshop'

   //=========================================================
   
   //Edge symbol: 'objectsmidground'
   (function(symbolName) {   
   
   })("objectsmidground");
   //Edge symbol end:'objectsmidground'

   //=========================================================
   
   //Edge symbol: 'wholemidground'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${Shopumagirls}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

   })("wholemidground");
   //Edge symbol end:'wholemidground'

   //=========================================================
   
   //Edge symbol: 'pumagirl1'
   (function(symbolName) {   
   
   })("pumagirl1");
   //Edge symbol end:'pumagirl1'

   //=========================================================
   
   //Edge symbol: 'wholeforeground'
   (function(symbolName) {   
   
      

   })("wholeforeground");
   //Edge symbol end:'wholeforeground'

   //=========================================================
   
   //Edge symbol: 'spritesheet'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("spritesheet");
   //Edge symbol end:'spritesheet'

   //=========================================================
   
   //Edge symbol: 'FGpumagirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("FGpumagirl");
   //Edge symbol end:'FGpumagirl'

   //=========================================================
   
   //Edge symbol: 'FGpumagirls'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("FGpumagirls");
   //Edge symbol end:'FGpumagirls'

   //=========================================================
   
   //Edge symbol: 'BGlunatic'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("BGlunatic");
   //Edge symbol end:'BGlunatic'

   //=========================================================
   
   //Edge symbol: 'sittingluna'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("sittingluna");
   //Edge symbol end:'sittingluna'

   //=========================================================
   
   //Edge symbol: 'srite'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("srite");
   //Edge symbol end:'srite'

   //=========================================================
   
   //Edge symbol: 'Fsmoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1473, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("Fsmoke");
   //Edge symbol end:'Fsmoke'

   //=========================================================
   
   //Edge symbol: 'plane'
   (function(symbolName) {   
   
   })("plane");
   //Edge symbol end:'plane'

   //=========================================================
   
   //Edge symbol: 'BGplane1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("BGplane1");
   //Edge symbol end:'BGplane1'

   //=========================================================
   
   //Edge symbol: 'lunaticc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("lunaticc");
   //Edge symbol end:'lunaticc'

   //=========================================================
   
   //Edge symbol: 'sprite'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("sprite");
   //Edge symbol end:'sprite'

   //=========================================================
   
   //Edge symbol: 'lunamove'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("lunamove");
   //Edge symbol end:'lunamove'

   //=========================================================
   
   //Edge symbol: 'oldman'
   (function(symbolName) {   
   
      

   })("oldman");
   //Edge symbol end:'oldman'

   //=========================================================
   
   //Edge symbol: 'sailor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("sailor");
   //Edge symbol end:'sailor'

   //=========================================================
   
   //Edge symbol: 'Shopumagirls'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("Shopumagirls");
   //Edge symbol end:'Shopumagirls'

   //=========================================================
   
   //Edge symbol: 'sailorsit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("sailorsit");
   //Edge symbol end:'sailorsit'

   //=========================================================
   
   //Edge symbol: 'sitdowngirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("sitdowngirl");
   //Edge symbol end:'sitdowngirl'

   //=========================================================
   
   //Edge symbol: 'treeluna'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2096, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("treeluna");
   //Edge symbol end:'treeluna'

   //=========================================================
   
   //Edge symbol: 'behindtreeluna'
   (function(symbolName) {   
   
   })("behindtreeluna");
   //Edge symbol end:'behindtreeluna'

   //=========================================================
   
   //Edge symbol: 'SKY'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 390000, function(sym, e) {
         
         
         
         sym.play(0);

      });
      //Edge binding end

   })("SKY");
   //Edge symbol end:'SKY'

   //=========================================================
   
   //Edge symbol: 'leaf'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("leaf");
   //Edge symbol end:'leaf'

   //=========================================================
   
   //Edge symbol: 'leaaf'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         
         sym.play();
         x

      });
      //Edge binding end

   })("leaaf");
   //Edge symbol end:'leaaf'

   //=========================================================
   
   //Edge symbol: 'BGpuma1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53018, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("BGpuma1");
   //Edge symbol end:'BGpuma1'

   //=========================================================
   
   //Edge symbol: 'Mgpumagirl2'
   (function(symbolName) {   
   
   })("Mgpumagirl2");
   //Edge symbol end:'Mgpumagirl2'

   //=========================================================
   
   //Edge symbol: 'walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("walk");
   //Edge symbol end:'walk'

   //=========================================================
   
   //Edge symbol: 'BGplane3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64043, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("BGplane3");
   //Edge symbol end:'BGplane3'

   //=========================================================
   
   //Edge symbol: 'plane4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("plane4");
   //Edge symbol end:'plane4'

   //=========================================================
   
   //Edge symbol: 'pumagirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("pumagirl");
   //Edge symbol end:'pumagirl'

   //=========================================================
   
   //Edge symbol: 'MGplane1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("MGplane1");
   //Edge symbol end:'MGplane1'

   //=========================================================
   
   //Edge symbol: 'Planetext'
   (function(symbolName) {   
   
   })("Planetext");
   //Edge symbol end:'Planetext'

   //=========================================================
   
   //Edge symbol: 'planetext2'
   (function(symbolName) {   
   
   })("planetext2");
   //Edge symbol end:'planetext2'

   //=========================================================
   
   //Edge symbol: 'crowdmen'
   (function(symbolName) {   
   
   })("crowdmen");
   //Edge symbol end:'crowdmen'

   //=========================================================
   
   //Edge symbol: 'shakedevice'
   (function(symbolName) {   
   
   })("shakedevice");
   //Edge symbol end:'shakedevice'

   //=========================================================
   
   //Edge symbol: 'shakee'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.play();
      });
      //Edge binding end

   })("shakee");
   //Edge symbol end:'shakee'

   //=========================================================
   
   //Edge symbol: 'sailorsmoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1696, function(sym, e) {
         sym.play();
      });
      //Edge binding end

   })("sailorsmoke");
   //Edge symbol end:'sailorsmoke'

   //=========================================================
   
   //Edge symbol: 'oldmanend'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.play();

      });
      //Edge binding end

   })("oldmanend");
   //Edge symbol end:'oldmanend'

   //=========================================================
   
   //Edge symbol: 'meadowStripe'
   (function(symbolName) {   
   
   })("meadowStripe");
   //Edge symbol end:'meadowStripe'

   //=========================================================
   
   //Edge symbol: 'asphaltStripe'
   (function(symbolName) {   
   
   })("asphaltStripe");
   //Edge symbol end:'asphaltStripe'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-46349536");
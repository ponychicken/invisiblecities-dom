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
         
         sym.onSwipe = function(pos) {
         	var diff = sym.startPos - pos;
         	curPos += diff / 1000;
         
         	if (curPos < 0) curPos = 0;
         	if (curPos > 2048) curPos = 1536;
         
         	calculatedPos = (curPos / sym.stageWidth) * sym.animTimelineLength;
         
         	// scrub to corresponding anim frame
         
         	sym.getSymbol("Paralex").stop(calculatedPos);
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
         	var parallax = sym.getSymbol("Paralex");
         	
         	// select a dom element
         	count++;
         	//var ele = sym.getSymbol('girlhead2').getSymbolElement();
         	if (count == 1) {
         
         
         
         		parallax.getSymbol("wholeforeground").getSymbol("lunamove").play();
         
         
         		//____first scene___ puma
         		parallax.getSymbol("wholeforeground").$("FGpumagirls").show();
         
         
         		//____scene 2 planes____
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("MGplane12").show();
         
         
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").getSymbol("MGplane12").play();
         
         
         
         		//____scene 3 - linatics___
         
         		//show sitting luna
         		parallax.getSymbol("Wholebackground").$("sittingluna").show();
         		parallax.getSymbol("Wholebackground").$("BGlunatic2").show();
         		parallax.getSymbol("Wholebackground").getSymbol("BGlunatic2").play();
         
         		//______scene 4 old man_____
         
         		// Show an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("oldman5").show();
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").getSymbol("oldman5").play();
         
         
         		//____scene 5 - sailor_____
         
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("sailor2").show();
         
         
         		//___scene 6 (bench)
         
         		// Show an element
         		parallax.getSymbol("wholemidground").$("lunabehindtree1").show();
         
         
         
         
         	} else if (count == 2) {
         
         		//____scene 6 - bench
         
         		parallax.getSymbol("wholemidground").$("lunabehindtree1").hide();
         		parallax.getSymbol("wholemidground").$("bencholdman").show();
         
         
         
         		//_____first scene____Puma:
         
         		//show BGpuma1 & 2
         		parallax.getSymbol("Wholebackground").$("BGpuma1").show();
         
         		// Show an element
         		parallax.getSymbol("Wholebackground").getSymbol("part1").$("BGpuma1Copy").show();
         
         		//____second scene____Planes:
         
         
         		//show planes 3&4
         		parallax.getSymbol("Wholebackground").$("plane3").show();
         		parallax.getSymbol("Wholebackground").$("plane42").show();
         
         		//scene 3 - lunatics ____
         		// Show an element
         		parallax.getSymbol("Wholebackground").$("sittingluna2").show();
         		parallax.getSymbol("Wholebackground").getSymbol("sittingluna2").getSymbol("sprite").play();
         		parallax.getSymbol("Wholebackground").getSymbol("BGluna2").$("BGlunaticCopy").show();
         		parallax.getSymbol("Wholebackground").$("sittingluna").show();
         
         
         		//____scene 4 old man____
         
         
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("oldman3").show();
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").getSymbol("oldman3").play();
         
         		//scene 5 - Sailor_____
         
         
         		// Show an element
         		parallax.getSymbol("wholemidground").$("sailor3").show();
         
         		//Scene 6 - bench
         
         
         		// Hide an element
         
         
         
         
         
         	} else if (count == 3) {
         
         		//____scene 6 - bench
         
         
         		parallax.getSymbol("wholemidground").$("bencholdman").hide();
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("sailorsit3").show();
         
         
         
         
         		//___first scene: Puma walk__
         
         
         
         		// Show an element
         		parallax.getSymbol("wholemidground").$("Mgpumagirl2").show();
         
         
         
         		//___second scene: planes__
         
         		parallax.getSymbol("Wholebackground").$("plane2").show();
         
         		//___scene 4 - old man___
         
         
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("crowdmen2").show();
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").getSymbol("crowdmen2").play();
         
         
         		//scene 3 -- Lunatics___
         
         
         
         		// Show an element
         		parallax.getSymbol("Wholebackground").$("BGlunatic3").show();
         
         		// Show an element
         		parallax.getSymbol("Wholebackground").$("BGlunatic4").show();
         
         
         		//___scene 6 - BENCH
         		parallax.getSymbol("wholemidground").$("bencholdman").hide();
         
         	} else if (count == 4) {
         
         		//____scene 6 ____bench
         
         
         		// Show an element
         		parallax.getSymbol("wholemidground").$("bencholdman").show();
         		parallax.getSymbol("wholemidground").$("lunabehindtree1").show();
         
         
         		//_____stage 1 : PUMA______
         		//hide all except midpuma1
         
         		// Hide an element
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("BGpuma1").hide();
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").getSymbol("part1").$("BGpuma1Copy").hide();
         
         
         
         		//___scene 3 : lunatics___
         
         		//show sitting luna3
         
         
         		// Show an element
         		parallax.getSymbol("Wholebackground").$("sittingluna3").show();
         
         
         
         		//___scene 4 - old man
         		//___planes___
         
         
         		// Show an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("MGplane3").show();
         
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").getSymbol("MGplane3").play();
         
         
         
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("crowdmen2").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("oldman5").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("oldman3").hide();
         
         		//___scene 6 bench
         
         
         
         
         
         	} else if (count == 5) {
         
         
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").$("Mgpumagirl2").hide();
         
         		//___planes___
         
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("plane3").hide();
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("plane42").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("MGplane12").hide();
         
         
         
         
         
         		// Show an element
         		parallax.getSymbol("wholemidground").$("lunabehindtree2").show();
         
         		parallax.getSymbol("wholemidground").$("sailor4").show();
         		parallax.getSymbol("wholemidground").$("endoldman2").show();
         
         		//Lunatics
         
         		parallax.getSymbol("Wholebackground").getSymbol("BGluna2").$("BGlunaticCopy2").show();
         
         
         	} else if (count == 6) {
         		//Scene 6 ____bench
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").$("sailor4").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").$("bencholdman").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").$("endoldman2").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").$("lunabehindtree1").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").$("lunabehindtree2").hide();
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("sailorsit3").hide();
         
         		//____PUMA_____
         
         
         		// Hide an element
         		parallax.getSymbol("wholeforeground").$("FGpumagirls").hide();
         
         		//Planes_____
         
         
         		// Hide an element
         		parallax.getSymbol("wholemidground").getSymbol("objectsmidground").$("MGplane3").hide();
         
         		//lunatics
         
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("sittingluna").hide();
         
         		// Set a toggle to hide or show an element
         		parallax.getSymbol("Wholebackground").$("BGlunatic2").toggle();
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("sittingluna2").hide();
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("BGlunatic3").hide();
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("BGlunatic4").hide();
         
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("sittingluna3").hide();
         
         	} else if (count == 7) {
         		// Hide an element
         		parallax.getSymbol("Wholebackground").$("plane2").hide();
         
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
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1149, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("midground");
   //Edge symbol end:'midground'

   //=========================================================
   
   //Edge symbol: 'background'
   (function(symbolName) {   
   
   })("background");
   //Edge symbol end:'background'

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
         // insert code here
      });
      //Edge binding end

   })("BGtrees");
   //Edge symbol end:'BGtrees'

   //=========================================================
   
   //Edge symbol: 'Wholebackground'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.getSymbol("BGluna2").getSymbol("BGlunaticCopy").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.getSymbol("BGluna2").getSymbol("BGlunaticCopy2").play();

      });
      //Edge binding end

   })("Wholebackground");
   //Edge symbol end:'Wholebackground'

   //=========================================================
   
   //Edge symbol: 'CurryWurst'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("CurryWurst");
   //Edge symbol end:'CurryWurst'

   //=========================================================
   
   //Edge symbol: 'tattooshop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

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
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("spritesheet");
   //Edge symbol end:'spritesheet'

   //=========================================================
   
   //Edge symbol: 'FGpumagirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("FGpumagirl");
   //Edge symbol end:'FGpumagirl'

   //=========================================================
   
   //Edge symbol: 'FGpumagirls'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("FGpumagirls");
   //Edge symbol end:'FGpumagirls'

   //=========================================================
   
   //Edge symbol: 'BGlunatic'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("BGlunatic");
   //Edge symbol end:'BGlunatic'

   //=========================================================
   
   //Edge symbol: 'BGluna2'
   (function(symbolName) {   
   
   })("BGluna2");
   //Edge symbol end:'BGluna2'

   //=========================================================
   
   //Edge symbol: 'sittingluna'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("sittingluna");
   //Edge symbol end:'sittingluna'

   //=========================================================
   
   //Edge symbol: 'srite'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("srite");
   //Edge symbol end:'srite'

   //=========================================================
   
   //Edge symbol: 'Bigluna'
   (function(symbolName) {   
   
   })("Bigluna");
   //Edge symbol end:'Bigluna'

   //=========================================================
   
   //Edge symbol: 'smoke'
   (function(symbolName) {   
   
   })("smoke");
   //Edge symbol end:'smoke'

   //=========================================================
   
   //Edge symbol: 'Fsmoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1473, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

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
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("BGplane1");
   //Edge symbol end:'BGplane1'

   //=========================================================
   
   //Edge symbol: 'lunaticc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("lunaticc");
   //Edge symbol end:'lunaticc'

   //=========================================================
   
   //Edge symbol: 'sprite'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("sprite");
   //Edge symbol end:'sprite'

   //=========================================================
   
   //Edge symbol: 'lunamove'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // insert code here
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
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("sailor");
   //Edge symbol end:'sailor'

   //=========================================================
   
   //Edge symbol: 'Shopumagirls'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Shopumagirls");
   //Edge symbol end:'Shopumagirls'

   //=========================================================
   
   //Edge symbol: 'sailorsit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("sailorsit");
   //Edge symbol end:'sailorsit'

   //=========================================================
   
   //Edge symbol: 'sitdowngirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("sitdowngirl");
   //Edge symbol end:'sitdowngirl'

   //=========================================================
   
   //Edge symbol: 'treeluna'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2096, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

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
   
   //Edge symbol: 'behindtreeluna2'
   (function(symbolName) {   
   
   })("behindtreeluna2");
   //Edge symbol end:'behindtreeluna2'

   //=========================================================
   
   //Edge symbol: 'lunasprite'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2512, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("lunasprite");
   //Edge symbol end:'lunasprite'

   //=========================================================
   
   //Edge symbol: 'SKY'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 390000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(000);

      });
      //Edge binding end

   })("SKY");
   //Edge symbol end:'SKY'

   //=========================================================
   
   //Edge symbol: 'leaf'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("leaf");
   //Edge symbol end:'leaf'

   //=========================================================
   
   //Edge symbol: 'leaaf'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         // insert code here
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
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("BGpuma1");
   //Edge symbol end:'BGpuma1'

   //=========================================================
   
   //Edge symbol: 'BGPUMAGIRLS2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90134, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("BGPUMAGIRLS2");
   //Edge symbol end:'BGPUMAGIRLS2'

   //=========================================================
   
   //Edge symbol: 'Mgpumagirl2'
   (function(symbolName) {   
   
   })("Mgpumagirl2");
   //Edge symbol end:'Mgpumagirl2'

   //=========================================================
   
   //Edge symbol: 'walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("walk");
   //Edge symbol end:'walk'

   //=========================================================
   
   //Edge symbol: 'MGplane'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("MGplane");
   //Edge symbol end:'MGplane'

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
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("plane4");
   //Edge symbol end:'plane4'

   //=========================================================
   
   //Edge symbol: 'pumagirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("pumagirl");
   //Edge symbol end:'pumagirl'

   //=========================================================
   
   //Edge symbol: 'MGplane1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("MGplane1");
   //Edge symbol end:'MGplane1'

   //=========================================================
   
   //Edge symbol: 'shaketext'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("shaketext");
   //Edge symbol end:'shaketext'

   //=========================================================
   
   //Edge symbol: 'shake'
   (function(symbolName) {   
   
   })("shake");
   //Edge symbol end:'shake'

   //=========================================================
   
   //Edge symbol: 'shakerejog'
   (function(symbolName) {   
   
   })("shakerejog");
   //Edge symbol end:'shakerejog'

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
   
   //Edge symbol: 'shakeretorejog'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("shakeretorejog");
   //Edge symbol end:'shakeretorejog'

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
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("shakee");
   //Edge symbol end:'shakee'

   //=========================================================
   
   //Edge symbol: 'sailorsmoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1696, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("sailorsmoke");
   //Edge symbol end:'sailorsmoke'

   //=========================================================
   
   //Edge symbol: 'oldmanend'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("oldmanend");
   //Edge symbol end:'oldmanend'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-46349536");
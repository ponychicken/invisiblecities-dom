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
      
      
      Symbol.bindElementAction(compId, symbolName, "${button2}", "click", function(sym, e) {
         sym.getSymbol("rectangle").play();
      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'cityoverview'
   (function(symbolName) {   
   
   })("cityoverview");
   //Edge symbol end:'cityoverview'

   //=========================================================
   
   //Edge symbol: 'wholecity'
   (function(symbolName) {   
   
   })("wholecity");
   //Edge symbol end:'wholecity'

   //=========================================================
   
   //Edge symbol: 'sittingluna'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(000);
      });
      //Edge binding end

   })("sittingluna");
   //Edge symbol end:'sittingluna'

   //=========================================================
   
   //Edge symbol: 'bgcurrywurst'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(000);
      });
      //Edge binding end

   })("bgcurrywurst");
   //Edge symbol end:'bgcurrywurst'

   //=========================================================
   
   //Edge symbol: 'tattooshop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(000);
      });
      //Edge binding end

   })("tattooshop");
   //Edge symbol end:'tattooshop'

   //=========================================================
   
   //Edge symbol: 'pumagirl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(000);
      });
      //Edge binding end

   })("pumagirl");
   //Edge symbol end:'pumagirl'

   //=========================================================
   
   //Edge symbol: 'wholecity1'
   (function(symbolName) {   
   
   })("wholecity1");
   //Edge symbol end:'wholecity1'

   //=========================================================
   
   //Edge symbol: 'pumagirl1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.play();
      });
      //Edge binding end

   })("pumagirl1");
   //Edge symbol end:'pumagirl1'

   //=========================================================
   
   //Edge symbol: 'leaf'
   (function(symbolName) {   
   
   })("leaf");
   //Edge symbol end:'leaf'

   //=========================================================
   
   //Edge symbol: 'fallingleaf'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.play();
      });
      //Edge binding end

   })("fallingleaf");
   //Edge symbol end:'fallingleaf'

   //=========================================================
   
   //Edge symbol: 'oldman'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.play(0);
      });
      //Edge binding end

   })("oldman");
   //Edge symbol end:'oldman'

   //=========================================================
   
   //Edge symbol: 'rectangle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbol("memorytext").play("playhere");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         window.open("Zirma.html", "_self");
      });
      //Edge binding end

   })("rectangle");
   //Edge symbol end:'rectangle'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${button}", "click", function(sym, e) {
         sym.getSymbol("rectangle").play();
      });
      //Edge binding end

   })("button");
   //Edge symbol end:'button'

   //=========================================================
   
   //Edge symbol: 'memorytext'
   (function(symbolName) {   
   
   })("memorytext");
   //Edge symbol end:'memorytext'

   //=========================================================
   
   //Edge symbol: 'sailorsit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();
      });
      //Edge binding end

   })("sailorsit");
   //Edge symbol end:'sailorsit'

   //=========================================================
   
   //Edge symbol: 'sailorsmoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sailorsmoke");
   //Edge symbol end:'sailorsmoke'

   //=========================================================
   
   //Edge symbol: 'sailor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.play(0);
      });
      //Edge binding end

   })("sailor");
   //Edge symbol end:'sailor'

   //=========================================================
   
   //Edge symbol: 'plane1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.play();
      });
      //Edge binding end

   })("plane1");
   //Edge symbol end:'plane1'

   //=========================================================
   
   //Edge symbol: 'plane3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39903, function(sym, e) {
         sym.play();
      });
      //Edge binding end

   })("plane3");
   //Edge symbol end:'plane3'

   //=========================================================
   
   //Edge symbol: 'groupmen1'
   (function(symbolName) {   
   
   })("groupmen1");
   //Edge symbol end:'groupmen1'

   //=========================================================
   
   //Edge symbol: 'groupmen2'
   (function(symbolName) {   
   
   })("groupmen2");
   //Edge symbol end:'groupmen2'

   //=========================================================
   
   //Edge symbol: 'bgluna1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play(0);
      });
      //Edge binding end

   })("bgluna1");
   //Edge symbol end:'bgluna1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-115245901");
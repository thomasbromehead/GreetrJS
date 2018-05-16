(function(global, $){

   var Greeter = function(firstName, lastName, language){
      return new Greeter.init(firstName, lastName, language);
   }
   //This never gets exposed, brought into Greetr.init through closure.
   var supportedLangs = ['en', 'es'];

   Greeter.prototype = {};

   Greeter.init = function(firstName, lastName, language){
      var self = this;
      self.firstName = firstName || "John";
      self.lastName = lastName || "Doe";
      self.language = language || "en";
   }
   //Set prototype of returned object equal to constructor's prototype
   Greetr.prototype = Greetr.init.prototype;

   //Expose G$ to the window object, shorthand for calling Greetr
   global.Greetr = global.G$ = Greetr;

}(window, $));
(function(global, $){

   var Greeter = function(firstName, lastName, language){
      return new Greeter.init(firstName, lastName, language);
   }

   Greeter.prototype = {};

   Greeter.init = function(firstName, lastName, language){
      var self = this;
      self.firstName = firstName || "John";
      self.lastName = lastName || "Doe";
      self.language = language || "en";
   }

}(window, $));
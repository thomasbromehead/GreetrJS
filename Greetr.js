(function(global, $){

   var Greetr = function(firstName, lastName, language){
      return new Greetr.init(firstName, lastName, language);
   }
   //This never gets exposed, brought into Greetr.init through closure.
   var supportedLangs = ['en', 'es'];

   var greetings = {
      en: 'Hello',
      es: 'Hola'
   };

   var formalGreetings = {
      en: "Greetings",
      es: 'Saludos'
   };

   var logMessages = {
      en: 'Logged in',
      es: 'Inicio sesion'
   }
   //End of closure objects

   //Add methods exposed inside the prototype. 
   //"This" keyword inside init will point to this prototype.
   // Adding methods here save memory and power.
   Greetr.prototype = {

      fullName: function() {
         return this.firstName + ' ' + this.lastName;
      },

      validate: function() {
         //"this" refers to the object that's calling the function. Will look at its own language through reflection.
         if (supportedLangs.indexOf(this.language) === -1) {
            throw "Invalid language";
         }
      },

      greeting: function() {
         return greetings[this.language] + ' ' + this.firstName + '!';
      },

      formalGreeting: function() {
         return formalGreetings[this.language] + ' ' + this.fullName();
      },

      greet: function(formal) {
         var msg;

         //if undefined or null it will be coerced to 'false'
         if (formal) {
            msg = this.formalGreeting();
         }
         else {
            msg = this.greeting();
         }
         if (console) {
            console.log(msg);
         }

         //'this' refers to the calling object at execution time
         //Makes the methods chainable
         return this;
      },
      
      log: function() {
         if(console) {
            console.log(logMessages[this.language] + ': ' + this.fullName());
         }
         //Make it chainable
         return this;
      },

      setLanguage: function(newLanguage){
         this.language = newLanguage;

         this.validate();

         //make chainable
         return this;
      }


   };

   Greetr.init = function(firstName, lastName, language){
      var self = this;
      self.firstName = firstName || "John";
      self.lastName = lastName || "Doe";
      self.language = language || "en";
   }
   //Set prototype of returned object equal to constructor's prototype
   //Only works in this way, opposite generates an error.
   Greetr.init.prototype = Greetr.prototype;

   //Expose G$ to the window object, shorthand for calling Greetr
   global.Greetr = global.G$ = Greetr;

}(window, jQuery));

(function () {

    var names = ["Nimal", "John", "Jenny", "Jason", "Prasad", "Kamal", "Larry", "Paula", "Laura", "Jimmy"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();

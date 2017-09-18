$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentence= ["formdata"];
    var newSentence = [];
    sentence.forEach(function(word) {
      var userInput = $("input#" + word).val();


      var splitted = userInput.split(" ");
      splitted.forEach(function(split) {
        newSentence.push(split);
      });


    });

    var bigwords = [];
    // console.log(newSentence);

    newSentence.forEach(function(part) {

      if (part.length >= 3) {
        bigwords.push(part);
      }
    });



    var bigwords2 = bigwords.reverse().join(" ");
    alert(bigwords2);



    event.preventDefault();

    });
  });

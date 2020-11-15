var questions = ["Do you understand the work that is demonstrated today?", "Would you like an extension?", "Would you give me a 5 star rating?", "Am I your favorite lecture?"];

var no = [];
var maybe = [];
var yes = [];

var counter = 0;

$(function () {

  function update() {
    $(".text-1").text(no[counter]);
    $(".text-2").text(maybe[counter]);
    $(".text-3").text(yes[counter]); 
  };
   
  function globalReset() {
    for (let i = 0; i < questions.length; i++) {
      no[i]=0
      maybe[i]=0
      yes[i]=0   
    } 
  };

  for (let i = 0; i < questions.length; i++) {
    no.push(0)
    maybe.push(0)
    yes.push(0)    
  }

  update();

  console.log(questions[counter]);
  console.log(no.length);

  $('#next').click(function () {
    counter++
    if (counter > questions.length-1){
      counter = questions.length-1
    }
    console.log(counter)
    con = counter + 1;
    $("#question").text("Question "+con);
      console.log(questions[counter]);
      $("#question-change").text(questions[counter]); 
      update();
  });

  $('#back').click(function () {
    counter--
    if (counter < 0){
      counter = 0
    }
    console.log(counter)
    con = counter + 1;
    $("#question").text("Question "+con);
   console.log(questions[counter]);
   $("#question-change").text(questions[counter]);
   update();
  });

  $('#circle-1').click(function () {
    no[counter]++;
    update();  
  });

  $('#circle-2').click(function () {
    maybe[counter]++;
    update(); 
  });

  $('#circle-3').click(function () {
    yes[counter]++;
    update(); 
  });

  $('#r-button').click(function () {
    no[counter]=0;  
    maybe[counter]=0;
    yes[counter]=0;  
    update()  
  });
  $('#r-All-button').click(function () {
    globalReset() 
    update()  
  });

  
  
});
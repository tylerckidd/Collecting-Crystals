
 $(document).ready(function(){
        var Random=Math.floor(Math.random()*101+19)
        // Selects a random number to be shown at the start of the game
        // Number should be should be between 19 - 120
        //
        $('#randomNumber').text(Random);
        console.log (random)
        // Appending random number to the randomNumber id in the html doc
        //
        var num1= Math.floor(Math.random()*11+1)
        var num2= Math.floor(Math.random()*11+1)
        var num3= Math.floor(Math.random()*11+1)
        var num4= Math.floor(Math.random()*11+1)
        // Setting up random numbers for each jewel
        // Random number has to be between 1 - 12
        // 
        var userTotal= 0; 
        var wins= 0;
        var losses = 0;
        //  Decaring variables for tallies
      $('#numberWins').text(wins);
      $('#numberLosses').text(losses);
      //resets the game
      function reset(){
            Random=Math.floor(Math.random()*101+19);
            console.log(Random)
            $('#randomNumber').text(Random);
            num1= Math.floor(Math.random()*11+1);
            num2= Math.floor(Math.random()*11+1);
            num3= Math.floor(Math.random()*11+1);
            num4= Math.floor(Math.random()*11+1);
            userTotal= 0;
            $('#finalTotal').text(userTotal);
            } 
      //adds the wins to the userTotal
      function winner(){
      alert("You won!");
        wins++; 
        $('#numberWins').text(wins);
        reset();
      }
      //addes the losses to the userTotal
      function loser(){
      alert ("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
      }
      //sets up click for jewels
        $('#blue').on ('click', function(){
          userTotal = userTotal + num1;
          console.log("New userTotal= " + userTotal);
          $('#finalTotal').text(userTotal); 
                //sets win/lose conditions
              if (userTotal == Random){
                winner();
              }
              else if ( userTotal > Random){
                loser();
              }   
        })  
        $('#green').on ('click', function(){
          userTotal = userTotal + num2;
          console.log("New userTotal= " + userTotal);
          $('#finalTotal').text(userTotal); 
              if (userTotal == Random){
               winner();
              }
              else if ( userTotal > Random){
                loser();
              } 
        })  
        $('#red').on ('click', function(){
          userTotal = userTotal + num3;
          console.log("New userTotal= " + userTotal);
          $('#finalTotal').text(userTotal);
      //sets win/lose conditions
                if (userTotal == Random){
                winner();
              }
              else if ( userTotal > Random){
                loser();
              } 
        })  
        $('#yellow').on ('click', function(){
          userTotal = userTotal + num4;
          console.log("New userTotal= " + userTotal);
          $('#finalTotal').text(userTotal); 
            
                if (userTotal == Random){
                winner();
              }
              else if ( userTotal > Random){
                loser();
              }
   });
   });
   

function  LogIn() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function'
    localStorage.setItem("Player1" , player1_name)
	  //Set "player2_name" using localStorage.setItem() function
    localStorage.setItem("Player2" , player2_name)
    localStorage.setItem("player1_name")
    localStorage.setItem("player2_name")
    window.location.replace("index.html");
}


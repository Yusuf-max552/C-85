canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
nasa_image_array= ["NASA 5.jpg", "NASA 6.jpg", "NASA 7.jpg"];
random_number= Math.floor(Math.random()* 3);
console.log("random_number");
rover_width= 100;
rover_height= 90;
background_img= nasa_image_array[random_number];
rover_img= "rover.png";
rover_x= 10;
rover_y= 10;
   function add(){
       background_imgtag= new Image();
       background_imgtag.onload= uploadbackground;
       background_imgtag.src= background_img;
       rover_imgtag= new Image();
       rover_imgtag.onload = uploadrover;
       rover_imgtag.src= rover_img;
   }
   function uploadbackground(){
       ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
   }
   function uploadrover(){
       ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
   }



   window.addEventListener("keydown", mykey_down);
   function mykey_down(e){
       key_pressed= e.keyCode;
       console.log(key_pressed);
       if (key_pressed== "38"){
           up();
           console.log("up");
       }

       if (key_pressed== "40"){
           down();
        console.log("down");
       }
       if (key_pressed== "37"){
           left();
           console.log("left");
       }
       if (key_pressed== "39"){
           right();
           console.log("right");
       }
   }
   function up(){
       if(rover_y >= 0){
           royer_y= rover_y - 10;
           console.log("When up arrow key is pressed, x= "+ rover_x +"y= " + rover_y);
           uploadbackground();
           uploadrover();
       }
   }
   
     function down(){
       if(rover_y <= 500){
           royer_y= rover_y + 10;
           console.log("When up down key is pressed, x= "+ rover_x +"y= " + rover_y);
           uploadbackground();
           uploadrover();
       }
   }

   function left(){
    if(rover_x >= 0){
        royer_x= rover_x - 10;
        console.log("When up left key is pressed, x= "+ rover_x +"y= " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
   function right(){
    if(rover_x <= 700){
        royer_x= rover_x + 10;
        console.log("When up right key is pressed, x= "+ rover_x +"y= " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
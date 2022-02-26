//Create variables here
var dog;
var happyDog;
var normDog;
var databaase;
var foodS = 0;
var foodStock;
var milkBottleImg;
var feed;
var fedTime, lastFed;
var foodObj;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  normDog = loadImage("images/dogImg.png");

  feed = createButton("Feed the dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);
}

function setup() {
  createCanvas(700, 500);
  
  dog = createSprite(width - 100, height/2);
  dog.addImage(normDog);
  dog.scale = 0.1;

  database = firebase.database();
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  foodObj = new Food();
}


function draw() {  
  background(46, 139, 87);

  fedTime=database.ref('feedTime'); 
  fedTime.on("value",function(data){ 
    lastFed=data.val(); 
  });

  fill(255, 255, 254);
  textSize(10);
  if(lastFed>=12){
    text("Last Feed: " + lastFed%12 + " P.M.", 200, 30)
  }
  else if(lastFed === 0){
    text("Last Feed: 12 A.M.", 350, 30)
  }
  else{
    text("Last Feed: " + lastFed + " A.M.", 350, 30)
  }

  foodObj.display();

  drawSprites();
}

function readStock(data){
  foodObj.foodStock=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.foodStock - 1);
  database.ref('/').update({
    Food: foodObj.foodStock,
    feedTime: hour()
  })
}

function addFoods(){
  foodS ++;
  database.ref('/').update({
    Food: foodS
  })
}


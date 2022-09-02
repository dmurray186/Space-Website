

document.getElementById("moon").addEventListener("click", function(){
  document.querySelector(".planet-image").setAttribute("src","assets/destination/image-moon.png")
  document.querySelector(".planet-title").innerHTML = "Moon"
  document.querySelector(".planet-desc").innerHTML = " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  document.querySelector(".distance-value").innerHTML = "384,400 km"
  
  // document.querySelector(".travel-value").innerHTML = "3 Days"
  
  document.querySelector(".travel-value").innerHTML = "3 Days"

  document.querySelector("#moon").classList.add("active");
  document.querySelector("#mars").classList.remove("active");

});



console.log('hi')
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var doubleNum = document.querySelector("#compoundInvestment")
  //var newNum = doubleNum.innerHTML
  doubleNum.innerHTML = doubleNum.innerHTML * 2 
   //doubleNum.innerHTML = (parseInt(doubleNum) * 2)
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
 var circle = document.querySelector("#circle-bw")
 if (circle.style.background === "black") {
 	circle.style.background = "white" 
 }
 else {
 	circle.style.background = "black"
}

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circle = document.querySelector(".circle-red")
  var circleSize = window.getComputedStyle(circle)
  var oldWidth = parseInt(circleSize.width)
  var oldHeight = parseInt(circleSize.height)
    if (oldWidth >= 320) {
      oldWidth = 40
      oldHeight = 40
  }
  circle.style.width = (oldWidth*2) + "px"
  circle.style.height = (oldHeight*2) + "px"
  //if (circle.style.width >= "320px") {
  	//	circleSize.width = "40px"
  	//	circleSize.height = "40px"
  //}
  
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var inactive = document.querySelectorAll(".inactive")
  var isInactive = function(element) {
    if(element.className === "inactive") {
      return true 
    }
  else {
    return false
  }
}
  var ulList = document.querySelector("#userList")
  var users = ulList.querySelectorAll("li")
  for (var i =0; i < users.length; i++) {
    var userNode = users[i]
    if (isInactive(userNode)) {
      ulList.removeChild(userNode)
    }
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var answerBoxNode = document.querySelector("#reverse-squares .answer-box")
  var squares = answerBoxNode.querySelectorAll(".square")
  for (var i = squares.length-1; i >= 0; i--)  {
        answerBoxNode.removeChild(squares[i])
        answerBoxNode.appendChild(squares[i])    
    }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var reverseHtml = function(inputNode) {
    var pigLat = ""  
    for (var i = inputNode.length-1; i >=0; i--) {
        pigLat = pigLat + inputNode[i]
    }
      return (pigLat)
  }

  var tasks = document.querySelector("#tasks")
  var taskEl = tasks.querySelectorAll("li")
  for (var i =0; i < taskEl.length; i++) {
      tasks.removeChild(taskEl[i])
      var taskElHtml = taskEl[i].textContent
      //console.log(taskElHtml)

      var newListItem = document.createElement("li")
      newListItem.innerHTML = reverseHtml(taskElHtml)
      tasks.appendChild(newListItem)
  } 

})




document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var imgSource = document.getElementById("city-img") 
  //imgSource = (imgSource.substr(0, imgSource.length -1))
  console.log(imgSource)
  var newSource = imgSource.src.split("/")
  //console.log(newSource)
  var oldNum = newSource.pop()
  //console.log(oldNum)
  var newNum = parseInt(oldNum) + 1 
  //console.log(newNum)
  if (newNum >= 10) {
    newNum = 1
  }
  newSource.push(newNum)
  var finalSource = newSource.join('/')
  imgSource.src = finalSource
})







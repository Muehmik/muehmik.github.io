// 3D Hover
$('html').on('mousemove', function(e){

  var offset = $('html').offset()
  
  var x = e.pageX - offset.left
  var y = e.pageY - offset.top
  
  
  var centerX = $('html').outerWidth() /2
  var centerY = $('html').outerHeight() /2 
  
  var deltaX = x - centerX
  var deltaY = y - centerY
  
  var percentX = deltaX / centerX
  var percentY = deltaY / centerY
  
  var deg = 10
  
  
  
  $('.content').css({
    transform: 'rotateX('+deg*-percentY + 'deg)'+
    ' rotateY('+deg*percentX+'deg)'
  })
})

$('html').on('mouseleave', function(){
  $('.content').css({
    transform: ''
  })
})
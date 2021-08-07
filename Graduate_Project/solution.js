// Declare variables to select elements from the dom
var tabs = $(".tab");

// add an event listener to all the elements of the class tab. 

/* 
Your objective is to move the active class to the tab that you clicked,
and move the show class to the div corresponding with that tab.
    use jquery to select elements by class or Id. 
    look into jquery methods to help you on your journey.
*/
tabs.each( function(index,value){
    $(value).click(function(){
    //Your code goes here
     var tabText =  $(this).text()
     var content = $(`#${tabText}`)
     console.log(content)
     $(".content-body").removeClass("show")
     content.addClass("show")
     $(".tab").removeClass("active")
    $(this).addClass("active")
    })
})

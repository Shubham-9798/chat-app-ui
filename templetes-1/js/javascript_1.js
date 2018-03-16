 $(document).ready(function(){
  
    // $("#auto").click("#icon_prefix").focus();
 
      $("#auto").click(function(){
    //Doo something
      $("#icon_prefix").focus();
      // alert("shubham");
  });

           // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {}, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );

  // control for small screen 
  
  

// Returns width of browser viewport
var wid=$( window ).width();
 //alert(wid);
 // Returns width of HTML document
 // var wid2=$( document ).width();
 // alert(wid2);
     
    if(wid<400)//need of refreshing the page for mobile view
      {
      // toggle->chatting list  //hd->list item  //hov->each item in list 
      // $('.hd').hide(0);
      $('.chat-hide').hide(0);
      // $('#toggle').show(500);
      // alert("sk");

      // $('#toggle').click(function(){
      //   // $('#hd').show(500);
      //   $('.chat-hide').show(0);
        
      //   });
         
        $('.hov1').click(function(){
          $('#hd').hide(200);
          $('.chat-hide').show(0);
          $('.hd').hide(0);
          $('.user-hide').hide(0);

          });

        $('.bk').click(function(){
          $('#hd').show(200);
          $('.chat-hide').hide(0);
          $('.hd').show(0);
          $('.user-hide').show(0);

          });


      }
      else
      {
        $('#toggle').hide(0);
        $('.bk').hide();  
        // alert("skj");
      }
      
     




    
  });
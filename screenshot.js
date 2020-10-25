function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('link');
  // onClick's logic below:
  link.addEventListener('click', function() {
    
    var text = document.getElementById("text");
    if (link.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {

  var submit = document.getElementById('submit');
  submit.addEventListener('click', function(){
    var misleading = document.getElementById('misleading').checked;
    var dp = document.getElementById('dp').checked;
    var reason1 = document.getElementById('reason1').checked;
    var reason2 = document.getElementById('reason2').checked;
    var link = document.getElementById('link').checked;

    if(misleading)console.log("Misleading");
    if(dp)console.log("Dark patterns are evident");
    if(reason1)console.log("Reason 1 is evident");
    if(reason2)console.log("Reason 2 is evident");
    if(link)console.log(document.getElementById('other').value);
    console.log(document.getElementById('target').src)

  });

});

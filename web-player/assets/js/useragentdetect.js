var userAgent = navigator.userAgent || navigator.vendor || window.opera;
if (userAgent.includes("iPhone")){
  
    alert("Our apologies, but this web player is only available in Google Chrome / Microsoft Edge on Windows / Android / macOS.");
    $(window).on('load', function() {
        $('#unsupported').modal('show');
    });
} else if (userAgent.includes("iPad"))
{
        
    alert("Our apologies, but this web player is only available in Google Chrome / Microsoft Edge on Windows / Android / macOS.");
    $(window).on('load', function() {
        $('#unsupported').modal('show');
    });
} else {
     console.log("Your device is compatible with our web player.");
    }
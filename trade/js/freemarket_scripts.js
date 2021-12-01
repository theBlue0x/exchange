function setAccountNumber() {
  if (sessionStorage.getItem("accountRS"))
  {
    document.getElementById("username").innerHTML = "Account";
    sessionStorage.setItem("loginStatus","loggedin");
  } else {
    sessionStorage.setItem("loginStatus","notloggedin");
  }
};
// Logout script
function logout(){
  if (typeof(Storage) != "undefined")
  {
    // Clear 	
    sessionStorage.removeItem("accountNumber");
    sessionStorage.removeItem("accountRS");
    sessionStorage.removeItem("numericalAccountNumber");
    sessionStorage.removeItem("accountBalance");
    window.location.href = "login.html";
  }
  else
  {
    document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage.";
  }
};

// Get variables out of the URL
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
};

// Check to see if the localstorage language parameter is already set on launch, load login page if it is
function checkInitialLanguageLogin() {
   window.location.href = "login_view_account.html";
  };

// For cleaning out any script injection attacks

var regex = /(<([^>]+)>)/ig; // Maybe don't need this

var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};		

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}
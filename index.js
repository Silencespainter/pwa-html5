// Initialize
checkServicesWorker();

// Check Services Worker
function checkServicesWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
      console.log("Service Worker OK", registration);
    }).catch(error => {
      console.log("Service Worker KO", error);
    });
  }
}


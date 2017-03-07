function XHR(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
      cb(JSON.parse(this.responseText));
  };
  xhr.open('GET', url, true);
  xhr.send();
}
XHR('https://k-yle.github.io/AKL-Bus-Delays/database.json', AKLBusDelayData);
XHR('https://k-yle.github.io/AKL-Bus-Delays/stopsManifest.json', AKLBusDelayManifest);

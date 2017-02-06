var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) 
    AKLBusDelayData(JSON.parse(this.responseText));
};
xhr.open('GET', 'https://k-yle.github.io/AKL-Bus-Delays/database.json', true);
xhr.send();

---
title: Spotilight
date: 2010-01-01 12:00:00
sage: true
layout: false
---

{% raw %}
<!DOCTYPE html>

<html lang = "en-US">
 <head>
  <meta charset = "UTF-8">
  <title>Spotilight Dev</title>
  <link rel = "stylesheet"
   type = "text/css"
   href = "spot_styles.css" />
 </head>

<body>
<script>
  window.addEventListener("load", function(event) {
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      console.log('Promise done');
      document.getElementById('spinner').remove();
      document.getElementById('userpic').removeAttribute("hidden");
      document.getElementById('username').removeAttribute("hidden");

    })
  });
</script>

<div class="spinner" id="spinner">
  <div class="dot1" id="dot1"></div>
  <div class="dot2" id="dot2"></div>
</div>

<div hidden id="target"></div>

<div class="box fadeinbot" id="namebox">
  <img hidden class="fadeinbot boxitem" id="userpic" src="img/profilepic.png">
  <h1 hidden class="fadeinbot boxitem" id="username">115bwm</h1>
</div>

</body>
</html>

{% endraw %}
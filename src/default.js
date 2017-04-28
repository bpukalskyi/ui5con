require('file-loader?name=[name].[ext]!./index.html');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-50072417-1', 'sap.github.io');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');

new Image().src = "https://openui5.hana.ondemand.com/resources/sap/ui/core/themes/base/img/1x1.gif?page=ui5con&ref=" + encodeURIComponent(document.referrer);
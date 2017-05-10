require('file-loader?name=[name].[ext]!./index.html');
var markerImg = require('./blocks/b-direction/marker.png');

// MAP
var s = document.createElement("script");
s.async = true;
s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCXJT0u0UY0GDNoVLDtJCVcAfSTFh0Q-Fc&callback=initMap";
var a = document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(s, a);

window.initMap = function () {
    var map = new google.maps.Map(document.getElementsByClassName('b-direction__map')[0], {
        center: { lat: 49.241545, lng: 8.6333657 },
        minZoom: 16,
        maxZoom: 16,
        zoom: 16,
        streetViewControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        zoomControl: false
    });

    new google.maps.Marker({
        position: {
            lat: 49.240150, // original center - 49.240850
            lng: 8.639048,
        },
        map,
        clickable: false,
        icon: markerImg
    });
};

//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-50072417-1', 'sap.github.io');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');

//Internal pixel
new Image().src = "https://openui5.hana.ondemand.com/resources/sap/ui/core/themes/base/img/1x1.gif?page=ui5con&ref=" + encodeURIComponent(document.referrer);
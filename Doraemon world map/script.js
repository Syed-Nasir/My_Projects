function initMap(){

map= new google.maps.map(document.getElementById('map'),{
    center:{lat: 35.632709,lng: 139.778265},
    zoom:18,
    mapId:'fda4a3f8e910f4b0',
    mapTypeControl: false,
    fullscreenControl:false,
    streetViewControl:false,

});

const markers=[
    [
        "Doraemons House",
        35.632709,
        139.778265,
        "doraemon_house.svg",
        38,
        32
    ],


[
    "Nobitas Playground",
    34.91952294663952,
    135.70519698982548,
    "nobitas_playground.svg",
    40,
    37
],

[
"Nobita's School",
24.88456872267485,
88.96958968596309,
"nobitas_school.svg",
40,
48
],

];


for(let i=0; i<markers.length; i++){
    const currmarker= markers[i];
   
    const marker = new google.map.Marker({
        position:{lat:currMarker[1], lng:currMarker[2]},
        map,
        title: currMarker[0],
        icon:{
            url:currMarker[3],
            scaledSize: new google.maps.scaledSize(currMarker[4],currMarker[5])
        },
        animation: google.maps.Animation.DROP
    
    });
    
    const infowindow =new google.maps.infowindow({
        content: currMarker[0],
    });
    
    markeraddlListener("click",() => {
        infowindow.open(map,marker);
    });
    

}


}
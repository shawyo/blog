function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(121.49052,37.455367),19);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
    var markers = [
        {content:"烟台数动教育科技有限公司，成立于2015年，经教育机构批准成立的专业性培训机构，从事电子商务人才的专业培训及互联网+项目研发工作。从成立之初就得到了政府的大力支持,积极响应国家号召，为成立山东地区蓝色智谷互联网发展圈作出贡献。",title:"烟台数动教育科技有限公司",imageOffset: {width:-46,height:-21},position:{lat:37.455542,lng:121.490183}}
    ];
    for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
    };
}
//向地图添加控件
function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:3});
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:false});
    map.addControl(overviewControl);
}
var map;
initMap();
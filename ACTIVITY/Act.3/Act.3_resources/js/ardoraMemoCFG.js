//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360;timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=8;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0000FF"; colorText="#FF8000"; colorSele="#008000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo has hecho maravilloso"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="Vamos no te quedes sin solucionarlo, intenta de nuevo."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="QWN0LjM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["Seguridad Informatica","Magerit","Ingeniería Social","Virus","Seguridad Redes Wifi","Redes VLAN","Seguridad SSL","Metodología Seguridad Interna"];im1=["","","","","","","",""];mp31=["","","","","","","",""];
var wo2=["","","","","","","",""];im2=["metodologias-de-control-interno-seguridad-y-auditoria-informatica-4-638.jpg","eliminacion-de-virus-informaticos-antivirus.png","VLAN.png","monografia_virus__1_.jpg","ingenieria-social1.png","MAGERIT.PNG","image_content_19552106_20180131113109.jpg","que-es-ssl.png"];mp32=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA","MTE","MTI","MTM","MTQ","MTU","MTY","MTc"]; pos=["MjM","MjU","MjQ","MjE","MjY","MjI","Mjc","MjA"];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="Act.3_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;

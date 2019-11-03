//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Estas en lo cierto!!!"; messageTime=""; messageError="Intentalo de Nuevo!!"; messageErrorG="Intentalo de Nuevo!!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#0000FF"; borderTime="#FF0000";borderError="#FF8000"; borderAttempts="#FF0000";
var wordsGame="QWN0LjY"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cuáles son las consecuencias más frecuentes en ataques a redes wifi?","La imagen es un ejemplo de:"];
var answers1=["MUFjY2VzbyBObyBBdXRvcml6YWRv","MFRyYXRhbWllbnRvIGRlIHJpZXNnb3M","MEV2YWx1YWNp824gZGUgUmllc2dvcw"];
var answers2=["MU1hdHJpeiBkZSBSaWVzZ29z","ME1hdHJpeiBkZSBBbWVuemFz","ME1hdHJpeiBkZSBEYfFvcw"];
var ans=[answers1,answers2];
var err=["","Vamos intentalo de nuevo"];
var ima=["","Captura.PNG"];
var mp4=["",""];
var ogv=["",""];
var indexTag=0; actualAnswers=[]; dirMedia="Act.6_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];

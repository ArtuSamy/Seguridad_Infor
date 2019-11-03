//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=350; timeIni=350; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="Lo has hecho muy bien!"; messageTime=""; messageError="Intentalo de Nuevo"; messageErrorG="Intentalo de Nuevo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#FF8000"; borderTime="#FF0000";borderError="#0000FF"; borderAttempts="#FF0000";
var wordsGame="QWN0LjE"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cuáles son las herramientas denominadas de seguridad básica?"];
var answers1=["MUFOVElWSVJVUw","MUFOVElNQUxXQVJF","MUFOVElTUFlXQVJF","MUZJUkVXQUxM","MUNPUElBUyBERSBTRUdVUklEQUQ","MUFDVFVBTElaQUNJT05FUyBERSBTSVNURU1B","MFNFR1VSSURBRCBTU0w"];
var ans=[answers1];
var err=["Intentalo de nuevo, selecciona todas las que responden la pregunta."];
var ima=[""];
var mp4=[""];
var ogv=[""];
var indexTag=0; actualAnswers=[]; dirMedia="Act.1_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];

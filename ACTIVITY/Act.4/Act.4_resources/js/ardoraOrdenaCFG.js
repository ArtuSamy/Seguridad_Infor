var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF8000"; colorText="#0000FF"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Perfecto !!"; messageTime=""; messageError="Vamos de nuevo!"; messageErrorG="Vamos de nuevo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#0000FF"; borderTime="#FF0000";borderError="#FF8000"; borderAttempts="#FF0000";
var wordsGame="QWN0LjQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q3JlYXIgdW4gZXNwYWNpbyBpbnRlcmFjdGl2byBxdWUgYXBvcnRlIGFsIGNvbm9jaW1pZW50byB5IGFjdHVhbGl6YWNp824gZGUgbG9zIGRpZmVyZW50ZXMgY29tcG9uZW50ZXMgdGXzcmljby1wcuFjdGljb3MgZGUgbGEgc2VndXJpZGFkIGluZm9ybeF0aWNhIGVuIHJlZGVzLg","Q29ub2NlciBsYXMgbWV0b2RvbG9n7WFzIHV0aWxpemFkYXMgZW4gZWwgYW7hbGlzaXMgZGUgcmllc2dvIFRJLg","UGFyYSBnZXN0aW9uYXIgbG9zIHJpZXNnb3MgZXMgbmVjZXNhcmlvIHJlYWxpemFyIHVuYSB2YWxvcmFjafNuIGRlIGxhcyBwb3NpYmxlcyBhbWVuYXphcyB5L28gdnVsbmVyYWJpbGlkYWRlcyBxdWUgc2UgZW5jdWVudHJhbiBwcmVzZW50ZXMgZGVudHJvIGRlbCBzaXN0ZW1h","TGEgU2VndXJpZGFkIEVuIExhcyBSZWRlcyBEZSBDb211bmljYWNpb25lcw","ZGUgYWNjZXNvIHVuYSBwaWV6YSBmdW5kYW1lbnRhbCBkZSBsb3Mgc2lzdGVtYXMgV0xBTg"];imaW=["","","","",""];queW=["El objetivo General del OVI es...","Uno de los obj. especificos del OVI es...","Gestión de riesgos...","Cuál es el titulo del articulo que busca responder a la pregunta: ¿Cómo establecer la seguridad en una red?."," las redes WIFI hacen del sistema de control..."]; c=[157,64,156,43,52];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="500";indexG=0;profG=0;dirMedia="Act.4_resources/media/"; textBNext="Siguiente";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];

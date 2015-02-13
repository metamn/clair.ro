var err=true;var modal=false;var errContainer='div';var errorbgcolor='#FF9999';var validbgcolor='#ffffff';var theForm=getFormId();var ie;if(navigator.appVersion.indexOf("MSIE")!=-1){ie=true;}else{ie=false;}
function getFormId(){var totalforms=0;var frms=document.getElementsByTagName('form');for(var i=0;i<frms.length;i++){if(frms[i].className.indexOf('validate')!=-1){var totalforms=totalforms+1;var formtovalidate=frms[i].id;}}
if(totalforms>1){alert('Too many forms to validate!');}else{return document.getElementById(formtovalidate);}}
function getElementId(type){var frm=getFormId();var total=0;var el=frm.elements;for(var i=0;i<el.length;i++){if(el[i].className.indexOf(type)!=-1){total=total+1;theElement=el[i].id;}}
if(total==1){return document.getElementById(theElement);}else{alert('Either too many or too few of type "'+type+'" on the page!');}}
function getOtherElements(frm){var objInput=frm.elements;var others=new Array();for(var iCounter=0;iCounter<objInput.length;iCounter++){if(objInput[iCounter].className.indexOf('other')!=-1){others.push(objInput[iCounter].id);}}
return others;}
function changeClass(el,elclass){resetbg(el);el.className=elclass;}
var addBlursandHighlights=function(){var objInput=document.getElementsByTagName('input');for(var iCounter=0;iCounter<objInput.length;iCounter++){objInput[iCounter].onkeyup=function(){return validateSingle(this);}
 if((objInput[iCounter].className.indexOf('req')!=-1)||(objInput[iCounter].className.indexOf('code')!=-1)){changeLabelState(objInput[iCounter],'highlight');}}
var objInput=document.getElementsByTagName('textarea');for(var iCounter=0;iCounter<objInput.length;iCounter++){objInput[iCounter].onkeyup=function(){return validateSingle(this);}
if(objInput[iCounter].className.indexOf('req')!=-1){changeLabelState(objInput[iCounter],'highlight');}}
var objInput=document.getElementsByTagName('select');for(var iCounter=0;iCounter<objInput.length;iCounter++){objInput[iCounter].onchange=function(){return validateSingle(this);}
if(objInput[iCounter].className.indexOf('req')!=-1){changeLabelState(objInput[iCounter],'highlight');}}}
var resetForm=function(){var objInput=getFormId().elements;for(var iCounter=0;iCounter<objInput.length;iCounter++){changeLabelState(objInput[iCounter],'reset');if(objInput[iCounter].getAttribute('type')=='text'){objInput[iCounter].value='';}
if(objInput[iCounter].getAttribute('type')=='textarea'){objInput[iCounter].value='';}
if(objInput[iCounter].getAttribute('type')=='select'){objInput[iCounter].value='';}}
objInput[1].focus();}
var displayErrorMessage=function(frm,el){var labels=document.getElementsByTagName('label');var errorMsg='';if(el.type=='radio'||el.type=='checkbox'){for(var i=0;i<labels.length;i++){if(labels[i].htmlFor==el.name){errorMsg='Va rugam completati sectia '+labels[i].innerHTML.replace('*','');}}}else if(el.className.indexOf('email')!=-1){for(var i=0;i<labels.length;i++){if(labels[i].htmlFor==el.id){errorMsg='Va rugam introduceti o adresa de e-mail <strong>valida</strong>.';}}}else{for(var i=0;i<labels.length;i++){if(labels[i].htmlFor==el.id){errorMsg='Va rugam completati cu informatii <strong>valide</strong> sectia '+labels[i].innerHTML.replace('*','');}}}
if(err){if(modal){alert(errorMsg);el.focus();}
else{if(document.getElementById(frm.id+'_statusMessage')){var errorDiv=document.getElementById(frm.id+'_statusMessage');resetbg(errorDiv);errorDiv.className='errorMessage';errorDiv.innerHTML=errorMsg;Fat.fade_element(errorDiv.id,30,500,'#ffffff',null);el.focus();}else{var errorDiv=document.createElement(errContainer);errorDiv.id=frm.id+'_statusMessage';resetbg(errorDiv);errorDiv.className='errorMessage';errorDiv.innerHTML=errorMsg;frm.insertBefore(errorDiv,frm.childNodes[0]);Fat.fade_element(errorDiv.id,30,500,'#ffffff',null);el.focus();}
Fat.fade_all();}}}
function resetbg(el){el.style.backgroundColor='';}
function displayStatusmsg(frm,msg,status){if(err){if(modal){alert(msg);}
else{if(document.getElementById(frm.id+'_statusMessage')){var statusDiv=document.getElementById(frm.id+'_statusMessage');changeClass(statusDiv,status);Fat.fade_element(statusDiv.id,30,500,'#ffffff',null);statusDiv.innerHTML=msg;}else{var statusDiv=document.createElement(errContainer);statusDiv.id=frm.id+'_statusMessage';changeClass(statusDiv,status);statusDiv.innerHTML=msg;frm.insertBefore(statusDiv,frm.childNodes[0]);Fat.fade_element(statusDiv.id,30,500,'#ffffff',null);}}}}
var changeLabelState=function(el,msg){var labels=document.getElementsByTagName('label');if(msg=='error'){if(el.className.indexOf('fade')==-1){el.className=el.className+' fade';}
for(var i=0;i<labels.length;i++){if(labels[i].htmlFor==el.id){labels[i].className=labels[i].className.replace('warning','');labels[i].className=labels[i].className.replace('checkmark','');labels[i].className=labels[i].className.replace('question','');labels[i].className=labels[i].className.replace('highlight','');labels[i].className=labels[i].className+' warning';}}}else if(msg=='valid'){if(el.className.indexOf('fade')!=-1){el.className=el.className.replace('fade','');}
if(el.className.indexOf('error')!=-1){Fat.fade_error_out(el.id,30,500,errorbgcolor,validbgcolor);}
for(var i=0;i<labels.length;i++){if(labels[i].htmlFor==el.id){labels[i].className=labels[i].className.replace('warning','');labels[i].className=labels[i].className.replace('checkmark','');labels[i].className=labels[i].className.replace('question','');labels[i].className=labels[i].className.replace('highlight','');labels[i].className=labels[i].className+' checkmark';}}}else if(msg=='question'){if(el.className.indexOf('fade')!=-1){el.className=el.className.replace('fade','');}
if(el.className.indexOf('error')!=-1){Fat.fade_error_out(el.id,30,500,errorbgcolor,validbgcolor);}
for(var i=0;i<labels.length;i++){if(labels[i].htmlFor==el.id){labels[i].className=labels[i].className.replace('warning','');labels[i].className=labels[i].className.replace('checkmark','');labels[i].className=labels[i].className.replace('question','');labels[i].className=labels[i].className.replace('highlight','');labels[i].className=labels[i].className+' question';}}}else{for(var i=0;i<labels.length;i++){if(labels[i].htmlFor==el.id){labels[i].className=labels[i].className.replace('warning','');labels[i].className=labels[i].className.replace('checkmark','');labels[i].className=labels[i].className.replace('question','');labels[i].className=labels[i].className.replace('highlight','');if((el.className.indexOf('req')!=-1)||(el.className.indexOf('code')!=-1)){labels[i].className=labels[i].className+' highlight';}}}}}
var validate=function(frm){var el=frm.elements;for(var i=0;i<el.length;i++){el[i].className=el[i].className.replace('error','');validateSingle(el[i]);}
for(var i=0;i<el.length;i++){if(el[i].className.indexOf('req')!=-1&&el[i].className.indexOf('email')==-1){if(el[i].type=='text'||el[i].type=='textarea'||el[i].type=='file'){if(el[i].value==""){resetbg(el[i]);el[i].className=el[i].className+' error';err==true?displayErrorMessage(frm,el[i]):null;return false;}else{resetbg(el[i]);el[i].className=el[i].className.replace('error','');}}
else if(el[i].type=='radio'){var radiogroup=el[el[i].name];var itemchecked=false;for(var j=0;j<radiogroup.length;++j){if(radiogroup[j].checked){itemchecked=true;break;}}
if(!itemchecked){resetbg(el[i]);el[i].className=el[i].className+' error';err==true?displayErrorMessage(frm,el[i]):null;return false;}}
else if(el[i].type=='checkbox'){var itemchecked=false;var elems=document.getElementsByTagName("input");for(var j=0;j<elems.length;j++){if(elems[j].type=='checkbox'&&elems[j].name==el[i].name){if(elems[j].checked){itemchecked=true;break;}}}
if(!itemchecked){resetbg(el[i]);el[i].className=el[i].className+' error';err==true?displayErrorMessage(frm,el[i]):null;return false;}}
else if(el[i].type=='select-one'){if(el[i].selectedIndex==0){resetbg(el[i]);el[i].className=el[i].className+' error';err==true?displayErrorMessage(frm,el[i]):null;return false;}else{resetbg(el[i]);el[i].className=el[i].className.replace('error','');}}
else if(el[i].type=='select-multiple'){var optionselected=false;for(var j=0;j<el[i].options.length;++j){if(el[i].options[j].selected){optionselected=true;break;}}
if(!optionselected){resetbg(el[i]);el[i].className=el[i].className+' error';err==true?displayErrorMessage(frm,el[i]):null;return false;}else{resetbg(el[i]);el[i].className=el[i].className.replace('error','');}}}
else if(el[i].className.indexOf('email')!=-1){if(el[i].className.indexOf('req')!=-1){if(el[i].type=='text'){var email=/^[A-Za-z0-9]+([_\.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\.-][A-Za-z0-9]+)*\.([A-Za-z]){2,4}$/i;if(!email.test(el[i].value)||el[i].value==''){resetbg(el[i]);el[i].className=el[i].className+' error';err==true?displayErrorMessage(frm,el[i]):null;return false;}else{resetbg(el[i]);el[i].className=el[i].className.replace('error','');}}}else{if(el[i].type=='text'){var email=/^[A-Za-z0-9]+([_\.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\.-][A-Za-z0-9]+)*\.([A-Za-z]){2,4}$/i;if(!email.test(el[i].value)&&el[i].value!=''){resetbg(el[i]);el[i].className=el[i].className+' error';err==true?displayErrorMessage(frm,el[i]):null;return false;}else{resetbg(el[i]);el[i].className=el[i].className.replace('error','');}}}}}
return true;}
var validateSingle=function(el){if(el.className.indexOf('req')!=-1&&el.className.indexOf('email')==-1){if(el.type=='text'||el.type=='textarea'||el.type=='file'){if(el.value==""){changeLabelState(el,'error');return false;}else{changeLabelState(el,'valid');}}
else if(el.type=='radio'){var radiogroup=el[el.name];var itemchecked=false;for(var j=0;j<radiogroup.length;++j){if(radiogroup[j].checked){itemchecked=true;break;}}
if(!itemchecked){changeLabelState(el,'error');return false;}else{changeLabelState(el,'valid');}}
else if(el.type=='checkbox'){var itemchecked=false;var elems=document.getElementsByTagName("input");for(var j=0;j<elems.length;j++){if(elems[j].type=='checkbox'&&elems[j].name==el.name){if(elems[j].checked){itemchecked=true;break;}}}
if(!itemchecked){changeLabelState(el,'error');return false;}else{changeLabelState(el,'valid');}}
else if(el.type=='select-one'){if(el.selectedIndex==0){changeLabelState(el,'error');return false;}else{changeLabelState(el,'valid');}}
else if(el[i].type=='select-multiple'){var optionselected=false;for(var j=0;j<el.options.length;++j){if(el.options[j].selected){optionselected=true; break;}}
if(!optionselected){changeLabelState(el,'error');return false;}else{changeLabelState(el,'valid');}}}
else if(el.className.indexOf('email')!=-1){if(el.type=='text'){var email=/^[A-Za-z0-9]+([_\.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\.-][A-Za-z0-9]+)*\.([A-Za-z]){2,4}$/i;if(email.test(el.value)){changeLabelState(el,'valid');}else if(el.className.indexOf('req')!=-1){changeLabelState(el,'error');return false;}else if(!el.value==''){changeLabelState(el,'error');return false;}}}else{if(el.type=='text'||el.type=='textarea'||el.type=='file'){if(el.value==""){changeLabelState(el,'question');return false;}else{changeLabelState(el,'valid');}}}
return true;}
var evaluate=function(){for(i=0;i<conds.length;i++){var element=document.getElementsByName(conds[i][0]);var elemVal=conds[i][1];var elements=document.getElementsByName(conds[i][2]);var bol=conds[i][3];if(ie){for(var k=0;k<element.length;k++){if(element[k].name==event.srcElement.name){if(event.srcElement.type=='select-one'){if(event.srcElement[event.srcElement.selectedIndex].value==elemVal){setState(elements,bol);}else{setState(elements,!bol);}}else if(event.srcElement.type=='select-multiple'){var optionselected=false;for(var j=0;j<event.srcElement.options.length;j++){if(event.srcElement.options[j].value==elemVal&&event.srcElement.options[j].selected){optionselected=true;break;}}
if(optionselected){setState(elements,bol);}else{setState(elements,!bol);}}else{if(event.srcElement.value==elemVal){setState(elements,bol);}else{setState(elements,!bol);}}}}}else{for(var k=0;k<element.length;k++){if(element[k].name==this.name){if(this.type=='select-one'){if(this[this.selectedIndex].value==elemVal){setState(elements,bol);}else{setState(elements,!bol);}}else if(this.type=='select-multiple'){var optionselected=false;for(var j=0;j<this.options.length;j++){if(this.options[j].value==elemVal&&this.options[j].selected){optionselected=true;break;}}
if(optionselected){setState(elements,bol);}else{setState(elements,!bol);}}else{if(this.value==elemVal){setState(elements,bol);}else{setState(elements,!bol);}}}}}}}
var setState=function(elements,bol){if(bol){for(var j=0;j<elements.length;j++){if(elements[j].className.indexOf('req')==-1){elements[j].className+=' req';}}}else{for(var j=0;j<elements.length;j++){newClassName=elements[j].className.replace('req','');elements[j].className=newClassName;}}}
var attachConditions=function(){var frmEl=getFormId();if(ie){frmEl.attachEvent('onsubmit',validateFields,false);}else{frmEl.addEventListener('submit',validateFields,false);}
if(ie){frmEl.attachEvent('onreset',resetForm,false);}else{frmEl.addEventListener('reset',resetForm,false);}
frmEl.onsubmit=function(){return false;}}
var attachBlurs=function(elements){for(var i=0;i<elements.length;i++){if(elements[i].type=='checkbox'||elements[i].type=='radio'){if(ie){elements[i].attachEvent('onclick',evaluate,false);}else{elements[i].addEventListener('click',evaluate,false);}}else{if(ie){elements[i].attachEvent('onblur',evaluate,false);}else{elements[i].addEventListener('blur',evaluate,false);}}}}
var conds=Array();function validateFields(){var frmEl=getFormId();if(validate(frmEl)){sendPosEmail();}}
function sendPosEmail(){var fm_name=getElementId('name');var fm_email=getElementId('email');var fm_subject=getElementId('subject');var fm_message=getElementId('message');var frmsubmit=getElementId('submitbutton');var others=getOtherElements(getFormId());var page="scripts/xmlHttpRequest.php?contact=true&xml=true";showContactTimer();var str1=cleanString(fm_name.value);var str2=cleanString(fm_email.value);var str3=cleanString(fm_subject.value);var str4=cleanString(fm_message.value);var stuff="fm_name="+str1+"&fm_email="+str2+"&fm_subject="+str3+"&fm_message="+str4+"&form_submitted="+frmsubmit.value;if(others.length>0){for(var iCounter=0;iCounter<others.length;iCounter++){var title=others[iCounter];var el=document.getElementById(title);var value=cleanString(el.value);stuff+="&"+title+"="+value;}}
loadXMLPosDoc(page,stuff);}
function cleanString(str1){str1=str1.replace(/&/g,"**am**");str1=str1.replace(/=/g,"**eq**");str1=str1.replace(/\+/g,"**pl**");return str1;}
function unCleanString(str1){str1=str1.replace(/\*\*am\*\*/g,"&");str1=str1.replace(/\*\*eq\*\*/g,"=");str1=str1.replace(/\*\*pl\*\*/g,"+");str1=str1.replace(/\*\*nl\*\*/g,"<br />");return str1;}
function showContactTimer(){var fieldArea=getFormId();var msg='<strong>Trimitere e-mail ...</strong><br/><img src="/img/loading.gif" alt="Trimitere email..." title="Sending Email" />';displayStatusmsg(fieldArea,msg,'none');sentTimer=setTimeout("hideContactTimer()",6000);}
function hideContactTimer(){var status=grabPosXML("status");var fieldArea=getFormId();var inputs=fieldArea.getElementsByTagName('input');var inputsLen=inputs.length;var tAreas=fieldArea.getElementsByTagName('textarea');var tAreasLen=tAreas.length;var msg=grabPosXML("confirmation");if(status=='NOTOK'){displayStatusmsg(fieldArea,msg,'errorMessage');}else if(status=='OK'){msg='<strong>Multumim frumos!</strong> Mesajul Dvs. a fost trimis cu succes.'
displayStatusmsg(fieldArea,msg,'OK');resetForm();}}
function hidemessage(){msg='<strong>Multumim frumos!</strong> Mesajul Dvs. a fost trimis cu succes.'
displayStatusmsg(getFormId(),msg,'OK');}
function showmessage(){var fieldArea=getFormId();var name=unCleanString(grabPosXML("name"));var email=unCleanString(grabPosXML("email"));var subject=unCleanString(grabPosXML("regarding"));var message=unCleanString(grabPosXML("message"));var msg='<h2>From: <span>'+name+' ('+email+')</span></h2><br /><h2>Subject: <span>'+subject+'</span></h2><br /><h2>Message:</h2> <p class="message">'+message+'</p><a href="javascript:hidemessage();" title=Click here to hide this message">Hide</a>';displayStatusmsg(fieldArea,msg,'none');}
function ajaxFunction(){var ajaxRequest;//
try{ajaxRequest=new XMLHttpRequest();}catch(e){try{ajaxRequest=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{ajaxRequest=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){alert("Va cerem scuze, browserul Dvs. nu ne permite aceasta operatie. Va rugam sa ne contacti in direct prin e-mail. Va multumim.");return false;}}}
return ajaxRequest;}
var pos;function loadXMLPosDoc(url,posData){pos=ajaxFunction();if(pos){pos.onreadystatechange=processPosChange;pos.open("POST",url,false);pos.setRequestHeader("Content-Type","application/x-www-form-urlencoded");pos.send(posData);}}
function grabPosXML(tagName){if(pos.responseXML.documentElement.getElementsByTagName(tagName)[0].childNodes[0]){var resp=pos.responseXML.documentElement.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;return resp;}else{displayStatusmsg(getFormId(),'Eroare procesare informatii, va rugam incercati din nou.','errorMessage');return false;}}
function processPosChange(){if(pos.readyState==4){if(pos.status==200){if(grabPosXML("status")=='NOTOK'){displayStatusmsg(getFormId(),'Eroare trimitere e-mail. Va rugam incercati din nou in cateva minute.','errorMessage');}}}}
function addEvent(elm,evType,fn,useCapture){if(ie){/**/
elm.attachEvent('on'+evType,fn,false);}
else{elm.addEventListener(evType,fn,useCapture);}}
function getEventSrc(e){if(!e)e=window.event;if(e.originalTarget)
return e.originalTarget;else if(e.srcElement)
return e.srcElement;}
var EventCache=function(){var listEvents=[];return{listEvents:listEvents,add:function(node,sEventName,fHandler,bCapture){listEvents.push(arguments);},flush:function(){var i,item;for(i=listEvents.length-1;i>=0;i=i-1){item=listEvents[i];if(item[0].removeEventListener){item[0].removeEventListener(item[1],item[2],item[3]);};if(item[1].substring(0,2)!="on"){item[1]="on"+item[1];};if(item[0].detachEvent){item[0].detachEvent(item[1],item[2]);};item[0][item[1]]=null;};}};}();function ajaxContact(){var frmEl=getFormId();addEvent(frmEl,'submit',validateFields,false);addEvent(frmEl,'reset',resetForm,false);frmEl.onsubmit=function(){return false;}}
if(ie){window.attachEvent("onload",addBlursandHighlights,false);window.attachEvent("onload",attachConditions,false);}else{window.addEventListener("load",addBlursandHighlights,false);window.addEventListener("load",attachConditions,false);}

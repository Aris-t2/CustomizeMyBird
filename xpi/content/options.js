"use strict";
if (!customizemybird) {var customizemybird = {};}
if (!customizemybird.options) {customizemybird.options = {};}

var Cc = Components.classes, Ci = Components.interfaces, Cu = Components.utils;

var {Services} = Cu.import("resource://gre/modules/Services.jsm", {});

customizemybird.options = {

prefs: Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.customizemybirdextension."),

appversion: parseInt(Services.appinfo.version),
tbdefaulttheme: Services.prefs.getBranch("general.skins.").getCharPref("selectedSkin") == 'classic/1.0',

init: function() {
	
	/*if (!this.tbdefaulttheme) { 
	  document.getElementById('customizemybird_content_box').style.visibility = 'collapse';
	} else {
	  document.getElementById('customizemybird_notcompatible_box').style.visibility = 'collapse';
	}*/
	
	if (this.appversion < 57 && !this.tbdefaulttheme) { 
	  document.getElementById('CustomizeMyBird_prefwindow').style.minWidth = '800px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.maxWidth = '800px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.minHeight = '300px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.maxHeight = '300px';
	} 
	
	document.getElementById("customizemybird_cb_classictabs").checked = this.prefs.getBoolPref("classictabs");
	document.getElementById("customizemybird_cb_classictabsaero").checked = this.prefs.getBoolPref("classictabsaero");
	
	if(this.prefs.getBoolPref("classictabs"))
	  document.getElementById("customizemybird_cb_classictabsaero").disabled = false;
	else document.getElementById("customizemybird_cb_classictabsaero").disabled = true;
	
	document.getElementById("customizemybird_cb_tabheight").value = this.prefs.getIntPref("tabheight");
	document.getElementById("customizemybird_cb_tabborderradius").value = this.prefs.getIntPref("tabborderradius");	
	document.getElementById("customizemybird_cb_tabtbbuttons_bt").checked = this.prefs.getBoolPref("tabtbbuttons_bt");
	document.getElementById("customizemybird_cb_tabtb_lightning").checked = this.prefs.getBoolPref("tabtb_lightning");
	document.getElementById("customizemybird_rg_menubarposition").value = this.prefs.getCharPref("menubarposition");
	
	if(this.prefs.getCharPref("menubarposition")!="menubar_below_tabs")
	  document.getElementById("customizemybird_cb_aerocolors_mb").disabled = true;
	else document.getElementById("customizemybird_cb_aerocolors_mb").disabled = false;
	
	document.getElementById("customizemybird_cb_menubar_compact").checked = this.prefs.getBoolPref("menubar_compact");
	document.getElementById("customizemybird_cb_main_tb_compact").checked = this.prefs.getBoolPref("main_tb_compact");
	document.getElementById("customizemybird_cb_status_hidden").checked = this.prefs.getBoolPref("statusbar_hidden");
	document.getElementById("customizemybird_cb_attachmentbox_hp").checked = this.prefs.getBoolPref("attachmentbox_hp");
	document.getElementById("customizemybird_cb_attachmentbox_bp").checked = this.prefs.getBoolPref("attachmentbox_bp");
	document.getElementById("customizemybird_cb_quickfilterbar_lp").checked = this.prefs.getBoolPref("quickfilterbar_lp");
	document.getElementById("customizemybird_cb_treecol").checked = this.prefs.getBoolPref("treecol");
	document.getElementById("customizemybird_cb_treecol_aero").checked = this.prefs.getBoolPref("treecol_aero");
	
	if(this.prefs.getBoolPref("treecol"))
	  document.getElementById("customizemybird_cb_treecol_aero").disabled = false;
	else document.getElementById("customizemybird_cb_treecol_aero").disabled = true;
	
	document.getElementById("customizemybird_cb_appmenubutton").checked = this.prefs.getBoolPref("appmenubutton");
	document.getElementById("customizemybird_cb_appmenubuttonct").checked = this.prefs.getBoolPref("appmenubuttonct");
	document.getElementById("customizemybird_cb_appmenubuttonc1").color = this.prefs.getCharPref("appmenubuttonc1");
	document.getElementById("customizemybird_cb_appmenubuttonc1t").value = this.prefs.getCharPref("appmenubuttonc1");
	document.getElementById("customizemybird_cb_appmenubuttonc2").color = this.prefs.getCharPref("appmenubuttonc2");
	document.getElementById("customizemybird_cb_appmenubuttonc2t").value = this.prefs.getCharPref("appmenubuttonc2");
	document.getElementById("customizemybird_cb_appmenubuttontxt").value = this.prefs.getCharPref("appmenubuttontxt");
	document.getElementById("customizemybird_cb_appmenubuttontxtc").color = this.prefs.getCharPref("appmenubuttontxtc");
	document.getElementById("customizemybird_cb_appmenubuttontxtct").value = this.prefs.getCharPref("appmenubuttontxtc");
	document.getElementById("customizemybird_cb_appmenubuttontxtcs").color = this.prefs.getCharPref("appmenubuttontxtcs");
	document.getElementById("customizemybird_cb_appmenubuttontxtcst").value = this.prefs.getCharPref("appmenubuttontxtcs");
	document.getElementById("customizemybird_cb_appmenubuttonhp").checked = this.prefs.getBoolPref("appmenubuttonhp");
	document.getElementById("customizemybird_cb_appmenubuttondm").checked = this.prefs.getBoolPref("appmenubuttondm");
	document.getElementById("customizemybird_rg_appbutton_icons").value = this.prefs.getCharPref("appmenubuttonicon");
	
	document.getElementById("customizemybird_cb_winheader").checked = this.prefs.getBoolPref("winheader");
	document.getElementById("customizemybird_cb_winheaderbg").color = this.prefs.getCharPref("winheaderbg");
	document.getElementById("customizemybird_cb_winheaderbgt").value = this.prefs.getCharPref("winheaderbg");
	document.getElementById("customizemybird_cb_winheadertc").color = this.prefs.getCharPref("winheadertc");
	document.getElementById("customizemybird_cb_winheadertct").value = this.prefs.getCharPref("winheadertc");
	document.getElementById("customizemybird_cb_winheadercc").color = this.prefs.getCharPref("winheadercc");
	document.getElementById("customizemybird_cb_winheadercct").value = this.prefs.getCharPref("winheadercc");
	
	document.getElementById("customizemybird_cb_aerocolors").checked = this.prefs.getBoolPref("aerocolors");
	document.getElementById("customizemybird_cb_aerocolors_mb").checked = this.prefs.getBoolPref("aerocolors_mb");
	document.getElementById("customizemybird_cb_aerocolors_aam").checked = this.prefs.getBoolPref("aerocolors_aam");
	document.getElementById("customizemybird_cb_aerocolors_aap").checked = this.prefs.getBoolPref("aerocolors_aap");
	
	document.getElementById("customizemybird_cb_ctb_maintoolbar").checked = this.prefs.getBoolPref("ctb_maintoolbar");
	document.getElementById("customizemybird_cb_ctb_menubar").checked = this.prefs.getBoolPref("ctb_menubar");
	document.getElementById("customizemybird_cb_ctb_tabstoolbar").checked = this.prefs.getBoolPref("ctb_tabstoolbar");
	document.getElementById("customizemybird_cb_ctb_maintoolbar_br").value = this.prefs.getIntPref("ctb_maintoolbar_br");
	document.getElementById("customizemybird_cb_ctb_menubar_br").value = this.prefs.getIntPref("ctb_menubar_br");
	document.getElementById("customizemybird_cb_ctb_tabstoolbar_br").value = this.prefs.getIntPref("ctb_tabstoolbar_br");
	document.getElementById("customizemybird_cb_ctb_maintoolbar_bh").value = this.prefs.getIntPref("ctb_maintoolbar_bh");
	document.getElementById("customizemybird_cb_ctb_maintoolbar_bw").value = this.prefs.getIntPref("ctb_maintoolbar_bw");
	document.getElementById("customizemybird_cb_ctb_menubar_bh").value = this.prefs.getIntPref("ctb_menubar_bh");
	document.getElementById("customizemybird_cb_ctb_menubar_bw").value = this.prefs.getIntPref("ctb_menubar_bw");
	document.getElementById("customizemybird_ml_ctb_tbmailicons").value = this.prefs.getCharPref("ctb_tbmailicons");
	document.getElementById("customizemybird_cb_nb_tbmailicons_hr").checked = this.prefs.getBoolPref("nb_tbmailicons_hr");
	
	document.getElementById("customizemybird_cb_altaddonsmanager").checked = this.prefs.getBoolPref("altaddonsmanager");
	document.getElementById("customizemybird_cb_altaboutprefs").checked = this.prefs.getBoolPref("altaboutprefs");
	
	if(this.prefs.getBoolPref("altaddonsmanager"))
	  document.getElementById("customizemybird_cb_aerocolors_aam").disabled = false;
	else document.getElementById("customizemybird_cb_aerocolors_aam").disabled = true;
	
	if(this.prefs.getBoolPref("altaboutprefs"))
	  document.getElementById("customizemybird_cb_aerocolors_aap").disabled = false;
	else document.getElementById("customizemybird_cb_aerocolors_aap").disabled = true;
	
	document.getElementById("customizemybird_cb_addonsmanager_compact").checked = this.prefs.getBoolPref("addonsmanager_compact");
	document.getElementById("customizemybird_cb_addonsmanager_version").checked = this.prefs.getBoolPref("addonsmanager_version");
	
	document.getElementById("customizemybird_cb_scrollbars_hidden").checked = this.prefs.getBoolPref("scrollbars_hidden");
	document.getElementById("customizemybird_cb_scrollbar_buttons_hidden").checked = this.prefs.getBoolPref("scrollbar_buttons_hidden");
	document.getElementById("customizemybird_cb_scrollbar_csize").checked = this.prefs.getBoolPref("scrollbar_csize");
	document.getElementById("customizemybird_cb_scrollbar_csize_value").value = this.prefs.getIntPref("scrollbar_csize_value");
	document.getElementById("customizemybird_cb_scrollbar_copacity").checked = this.prefs.getBoolPref("scrollbar_copacity");
	document.getElementById("customizemybird_cb_scrollbar_copacity_value").value = this.prefs.getIntPref("scrollbar_copacity_value");
	document.getElementById("customizemybird_cb_scrollbars_cappearance").checked = this.prefs.getBoolPref("scrollbars_cappearance");
	
	document.getElementById("customizemybird_cb_scrollbars_cappearance_background_color").color = this.prefs.getCharPref("scrollbars_cappearance_background_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_background_colort").value = this.prefs.getCharPref("scrollbars_cappearance_background_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_background_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_background_gradient");

	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_gradient");
	
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_gradient");
	
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_roundness").value = this.prefs.getIntPref("scrollbars_cappearance_thumb_roundness");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border").value = this.prefs.getIntPref("scrollbars_cappearance_thumb_border");
	
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_border_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_border_color");
	
	document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_color").color = this.prefs.getCharPref("scrollbars_cappearance_buttons_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_colort").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_gradient");
	
	document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_color").color = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_colort").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_color");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_gradient");
	document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_roundness").value = this.prefs.getIntPref("scrollbars_cappearance_buttons_roundness");
	
	if (this.appversion < 60) document.getElementById("aboutprefs_gb").style.visibility = 'collapse';

},

classictabs: function() {
  if(this.prefs.getBoolPref("classictabs")) {
	this.prefs.setBoolPref("classictabs",false);
	this.prefs.setBoolPref("classictabsaero",false);
  } else {
	this.prefs.setBoolPref("classictabs",true);
  }
  
  document.getElementById("customizemybird_cb_classictabs").checked = this.prefs.getBoolPref("classictabs");
  document.getElementById("customizemybird_cb_classictabsaero").checked = this.prefs.getBoolPref("classictabsaero");
  
  if(this.prefs.getBoolPref("classictabs"))
	document.getElementById("customizemybird_cb_classictabsaero").disabled = false;
  else document.getElementById("customizemybird_cb_classictabsaero").disabled = true;
},

classictabsaero: function() {
  if(this.prefs.getBoolPref("classictabsaero")) {
	this.prefs.setBoolPref("classictabsaero",false);
  } else {
	if(this.prefs.getBoolPref("classictabs")) this.prefs.setBoolPref("classictabsaero",true);
  }
  
  document.getElementById("customizemybird_cb_classictabs").checked = this.prefs.getBoolPref("classictabs");
  document.getElementById("customizemybird_cb_classictabsaero").checked = this.prefs.getBoolPref("classictabsaero");
},

tabheight: function() {
  this.prefs.setIntPref("tabheight",document.getElementById("customizemybird_cb_tabheight").value);
},

tabborderradius: function() {
  this.prefs.setIntPref("tabborderradius",document.getElementById("customizemybird_cb_tabborderradius").value);
},

tabtbbuttons_bt: function() {
  if(this.prefs.getBoolPref("tabtbbuttons_bt")) this.prefs.setBoolPref("tabtbbuttons_bt",false); else this.prefs.setBoolPref("tabtbbuttons_bt",true);
},

tabtb_lightning: function() {
  if(this.prefs.getBoolPref("tabtb_lightning")) this.prefs.setBoolPref("tabtb_lightning",false); else this.prefs.setBoolPref("tabtb_lightning",true);
},

altaddonsmanager: function() {
  if(this.prefs.getBoolPref("altaddonsmanager")) {
    this.prefs.setBoolPref("altaddonsmanager",false);
	this.prefs.setBoolPref("aerocolors_aam",false);
  } else {
    this.prefs.setBoolPref("altaddonsmanager",true);
  }
  
  document.getElementById("customizemybird_cb_aerocolors_aam").checked = this.prefs.getBoolPref("aerocolors_aam");
  document.getElementById("customizemybird_cb_altaddonsmanager").checked = this.prefs.getBoolPref("altaddonsmanager");
  
  if(this.prefs.getBoolPref("altaddonsmanager"))
	document.getElementById("customizemybird_cb_aerocolors_aam").disabled = false;
  else document.getElementById("customizemybird_cb_aerocolors_aam").disabled = true;
},

addonsmanager_compact: function() {
  if(this.prefs.getBoolPref("addonsmanager_compact")) this.prefs.setBoolPref("addonsmanager_compact",false); else this.prefs.setBoolPref("addonsmanager_compact",true);
},

addonsmanager_version: function() {
  if(this.prefs.getBoolPref("addonsmanager_version")) this.prefs.setBoolPref("addonsmanager_version",false); else this.prefs.setBoolPref("addonsmanager_version",true);
},

altaboutprefs: function() {
  if(this.prefs.getBoolPref("altaboutprefs")) {
    this.prefs.setBoolPref("altaboutprefs",false);
	this.prefs.setBoolPref("aerocolors_aap",false);
  } else {
    this.prefs.setBoolPref("altaboutprefs",true);
  }
  
  document.getElementById("customizemybird_cb_aerocolors_aap").checked = this.prefs.getBoolPref("aerocolors_aap");
  document.getElementById("customizemybird_cb_altaboutprefs").checked = this.prefs.getBoolPref("altaboutprefs");
  
  if(this.prefs.getBoolPref("altaboutprefs"))
	document.getElementById("customizemybird_cb_aerocolors_aap").disabled = false;
  else document.getElementById("customizemybird_cb_aerocolors_aap").disabled = true;
},

menubarposition: function(which) {
  this.prefs.setCharPref("menubarposition",which);
  if(which=="menubar_above_tabs") this.prefs.setBoolPref("aerocolors_mb",false);
  
  document.getElementById("customizemybird_rg_menubarposition").value = this.prefs.getCharPref("menubarposition");
  document.getElementById("customizemybird_cb_aerocolors_mb").checked = this.prefs.getBoolPref("aerocolors_mb");
  
  if(this.prefs.getCharPref("menubarposition")!="menubar_below_tabs")
	document.getElementById("customizemybird_cb_aerocolors_mb").disabled = true;
  else document.getElementById("customizemybird_cb_aerocolors_mb").disabled = false;
},

menubar_compact: function() {
  if(this.prefs.getBoolPref("menubar_compact")) this.prefs.setBoolPref("menubar_compact",false); else this.prefs.setBoolPref("menubar_compact",true);
},

main_tb_compact: function() {
  if(this.prefs.getBoolPref("main_tb_compact")) this.prefs.setBoolPref("main_tb_compact",false); else this.prefs.setBoolPref("main_tb_compact",true);
},

status_hidden: function() {
  if(this.prefs.getBoolPref("statusbar_hidden")) this.prefs.setBoolPref("statusbar_hidden",false); else this.prefs.setBoolPref("statusbar_hidden",true);
},

attachmentbox_hp: function() {
  if(this.prefs.getBoolPref("attachmentbox_hp")) this.prefs.setBoolPref("attachmentbox_hp",false); else this.prefs.setBoolPref("attachmentbox_hp",true);
},

attachmentbox_bp: function() {
  if(this.prefs.getBoolPref("attachmentbox_bp")) this.prefs.setBoolPref("attachmentbox_bp",false); else this.prefs.setBoolPref("attachmentbox_bp",true);
},

quickfilterbar_lp: function() {
  if(this.prefs.getBoolPref("quickfilterbar_lp")) this.prefs.setBoolPref("quickfilterbar_lp",false); else this.prefs.setBoolPref("quickfilterbar_lp",true);
},

treecol: function() {
  if(this.prefs.getBoolPref("treecol")) {
	this.prefs.setBoolPref("treecol",false);
	this.prefs.setBoolPref("treecol_aero",false);
  } else this.prefs.setBoolPref("treecol",true);
  
  document.getElementById("customizemybird_cb_treecol").checked = this.prefs.getBoolPref("treecol");
  document.getElementById("customizemybird_cb_treecol_aero").checked = this.prefs.getBoolPref("treecol_aero");
  
  if(this.prefs.getBoolPref("treecol"))
	document.getElementById("customizemybird_cb_treecol_aero").disabled = false;
  else document.getElementById("customizemybird_cb_treecol_aero").disabled = true;
},

treecol_aero: function() {
  if(this.prefs.getBoolPref("treecol_aero"))
	this.prefs.setBoolPref("treecol_aero",false);
  else {
	if(this.prefs.getBoolPref("treecol")) this.prefs.setBoolPref("treecol_aero",true);
  }
  
  document.getElementById("customizemybird_cb_treecol").checked = this.prefs.getBoolPref("treecol");
  document.getElementById("customizemybird_cb_treecol_aero").checked = this.prefs.getBoolPref("treecol_aero");
},

winheader: function() {
  if(this.prefs.getBoolPref("winheader")) this.prefs.setBoolPref("winheader",false); else this.prefs.setBoolPref("winheader",true);
},

winheaderbg: function() {
  this.prefs.setCharPref("winheaderbg",document.getElementById("customizemybird_cb_winheaderbg").color);
  document.getElementById("customizemybird_cb_winheaderbgt").value = this.prefs.getCharPref("winheaderbg");
},

winheaderbgt: function() {
  this.prefs.setCharPref("winheaderbg",document.getElementById("customizemybird_cb_winheaderbgt").value);
  document.getElementById("customizemybird_cb_winheaderbg").color = this.prefs.getCharPref("winheaderbg");
},

winheadertc: function() {
  this.prefs.setCharPref("winheadertc",document.getElementById("customizemybird_cb_winheadertc").color);
  document.getElementById("customizemybird_cb_winheadertct").value = this.prefs.getCharPref("winheadertc");
},

winheadertct: function() {
  this.prefs.setCharPref("winheadertc",document.getElementById("customizemybird_cb_winheadertct").value);
  document.getElementById("customizemybird_cb_winheadertc").color = this.prefs.getCharPref("winheadertc");
},

winheadercc: function() {
  this.prefs.setCharPref("winheadercc",document.getElementById("customizemybird_cb_winheadercc").color);
  document.getElementById("customizemybird_cb_winheadercct").value = this.prefs.getCharPref("winheadercc");
},

winheadercct: function() {
  this.prefs.setCharPref("winheadercc",document.getElementById("customizemybird_cb_winheadercct").value);
  document.getElementById("customizemybird_cb_winheadercc").color = this.prefs.getCharPref("winheadercc");
},

appmenubutton: function() {
  if(this.prefs.getBoolPref("appmenubutton")) this.prefs.setBoolPref("appmenubutton",false); else this.prefs.setBoolPref("appmenubutton",true);
},

appmenubuttonct: function() {
  if(this.prefs.getBoolPref("appmenubuttonct")) this.prefs.setBoolPref("appmenubuttonct",false); else this.prefs.setBoolPref("appmenubuttonct",true);
},

appmenubuttonc1: function() {
  this.prefs.setCharPref("appmenubuttonc1",document.getElementById("customizemybird_cb_appmenubuttonc1").color);
  document.getElementById("customizemybird_cb_appmenubuttonc1t").value = this.prefs.getCharPref("appmenubuttonc1");
},

appmenubuttonc1t: function() {
  this.prefs.setCharPref("appmenubuttonc1",document.getElementById("customizemybird_cb_appmenubuttonc1t").value);
  document.getElementById("customizemybird_cb_appmenubuttonc1").color = this.prefs.getCharPref("appmenubuttonc1");
},

appmenubuttonc2: function() {
  this.prefs.setCharPref("appmenubuttonc2",document.getElementById("customizemybird_cb_appmenubuttonc2").color);
  document.getElementById("customizemybird_cb_appmenubuttonc2t").value = this.prefs.getCharPref("appmenubuttonc2");
},

appmenubuttonc2t: function() {
  this.prefs.setCharPref("appmenubuttonc2",document.getElementById("customizemybird_cb_appmenubuttonc2t").value);
  document.getElementById("customizemybird_cb_appmenubuttonc2").color = this.prefs.getCharPref("appmenubuttonc2");
},

appmenubuttontxt: function() {
  this.prefs.setCharPref("appmenubuttontxt",document.getElementById("customizemybird_cb_appmenubuttontxt").value);
},

appmenubuttontxtc: function() {
  this.prefs.setCharPref("appmenubuttontxtc",document.getElementById("customizemybird_cb_appmenubuttontxtc").color);
  document.getElementById("customizemybird_cb_appmenubuttontxtct").value = document.getElementById("customizemybird_cb_appmenubuttontxtc").color;
},

appmenubuttontxtct: function() {
  this.prefs.setCharPref("appmenubuttontxtc",document.getElementById("customizemybird_cb_appmenubuttontxtct").value);
  document.getElementById("customizemybird_cb_appmenubuttontxtc").color = document.getElementById("customizemybird_cb_appmenubuttontxtct").value;
},

appmenubuttontxtcs: function() {
  this.prefs.setCharPref("appmenubuttontxtcs",document.getElementById("customizemybird_cb_appmenubuttontxtcs").color);
  document.getElementById("customizemybird_cb_appmenubuttontxtcst").value = document.getElementById("customizemybird_cb_appmenubuttontxtcs").color;
},

appmenubuttontxtcst: function() {
  this.prefs.setCharPref("appmenubuttontxtcs",document.getElementById("customizemybird_cb_appmenubuttontxtcst").value);
  document.getElementById("customizemybird_cb_appmenubuttontxtcs").color = document.getElementById("customizemybird_cb_appmenubuttontxtcst").value;
},

appmenubuttonhp: function() {
  if(this.prefs.getBoolPref("appmenubuttonhp")) this.prefs.setBoolPref("appmenubuttonhp",false); else this.prefs.setBoolPref("appmenubuttonhp",true);
},

appmenubuttondm: function() {
  if(this.prefs.getBoolPref("appmenubuttondm")) this.prefs.setBoolPref("appmenubuttondm",false); else this.prefs.setBoolPref("appmenubuttondm",true);
},

appmenubuttonicon: function(which) {
  this.prefs.setCharPref("appmenubuttonicon",which);
},

aerocolors: function() {
  if(this.prefs.getBoolPref("aerocolors")) this.prefs.setBoolPref("aerocolors",false); else this.prefs.setBoolPref("aerocolors",true);
},

aerocolors_mb: function() {
  if(this.prefs.getBoolPref("aerocolors_mb")) {
	this.prefs.setBoolPref("aerocolors_mb",false);
  } else {
	if(this.prefs.getCharPref("menubarposition")=="menubar_below_tabs") this.prefs.setBoolPref("aerocolors_mb",true);
  }
  
  document.getElementById("customizemybird_rg_menubarposition").value = this.prefs.getCharPref("menubarposition");
  document.getElementById("customizemybird_cb_aerocolors_mb").checked = this.prefs.getBoolPref("aerocolors_mb");
},

aerocolors_aam: function() {
  if(this.prefs.getBoolPref("aerocolors_aam")) {
   this.prefs.setBoolPref("aerocolors_aam",false);
  } else {
    if(this.prefs.getBoolPref("altaddonsmanager")) this.prefs.setBoolPref("aerocolors_aam",true);
  }
  
  document.getElementById("customizemybird_cb_aerocolors_aam").checked = this.prefs.getBoolPref("aerocolors_aam");
  document.getElementById("customizemybird_cb_altaddonsmanager").checked = this.prefs.getBoolPref("altaddonsmanager");
},

aerocolors_aap: function() {
  if(this.prefs.getBoolPref("aerocolors_aap")) {
   this.prefs.setBoolPref("aerocolors_aap",false);
  } else {
    if(this.prefs.getBoolPref("altaboutprefs")) this.prefs.setBoolPref("aerocolors_aap",true);
  }
  
  document.getElementById("customizemybird_cb_aerocolors_aap").checked = this.prefs.getBoolPref("aerocolors_aap");
  document.getElementById("customizemybird_cb_altaboutprefs").checked = this.prefs.getBoolPref("altaboutprefs");
},

ctb_maintoolbar: function() {
  if(this.prefs.getBoolPref("ctb_maintoolbar")) this.prefs.setBoolPref("ctb_maintoolbar",false); else this.prefs.setBoolPref("ctb_maintoolbar",true);
},

ctb_menubar: function() {
  if(this.prefs.getBoolPref("ctb_menubar")) this.prefs.setBoolPref("ctb_menubar",false); else this.prefs.setBoolPref("ctb_menubar",true);
},

ctb_tabstoolbar: function() {
  if(this.prefs.getBoolPref("ctb_tabstoolbar")) this.prefs.setBoolPref("ctb_tabstoolbar",false); else this.prefs.setBoolPref("ctb_tabstoolbar",true);
},

ctb_maintoolbar_br: function() {
  this.prefs.setIntPref("ctb_maintoolbar_br",document.getElementById("customizemybird_cb_ctb_maintoolbar_br").value);
},

ctb_menubar_br: function() {
  this.prefs.setIntPref("ctb_menubar_br",document.getElementById("customizemybird_cb_ctb_menubar_br").value);
},

ctb_tabstoolbar_br: function() {
  this.prefs.setIntPref("ctb_tabstoolbar_br",document.getElementById("customizemybird_cb_ctb_tabstoolbar_br").value);
},

ctb_maintoolbar_bh: function() {
  this.prefs.setIntPref("ctb_maintoolbar_bh",document.getElementById("customizemybird_cb_ctb_maintoolbar_bh").value);
},

ctb_maintoolbar_bw: function() {
  this.prefs.setIntPref("ctb_maintoolbar_bw",document.getElementById("customizemybird_cb_ctb_maintoolbar_bw").value);
},

ctb_menubar_bh: function() {
  this.prefs.setIntPref("ctb_menubar_bh",document.getElementById("customizemybird_cb_ctb_menubar_bh").value);
},

ctb_menubar_bw: function() {
  this.prefs.setIntPref("ctb_menubar_bw",document.getElementById("customizemybird_cb_ctb_menubar_bw").value);
},

ctb_tbmailicons: function(which) {
  this.prefs.setCharPref("ctb_tbmailicons",which);
},

nb_tbmailicons_hr: function() {
  if(this.prefs.getBoolPref("nb_tbmailicons_hr")) this.prefs.setBoolPref("nb_tbmailicons_hr",false); else this.prefs.setBoolPref("nb_tbmailicons_hr",true);
},

scrollbars_hidden: function() {
  if(this.prefs.getBoolPref("scrollbars_hidden")) this.prefs.setBoolPref("scrollbars_hidden",false); else this.prefs.setBoolPref("scrollbars_hidden",true);
},

scrollbar_buttons_hidden: function() {
  if(this.prefs.getBoolPref("scrollbar_buttons_hidden")) this.prefs.setBoolPref("scrollbar_buttons_hidden",false); else this.prefs.setBoolPref("scrollbar_buttons_hidden",true);
},

scrollbar_csize: function() {
  if(this.prefs.getBoolPref("scrollbar_csize")) this.prefs.setBoolPref("scrollbar_csize",false); else this.prefs.setBoolPref("scrollbar_csize",true);
},

scrollbar_csize_value: function() {
  this.prefs.setIntPref("scrollbar_csize_value",document.getElementById("customizemybird_cb_scrollbar_csize_value").value);
},

scrollbar_copacity: function() {
  if(this.prefs.getBoolPref("scrollbar_copacity")) this.prefs.setBoolPref("scrollbar_copacity",false); else this.prefs.setBoolPref("scrollbar_copacity",true);
},

scrollbar_copacity_value: function() {
  this.prefs.setIntPref("scrollbar_copacity_value",document.getElementById("customizemybird_cb_scrollbar_copacity_value").value);
},

scrollbars_cappearance: function() {
  if(this.prefs.getBoolPref("scrollbars_cappearance")) this.prefs.setBoolPref("scrollbars_cappearance",false); else this.prefs.setBoolPref("scrollbars_cappearance",true);
},

scrollbars_cappearance_background_color: function() {
  this.prefs.setCharPref("scrollbars_cappearance_background_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_background_color").color);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_background_colort").value = this.prefs.getCharPref("scrollbars_cappearance_background_color");
},

scrollbars_cappearance_background_colort: function() {
  this.prefs.setCharPref("scrollbars_cappearance_background_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_background_colort").value);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_background_color").color = this.prefs.getCharPref("scrollbars_cappearance_background_color");
},

scrollbars_cappearance_background_gradient: function() {
  this.prefs.setCharPref("scrollbars_cappearance_background_gradient",document.getElementById("customizemybird_cb_scrollbars_cappearance_background_gradient").value);
},

scrollbars_cappearance_thumb_color: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_color").color);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_color");
},

scrollbars_cappearance_thumb_colort: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_colort").value);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_color");
},

scrollbars_cappearance_thumb_gradient: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_gradient",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_gradient").value);
},

scrollbars_cappearance_thumb_hover_color: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_hover_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_color").color);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_color");
},

scrollbars_cappearance_thumb_hover_colort: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_hover_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_colort").value);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_color");
},

scrollbars_cappearance_thumb_hover_gradient: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_hover_gradient",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_hover_gradient").value);
},

scrollbars_cappearance_thumb_roundness: function() {
  this.prefs.setIntPref("scrollbars_cappearance_thumb_roundness",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_roundness").value);
},

scrollbars_cappearance_thumb_border: function() {
  this.prefs.setIntPref("scrollbars_cappearance_thumb_border",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border").value);
},

scrollbars_cappearance_thumb_border_color: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_border_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border_color").color);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_border_color");
},

scrollbars_cappearance_thumb_border_colort: function() {
  this.prefs.setCharPref("scrollbars_cappearance_thumb_border_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border_colort").value);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_thumb_border_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_border_color");
},

scrollbars_cappearance_buttons_color: function() {
  this.prefs.setCharPref("scrollbars_cappearance_buttons_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_color").color);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_colort").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_color");
},

scrollbars_cappearance_buttons_colort: function() {
  this.prefs.setCharPref("scrollbars_cappearance_buttons_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_colort").value);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_color").color = this.prefs.getCharPref("scrollbars_cappearance_buttons_color");
},

scrollbars_cappearance_buttons_gradient: function() {
  this.prefs.setCharPref("scrollbars_cappearance_buttons_gradient",document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_gradient").value);
},

scrollbars_cappearance_buttons_hover_color: function() {
  this.prefs.setCharPref("scrollbars_cappearance_buttons_hover_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_color").color);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_colort").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_color");
},

scrollbars_cappearance_buttons_hover_colort: function() {
  this.prefs.setCharPref("scrollbars_cappearance_buttons_hover_color",document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_colort").value);
  document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_color").color = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_color");
},

scrollbars_cappearance_buttons_hover_gradient: function() {
  this.prefs.setCharPref("scrollbars_cappearance_buttons_hover_gradient",document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_hover_gradient").value);
},

scrollbars_cappearance_buttons_roundness: function() {
  this.prefs.setIntPref("scrollbars_cappearance_buttons_roundness",document.getElementById("customizemybird_cb_scrollbars_cappearance_buttons_roundness").value);
}

}

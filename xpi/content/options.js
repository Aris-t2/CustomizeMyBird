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
	  
	var preferenceList = Services.prefs.getChildList("extensions.customizemybirdextension.");
	
	// initial settings
	for (var i = 0; i < preferenceList.length; i++) {
		
	  var currentpref = preferenceList[i].replace("extensions.customizemybirdextension.", "");
	  
	  // CMB offers multiple variations for the 'Char' variable:
	  // menulists, colopickers or textboxes prefs can not be determined by or from preference name or value, so CMB tries to initiate all of them
	  switch (Services.prefs.getPrefType(preferenceList[i])){
		case 32:
		  try { if(document.getElementById("customizemybird_rg_"+currentpref))
				document.getElementById("customizemybird_rg_"+currentpref).value = Services.prefs.getCharPref(preferenceList[i]);
		  } catch(e) {}
		  try { if(document.getElementById("customizemybird_cp_"+currentpref)) 
				document.getElementById("customizemybird_cp_"+currentpref).value = Services.prefs.getCharPref(preferenceList[i]);
		  } catch(e) {}
		  try { if(document.getElementById("customizemybird_tb_"+currentpref))
				document.getElementById("customizemybird_tb_"+currentpref).value = Services.prefs.getCharPref(preferenceList[i]);
		  } catch(e) {}
		  try { if(document.getElementById("customizemybird_tb_"+currentpref+"t"))
				document.getElementById("customizemybird_tb_"+currentpref+"t").value = Services.prefs.getCharPref(preferenceList[i]);
		  } catch(e) {}
		break;
		case 64:
		  try { document.getElementById("customizemybird_num_"+currentpref).value = Services.prefs.getIntPref(preferenceList[i]); } catch(e) {}
		break;
		case 128:
		  try { document.getElementById("customizemybird_cb_"+currentpref).checked = Services.prefs.getBoolPref(preferenceList[i]); } catch(e) {}
		break;	
	  }
	}

	if (this.appversion < 57 && !this.tbdefaulttheme) { 
	  document.getElementById('CustomizeMyBird_prefwindow').style.minWidth = '800px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.maxWidth = '800px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.minHeight = '300px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.maxHeight = '300px';
	} 
		
	if (this.appversion < 60) {
	  document.getElementById("customizemybird_aboutpreferences").style.visibility = 'collapse';
	  document.getElementById("cmb_cat_aboutpreferences").style.visibility = 'collapse';
	}

  },

  manageBoolPref: function(which) {
	this.prefs.setBoolPref(which,!this.prefs.getBoolPref(which));
  },

  manageCharPref: function(pref,value) {
	this.prefs.setCharPref(pref,value);
  },

  manageIntPref: function(pref,value) {
	this.prefs.setIntPref(pref,value);
  },

  manageColorPref: function(fromwhere,which) {

	if(fromwhere=="cp") { // color picker
		this.prefs.setCharPref(which,document.getElementById("customizemybird_cp_"+which).value);	
		document.getElementById("customizemybird_tb_"+which+"t").value = this.prefs.getCharPref(which);
	} else { // textbox
		this.prefs.setCharPref(which,document.getElementById("customizemybird_tb_"+which+"t").value);
		document.getElementById("customizemybird_cp_"+which).value = this.prefs.getCharPref(which);
	}
		
  },

  tabheight: function(decinc) {
	if (decinc=="increase") {
		this.prefs.setIntPref("tabheight",this.prefs.getIntPref("tabheight")+1);
	} else {
		if (this.prefs.getIntPref("tabheight")<=24) return;
		else this.prefs.setIntPref("tabheight",this.prefs.getIntPref("tabheight")-1);
	}
	document.getElementById("customizemybird_num_tabheight").value=this.prefs.getIntPref("tabheight");
  }

}

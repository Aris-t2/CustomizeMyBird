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

	if (this.appversion < 57 && !this.tbdefaulttheme) { 
	  document.getElementById('CustomizeMyBird_prefwindow').style.minWidth = '800px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.maxWidth = '800px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.minHeight = '300px';
	  document.getElementById('CustomizeMyBird_prefwindow').style.maxHeight = '300px';
	} 
	
	document.getElementById("customizemybird_rg_classictabsui").value = this.prefs.getCharPref("classictabsui");

	document.getElementById("customizemybird_num_tabheight").value = this.prefs.getIntPref("tabheight");
	document.getElementById("customizemybird_num_tabborderradius").value = this.prefs.getIntPref("tabborderradius");
	document.getElementById("customizemybird_cb_tabtbbuttons_bt").checked = this.prefs.getBoolPref("tabtbbuttons_bt");
	document.getElementById("customizemybird_cb_tabtb_lightning").checked = this.prefs.getBoolPref("tabtb_lightning");
	document.getElementById("customizemybird_rg_menubarposition").value = this.prefs.getCharPref("menubarposition");
	
	document.getElementById("customizemybird_cb_menubar_compact").checked = this.prefs.getBoolPref("menubar_compact");
	document.getElementById("customizemybird_cb_main_tb_compact").checked = this.prefs.getBoolPref("main_tb_compact");
	document.getElementById("customizemybird_cb_status_hidden").checked = this.prefs.getBoolPref("statusbar_hidden");
	document.getElementById("customizemybird_cb_attachmentbox_hp").checked = this.prefs.getBoolPref("attachmentbox_hp");
	document.getElementById("customizemybird_cb_attachmentbox_bp").checked = this.prefs.getBoolPref("attachmentbox_bp");
	document.getElementById("customizemybird_cb_quickfilterbar_lp").checked = this.prefs.getBoolPref("quickfilterbar_lp");
	document.getElementById("customizemybird_rg_quickfilterbar").value = this.prefs.getCharPref("quickfilterbar");
	document.getElementById("customizemybird_rg_treecolumnsui").value = this.prefs.getCharPref("treecolumnsui");
	
	document.getElementById("customizemybird_rg_categories").value = this.prefs.getCharPref("cmbcategories");
	
	document.getElementById("customizemybird_cb_appmenubutton").checked = this.prefs.getBoolPref("appmenubutton");
	document.getElementById("customizemybird_cb_appmenubuttonct").checked = this.prefs.getBoolPref("appmenubuttonct");
	document.getElementById("customizemybird_cp_appmenubuttonc1").color = this.prefs.getCharPref("appmenubuttonc1");
	document.getElementById("customizemybird_tb_appmenubuttonc1t").value = this.prefs.getCharPref("appmenubuttonc1");
	document.getElementById("customizemybird_cp_appmenubuttonc2").color = this.prefs.getCharPref("appmenubuttonc2");
	document.getElementById("customizemybird_tb_appmenubuttonc2t").value = this.prefs.getCharPref("appmenubuttonc2");
	document.getElementById("customizemybird_tb_appmenubuttontxt").value = this.prefs.getCharPref("appmenubuttontxt");
	document.getElementById("customizemybird_cp_appmenubuttontxtc").color = this.prefs.getCharPref("appmenubuttontxtc");
	document.getElementById("customizemybird_tb_appmenubuttontxtct").value = this.prefs.getCharPref("appmenubuttontxtc");
	document.getElementById("customizemybird_cp_appmenubuttontxtcs").color = this.prefs.getCharPref("appmenubuttontxtcs");
	document.getElementById("customizemybird_tb_appmenubuttontxtcst").value = this.prefs.getCharPref("appmenubuttontxtcs");
	document.getElementById("customizemybird_cb_appmenubuttonhp").checked = this.prefs.getBoolPref("appmenubuttonhp");
	document.getElementById("customizemybird_cb_appmenubuttondm").checked = this.prefs.getBoolPref("appmenubuttondm");
	document.getElementById("customizemybird_rg_appmenubuttonicon").value = this.prefs.getCharPref("appmenubuttonicon");
	
	document.getElementById("customizemybird_cb_winheader").checked = this.prefs.getBoolPref("winheader");
	document.getElementById("customizemybird_cp_winheaderbg").color = this.prefs.getCharPref("winheaderbg");
	document.getElementById("customizemybird_tb_winheaderbgt").value = this.prefs.getCharPref("winheaderbg");
	document.getElementById("customizemybird_cp_winheadertc").color = this.prefs.getCharPref("winheadertc");
	document.getElementById("customizemybird_tb_winheadertct").value = this.prefs.getCharPref("winheadertc");
	document.getElementById("customizemybird_cp_winheadercc").color = this.prefs.getCharPref("winheadercc");
	document.getElementById("customizemybird_tb_winheadercct").value = this.prefs.getCharPref("winheadercc");
	
	document.getElementById("customizemybird_rg_toolbarsui").value = this.prefs.getCharPref("toolbarsui");
	
	document.getElementById("customizemybird_cb_ctb_maintoolbar").checked = this.prefs.getBoolPref("ctb_maintoolbar");
	document.getElementById("customizemybird_cb_ctb_menubar").checked = this.prefs.getBoolPref("ctb_menubar");
	document.getElementById("customizemybird_cb_ctb_tabstoolbar").checked = this.prefs.getBoolPref("ctb_tabstoolbar");
	document.getElementById("customizemybird_num_ctb_maintoolbar_br").value = this.prefs.getIntPref("ctb_maintoolbar_br");
	document.getElementById("customizemybird_num_ctb_menubar_br").value = this.prefs.getIntPref("ctb_menubar_br");
	document.getElementById("customizemybird_num_ctb_tabstoolbar_br").value = this.prefs.getIntPref("ctb_tabstoolbar_br");
	document.getElementById("customizemybird_num_ctb_maintoolbar_bh").value = this.prefs.getIntPref("ctb_maintoolbar_bh");
	document.getElementById("customizemybird_num_ctb_maintoolbar_bw").value = this.prefs.getIntPref("ctb_maintoolbar_bw");
	document.getElementById("customizemybird_num_ctb_menubar_bh").value = this.prefs.getIntPref("ctb_menubar_bh");
	document.getElementById("customizemybird_num_ctb_menubar_bw").value = this.prefs.getIntPref("ctb_menubar_bw");
	document.getElementById("customizemybird_rg_ctb_tbmailicons").value = this.prefs.getCharPref("ctb_tbmailicons");
	document.getElementById("customizemybird_cb_nb_tbmailicons_hr").checked = this.prefs.getBoolPref("nb_tbmailicons_hr");
	document.getElementById("customizemybird_cb_tb_nofoldericons").checked = this.prefs.getBoolPref("tb_nofoldericons");
	
	document.getElementById("customizemybird_rg_aboutaddonsui").value = this.prefs.getCharPref("aboutaddonsui");
	document.getElementById("customizemybird_rg_aboutprefsui").value = this.prefs.getCharPref("aboutprefsui");
	
	document.getElementById("customizemybird_cb_addonsmanager_compact").checked = this.prefs.getBoolPref("addonsmanager_compact");
	document.getElementById("customizemybird_cb_addonsmanager_version").checked = this.prefs.getBoolPref("addonsmanager_version");
	document.getElementById("customizemybird_cb_addon_lastupdateddate").checked = this.prefs.getBoolPref("addon_lastupdateddate");
	
	document.getElementById("customizemybird_cb_scrollbars_hidden").checked = this.prefs.getBoolPref("scrollbars_hidden");
	document.getElementById("customizemybird_cb_scrollbar_buttons_hidden").checked = this.prefs.getBoolPref("scrollbar_buttons_hidden");
	document.getElementById("customizemybird_cb_scrollbar_csize").checked = this.prefs.getBoolPref("scrollbar_csize");
	document.getElementById("customizemybird_num_scrollbar_csize_value").value = this.prefs.getIntPref("scrollbar_csize_value");
	document.getElementById("customizemybird_cb_scrollbar_copacity").checked = this.prefs.getBoolPref("scrollbar_copacity");
	document.getElementById("customizemybird_num_scrollbar_copacity_value").value = this.prefs.getIntPref("scrollbar_copacity_value");
	document.getElementById("customizemybird_cb_scrollbars_cappearance").checked = this.prefs.getBoolPref("scrollbars_cappearance");
	
	document.getElementById("customizemybird_cp_scrollbars_cappearance_background_color").color = this.prefs.getCharPref("scrollbars_cappearance_background_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_background_colort").value = this.prefs.getCharPref("scrollbars_cappearance_background_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_background_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_background_gradient");

	document.getElementById("customizemybird_cp_scrollbars_cappearance_thumb_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_thumb_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_thumb_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_gradient");
	
	document.getElementById("customizemybird_cp_scrollbars_cappearance_thumb_hover_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_thumb_hover_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_thumb_hover_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_hover_gradient");
	
	document.getElementById("customizemybird_num_scrollbars_cappearance_thumb_roundness").value = this.prefs.getIntPref("scrollbars_cappearance_thumb_roundness");
	document.getElementById("customizemybird_num_scrollbars_cappearance_thumb_border").value = this.prefs.getIntPref("scrollbars_cappearance_thumb_border");
	
	document.getElementById("customizemybird_cp_scrollbars_cappearance_thumb_border_color").color = this.prefs.getCharPref("scrollbars_cappearance_thumb_border_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_thumb_border_colort").value = this.prefs.getCharPref("scrollbars_cappearance_thumb_border_color");
	
	document.getElementById("customizemybird_cp_scrollbars_cappearance_buttons_color").color = this.prefs.getCharPref("scrollbars_cappearance_buttons_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_buttons_colort").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_buttons_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_gradient");
	
	document.getElementById("customizemybird_cp_scrollbars_cappearance_buttons_hover_color").color = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_buttons_hover_colort").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_color");
	document.getElementById("customizemybird_tb_scrollbars_cappearance_buttons_hover_gradient").value = this.prefs.getCharPref("scrollbars_cappearance_buttons_hover_gradient");
	document.getElementById("customizemybird_num_scrollbars_cappearance_buttons_roundness").value = this.prefs.getIntPref("scrollbars_cappearance_buttons_roundness");

	document.getElementById("customizemybird_cb_customcss").checked = this.prefs.getBoolPref("customcss");
	document.getElementById("customizemybird_tb_customcss").value = this.prefs.getCharPref("customcsstb");
	
	if (this.appversion < 60) {
	  document.getElementById("customizemybird_aboutpreferences").style.visibility = 'collapse';
	  document.getElementById("cmb_cat_aboutpreferences").style.visibility = 'collapse';
	}

  },

  manageBoolPref: function(which) {
	if(this.prefs.getBoolPref(which)) this.prefs.setBoolPref(which,false); else this.prefs.setBoolPref(which,true);
  },

  manageCharPref: function(pref,value) {
	this.prefs.setCharPref(pref,value);
  },

  manageIntPref: function(pref,value) {
	this.prefs.setIntPref(pref,value);
  },

  manageColorPref: function(fromwhere,which) {

	if(fromwhere=="cp") { // color picker
		this.prefs.setCharPref(which,document.getElementById("customizemybird_cp_"+which).color);
		document.getElementById("customizemybird_tb_"+which+"t").value = this.prefs.getCharPref(which);
	} else { // textbox
		this.prefs.setCharPref(which,document.getElementById("customizemybird_tb_"+which+"t").value);
		document.getElementById("customizemybird_cp_"+which).color = this.prefs.getCharPref(which);
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

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

var os_platform = Services.appinfo.OS;
var app_version = parseInt(Services.appinfo.version);
var tbdefaulttheme = Services.prefs.getBranch("general.skins.").getCharPref("selectedSkin") == 'classic/1.0';

function install(params, reason) { }

function uninstall(params, reason) {

	// Double check to not delete branch on upgrade.
	// Remove branch on 'real' uninstall only.
	if(ADDON_UPGRADE==reason){return;}
	  else if (ADDON_UNINSTALL!=reason) {return;}
		else {Services.prefs.getBranch("extensions.customizemybirdextension.").deleteBranch("");}
}

function startup(params, reason){
	
  var defaultbranch = Services.prefs.getDefaultBranch("extensions.customizemybirdextension.");

  defaultbranch.setBoolPref("classictabs",true);
  defaultbranch.setBoolPref("classictabsaero",false);
  defaultbranch.setIntPref("tabheight",26);
  defaultbranch.setIntPref("tabborderradius",3);
  defaultbranch.setBoolPref("tabtbbuttons_bt",false);
  defaultbranch.setBoolPref("tabtb_lightning",false);
  defaultbranch.setBoolPref("altaddonsmanager",true);
  defaultbranch.setBoolPref("addonsmanager_compact",false);
  defaultbranch.setBoolPref("addonsmanager_version",false);
  defaultbranch.setCharPref("menubarposition","menubar_below_tabs");
  defaultbranch.setBoolPref("menubar_compact",false);
  defaultbranch.setBoolPref("main_tb_compact",false);
  defaultbranch.setBoolPref("statusbar_hidden",false);
  defaultbranch.setBoolPref("attachmentbox_hp",false);
  defaultbranch.setBoolPref("attachmentbox_bp",false);
  defaultbranch.setBoolPref("quickfilterbar_lp",false);
  defaultbranch.setBoolPref("appmenubutton",false);
  defaultbranch.setBoolPref("appmenubuttonct",false);
  defaultbranch.setCharPref("appmenubuttonc1","#33CCFF");
  defaultbranch.setCharPref("appmenubuttonc2","#3366FF");
  defaultbranch.setCharPref("appmenubuttontxt","Thunderbird");
  defaultbranch.setCharPref("appmenubuttontxtc","#FFFFFF");
  defaultbranch.setCharPref("appmenubuttontxtcs","#000000");
  defaultbranch.setBoolPref("appmenubuttonhp",true);
  defaultbranch.setBoolPref("appmenubuttondm",true);
  defaultbranch.setCharPref("appmenubuttonicon","tb_icon_none");
  defaultbranch.setBoolPref("aerocolors",false);
  defaultbranch.setBoolPref("aerocolors_mb",false);
  defaultbranch.setBoolPref("aerocolors_aam",false);
  defaultbranch.setBoolPref("winheader",false);
  defaultbranch.setCharPref("winheaderbg","#eaf2fb");
  defaultbranch.setCharPref("winheadertc","#000000");
  defaultbranch.setBoolPref("treecol",false);
  defaultbranch.setBoolPref("treecol_aero",false);
  
  defaultbranch.setBoolPref("ctb_maintoolbar",false);
  defaultbranch.setIntPref("ctb_maintoolbar_br",0);
  defaultbranch.setIntPref("ctb_maintoolbar_bh",0);
  defaultbranch.setIntPref("ctb_maintoolbar_bw",0);
  defaultbranch.setBoolPref("ctb_menubar",false);
  defaultbranch.setIntPref("ctb_menubar_br",0);
  defaultbranch.setIntPref("ctb_menubar_bh",0);
  defaultbranch.setIntPref("ctb_menubar_bw",0);
  defaultbranch.setBoolPref("ctb_tabstoolbar",false);
  defaultbranch.setIntPref("ctb_tabstoolbar_br",0);
  defaultbranch.setCharPref("ctb_tbmailicons","ico_default");
  defaultbranch.setBoolPref("nb_tbmailicons_hr",false);
  
  defaultbranch.setBoolPref("scrollbars_hidden",false);
  defaultbranch.setBoolPref("scrollbar_buttons_hidden",false);
  defaultbranch.setBoolPref("scrollbar_csize",false);
  defaultbranch.setIntPref("scrollbar_csize_value",17);
  defaultbranch.setBoolPref("scrollbar_copacity",false);
  defaultbranch.setIntPref("scrollbar_copacity_value",99);
  
  defaultbranch.setBoolPref("scrollbars_cappearance",false);
  
  defaultbranch.setCharPref("scrollbars_cappearance_background_color","#CCCCCC");
  defaultbranch.setCharPref("scrollbars_cappearance_background_gradient","transparent,rgba(255,255,255,0.5),transparent");
  defaultbranch.setCharPref("scrollbars_cappearance_thumb_color","#33CCFF");
  defaultbranch.setCharPref("scrollbars_cappearance_thumb_gradient","transparent,rgba(255,255,255,0.5),transparent");
  defaultbranch.setCharPref("scrollbars_cappearance_thumb_hover_color","#66FFFF");
  defaultbranch.setCharPref("scrollbars_cappearance_thumb_hover_gradient","transparent,rgba(255,255,255,0.5),transparent");
  defaultbranch.setIntPref("scrollbars_cappearance_thumb_roundness",0);
  defaultbranch.setIntPref("scrollbars_cappearance_thumb_border",0);
  defaultbranch.setCharPref("scrollbars_cappearance_thumb_border_color","#33CCFF");
  defaultbranch.setCharPref("scrollbars_cappearance_buttons_color","#000000");
  defaultbranch.setCharPref("scrollbars_cappearance_buttons_gradient","transparent,rgba(255,255,255,0.5),transparent");
  defaultbranch.setCharPref("scrollbars_cappearance_buttons_hover_color","#000066");
  defaultbranch.setCharPref("scrollbars_cappearance_buttons_hover_gradient","transparent,rgba(255,255,255,0.5),transparent");
  defaultbranch.setIntPref("scrollbars_cappearance_buttons_roundness",0);
  
  PrefsObserver.init();
}

function shutdown(params, reason){
	PrefsObserver.shutdown();
}

var PrefsObserver = {
	branch: "extensions.customizemybirdextension.",

	init: function() {
		for (var customizemybirdoption in customizemybirdsettings)
			this.updateOption(customizemybirdoption);

		Services.prefs.addObserver(this.branch, this, true);
	},

	shutdown: function() {
		for (var customizemybirdoption in customizemybirdsettings)
			customizemybirdsettings[customizemybirdoption].shutdown();

		Services.prefs.removeObserver(this.branch, this);
	},

	updateOption: function(customizemybirdoption) {
		if (!(customizemybirdoption in customizemybirdsettings))
			return;

		try	{
			var enabled;
			if (   customizemybirdoption == "cmb_overlay"
				|| customizemybirdoption == "main_ui"
				|| customizemybirdoption == "options52"
				|| customizemybirdoption == "tabheight"
				|| customizemybirdoption == "tabborderradius"
				|| customizemybirdoption == "menubarposition"
				|| customizemybirdoption == "winheaderbg"
				|| customizemybirdoption == "winheadertc"
				|| customizemybirdoption == "appmenubuttondm"
				|| customizemybirdoption == "appmenubuttonct"
				|| customizemybirdoption == "appmenubuttonc1"
				|| customizemybirdoption == "appmenubuttonc2"
				|| customizemybirdoption == "appmenubuttontxt"
				|| customizemybirdoption == "appmenubuttontxtc"
				|| customizemybirdoption == "appmenubuttontxtcs"
				|| customizemybirdoption == "appmenubuttonhp"
				|| customizemybirdoption == "appmenubuttonicon"
				|| customizemybirdoption == "ctb_maintoolbar_br"
				|| customizemybirdoption == "ctb_menubar_br"
				|| customizemybirdoption == "ctb_tabstoolbar_br"
				|| customizemybirdoption == "ctb_tbmailicons"
				|| customizemybirdoption == "ctb_maintoolbar_bh"
				|| customizemybirdoption == "ctb_maintoolbar_bw"
				|| customizemybirdoption == "ctb_menubar_bh"
				|| customizemybirdoption == "ctb_menubar_bw"
				|| customizemybirdoption == "scrollbar_csize_value"
				|| customizemybirdoption == "scrollbar_copacity_value"
				|| customizemybirdoption == "scrollbars_cappearance_background_color"
				|| customizemybirdoption == "scrollbars_cappearance_background_gradient"
				|| customizemybirdoption == "scrollbars_cappearance_thumb_color"
				|| customizemybirdoption == "scrollbars_cappearance_thumb_gradient"
				|| customizemybirdoption == "scrollbars_cappearance_thumb_hover_color"
				|| customizemybirdoption == "scrollbars_cappearance_thumb_hover_gradient"
				|| customizemybirdoption == "scrollbars_cappearance_thumb_roundness"
				|| customizemybirdoption == "scrollbars_cappearance_thumb_border"
				|| customizemybirdoption == "scrollbars_cappearance_thumb_border_color"
				|| customizemybirdoption == "scrollbars_cappearance_buttons_color"
				|| customizemybirdoption == "scrollbars_cappearance_buttons_gradient"
				|| customizemybirdoption == "scrollbars_cappearance_buttons_hover_color"
				|| customizemybirdoption == "scrollbars_cappearance_buttons_hover_gradient"
				|| customizemybirdoption == "scrollbars_cappearance_buttons_roundness"
			   )
				enabled = true;
			else
				enabled = Services.prefs.getBoolPref(this.branch + customizemybirdoption);

			if (enabled)
				customizemybirdsettings[customizemybirdoption].init();
			else
				customizemybirdsettings[customizemybirdoption].shutdown();
		}
		catch (e) {}

	},

	observe: function(subject, topic, data) {
		if (topic != "nsPref:changed" || data.indexOf(this.branch) != 0)
			return;

		this.updateOption(data.substr(this.branch.length));
	},

	QueryInterface: XPCOMUtils.generateQI([Ci.nsISupportsWeakReference, Ci.nsIObserver])
};

var StylesheetManager = {
	uri: null,
	stylesheetService: Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService),

	init: function() {
		var stylesheet = this.stylesheet;
		if (this.uri && this.uri.spec == stylesheet) return;

		this.shutdown();

		this.uri = Services.io.newURI(stylesheet, null, null);
		this.stylesheetService.loadAndRegisterSheet(this.uri, Ci.nsIStyleSheetService.AGENT_SHEET);
	},

	shutdown: function() {
		if (!this.uri) return;

		this.stylesheetService.unregisterSheet(this.uri, Ci.nsIStyleSheetService.AGENT_SHEET);
		this.uri = null;
	}
};

// CMBs main ui (e.g. squared tabs)
var CMB_Overlay = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			if(tbdefaulttheme) {
			  
				if (os_platform == "WINNT") { // Windows
					return "chrome://customizemybirdextension/content/css/overlay_win.css";
				} else if (os_platform == "Darwin") { // Linux
					return "chrome://customizemybirdextension/content/css/overlay_mac.css";
				} else { //Linux, Solaris, OS2 ...
					return "chrome://customizemybirdextension/content/css/overlay_lin.css";
				}
		  
			} else return "chrome://customizemybirdextension/content/css/overlay_fulltheme.css";
		}
    }
});

// CMBs main ui (e.g. squared tabs)
var CMB_Main_UI = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme) {
			if(app_version>=57) return "chrome://customizemybirdextension/content/css/main_ui_tb57.css";
		    else return "chrome://customizemybirdextension/content/css/main_ui.css";
		  }
		}
    }
});

var Options52 = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme) {
			if(app_version<59) return "chrome://customizemybirdextension/content/css/options52.css";
		  }
		}
    }
});

var ClassicTabs = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme) {
			if(app_version>=57) return "chrome://customizemybirdextension/content/css/classictabs_tb57.css";
		    else if(os_platform != "Darwin") return "chrome://customizemybirdextension/content/css/classictabs.css";
			  else return "chrome://customizemybirdextension/content/css/classictabs_mac.css";
		  }
		}
    }
});

var ClassicTabsAero = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme && os_platform != "Darwin")
			return "chrome://customizemybirdextension/content/css/aero_ui_classictabs.css";
		}
    }
});

var TabHeight = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme){
				var tabheight = Services.prefs.getIntPref(PrefsObserver.branch + "tabheight");
				
				if(tabheight>=30){
					return "data:text/css;charset=utf-8," + encodeURIComponent('\
						#tabs-toolbar .tabmail-tab { \
						  height: '+tabheight+'px !important;\
						  max-height: '+tabheight+'px !important;\
						}\
					');
				} else if(tabheight>=26 && tabheight<30){
					return "data:text/css;charset=utf-8," + encodeURIComponent('\
						#tabs-toolbar .tabmail-tab { \
						  height: '+tabheight+'px !important;\
						  max-height: '+tabheight+'px !important;\
						}\
						@media (-moz-os-version:windows-win10) {\
						  #messengerWindow[sizemode="maximized"] #titlebar-buttonbox toolbarbutton {\
							padding-top: 6px !important;\
							padding-bottom: 6px !important;\
						  }\
						}\
					');
				} else if(tabheight<26){
					return "data:text/css;charset=utf-8," + encodeURIComponent('\
						#tabs-toolbar .tabmail-tab { \
						  height: '+tabheight+'px !important;\
						  max-height: '+tabheight+'px !important;\
						}\
						@media (-moz-os-version:windows-win10) {\
						  #messengerWindow[sizemode="normal"] #titlebar-buttonbox toolbarbutton {\
							padding-top: 8px !important;\
							padding-bottom: 8px !important;\
						  }\
						  #messengerWindow[sizemode="maximized"] #titlebar-buttonbox toolbarbutton {\
							padding-top: 5px !important;\
							padding-bottom: 5px !important;\
						  }\
						}\
					');
				}

			  }
			}catch(e) {Cu.reportError(e)}
		}

    }
});	

var TabBorderRadius = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme) {
				var tabborderradius = Services.prefs.getIntPref(PrefsObserver.branch + "tabborderradius");
				
				return "data:text/css;charset=utf-8," + encodeURIComponent('\
					#messengerWindow #tabs-toolbar .tabmail-tab { \
					  border-top-right-radius: '+tabborderradius+'px !important;\
					  border-top-left-radius: '+tabborderradius+'px !important;\
					}\
				');
			  }
			}catch(e) {Cu.reportError(e)}
		}

    }
});

var TabToolbarButtonsBeforeTabs = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme && os_platform != "Darwin")
			return "chrome://customizemybirdextension/content/css/tab_tb_buttons_before_tabs.css";
		}
    }
});

var TabToolbarHideLightningButtons = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/tab_tb_lightning_hide.css";
		}
    }
});

var AltAddonsManager = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			if(app_version>=57) return "chrome://customizemybirdextension/content/css/addons_manager_tb57.css";
		    else return "chrome://customizemybirdextension/content/css/addons_manager.css";
		}
    }
});

var AddonsManagerCompact = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/addons_manager_compact.css";
		}
    }
});

var AddonsManagerVersion = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			if(app_version>=59) return "chrome://customizemybirdextension/content/css/addonversion_tb59.css";
				else return "chrome://customizemybirdextension/content/css/addonversion.css";
		}
    }
});

var MenubarPosition = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			if(os_platform != "Darwin" && tbdefaulttheme) {
				
			  var menubarposition = Services.prefs.getCharPref(PrefsObserver.branch + "menubarposition");
			  
			  switch (menubarposition) {
				
				case "menubar_above_tabs":	return "chrome://customizemybirdextension/content/css/menubar_above_tabs.css"; break;
				case "menubar_below_tabs":	return "chrome://customizemybirdextension/content/css/menubar_below_tabs.css"; break;
			
			  }
		  
			}
		}
    }
});

var MenubarCompact = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(os_platform != "Darwin" && tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/menubar_compact.css";
		}
    }
});

var MainToolbarCompact = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/main_toolbar_compact.css";
		}
    }
});

var StatusbarHidden = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/statusbar_hidden.css";
		}
    }
});

var AttachmentboxHigherPosition = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/attachmentbox_hp.css";
		}
    }
});

var AttachmentboxButtonPosition = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/attachmentbox_bp.css";
		}
    }
});

var QuickFilterBarLowerPosition = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/quickfilterbar_lp.css";
		}
    }
});

var TreeColumns = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/treecol.css";
		}
    }
});

var TreeColumnsAero = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/treecol_aero.css";
		}
    }
});

var AppmenuButton = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			
		  if(Services.prefs.getBoolPref(PrefsObserver.branch + "appmenubutton")) {
			
			var appmenubuttonc1 = Services.prefs.getCharPref(PrefsObserver.branch + "appmenubuttonc1");
			var appmenubuttonc2 = Services.prefs.getCharPref(PrefsObserver.branch + "appmenubuttonc2");
			  
			if(Services.prefs.getBoolPref(PrefsObserver.branch + "appmenubuttonct"))
			  appmenubuttonc1 = appmenubuttonc2 = "transparent";
			
			var appmenubuttondm = "none";
			var appmenubuttondmi = "url('chrome://customizemybirdextension/content/images/toolbarbutton-arrow-inverted.png')";
			  
			if(Services.prefs.getBoolPref(PrefsObserver.branch + "appmenubuttondm"))
			  appmenubuttondm = "inline";
		  
			if (os_platform != "WINNT" && os_platform != "Darwin" && app_version>=59)
			  appmenubuttondmi = "none";
			  
			var appmenubuttontxt = Services.prefs.getCharPref(PrefsObserver.branch + "appmenubuttontxt");
			var appmenubuttontxtc = Services.prefs.getCharPref(PrefsObserver.branch + "appmenubuttontxtc");
			var appmenubuttontxtcs = Services.prefs.getCharPref(PrefsObserver.branch + "appmenubuttontxtcs");
			
			var higherpos = '';
			
			var higherpos_win = '-5';
			
			if (os_platform != "WINNT" && os_platform != "Darwin")
			  higherpos_win = '-1';
			
			if(Services.prefs.getBoolPref(PrefsObserver.branch + "appmenubuttonhp"))
			  higherpos = '\
				#messengerWindow:-moz-any([sizemode="normal"],[sizemode="maximized"]) #mail-toolbar-menubar2 #button-appmenu {\
				  border-top: none !important;\
				  margin: -1px 0 1px 0 !important;\
				}\
				#messengerWindow[sizemode="normal"] #tabs-toolbar #button-appmenu {\
				  border-top: none !important;\
				  margin: '+higherpos_win+'px 1px 8px 1px !important;\
				}\
				#messengerWindow[sizemode="maximized"] #tabs-toolbar #button-appmenu {\
				  border-top: none !important;\
				  margin: 0 0 4px 0 !important;\
				}\
				#messengerWindow:-moz-any([sizemode="normal"],[sizemode="maximized"]) #mail-toolbar-menubar2 #button-appmenu:not(:-moz-any(:hover:active,[open])),\
				#messengerWindow:-moz-any([sizemode="normal"],[sizemode="maximized"]) #tabs-toolbar #button-appmenu:not(:-moz-any(:hover:active,[open])) {\
				  border-radius: 0 0 4px 4px !important;\
				}\
				#messengerWindow:-moz-any([sizemode="normal"],[sizemode="maximized"]) #mail-toolbar-menubar2 #button-appmenu:-moz-any(:hover:active,[open]),\
				#messengerWindow:-moz-any([sizemode="normal"],[sizemode="maximized"]) #tabs-toolbar #button-appmenu:-moz-any(:hover:active,[open]) {\
				  border-radius: 0 !important;\
				}\
			  ';
			  
			var appmenubuttonicon = '\
			  #button-appmenu > hbox .toolbarbutton-icon {\
				display: none !important;\
			  }\
			';
			
			if(Services.prefs.getCharPref(PrefsObserver.branch + "appmenubuttonicon")!="tb_icon_none")
			  appmenubuttonicon = '\
				#button-appmenu > hbox .toolbarbutton-icon {\
				  display: block !important;\
				  list-style-image: url("chrome://customizemybirdextension/content/images/'+Services.prefs.getCharPref(PrefsObserver.branch + "appmenubuttonicon")+'.png") !important;\
				  -moz-image-region: rect(0, 16px, 16px, 0) !important;\
				  width: unset !important;\
				  height: unset !important;\
				  padding: 1px !important;\
				  margin-top: -1px !important;\
				  margin-bottom: -1px !important;\
				}\
				#button-appmenu > hbox::before {\
				  content: unset !important;\
				}\
			  ';

			// create custom appbutton
			var customappbutton = "data:text/css;charset=utf-8," + encodeURIComponent('\
				#button-appmenu:not(:hover):not(:active):not([open]){\
				  background: linear-gradient('+appmenubuttonc1+', '+appmenubuttonc2+' 95%) !important;\
				  transition: unset !important;\
				  border-top-color:hsla(214,89%,21%,.5) !important;\
				  border-right-color:hsla(214,89%,21%,.5) !important;\
				  border-left-color: hsla(214,89%,21%,.5) !important;\
				  border-bottom-color: hsla(214,89%,21%,.5) !important;\
				  box-shadow: 0 1px 0 hsla(0,0%,100%,.2) inset,\
							  0 0 2px 1px hsla(0,0%,100%,.25) inset,\
							  0 1px 0 0px rgba(255,255,255,.6),\
							  0 -1px 0 0px rgba(255,255,255,.6),\
							  1px 0 0 0px rgba(255,255,255,.6),\
							  -1px 0 0 0px rgba(255,255,255,.6) !important;\
				}\
				#button-appmenu:hover:not(:active):not([open]){\
				  background: radial-gradient(farthest-side at center bottom, hsla(0,0%,100%,.5) 10%, hsla(0,0%,100%,0) 70%),\
							  radial-gradient(farthest-side at center bottom, hsla(0,0%,100%,.7), hsla(0,0%,100%,0)),\
							  linear-gradient('+appmenubuttonc1+', '+appmenubuttonc2+' 95%) !important;\
				  transition: unset !important;\
				  border-color: rgba(83,42,6,.9) !important;\
				  box-shadow: 0 1px 0 hsla(0,0%,100%,.15) inset,\
							  0 0 2px 1px hsla(0,0%,100%,.5) inset,\
							  0 -1px 0 hsla(0,0%,100%,.2),\
							  0 1px 0 0px rgba(255,255,255,.6),\
							  0 -1px 0 0px rgba(255,255,255,.6),\
							  1px 0 0 0px rgba(255,255,255,.6),\
							  -1px 0 0 0px rgba(255,255,255,.6) !important;\
				}\
				#button-appmenu:-moz-any(:hover:active,[open]) {\
				  background: radial-gradient(farthest-side at center bottom, hsla(0,0%,100%,.5) 10%, hsla(0,0%,100%,0) 70%),\
							  radial-gradient(farthest-side at center bottom, hsla(0,0%,100%,.7), hsla(0,0%,100%,0)),\
							  linear-gradient('+appmenubuttonc1+', '+appmenubuttonc2+' 95%) !important;\
				  transition: unset !important;\
				  border-color: rgba(83,42,6,.9) !important;\
				  box-shadow: 0 2px 3px rgba(0,0,0,.4) inset,\
							  0 1px 1px rgba(0,0,0,.2) inset,\
							  0 1px 0 0px rgba(255,255,255,.6),\
							  0 -1px 0 0px rgba(255,255,255,.6),\
							  1px 0 0 0px rgba(255,255,255,.6),\
							  -1px 0 0 0px rgba(255,255,255,.6) !important;\
				}\
				#button-appmenu {\
				  -moz-appearance:none !important;\
				  transition: unset !important;\
				  background-clip: padding-box !important;\
				  color: '+appmenubuttontxtc+' !important;\
				  text-shadow: 0 0 1px '+appmenubuttontxtcs+',\
							   0 1px 1.5px '+appmenubuttontxtcs+' !important;\
				  font-weight: bold !important;\
				  padding: 0px 8px !important;\
				  border-top: 1px solid !important;\
				  border-right: 1px solid !important;\
				  border-left: 1px solid !important;\
				  border-bottom: 1px solid !important;\
				  min-height: 20px !important;\
				  min-width: 24px !important;\
				}\
				#button-appmenu:not(:-moz-any(:hover:active,[open])) {\
				  border-radius: 3px !important;\
				}\
				#button-appmenu:-moz-any(:hover:active,[open]) {\
				  border-radius: 3px 3px 0 0 !important;\
				}\
				#button-appmenu > hbox::before {\
				  content: "'+appmenubuttontxt+'" !important;\
				}\
				#button-appmenu dropmarker {\
				  display: '+appmenubuttondm+' !important;\
				  list-style-image: '+appmenubuttondmi+' !important;\
				}\
				#tabs-toolbar #button-appmenu:not(:-moz-any(:hover:active,[open])),\
				#tabs-toolbar #button-appmenu:-moz-any(:hover:active,[open]) {\
				  border-radius: 3px 3px 0 0 !important;\
				  -moz-margin-start: 0px !important;\
				}\
				#tabs-toolbar #button-appmenu {\
				  margin-bottom: 1px !important;\
				}\
				'+higherpos+'\
				'+appmenubuttonicon+'\
			');
			
			if(tbdefaulttheme)
			  return customappbutton;
		  }
		}
    }
});

var AeroColors = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {	
		  if(tbdefaulttheme && os_platform != "Darwin")
			return "chrome://customizemybirdextension/content/css/aero_ui.css";
		}
    }
});

var AeroColorsMenubar = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {	
		  if(tbdefaulttheme && os_platform != "Darwin")
			return "chrome://customizemybirdextension/content/css/aero_ui_mb.css";
		}
    }
});

var AeroColorsAltAddonManager = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {	
		  if(tbdefaulttheme && os_platform != "Darwin")
			return "chrome://customizemybirdextension/content/css/aero_ui_aam.css";
		}
    }
});

var WindowHeaderColor = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {	
			try{
			  if(tbdefaulttheme && Services.prefs.getBoolPref(PrefsObserver.branch + "winheader")) {
				
				var header_background_color = Services.prefs.getCharPref(PrefsObserver.branch + "winheaderbg");
				var header_text_color = Services.prefs.getCharPref(PrefsObserver.branch + "winheadertc");

				return "data:text/css;charset=utf-8," + encodeURIComponent('\
					#navigation-toolbox:not(:-moz-lwtheme) {\
					  background: '+header_background_color+' !important;\
					  color: '+header_text_color+' !important;\
					}\
					@media (-moz-os-version:windows-win8),(-moz-os-version:windows-win10) {\
					  #titlebar-min .toolbarbutton-icon,\
					  #titlebar-max .toolbarbutton-icon,\
					  #titlebar-close:not(:hover) .toolbarbutton-icon {\
						fill: '+header_text_color+' !important;\
						color: '+header_text_color+' !important;\
						stroke: '+header_text_color+' !important;\
					  }\
					}\
				  }\
				');
			  }
			}catch(e) {Cu.reportError(e)}
		}
    }
});


var CTBMainToolbar = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/ctb_maintoolbar.css";
		}
    }
});

var CTBMenubar = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme && os_platform != "Darwin")
			return "chrome://customizemybirdextension/content/css/ctb_menubar.css";
		}
    }
});

var CTBTabstoolbar = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/ctb_tabstoolbar.css";
		}
    }
});

var CtbMaintoolbarButtonRadius = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme){
				var ctb_maintoolbar_br = Services.prefs.getIntPref(PrefsObserver.branch + "ctb_maintoolbar_br");
				
				return "data:text/css;charset=utf-8," + encodeURIComponent('\
					@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
					@-moz-document	url(chrome://messenger/content/messenger.xul),\
									url(chrome://messenger/content/messageWindow.xul),\
									url(chrome://messenger/content/messengercompose/messengercompose.xul),\
									url(chrome://messenger/content/addressbook/addressbook.xul),\
									url(chrome://calendar/content/calendar-event-dialog.xul){\
						.chromeclass-toolbar .toolbarbutton-1 > .toolbarbutton-menubutton-button,\
						.chromeclass-toolbar .toolbarbutton-1 > .toolbarbutton-menubutton-dropmarker,\
						.chromeclass-toolbar .toolbarbutton-1,\
						.chromeclass-toolbar #button-appmenu {\
							border-radius: '+ctb_maintoolbar_br+'px !important;\
						}\
					}\
				');
			  }
			}catch(e) {}
		}
    }
});

var CtbMenubarButtonRadius = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme && os_platform != "Darwin") {
				var ctb_menubar_br = Services.prefs.getIntPref(PrefsObserver.branch + "ctb_menubar_br");
				
				return "data:text/css;charset=utf-8," + encodeURIComponent('\
					@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
					@-moz-document	url(chrome://messenger/content/messenger.xul),\
									url(chrome://messenger/content/messageWindow.xul),\
									url(chrome://messenger/content/addressbook/addressbook.xul),\
									url(chrome://messenger/content/messengercompose/messengercompose.xul) {\
						.chromeclass-menubar toolbarbutton[type="menu"],\
						.chromeclass-menubar .toolbarbutton-1 > .toolbarbutton-menubutton-button,\
						.chromeclass-menubar .toolbarbutton-1 > .toolbarbutton-menubutton-dropmarker,\
						.chromeclass-menubar .toolbarbutton-1,\
						.chromeclass-menubar  #button-appmenu {\
							border-radius: '+ctb_menubar_br+'px !important;\
						}\
					}\
				');
			  }
				
			}catch(e) {}
		}
    }
});

var CtbTabsToolbarButtonRadius = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme){
				var ctb_tabstoolbar_br = Services.prefs.getIntPref(PrefsObserver.branch + "ctb_tabstoolbar_br");
				
				return "data:text/css;charset=utf-8," + encodeURIComponent('\
					@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
					@-moz-document	url(chrome://messenger/content/messenger.xul){\
						#tabs-toolbar #alltabs-button,\
						#tabbar-toolbar toolbarbutton[type="menu"],\
						#tabbar-toolbar toolbarbutton,\
						#tabbar-toolbar .toolbarbutton-1 > .toolbarbutton-menubutton-button,\
						#tabbar-toolbar .toolbarbutton-1 > .toolbarbutton-menubutton-dropmarker,\
						#tabbar-toolbar .toolbarbutton-1,\
						#tabbar-toolbar  #button-appmenu {\
							border-radius: '+ctb_tabstoolbar_br+'px !important;\
						}\
					}\
				');
			  }
			}catch(e) {}
		}
    }
});

var ThunderbirdMailIcons = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
		  var ctb_tbmailicons = Services.prefs.getCharPref(PrefsObserver.branch + "ctb_tbmailicons");
		  
		  switch (ctb_tbmailicons) {
			
			case "ico_tb17d":	return "chrome://customizemybirdextension/content/css/tb_icons_dark.css"; break;
			case "ico_tb17w":	return "chrome://customizemybirdextension/content/css/tb_icons_white.css"; break;
			case "ico_tb1":		return "chrome://customizemybirdextension/content/css/tb_icons_tb1.css"; break;
			case "ico_tb2":		return "chrome://customizemybirdextension/content/css/tb_icons_tb2.css"; break;
			case "ico_tb3v1":	return "chrome://customizemybirdextension/content/css/tb_icons_tb3.css"; break;
			case "ico_tb3v2":	return "chrome://customizemybirdextension/content/css/tb_icons_tb3_strata.css"; break;
			case "ico_tbmac":	return "chrome://customizemybirdextension/content/css/tb_icons_tb_mac.css"; break;
			case "ico_noia_l":	return "chrome://customizemybirdextension/content/css/tb_icons_noia_large.css"; break;
			case "ico_noia_m":	return "chrome://customizemybirdextension/content/css/tb_icons_noia_medium.css"; break;
			case "ico_noia_s":	return "chrome://customizemybirdextension/content/css/tb_icons_noia_small.css"; break;
			case "ico_noia_t":	return "chrome://customizemybirdextension/content/css/tb_icons_noia_tiny.css"; break;
		
		  }

		}
    }
});

var ThunderbirdMailIconsHoverReduce = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {	
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/tb_icons_hover_reduce.css";
		}
    }
});

var CtbMaintoolbarButtonHeight = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
				if(tbdefaulttheme){
					
					var ctb_maintoolbar_bh = Services.prefs.getIntPref(PrefsObserver.branch + "ctb_maintoolbar_bh");
					
					return "data:text/css;charset=utf-8," + encodeURIComponent('\
						@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
						@-moz-document	url(chrome://messenger/content/messenger.xul),\
										url(chrome://messenger/content/messageWindow.xul),\
										url(chrome://messenger/content/messengercompose/messengercompose.xul),\
										url(chrome://messenger/content/addressbook/addressbook.xul),\
										url(chrome://calendar/content/calendar-event-dialog.xul){\
							.chromeclass-toolbar .toolbarbutton-1 > .toolbarbutton-menubutton-button,\
							.chromeclass-toolbar .toolbarbutton-1 > .toolbarbutton-menubutton-dropmarker,\
							.chromeclass-toolbar .toolbarbutton-1,\
							.chromeclass-toolbar #button-appmenu {\
								min-height: '+ctb_maintoolbar_bh+'px !important;\
							}\
						}\
					');
				}
				
			}catch(e) {}
		}
    }
});

var CtbMaintoolbarButtonWidth = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
				if(tbdefaulttheme){
					
					var ctb_maintoolbar_bw = Services.prefs.getIntPref(PrefsObserver.branch + "ctb_maintoolbar_bw");
					
					return "data:text/css;charset=utf-8," + encodeURIComponent('\
						@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
						@-moz-document	url(chrome://messenger/content/messenger.xul),\
										url(chrome://messenger/content/messageWindow.xul),\
										url(chrome://messenger/content/messengercompose/messengercompose.xul),\
										url(chrome://messenger/content/addressbook/addressbook.xul),\
										url(chrome://calendar/content/calendar-event-dialog.xul){\
							.chromeclass-toolbar .toolbarbutton-1 > .toolbarbutton-menubutton-button,\
							.chromeclass-toolbar .toolbarbutton-1,\
							.chromeclass-toolbar #button-appmenu {\
								min-width: '+ctb_maintoolbar_bw+'px !important;\
							}\
						}\
					');
				}
				
			}catch(e) {}
		}
    }
});

var CtbMenubarButtonHeight = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
				if(tbdefaulttheme && os_platform != "Darwin") {
					
					var ctb_menubar_bh = Services.prefs.getIntPref(PrefsObserver.branch + "ctb_menubar_bh");
					
					return "data:text/css;charset=utf-8," + encodeURIComponent('\
						@-moz-document	url(chrome://messenger/content/messenger.xul),\
										url(chrome://messenger/content/messageWindow.xul),\
										url(chrome://messenger/content/addressbook/addressbook.xul),\
										url(chrome://messenger/content/messengercompose/messengercompose.xul) {\
							.chromeclass-menubar .toolbarbutton-1:not(.toolbarbutton-menubutton-button),\
							.chromeclass-menubar #button-appmenu {\
								min-height: '+ctb_menubar_bh+'px !important;\
							}\
						}\
					');
				}
				
			}catch(e) {}
		}
    }
});

var CtbMenubarButtonWidth = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
				if(tbdefaulttheme && os_platform != "Darwin") {
					
					var ctb_menubar_bw = Services.prefs.getIntPref(PrefsObserver.branch + "ctb_menubar_bw");
					
					return "data:text/css;charset=utf-8," + encodeURIComponent('\
						@-moz-document	url(chrome://messenger/content/messenger.xul),\
										url(chrome://messenger/content/messageWindow.xul),\
										url(chrome://messenger/content/addressbook/addressbook.xul),\
										url(chrome://messenger/content/messengercompose/messengercompose.xul) {\
							.chromeclass-menubar .toolbarbutton-1:not(.toolbarbutton-menubutton-button),\
							.chromeclass-menubar #button-appmenu {\
								min-width: '+ctb_menubar_bw+'px !important;\
							}\
						}\
					');
				}
				
			}catch(e) {}
		}
    }
});

var ScrollbarsHidden = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {	
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/scrollbars_hidden.css";
		}
    }
});

var ScrollbarButtonsHidden = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {	
		  if(tbdefaulttheme)
			return "chrome://customizemybirdextension/content/css/scrollbars_buttons_hidden.css";
		}
    }
});

var ScrollbarCustomSize = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme && Services.prefs.getBoolPref(PrefsObserver.branch + "scrollbar_csize")) {
				var scrollbar_csize_value = Services.prefs.getIntPref(PrefsObserver.branch + "scrollbar_csize_value");
				
				return "data:text/css;charset=utf-8," + encodeURIComponent('\
					scrollbar[orient="vertical"],\
					scrollbar[orient="vertical"] thumb {\
					  min-width: '+scrollbar_csize_value+'px !important;\
					  width: '+scrollbar_csize_value+'px !important;\
					  max-width: '+scrollbar_csize_value+'px !important;\
					}\
					scrollbar[orient="horizontal"],\
					scrollbar[orient="horizontal"] thumb{\
					  min-height: '+scrollbar_csize_value+'px !important;\
					  height: '+scrollbar_csize_value+'px !important;\
					  max-height: '+scrollbar_csize_value+'px !important;\
					}\
					scrollbar scrollbarbutton {\
					  min-width: '+scrollbar_csize_value+'px !important;\
					  width: '+scrollbar_csize_value+'px !important;\
					  max-width: '+scrollbar_csize_value+'px !important;\
					  min-height: '+scrollbar_csize_value+'px !important;\
					  height: '+scrollbar_csize_value+'px !important;\
					  max-height: '+scrollbar_csize_value+'px !important;\
					}\
				');
			  }
			}catch(e) {Cu.reportError(e)}
		}

    }
});

var ScrollbarCustomOpacity = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme && Services.prefs.getBoolPref(PrefsObserver.branch + "scrollbar_copacity")) {
				var scrollbar_copacity_value = Services.prefs.getIntPref(PrefsObserver.branch + "scrollbar_copacity_value");
				
				var scrollbar_copacity_value_0 = "";
				
				if(scrollbar_copacity_value < 10) scrollbar_copacity_value_0 = "0";
				
				return "data:text/css;charset=utf-8," + encodeURIComponent('\
						scrollbar, scrollcorner {\
						  opacity: unset !important;\
						}\
						scrollbar, scrollcorner {\
						  opacity: 0.'+scrollbar_copacity_value_0+''+scrollbar_copacity_value+' !important;\
						}\
					}\
				');
			  }
			}catch(e) {Cu.reportError(e)}
		}

    }
});

var ScrollbarsCustomAppearance = Object.create(StylesheetManager, {
    stylesheet: {
		configurable: false,
        get: function() {
			try{
			  if(tbdefaulttheme && Services.prefs.getBoolPref(PrefsObserver.branch + "scrollbars_cappearance")) {
				
				var scrollbars_cappearance_background_color = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_background_color");
				var scrollbars_cappearance_background_gradient = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_background_gradient");
				var scrollbars_cappearance_thumb_color = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_thumb_color");
				var scrollbars_cappearance_thumb_gradient = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_thumb_gradient");
				var scrollbars_cappearance_thumb_hover_color = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_thumb_hover_color");
				var scrollbars_cappearance_thumb_hover_gradient = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_thumb_hover_gradient");
				var scrollbars_cappearance_thumb_roundness = Services.prefs.getIntPref(PrefsObserver.branch + "scrollbars_cappearance_thumb_roundness");
				var scrollbars_cappearance_thumb_border = Services.prefs.getIntPref(PrefsObserver.branch + "scrollbars_cappearance_thumb_border");
				var scrollbars_cappearance_thumb_border_color = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_thumb_border_color");
				var scrollbars_cappearance_buttons_color = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_buttons_color");
				var scrollbars_cappearance_buttons_gradient = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_buttons_gradient");
				var scrollbars_cappearance_buttons_hover_color = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_buttons_hover_color");
				var scrollbars_cappearance_buttons_hover_gradient = Services.prefs.getCharPref(PrefsObserver.branch + "scrollbars_cappearance_buttons_hover_gradient");
				var scrollbars_cappearance_buttons_roundness = Services.prefs.getIntPref(PrefsObserver.branch + "scrollbars_cappearance_buttons_roundness");				
				

				return "data:text/css;charset=utf-8," + encodeURIComponent('\
					scrollcorner {\
					  -moz-appearance: none !important;\
					  background-color: '+scrollbars_cappearance_background_color+' !important; \
					  background-image: radial-gradient('+scrollbars_cappearance_background_gradient+') !important; \
					}\
					scrollbar {\
					  -moz-appearance: none !important;\
					  background-color: '+scrollbars_cappearance_background_color+' !important; \
					}\
					scrollbar[orient="vertical"] {\
					  background-image: linear-gradient(to right,'+scrollbars_cappearance_background_gradient+') !important; \
					}\
					scrollbar[orient="horizontal"] {\
					  background-image: linear-gradient(to bottom,'+scrollbars_cappearance_background_gradient+') !important; \
					}\
					scrollbar thumb {\
					  -moz-appearance: none !important;\
					  background-color: '+scrollbars_cappearance_thumb_color+' !important;\
					  border-radius: '+scrollbars_cappearance_thumb_roundness+'px !important;\
					  border: '+scrollbars_cappearance_thumb_border+'px solid '+scrollbars_cappearance_thumb_border_color+' !important; \
					}\
					scrollbar[orient="vertical"] thumb {\
					  background-image: linear-gradient(to right,'+scrollbars_cappearance_thumb_gradient+') !important;\
					}\
					scrollbar[orient="horizontal"] thumb {\
					  background-image: linear-gradient(to bottom,'+scrollbars_cappearance_thumb_gradient+') !important;\
					}\
					scrollbar thumb:hover, scrollbar thumb:active {\
					  -moz-appearance: none !important;\
					  background-color: '+scrollbars_cappearance_thumb_hover_color+' !important;\
					}\
					scrollbar[orient="vertical"] thumb:hover, scrollbar[orient="vertical"] thumb:active {\
					  background-image: linear-gradient(to right,'+scrollbars_cappearance_thumb_hover_gradient+') !important;\
					}\
					scrollbar[orient="horizontal"] thumb:hover, scrollbar[orient="horizontal"] thumb:active {\
					  background-image: linear-gradient(to bottom,'+scrollbars_cappearance_thumb_hover_gradient+') !important;\
					}\
					scrollbar scrollbarbutton {\
					  -moz-appearance: none !important;\
					  background-color: '+scrollbars_cappearance_buttons_color+' !important;\
					  border-radius: '+scrollbars_cappearance_buttons_roundness+'px !important;\
					}\
					scrollbar[orient="vertical"] scrollbarbutton {\
					  background-image: linear-gradient(to right,'+scrollbars_cappearance_buttons_gradient+') !important;\
					}\
					scrollbar[orient="horizontal"] scrollbarbutton {\
					  background-image: linear-gradient(to bottom,'+scrollbars_cappearance_buttons_gradient+') !important;\
					}\
					scrollbar scrollbarbutton:hover {\
					  -moz-appearance: none !important;\
					  background-color: '+scrollbars_cappearance_buttons_hover_color+' !important;\
					}\
					scrollbar[orient="vertical"] scrollbarbutton:hover {\
					  background-image: linear-gradient(to right,'+scrollbars_cappearance_buttons_hover_gradient+') !important;\
					}\
					scrollbar[orient="horizontal"] scrollbarbutton:hover {\
					  background-image: linear-gradient(to bottom,'+scrollbars_cappearance_buttons_hover_gradient+') !important;\
					}\
					\
					}\
				');
			  }
			}catch(e) {Cu.reportError(e)}
		}

    }
});


var customizemybirdsettings = {

	"cmb_overlay": CMB_Overlay,
	"main_ui": CMB_Main_UI,
	"options52": Options52,
	"classictabs": ClassicTabs,
	"classictabsaero": ClassicTabsAero,
	"tabheight": TabHeight,
	"tabborderradius": TabBorderRadius,
	"tabtbbuttons_bt": TabToolbarButtonsBeforeTabs,
	"tabtb_lightning": TabToolbarHideLightningButtons,
	"altaddonsmanager": AltAddonsManager,
	"addonsmanager_compact": AddonsManagerCompact,
	"addonsmanager_version": AddonsManagerVersion,
	"menubarposition": MenubarPosition,
	"menubar_compact": MenubarCompact,
	"main_tb_compact": MainToolbarCompact,
	"statusbar_hidden": StatusbarHidden,
	"attachmentbox_hp": AttachmentboxHigherPosition,
	"attachmentbox_bp": AttachmentboxButtonPosition,
	"quickfilterbar_lp": QuickFilterBarLowerPosition,
	"treecol": TreeColumns,
	"treecol_aero": TreeColumnsAero,
	"appmenubutton": AppmenuButton,
	"appmenubuttonct": AppmenuButton,
	"appmenubuttonc1": AppmenuButton,
	"appmenubuttonc2": AppmenuButton,
	"appmenubuttontxt": AppmenuButton,
	"appmenubuttontxtc": AppmenuButton,
	"appmenubuttontxtcs": AppmenuButton,
	"appmenubuttonhp": AppmenuButton,
	"appmenubuttondm": AppmenuButton,
	"appmenubuttonicon": AppmenuButton,
	"aerocolors": AeroColors,
	"aerocolors_mb": AeroColorsMenubar,
	"aerocolors_aam": AeroColorsAltAddonManager,
	"winheader": WindowHeaderColor,
	"winheaderbg": WindowHeaderColor,
	"winheadertc": WindowHeaderColor,
	"ctb_maintoolbar": CTBMainToolbar,
	"ctb_menubar": CTBMenubar,
	"ctb_tabstoolbar": CTBTabstoolbar,
	"ctb_maintoolbar_br": CtbMaintoolbarButtonRadius,
	"ctb_menubar_br": CtbMenubarButtonRadius,
	"ctb_maintoolbar_bh": CtbMaintoolbarButtonHeight,
	"ctb_maintoolbar_bw": CtbMaintoolbarButtonWidth,
	"ctb_menubar_bh": CtbMenubarButtonHeight,
	"ctb_menubar_bw": CtbMenubarButtonWidth,
	"ctb_tabstoolbar_br": CtbTabsToolbarButtonRadius,
	"ctb_tbmailicons": ThunderbirdMailIcons,
	"nb_tbmailicons_hr": ThunderbirdMailIconsHoverReduce,
	"scrollbars_hidden": ScrollbarsHidden,
	"scrollbar_buttons_hidden": ScrollbarButtonsHidden,
	"scrollbar_csize": ScrollbarCustomSize,
	"scrollbar_csize_value": ScrollbarCustomSize,
	"scrollbar_copacity": ScrollbarCustomOpacity,
	"scrollbar_copacity_value": ScrollbarCustomOpacity,
	"scrollbars_cappearance": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_background_color": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_background_gradient": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_thumb_color": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_thumb_gradient": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_thumb_hover_color": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_thumb_hover_gradient": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_thumb_roundness": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_thumb_border": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_thumb_border_color": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_buttons_color": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_buttons_gradient": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_buttons_hover_color": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_buttons_hover_gradient": ScrollbarsCustomAppearance,
	"scrollbars_cappearance_buttons_roundness": ScrollbarsCustomAppearance
};
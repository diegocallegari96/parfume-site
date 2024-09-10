"use strict";

var UI = {};
var SVG = [];
var STYLE = [];
var ATTR = [];
var TAGS = {};
var ELEMENTS, SET;
UI.transparentBG = true;
UI.special = false;

var SHOW_COLOR_HISTORY = (document.getElementById("the_colors").dataset.colorHistory === "YES") ? true : false;
var BRAND_COLORS = document.getElementById("the_colors").dataset.brandColors;	
var COLOR_HISTORY;



function fetchAttributes(){
	fetch(getFolderURL() + '_attr.json').then(response => {
		return response.json();
	}).then(data => {
		setupAttributes(data);
	}).catch(err => {
		console.log("Something went wrong (attr): " + err);
	});
}

/*
triple threat icons
— ATTR mode to select: outline, duo-tone, solid, or all  (maybe: twofer, pair, accent)
	— mode deletes the unnecessary output
	— selected mode needs to display [unsure how to handle all]
	— need special class handling for ALL (hover, .selected)

colors: two plus white bg
	— .accent
	— .outline, .solid
	— need to "fill: none" when not in use
*/

function styleSetting(styleValue, styleSelector, styleProperty, attrID) {
    this.value = styleValue;
    this.selector = styleSelector;
	this.property = styleProperty;
	this.attrID = attrID;
}
function attrSetting(aLbl,aAttr,aClass,aTag,aInst,aType,aSetup,aVal,aBefore,aAfter,aUnit,aTool){
    this.label = aLbl;
    this.attribute = aAttr;
    this.class = aClass;
    this.tag = aTag;
    this.instruct = aInst;
    this.type = aType;
    this.setup = aSetup;
    this.value = aVal;	
    this.before = aBefore;
    this.after = aAfter;
    this.unit = aUnit;
    this.tooltip = aTool;
}
function getFolderURL(){
	SET = document.getElementById('controls').dataset.svgPath;
	return window.location.origin + "/svg/" + SET + "/";
}
function setupAttributes(DATA){
	DATA.forEach(attr => {
		var item = new attrSetting(
			attr.label,
			attr.attribute,
			attr.class,
			attr.tag || "",
			attr.instruct,
			attr.type,
			attr.setup,
			attr.value,
			attr.before || "",
			attr.after || "",
			attr.unit || "",
			attr.tooltip || ""
		);
		ATTR.push(item);
	});
	addUI();
}
function addUI(){
	UI.slider = [];
	for(var i = 0; i < ATTR.length; i++){
		if(ATTR[i].type == "range"){
			createInputRange(i, ATTR[i]);
		}else if(ATTR[i].type == "choice"){
			createInputChoice(i, ATTR[i]);
		}else{
			//options
		}
	}
	generateStyleTag();
}
function createInputChoice(id, A){	
	var UI_CHOICE = document.getElementById("UI_OPTIONS");
	var wrap = document.createElement('div');
	wrap.id = "wrap_" + id;
	wrap.classList.add("showSlider");
	var lbl = document.createElement('label');
	lbl.innerText = A.label;
	lbl.htmlFor = "select_" + id;
	var select = document.createElement('select');
	select.id = "select_" + id;
	var select_wrap = document.createElement('div');
	select_wrap.id = "s_wrap" + id;
	select_wrap.classList.add("select");
	var choices = A.setup;	
	UI_CHOICE.appendChild(wrap);	
	wrap.appendChild(lbl);
	wrap.appendChild(select_wrap);
	select_wrap.appendChild(select);	
	for (var i = 0; i < choices.length; i++) {
		var option = document.createElement("option");
		option.value = choices[i];
		option.text = choices[i].toUpperCase();
		if(choices[i] == A.value){
			option.selected = "selected";
		}
		select.appendChild(option);
	}
	
	if(A.instruct.includes("triple")){
		UI.triple = {};
		var r_value = "";
		var r_selector = "";	
		var r_property = "triple";
		ATTR[id].style = STYLE.length;	
		STYLE[STYLE.length] = new styleSetting(r_value, r_selector, r_property, id);
		selectExportTab('css');
		addNoteUI('This style requires CSS <a href="/triple-docs">view docs</a>');
		showNoteUI();
	}	
	updateSelect(id, A.value);
	select.addEventListener("input", function(){
		updateSelect(id, this.value);		
	});	
}

function addNoteUI(str = ""){
	var NOTE = document.getElementById("UI_NOTE");
	var wrap = document.createElement('div');
	var p = document.createElement('p');
	p.innerHTML = str;
	NOTE.appendChild(wrap);
	wrap.appendChild(p);	
}
function showNoteUI(){
	var NOTE = document.getElementById("UI_NOTE");
	NOTE.className = "show";
}
function hideNoteUI(){
	var NOTE = document.getElementById("UI_NOTE");
	NOTE.className = "hide";
}

function createInputRange(id, A){
	var UI_RANGES = document.getElementById("UI_RANGES");
	var wrap = document.createElement('div');
	wrap.id = "wrap_" + id;
	wrap.classList.add("showSlider");
	var range = document.createElement('input');	
    range.id = "range_" + id;
    range.type = "range";
    range.min = A.setup.min;
    range.max = A.setup.max;
	range.step = A.setup.step;
    range.value = A.value;
	range.oninput = "updateRange";	
	var lbl = document.createElement('label');
	lbl.innerText = A.label;
	lbl.htmlFor = "range_" + id;
	if(A.tooltip){
		lbl.dataset.tooltip = A.tooltip;
	}
	//<output id="tt1" class="tooltipBubble"></output>
	var output = document.createElement('output');
	output.id = "tt"  + id;
	output.classList.add("tooltipBubble");
	UI.slider[id] = {};
	UI.slider[id].tooltip = 0;	
	UI_RANGES.appendChild(wrap);	
	wrap.appendChild(lbl);	
	wrap.appendChild(range);
	wrap.appendChild(output);
	var r_value = A.before + A.value + A.unit + A.after;
	var r_selector = "." + A.class + (A.tag ? " " + A.tag : "");
	
	var r_property = A.attribute; //is this equal, convert camelCase (strokeWidth)	
		//should be single selector, svg is root and where class is placed
		//makeInline needs to shift attributes to right elements
	
			//class, tag
				//big question: do we need to shift attributes that have selector
				//complex -> solved by adding classes manually
					//two stroke -> manually create classes or FIRST/LAST psuedo
				//simple -> solved by tag			
	
	//transform, fill, stroke, stroke-linejoin, opacity fill-opacity?	
	ATTR[id].style = STYLE.length;	
	STYLE[STYLE.length] = new styleSetting(r_value, r_selector, r_property, id);
	
	//should style have:
		//value
		//class		"className"
		//selector 	".className path"
		//tag 		"path"
		//property
		//ATTR index  (with this we can get class and tag)
		//type		color|range|option
		
	
	
	//add CSS to SVG element (root)
		//each class should be unique to ATTR (UI input)
		//only one selector (A.class + A.tag) is needed
	//add inline attribute to specific element (A.tag) via makeInline()

	if(A.instruct.includes("mark")){ //mark the class on the SVG tag, otherwise the class already exists
		updateButtonSVGs(A.class);
	}
	if(A.instruct.includes("size")){
		UI.svgSize = A.class; 
		console.log(UI.svgSize);		
		//updateButtonsAttributes("width", A.value, r_selector);
		//may want to record a ratio, so width and height don't need to match
	}
	updateRange(id, A.value);
	range.addEventListener("input", function(){
		updateRange(id, this.value);
	});
}
function updateButtonSVGs(class_name){
	var SVG_LIST = document.getElementById("element-stage").querySelectorAll("button svg, button img");
	var SVG_ARR = [...SVG_LIST];
	SVG_ARR.forEach(svg => {
		//some images may not be inline SVG yet
			//what if some classes told us where they should be located?		
		svg.classList.add(class_name);
	});
}
function updateSelect(id, val){
	var A = ATTR[id];
	 //currently, only allows for a single select in the UI	
	//add special CSS based on option selected
	if(A.instruct.includes("triple")){
		updateTripleThreat(id, val);
	}	
}
function updateTripleThreat(id, val){
	UI.triple.value = val;
	UI.triple.CSS = "";
	UI.special = (val == "triple threat" || val == "double trouble") ? true : false;
	if(UI.special){
		showNoteUI();
	}else{
		hideNoteUI();
	}
	//console.log(val);
	UI.removable = {
		"outline": ["accent","solid"],
		"duo-tone": ["solid"],
		"solid": ["accent","outline"],
		"triple threat": [],
		"double trouble": ["accent"]
	}
	if(val == "outline"){
		UI.triple.CSS += `\n#element-stage .accent{fill: none;}`;
		UI.triple.CSS += `\n#element-stage .solid{fill: none;}`;
		UI.triple.CSS += `\n#imgPREVIEW .accent{fill: none;}`;
		UI.triple.CSS += `\n#imgPREVIEW .solid{fill: none;}`;
	}else if(val == "solid"){
		UI.triple.CSS += `\n#element-stage .accent{fill: none;}`;
		UI.triple.CSS += `\n#element-stage .outline{fill: none;}`;
		UI.triple.CSS += `\n#imgPREVIEW .accent{fill: none;}`;
		UI.triple.CSS += `\n#imgPREVIEW .outline{fill: none;}`;
	}else if(val == "duo-tone"){
		UI.triple.CSS += `\n#element-stage .solid{fill: none;}`;
		UI.triple.CSS += `\n#imgPREVIEW .solid{fill: none;}`;
	}else if(val == "triple threat"){
		UI.triple.CSS += `\n#element-stage button:not(:focus) .solid{fill: none;}`;
		UI.triple.CSS += `\n#element-stage button:not(:hover) .accent{fill: none;}`;
		UI.triple.CSS += `\n#element-stage button:focus .accent{fill: none;}`;
		UI.triple.CSS += `\n#element-stage button:focus .outline{fill: none;}`;		
		UI.triple.CSS += `\n#imgPREVIEW .solid{fill: none;}`;
		
		//calculate color background+accent color
		//or keep color the background color, and let accent do its work
		//#F6FCFF,#000,#A2CAE9.accent
		var bg = STYLE[0].value.replace("#","");		
		
		UI.triple.CSS += `\n#element-stage button:hover{background-color: #${bg} !important;}`;
		UI.triple.CSS += `\n#element-stage button:hover svg{opacity: 1 !important;}`;
	}else if(val == "double trouble"){
		UI.triple.CSS += `\n#element-stage .accent{fill: none;}`;
		UI.triple.CSS += `\n#imgPREVIEW .accent{fill: none;}`;
		
		UI.triple.CSS += `\n#element-stage button:not(:focus) .solid{fill: none;}`;
		UI.triple.CSS += `\n#element-stage button:focus .outline{fill: none;}`;	
		
		UI.triple.CSS += `\n#imgPREVIEW .solid{fill: none;}`;
	}
	generateStyleTag();
}
function updateRange(id, val){
	var range = document.getElementById("range_" + id);
	var percentage = (val - range.min)/(range.max - range.min) * 100;
	range.style.setProperty("--webkitProgressPercent", constrainNumber(percentage, 0, 100) + "%");
	var A = ATTR[id];
	//STYLE[A.style].value = "rotate(" + val + "deg)";
	STYLE[A.style].value = A.before + val + A.unit + A.after;
	generateStyleTag();
	showTooltip(id);
}
function showTooltip(id){
	var bubble = document.getElementById('tt' + id);
	//var slider = document.getElementById('slider' + id);
	var slider = document.getElementById('range_' + id);
	var newVal = Number(((slider.value - slider.min) * 100) / (slider.max - slider.min));
	var adjustedVal = newVal + 25 - (newVal * .25);
	bubble.style.left = `calc(${adjustedVal}% + (${9 - newVal * 0.18}px))`;
	bubble.classList.add('active');
	bubble.innerHTML = slider.value;	
	UI.slider[id].tooltip++;
	setTimeout(() => resetTooltip(bubble, id), 1500);	
}
function resetTooltip(el, id){
	if(UI.slider[id] === undefined){return;}
	UI.slider[id].tooltip--;
	if(UI.slider[id].tooltip < 1){
		el.classList.remove('active');
		UI.slider[id].tooltip = 0;
	}
}


fetchAttributes();
setupUI();
function setupUI(){
	var rule, r_color, r_class, r_property;	
	UI.width = document.getElementById('controls').dataset.imgWidth;
	UI.padding = document.getElementById('controls').dataset.imgPadding;
	UI.ratio = document.getElementById('controls').dataset.imgRatio;
	var the_styles = document.getElementById('controls').dataset.styles;	
	the_styles = the_styles.split(",");
	STYLE = [];	
	for(var i = 0; i < the_styles.length; i++){
		rule = the_styles[i];
		r_color = rule.match(/#[0-9a-fA-F]*/);
		r_color = r_color ? r_color[0] : "";
		r_class = rule.match(/\.[0-9a-zA-Z-_]*/);
		r_class = r_class ? r_class[0] : "";
		r_property = rule.match(/stroke|stop-color|all/); //all (fill, stroke, stop-color)
		r_property = r_property ? r_property[0] : "fill";
		STYLE[i] = new styleSetting(r_color, r_class, r_property);
	}
	generateColorInputs();	
	replacePHPStyles();
	if(BRAND_COLORS.split("#FFFFFF").length > 10){
		BRAND_COLORS = ['#FFFFFF','#BBBBBB','#888888','#555555','#FF5522','#FFEE33','#88DD22','#22EECC', '#2299FF','#BB11DD'];
	}else{
		BRAND_COLORS = BRAND_COLORS.slice(0, -1).split("|");
	}
	COLOR_HISTORY = BRAND_COLORS; //Never reset color_history
	//loadColorHistory();
	enableSearch();
}

function generateColorInputs(){	
	STYLE.forEach(function(rule, index){
		if(index){	
			var colorWrap = document.createElement("div");
			var colorPreview = document.createElement("div");
			var colorInput = document.createElement("input");			
			colorWrap.setAttribute("class", "color_input");
			colorWrap.setAttribute("onclick", "document.getElementById('ci_" + index + "').jscolor.show()");
			colorPreview.setAttribute("id", "cp_"+index);
			colorPreview.setAttribute("class", "color_preview");			
			colorInput.setAttribute("id", "ci_"+index);
			colorInput.setAttribute("data-jscolor", "{previewElement:'#cp_"+index+"'}");
			colorInput.setAttribute("type", "text");
			colorInput.setAttribute("autocapitalize", "on");
			colorInput.setAttribute("value", rule.value.replace("#", ""));
			colorInput.setAttribute("onchange", "updateColor(event)");			
			colorWrap.appendChild(colorPreview);
			colorWrap.appendChild(colorInput);			
			document.getElementById('UI_COLORS').appendChild(colorWrap);	
		}
	});
}
function replacePHPStyles(){	
	var style = document.createElement("style");
	style.setAttribute("id", "JS_STYLE");
	document.head.appendChild(style);
	generateStyleTag();
	document.getElementById('PHP_STYLES').remove();
}
function generateStyleTag(){
	var CSS_supported_attributes = ["fill","stroke","stop-color","transform","opacity","fill-opacity","stroke-opacity","stop-opacity","stroke-width","stroke-dasharray","stroke-dashoffset"];
	var JS_STYLE = document.getElementById('JS_STYLE');
	var THE_STYLES = "";
	THE_STYLES += ":root {";
		THE_STYLES += `\n\t--IMG-width: ${UI.width};`;
		THE_STYLES += `\n\t--IMG-padding: ${UI.padding};`;
		THE_STYLES += `\n\t--IMG-ratio: ${UI.ratio};`;
		THE_STYLES += `\n\t--IMG-backgroundColor: ${STYLE[0].value};`;
	THE_STYLES += "\n}";	
	STYLE.forEach(function(rule, index){
		if(index){
			if(rule.property == "all"){
				THE_STYLES += `\n#element-stage ${rule.selector}__fill{fill: ${rule.value}}`;
				THE_STYLES += `\n#element-stage ${rule.selector}__stroke{stroke: ${rule.value}}`;
				THE_STYLES += `\n#element-stage ${rule.selector}__stop-color{stop-color: ${rule.value}}`;				
				THE_STYLES += `\n#imgPREVIEW ${rule.selector}__fill{fill: ${rule.value}}`;
				THE_STYLES += `\n#imgPREVIEW ${rule.selector}__stroke{stroke: ${rule.value}}`;
				THE_STYLES += `\n#imgPREVIEW ${rule.selector}__stop-color{stop-color: ${rule.value}}`;
			}else if(rule.property == "triple"){
				THE_STYLES += UI.triple.CSS;
			}else if(CSS_supported_attributes.includes(rule.property)){
				THE_STYLES += `\n#element-stage ${rule.selector}{${rule.property}: ${rule.value}}`;
				THE_STYLES += `\n#imgPREVIEW ${rule.selector}{${rule.property}: ${rule.value}}`;	
			//}else if(rule.property == "width"){
				//console.log(rule.class);
				//console.log(UI.svgSize);
				//THE_STYLES += `\n#element-stage button img.${UI.svgSize}, #element-stage button svg.${UI.svgSize}{min-width:auto;width:auto;margin:0 auto;}`;
				//THE_STYLES += `\n#element-stage button img.${UI.svgSize}, #element-stage button svg.${UI.svgSize}{min-width: ${rule.value}px; width: ${rule.value}px;margin: 0 auto;}`;
			}else{
				//console.log(rule.property, rule.value, rule.selector);
				
				updateButtonsAttributes(rule.property, rule.value, rule.selector);
				//if property is not CSS friendly (etc: dur, repeatCount)...
					//then instead update the actual SVG(s)
					//function to cycle through all, update all, single, attributes matching with new value;
			}
		}				
	});		
	//console.log(ATTR);
	if(UI.svgSize){
		THE_STYLES += `\n#element-stage button img.${UI.svgSize}, #element-stage button svg.${UI.svgSize}{min-width:auto;width:auto;margin:0 auto;}`;
	}
	
	var bg = STYLE[0].value.replace("#","");
	if(bg != "FFF" && bg != "FFFFFF"){
		var bg_1, bg_2, bg_3;
		if(chroma.contrast(bg, '000') > 11){
			bg_1 = chroma(bg).darken(.2);
			bg_2 = chroma(bg).darken(.5);
			bg_3 = chroma(bg).darken(1.5);
		}else{
			bg_1 = chroma(bg).brighten(.4);
			bg_2 = chroma(bg).brighten(.8);
			bg_3 = chroma(bg).brighten(2);
			THE_STYLES += `\n#element-stage button p{color:#FFF;}`;
		}
		THE_STYLES += `\n#element-stage button:hover{background-color:${bg_1};}`;
		THE_STYLES += `\n#element-stage button{box-shadow:inset 0 0 0 1px ${bg_2};}`;		
		THE_STYLES += `\n#element-stage button:focus{box-shadow:inset 0 0 0 2px ${bg_3};}`;
	}	
	JS_STYLE.textContent = THE_STYLES;
}
function updateButtonsAttributes(property, value, selector){
	//in future, may want to use selector (class) to mark which attributes to update, otherwise update them all.
	
	//var SVG_LIST = document.getElementById("element-stage").querySelectorAll("button svg, button img");
	//var SVG_LIST = document.getElementById("element-stage").querySelectorAll(`button svg [${property}], #imgPREVIEW svg [${property}]`);
	//var SVG_LIST = document.querySelectorAll(`#element-stage button svg [${property}], #imgPREVIEW svg [${property}]`);
	var SVG_LIST = document.querySelectorAll(`#element-stage button svg [${property}], #imgPREVIEW svg [${property}],#element-stage button svg[${property}], #imgPREVIEW svg[${property}]`);
	
	var SVG_ARR = [...SVG_LIST];
	SVG_ARR.forEach(svg => {
		//some images may not be inline SVG yet
		if(property == "repeatCount" && value == 0){
			svg.setAttribute(property, "indefinite");
		}else if(property == "width"){
			svg.setAttribute("width", value);
			svg.setAttribute("height", value);
		}else{
			svg.setAttribute(property, value);
		}
	});
	//need to target the preview svg too
	
}
/* <Choosing an image> */
document.getElementById("element-stage").addEventListener('click', function (event) {
	var BUTTON = event.target;
	if(!isButton(BUTTON)){return}	
	UI.imgName = event.target.id.slice(3);	
	
	//BUTTON.tabIndex = 0; //attempt to get iOS to focus on elements to force CSS styling (Triple Threat)
	
	selectSVG(BUTTON.getElementsByTagName("svg")[0]);
	
	if(event.ctrlKey){} //export as Inline SVG
	if(event.shiftKey){} //export as CSS
	if(event.altKey){} //download as SVG
}, false);


/* <Manipulating the SVG> */
function selectSVG(el){
	SVG = indexSVG(el);	
	showPreview();
	updateInputSize();
	mixpanel.track('Select Element', {"name": UI.imgName});
	mixpanel.people.increment('el_previews');
}
function showPreview(){
	var PREVIEW = document.getElementById("imgPREVIEW");
	var WRAP = document.getElementById("imgPreviewWrap");	
	gsap.fromTo(WRAP, {height:WRAP.getBoundingClientRect().height}, {height: "auto", duration: .25});
	PREVIEW.innerHTML = SVG.join("");
	PREVIEW.classList.add("active");	
	PREVIEW.style.maxWidth = (150 * UI.ratio) + "px";
	var SIZE = elementPosition(PREVIEW);	
	makeTransparentBG();
}
function closePreview(){
	document.getElementById("stage-wrap").classList.remove("previewMode");
}
function indexSVG(el){
	var svg_str = el.outerHTML;	
	svg_str = svg_str.replace(/ data-inject-url=\"[^\"]*\"/, "");
	svg_str = svg_str.replace(/ data-name=\"[^\"]*\"/, "");	
	svg_str = svg_str.replace(/ loading=\"lazy\"/, "");
	svg_str = svg_str.replace(/"/g, "'");	
	return svg_str.match(/\<[^>]*\>*/g);
}
function updateColor(event){
	var colorElement = event.target;
	var colorID = colorElement.id.replace(/^\D+/g, '');
	var colorHex = event.target.value;	
	STYLE[colorID].value = colorHex;	
	updateColorHistory("#" + colorHex);	
	generateStyleTag();
}


/* <EXPORTING> */

function selectExportTab(type){
	closeExportTabs();
	document.getElementById(type + 'ExportType').classList.add('selected');
	document.getElementById(type + "Tab").classList.add('selected');	
	document.getElementById(type + "HideBg").checked = UI.transparentBG;
}
function closeExportTabs(){	
	var openTabs = document.getElementById("imgEXPORT").querySelectorAll('.selected');
	openTabs.forEach((tab) => {tab.classList.remove('selected');});
}

function isInlineSVG(){
	if(document.getElementById("isInlineSVG").checked){
		//console.log("checked");
	}
}
function toggleTransparentBG(toggle){
	UI.transparentBG = toggle.checked;	
	makeTransparentBG();
}
function makeTransparentBG(){
	var PREVIEW = document.getElementById("imgPREVIEW");	
	if(UI.transparentBG){
		PREVIEW.classList.add('transparent');
	}else{
		PREVIEW.classList.remove('transparent');
	}
}

function isInArray(array, string){
	return array.find((str) => str === string);
}
function EXPORT(format, method, target){
	if(!UI.imgName){
		notifyBox(document.getElementById("SVGBG_UI"), 'Nothing selected');
		return;
	}
	//var OUTPUT = InlineStyleSVG();
	
	var OUTPUT = [...SVG];
	if(!UI.transparentBG){
		var background = `<rect fill="${STYLE[0].value}" width="100%" height="100%"/>`;
		var defsID = OUTPUT.indexOf("</defs>");
		var index = (defsID !== -1) ? defsID+1 : 1;	
		OUTPUT.splice(index, 0, background);
	}	
	
	OUTPUT = removeUnwantedCode(OUTPUT);
	
	OUTPUT = UI.special ? specialCodeExport(OUTPUT, format, method) : InlineStyleSVG(OUTPUT);
	
	var finalSVG = OUTPUT.join("");
	if(method == "copy"){
		if(format == "css"){
			finalSVG = UI.special ? finalSVG : SVGtoCSS(finalSVG);
		}else{
			finalSVG = finalSVG.replace(/'/g, '"');
		}
		copyToClipboard(finalSVG, target);
		mixpanel.track('Export Element', {"name": UI.imgName, "type": "copy " + format});
		mixpanel.people.increment('el_exports');
	}else if(method == "download"){
		notifyBox(target, 'Saving', true);
		if(format == "svg"){
			saveAsSVG(finalSVG);
		}else if(format == "png"){
			pngDownload(finalSVG);
		}
		mixpanel.track('Export Element', {"name": UI.imgName, "type": "download " + format});
		mixpanel.people.increment('el_exports');
	}	
}
function specialCodeExport(SVG, format, method){	
	var OUTPUT = SVG;
	if(SET == "triple-threat-svg"){
		if( method == "copy" && format == "svg" ){
			//this avoids getting converted to inline
			OUTPUT[0] = OUTPUT[0].replace(/<svg /, '<svg class="SVGBGI" ');
		}else if( method == "copy" && format == "css" ){
			return [tripleThreatCSS(SVG)]; //return as array
		}
	}	
	
	//disable SVG Download, PNG export?
	
	return OUTPUT;
}
function tripleThreatCSS(SVG){
	function stringify(el, replacement = ""){
		return el.outerHTML.replace(/class="[^"]*"/g, replacement).replace(/ xmlns="[^"]*"/, '');
	}
	var OUTPUT = SVG;
	var svgString = OUTPUT.join('');
	var parser = new DOMParser();
	var icon = parser.parseFromString(svgString, 'image/svg+xml');	
	var open = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' + STYLE[1].value + '">';
	var close = '</svg>';
	var outline = stringify( icon.querySelector('.outline') );
	var accent = "";
	if(UI.triple.value == "triple threat"){
		accent = stringify( icon.querySelector('.accent'), 'fill="' + STYLE[2].value + '"' );
	}
	var solid = stringify( icon.querySelector('.solid') );
	var SVG1 = SVGtoCSS(open + outline + close);
	var SVG2 = SVGtoCSS(open + accent + outline + close);
	var SVG3 = SVGtoCSS(open + solid + close);
	var selector = ".SVGBG-" + UI.imgName;
	OUTPUT = `${selector} {\n\tbackground-image: ${SVG1};\n}\n`;
	if(accent){
		OUTPUT += `a:not(.selected):hover ${selector} {\n\tbackground-image: ${SVG2};\n}\n`;
	}
	OUTPUT += `.selected ${selector} {\n\tbackground-image: ${SVG3};\n}\n`;
	OUTPUT += "i[class^=SVGBG-] {\n\twidth: 48px;\n\theight: 48px;\n\t"
	OUTPUT += "background-size: cover;\n\tdisplay: inline-block;\n}";
	return OUTPUT;
}

function removeUnwantedCode(SVG){
	var OUTPUT = SVG;
	var code, removable, classes;
	var linesForRemoval = [];
	OUTPUT.forEach((line, index) => {
		code = line;
		classes = [];
		if( hasAttr(code, "class") ){
			classes = getAttrValue(code, "class").split(" ");
		}
		if(SET == "triple-threat-svg" && classes){			
			var style = UI.triple.value;
			var unwanted = UI.removable[style];
			var isUnwanted = classes.some(element => unwanted.includes(element));
			if( isUnwanted ){
				linesForRemoval[linesForRemoval.length] = index;
			}
		}
	});
	return removeTags(OUTPUT, linesForRemoval);
}

function InlineStyleSVG(SVG){
	//var OUTPUT = [...SVG];
	var OUTPUT = SVG;
	var WRAPPER = false;
	var classes;
	var code;
	STYLE.forEach((style, index) => {
		if(style.attrID !== undefined){
			var A = ATTR[style.attrID];
			if(A.tag){
				//remove class from SVG
				//add class to all elements matching the tag
			}
			if(A.instruct.includes("wrap")){				
				if(!WRAPPER){
					OUTPUT.splice(1, 0, "<g>");
					OUTPUT.splice(-1, 0, "</g>");				
					WRAPPER = true;
				}				
				OUTPUT[0] = removeClass(OUTPUT[0], A.class);
				OUTPUT[1] = addClass(OUTPUT[1], A.class);
			}
		}
	});
	OUTPUT.forEach((line, index) => {
		code = line;		
		if(!index){
			if(STYLE[1].selector === ""){
				code = addAttr(code, "fill", STYLE[1].value);
			}
		}
		if( hasAttr(code, "class") ){
			classes = getAttrValue(code, "class").split(" ");			
			classes.forEach((className) => {
				//console.log(SET, className, code);
				if(className){
					//if no colors were replaced, add fill? or do we do that to SVG element	
					code = makeInline(code, className);
					

					
					//if SET = triple threat and style = triple or double
						//if CSS, we want inline
						//if SVG, we want classes
					
						
					//!!!should make inline, unless triple thrreat or double trouble mode
					//make inline for CSS + SVG Download
					//keep class for inline SVG (meh)
					//keep class for inline SVG triple/double
					
						
					
				}
			});
			code = removeAttr(code, "class");	
		}
		OUTPUT[index] = code;
	});
	return cleanSVG(OUTPUT);
}
function removeTags(SVG, lines){
	//remove the tag (and anything nested between its closing tag)
	var OUTPUT = SVG;
	var tag, the_tag, code, currentLine; 
	var isClosingTag = false;	
	lines.forEach((line_number) => {
		currentLine = line_number;
		code = OUTPUT[line_number];
		the_tag = code.match(/<([^>\s]+)/)[1];	
		if(code.includes('/>')){
			OUTPUT[currentLine] = "";
		}else{
			while( !OUTPUT[currentLine].includes('/'+the_tag) && currentLine < OUTPUT.length){
				OUTPUT[currentLine] = "";
				currentLine++;
			}
			OUTPUT[currentLine] = "";
		}		
	});
	OUTPUT = OUTPUT.filter(item => item); //remove empty array elements;	
	return OUTPUT;
}
function cleanSVG(output){
	var OUTPUT = output;
	var code, regex;
	var removeList = ["rotate(0)", "rotate(360)", "translate(0 0)", "scale(1)", "--inject-"];
	//future:
		//run through SVGO or another optimizer.
		//flatten SVG (remove transforms);
		//--inject- ends with a number	
	
	OUTPUT.forEach((line, index) => {
		code = line;
		code = code.replace(/,/g, " ") //remove commas
					.replace(/\s/g, ' ') //convert to spaces
					.replace(/ +/g, ' '); //remove multiple spaces		
		removeList.forEach(function(item) {
			code = code.split(item).join('');
		});		
		code = code.replace(/ \w+=['"]\s*['"]/g, ''); //remove blank attributes
		if( hasAttr(code, "transform") ){
			if(!getAttrValue(code, "transform").includes(" ")){
				code = addAttr(code, "transform-origin", "center");
			}			
		}
		OUTPUT[index] = code;
	});
	
	//remove empty <g> tags
	
	return OUTPUT;
}
function SVGtoCSS(svgString){ //modern approach (no IE)
	var safe_svg = svgString.replace(/#/g, "%23")
		.replace(/\?/g, "%3F") //probably don't have ? symbols in SVG		
		.replace(/[\t\n\r]/gm,'') //remove tabs and new lines
		.replace(/\s\s+/g, ' ') //replace multiple spaces with a single space
		.replace(/'/g, '"'); //replace single quotes with double
	return "url('data:image/svg+xml," + safe_svg + "')";
	//new approach: https://www.youtube.com/watch?v=6qSN50Qk_54
	//old approach: https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
}
function removeUnits(value){
	var units = ["px", "deg"]; //other posible units: rem, em, pt, 
	units.forEach(function(unit){
         value = value.replaceAll(unit, '');
    })
	return value;
}


function saveAsSVG(content){
    var blob = new Blob([content], {type: "image/svg+xml;charset=utf-8"});
    saveAs(blob, UI.imgName + ".svg");
}
function pngDownload(content) {
	var CANVAS = document.getElementById('DOM_CANVAS');
	CANVAS.innerHTML = content;
	var svgElement = CANVAS.firstChild;	
	var w = UI.size.width;
	var h = UI.size.height;
	CANVAS.style.width = w + "px";
	CANVAS.style.height = h + "px";
	//https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
	var clonedSvgElement = svgElement.cloneNode(true);	
	let outerHTML = clonedSvgElement.outerHTML,
  	blob = new Blob([outerHTML],{type:'image/svg+xml;charset=utf-8'});
	let URL = window.URL || window.webkitURL || window;
	let blobURL = URL.createObjectURL(blob);
	let image = new Image();
	image.onload = () => {
		let canvas = document.createElement('canvas');
		canvas.width = w;
		canvas.height = h;
		let context = canvas.getContext('2d'); 
		context.drawImage(image, 0, 0, w, h);
		let png = canvas.toDataURL(); // default png
		//let jpeg = canvas.toDataURL('image/jpg', .6);
		//let webp = canvas.toDataURL('image/webp');
		var download = function(href, name){
			var link = document.createElement('a');
			link.download = name;
			link.style.opacity = "0";
			document.body.append(link);
			link.href = href;
			link.click();
			link.remove();
		}
		download(png, UI.imgName + '.png');		
	};
	image.src = blobURL;	
}
function updateInputSize(el = "none"){
	var action = (el === "none") ? "pngWidth" : el.id;
	var type = action.substring(0,3); //should be png for now.
	var isWidth = action.slice(3) === "Width";
	if(!UI.imgName){setInputSize(type, "none");return;}
	var ratio = getSvgRatio();
	var input = getInputSize(type, isWidth);	
	var w = isWidth ? input.width : Math.round(input.height * ratio);
	var h = !isWidth ? input.height : Math.round(input.width / ratio);
	var s = {"width": w, "height": h};
	UI.size = s;
	setInputSize(type, s);
}
function getSvgSize(){
	if(!UI.imgName){return []}
	var svg_info = SVG[0];
	var viewBox = getAttrValue(svg_info, "viewBox").split(" ");
	return {"width": viewBox[2], "height": viewBox[3]};
}
function getSvgRatio(){
	var img = getSvgSize();
	var ratio = img.width / img.height;
	return ratio;
}
function getInputSize(type, isWidth){	
	var ratio = getSvgRatio();
	var lastInput = UI.size;
	var img = lastInput ? lastInput : getSvgSize();
	var w = document.getElementById(type + 'Width').value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
	var h = document.getElementById(type + 'Height').value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
	w = (!isNaN(w) && w > 0 && w < 30000) ? Math.round(w) : img.width;
	h = (!isNaN(h) && h > 0 && h < 30000) ? Math.round(h) : img.height;
	return {"width": w, "height": h};
}
function setInputSize(type, size){
	if(size === "none"){
		document.getElementById(type + 'Width').value = "";
		document.getElementById(type + 'Height').value = "";
	}else{
		document.getElementById(type + 'Width').value = size.width; //+ "PX";
		document.getElementById(type + 'Height').value = size.height; //123+ "PX";
	}
}

function makeInline(code, className){
	var style_index, attr, val;
	var classBase = "";
	var classProperty = "";
	//have to look through STYLE and ATTR to find which matches the selector	
		//create a CLASS_LIST: cycle through both STYLE and ATTR
			//better approach may be just adding all ATTR classes to STYLE
		//creating single temp array with property, value, and class 	
		//then get the corresponding value
	
	if(className.includes("__")){
		var parts = className.split('__');
		classBase = parts[0];
		classProperty = parts[1];
		style_index = getAttrFromClass(STYLE, classBase);
		attr = classProperty;
		val = removeUnits(STYLE[style_index].value);
	}else if(SET == "triple-threat-svg"){
		if(className == "accent"){
			attr = "fill";
			val = STYLE[2].value;
		}else{
			return code;
		}
	}else{
		style_index = getAttrFromClass(STYLE, className);
		attr = STYLE[style_index].property;
		val = removeUnits(STYLE[style_index].value);
	}
	
	if(hasAttr(code, attr)){
		return updateAttrValue(code, attr, val);
	}else{
		return addAttr(code, attr, val);
	}
}
function getAttrFromClass(arr, className){
    for(let i=0; i < arr.length; i++){		
        if(arr[i].selector === "." + className){
            return i;
        }
    }
	return -1;
}
function hasColor(code){ //not used anymore
	const isColorElement = new RegExp(/\<(g|circle|ellipse|line|path|polygon|polyline|rect|stop|use) /i);
	const hasNoneFill = new RegExp(/fill=('|")none('|")/i);	
	if(isColorElement.test(code) && !hasNoneFill.test(code)){
		return true;
	}	
	return false;
}
function hasAttr(code, attribute){
	return code.match(" " + attribute + "=") ? true : false;
}
function addAttr(code, attribute, value){
	var new_snippet = ' ' + attribute + "='" + value + "'";
	return code.replace(">", "") + new_snippet + ">";
}
function removeAttr(code, attribute){
	var old_value = getAttrValue(code, attribute);
	var old_snippet = ' ' + attribute + "='" + old_value + "'";
	return code.replace(old_snippet, "");
}
function getAttrValue(code, attribute){
	if(hasAttr(code, attribute)){		
		var regEx = new RegExp(` ${attribute}=['"]([^'"]*)['"]`, "i");
		return code.match(regEx)[1];
	}
	return "";
}
function updateAttrValue(code, attribute, new_value){
    if(hasAttr(code, attribute)){
		var old_value = getAttrValue(code, attribute);
        var old_snippet = ' ' + attribute + "='" + old_value + "'";
        var new_snippet = ' ' + attribute + "='" + new_value + "'";
        return code.replace(old_snippet, new_snippet);		
    }	
	return code;
}
function addClass(code, value){	
	if(hasAttr(code, "class")){
		var new_value = getAttrValue(code, "class") + " " + value;
		return updateAttrValue(code, "class", new_value);
	}else{
		return addAttr(code, "class", value);
	}
}
function removeClass(code, value){	
	if(hasAttr(code, "class")){
		var classes = getAttrValue(code, "class").split(" ");
		var remaining = classes.filter(item => item !== value);
		var new_value = remaining.join(" ");		
		if(new_value === ""){			
			return removeAttr(code, "class");
		}				
		return updateAttrValue(code, "class", new_value);
	}
	return code;
}

/* UTILITIES */


function openInfo(){
	var OVERLAY = document.getElementById('infoBox');
	OVERLAY.classList.toggle('active');
	mixpanel.track('Info Button');	
}
function closeBox(e, type){
	e = e || window.event;
    var target = e.target || e.srcElement;	
	var OVERLAY = document.getElementById(type + 'Box');
	var CLOSE = document.getElementById('close' + titleCase(type) + 'Box');	
	if(target === OVERLAY || target === CLOSE){
		OVERLAY.classList.remove('active');
	}
}
function titleCase(str){
	return str.toLowerCase().split(' ').map(function(word) {
	    return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
}
function isButton(el) {
	return selectorMatches(el, 'button');	
}
function selectorMatches(el, selector) {
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	};
	return f.call(el, selector);
}
function elementPosition(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: rect.bottom + scrollTop, right: rect.right + scrollLeft, width: rect.width, height: rect.bottom - rect.top}
}
function copyToClipboard(msg, target) {
	if(!navigator.clipboard){ //old technique
		var range = document.createRange();
		var msgHolder = document.getElementById("CLIPBOARD");	
		var contentToCopy = document.createTextNode(msg);
		msgHolder.innerHTML = '';
		msgHolder.appendChild(contentToCopy);
		range.selectNode(msgHolder);
		window.getSelection().removeAllRanges(); // clear current selection
		window.getSelection().addRange(range); // to select text
		document.execCommand("copy");
		window.getSelection().removeAllRanges();// to deselect			
	}else{ //modern approach
		navigator.clipboard.writeText(msg).then(
			function(){
			notifyBox(target, 'COPIED', true);
		})
		.catch(
			function() {
			notifyBox(target, 'Error', true);
		});
	}	
} //https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
function notifyBox(el, msg, rounded) {
	rounded = rounded || false;
	var CONTENT = document.getElementById("content-wrap");
	var nBOX = document.createElement('div');
	CONTENT.insertBefore(nBOX, CONTENT.firstChild);
	nBOX.classList.add("notifyBox");
	var msgToShow = document.createTextNode(msg);	
	nBOX.appendChild(msgToShow);
	var elPosition = elementPosition(el);	
	nBOX.style.left = (elPosition.left) + 'px';
	nBOX.style.top = (elPosition.top) + 'px';
	nBOX.style.width = (elPosition.width) + 'px';
	nBOX.style.height = (elPosition.height) + 'px'; //(elPosition.bottom - elPosition.top) + 'px';
	nBOX.style.lineHeight = (elPosition.bottom - elPosition.top) + 'px';
	if(rounded){
		nBOX.style.borderRadius  = '99px';
	}	
	setTimeout(() => nBOX.classList.add("fadeOut"), 500 );	
	setTimeout(() => CONTENT.removeChild(nBOX), 1500 );
}
function constrainNumber(num, min, max){
	if(num > max){
		return max;
	}else if(num < min){
		return min;
	}
	return num;
}
//document.addEventListener("DOMContentLoaded", () => {
jscolor.presets.default = {
	alphaChannel:false,
	position: 'right',
	previewSize:0,
	previewPadding: 0,
	padding: 10,
	borderRadius:0,
	backgroundColor: '#FFF',
	borderColor: '#FFF',
	borderWidth: 0,
	controlBorderWidth: 0,
	controlBorderColor:'#FFF',
	//format: 'hex',
	format: 'any',
	paletteCols:10,
	paletteHeight: 999,
	paletteSpacing: 5,
	//palette: '#fff #777 #333 #000 #808080 #996e36 #f55525 #ffe438 #88dd20 #22e0cd',
	//palette: BRAND_COLORS.join(" "),
	width:400, 
	height:200, 
	//mode:'HVS',
	sliderSize:25,
	shadow:false
};
document.addEventListener("DOMContentLoaded", () => {
	loadColorHistory();
});

function loadColorHistory(){
	if(!SHOW_COLOR_HISTORY){return}	
	for(var i = 0; i < (STYLE.length - ATTR.length); i++){
		document.querySelector('#ci_'+ i).jscolor.option('palette', COLOR_HISTORY);
	}
}
function updateColorHistory(color){
	if(!SHOW_COLOR_HISTORY){return}
	var index = COLOR_HISTORY.indexOf('#' + color);
	if(index !== -1){
		COLOR_HISTORY.splice(index, 1);			
	}else{
		COLOR_HISTORY.pop();
	}
	COLOR_HISTORY.unshift('#' + color);
	loadColorHistory();
}

function enableSearch(){
	var taglist = document.getElementById("element-stage").dataset.keywords;	
	if(taglist){
		TAGS = taglist.split(';');
		var SEARCH_BAR = document.getElementById("svgSearch");
		SEARCH_BAR.classList.add("show");
		for (var line of TAGS) {
			var name = line.split(' ')[0];		
			var id = "ee-" + name;
			var element = document.getElementById(id);
			if(element){
				element.dataset.tags = line;
			}
		}
		ELEMENTS = document.getElementById("element-stage").querySelectorAll("button");
	}
}
var searchTimer;
function searchElements(){
	clearTimeout(searchTimer);
	var searchTerm = document.getElementById("el_search").value.toLowerCase();	
	//var RESULTS = document.getElementById("element-stage").querySelectorAll("button"); //store globably
	var RESULTS = ELEMENTS; //each SVG button
	var count = 0;
	var i;
	for (i = 0; i < RESULTS.length; ++i) {		
		var tags = RESULTS[i].dataset.tags;
		if(tags.includes(searchTerm)){
			RESULTS[i].classList.remove("hide");
			count++;
		}else{
			RESULTS[i].classList.add("hide");
		}
	}
	if(count === 0){
		document.getElementById("noElements").classList.add("show");		
	}else{
		document.getElementById("noElements").classList.remove("show");		
	}	
	if(searchTerm.length > 1){
		searchTimer = setTimeout(function(){
			mixpanel.track('Search Elements', {"keyword": searchTerm, "results": count, "set": SET});
			//console.log('Number of Elements: ' + count);
		}, 3000);
	}
}
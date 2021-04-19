(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1550:function(t,e,o){"use strict";o.r(e);var a=o(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deepl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deepl"}},[t._v("#")]),t._v(" DeepL")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://deepL.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("DeepL"),a("OutboundLink")],1),t._v(" is a machine translation service that allows you to translate text to different languages.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),a("p",[t._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/DeepL/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Resource")]),t._v(" "),a("ul",[a("li",[t._v("Translate")])])]),t._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("This workflow allows you to translate cocktail instructions to French. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/998",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),a("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[t._v("HTTP Request")])],1),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("DeepL")])])]),t._v(" "),a("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(733),alt:"A workflow with the DeepL node"}})]),t._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),a("p",[t._v("The Start node exists by default when you create a new workflow.")]),t._v(" "),a("h3",{attrs:{id:"_2-http-request-node-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[t._v("#")]),t._v(" 2. HTTP Request node (GET)")]),t._v(" "),a("p",[t._v("This node will make a GET request to the API "),a("code",[t._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),t._v(" to fetch a random cocktail. This information gets passed on to the next node in the workflow.")]),t._v(" "),a("ol",[a("li",[t._v("Enter "),a("code",[t._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),t._v(" in the "),a("em",[a("strong",[t._v("URL")])]),t._v(" field.")]),t._v(" "),a("li",[t._v("Click on "),a("em",[a("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),a("p",[t._v("In the screenshot below, you will notice that the node makes a GET request to the API and returns information about a random cocktail.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(734),alt:"Using the HTTP Request node to get the information about a random cocktail"}})]),t._v(" "),a("h3",{attrs:{id:"_3-deepl-node-translate-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-deepl-node-translate-language"}},[t._v("#")]),t._v(" 3. DeepL node (translate: language)")]),t._v(" "),a("p",[t._v("This node will translate the cocktail instructions that we got from the previous node to French. To translate the instructions in your language, select your language instead.")]),t._v(" "),a("ol",[a("li",[t._v("First of all, you'll have to enter credentials for the DeepL node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/DeepL/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"2"}},[a("li",[t._v("Click on the gears icon next to the "),a("em",[a("strong",[t._v("Text")])]),t._v(" field and click on "),a("em",[a("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),a("li",[t._v("Select the following in the "),a("em",[a("strong",[t._v("Variable Selector")])]),t._v(" section: Current Nodes > Input Data > JSON > drinks > [item: 0] > strInstructions. You can also add the following expression: "),a("code",[t._v('{{$json["drinks"][0]["strInstructions"]}}')]),t._v(".")]),t._v(" "),a("li",[t._v("Select 'French' from the "),a("em",[a("strong",[t._v("Target Language")])]),t._v(" dropdown list.")]),t._v(" "),a("li",[t._v("Click on "),a("em",[a("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),a("p",[t._v("In the screenshot below, you will notice that the node translates the instructions of the cocktail to French.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(735),alt:"Using the DeepL node to translate the instructions to French"}})])])}),[],!1,null,null,null);e.default=n.exports},733:function(t,e,o){t.exports=o.p+"assets/img/workflow.8c6c30be.png"},734:function(t,e,o){t.exports=o.p+"assets/img/HTTPRequest_node.d11031aa.png"},735:function(t,e,o){t.exports=o.p+"assets/img/DeepL_node.37ee27cb.png"}}]);
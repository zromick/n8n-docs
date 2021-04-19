(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1491:function(e,t,r){"use strict";r.r(t);var o=r(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"html-extract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#html-extract"}},[e._v("#")]),e._v(" HTML Extract")]),e._v(" "),o("p",[e._v("The HTML Extract node is useful to extract the HTML content of a webpage.")]),e._v(" "),o("h2",{attrs:{id:"node-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Source Data:")]),e._v(" This field specifies if HTML should be read from binary or JSON data. In this dropdown list, there are two options.\n"),o("ul",[o("li",[e._v("Binary")]),e._v(" "),o("li",[e._v("JSON")])])]),e._v(" "),o("li",[o("em",[o("strong",[e._v("JSON Property:")])]),e._v(" The name of the JSON property in which the HTML (from which to extract the data) can be found. This field is displayed when 'JSON' is selected in the "),o("em",[o("strong",[e._v("Source Data")])]),e._v(" field.")]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Binary Property:")])]),e._v(" The name of the binary property in which the HTML (from which to extract the data) can be found. This field is displayed when 'Binary' is selected in the "),o("em",[o("strong",[e._v("Source Data")])]),e._v(" field.\nThe property can either contain a string or an array of strings.")]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Extraction Values:")])]),e._v(" "),o("ul",[o("li",[o("em",[o("strong",[e._v("Key:")])]),e._v(" The key under which the extracted value should be saved.")]),e._v(" "),o("li",[o("em",[o("strong",[e._v("CSS Selector:")])]),e._v(" The CSS selector to use.")]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Return Value:")])]),e._v(" The kind of data that should be returned. In this dropdown list there are four options.\n"),o("ul",[o("li",[o("em",[o("strong",[e._v("Attribute:")])]),e._v(" Get an attribute value like 'class' from an element.\n"),o("ul",[o("li",[o("em",[o("strong",[e._v("Attribute:")])]),e._v(" The name of the attribute to return the value of.")])])]),e._v(" "),o("li",[o("em",[o("strong",[e._v("HTML:")])]),e._v(" Get the HTML that the element contains.")]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Text:")])]),e._v(" Get only the text content of the element.")]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Value:")])]),e._v(" Get the value of an input, select, or textarea.")])])]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Return Array:")])]),e._v(" Returns the values as an array so that if multiple ones are found, they also get returned separately. If not set, all values will be returned as a single string.")])])]),e._v(" "),o("li",[o("em",[o("strong",[e._v("Options:")])]),e._v(" "),o("ul",[o("li",[o("em",[o("strong",[e._v("Trim Values:")])]),e._v(" Removes all spaces and newlines from the beginning and end of the values.")])])])]),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to extract titles and URLs of all the articles from the  "),o("a",{attrs:{href:"https://hackernoon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hackernoon"),o("OutboundLink")],1),e._v(" homepage using the HTML Extract node. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/434",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("HTML Extract")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(582),alt:"A workflow with the HTML Extract node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-http-request-node-get"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),o("ol",[o("li",[e._v("Enter "),o("code",[e._v("https://hackernoon.com")]),e._v(" in the "),o("em",[o("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Select 'String' from the "),o("em",[o("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:r(583),alt:"Get the articles from Hackernoon using the HTTP Request node"}})]),e._v(" "),o("h3",{attrs:{id:"_3-html-extract-node-json-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-html-extract-node-json-data"}},[e._v("#")]),e._v(" 3. HTML Extract node (json: data)")]),e._v(" "),o("ol",[o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Value")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("item")]),e._v(" in the "),o("em",[o("strong",[e._v("Key")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("h2")]),e._v(" in the "),o("em",[o("strong",[e._v("CSS Selector")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Select 'HTML' from the "),o("em",[o("strong",[e._v("Return Value")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Toggle "),o("em",[o("strong",[e._v("Return Array")])]),e._v(" to true.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:r(584),alt:"Extract title of the articles using the HTML Extract node"}})]),e._v(" "),o("h3",{attrs:{id:"_4-html-extract1-node-json-item"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-html-extract1-node-json-item"}},[e._v("#")]),e._v(" 4. HTML Extract1 node (json: item)")]),e._v(" "),o("ol",[o("li",[e._v("Enter "),o("code",[e._v("item")]),e._v(" in the "),o("em",[o("strong",[e._v("JSON Property")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Value")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("title")]),e._v(" in the "),o("em",[o("strong",[e._v("Key")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("a")]),e._v(" in the "),o("em",[o("strong",[e._v("CSS Selector")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Value")])]),e._v(" button.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("url")]),e._v(" in the "),o("em",[o("strong",[e._v("Key")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("a")]),e._v(" in the "),o("em",[o("strong",[e._v("CSS Selector")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Select 'Attribute' from the "),o("em",[o("strong",[e._v("Return Value")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("href")]),e._v(" in the "),o("em",[o("strong",[e._v("Attribute")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:r(585),alt:"Extract title and link of the articles using the HTML Extract node"}})]),e._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("FurtherReadingBlog",{attrs:{node:"HTML Extract"}})],1)}),[],!1,null,null,null);t.default=n.exports},582:function(e,t,r){e.exports=r.p+"assets/img/workflow.b2a700aa.png"},583:function(e,t,r){e.exports=r.p+"assets/img/HTTPRequest_node.18feb5e7.png"},584:function(e,t,r){e.exports=r.p+"assets/img/HTMLExtract_node.d83b8e12.png"},585:function(e,t,r){e.exports=r.p+"assets/img/HTMLExtract1_node.e31729d4.png"}}]);
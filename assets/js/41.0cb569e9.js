(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1629:function(e,t,o){"use strict";o.r(t);var n=o(26),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"peekalink"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peekalink"}},[e._v("#")]),e._v(" Peekalink")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://peekalink.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peekalink"),n("OutboundLink")],1),e._v(" is an API that allows developers to preview links on the web.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Peekalink/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("ul",[n("li",[e._v("Check whether a preview for a given link is available")]),e._v(" "),n("li",[e._v("Return the preview for a link")])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to check if preview for a link is available and return the link preview. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/935",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Peekalink")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/IF/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(951),alt:"A workflow with the Peekalink node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-peekalink-node-create-room"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-peekalink-node-create-room"}},[e._v("#")]),e._v(" 2. Peekalink node (create: room)")]),e._v(" "),n("p",[e._v("This node will check whether a preview for the specified link is available.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Peekalink node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Peekalink/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Is available' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter a URL in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns information about whether a preview for the specified link is available.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(952),alt:"Using the Peekalink node to check whether preview for a given link is available"}})]),e._v(" "),n("h3",{attrs:{id:"_3-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("p",[e._v("This node will check the response from the previous node. If the previous node returned "),n("code",[e._v("true")]),e._v(", the IF node will also return "),n("code",[e._v("true")]),e._v(", otherwise the IF node will return "),n("code",[e._v("false")]),e._v(".")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'Boolean'.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > isAvailable. You can also add the following expression: "),n("code",[e._v('{{$json["isAvailable"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" to "),n("code",[e._v("true")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the data from the previous node for the "),n("code",[e._v("true")]),e._v(" branch.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(953),alt:"Using the IF node to check the response from the previous node"}})]),e._v(" "),n("h3",{attrs:{id:"_4-peekalink-node-preview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-peekalink-node-preview"}},[e._v("#")]),e._v(" 4. Peekalink node (preview)")]),e._v(" "),n("p",[e._v("This node will return the preview of the URL that you specified in the Peekalink node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Connect the node to the 'true' output of the IF node")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous Peekalink node.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Peekalink > Parameters > url. You can also add the following expression: "),n("code",[e._v('{{$node["Peekalink"].parameter["url"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns the preview of the URL that you specified in the Peekalink node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(954),alt:"Using the Peekalink node to get the preview of a URL"}})]),e._v(" "),n("h3",{attrs:{id:"_5-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow. We've added this as it can sometimes help others with a better understanding of the workflow, visually.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[n("img",{attrs:{src:o(955),alt:"Using the NoOp node"}})])])}),[],!1,null,null,null);t.default=i.exports},951:function(e,t,o){e.exports=o.p+"assets/img/workflow.6448a894.png"},952:function(e,t,o){e.exports=o.p+"assets/img/Peekalink_node.acd6bd7e.png"},953:function(e,t,o){e.exports=o.p+"assets/img/IF_node.a5a5cc83.png"},954:function(e,t,o){e.exports=o.p+"assets/img/Peekalink1_node.6d57f8b7.png"},955:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.9ac742c4.png"}}]);
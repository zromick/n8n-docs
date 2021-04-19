(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1547:function(e,t,o){"use strict";o.r(t);var a=o(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cortex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cortex"}},[e._v("#")]),e._v(" Cortex")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/TheHive-Project/CortexDocs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cortex"),a("OutboundLink")],1),e._v(" offers a powerful observable (URL, file, IP, etc) analysis mechanism. It allows you to analyze collected observables using a single tool, respond to threats, and interact with the constituency and other teams.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Cortex/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Analyzer")]),e._v(" "),a("ul",[a("li",[e._v("Execute")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Job")]),e._v(" "),a("ul",[a("li",[e._v("Get job details")]),e._v(" "),a("li",[e._v("Get job report")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Responder")]),e._v(" "),a("ul",[a("li",[e._v("Execute responder")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to analyze a URL and get the job details using the Cortex node. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/809",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Cortex")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(723),alt:"A workflow with the Cortex node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-cortex-node-analyzer-execute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-cortex-node-analyzer-execute"}},[e._v("#")]),e._v(" 2. Cortex node (analyzer: execute)")]),e._v(" "),a("p",[e._v("This node will analyze a URL. If you want to analyze a different observable type, select that instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Cortex node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Cortex/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Abuse_Finder_3_0' from the "),a("em",[a("strong",[e._v("Analyzer Type")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'URL' from the "),a("em",[a("strong",[e._v("Observable Type")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the URL you want to analyze in the "),a("em",[a("strong",[e._v("Observable Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node starts the analysis of the URL.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(724),alt:"Using the Cortex node to analyze a URL"}})]),e._v(" "),a("h3",{attrs:{id:"_3-cortex1-node-job-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-cortex1-node-job-get"}},[e._v("#")]),e._v(" 3. Cortex1 node (job: get)")]),e._v(" "),a("p",[e._v("This node will return the job details for the analysis that we executed in the previous node.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Job' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Job ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Cortex > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Cortex"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node starts the analysis of the URL.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(725),alt:"Using the Cortex node to get job details"}})])])}),[],!1,null,null,null);t.default=s.exports},723:function(e,t,o){e.exports=o.p+"assets/img/workflow.8f4491d9.png"},724:function(e,t,o){e.exports=o.p+"assets/img/Cortex_node.cb4f77e7.png"},725:function(e,t,o){e.exports=o.p+"assets/img/Cortex1_node.a5c96c36.png"}}]);
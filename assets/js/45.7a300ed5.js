(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1127:function(e,t,o){e.exports=o.p+"assets/img/workflow.072ea976.png"},1128:function(e,t,o){e.exports=o.p+"assets/img/Wise_node.b16bf384.png"},1129:function(e,t,o){e.exports=o.p+"assets/img/Wise1_node.4532deb0.png"},1130:function(e,t,o){e.exports=o.p+"assets/img/Wise2_node.cb4bf5dd.png"},1131:function(e,t,o){e.exports=o.p+"assets/img/Wise3_node.c4dbd0ef.png"},1683:function(e,t,o){"use strict";o.r(t);var r=o(26),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"wise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wise"}},[e._v("#")]),e._v(" Wise")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://wise.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wise"),r("OutboundLink")],1),e._v(" allows you to transfer money abroad with low-cost money transfers, receive money with international account details, and track transactions on your phone.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Wise/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Account")]),e._v(" "),r("ul",[r("li",[e._v("Retrieve balances for all account currencies of this user")]),e._v(" "),r("li",[e._v("Retrieve all currencies in the borderless account of this user")]),e._v(" "),r("li",[e._v("Retrieve the statement for the borderless account of this user")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Exchange Rate")]),e._v(" "),r("ul",[r("li",[e._v("Get")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Profile")]),e._v(" "),r("ul",[r("li",[e._v("Get a profile")]),e._v(" "),r("li",[e._v("Get all profiles")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Recipient")]),e._v(" "),r("ul",[r("li",[e._v("Get all recipients")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Quote")]),e._v(" "),r("ul",[r("li",[e._v("Create a quote")]),e._v(" "),r("li",[e._v("Get a quote")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Transfer")]),e._v(" "),r("ul",[r("li",[e._v("Create a transfer")]),e._v(" "),r("li",[e._v("Delete a transfer")]),e._v(" "),r("li",[e._v("Execute a transfer")]),e._v(" "),r("li",[e._v("Get a transfer")]),e._v(" "),r("li",[e._v("Get all transfers")])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a quote and a transfer, execute the transfer, and get the information of the transfer using the Wise node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/992",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Wise")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1127),alt:"A workflow with the Wise node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-wise-node-create-quote"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-wise-node-create-quote"}},[e._v("#")]),e._v(" 2. Wise node (create: quote)")]),e._v(" "),r("p",[e._v("This node will create a new quote in Wise.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Wise node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Wise/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Quote' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Create' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a profile from the "),r("em",[r("strong",[e._v("Profile ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a target account from the "),r("em",[r("strong",[e._v("Target Account ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter an amount in the "),r("em",[r("strong",[e._v("Amount")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the source currency in the "),r("em",[r("strong",[e._v("Source Currency")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the target currency in the "),r("em",[r("strong",[e._v("Target Currency")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new quote.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1128),alt:"Using the Wise node to create a new quote"}})]),e._v(" "),r("h3",{attrs:{id:"_3-wise1-node-create-transfer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-wise1-node-create-transfer"}},[e._v("#")]),e._v(" 3. Wise1 node (create: transfer)")]),e._v(" "),r("p",[e._v("This node will create a new transfer for the quote that we created in the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Transfer' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a profile from the "),r("em",[r("strong",[e._v("Profile ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Quote ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Select the target account from the "),r("em",[r("strong",[e._v("Target Account ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Enter a description in the "),r("em",[r("strong",[e._v("Reference")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a new transfer for the quote that we created in the previous node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1129),alt:"Using the Wise node to create a new transfer"}})]),e._v(" "),r("h3",{attrs:{id:"_4-wise2-node-execute-transfer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-wise2-node-execute-transfer"}},[e._v("#")]),e._v(" 4. Wise2 node (execute: transfer)")]),e._v(" "),r("p",[e._v("This node will execute the transfer that we created in the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Transfer' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Execute' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a profile from the "),r("em",[r("strong",[e._v("Profile ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Transfer ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns the executes the transfer that we created in the previous node.")]),e._v(" "),r("p",[r("img",{pre:!0,attrs:{src:o(1130),alt:"Using the Wise node to execute a transfer"}})]),e._v(" "),r("h3",{pre:!0,attrs:{id:"_5-wise3-node-get-transfer"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-wise3-node-get-transfer"}},[e._v("#")]),e._v(" 5. Wise3 node (get: transfer)")]),e._v(" "),r("p",[e._v("This node will return the information of the transfer that we executed in the previous node.")]),e._v(" "),r("div",{pre:!0,attrs:{"v-pre":""}},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Transfer' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Get' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Transfer ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wise1 > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Wise1"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns the information about the transfer that we executed in the previous node.")]),e._v(" "),r("p",[r("img",{pre:!0,attrs:{src:o(1131),alt:"Using the Wise node to get a transfer"}})])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1121:function(e,t,o){e.exports=o.p+"assets/img/workflow.a04084f9.png"},1122:function(e,t,o){e.exports=o.p+"assets/img/Wekan_node.c9d8dce4.png"},1123:function(e,t,o){e.exports=o.p+"assets/img/Wekan1_node.e704121e.png"},1124:function(e,t,o){e.exports=o.p+"assets/img/Wekan2_node.da678065.png"},1125:function(e,t,o){e.exports=o.p+"assets/img/Wekan3_node.0ff6e13a.png"},1126:function(e,t,o){e.exports=o.p+"assets/img/Wekan4_node.f8fff042.png"},1682:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"wekan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wekan"}},[e._v("#")]),e._v(" Wekan")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://wekan.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wekan"),a("OutboundLink")],1),e._v(" is an open-source kanban board that allows a card-based task and to-do management.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Wekan/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Board")]),e._v(" "),a("ul",[a("li",[e._v("Create a new board")]),e._v(" "),a("li",[e._v("Delete a board")]),e._v(" "),a("li",[e._v("Get the data of a board")]),e._v(" "),a("li",[e._v("Get all user boards")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Card")]),e._v(" "),a("ul",[a("li",[e._v("Create a new card")]),e._v(" "),a("li",[e._v("Delete a card")]),e._v(" "),a("li",[e._v("Get a card")]),e._v(" "),a("li",[e._v("Update a card")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Card Comment")]),e._v(" "),a("ul",[a("li",[e._v("Create a comment on a card")]),e._v(" "),a("li",[e._v("Delete a comment from a card")]),e._v(" "),a("li",[e._v("Get a card comment")]),e._v(" "),a("li",[e._v("Get all card comments")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Checklist")]),e._v(" "),a("ul",[a("li",[e._v("Create a new checklist")]),e._v(" "),a("li",[e._v("Delete a checklist")]),e._v(" "),a("li",[e._v("Get the data of a checklist")]),e._v(" "),a("li",[e._v("Returns all checklists for the card")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Checklist Item")]),e._v(" "),a("ul",[a("li",[e._v("Delete a checklist item")]),e._v(" "),a("li",[e._v("Get a checklist item")]),e._v(" "),a("li",[e._v("Update a checklist item")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("List")]),e._v(" "),a("ul",[a("li",[e._v("Create a new list")]),e._v(" "),a("li",[e._v("Delete a list")]),e._v(" "),a("li",[e._v("Get the data of a list")]),e._v(" "),a("li",[e._v("Get all board lists")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create a board and two lists called "),a("code",[e._v("To Do")]),e._v(" and "),a("code",[e._v("Done")]),e._v(" using the Wekan node. It also allows you to create a card and update the list ID of the card, enabling you to move it from the "),a("code",[e._v("To Do")]),e._v(" list to the "),a("code",[e._v("Done")]),e._v(" list. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/728",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Wekan")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1121),alt:"A workflow with the Wekan node"}})]),e._v(" "),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_1-start-node"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")])]),a("h3",{attrs:{id:"_2-wekan-node-create-board"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-wekan-node-create-board"}},[e._v("#")]),e._v(" 2. Wekan node (create: board)")]),e._v(" "),a("p",[e._v("This node will create a board called "),a("code",[e._v("Documentation")]),e._v(" in Wekan. To create a board with a different name, you can enter the name of your board instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Wekan node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Wekan/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"2"}},[a("li",[e._v("Select 'Board' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Documentation")]),e._v(" in the "),a("em",[a("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Select the owner of the board from the "),a("em",[a("strong",[e._v("Owner")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new board with the title "),a("code",[e._v("Documentation")]),e._v(".")])]),a("p",[a("img",{attrs:{src:o(1122),alt:"Using the Wekan node to create a board"}})]),e._v(" "),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_3-wekan1-node-create-list"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-wekan1-node-create-list"}},[e._v("#")]),e._v(" 3. Wekan1 node (create: list)")]),e._v(" "),a("p",[e._v("This node will create a list with the title "),a("code",[e._v("To Do")]),e._v(" in the "),a("code",[e._v("Documentation")]),e._v(" board, which was created using the previous node.")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'List' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Board ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("To Do")]),e._v(" in the "),a("em",[a("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new list called "),a("code",[e._v("To Do")]),e._v(" in the "),a("code",[e._v("Documentation")]),e._v(" board.")])]),a("p",[a("img",{attrs:{src:o(1123),alt:"Using the Wekan node to create a list with the title To Do"}})]),e._v(" "),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_4-wekan2-node-create-list"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-wekan2-node-create-list"}},[e._v("#")]),e._v(" 4. Wekan2 node (create: list)")]),e._v(" "),a("p",[e._v("This node will create a list with the title "),a("code",[e._v("Done")]),e._v(" in the "),a("code",[e._v("Documentation")]),e._v(" board, which was created using the Wekan node.")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'List' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Board ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Done")]),e._v(" in the "),a("em",[a("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new list called "),a("code",[e._v("Done")]),e._v(" in the "),a("code",[e._v("Documentation")]),e._v(" board.")])]),a("p",[a("img",{attrs:{src:o(1124),alt:"Using the Wekan node to create a list with the title Done"}})]),e._v(" "),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_5-wekan3-node-create-card"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-wekan3-node-create-card"}},[e._v("#")]),e._v(" 5. Wekan3 node (create: card)")]),e._v(" "),a("p",[e._v("This node will create a card in the "),a("code",[e._v("Documentation")]),e._v(" board under the list titled "),a("code",[e._v("To Do")]),e._v(", which was created using the Wekan1 node.")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Board ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("List ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan1 > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan1"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Document Wekan node")]),e._v(" in the "),a("em",[a("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Select 'Default' from the "),a("em",[a("strong",[e._v("Swimlane ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select an author from the "),a("em",[a("strong",[e._v("Author ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a new card with the title "),a("code",[e._v("Document Wekan node")]),e._v(" in the "),a("code",[e._v("To Do")]),e._v(" list of the "),a("code",[e._v("Documentation")]),e._v(" board.")])]),a("p",[a("img",{attrs:{src:o(1125),alt:"Using the Wekan node to create a card in the To Do list"}})]),e._v(" "),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_6-wekan4-node-update-card"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_6-wekan4-node-update-card"}},[e._v("#")]),e._v(" 6. Wekan4 node (update: card)")]),e._v(" "),a("p",[e._v("This node will update the list ID of the card created by the previous node and move it from the "),a("code",[e._v("To Do")]),e._v(" list to the "),a("code",[e._v("Done")]),e._v(" list.")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Update' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Board ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("List ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan1 > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan1"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Card ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan3 > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan3"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button and select 'List ID'.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("List ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Wekan2 > Output Data > JSON > _id. You can also add the following expression: "),a("code",[e._v('{{$node["Wekan2"].json["_id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node updates the list id of the card that we created in the previous node and moves it from the "),a("code",[e._v("To Do")]),e._v(" list to the "),a("code",[e._v("Done")]),e._v(" list.")])]),a("p",[a("img",{attrs:{src:o(1126),alt:"Using the Wekan node to update the card"}})]),e._v(" "),a("h2",{attrs:{id:"faqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),a("h3",{attrs:{id:"how-to-load-all-the-parameters-for-the-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-load-all-the-parameters-for-the-node"}},[e._v("#")]),e._v(" How to load all the parameters for the node?")]),e._v(" "),a("p",[e._v("To load all the parameters, for example, Author ID, you need to give admin permissions to the user. Refer to the "),a("a",{attrs:{href:"https://github.com/wekan/wekan/wiki/Features#members-click-member-initials-or-avatar--permissions-adminnormalcomment-only",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wekan documentation"),a("OutboundLink")],1),e._v(" to learn how to change permissions.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
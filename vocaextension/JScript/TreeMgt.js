<!-- 
/* Script defined by S.Depres */ 

function Toggle(node, RelativePathToImg)
{
	if (node.nextSibling.style.display == 'none')
	{
		if (node.childNodes.length > 0)
		{
			if (node.childNodes.item(0).tagName == "IMG")
			{
				node.childNodes.item(0).src = RelativePathToImg + "minus.gif";
			}
		}
		node.nextSibling.style.display = '';
	}
	else
	{
		if (node.childNodes.length > 0)
		{
			if (node.childNodes.item(0).tagName == "IMG")
			{
				node.childNodes.item(0).src = RelativePathToImg + "plus.gif";
			}
		}
		node.nextSibling.style.display = 'none';
	}
}
 
function Toggle2(node, RelativePathToImg)
{
	if (node.nextSibling.nextSibling.style.display == 'none')
	{
		if (node.childNodes.length > 0)
		{
			if (node.childNodes.item(0).tagName == "IMG")
			{
				node.childNodes.item(0).src = RelativePathToImg + "minus.gif";
			}
		}
		node.nextSibling.nextSibling.style.display = '';
	}
	else
	{
		if (node.childNodes.length > 0)
		{
			if (node.childNodes.item(0).tagName == "IMG")
			{
				node.childNodes.item(0).src = RelativePathToImg + "plus.gif";
			}
		}
		node.nextSibling.nextSibling.style.display = 'none';
	}
}



function ExpandNodes(n, RelativePathToImg)
{	
	for (var i=0; i< n.childNodes.length; i++) 
	{	var childNode = n.childNodes[i]
		if ((n.nodeName == "SPAN") && ((n.className == "a_step") ||  (n.className == "a_step_optional" )))
		{	if ((n.parentNode != null) && (n.parentNode.nextSibling != null))
			{	n.parentNode.nextSibling.style.display = '';
				if (n.parentNode.childNodes.item(0).tagName == "IMG")
					n.parentNode.childNodes.item(0).src = RelativePathToImg + "minus.gif";
			}
		}
		ExpandNodes(childNode, RelativePathToImg) ;
	}
	
}

function ExpandNodes2(n, RelativePathToImg)
{	
	for (var i=0; i< n.childNodes.length; i++) 
	{	var childNode = n.childNodes[i]
		if ((n.nodeName == "SPAN") && ((n.className == "a_step") ||  (n.className == "a_step_optional" )))
		{	if ((n.previousSibling != null) && (n.nextSibling != null))
			{	n.nextSibling.style.display = '';
				if (n.previousSibling.childNodes.item(0).tagName == "IMG")
					n.previousSibling.childNodes.item(0).src = RelativePathToImg + "minus.gif";
			}
		}
		ExpandNodes2(childNode, RelativePathToImg) ;
	}
	
}

function CollapseNodes(n, RelativePathToImg)
{	
	for (var i=0; i< n.childNodes.length; i++) 
	{	var childNode = n.childNodes[i]
		if ((n.nodeName == "SPAN") && ((n.className == "a_step") ||  (n.className == "a_step_optional" )))
		{	if ((n.parentNode != null) && (n.parentNode.nextSibling != null))
			{	n.parentNode.nextSibling.style.display = 'none';
				if (n.parentNode.childNodes.item(0).tagName == "IMG")
					n.parentNode.childNodes.item(0).src = RelativePathToImg + "plus.gif";
			}
		}
		CollapseNodes(childNode, RelativePathToImg) ;
	}
	
}

function CollapseNodes2(n, RelativePathToImg)
{	
	for (var i=0; i< n.childNodes.length; i++) 
	{	var childNode = n.childNodes[i]
		if ((n.nodeName == "SPAN") && ((n.className == "a_step") ||  (n.className == "a_step_optional" )))
		{	
			if ((n.previousSibling != null) && (n.nextSibling != null))
			{	n.nextSibling.style.display = 'none';
				if (n.previousSibling.childNodes.item(0).tagName == "IMG")
					n.previousSibling.childNodes.item(0).src = RelativePathToImg + "plus.gif";
			}
		}
		CollapseNodes2(childNode, RelativePathToImg) ;
	}
	
}
//-->
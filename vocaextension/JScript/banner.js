/* S.DEPRES - function for the banner */

function NewWin(Url)
   {
     MyWin=window.open(Url,"Window","width=750,height=450,screenx=0,screeny=0,left=0,top=0,resizable=1,border=0,directories=1,status=1,scrollbars=1,menubar=1,toolbar=1,copyhistory=1");
   }
   
function provideLink() 
{
	var linkWindow = window.open('','linkWindow', 'height=150,width=800,scrollbars,resizable');
	linkWindow.focus();
	linkWindow.document.write('<html>');	
	linkWindow.document.write('<head>');
	linkWindow.document.write('<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">');
	linkWindow.document.write('<title>Email link<\/title>');
	linkWindow.document.write('<link rel="stylesheet" type="text/css" href="css/Process.css">');
	linkWindow.document.write('<\/head>');
	linkWindow.document.write('<body>');
	linkWindow.document.write('<p class="bodyText">Copy and paste the link in your e-mail:<\/p>');
	linkWindow.document.write('<p class="bodyText">' + parent.main.location + '<\/p>');
	linkWindow.document.write('<\/body>');
	linkWindow.document.write('<\/html>');
	linkWindow.document.close();
}

function framePrint(whichFrame)
{
	parent[whichFrame].focus();
	parent[whichFrame].print();
}

function Add_A_Favorite()
{	if (window.external) 
	{	window.external.AddFavorite(top.main.location.href,top.main.document.title);
	}
	else
	{	alert("Sorry, Your browser do not support the function");
	}
}

function toL2()
{	
	if (typeof(parent['main'].location.href) != 'undefined')
	{	sourceLocation = new String (parent['main'].location.href) ;
		re = /overview.htm/gi
		targetLocation = sourceLocation.replace(re,'overviewL2.htm');
		parent['main'].location.replace (targetLocation);
		parent['contents'].location.replace ('../../applet/treeViewL2.htm');
		location.replace ('topbanner2.htm');
	}
	else
	{	top.location = '../../indexL2.htm'
	}

}

function toL1()
{	if (typeof(parent['main'].location.href) != 'undefined')
	{	sourceLocation = new String (parent['main'].location.href) ;
		re = /overviewL2.htm/gi
		targetLocation = sourceLocation.replace(re,'overview.htm');
		parent['main'].location.replace (targetLocation);
		parent['contents'].location.replace ('../../applet/treeView.htm');
		location.replace ('topbanner1.htm');
	}
	else
	{	top.location = '../../index.htm'
	}


}
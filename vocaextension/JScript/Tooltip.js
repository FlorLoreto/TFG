<!-- 
/*
 copyright Stephane DEPRES 2011 
*/ 


function iebody()
{
    return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function ShowTip(theContent)
{
    if (ns6||ie)
    {
        var title="<TABLE WIDTH='100%' BORDER='0' CELLPADDING='2' CELLSPACING='0' BGCOLOR='#000099'><TR><TD><DIV class='toolTipTitle'>" + theContent[0] + "<DIV></TD></TR></TABLE>";
        var content="<TABLE WIDTH='100%' BORDER='0' CELLPADDING='2' CELLSPACING='0'><TR><TD><DIV class='toolTipText'>" + theContent[1] + "<DIV></TD></TR></TABLE>";

        tooltipObj.innerHTML= "<DIV id='PBToolTipContent'>" + title + content + "</DIV>";
        enabletip=true;
    
        if ((theContent[0].length < 50) && (theContent[1].length < 50))
            tooltipObj.style.width = 250;


        return false;
    }
}

function moveToolTip(e)
{

    if (enabletip)
    {
        var curPosX=(ns6)?e.pageX : event.clientX + iebody().scrollLeft ;
        var curPosY=(ns6)?e.pageY : event.clientY + iebody().scrollTop ;

        var remainingSpaceToRightEdge=ie&&!window.opera? iebody().clientWidth - event.clientX - toolTipDefaultOffsetX : window.innerWidth - e.clientX - toolTipDefaultOffsetX - 20;
        var remainingSpaceToBottomEdge=ie&&!window.opera? iebody().clientHeight - event.clientY - toolTipDefaultOffsetY : window.innerHeight - e.clientY - toolTipDefaultOffsetY - 20;
        var curPosYRel=ie&&!window.opera? event.clientY :  e.clientY ;


	var scrOfX = 0;
  	if( typeof( window.pageYOffset ) == 'number' )
    		scrOfX = window.pageXOffset;
  	else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) )
    		scrOfX = document.body.scrollLeft;
  	else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) )
    		scrOfX = document.documentElement.scrollLeft;


        if (remainingSpaceToRightEdge < tooltipObj.offsetWidth)
  	     tooltipObj.style.left = ie&&!window.opera? iebody().clientWidth - 20 + scrOfX -tooltipObj.offsetWidth +"px" : window.innerWidth - 20 -tooltipObj.offsetWidth + scrOfX +"px" ;
        else if (curPosX < scrOfX - toolTipDefaultOffsetX)
           tooltipObj.style.left=scrOfX +"px";
        else
             tooltipObj.style.left=curPosX+toolTipDefaultOffsetX+"px";

        if ((remainingSpaceToBottomEdge<tooltipObj.offsetHeight) && (curPosYRel > tooltipObj.offsetHeight))
             tooltipObj.style.top=ie? iebody().scrollTop+event.clientY-toolTipDefaultOffsetY_WTA-tooltipObj.offsetHeight+"px" : window.pageYOffset+e.clientY-toolTipDefaultOffsetY_WTA-tooltipObj.offsetHeight+"px";
        else
            tooltipObj.style.top=curPosY+toolTipDefaultOffsetY+"px";
        tooltipObj.style.visibility="visible";
 
    }
}

function HideTip2(e){


    if (ns6||ie){
	if (!e)
	    e = window.event ;

	var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
	var endSearch = false ;
        var insideTip = false ;
	
	if (reltg)
        {
 
	    do
	    {   if ((reltg.nodeName == 'BODY') || (reltg.nodeName == 'HTML'))
	        {   endSearch = true
		    insideTip = false ;
                }
	    
                //alert ( "reltg.nodeName : " + reltg.nodeName + ", reltg.id: " + reltg.id)
	   
                if ((reltg.nodeName == 'DIV') && ((reltg.id == 'PBToolTipContent')||(reltg.id == 'PBtooltip')))
	        {   endSearch = true
		    insideTip = true;
                }

    	        reltg= reltg.parentNode ;
	    } while (!endSearch) ;
        }

	if (!insideTip)
	{	enabletip=false ;
        	tooltipObj.style.visibility="hidden";
        	tooltipObj.style.backgroundColor='';
		tooltipObj.style.width='';
	}

    }
}

function HideTip(e){
	enabletip=false ;
        tooltipObj.style.visibility="hidden";
        tooltipObj.style.backgroundColor='';
	tooltipObj.style.width='';
}

function CheckTipHasToBeOpen()
{
	t=setTimeout("CheckTipHasToBeOpen()",100);
	HideTip(event);
}

//-->
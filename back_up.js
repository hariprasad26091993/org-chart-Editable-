<apex:page showheader="true" action="{!loaddata}"  controller="Map_Data_Controller" standardStylesheets="true" sidebar="false" docType="html-5.0" >
 <apex:stylesheet value="{!URLFOR($Resource.SLDS080, 'assets/styles/salesforce-lightning-design-system-vf.css')}" />
   <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Launcher Data </title>
        <link href="{!URLFOR($Resource.template,
                  'production/css/bootstrap.min.css')}" rel="stylesheet"/>
        <link href="{!URLFOR($Resource.Master_Gentellia_New,'build/css/custom.min.css')}" rel="stylesheet" />

        <link href="{!URLFOR($Resource.responsive,
                  'css/2cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/4cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/5cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/6cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/7cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/8cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/9cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/10cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/11cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/12cols.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.responsive,
                  'css/col.css')}" rel="stylesheet" /> 
        <link href="{!URLFOR($Resource.responsive,
                  'css/html5reset.css')}" rel="stylesheet" /> 
        <link href="{!URLFOR($Resource.template,
                  'production/fonts/css/font-awesome.min.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.template,
                  'production/css/animate.min.css')}" rel="stylesheet" />
        <link href="{!URLFOR($Resource.template,
                  'production/css/custom.css')}" rel="stylesheet" />
        <link type="text/css" href="{!URLFOR($Resource.template,
                  'production/css/maps/jquery-jvectormap-2.0.1.css')}" rel="stylesheet" />
        <link type="text/css" href="{!URLFOR($Resource.template,
                  'production/css/icheck/flat/green.css')}" rel="stylesheet" />
        <link type="text/css" href="{!URLFOR($Resource.template,
                  'production/css/floatexamples.css')}" rel="stylesheet" />
                   
                     <apex:includescript value="//code.jquery.com/jquery-1.11.1.min.js" / >
                
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>-->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/assets/script/canvasjs.min.js"></script>

        <!--<script src="{!URLFOR($Resource.template,-->
        <!--          'production/js/jquery.min.js')}"></script>-->
                  
                  
        <!--<script src="{!URLFOR($Resource.template,-->
        <!--          'production/js/nprogress.js')}"></script>-->
        <script src="{!URLFOR($Resource.template,
                  'production/js/easypie/jquery.easypiechart.min.js')}"></script>  
                    <apex:includescript value="//cdn.datatables.net/1.10.4/js/jquery.dataTables.min.js" />
                    <apex:includescript value="//cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js"/>
        <apex:stylesheet value="//cdn.datatables.net/1.10.4/css/jquery.dataTables.css" />
<!--        <script>
            NProgress.start();
        </script> -->
        
        <style>
svg[Attributes Style] {
    height: 400!important;
    width: 500!important;
}

        
table {
  border-collapse: collapse!important;
}
tr { 
  border: solid!important;
  border-width: 1px 0!important;
}
</style>


        <style>
td {
  color:#73879C !important;
}
.input-text
{
    margin-bottom: 5px;
    width:10%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
        .section {
    clear: both;
    padding: 0px;
    margin: 0px;
}
[hidden], template {
    display:block !important;
}

/*  COLUMN SETUP  */

/*  GROUPING  */
.group:before,
.group:after {
    content:"";
    display:table;
}
.group:after {
    clear:both;
}
.group {
    zoom:1; /* For IE 6/7 */
}

/*  GRID OF THREE  */
.mobilespan_4_of_4 {
    width: 100%;
}
.mobilespan_3_of_4 {
    width: 75%;
}
.mobilespan_2_of_4 {
    width: 50%;
}
.mobilespan_1_of_4 {
    margin-bottom:0.5%;
}

/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */

@media only screen and (max-width: 480px) {
    .col { margin: 1% 0 1% 0%;}
    .mobilespan_4_of_4, .mobilespan_3_of_4, .mobilespan_2_of_4, .mobilespan_1_of_4 { width: 100%; }
}
            .well.profile_view {
    background: white;
}
 .well.profile_view {
       padding: 0px 0 0;
       border: 3px solid #E6E9ED;
}
.well.profile_view.header{
       color:#fff;
       background-color: #2C78AA !important;
}
.well.profile_view .brief {
    margin: 0;
    font-weight: 300;
    color: white;
}
.well.profile_view .img-circle {
    border: none;
}
.well.profile_view .brief {
    margin: -2em;
    margin-top: -2em;
    margin-right: -2em;
    margin-bottom: -2em;
    margin-left: 0em;
    font-weight: 300;
    margin-left: 0em;
    color: white;
}
.newHeaderInfoClass{
  padding-bottom: 10%;
}
.fa-2x {
    font-size: 1.7em;
}

{
  /*padding: 5px 10px;
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;*/
}
.width-18 {
  width:18% !important;
  @media only screen and (max-width: 480px){
    width: 100% !important;
  }
}
@media only screen and (max-width: 500px) 
{
    .newHeaderInfoClass{
    /*margin-bottom: 10px;*/
    margin-left: 32px;
  }
}


body.nav-md .container.body .right_col {
    
    margin-left: 0em;
}
.dataTables_wrapper .dataTables_paginate .paginate_button {
    padding : 0px;
    margin-left: 0px;
    display: inline;
    border: 0px;
    margin-top:2px !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    border: 0px;
}

.dataTables_length{
    margin-bottom:10px;
}

#contacttable_paginate{
    margin-top: 10px;
}
#collapseThree:hover { 
    background-color: white !important;
}

#contacttable5_paginate{
    margin-top: 10px;
}
        </style>
        <!-- <button onclick="goback();return false;"  class="btn btn-danger" >Back to Search Page</button>  -->
    </head>
  <body class="nav-md" >
      <apex:form >
          <apex:variable var="household" value="{!contextlist[0].Household_Name__c}"/>
          <apex:variable var="lifestage" value="{!contextlist[0].Lifestage__c}"/>
          <apex:variable var="lifestyle" value="{!contextlist[0].Lifestyle__c}"/>
          <apex:variable var="segment" value="{!contextlist[0].Segment_Name__c}"/>
          <apex:variable var="noofacc" value="{!contextlist[0].No_Of_Accounts__c}"/>
          
          
          <apex:actionFunction name="methodtoselectmonth" action="{!selectmonthData}" rerender="datapanel" status="status"/>
          <apex:actionFunction name="redirect" action="{!redirect}"/>
        <div class="container body">
            <div class="main_container">
            

                 
               
                 
                

                <!-- top navigation -->
                
                <div class="right_col" role="main">


                    <div class="well profile_view header" style="    line-height: 0.1;">
                         <div class="section group">
                            <!--<h1 class="brief"><i>Customer Journey Mapper</i></h1>--> 
                            
                        
    <div class="col mobilespan_1_of_12" style="    margin-left: 13px;">
                               <img class="img-circle img-responsive" src="{!$Resource.profpic}" style="width:100px"/>
                            </div>
                            <div class="col mobilespan_10_of_12">
                                <div class="col mobilespan_1_of_4">
                                    <div class="x_content">
                                    <div class="newHeaderInfoClass"><span> <strong>Member Name: </strong>{!contextlist[0].Member_Name__c}</span>
                                    </div>
                                    <div class="newHeaderInfoClass"><span><strong>Gender: </strong>{!contextlist[0].Member_Gender__c}
                                    </span></div>
                                    </div>
                                </div> 
                                <div class="col mobilespan_1_of_4">
                                  <div class="x_content">
                                  <div class="newHeaderInfoClass"><span><strong>Life Stage: </strong>{!contextlist[0].Lifestage__c} <apex:outputText rendered="{!If(lifestage==null,true,false) }">-</apex:outputText></span></div>
                                      <div class="newHeaderInfoClass"><span><strong>Life Style: </strong>{!contextlist[0].LifeStyle__c} <apex:outputText rendered="{!If(lifestyle==null,true,false) }">-</apex:outputText></span></div>
                                  </div>
                                </div>
                                <div class="col mobilespan_1_of_4">
                                      <div class="x_content">
                                      <div class="newHeaderInfoClass"><span><strong>Household Name: </strong>{!contextlist[0].Household_Name__c} <apex:outputText rendered="{!If(household==null,true,false) }">-</apex:outputText><strong></strong></span></div>
                          
                                      <div class="newHeaderInfoClass"><span><strong>Segment Name: </strong>{!contextlist[0].Segment_Name__c} <apex:outputText rendered="{!If(segment==null,true,false) }">-</apex:outputText> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                      <!--<strong style="font-size:125%;"> {!netexperiencescore}%</strong>-->
                                      </span></div>
                              
                                  
                                      <div class="newHeaderInfoClass"><span><strong>Number Of Accounts: </strong>{!contextlist[0].No_Of_Accounts__c} <apex:outputText rendered="{!If(noofacc==0,true,false) }">-</apex:outputText></span></div>
                                      <div class="newHeaderInfoClass"><span><strong>Start Date: </strong><apex:outputText value="{0, date, MMMM',' yyyy}">
                                              <apex:param value="{!contextlist[0].Start_Date__c}" />
                                          </apex:outputText>&nbsp;</span>
                                      </div>
                                      </div>
                                </div>
                <div class="col mobilespan_1_of_4 ">
                <div class="x_content">
                <div style="text-align: center; margin-bottom: 20px">
                  <span class="chart" data-percent="{!netexperiencescore}">
                                    <span class="percent"></span>
                  <canvas height="165" width="165" style="height: 110px; width: 110px;"></canvas></span>
                </div>

                <p><center>Net Experience Score</center></p>
                </div>
                </div>
                           </div> 
                        </div>
                    </div>
                    <div class="row" style="margin-left:2px; margin-bottom:1%;">
                    <span style="font-size: 15px; padding-left:4px;"><strong>Showing Report for the Period: </strong></span>
                     <apex:selectList id="selectlst" onchange="methodtoselectmonthmn()"  value="{!monthnumber}" multiselect="false" size="1" styleclass="input-text" style="width:12%;" >
                                               <apex:selectOptions value="{!monthlist}" ></apex:selectOptions>
                     </apex:selectList>
                     
                      
                     
                     <apex:outputPanel rendered="{!showOffering}">
                        <span style="font-size: 15px;"><strong>&nbsp;for Offering: {!offeringName}</strong></span>
                     </apex:outputPanel>
                     </div>
                     <div class="" role="tabpanel" data-example-id="togglable-tabs">
                      <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Journey Map</a>
                        </li>
                        <li role="presentation" class=""><a href="#tab_content2" role="tab" id="profile-tab" onclick="callforSentiment();return false;" data-toggle="tab" aria-expanded="false">Sentiment Map</a>
                        <apex:actionFunction name="calldata1" action="{!data1}" rerender="sentimentId"/>
                        </li>
                        <li role="presentation" class=""><a href="#tab_content3" role="tab" id="profile-tab2" onclick="sentiment();return false;" data-toggle="tab" aria-expanded="false">Channel Map</a>
                        </li>
                         <li role="presentation" class=""><a  href="#tab_content4" role="tab" id="profile-tab3" onclick="Callsubmit();return false;" data-toggle="tab" aria-expanded="false">Deep Dive</a>
                        <apex:actionFunction name="submit" action="{!submit}" rerender="CallChart"/>
                        </li>
                        <li role="presentation" class=""><a href="#tab_content5" role="tab" id="profile-tab4" data-toggle="tab" aria-expanded="false">Key Questions</a>
                        
                        </li>
                      </ul>
                      
                      
                      <div id="myTabContent" class="tab-content">
                          
                        <div role="tabpanel" class="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
                          <div class="x_content" style="background-color:white; color:black;border-bottom: 1px solid #86D0F0;">
                                                        
                                             <div id="collapseplus" style="display:none;"><a style="color:white;" onclick="showmenu();return false;" href="#demo" data-toggle="collapse"><img src="{!$Resource.collapseplus}" width="18px;" style="    padding-top: 15px;"/>
                                             <h1 style="color:black;font-size:large;    margin-top: -18px;
    margin-bottom: 10px;
    margin-left: 5px;">&nbsp;&nbsp;&nbsp;Data</h1></a>  </div>
                                                           <div id="collapseminus"><a style="color:white;" onclick="hidemenu();return false;" href="#demo" data-toggle="collapse"><img src="{!$Resource.collapseminus}" width="18px;" style="    padding-top: 15px;"/><h1 style="color:black;font-size:large;    margin-top: -18px;
    margin-bottom: 10px;
    margin-left: 5px;">&nbsp;&nbsp;&nbsp;Data</h1></a>  </div>
                         
                                                        
                                                          
                                                       </div>
                            <apex:outputPanel id="datapanel">
                                
                              <div class="x_panel" style="padding-left:10px;padding-right:10px;border:none;margin-bottom:0px;">
                                 <div id="demo" class="collapse in"> 
                                <div class="x_content"  style="margin-top: -18px;">
                                      <div class="row">
                                              
                                                <apex:repeat value="{!lstWeekValue}" var="week">
                                                  
                                                    <div  class="col mobilespan_2_of_12 " style="text-align:center; ">
                                                        <div class="x_content" style="background-color: #62B7ED;padding-top:6px;color:white;">
                                                             <div style="">
                                                                Week {!week}
                                                            </div>  
                                                            <div class="clearfix"></div>   
                                                        </div> 
                                                       <br/>
                                                    <apex:variable value="{!mapWeekData[week]}" var="mapDataVar" />  
                                                    <apex:outputPanel id="NullPanel1" rendered="{!mapDataVar.size=0}">
                                                      <div   style="width: 100%">
                                                          <div style="margin-top: 12px; margin-bottom:0px !important; min-height:91px !important; vertical-align:middle; background-color:white;box-shadow: 5px 2.5px 20px 4px #b1b0b0;
                                                        border-radius: 0px;border: none;" class="well profile_view">
                                                          <div style="text-align: center; vertical-align: middle; line-height: 89px;">
                                                                    No Data Found For This Week
                                                          </div>
                                                          </div>
                                                      </div>
                                                    </apex:outputPanel> 
                                                    <apex:repeat value="{!mapWeekData[week]}" var="mapdata">
                                                      
                                                       
                                                        
                                                        
                                                    <div   style="width: 100%">
                                                       
                                                        <div style="margin-top: 12px; margin-bottom:0px !important; min-height:91px !important; background-color:white;  border-left-color:{!IF(mapdata.Sentiment_Type__c == 'Positive', '#bbff99',IF( mapdata.Sentiment_Type__c == 'Negative', 'red', IF( mapdata.Sentiment_Type__c == 'Neutral','#ffff66','#ccd9ff')))}; border-left-width:thick;box-shadow: 5px 2.5px 20px 4px #b1b0b0;
                                                        border-radius: 0px;border-right: none;border-top: none;border-bottom: none;padding-bottom: 10px;" class="well profile_view">
                                                             <div class="row" style=" padding-left: 1rem;
                                                                padding-right: 1rem;   text-align: center;padding-top: 12px;">
                                                                    {!mapdata.Activity_Name__c}
                                                             </div>
                                                             <div class="row"  style="padding-left: 1rem;
                                                                padding-right: 1rem;    text-align: center">
                                                                
                                                                   <apex:outputText value="{0, date, dd-MM-yyyy}">
                                                                       <apex:param value="{!mapdata.Transaction_Date__c}"/>
                                                                    </apex:outputText>    
                                                               
                                                                  
                                                             </div>
                                                             <div class="row">
                                                                 <div class=    "col span_3_of_9">

                                                                    <!--{!mapdata.Channel__c} -->
                                                                    <!--<img src="{!IF(mapdata.Channel__c == 'ATM',$Resource.ATM,IF( mapdata.Channel__c == 'Branch', $Resource.Branch, IF( mapdata.Channel__c == 'kiosk',$Resource.kiosk,IF(mapdata.Channel__c == 'Online',$Resource.Online, IF( mapdata.Channel__c == 'Phone',$Resource.Phone,IF(mapdata.Channel__c == 'callcenter',$Resource.callcenter, ''))))))}" style="width:30px;margin-top:9px" />-->
                                                                    <span class="fa-stack fa-lg">
                                                                     <i class="fa fa-circle fa-stack-2x"></i>
                                                                     <i class="fa fa-inverse fa-stack-1x {!IF(mapdata.Channel__c == 'ATM','fa-credit-card',IF( mapdata.Channel__c == 'Branch','fa-university', IF( mapdata.Channel__c == 'Kiosk','fa-server',IF(mapdata.Channel__c == 'Online','fa-laptop', IF( mapdata.Channel__c == 'Phone','fa-volume-control-phone',IF(mapdata.Channel__c == 'Call Center','fa-headphones', 'fa-question-circle'))))))}" aria-hidden="true" />
                                                                    </span>
                                                                 </div>
                                                                 <div class="col span_3_of_9">
                                                                     <!--<img src="{!IF(mapdata.Sentiment_Type__c == 'Positive',$Resource.positivesentiment ,IF( mapdata.Sentiment_Type__c == 'Negative', $Resource.negativesentiment, IF( mapdata.Sentiment_Type__c == 'Neutral',$Resource.nuetralsentiment,'')))}" style="width:30px;margin-top:9px" />-->
                                                                     <span class="fa-stack fa-lg">
                                                                     <i class="fa fa-circle fa-stack-2x"></i>
                                                                    <i class="fa fa-inverse fa-stack-1x {!IF(mapdata.Sentiment_Type__c == 'Positive','fa-thumbs-o-up' ,IF( mapdata.Sentiment_Type__c == 'Negative', 'fa-thumbs-o-down', IF( mapdata.Sentiment_Type__c == 'Neutral','fa-hand-rock-o','fa-question-circle')))}" aria-hidden="true"></i>
                                                                    </span>
                                                                 </div>
                                                                 <div class="col span_3_of_9">
                                                                     <!-- Need clarity on if conditions-->
                                                                     <span class="fa-stack fa-lg">
                                                                     <i class="fa fa-circle fa-stack-2x"></i>
                                                                     <i class="fa fa-inverse fa-stack-1x {!IF(mapdata.Moment_of_Pain_del__c == true,'fa-blind','fa-heart')}" aria-hidden="true" />
                                                                     </span>
                                                                     <!--<img class="img-circle img-responsive" src="{!IF(mapdata.Moment_of_Pain_del__c == true,$Resource.yespain ,$Resource.nopain)}" style="display: inline-block; border-radius: 100p; box-shadow: 0px 0px 2px #888; width:30px;margin-top:9px"/>-->
                                                                 </div>
                                                             </div>
                                                                </div>
                                                            </div>
                                                          </apex:repeat>
                                                          </div>
                                                       </apex:repeat>
                                                           
                                            </div>     
                                      </div>  
                                    </div>
                                    </div>
                                    <div class="x_content" style="background-color:white; color:black;border-bottom: 1px solid #86D0F0;margin-top:0px;">
                                        
                                          <div id="collapseplus2" style="display:none;"><a style="color:black;text-decoration: none;" onclick="showmenu2();return false;" href="#demo2" data-toggle="collapse"><img src="{!$Resource.collapseplus}" width="18px;" style="    padding-top: 15px;"/> <h1 style="color:black;font-size:large;    margin-top: -18px;margin-bottom: 10px;
    margin-left: 5px;">&nbsp;&nbsp;&nbsp;Summary</h1></a>  </div>
                                                           <div id="collapseminus2"><a style="color:black;text-decoration: none;" onclick="hidemenu2();return false;" href="#demo2" data-toggle="collapse"><img src="{!$Resource.collapseminus}" width="18px;" style="    padding-top: 15px;"/><h1 style="color:black;font-size:large;    margin-top: -18px;
    margin-bottom: 10px;
    margin-left: 5px;">&nbsp;&nbsp;&nbsp;Summary</h1></a>  </div>
                                                       </div>
                                  <div class="x_panel" style="padding-left:10px; padding-right:10px;border:none;">
                                 <div id="demo2" class="collapse in"> 
                                <div class="x_content"  style="margin-top: -18px;">                      
                                                       
                                                       
                                   <div class="row">
                                     <apex:repeat value="{!lstWeekValue}" var="week">
                                        <apex:variable value="{!mapWeekSummary[week]}" var="summaryMapDataVar" />   
                                        
                                        
                                  
                                                   <div  class="col mobilespan_2_of_12" style=" text-align:center;"> 
                                                   <div class="x_content" style="padding-bottom:6px;background-color: #62B7ED;padding-top:6px;color:white;">
                                                           <div style="">
                                                           Week {!week}
                                                        </div>
                                                       </div>
                                                       <br/>
                                           
                                             <apex:outputPanel id="NullPanel2" rendered="{!summaryMapDataVar.size=0}">
                                                      <div   style="width: 100%">
                                                          <div style="margin-top: 12px; margin-bottom:0px !important; min-height:152px !important; vertical-align: middle; background-color:white;box-shadow: 5px 2.5px 20px 4px #b1b0b0;
                                                        border-radius: 0px;border: none;"  class="well profile_view">
                                                          <div style="text-align: center; vertical-align: middle; line-height: 155px;">
                                                                    No Data Found For This Week
                                                          </div>
                                                          </div>
                                                      </div>
                                                    </apex:outputPanel> 
                               
                               
                               
                               
                                                  
                                     <apex:repeat value="{!mapWeekSummary[week]}" var="mapdata">
                                   <div class="row">       
                                <div class="x_panel" style="border-width: 0px;">
                                 <div id="demo2" class="collapse in">   
                                <div class="x_content"  style="margin-top: -10px;">
                                    
                                    <div class="row">
                                        
                                  
                                                   <div   style="width: 100%; text-align:center;"> 
                                                   
                                                    
                                                    
                                                   
                                                   
                                                  
                                                      
                                                       
                                                        <div style="margin-top:12px; background-color:white;box-shadow: 5px 2.5px 20px 4px #b1b0b0;
                                                        border-radius: 0px;border: none;" class="well profile_view">
                                                        <div class="row" style="text-align: left; margin: 12px 10px 0px 10px;border-bottom: 1px solid #3697C0;">
                                                                 <b style="font-size:18px;color:#3697C0;">Sentiments</b>   
                                                             </div>
                                                             <div class="row" style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Positive Sentiments: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_Positive_Sentiment__c}</b>
                                                             </div>
                                                             <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Neutral Sentiments: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_Neutral_Sentiment__c}</b>
                                                             </div>
                                                             <div class="row" style="text-align: left; padding: 12px 0px 14px 20px;" >
                                                                  Negative Sentiments: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_Negative_Sentiment__c}</b>
                                                             </div>
                                                                </div>
                                                            </div>
                                                         
                                                         
                                                     
                                                      </div> 
                                                </div>
                                                
                                                 <div class="x_content" >
                                                 <div class="row">
                                                    <!--<apex:repeat value="{!lstWeekValue}" var="week">-->
                                                 
                                                  <div  class=" " style=""> 
                                                    
                                                    <!--<apex:repeat value="{!mapWeekSummary[week]}" var="mapdata">-->
                                                    <div  style="width: 100%">
                                                       
                                                        <div style="margin-top: -8px !important; margin-bottom:0px !important;background-color:white;box-shadow: 5px 2.5px 20px 4px #b1b0b0;
                                                        border-radius: 0px;border: none;" class="well profile_view">
                                                        <div class="row" style=" text-align: left;margin: 12px 10px 0px 10px;border-bottom: 1px solid #3697C0;">
                                                                 <b style="font-size:18px;color:#3697C0;">Moments</b>   
                                                             </div>
                                                             <div class="row" style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                
                                                                   Moments of Truth: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_Moment_of_Truth__c}</b>
                                                                   
                                                              
                                                             </div>
                                                             <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                               
                                                                   Moments of Pain: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_Moment_of_Pain__c}</b>
                                                               
                                                                 
                                                             </div>
                                                             <div class="row" style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                
                                                                   Moment of Efficiency: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_Moment_of_Efficiency__c}</b>
                                                             </div>
                                                             <div class="row" style="text-align: left; padding: 12px 0px 14px 20px;">
                                                                    Moment of Differentiation: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_Moment_of_Differentiation__c}</b>
                                                             </div>
                                                                </div>
                                                            </div>
                                                          <!--</apex:repeat>-->
                                                          </div>
                                                       <!--</apex:repeat>-->
                                                       </div>
                                                </div>
                                                    <div class="x_content" >
                                                    <div class="row">
                                    <!--<apex:repeat value="{!lstWeekValue}" var="week">-->
                                                  <div  class=" " style=""> 
                                                    
                                                    <!--<apex:repeat value="{!mapWeekSummary[week]}" var="mapdata">-->
                                                  <div  style="width: 100%">
                                                       
                                                        <div style="margin-top: 12px; margin-bottom:0px; background-color:white;box-shadow: 5px 2.5px 20px 4px #b1b0b0;
                                                        border-radius: 0px;border: none;" class="well profile_view">
                                                        <div class="row" style="text-align: left; margin: 12px 10px 0px 10px;border-bottom: 1px solid #3697C0;">
                                                                 <b style="font-size:18px;color:#3697C0;">Process</b>   
                                                             </div>
                                                             <div class="row" style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Steps: <b style="font-size:15px;color:#3697C0;">NA</b>
                                                             </div>
                                                             <div class="row" style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Customer Steps: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_customer_steps__c}</b>
                                                             </div>
                                                             <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Internal Steps: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_internal_steps__c}</b>
                                                             </div>
                                                              <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">  
                                                                  Digital Steps: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_digital_steps__c}</b>
                                                             </div>
                                                              <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Phyical Steps: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_physical_steps__c}</b>   
                                                             </div>
                                                             <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   D-P Handoffs: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_digital_to_physical_transition__c}</b>   
                                                             </div>
                                                             <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Customer Handoffs: <b style="font-size:15px;color:#3697C0;">{!mapdata.Number_of_customer_hand_offs__c}</b>   
                                                             </div>
                                                             <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                  Internal Handoffs: <b style="font-size:15px;color:#3697C0;">-</b>   
                                                             </div>
                                                               <div class="row"  style="text-align: left; padding: 12px 0px 0px 20px;">
                                                                   Max Latency: <b style="font-size:15px;color:#3697C0;">{!mapdata.Maximum_Latency__c}</b>
                                                             </div>
                                                            <div class="row"  style="text-align: left; padding: 12px 0px 14px 20px;">
                                                                    Average Cycle Time: <b style="font-size:15px;color:#3697C0;">{!mapdata.Cycle_time__c}</b>
                                                             </div>  
                                                                </div> 
                                                            </div>
                                                          <!--</apex:repeat>-->
                                                          </div>
                                                       <!--</apex:repeat>-->
                                                       </div>
                                                </div>
                                                </div>
                                                </div></div>
                                                 </apex:repeat>
                                                 </div>
                                                
                                                  </apex:repeat>
                                                  </div>
                                                    </div>
                                                      </div>
                                                        </div>
                                    </apex:outputPanel>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                            <div class="x_content" style="background-color:white; color:black;border-bottom: 1px solid #86D0F0;">
                                <br></br>
                                <table>
                                    <tr>
                                        <td>Offering:</td>
                                        <td width="25%">
                                           <apex:selectList styleclass="input-text" style="width:79% !important; height:34px !important;" id="selectlst1" html-placeholder="Offering" value="{!selectedoffering}" multiselect="false" size="1">
                                               <apex:selectOptions value="{!offeringlist}" ></apex:selectOptions>
                                           </apex:selectList> 
                                        </td>
                                        <td>Process:</td>
                                        <td>
                                           <apex:selectList styleclass="input-text" style="width:79% !important; height:34px !important;" id="selectlst2" html-placeholder="Offering" value="{!selectedprocess}" multiselect="false" size="1">
                                               <apex:selectOptions value="{!processlist}" ></apex:selectOptions>
                                           </apex:selectList>  
                                        </td>
                                        <td>Account:</td>
                                        <td width="25%">
                                             <apex:selectList styleclass="input-text" style="width:79% !important; height:34px !important;" id="selectlst3" html-placeholder="Offering" value="{!selectedaccount}" multiselect="false" size="1">
                                               <apex:selectOptions value="{!accountlist}" ></apex:selectOptions>
                                           </apex:selectList>
                                        </td>
                                        <td width="25%">
                                             <div class="slds">
                                                 <apex:commandButton action="{!selectfilterdata}" styleclass="slds-button">Filter</apex:commandButton>
                                             </div>
                                        </td>
                                     </tr>
                                </table> 
                                
                            </div> 
                            
                            
                            <div id="SenId">
<!--                                <apex:commandButton rerender="SenId" value="Click"/>-->
                                
<!--                                <script type="text/javascript">-->
<!--                                 window.onload = function () {-->
<!--    var chart = new CanvasJS.Chart("chartContainer",-->
<!--    {-->
<!--      title:{-->
<!--       text: "Adding Prefix to Axis Y labels"        -->
<!--      },-->

<!--      axisY:{        -->
<!--        prefix: "$"-->
<!--      },-->

<!--      data: [-->
<!--      {           -->
<!--        type: "column",-->
<!--        dataPoints: [        -->
<!--        { x: 10, y: 71 },-->
<!--        { x: 20, y: 55},-->
<!--        { x: 30, y: 50 },-->
<!--        { x: 40, y: 65 },-->
<!--        { x: 50, y: 95 },-->
<!--        { x: 60, y: 68 },-->
<!--        { x: 70, y: 28 },-->
<!--        { x: 80, y: 34 },-->
<!--        { x: 90, y: 14}-->
<!--        ]-->
<!--      }-->
<!--      ]-->
<!--    });-->

<!--    chart.render();-->
<!--  }-->
<!--  </script>-->
  
<!--</head>-->
<!--<body>-->
<!--  <div id="chartContainer" style="height: 300px; width: 100%;">-->
<!--  </div>-->
<!--</body>-->
                                
                                
                                <!--<apex:commandButton action="{!data1}" rerender="sentimentId" value="Click"/>-->
                             <apex:chart id="sentimentId" height="400" width="700" data="{!listOfTestdata}">
          <apex:axis type="Numeric" minimum="10" maximum="20" position="left" fields="intvalue" 
            title="Sentiment Value" grid="true"/>
          <apex:axis type="Numeric" position="bottom" fields="Transaction_Date" 
            title="Week Of The Month">
          </apex:axis>
         <apex:lineSeries axis="left"  xField="intvalue" yField="Transaction_Date"
          markerType="circle" markerSize="4" />
         </apex:chart>
                 </div>
                 
            <apex:outputPanel >
                    <apex:repeat value="{!lstWeekValue}" var="a">
                         Week {!a}
                    </apex:repeat>
            </apex:outputPanel>         
                            
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                           <div class="x_content" style="background-color:white; color:black;border-bottom: 1px solid #86D0F0;">
                                <br></br>
                                <table>
                                    <tr>
                                        <td>Offering:</td>
                                        <td width="25%">
                                           <apex:selectList styleclass="input-text" style="width:79% !important; height:34px !important;" id="selectlst4" html-placeholder="Offering" value="{!selectedoffering}" multiselect="false" size="1">
                                               <apex:selectOptions value="{!offeringlist}" ></apex:selectOptions>
                                           </apex:selectList> 
                                        </td>
                                        <td>Process:</td>
                                        <td>
                                           <apex:selectList styleclass="input-text" style="width:79% !important; height:34px !important;" id="selectlst5" html-placeholder="Offering" value="{!selectedprocess}" multiselect="false" size="1">
                                               <apex:selectOptions value="{!processlist}" ></apex:selectOptions>
                                           </apex:selectList>  
                                        </td>
                                        <td>Account:</td>
                                        <td width="25%">
                                             <apex:selectList styleclass="input-text" style="width:79% !important; height:34px !important;" id="selectlst6" html-placeholder="Offering" value="{!selectedaccount}" multiselect="false" size="1">
                                               <apex:selectOptions value="{!accountlist}" ></apex:selectOptions>
                                           </apex:selectList>
                                        </td>
                                     </tr>
                                </table>               
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="tab_content4" aria-labelledby="profile-tab" >
                            <apex:actionFunction name="callReport" action="{!callReport}" rerender="CallReport1" oncomplete="CallDatareport();return false;"/>


<apex:outputPanel id="Callreport6">
    <apex:chart id="CallChart" height="300" width="650" data="{!data}" colorSet="#2A98DC"  resizable="true" >
        
        <apex:axis type="Numeric" position="left" fields="count" title="Recordcount" minimum="0" maximum="{!store}" steps="{!store-1}" grid="false" />
        <apex:axis type="Category" position="bottom" fields="SentimentName" title="SentimentName"  />
        <apex:barSeries orientation="vertical" axis="left" xField="SentimentName" yField="count">
            
        </apex:barSeries>
        
    </apex:chart>
    </apex:outputPanel>
<div class="well profile_view"  style="    width: 23%;float: right;margin-top: -307px;margin-right: 4%; margin-bottom:0px !important; min-height:91px !important; background-color:white;  border-left-color:#ccd9ff; border-left-width:thick;box-shadow: 5px 2.5px 20px 4px #b1b0b0;border-radius: 30px;border-right: none;border-top: none;border-bottom: none;padding: 20px;">
<apex:outputPanel >
    <b style="padding-left: 104px !important;font-family: -webkit-pictograph;font-size: x-large;margin-left: -16px;">Filters</b>
    
    
    <br/>
    <div style="margin-top: 12px;">
    <b style="font-weight: 500 !important;font-size: small !important;"> Process : </b>
                <apex:selectList value="{!callReportProRecord}" size="1" style="font-size: 13px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!callReportProcess}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                
                &nbsp; &nbsp;
                <br/>
                
                <b style="font-weight: 500 !important;font-size: small !important;"> Offering : </b>
                <apex:selectList value="{!callReportOffRecord}" size="1" style="font-size: 13px;border-radius: 2px;height: 26px;width: 188px;">
                   
                    <apex:selectOptions value="{!callReportOffering}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                </div>
                &nbsp; &nbsp;
                <br/>
            <!--<apex:actionFunction name="displayrec" action="{!displayAspects}"> </apex:actionFunction>-->
            <!--    <button  class="slds-button slds-button--neutral"  onclick="dis();return false;" value="Go"  oncomplete="callArticle();" rerender="matFra,matFra1,matFra2,matFra3,demo,matFra4"></Button>-->
             
                <center><apex:commandButton styleclass="slds-button slds-button--brand " oncomplete="CallReportChart();CallDatareport();return false;" value="Go" action="{!submit}" rerender="Callreport6" style="color: black !important;margin-left: 12px;"></apex:commandButton>
              </center>
    </apex:outputPanel>
     </div>
     <apex:outputPanel layout="block" style="overflow:auto;width:1225px;margin-top: 3%;" id="CallReport1" >
                  
  <table id="contacttable1" class="display">
            
            <thead>
    <tr >
              <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">SENTIMENT TYPE</th>
              <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">SENTIMENT TYPE</th>

      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">TRANSACTION ID</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">TRANSACTION CODE</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">TRANSACTION TYPE</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">TRANSACTION DATE</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">TRANSACTION AMOUNT</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">INTENT</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">OFFERING NAME</th>
      
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">MARKET SEGMENT</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">CHANNEL</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">PROCESS</th>

      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">AFFILIATED PARTNER</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">MOMENT OF DIFFERENTIATION</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">MOMENT OF EFFICIENCY</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">MOMENT OF PAIN</th>
      <th style="border: 1px solid rgba(0, 0, 0, 0.09);;border-collapse: collapse;">MOMENT OF TRUTH</th>
      
      
      
    </tr>
  </thead>
  <tbody> 
        <apex:repeat value="{!reportMethod}" var="DeepDive">
        <tr>
            <td>{!DeepDive.Sentiment_Type__c}</td>
            <td></td>
            <td>{!DeepDive.Transaction__r.Name}</td>
            <td>{!DeepDive.Transaction__r.Transaction_Code__c}</td>
            <td>{!DeepDive.Transaction__r.Transaction_Type__c}</td>
            <td>{!DeepDive.Transaction__r.Transaction_Date__c}</td>
            <td>{!DeepDive.Transaction__r.Transaction_Amount__c}</td>
            <td>{!DeepDive.Transaction__r.Intent__c}</td>
            <td>{!DeepDive.Transaction__r.Offering_Name__c}</td>
            <td>{!DeepDive.Transaction__r.Segment__c}</td>
            <td>{!DeepDive.Channel__c}</td>
            <td>{!DeepDive.Process_Name__c}</td>
            <td>{!DeepDive.Transaction__r.Affiliated_Partner__c}</td>
            <td>{!DeepDive.Transaction__r.Moment_of_Differentiation__c}</td>
            <td>{!DeepDive.Transaction__r.Moment_of_Efficiency__c}</td>
            <td>{!DeepDive.Transaction__r.Moment_of_Pain__c}</td>
            <td>{!DeepDive.Transaction__r.Moment_of_Truth__c}</td>
       </tr>
       </apex:repeat>

      
      </tbody>
                      </table>
                      </apex:outputPanel>
                            
                        </div> 
                        <div role="tabpanel" class="tab-pane fade" id="tab_content5" aria-labelledby="profile-tab">
                            <div class="x_content">

                    <!-- start accordion -->
                    
                    
                    <div class="accordion" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel">
                               
                        
                          
                          
                        <a class="panel-heading" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <h4 class="panel-title" onclick="">#1 What did the customer do right before a 'Buy' activity? </h4>
                        </a>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                          <div class="panel-body">
               <table id="contacttable" class="display" >
            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th  style="border: 1px solid black;border-collapse: collapse;">Buy Transaction</th>
    <th  style="border: 1px solid black;border-collapse: collapse;">1st Previous Transaction</th> 
    <th  style="border: 1px solid black;border-collapse: collapse;">2nd Previous Transaction</th>
    <th  style="border: 1px solid black;border-collapse: collapse;">3rd Previous Transaction</th>
   </tr>

            </thead>
            <tbody>
                
          <apex:repeat value="{!mapChild}" var="mapNew">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">
        {!mapNew.Transaction__r.Act_Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!mapNew.Transaction__r.Transaction_Date__c}" /></apex:outputText> 
        
        <br/>{!mapNew.Transaction__r.Offering_Name__c}<br/>{!mapNew.Transaction__r.Channel__c}&nbsp;Transaction<br/>{!mapNew.Transaction__r.Sentiment_Type__c}&nbsp;Sentiment</td>
          
          <apex:repeat value="{!mapChild[mapNew]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc.Transaction__r.Act_Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!abc.Transaction__r.Transaction_Date__c}" /></apex:outputText> 
              
              
              <br/>{!abc.Transaction__r.Offering_Name__c}<br/>{!abc.Transaction__r.Channel__c}&nbsp;Transaction<br/>{!abc.Transaction__r.Sentiment_Type__c}&nbsp;Sentiment</td>
              
          </apex:repeat>
              
              
          <!--<td>{!mapChild[mapNew]}</td>  -->
          </tr>
            </apex:repeat>
              
                
            </tbody>

        </table>             
                 
                          </div>
                        </div>
                      </div>
                      <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <h4 class="panel-title" onclick="CallApexMethod();return false;">#2 What did the customer do right after a 'Buy' activity?</h4>
                                 <apex:actionFunction name="KeyQuestion2" action="{!KeyQuestion2}" rerender="Table2"/>

                        </a>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">

                          <div class="panel-body">
                                                          <!--<apex:outputPanel id="Table2">-->

<table id="contacttable" class="display" >

            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Buy Transaction</th>
    <th style="border: 1px solid black;border-collapse: collapse;">1st After Transaction</th> 
    <th style="border: 1px solid black;border-collapse: collapse;">2nd After Transaction</th>
    <th style="border: 1px solid black;border-collapse: collapse;">3rd After Transaction</th>
   </tr>
   
            </thead>
            <tbody>
         <apex:repeat value="{!mapChild1}" var="mapNew">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">
        {!mapNew.Transaction__r.Act_Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!mapNew.Transaction__r.Transaction_Date__c}" /></apex:outputText> 
        
        <br/>{!mapNew.Transaction__r.Offering_Name__c}<br/>{!mapNew.Transaction__r.Channel__c}&nbsp;Transaction<br/>{!mapNew.Transaction__r.Sentiment_Type__c}&nbsp;Sentiment</td>
          
          <apex:repeat value="{!mapChild1[mapNew]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc.Transaction__r.Act_Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!abc.Transaction__r.Transaction_Date__c}" /></apex:outputText> 
              
              
              <br/>{!abc.Transaction__r.Offering_Name__c}<br/>{!abc.Transaction__r.Channel__c}&nbsp;Transaction<br/>{!abc.Transaction__r.Sentiment_Type__c}&nbsp;Sentiment</td>
              
          </apex:repeat>
              
              
          <!--<td>{!mapChild[mapNew]}</td>  -->
          </tr>
            </apex:repeat>
      
        
        
        
            </tbody>
      
  </table>
      <!--</apex:outputPanel>-->

                          </div>

                        </div>
                      </div>
                      
                    
                      <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingfour" data-toggle="collapse" data-parent="#accordion" href="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                          <h4 class="panel-title">#3 How many informational steps before buy ?</h4>
                        </a>
                        <div id="collapsefour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>
  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Buy Transaction</th>
        <th style="border: 1px solid black;border-collapse: collapse;">Learning Steps before Buy</th>
      <th style="border: 1px solid black;border-collapse: collapse;">Info Exchange before buy</th> 
   </tr>
            </thead>
               <tbody>

       <apex:repeat value="{!mapChild4}" var="abc3">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">
        {!abc3.Transaction__r.Act_Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!abc3.Transaction__r.Transaction_Date__c}" /></apex:outputText> 
        
        <br/>{!abc3.Transaction__r.Offering_Name__c}<br/>{!abc3.Transaction__r.Channel__c}&nbsp;Transaction<br/>{!abc3.Transaction__r.Sentiment_Type__c}&nbsp;Sentiment</td>
           <td style="border: 1px solid black;border-collapse: collapse;">{!mapChild4[abc3]}</td>
           <td style="border: 1px solid black;border-collapse: collapse;">{!mapChildpart4[abc3]}</td>
       </tr>
       </apex:repeat>
       </tbody>
       </table> 
        
                            
                      </div>
                      </div>
                      </div>
                    
                      
                      
                      
                      <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <h4 class="panel-title">#4 What enterprise departments were touched? How many times?</h4>
                        </a>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Departments</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># Of Times Touched</th>
   </tr>
   </thead>
       <tbody>
   
        <apex:repeat value="{!KeyQ1}" var="KeyQVar">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar}</td>
          
          <apex:repeat value="{!KeyQ1[KeyQVar]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
          </tbody>

   </table>
        
                            
                          </div>
                        </div>
                      </div>
                      
                            <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingFive" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <h4 class="panel-title">#5 What was the most frequent activity - for a process/offering?</h4>
                        </a>
                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                          <div class="panel-body">
                                <br/><b style="font-weight: 500 !important;font-size: small !important;"> Process : </b>
                <apex:selectList value="{!selectedrecordProcess5}" size="1" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!optionsProcess5}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                
                &nbsp; &nbsp;
                
                <b style="font-weight: 500 !important;font-size: small !important;"> Offering : </b>
                <apex:selectList value="{!selectedrecordOffering5}" size="1" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!optionsOffering5}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                
                &nbsp; &nbsp;
            <!--<apex:actionFunction name="displayrec" action="{!displayAspects}"> </apex:actionFunction>-->
            <!--    <button  class="slds-button slds-button--neutral"  onclick="dis();return false;" value="Go"  oncomplete="callArticle();" rerender="matFra,matFra1,matFra2,matFra3,demo,matFra4"></Button>-->
             
                <apex:commandButton styleclass="slds-button slds-button--brand " value="Go" action="{!keyQuestion5}" rerender="CallTable5" oncomplete="CallDatatable();return false;" style="color: black !important;"></apex:commandButton>
              


               <apex:outputPanel id="CallTable5">               
<table id="contacttable5" class="display" >

            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Activity</th>
    <th style="border: 1px solid black;border-collapse: collapse;">Frequency of Occurrence</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ5}" var="KeyQVar5">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar5}</td>
          
          <apex:repeat value="{!KeyQ5[KeyQVar5]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        </apex:outputPanel>
                            
                          </div>
                        </div>
                      </div>
                      
                      
                      
                      
  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingSix" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          <h4 class="panel-title">#6 What were the most important 'moments of truth' for a given process/offering?</h4>
                        </a>
                        <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                          <div class="panel-body">
                            
  <br/><b style="font-weight: 500 !important;font-size: small !important;"> Process : </b>
                <apex:selectList value="{!selectedrecord}" size="1" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   <!--<apex:actionSupport event="onchange" action="{!SshowQuestion6}" rerender="CallMethod6"/>-->
                    <apex:selectOptions value="{!options}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                &nbsp; &nbsp;
                
                <b style="font-weight: 500 !important;font-size: small !important;"> Offering : </b>
                <apex:selectList value="{!selectedrecord6}" size="1" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!optionspart6}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                
                &nbsp; &nbsp;
                <apex:commandButton styleclass="slds-button slds-button--brand " value="Go" action="{!SshowQuestion6}" rerender="CallMethod6" style="color: black !important;"></apex:commandButton>
              


<apex:outputPanel id="CallMethod6">
                              
  <table id="contacttable" class="display" >
            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Buy Transaction</th>
    <th style="border: 1px solid black;border-collapse: collapse;">Moment of Truth transaction</th>
   </tr>
   </thead>
       <tbody>
        <apex:repeat value="{!mapChild6}" var="mapChildvar6">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">
        
          {!mapChildvar6.Activity__r.Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!mapChildvar6.Transaction_Date__c}" /></apex:outputText> 
        
        <br/>{!mapChildvar6.Offering_Name__c}<br/>{!mapChildvar6.Channel__c}&nbsp;Transaction<br/>{!mapChildvar6.Sentiment_Type__c}&nbsp;Sentiment
       
        
    </td>
          
          <apex:repeat value="{!mapChild6[mapChildvar6]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">
                          
{!abc.Activity__r.Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!abc.Transaction_Date__c}" /></apex:outputText> 
              
              
              <br/>{!abc.Offering_Name__c}<br/>{!abc.Channel__c}&nbsp;Transaction<br/>{!abc.Sentiment_Type__c}&nbsp;Sentiment</td>
              
      
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        </apex:outputPanel>
                            
                          </div>
                        </div>
                      </div>
                      
                      
                      
  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingSeven" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          <h4 class="panel-title">#7 What were the most important 'moments of Differentiation' for a given process/offering?</h4>
                        </a>
                        <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                          <div class="panel-body">
<br/><b style="font-weight: 500 !important;font-size: small !important;"> Process : </b>
                <apex:selectList value="{!selectedrecord}" size="1" onchange="generateFrameworks()" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!options}"> 
                    </apex:selectOptions>
           
                </apex:selectList>

                &nbsp; &nbsp;
                
                <b style="font-weight: 500 !important;font-size: small !important;"> Offering : </b>

                <apex:selectList value="{!selectedrecord6}" size="1" onchange="generateFrameworks()" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!optionspart6}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                
                
                &nbsp; &nbsp;
            <!--<apex:actionFunction name="displayrec" action="{!displayAspects}"> </apex:actionFunction>-->
            <!--    <button  class="slds-button slds-button--neutral"  onclick="dis();return false;" value="Go"  oncomplete="callArticle();" rerender="matFra,matFra1,matFra2,matFra3,demo,matFra4"></Button>-->
             
                <apex:commandButton styleclass="slds-button slds-button--brand " value="Go" action="{!modeTruth}" rerender="matFra,matFra1,matFra2,matFra3,demo,matFra4" style="color: black !important;"></apex:commandButton>
              



                              
                   
  <table id="contacttable" class="display" >
            <thead>
             <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Buy Transaction</th>
    <th style="border: 1px solid black;border-collapse: collapse;">Moment of Differentiation transaction</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!mapChild7}" var="mapChildvar7">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">
        
          {!mapChildvar7.Activity__r.Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!mapChildvar7.Transaction_Date__c}" /></apex:outputText> 
        
        <br/>{!mapChildvar7.Offering_Name__c}<br/>{!mapChildvar7.Channel__c}&nbsp;Transaction<br/>{!mapChildvar7.Sentiment_Type__c}&nbsp;Sentiment
       
        
    </td>
          
          <apex:repeat value="{!mapChild7[mapChildvar7]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">
                          
{!abc.Activity__r.Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!abc.Transaction_Date__c}" /></apex:outputText> 
              
              
              <br/>{!abc.Offering_Name__c}<br/>{!abc.Channel__c}&nbsp;Transaction<br/>{!abc.Sentiment_Type__c}&nbsp;Sentiment</td>
              
      
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>
                      
                      
  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingeight" data-toggle="collapse" data-parent="#accordion" href="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                          <h4 class="panel-title">#8 What were the most important 'moments of Efficiency' for a given process/offering?</h4>
                        </a>
                        <div id="collapseeight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeight">
                          <div class="panel-body">
   
<br/><b style="font-weight: 500 !important;font-size: small !important;"> Process : </b>
                <apex:selectList value="{!selectedrecord}" size="1" onchange="generateFrameworks()" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!options}"> 
                    </apex:selectOptions>
           
                </apex:selectList>

                &nbsp; &nbsp;
                
                <b style="font-weight: 500 !important;font-size: small !important;"> Offering : </b>

                <apex:selectList value="{!selectedrecord6}" size="1" onchange="generateFrameworks()" style="width: 15%;font-size: 13px;margin-top: -4px;border-radius: 2px;height: 26px;">
                   
                    <apex:selectOptions value="{!optionspart6}"> 
                    </apex:selectOptions>
           
                </apex:selectList>
                
                
                &nbsp; &nbsp;
            <!--<apex:actionFunction name="displayrec" action="{!displayAspects}"> </apex:actionFunction>-->
            <!--    <button  class="slds-button slds-button--neutral"  onclick="dis();return false;" value="Go"  oncomplete="callArticle();" rerender="matFra,matFra1,matFra2,matFra3,demo,matFra4"></Button>-->
             
                <apex:commandButton styleclass="slds-button slds-button--brand " value="Go" action="{!modeTruth}" rerender="matFra,matFra1,matFra2,matFra3,demo,matFra4" style="color: black !important;"></apex:commandButton>
              


                              
                   
  <table id="contacttable" class="display" >
            <thead>
             <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Buy Transaction</th>
    <th style="border: 1px solid black;border-collapse: collapse;">Moment of Efficiency transaction</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!mapChild8}" var="mapChildvar8">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">
        
          {!mapChildvar8.Activity__r.Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!mapChildvar8.Transaction_Date__c}" /></apex:outputText> 
        
        <br/>{!mapChildvar8.Offering_Name__c}<br/>{!mapChildvar8.Channel__c}&nbsp;Transaction<br/>{!mapChildvar8.Sentiment_Type__c}&nbsp;Sentiment
       
        
    </td>
          
          <apex:repeat value="{!mapChild8[mapChildvar8]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">
                          
{!abc.Activity__r.Process_Name__c}<br/>
        <apex:outputText value="{0,date,MM/dd/yy}"> <apex:param value="{!abc.Transaction_Date__c}" /></apex:outputText> 
              
              
              <br/>{!abc.Offering_Name__c}<br/>{!abc.Channel__c}&nbsp;Transaction<br/>{!abc.Sentiment_Type__c}&nbsp;Sentiment</td>
              
      
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingNine" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                          <h4 class="panel-title">#9 Which process carried the most 'moments of Truth'?</h4>
                        </a>
                        <div id="collapseNine" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Process</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Truth</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ9}" var="KeyQVar1">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar1}</td>
          
          <apex:repeat value="{!KeyQ9[KeyQVar1]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>
                  



                <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingTen" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                          <h4 class="panel-title">#10 Which process carried the most 'moments of Pain'?</h4>
                        </a>
                        <div id="collapseTen" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTen">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Process</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Pain</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ10}" var="KeyQVar11">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar11}</td>
          
          <apex:repeat value="{!KeyQ10[KeyQVar11]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>






  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingEleven" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                          <h4 class="panel-title">#11 Which process carried the most 'moments of Efficiency'?</h4>
                        </a>
                        <div id="collapseEleven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEleven">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Process</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Efficiency</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ11}" var="KeyQVar111">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar111}</td>
          
          <apex:repeat value="{!KeyQ11[KeyQVar111]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>







  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingTwelen" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelen" aria-expanded="false" aria-controls="collapseTwelen">
                          <h4 class="panel-title">#12 Which process carried the most 'moments of Differentiation'?</h4>
                        </a>
                        <div id="collapseTwelen" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwelen">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Process</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Differentiation</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ12}" var="KeyQVar211">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar211}</td>
          
          <apex:repeat value="{!KeyQ12[KeyQVar211]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>



  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingThriten" data-toggle="collapse" data-parent="#accordion" href="#collapseThriten" aria-expanded="false" aria-controls="collapseThriten">
                          <h4 class="panel-title">#13 Which Offering carried the most 'moments of Differentiation'?</h4>
                        </a>
                        <div id="collapseThriten" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThriten">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Offering</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Differentiation</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ13}" var="KeyQVar13">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar13}</td>
          
          <apex:repeat value="{!KeyQ13[KeyQVar13]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>



  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingfourt" data-toggle="collapse" data-parent="#accordion" href="#collapsefourt" aria-expanded="false" aria-controls="collapsefourt">
                          <h4 class="panel-title">#14 Which Process carried the most 'moments of Efficiency'?</h4>
                        </a>
                        <div id="collapsefourt" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfourt">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Process</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Efficiency</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ14}" var="KeyQVar14">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar14}</td>
          
          <apex:repeat value="{!KeyQ14[KeyQVar14]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>





  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingfifteen" data-toggle="collapse" data-parent="#accordion" href="#collapsefifteen" aria-expanded="false" aria-controls="collapsefifteen">
                          <h4 class="panel-title">#15 Which Process carried the most 'moments of Pain'?</h4>
                        </a>
                        <div id="collapsefifteen" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfifteen">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>
                  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Process</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Pain</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ15}" var="KeyQVar15">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar15}</td>
          
          <apex:repeat value="{!KeyQ15[KeyQVar15]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>

                      
                      
                      
  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingSixteen" data-toggle="collapse" data-parent="#accordion" href="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                          <h4 class="panel-title">#16 Which Process carried the most 'moments of Truth'?</h4>
                        </a>
                        <div id="collapseSixteen" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSixteen">
                          <div class="panel-body">
<table id="contacttable" class="display" >

            <thead>  <tr style="background-color: #d1cfd0 !important;">
    <th style="border: 1px solid black;border-collapse: collapse;">Truth</th>
    <th style="border: 1px solid black;border-collapse: collapse;"># of Moments of Truth</th>
   </tr>
   </thead>
   <tbody>
        <apex:repeat value="{!KeyQ16}" var="KeyQVar16">
    <tr>       <td style="border: 1px solid black;border-collapse: collapse;">{!KeyQVar16}</td>
          
          <apex:repeat value="{!KeyQ16[KeyQVar16]}" var="abc">
              <td style="border: 1px solid black;border-collapse: collapse;">{!abc}</td>
              
          </apex:repeat>
              
              
          </tr>
            </apex:repeat>
   </tbody>
   </table>
        
                            
                          </div>
                        </div>
                      </div>
                      
                      
                      
                      
                      
  <div class="panel">
                        <a class="panel-heading collapsed" role="tab" id="headingSevety" data-toggle="collapse" data-parent="#accordion" href="#collapsesevety" aria-expanded="false" aria-controls="collapsesevety" onclick="CallMethod17();return false;">
                          <h4 class="panel-title">#17 What is the Digital Engagement Index?</h4>
                        </a>
                        <div id="collapsesevety" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSevety" style="background-color: bisque;">
                          <div class="panel-body">
                               
                <div class="col mobilespan_1_of_4 ">
                <div class="x_content">
                <div style="text-align: center; margin-bottom: 20px">
                  <span class="chart" data-percent="{!DigitalEngagementIndex}">
                                    <span class="percent"></span>
                  <canvas height="165" width="165" style="height: 110px; width: 110px;"></canvas></span>
                </div>

                <p><center>Digital Engagement Index</center></p>
                </div>
                </div>
                            
                          </div>
                        </div>
                      </div>
                      
                      
                      
                      
                      
                    </div>
                    <!-- end of accordion -->


                  </div>
                </div>
              </div>


              <!--<div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-align-left"></i> Collapsible / Accordion <small>Sessions</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                        </div> 
                      </div>-->
                    </div>
                    <apex:actionStatus id="status" >
            <apex:facet name="start">
            <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.75; z-index: 1000; background-color: black;">
                &nbsp;
            </div>
            <div style="position: fixed; left: 0; top: 0; bottom: 0; right: 0; z-index: 1001; margin: 30% 50%">
                <img src="http://upload.wikimedia.org/wikipedia/commons/e/ed/Cursor_Windows_Vista.gif" />
            </div>
            </apex:facet>
        </apex:actionStatus>
        
         
                </div> 
                <!-- /page content -->
                <!-- /footer content -->
            </div>
        </div>
        <!-- jQuery -->
     
           
   </apex:form>
   
          
       
 
   </body>
 
   
 <script>
function CallReportChart()
{
    
    callReport();
}
function Callsubmit()
{
submit();
}
function callforSentiment(){
    calldata1();
}

 function CallReportDeep()
 {
     callReport();
 }
 $(document).ready( function () {
     $ = jQuery.noConflict();



    
    var contactTable = $('[id$="contacttable"]').DataTable({
                    
    "paging":   true,
    "ordering": false,
    "info":     true,
    "bFilter": false, 
    "aLengthMenu": [ [2, 4, 8, -1], [2, 4, 8, "All"] ],
   "iDisplayLength": 4,
    
   
    "columnDefs": [{
            "defaultContent": "-",
  "targets": "_all",
    }]
               
    });

CallDatatable();
CallDatareport();

    init_EasyPieChart();
    init_EasyPieChart1();
    });    
 function CallDatareport()
 {
      var contactTable1;
     if ( $.fn.DataTable.isDataTable( '[id$="contacttable1"]' ) ) {
    contactTable1 = $('[id$="contacttable1"]').DataTable();
}
else {
         contactTable1 = $('[id$="contacttable1"]').DataTable({
        
     
        "fnDrawCallback": function ( oSettings ) {
            if ( oSettings.aiDisplay.length == 0 )
            {
                return;
            }
             
            var nTrs = $('[id$="contacttable1"] tbody tr');
            var iColspan = nTrs[0].getElementsByTagName('td').length;
            var sLastGroup = "";
            for ( var i=0 ; i<nTrs.length ; i++ )
            {
                var iDisplayIndex = oSettings._iDisplayStart + i;
                var sGroup = oSettings.aoData[ oSettings.aiDisplay[iDisplayIndex] ]._aData[0];
                if ( sGroup != sLastGroup )
                {
                    var nGroup = document.createElement( 'tr' );
                    var nCell = document.createElement( 'td' );
                    nCell.colSpan = iColspan;
                    nCell.className = "group";
                    nCell.innerHTML = sGroup;
                    nGroup.appendChild( nCell );
                    nTrs[i].parentNode.insertBefore( nGroup, nTrs[i] );
                    sLastGroup = sGroup;
                }
            }
        },
        
        
        
        "aoColumnDefs": [
            { "bVisible": false, "aTargets": [ 0 ] }
        ],
             "columnDefs": [{
    "defaultContent": "-",
    "targets": "_all",
   
    }],
        
        "aaSortingFixed": [[ 0, 'asc' ]],
        "aaSorting": [[ 1, 'asc' ]],
        "sDom": 'lfr<"giveHeight"t>ip',
        "paging":   true,
    "ordering": true,
    "info":     true,
    "bFilter": false,
    "aLengthMenu": [ [2, 4, 8, -1], [2, 4, 8, "All"] ],
   "iDisplayLength": 2,
    });

    
    
}
     
     
     
    // var contactTable1 = $('[id$="contacttable1"]').DataTable({
               
    // });     
 }
 
 function CallDatatable()
 {
     
    var contactTable5 = $('[id$="contacttable5"]').DataTable({
                    
    "paging":   true,
    "ordering": false,
    "info":     true,
    "bFilter": false,
    "aLengthMenu": [ [2, 4, 8, -1], [2, 4, 8, "All"] ],
   "iDisplayLength": 2,
    "columnDefs": [{
        
    "defaultContent": "-",
    "targets": "_all",
   
    }]
               
    });
 }
 
    function CallApexMethod()
    {
        console.log('@@@@@@@@@@@@@@@@@@@@');
        KeyQuestion2();
    }

function init_EasyPieChartIndex(){
    }




     function showmenu(){
         $('#collapseplus').hide();
          $('#collapseminus').show();
     }
     function hidemenu(){
         $('#collapseminus').hide();
          $('#collapseplus').show();
     }
     function showmenu2(){
         $('#collapseplus2').hide();
          $('#collapseminus2').show();
     }
     function hidemenu2(){
         $('#collapseminus2').hide();
          $('#collapseplus2').show();
     }
     function methodtoselectmonthmn(){
          
        methodtoselectmonth();
        $('#collapseminus').show();
        $('#collapseminus2').show();
        $('#collapseplus2').hide();
        $('#collapseplus').hide();
     }
     function goback(){
                      redirect();
                  }

  function init_EasyPieChart() {
    if ("undefined" != typeof $.fn.easyPieChart) {

        if({!netexperiencescore} < 50 ) {
          console.log("init_EasyPieChart"), $(".chart").easyPieChart({
            easing: "easeOutElastic",
            delay: 3e3,
            barColor: 'Red',
            trackColor: "#fff",
            scaleColor: !1,
            lineWidth: 20,
            trackWidth: 16,
            lineCap: "butt",
            onStep: function(a, b, c) {
                $(this.el).find(".percent").text(Math.round(c))
            }
        });
      }

        else if({!netexperiencescore} >= 50 && {!netexperiencescore} <= 70) {
          console.log("init_EasyPieChart"), $(".chart").easyPieChart({
            easing: "easeOutElastic",
            delay: 3e3,
            barColor: '#FFC200',
            trackColor: "#fff",
            scaleColor: !1,
            lineWidth: 20,
            trackWidth: 16,
            lineCap: "butt",
            onStep: function(a, b, c) {
                $(this.el).find(".percent").text(Math.round(c))
            }
        });
      }

      else {
          console.log("init_EasyPieChart"), $(".chart").easyPieChart({
            easing: "easeOutElastic",
            delay: 3e3,
            barColor: 'Green',
            trackColor: "#fff",
            scaleColor: !1,
            lineWidth: 20,
            trackWidth: 16,
            lineCap: "butt",
            onStep: function(a, b, c) {
                $(this.el).find(".percent").text(Math.round(c))
            }
        });
      }
        var a = window.chart = $(".chart").data("easyPieChart");
        $(".js_update").on("click", function() {
            a.update(200 * Math.random() - 100)
        });
        
        var b = $.fn.popover.Constructor.prototype.leave;
        $.fn.popover.Constructor.prototype.leave = function(a) {
            var d, e, c = a instanceof this.constructor ? a : $(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            b.call(this, a), a.currentTarget && (d = $(a.currentTarget).siblings(".popover"), e = c.timeout, d.one("mouseenter", function() {
                clearTimeout(e), d.one("mouseleave", function() {
                    $.fn.popover.Constructor.prototype.leave.call(c, c)
                })
            }))
        }, $("body").popover({
            selector: "[data-popover]",
            trigger: "click hover",
            delay: {
                show: 50,
                hide: 400
            }
        }) 
    }
}


//   function init_EasyPieChart1() {
//     if ("undefined" != typeof $.fn.easyPieChart) {

//         if({!DigitalEngagementIndex} < 50 ) {
//           console.log("init_EasyPieChart1"), $(".chart").easyPieChart({
//             easing: "easeOutElastic",
//             delay: 3e3,
//             barColor: 'Red',
//             trackColor: "#fff",
//             scaleColor: !1,
//             lineWidth: 20,
//             trackWidth: 16,
//             lineCap: "butt",
//             onStep: function(a, b, c) {
//                 $(this.el).find(".percent").text(Math.round(c))
//             }
//         });
//       }

//         else if({!DigitalEngagementIndex} >= 50 && {!DigitalEngagementIndex} <= 70) {
//           console.log("init_EasyPieChart1"), $(".chart").easyPieChart({
//             easing: "easeOutElastic",
//             delay: 3e3,
//             barColor: '#FFC200',
//             trackColor: "#fff",
//             scaleColor: !1,
//             lineWidth: 20,
//             trackWidth: 16,
//             lineCap: "butt",
//             onStep: function(a, b, c) {
//                 $(this.el).find(".percent").text(Math.round(c))
//             }
//         });
//       }

//       else {
//           console.log("init_EasyPieChart1"), $(".chart").easyPieChart({
//             easing: "easeOutElastic",
//             delay: 3e3,
//             barColor: 'Green',
//             trackColor: "#fff",
//             scaleColor: !1,
//             lineWidth: 20,
//             trackWidth: 16,
//             lineCap: "butt",
//             onStep: function(a, b, c) {
//                 $(this.el).find(".percent").text(Math.round(c))
//             }
//         });
//       }
//         var a = window.chart = $(".chart").data("easyPieChart");
//         $(".js_update").on("click", function() {
//             a.update(200 * Math.random() - 100)
//         });
        
//         var b = $.fn.popover.Constructor.prototype.leave;
//         $.fn.popover.Constructor.prototype.leave = function(a) {
//             var d, e, c = a instanceof this.constructor ? a : $(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
//             b.call(this, a), a.currentTarget && (d = $(a.currentTarget).siblings(".popover"), e = c.timeout, d.one("mouseenter", function() {
//                 clearTimeout(e), d.one("mouseleave", function() {
//                     $.fn.popover.Constructor.prototype.leave.call(c, c)
//                 })
//             }))
//         }, $("body").popover({
//             selector: "[data-popover]",
//             trigger: "click hover",
//             delay: {
//                 show: 50,
//                 hide: 400
//             }
//         }) 
//     }
// }



 </script>
</apex:page>
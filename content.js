$(document).ready(function(){
    $('form').data('serialize',$('form').serialize());
    function containsForm()
    {
        if($("form").length) 
            return $("form").html();
        else
            return false;
    }

    var formId = window.location.href.indexOf("docs.google.com/forms/") > - 1;
    /*if(formId){
        alert("Contains Form: " + containsForm());

        chrome.runtime.sendMessage({
            url: window.location.href,
            text: $('html').html(),
            form: containsForm()
        }) 
    }*/
    
    document.querySelector('form').addEventListener("click", function(){
        window.btn_clicked = true;      //set btn_clicked to true
    });

    window.onbeforeunload = function(){
        if(formId){
            if(!window.btn_clicked){
                return 'Are you sure you want to leave without finishing the form?'
            }
            else{
                alert("Form Saved: " + document.title)

                chrome.runtime.sendMessage({
                    url: window.location.href,
                    text: $('html').html(),
                    form: containsForm()
                })
            }
        }
    }

    /*$("form").click(function(event){
        window.onbeforeunload = function(){
            if(formId){
                alert("Form Saved: " + document.title)

                chrome.runtime.sendMessage({
                    url: window.location.href,
                    text: $('html').html(),
                    form: containsForm()
                })
            }
        }
    })*/

    
})
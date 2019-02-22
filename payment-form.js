

$(document).ready(function() {
        
        let paymentType = $('#element_26');     
        let numOfCans = $('#element_30');                                
        
        paymentType.change(setSubtotal);
        numOfCans.change(setSubtotal);
        
         $('#li_29').hide();
         $('#li_4_span_6').hide();
        
        $(document).on("submit", "form", function (e) {
                debugger;
                
                var oForm = $(this);
                var formId = oForm.attr("id");
                var firstValue = oForm.find("input").first().val();
                alert("Form '" + formId + " is being submitted, value of first input is: " + firstValue);
                // Do stuff 
                return false;
         })
        
        function setSubtotal() {
            
            paymentType = ($('#element_26') && $('#element_26')[0]) ? $('#element_26')[0] : {};
            numOfCans = ($('#element_30') && $('#element_30')[0]) ? $('#element_30')[0] : {};           
    
            let price;

            if (paymentType.value && numOfCans.value) {
                if (paymentType[paymentType.value -1 ].label === 'Annual - 12 monthly cleanings' && numOfCans.value == '0') {
                    price = 129.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans.value =='0') {
                    price = 35.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value =='0') {
                    price = 99.99;
                } else if (paymentType[paymentType.value - 1].label === 'Annual - 12 monthly cleanings' && numOfCans.value == '1') {
                    price = 199.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans.value == '1') {
                    price = 53.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value == '1') {
                    price = 149.99;
                } else if (paymentType[paymentType.value - 1].label === 'Annual - 12 monthly cleanings' && numOfCans.value == '2') {
                    price = 269.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans.value == '2') {
                    price = 71.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value =='2') {
                    price = 199.99;
                }   
                    
                if (price && price > 0) {
                    // Show  paragraph text   
                    $('#li_29').show(); 
                    $('#li_29')[0].innerText = "Subtotal: $" + price.toFixed(2);
                } else {  
                    $('#li_29').hide();
                }
            } else {
                $('#li_29').hide();            
            }    
        }
    });


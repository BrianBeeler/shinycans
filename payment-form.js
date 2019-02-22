

$(document).ready(function() {
        
        let paymentType = $('#element_26');     
        let numOfCans = $('#element_30');                                
        
        paymentType.change(setSubtotal);
        numOfCans.change(setSubtotal);
        
         $('#element_33').hide();
         $('#li_4_span_6').hide();
        
        function setSubtotal() {
            
            paymentType = ($('#element_26') && $('#element_26')[0]) ? $('#element_26')[0] : {};
            numOfCans = ($('#element_30') && $('#element_30')[0]) ? $('#element_30')[0] : {};           
    
            let price;
                
            debugger;    
                
            if (paymentType.value && numOfCans.value) {
                if (paymentType[paymentType.value -1 ].label === 'Annual - 12 monthly cleanings' && numOfCans.value == '1') {
                    price = 129.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans.value =='1') {
                    price = 35.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value =='1') {
                    price = 99.99;
                } else if (paymentType[paymentType.value - 1].label === 'Annual - 12 monthly cleanings' && numOfCans.value == '2') {
                    price = 199.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans.value == '2') {
                    price = 53.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value == '2') {
                    price = 149.99;
                } else if (paymentType[paymentType.value - 1].label === 'Annual - 12 monthly cleanings' && numOfCans.value == '3') {
                    price = 269.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans.value == '3') {
                    price = 71.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value =='3') {
                    price = 199.99;
                }   
                    
                if (price && price > 0) {
                    // Show  paragraph text   
                    $('#element_33').show();
                    $('#element_33')[0].value = "$" + price.toFixed(2);
                } else {  
                    $('#element_33').hide();
                }
            } else {
                $('#element_33').hide();            
            }    
        }
    });


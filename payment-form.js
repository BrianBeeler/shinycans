

$(document).ready(function() {
        
        let paymentType = $('#element_26');     
        let numOfCans = $('#element_30');                                
        
        paymentType.change(setSubtotal);
        numOfCans.change(setSubtotal);
        
         $('#li_29').hide();
         $('#li_4_span_6').hide();
        
        function setSubtotal() {
            
            paymentType = $('#element_26');
            numOfCans = $('#element_30');

            // Calc Subtitle

            let price;

            if (paymentType.value && numOfCans.value) {
                if (paymentType.value === 'Annual - 12 monthly cleanings' && numOfCans.value === '1') {
                    price = 129.99;
                } else if (paymentType.value === '3 Month - 3 Monthly Cleanings' && numOfCans.value === '1') {
                    price = 35.97;
                } else if (paymentType.value === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value === '1') {
                    price = 99.99;
                } else if (paymentType.value === 'Annual - 12 monthly cleanings' && numOfCans.value === '2') {
                    price = 199.99;
                } else if (paymentType.value === '3 Month - 3 Monthly Cleanings' && numOfCans.value === '2') {
                    price = 53.97;
                } else if (paymentType.value === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value === '2') {
                    price = 149.99;
                } else if (paymentType.value === 'Annual - 12 monthly cleanings' && numOfCans.value === '3') {
                    price = 269.99;
                } else if (paymentType.value === '3 Month - 3 Monthly Cleanings' && numOfCans.value === '3') {
                    price = 71.97;
                } else if (paymentType.value === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans.value === '3') {
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


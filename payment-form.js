

$(document).ready(function() {
        
        let paymentType = $('#element_26');     
        let numOfCans = $('#element_30');                                
        
        paymentType.change(setSubtotal);
        numOfCans.change(setSubtotal);
        
         $('#li_29').hide();
         $('#li_4_span_6').hide();
        
        function setSubtotal() {
            
            paymentType = ($('#element_26') && $('#element_26')[0]) ? $('#element_26')[0] : {};
            numOfCans = ($('#element_30') && $('#element_30')[0]) ? $('#element_26')[0] : {};           

            // Calc Subtitle
            console.log('before price declaration', paymentType, numOfCans);    
            let price;

            if (paymentType.value && numOfCans.value) {
                    debugger;
                if (paymentType[paymentType.value -1 ].label === 'Annual - 12 monthly cleanings' && numOfCans[numOfCans.value -1 ].label == '1') {
                    price = 129.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans[numOfCans.value - 1].label =='1') {
                    price = 35.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans[numOfCans.value - 1].label =='1') {
                    price = 99.99;
                } else if (paymentType[paymentType.value - 1].label === 'Annual - 12 monthly cleanings' && numOfCans[numOfCans.value - 1].label == '2') {
                    price = 199.99;
                } else if (paymentType[paymentType.value - 1].label === '3 Month - 3 monthly cleanings' && numOfCans[numOfCans.value - 1].label == '2') {
                    price = 53.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans[numOfCans.value - 1].label == '2') {
                    price = 149.99;
                } else if (paymentType[paymentType.value - 1].label === 'Annual - 12 monthly cleanings' && numOfCans[numOfCans.value - 1].label == '3') {
                    price = 269.99;
                } else if (paymentType[paymentType.value - 1].label === '3 month - 3 monthly cleanings' && numOfCans[numOfCans.value - 1].label == '3') {
                    price = 71.97;
                } else if (paymentType[paymentType.value - 1].label === 'Seasonal - 9 total cleanings: 3 spring, 3 summer, 3 fall' && numOfCans[numOfCans.value - 1].label =='3') {
                    price = 199.99;
                }   
                    
                if (price && price > 0) {
                    // Show  paragraph text
                    console.log('show price');    
                    $('#li_29').show(); 
                    $('#li_29')[0].innerText = "Subtotal: $" + price.toFixed(2);
                } else {
                    console.log('hide');    
                    $('#li_29').hide();
                }
            } else {
                $('#li_29').hide();            
            }    
        }
    });


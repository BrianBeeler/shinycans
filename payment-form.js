

$(document).ready(function() {
        let paymentType = $('#element_26');     
        let serviceType = $('#element_27');
        let numOfCans = $('#element_30');                                
        
        paymentType.change(setSubtotal);
        serviceType.change(setSubtotal);
        numOfCans.change(setSubtotal);
        
        console.log('numOFCans2',numOfCans);    
        
        function setSubtotal() {

            console.log('set subtotal called');
            
            paymentType = $('#element_26');
            serviceType = $('#element_27');
            numOfCans = $('#element_30');

            // Calc Subtitle

            let price;
                

                
            console.log('Updated');    

            if (paymentType[0].value && serviceType[0].value && numOfCans[0].value) {
                if (serviceType[0].value == '1' && numOfCans[0].value == '1') {
                    price = 11.95;
                } else if (serviceType[0].value == '1' && numOfCans[0].value == '2') {
                    price = 17.95;
                } else if (serviceType[0].value === '1' && numOfCans[0].value == '3') {
                    price = 23.95;
                } else if (serviceType[0].value === '2' && numOfCans[0].value === '1') {
                    price = 13.95;
                } else if (serviceType[0].value === '2' && numOfCans[0].value === '2') {
                    price = 20.95;
                } else if (serviceType[0].value === '2' && numOfCans[0].value === '3') {
                    price = 27.95;
                }

                if (paymentType[0].value == '3') {
                    // Do Nothing
                } else if (paymentType[0].value == '2') {
                    price *= 3;
                } else if (paymentType[0].value == '1') {
                    price *= 12;
                }
                    
                if (price && price > 0) {
                    // Show  paragraph text
                    $('#li-29').show();
                    debugger;    
                    $('#li-29')[0].innerText = "Subtotal: $" + price;
                } else {
                    $('#li-29').hide();
                }
            }
        }
    });


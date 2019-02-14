

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

            if (paymentType.value && serviceType.value && numOfCans.value) {
                if (serviceType.value === 'Cleaning' && numOfCans.value === '1') {
                    price = 11.95;
                } else if (serviceType.value === 'Cleaning' && numOfCans.value === '2') {
                    price = 17.95;
                } else if (serviceType.value === 'Cleaning' && numOfCans.value === '3') {
                    price = 23.95;
                } else if (serviceType.value === 'VIP' && numOfCans.value === '1') {
                    price = 13.95;
                } else if (serviceType.value === 'VIP' && numOfCans.value === '2') {
                    price = 20.95;
                } else if (serviceType.value === 'VIP' && numOfCans.value === '3') {
                    price = 27.95;
                }

                if (paymentType.value === 'Monthly') {
                    // Do Nothing
                } else if (paymentType.value === 'Quarterly') {
                    price *= 3;
                } else if (paymentType.value === 'Yearly') {
                    price *= 12;
                }
                
                console.log('price', price);

                // Show Subtitle
                $('#li-29').children[0].innerText = "Subtotal: " + price;
            }
        }
    });


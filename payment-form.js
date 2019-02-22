
    $(document).ready(function() {
        let paymentType = $('#element_26');
        let serviceType = $('#element_27');
        let numOfCans = $('#element_28');

        paymentType.onselect = setSubtotal;
        serviceType.onselect = setSubtotal;
        numOfCans.onselect = setSubtotal;
        
        // Hide the country select
        console.log($('#element_4_6'));
        $('#li_4_span_6').hide();
        setSubtotal();
        
        function setSubtotal() {

            paymentType = $('#element_26');
            serviceType = $('#element_27');
            numOfCans = $('#element_28');

            // Calc Subtitle

            let price;

            if (paymentType.value && numOfCans.value) {
                if (serviceType.value === 'Annual - 12 monthly cleanings' && numOfCans.value === '1') {
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

                // Show Subtitle
                $('#li-29').show()
                $('#li-29').children[0].innerText = "Subtotal: " + price;
            } else {
                $('#li-29').hide();   
            }
        }
    });


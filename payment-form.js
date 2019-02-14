    setSubtotal();

    function setSubtotal() {

    console.log('set subtotal called');

    const paymentType = $('#element_26');
    const serviceType = $('#element_27');
    const numOfCans = $('#element_28');

    // Calc Subtitle

    const price;

    if (paymentType.value && serviceType.value) {
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

        // Show Subtitle
        $('#li-29').children[0].innerText = "Subtotal: " + price;
    }
    }

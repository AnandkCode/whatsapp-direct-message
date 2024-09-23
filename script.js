document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const countryCode = document.getElementById('countryCode').value.trim();
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            
            const fullNumber = countryCode + phoneNumber;
            const whatsappUrl = `https://wa.me/${fullNumber}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
});

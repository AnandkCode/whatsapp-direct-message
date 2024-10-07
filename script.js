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
function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'Direct WhatsApp Message',
            text: 'Check out this Direct WhatsApp messaging app!',
            url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        alert('Sharing is not supported on this browser/device.');
    }
}

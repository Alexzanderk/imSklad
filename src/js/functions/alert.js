export const alertNotification = function() {
    const btn = document.querySelector('.ico-close');
    const alert = document.querySelector('.alert');
    btn.addEventListener('click', () => {
        alert.parentNode.removeChild(alert);
    });

    function close() {
        const parent = alert.parentNode;
        parent.removeChild(alert);
    }

    setTimeout(close, 3000);    
};
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            const passwordField = form.querySelector('input[name="password"]');
            if (passwordField && passwordField.value.length < 6) {
                event.preventDefault();
                alert('Пароль должен быть не менее 6 символов');
            }
        });
    });
});

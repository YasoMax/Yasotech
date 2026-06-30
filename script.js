function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    const modalBox = modal.querySelector('.glass-modal');
    
    if (modal.classList.contains('opacity-0')) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            modalBox.classList.remove('scale-95');
            modalBox.classList.add('scale-100');
        }, 10);
    } else {
        modalBox.classList.remove('scale-100');
        modalBox.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('opacity-0', 'pointer-events-none');
        }, 20);
    }
}

window.addEventListener('click', function(event) {
    if (event.target.id === 'login-modal') {
        toggleModal('login-modal');
    }
    if (event.target.id === 'register-modal') {
        toggleModal('register-modal');
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const loginModal = document.getElementById('login-modal');
        const registerModal = document.getElementById('register-modal');
        
        if (loginModal && !loginModal.classList.contains('opacity-0')) {
            toggleModal('login-modal');
        }
        if (registerModal && !registerModal.classList.contains('opacity-0')) {
            toggleModal('register-modal');
        }
    }
});

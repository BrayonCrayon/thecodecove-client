
const Swal = require('sweetalert2');

const Toast = Swal.mixin({
    toast: true,
    position: 'center-start',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export const showToast = (title: string, type: string = 'success') => {
    Toast.fire({
        title,
        icon: type,
    });
}

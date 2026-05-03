const scriptURL = 'https://script.google.com/macros/s/AKfycbxnhltgpos8_K9g9nI3B_R_Ty7qi5_AjS86Za9oJHuh6G135Iwn2WaCVFFucmAfTBYQyA/exec';

const glassConfig = {
    background: 'rgba(26, 26, 46, 0.8)', 
    color: '#fff', 
    backdrop: 'rgba(0, 0, 0, 0.4)', 
    confirmButtonColor: '#ff6b1a', 
    customClass: {
        popup: 'glass-popup' 
    }
};

const dataSiswa = function (nama, nisn, jenisKelamin, tanggalLahir, alamat, kelas, jurusan, noTelp, email) {
    return { nama, nisn, jenisKelamin, tanggalLahir, alamat, kelas, jurusan, noTelp, email };
};

const simpanData = async function () {
    const form = document.getElementById('formSiswa');
    const fields = ['nama', 'nisn', 'jenisKelamin', 'tanggalLahir', 'alamat', 'kelas', 'jurusan', 'noTelp', 'email'];
    const values = {};

    fields.forEach(field => {
        values[field] = document.getElementById(field).value;
    });

    if (Object.values(values).some(val => !val)) {
        Swal.fire({
            ...glassConfig,
            icon: 'warning',
            title: 'Data Belum Lengkap',
            text: 'Silahkan lengkapi semua data siswa!'
        });
        return;
    }

    const formData = new FormData(form);

    try {
        // Notifikasi Loading
        Swal.fire({
            ...glassConfig,
            title: 'Sedang Mengirim...',
            text: 'Mohon tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        // Notifikasi Berhasil
        Swal.fire({
            ...glassConfig,
            icon: 'success',
            title: 'Berhasil!',
            text: 'Data siswa berhasil disimpan ke database',
            timer: 2000,
            showConfirmButton: false
        });

        form.reset();

    } catch (error) {
        // Notifikasi Gagal
        Swal.fire({
            ...glassConfig,
            icon: 'error',
            title: 'Koneksi Gagal',
            text: 'Gagal mengirim data, silakan cek koneksi internet Anda.'
        });
        console.error(error);
    }
};
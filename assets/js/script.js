const scriptURL = 'https://script.google.com/macros/s/AKfycbxnhltgpos8_K9g9nI3B_R_Ty7qi5_AjS86Za9oJHuh6G135Iwn2WaCVFFucmAfTBYQyA/exec'

const dataSiswa = function (
    nama,
    nisn,
    jenisKelamin,
    tanggalLahir,
    alamat,
    kelas,
    jurusan,
    noTelp,
    email
) {

    const siswa = {
        nama,
        nisn,
        jenisKelamin,
        tanggalLahir,
        alamat,
        kelas,
        jurusan,
        noTelp,
        email
    }

    return siswa
}

const simpanData = async function () {

    const form = document.getElementById('formSiswa')

    const nama = document.getElementById('nama').value
    const nisn = document.getElementById('nisn').value
    const jenisKelamin = document.getElementById('jenisKelamin').value
    const tanggalLahir = document.getElementById('tanggalLahir').value
    const alamat = document.getElementById('alamat').value
    const kelas = document.getElementById('kelas').value
    const jurusan = document.getElementById('jurusan').value
    const noTelp = document.getElementById('noTelp').value
    const email = document.getElementById('email').value

    if (
        !nama ||
        !nisn ||
        !jenisKelamin ||
        !tanggalLahir ||
        !alamat ||
        !kelas ||
        !jurusan ||
        !noTelp ||
        !email
    ) {

        Swal.fire({
            icon: 'warning',
            text: 'Lengkapi semua data!'
        })

        return
    }

    const data = dataSiswa(
        nama,
        nisn,
        jenisKelamin,
        tanggalLahir,
        alamat,
        kelas,
        jurusan,
        noTelp,
        email
    )

    console.log(data)

    const formData = new FormData(form)

    try {

        Swal.fire({
        title: 'Mengirim Data...',
        text: 'Mohon tunggu sebentar',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })

        await fetch(scriptURL, {
            method: 'POST',
            body: formData
        })

        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Data siswa berhasil disimpan'
        })

        form.reset()

    } catch(error) {

        Swal.fire({
            icon: 'error',
            title: 'Gagal!',
            text: 'Data gagal dikirim'
        })

        console.log(error)
    }
}

const dataSiswa = function (nama, nisn, jenisKelamin, tanggalLahir, alamat, kelas, jurusan, noTelp, email) {

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

const simpanData = function () {
    const nama = document.getElementById('nama').value
    const nisn = Number(document.getElementById('nisn').value)
    const jenisKelamin = document.getElementById('jenisKelamin').value
    const tanggalLahir = document.getElementById('tanggalLahir').value
    const alamat = document.getElementById('alamat').value
    const kelas = document.getElementById('kelas').value
    const jurusan = document.getElementById('jurusan').value
    const noTelp = Number(document.getElementById('noTelp').value)
    const email = document.getElementById('email').value

    if(!nama || !nisn || !jenisKelamin || !tanggalLahir || !alamat || !kelas || !jurusan || !noTelp || !email) {
        Swal.fire({
            icon: 'warning',
            text: 'Lengkapi semua data!'
        })
        return
    }

    const data = dataSiswa(nama, nisn, jenisKelamin, tanggalLahir, alamat, kelas, jurusan, noTelp, email)
    console.log(data)

    Swal.fire({
        icon: 'success',
        text: 'Data berhasil disimpan!'
    })
}
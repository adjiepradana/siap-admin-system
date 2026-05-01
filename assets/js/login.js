const loginSystem = function (username, password) {
    if (username !== 'Admin') {
        return "Username salah"
    } else if (password !== '12345') {
        return "Password salah"
    }

    return "Login berhasil"
}

const handleLogin = function () {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (!username || !password) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Masukkan Username & Password'
        })

        return
    }

    const loginCheck = loginSystem(username, password)

    if (loginCheck === 'Login berhasil') {
        Swal.fire({
            icon: 'success',
            title: 'Login berhasil',
            timer: 1500,
            showConfirmButton: false
        })

        setTimeout(() => {
            window.location.href = "main.html"
        }, 1500)

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login gagal',
            text: loginCheck
        })
    }
}


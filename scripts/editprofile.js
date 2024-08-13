document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');

    if (username) {
        const dbRef = ref(database);

        get(child(dbRef, `users/${username}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                
                // 填充表单数据
                document.getElementById('username').textContent = userData.username;
                document.getElementById('email').value = userData.email;
                document.getElementById('fullName').value = userData.fullName;
                document.getElementById('birthday').value = userData.birthday;
                document.getElementById('address').value = userData.address;
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    // 保存更新后的信息
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const updatedData = {
                email: document.getElementById('email').value,
                fullName: document.getElementById('fullName').value,
                birthday: document.getElementById('birthday').value,
                address: document.getElementById('address').value,
            };

            // 更新用户信息到数据库
            set(ref(database, `users/${username}`), updatedData).then(() => {
                alert('Profile updated successfully!');
            }).catch((error) => {
                console.error(error);
                alert('Failed to update profile.');
            });
        });
    }
});

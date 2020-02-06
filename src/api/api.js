import * as axios from 'axios';

// =================================================================================== ЭТО DALL

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b2de6c08-33b5-4aa7-b1b9-f605b1978dd4"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
    },

    getUserProfile(userId) {
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId);
    },

    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    // .then(response => {
    //     this.props.setUserProfile(response.data)
    // });
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },

    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile(profile) {
        return instance.put('profile', profile);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha});
    },

    logout() {
        return instance.delete('/auth/login');
    }

    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true
    // }).then(response => {
    //     if(response.data.resultCode === 0) {
    //         let {email, id, login} = response.data.data
    //         this.props.setAuthUserData( email, id, login );
    //     }
    // });
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}
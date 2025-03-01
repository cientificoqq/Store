import { $authHost, $host } from ".";

export const registration = async(email, password) => {
    const response = await $host.post("/api/user/registration", {
        email,
        password,
        role: "ADMIN",
    });
    return response.data;
};

export const login = async(email, password) => {
    const response = await $host.post("/api/user/login", {
        email,
        password,
    });
    return response.data;
};

export const check = async() => {
    const response = await $authHost.get("/api/auth/check");
    return response.data;
};
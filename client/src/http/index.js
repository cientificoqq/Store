import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5002/";

const $host = axios.create({
    baseURL: API_URL,
});

const $authHost = axios.create({
    baseURL: API_URL,
});

const authInterceptor = (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

$authHost.interceptors.request.use(authInterceptor, (error) => {
    console.error("Ошибка в интерцепторе запроса:", error);
    return Promise.reject(error);
});

$host.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("Ошибка на сервере: ", error.response);

            if (error.response.status === 404) {
                alert("Запрашиваемая страница не найдена.");
            }
        } else if (error.request) {
            console.error("Ошибка запроса: ", error.request);
            alert("Не удалось получить ответ от сервера.");
        } else {
            console.error("Ошибка при настройке запроса: ", error.message);
            alert("Ошибка при выполнении запроса.");
        }
        return Promise.reject(error);
    }
);

export { $host, $authHost };
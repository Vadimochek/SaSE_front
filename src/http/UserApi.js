import {$authHost, $authHostRefresh, $host} from "./index";

/**
 * Асинхронная функция для регистрации
 * @function
 * @param {object} obj - объект с данными
 * @returns {object} Ответ
 */

export const registration = async (obj) => {
    console.log(process.env.REACT_APP_API_URL)
        const response = await $host.post('user/registration', obj)

        return response
}

/**
 * Асинхронная функция для авторизации
 * @function
 * @param {string} telephoneNumber - номер телефона
 * @param {string} password - пароль
 * @returns {object} Ответ
 */

export const login = async (telephoneNumber, password) => {
    const response = await $host.post('login', {telephoneNumber: telephoneNumber, password: password})

    return response
}

/**
 * Асинхронная функция для проверки роли пользователя
 * @function
 * @returns {object} Ответ
 */

export const check = async () => {
    const response = await $authHost.get('user/checkRole')
    return response
}

/**
 * Асинхронная функция для обновления доступа
 * @function
 * @returns {object} Ответ
 */

export const refresh = async () => {
    const response = await $authHostRefresh.post('refreshToken')
    return response
}

/**
 * Асинхронная функция для получения типа бренда
 * @function
 * @returns {object} Ответ получения
 */

export const getTypeBrand = async () => {
    const response = await $host.get('type/getAll')

    return response
}
/**
 * Асинхронная функция для получения устройства
 * @function
 * @param {string} query - запрос к серверу
 * @returns {object} Ответ получения
 */


export const getDevices = async (query) => {
    console.log('query', query)
    const response = await $host.get('device/getByParams' + query)
    return response
}

/**
 * Асинхронная функция для получения топа устройств
 * @function
 * @returns {object} Ответ получения
 */

export const getDevices_24 = async ()=>{
    const response = await $host.get('/device/getTopDevices')
    return response
}

/**
 * Асинхронная функция для создания устройства
 * @function
 * @param {object} data - объект с данными
 * @returns {object} Ответ создания
 */

export const giveDeviceServer = async (data) => {
    const response = await $authHost.post('device/add', data)
    return response
}

/**
 * Асинхронная функция для получения устройства
 * @function
 * @param {number} id - id нужного устройства
 * @returns {object} Ответ получения
 */

export const giveDeviceById = async (id) => {
    const response = await $host.get(`device/getById/${id}`)

    return response
}

/**
 * Асинхронная функция для создания типа
 * @function
 * @param {string} name - имя типа
 * @returns {object} Ответ создания
 */

export const postType = async (name) => {
    const response = await $authHost.post('type/add', {name: name})
    return response
}
/**
 * Асинхронная функция для создания бренда
 * @function
 * @param {object} data - объект с данными
 * @returns {object} Ответ создания
 */

export const postBrand = async (data) => {
    const response = await $authHost.post('brand/add', data)
    return response
}

/**
 * Асинхронная функция для создания заказа
 * @function
 * @param {object} data - объект с данными
 * @returns {object} Ответ создания
 */

export const AddOrderInfoToServer = async (data) => {

    const response = await $authHost.post('order/add', data)
    return response
}
/**
 * Асинхронная функция для получения заказов
 * @function
 * @returns {object} Ответ получения
 */

export const getAllOrders = async () => {
    const response = await $authHost.get('order/getAll')
    return response
}

/**
 * Асинхронная функция для получения изображения
 * @function
 * @param {string} name - необходимое имя
 * @returns {object} Ответ получения
 */

export const getImageByName = async (name) => {

    const response = await $authHost.get(process.env.REACT_APP_API_URL + 'takeImage/'+ name)
    return response
}

/**
 * Асинхронная функция для проверки данных
 * @function
 * @param {object} obj - данные от пользователя
 * @returns {object} Ответ проверки
 */

export const codeConfirmation = async (obj) => {

    const response = await $host.put('/user/codeConfirmation', obj)

    return response
}
/**
 * Асинхронная функция для изменения статуса заказа
 * @function
 * @param {object} data - данные в объекте
 * @returns {object} Ответ изменения
 */

export const changeOrderStatus = async (data) => {

    const response = await $authHost.put('order/changeStatusOfOrder', data)
    console.log(response.data)

    return response
}

/**
 * Асинхронная функция для получения заказа пользователя
 * @function
 * @returns {object} Ответ получения
 */

export const getOrderItemsUser = async () => {
    const response = await $authHost.get('/order/getAllByUser')
    return response
}

/**
 * Асинхронная функция для получения информации о пользователе
 * @function
 * @returns {object} Ответ получения
 */
export const getInfoAboutUser = async () => {
    const response = await $authHost.get ('/user/getInfoAboutUser')
    return response
}




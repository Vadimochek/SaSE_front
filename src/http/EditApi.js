import {$authHost} from "./index";

/**
 * Асинхронная функция для изменения бренда
 * @function
 * @param {string} name - изменённое имя
 * @param {number} id - id необходимой сущности
 * @returns {object} Ответ изменения
 */

export const editBrand = async (name, id) => {

    const response = await $authHost.put('brand/edit', {
            id: id,
            name: name,
    })
    return response
}

/**
 * Асинхронная функция для изменения типа
 * @function
 * @param {string} name - изменённое имя
 * @param {number} id - id необходимой сущности
 * @returns {object} Ответ изменения
 */

export const editType = async (name, id) => {

    const response = await $authHost.put('type/edit', {
            id: id,
            name: name,
    })
    return response
}

/**
 * Асинхронная функция для изменения устройства
 * @function
 * @param {object} obj - изменённое объект
 * @returns {object} Ответ изменения
 */

export const editDevice = async (obj) => {

    const response = await $authHost.put('device/edit', obj)
    return response
}
/**
 * Асинхронная функция для изменения ФИО
 * @function
 * @param {string} fio - изменённые данные
 * @returns {object} Ответ изменения
 */

export const editFio = async (fio) => {

    const response = await $authHost.put(`user/changeFIO/${fio}`)
    return response
}
/**
 * Асинхронная функция для изменения пола
 * @function
 * @param {boolean} gender - необходимый пол
 * @returns {object} Ответ изменения
 */

export const editGender = async (gender) => {

    const response = await $authHost.put(`user/changeGender/${gender}`)
    return response
}





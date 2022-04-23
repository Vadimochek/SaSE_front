import {$authHost} from "./index";

/**
 * Асинхронная функция для удаления бренда
 * @function
 * @param {number} id - id необходимой сущности
 * @returns {Object} Ответ удаления
 */

export const deleteBrand = async (id) => {
    const response = await $authHost.delete('brand/delete', {
        data: {
            id: id
        }
    })
    return response
}
/**
 * Асинхронная функция для удаления типа
 * @function
 * @param {number} id - id необходимой сущности
 * @returns {Object} Ответ удаления
 */

export const deleteType = async (id) => {
    const response = await $authHost.delete('type/delete', {
        data: {
            id: id
        }
    })
}
/**
 * Асинхронная функция для удаления устройства
 * @function
 * @param {number} id - id необходимой сущности
 * @returns {Object} Ответ удаления
 */

export const deleteDevice = async (id) => {
    const response = await $authHost.delete('device/delete', {
        data: {
            id: id
        }
    })
}
import {makeAutoObservable} from "mobx";
import {getDevices_24} from "../../../http/UserApi";

/**
 * Класс-хранилище главной страницы
 * @class
 */
export default class StoreMainShow {
    constructor() {
        this.devices = []
        makeAutoObservable(this)
    }




}
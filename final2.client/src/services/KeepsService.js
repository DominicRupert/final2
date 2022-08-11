import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import {logger} from ".../utils/Logger.js";

class KeepsService
{
    async getAll(){
        const res = await api.get('api/keeps');
        AppState.keeps = res.data;
    }
    async getKeep(id){
        const res = await api.get(`api/keeps/${id}`);
        AppState.activeKeep = res.data;
    }
    async createKeep(keep){
        const res = await api.post('api/keeps', keep);
        logger.log('created',res.data);
        AppState.activeKeep = res.data;
    }

    async delete(id){
        const res = await api.delete(`api/keeps/${id}`);
        logger.log('deleted',res.data);
        const index = AppState.activeVaultKeeps.findIndex(vk => vk.id === id);
        AppState.activeVaultKeeps.splice(index, 1);
    }


}
export const keepsService = new KeepsService();
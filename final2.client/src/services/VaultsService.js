import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { logger } from "../utils/Logger.js";

class VaultsService
{
    async getMyVaults(){
        const res = await api.get('account/vaults');
        logger.log('getMyVaults', res.data);
        AppState.myVaults = res.data;
    }
    async create(vault){
        const res = await api.post('api/vaults', vault);
        logger.log('created', res.data);
        AppState.activeUsersVaults.push(res.data);
    }
    async getVault(id){
        const res = await api.get(`api/vaults/${id}`);
        logger.log('getVault', res.data);
        AppState.activeVault = res.data;
    }
    async delete(id){
        const res = await api.delete(`api/vaults/${id}`);
        logger.log('deleted', res.data);
        const index = AppState.myVaults.findIndex(vault => vault.id === id);
        AppState.myVaults.splice(index, 1);
    }
}

export const vaultsService = new VaultsService();
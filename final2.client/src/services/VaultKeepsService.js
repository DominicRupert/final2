import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { logger } from "../utils/Logger.js";

class VaultKeepsService{

    async addKeep(vk){
        const res = await api.post('api/vaultkeeps', vk);
        logger.log('created', res.data);
    }
    async getVaultKeeps(vaultId){
        const res = await api.get('api/vaults/' + vaultId + '/keeps');
        logger.log('getVaultKeeps', res.data);
        AppState.activeVaultKeeps = res.data;
    }
    async deleteFromVault(vkId){
        const res = await api.delete('api/vaultkeeps/' + vkId);
        logger.log('deleted', res.data);
        const index = AppState.activeVaultKeeps.findIndex(vk => vk.id === vkId);
        AppState.activeVaultKeeps.splice(index, 1);
    }

}
export const vaultKeepsService = new VaultKeepsService();